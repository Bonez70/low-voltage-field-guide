/*
 * Security Low Voltage App: calculator math (v1, intrusion).
 * Pure functions, no DOM. Values come from content/intrusion/reference.md,
 * signed off by David on 2026-10-04. Change values there first, then here.
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

  function num(x, name) {
    var n = Number(x);
    if (!isFinite(n) || n < 0) throw new Error(name + ' must be a number of 0 or more');
    return n;
  }

  /**
   * devices: [{ qty, standbyMa, alarmMa }]
   * Returns totals in amps, required Ah (with 1.2 safety factor), and the next standard size.
   */
  function batteryStandby(devices, standbyHours, alarmMinutes) {
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
    var requiredAh = baseAh * SAFETY_FACTOR;
    var battery = null;
    for (var i = 0; i < BATTERY_SIZES_AH.length; i++) {
      if (BATTERY_SIZES_AH[i] >= requiredAh - 1e-9) { battery = BATTERY_SIZES_AH[i]; break; }
    }
    return {
      standbyA: standbyA, alarmA: alarmA, standbyHours: h, alarmHours: alarmHours,
      standbyAh: standbyAh, alarmAh: alarmAh, baseAh: baseAh, requiredAh: requiredAh,
      battery: battery, // null when more than the largest common size
      largestCommon: BATTERY_SIZES_AH[BATTERY_SIZES_AH.length - 1]
    };
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

  return {
    WIRE_OHMS_PER_FT: WIRE_OHMS_PER_FT, GAUGES: GAUGES, BATTERY_SIZES_AH: BATTERY_SIZES_AH,
    SAFETY_FACTOR: SAFETY_FACTOR, STANDBY_PRESETS: STANDBY_PRESETS,
    batteryStandby: batteryStandby, voltageDrop: voltageDrop, maxRunFt: maxRunFt, wireGauge: wireGauge
  };
});
