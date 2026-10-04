/*
 * Security Low Voltage App: calculator math.
 * Pure functions, no DOM. Intrusion values come from content/intrusion/reference.md,
 * signed off by David on 2026-10-04. Fire values come from content/fire/reference.md
 * and were signed off by David on 2026-10-04 (content/fire/VERIFY-SHEET.md). Access values come from
 * content/access/reference.md and were signed off by David on 2026-10-04 (content/access/VERIFY-SHEET.md:
 * psu-80, batt-factor, ul294-standby, wiegand-distance, osdp-distance). CCTV values come from
 * content/cctv/reference.md and are PENDING sign-off (content/cctv/VERIFY-SHEET.md: poe-classes,
 * poe-headroom, dori-ppm, storage-margin).
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

  // Access control (signed off; see the comment at the top).
  var ACCESS_PSU_SIZES_A = [1.5, 2.5, 4, 6, 10];       // common access power supply ratings
  var ACCESS_LOAD_LIMIT = 0.8;                          // load a supply to no more than 80% of its rating
  var ACCESS_BATTERY_SIZES_AH = [4, 7, 12, 18, 26, 40];
  var ACCESS_STANDBY_PRESETS = [
    { id: 'l2', label: 'UL 294 Level II', hours: 0.5 },
    { id: 'l3', label: 'UL 294 Level III', hours: 2 },
    { id: 'l4', label: 'UL 294 Level IV', hours: 4 }
  ];
  var READER_GAUGES = [22, 20, 18];
  var READER_MAX_FT = { wiegand: 500, osdp: 4000 };

  // CCTV (pending sign-off; see the comment at the top).
  // PoE classes: watts at the switch port (pse) and at the device (pd).
  var POE_CLASSES = [
    { cls: 1, std: '802.3af', pse: 4.0, pd: 3.84 },
    { cls: 2, std: '802.3af', pse: 7.0, pd: 6.49 },
    { cls: 3, std: '802.3af', pse: 15.4, pd: 12.95 },
    { cls: 4, std: '802.3at', pse: 30, pd: 25.5 },
    { cls: 5, std: '802.3bt Type 3', pse: 45, pd: 40 },
    { cls: 6, std: '802.3bt Type 3', pse: 60, pd: 51 },
    { cls: 7, std: '802.3bt Type 4', pse: 75, pd: 62 },
    { cls: 8, std: '802.3bt Type 4', pse: 90, pd: 71.3 }
  ];
  // Port types: the highest class each port supports.
  var POE_PORTS = [
    { id: 'af', label: '802.3af (PoE)', maxClass: 3 },
    { id: 'at', label: '802.3at (PoE+)', maxClass: 4 },
    { id: 'bt60', label: '802.3bt Type 3 (60 W)', maxClass: 6 },
    { id: 'bt90', label: '802.3bt Type 4 (90 W)', maxClass: 8 }
  ];
  var POE_LOAD_LIMIT = 0.8;     // design a switch to no more than 80% of its PoE budget
  var DORI = [                  // IEC 62676-4 pixels per meter
    { id: 'detect', label: 'Detect', ppm: 25 },
    { id: 'observe', label: 'Observe', ppm: 62.5 },
    { id: 'recognize', label: 'Recognize', ppm: 125 },
    { id: 'identify', label: 'Identify', ppm: 250 }
  ];
  var FT_PER_M = 3.28084;
  var STORAGE_MARGIN = 1.2;     // plan 20% above the calculated storage
  var RAID = { none: { label: 'None (JBOD)', parity: 0, min: 1 }, raid1: { label: 'RAID 1 (mirror)', parity: 0, min: 2 },
    raid5: { label: 'RAID 5', parity: 1, min: 3 }, raid6: { label: 'RAID 6', parity: 2, min: 4 } };

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

  /**
   * Access power supply and battery.
   * devices: [{ qty, normalMa, peakMa }]. normal = what draws all the time (maglocks, readers,
   * controller); peak = everything energized at once (strikes unlocked too). The supply is sized
   * on peak at 80% loading; the battery on normal current for the standby hours, with the 1.2 factor.
   */
  function accessPower(devices, standbyHours) {
    var nMa = 0, pMa = 0;
    (devices || []).forEach(function (d) {
      var q = num(d.qty, 'Quantity');
      nMa += q * num(d.normalMa, 'Normal current');
      pMa += q * num(d.peakMa, 'Peak current');
    });
    var h = num(standbyHours, 'Standby hours');
    var normalA = nMa / 1000, peakA = Math.max(pMa, nMa) / 1000;
    var minPsuA = peakA / ACCESS_LOAD_LIMIT;
    var psu = null, i;
    for (i = 0; i < ACCESS_PSU_SIZES_A.length; i++) if (ACCESS_PSU_SIZES_A[i] >= minPsuA - 1e-9) { psu = ACCESS_PSU_SIZES_A[i]; break; }
    var baseAh = normalA * h, requiredAh = baseAh * SAFETY_FACTOR, battery = null;
    if (requiredAh > 0) for (i = 0; i < ACCESS_BATTERY_SIZES_AH.length; i++) if (ACCESS_BATTERY_SIZES_AH[i] >= requiredAh - 1e-9) { battery = ACCESS_BATTERY_SIZES_AH[i]; break; }
    return {
      normalA: normalA, peakA: peakA, minPsuA: minPsuA, psu: psu, loadPct: psu ? peakA / psu * 100 : null,
      largestPsu: ACCESS_PSU_SIZES_A[ACCESS_PSU_SIZES_A.length - 1], standbyHours: h, baseAh: baseAh,
      requiredAh: requiredAh, battery: requiredAh > 0 ? battery : 0,
      largestBattery: ACCESS_BATTERY_SIZES_AH[ACCESS_BATTERY_SIZES_AH.length - 1], factor: SAFETY_FACTOR
    };
  }

  /**
   * Reader cable: data distance limit for the protocol plus reader power voltage drop.
   * protocol 'wiegand' or 'osdp'; readerMa in mA.
   */
  function readerRun(protocol, gauge, oneWayFt, supplyV, readerMa, minV) {
    var maxFt = READER_MAX_FT[protocol];
    if (maxFt === undefined) throw new Error('Unknown reader protocol');
    var I = num(readerMa, 'Reader current') / 1000;
    var vd = voltageDrop(I, gauge, oneWayFt, supplyV, minV);
    vd.currentA = I;
    vd.protocol = protocol;
    vd.maxDataFt = maxFt;
    vd.dataOk = num(oneWayFt, 'Length') <= maxFt;
    var Vs = num(supplyV, 'Supply voltage');
    vd.maxPowerFt = minV !== undefined && minV !== null && minV !== '' ? (Vs > Number(minV) ? maxRunFt(I, gauge, Vs - Number(minV)) : 0) : null;
    return vd;
  }

  /** Smallest PoE class whose device power covers the draw, or null if over Class 8. */
  function poeClassFor(watts) {
    for (var i = 0; i < POE_CLASSES.length; i++) if (POE_CLASSES[i].pd >= watts - 1e-9) return POE_CLASSES[i];
    return null;
  }

  /**
   * PoE switch budget. devices: [{ qty, watts }] with watts = the device's maximum draw (spec sheet).
   * mode 'max': each port is charged the device's draw plus worst-case cable loss for its class
   * (draw × port W ÷ device W of that class). mode 'class': each port is charged its class's full port W,
   * as switches that allocate by class do. port: id from POE_PORTS.
   */
  function poeBudget(devices, budgetW, port, mode) {
    var B = num(budgetW, 'Switch PoE budget');
    var pt = POE_PORTS.filter(function (p) { return p.id === port; })[0];
    if (!pt) throw new Error('Unknown port type');
    var rows = [], pdW = 0, portW = 0, ports = 0, tooBig = 0, overPort = 0;
    (devices || []).forEach(function (d) {
      var q = num(d.qty, 'Quantity'), w = num(d.watts, 'Device watts');
      var c = poeClassFor(w);
      var each = c ? (mode === 'class' ? c.pse : w * c.pse / c.pd) : null;
      var ok = !!c && c.cls <= pt.maxClass;
      rows.push({ qty: q, watts: w, cls: c ? c.cls : null, std: c ? c.std : null, portW: each, portOk: ok });
      ports += q; pdW += q * w;
      if (each !== null) portW += q * each;
      if (!c) tooBig += q; else if (!ok) overPort += q;
    });
    var limitW = B * POE_LOAD_LIMIT;
    return {
      rows: rows, ports: ports, deviceW: pdW, portW: portW, budgetW: B, limitW: limitW, minBudgetW: portW / POE_LOAD_LIMIT,
      loadPct: B > 0 ? portW / B * 100 : null, pass: portW <= limitW + 1e-9 && !tooBig && !overPort,
      overBudget: portW > limitW + 1e-9, tooBig: tooBig, overPort: overPort, port: pt, mode: mode === 'class' ? 'class' : 'max'
    };
  }

  /**
   * Recording storage. groups: [{ qty, mbps }] per-camera bitrate. pct = percent of the time recorded.
   * driveTb and raid (key of RAID) are optional: with them, the drive count to hold the result.
   */
  function storage(groups, hoursPerDay, pct, days, driveTb, raid) {
    var mbps = 0;
    (groups || []).forEach(function (g) { mbps += num(g.qty, 'Quantity') * num(g.mbps, 'Bitrate'); });
    var h = num(hoursPerDay, 'Hours per day');
    if (h > 24) throw new Error('Hours per day must be 24 or less');
    var p = num(pct, 'Percent recorded');
    if (p > 100) throw new Error('Percent recorded must be 100 or less');
    var D = num(days, 'Days to keep');
    var gbPerDay = mbps * 3600 * h * (p / 100) / 8 / 1000;
    var tb = gbPerDay * D / 1000;
    var res = { mbps: mbps, gbPerDay: gbPerDay, tb: tb, requiredTb: tb * STORAGE_MARGIN, margin: STORAGE_MARGIN, days: D };
    if (driveTb !== undefined && driveTb !== null && driveTb !== '' && Number(driveTb) > 0) {
      var size = num(driveTb, 'Drive size'), r = RAID[raid || 'none'];
      if (!r) throw new Error('Unknown RAID level');
      var data = Math.max(1, Math.ceil(res.requiredTb / size - 1e-9));
      var total = raid === 'raid1' ? data * 2 : data + r.parity;
      total = Math.max(total, r.min);
      if (raid === 'raid1' && total % 2) total++;
      res.drives = total;
      res.driveTb = size;
      res.usableTb = raid === 'raid1' ? total / 2 * size : (total - r.parity) * size;
      res.raid = raid || 'none';
    }
    return res;
  }

  /** Horizontal field of view in degrees from focal length and sensor width (mm). */
  function hfovFromFocal(focalMm, sensorWidthMm) {
    var f = num(focalMm, 'Focal length'), w = num(sensorWidthMm, 'Sensor width');
    if (f === 0) throw new Error('Focal length must be more than 0');
    return 2 * Math.atan(w / (2 * f)) * 180 / Math.PI;
  }

  /**
   * Scene width and pixel density at a distance, and the farthest distance for each DORI level.
   * hPixels = horizontal resolution; hfovDeg = horizontal field of view.
   */
  function fieldOfView(hPixels, hfovDeg, distanceFt) {
    var px = num(hPixels, 'Horizontal pixels'), a = num(hfovDeg, 'Field of view'), d = num(distanceFt, 'Distance');
    if (a <= 0 || a >= 180) throw new Error('Field of view must be between 0 and 180 degrees');
    var t = Math.tan(a / 2 * Math.PI / 180);
    var width = 2 * d * t;
    var ppf = width > 0 ? px / width : Infinity;
    var ppm = ppf * FT_PER_M;
    var level = null;
    var levels = DORI.map(function (L) {
      var ppfTarget = L.ppm / FT_PER_M;
      var ok = ppm >= L.ppm - 1e-9;
      if (ok) level = L;
      return { id: L.id, label: L.label, ppm: L.ppm, ppf: ppfTarget, ok: ok, maxFt: px / ppfTarget / (2 * t) };
    });
    return { widthFt: width, ppf: ppf, ppm: ppm, level: level, levels: levels, hfov: a };
  }

  return {
    POE_CLASSES: POE_CLASSES, POE_PORTS: POE_PORTS, POE_LOAD_LIMIT: POE_LOAD_LIMIT, DORI: DORI, FT_PER_M: FT_PER_M,
    STORAGE_MARGIN: STORAGE_MARGIN, RAID: RAID,
    poeClassFor: poeClassFor, poeBudget: poeBudget, storage: storage, hfovFromFocal: hfovFromFocal, fieldOfView: fieldOfView,
    ACCESS_PSU_SIZES_A: ACCESS_PSU_SIZES_A, ACCESS_LOAD_LIMIT: ACCESS_LOAD_LIMIT, ACCESS_BATTERY_SIZES_AH: ACCESS_BATTERY_SIZES_AH,
    ACCESS_STANDBY_PRESETS: ACCESS_STANDBY_PRESETS, READER_GAUGES: READER_GAUGES, READER_MAX_FT: READER_MAX_FT,
    accessPower: accessPower, readerRun: readerRun,
    FIRE_BATTERY_SIZES_AH: FIRE_BATTERY_SIZES_AH, FIRE_STANDBY_PRESETS: FIRE_STANDBY_PRESETS,
    FIRE_GAUGES: FIRE_GAUGES, NAC_START_V: NAC_START_V, NAC_MIN_V: NAC_MIN_V,
    fireBattery: fireBattery, nacDrop: nacDrop,
    WIRE_OHMS_PER_FT: WIRE_OHMS_PER_FT, GAUGES: GAUGES, BATTERY_SIZES_AH: BATTERY_SIZES_AH,
    SAFETY_FACTOR: SAFETY_FACTOR, STANDBY_PRESETS: STANDBY_PRESETS,
    batteryStandby: batteryStandby, voltageDrop: voltageDrop, maxRunFt: maxRunFt, wireGauge: wireGauge
  };
});
