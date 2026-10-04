/*
 * Security Low Voltage App: calculator math.
 * Pure functions, no DOM. Intrusion values come from content/intrusion/reference.md,
 * signed off by David on 2026-10-04. Fire values come from content/fire/reference.md
 * and were signed off by David on 2026-10-04 (content/fire/VERIFY-SHEET.md).
 * Change values in the content first, then here.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SLVCalc = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Solid copper at 68 °F (20 °C), ohms per foot, per conductor.
  var WIRE_OHMS_PER_FT = { 22: 0.0161, 20: 0.0102, 18: 0.00639, 16: 0.00402, 14: 0.00253, 12: 0.00159 };
  // Thinnest to thickest.
  var GAUGES = [22, 20, 18, 16, 14, 12];
  var BATTERY_SIZES_AH = [4, 5, 7, 8, 12, 18];
  var SAFETY_FACTOR = 1.2;
  var STANDBY_PRESETS = [
    { id: 'res', label: 'UL residential burglary', hours: 4 },
    { id: 'com', label: 'UL commercial / certificated burglary', hours: 24 }
  ];

  // Fire alarm (NFPA 72 based; pending sign-off: fire verify items batt-*, nac-*).
  var FIRE_BATTERY_SIZES_AH = [7, 12, 18, 26, 33, 40, 55, 100];
  var FIRE_STANDBY_PRESETS = [
    { id: 'hs', label: 'Horn/strobe', hours: 24, alarm: 5 },
    { id: 'voice', label: 'Voice evacuation', hours: 24, alarm: 15 }
  ];
  var FIRE_GAUGES = [18, 16, 14, 12];
  var NAC_START_V = 20.4;   // battery at end of standby (85% of 24 V)
  var NAC_MIN_V = 16;       // regulated 24 VDC appliance minimum

  function num(x, name) {
    var n = Number(x);
    if (!isFinite(n) || n < 0) throw new Error(name + ' must be a number of 0 or more');
    return n;
  }

  /**
   * devices: [{ qty, standbyMa, alarmMa }]
   * Returns totals in amps, required Ah (with the safety factor), and the next standard size.
   * opts: { sizes, factor } to override the intrusion battery sizes and 1.2 factor.
   */
  function batteryStandby(devices, standbyHours, alarmMinutes, opts) {
    var sizes = (opts && opts.sizes) || BATTERY_SIZES_AH;
    var factor = (opts && opts.factor) || SAFETY_FACTOR;
    var sbMa = 0, alMa = 0;
    (devices || []).forEach(function (d) {
      var q = num(d.qty, 'Quantity');
      sbMa += q * num(d.standbyMa, 'Standby current');
      alMa += q * num(d.alarmMa, 'Alarm current');
    });
    var h = num(standbyHours, 'Standby hours');
    var alarmHours = num(alarmMinutes, 'Alarm minutes') / 60;
    var standbyA = sbMa / 1000, alarmA = alMa / 1000;
    var standbyAh = standbyA * h;
    var alarmAh = alarmA * alarmHours;
    var baseAh = standbyAh + alarmAh;
    var requiredAh = baseAh * factor;
    var battery = null;
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i] >= requiredAh - 1e-9) { battery = sizes[i]; break; }
    }
    return {
      standbyA: standbyA, alarmA: alarmA, standbyHours: h, alarmHours: alarmHours,
      standbyAh: standbyAh, alarmAh: alarmAh, baseAh: baseAh, requiredAh: requiredAh,
      battery: battery, // null when more than the largest common size
      largestCommon: sizes[sizes.length - 1], factor: factor
    };
  }

  /** Fire alarm battery: same math with fire battery sizes and the 20% margin. */
  function fireBattery(devices, standbyHours, alarmMinutes) {
    return batteryStandby(devices, standbyHours, alarmMinutes, { sizes: FIRE_BATTERY_SIZES_AH, factor: SAFETY_FACTOR });
  }

  function ohmsPerFt(gauge) {
    var r = WIRE_OHMS_PER_FT[gauge];
    if (r === undefined) throw new Error('No resistance value for ' + gauge + ' AWG');
    return r;
  }

  /** Drop = 2 x one-way length x current x ohms per foot. */
  function voltageDrop(currentA, gauge, oneWayFt, supplyV, deviceMinV) {
    var I = num(currentA, 'Current'), L = num(oneWayFt, 'Length'), Vs = num(supplyV, 'Supply voltage');
    var rft = ohmsPerFt(gauge);
    var loopOhms = 2 * L * rft;
    var drop = loopOhms * I;
    var endV = Vs - drop;
    var pct = Vs > 0 ? (drop / Vs) * 100 : 0;
    var res = { loopOhms: loopOhms, drop: drop, endV: endV, pct: pct, ohmsPerFt: rft };
    if (deviceMinV !== undefined && deviceMinV !== null && deviceMinV !== '') {
      res.deviceMinV = num(deviceMinV, 'Device minimum voltage');
      res.pass = endV >= res.deviceMinV;
      res.marginV = endV - res.deviceMinV;
    }
    return res;
  }

  /** Longest one-way run (ft) for a gauge that keeps the drop at or under allowedDropV. */
  function maxRunFt(currentA, gauge, allowedDropV) {
    var I = num(currentA, 'Current');
    if (I === 0) return Infinity;
    return num(allowedDropV, 'Allowable drop') / (2 * I * ohmsPerFt(gauge));
  }

  /**
   * Smallest (thinnest) gauge whose drop is within the allowance.
   * allowance: { volts } or { percent } of supplyV.
   */
  function wireGauge(currentA, oneWayFt, supplyV, allowance) {
    var Vs = num(supplyV, 'Supply voltage');
    var allowedV = allowance && allowance.percent !== undefined
      ? Vs * num(allowance.percent, 'Allowable drop') / 100
      : num(allowance && allowance.volts, 'Allowable drop');
    var rows = GAUGES.map(function (g) {
      var vd = voltageDrop(currentA, g, oneWayFt, Vs);
      return { gauge: g, drop: vd.drop, endV: vd.endV, pct: vd.pct, ok: vd.drop <= allowedV + 1e-9,
               maxRunFt: maxRunFt(currentA, g, allowedV) };
    });
    var pick = null;
    for (var i = 0; i < rows.length; i++) if (rows[i].ok) { pick = rows[i].gauge; break; }
    return { allowedV: allowedV, gauge: pick, rows: rows };
  }

  /**
   * NAC voltage drop, all appliance current lumped at the far end (the conservative method).
   * appliances: [{ qty, ma }] current per appliance in mA, ideally at its minimum operating voltage.
   */
  function nacDrop(appliances, gauge, oneWayFt, sourceV, minV, ratingA) {
    var ma = 0;
    (appliances || []).forEach(function (a) { ma += num(a.qty, 'Quantity') * num(a.ma, 'Appliance current'); });
    var I = ma / 1000;
    var vd = voltageDrop(I, gauge, oneWayFt, sourceV, minV);
    vd.currentA = I;
    if (ratingA !== undefined && ratingA !== null && ratingA !== '') {
      vd.ratingA = num(ratingA, 'NAC rating');
      vd.overRating = I > vd.ratingA + 1e-9;
    }
    var Vs = num(sourceV, 'Source voltage'), Vmin = num(minV, 'Appliance minimum voltage');
    vd.maxRunFt = Vs > Vmin ? maxRunFt(I, gauge, Vs - Vmin) : 0;
    return vd;
  }

  return {
    FIRE_BATTERY_SIZES_AH: FIRE_BATTERY_SIZES_AH, FIRE_STANDBY_PRESETS: FIRE_STANDBY_PRESETS,
    FIRE_GAUGES: FIRE_GAUGES, NAC_START_V: NAC_START_V, NAC_MIN_V: NAC_MIN_V,
    fireBattery: fireBattery, nacDrop: nacDrop,
    WIRE_OHMS_PER_FT: WIRE_OHMS_PER_FT, GAUGES: GAUGES, BATTERY_SIZES_AH: BATTERY_SIZES_AH,
    SAFETY_FACTOR: SAFETY_FACTOR, STANDBY_PRESETS: STANDBY_PRESETS,
    batteryStandby: batteryStandby, voltageDrop: voltageDrop, maxRunFt: maxRunFt, wireGauge: wireGauge
  };
});
