// Run: node calc.test.js
const assert = require('assert');
const C = require('./calc.js');
const near = (a, b, tol = 1e-3) => assert.ok(Math.abs(a - b) <= tol, `${a} != ${b}`);
let n = 0; const t = (name, fn) => { fn(); n++; console.log('ok', name); };

t('battery: hand-worked residential example', () => {
  // Panel 120 mA + 4 PIRs at 15 mA standby; siren 1000 mA in alarm. 4 h standby, 4 min alarm.
  const r = C.batteryStandby([
    { qty: 1, standbyMa: 120, alarmMa: 120 },
    { qty: 4, standbyMa: 15, alarmMa: 15 },
    { qty: 1, standbyMa: 0, alarmMa: 1000 }
  ], 4, 4);
  near(r.standbyA, 0.18); near(r.alarmA, 1.18);
  near(r.standbyAh, 0.72); near(r.alarmAh, 1.18 * 4 / 60);
  near(r.requiredAh, (0.72 + 0.078667) * 1.2);   // 0.9584
  assert.strictEqual(r.battery, 4);
});
t('battery: 24 h commercial rounds up to 8 Ah', () => {
  const r = C.batteryStandby([{ qty: 1, standbyMa: 250, alarmMa: 1500 }], 24, 15);
  near(r.requiredAh, (6 + 0.375) * 1.2); // 7.65
  assert.strictEqual(r.battery, 8);
});
t('battery: exact standard size is not bumped up', () => {
  const r = C.batteryStandby([{ qty: 1, standbyMa: 1250, alarmMa: 0 }], 4, 0); // 5 Ah x 1.2 = 6
  near(r.requiredAh, 6); assert.strictEqual(r.battery, 7);
  const r2 = C.batteryStandby([{ qty: 1, standbyMa: 2500, alarmMa: 0 }], 4, 0); // 10 Ah x 1.2 = 12
  near(r2.requiredAh, 12); assert.strictEqual(r2.battery, 12);
});
t('battery: over 18 Ah returns null', () => {
  const r = C.batteryStandby([{ qty: 1, standbyMa: 1000, alarmMa: 0 }], 24, 0);
  near(r.requiredAh, 28.8); assert.strictEqual(r.battery, null);
});
t('battery: bad input throws', () => {
  assert.throws(() => C.batteryStandby([{ qty: 1, standbyMa: -5, alarmMa: 0 }], 4, 4));
});
t('voltage drop: reference card formula', () => {
  // 0.5 A, 18 AWG, 150 ft one way, 12 V: 2*150*0.5*0.00639 = 0.9585 V
  const r = C.voltageDrop(0.5, 18, 150, 12, 10.5);
  near(r.drop, 0.9585); near(r.endV, 11.0415); near(r.pct, 7.9875);
  assert.strictEqual(r.pass, true);
});
t('voltage drop: fail case', () => {
  const r = C.voltageDrop(1, 22, 200, 12, 10.5); // 2*200*1*0.0161 = 6.44 V
  near(r.drop, 6.44); assert.strictEqual(r.pass, false);
});
t('wire gauge: picks thinnest that passes', () => {
  // 0.5 A, 150 ft, 12 V, 1.2 V allowed. 22: 2.415 no, 20: 1.53 no, 18: 0.9585 yes
  const r = C.wireGauge(0.5, 150, 12, { volts: 1.2 });
  assert.strictEqual(r.gauge, 18);
  const p = C.wireGauge(0.5, 150, 12, { percent: 10 });
  near(p.allowedV, 1.2); assert.strictEqual(p.gauge, 18);
});
t('wire gauge: none works', () => {
  const r = C.wireGauge(3, 500, 12, { volts: 1 });
  assert.strictEqual(r.gauge, null);
});
t('max run', () => near(C.maxRunFt(0.5, 18, 1.2), 1.2 / (2 * 0.5 * 0.00639)));
t('fire battery: 24 h + 5 min with 20% margin', () => {
  // 190.6 mA standby x 24 h = 4.5744 Ah; 1510.6 mA x 5/60 h = 0.12588 Ah; x 1.2 = 5.6403 Ah -> 7 Ah
  const r = C.fireBattery([
    { qty: 1, standbyMa: 180, alarmMa: 300 },
    { qty: 30, standbyMa: 0.3, alarmMa: 0.3 },
    { qty: 4, standbyMa: 0.4, alarmMa: 0.4 },
    { qty: 10, standbyMa: 0, alarmMa: 60 },
    { qty: 4, standbyMa: 0, alarmMa: 150 }
  ], 24, 5);
  near(r.requiredAh, (0.1906 * 24 + 1.5106 * 5 / 60) * 1.2);
  assert.strictEqual(r.battery, 7);
});
t('fire battery: uses fire sizes above 18 Ah', () => {
  const r = C.fireBattery([{ qty: 1, standbyMa: 700, alarmMa: 4000 }], 24, 15); // (16.8 + 1) * 1.2 = 21.36
  near(r.requiredAh, 21.36); assert.strictEqual(r.battery, 26);
  assert.strictEqual(C.fireBattery([{ qty: 1, standbyMa: 5000, alarmMa: 0 }], 24, 0).battery, null);
});
t('intrusion battery unchanged by fire options', () => {
  assert.strictEqual(C.batteryStandby([{ qty: 1, standbyMa: 1000, alarmMa: 0 }], 24, 0).battery, null);
});
t('NAC drop: lumped load at the end', () => {
  // 1160 mA, 14 AWG, 250 ft: 2*250*1.16*0.00253 = 1.4674 V; 20.4 - 1.4674 = 18.9326 V
  const r = C.nacDrop([{ qty: 6, ma: 75 }, { qty: 3, ma: 160 }, { qty: 1, ma: 230 }], 14, 250, 20.4, 16, 2);
  near(r.currentA, 1.16); near(r.drop, 1.4674); near(r.endV, 18.9326);
  assert.strictEqual(r.pass, true); assert.strictEqual(r.overRating, false);
  near(r.maxRunFt, 4.4 / (2 * 1.16 * 0.00253), 0.01);
});
t('NAC drop: fails and over rating', () => {
  const r = C.nacDrop([{ qty: 20, ma: 150 }], 18, 300, 20.4, 16, 2.5); // 3 A; 2*300*3*0.00639 = 11.502 V
  near(r.drop, 11.502); assert.strictEqual(r.pass, false); assert.strictEqual(r.overRating, true);
});
t('access power: example door set', () => {
  // normal 250 + 4*100 + 2*500 + 0 + 2*25 = 1700 mA; peak 250 + 4*150 + 2*500 + 2*300 + 2*25 = 2500 mA
  const r = C.accessPower([
    { qty: 1, normalMa: 250, peakMa: 250 },
    { qty: 4, normalMa: 100, peakMa: 150 },
    { qty: 2, normalMa: 500, peakMa: 500 },
    { qty: 2, normalMa: 0, peakMa: 300 },
    { qty: 2, normalMa: 25, peakMa: 25 }
  ], 4);
  near(r.normalA, 1.7); near(r.peakA, 2.5); near(r.minPsuA, 3.125);
  assert.strictEqual(r.psu, 4); near(r.loadPct, 62.5);
  near(r.requiredAh, 1.7 * 4 * 1.2); assert.strictEqual(r.battery, 12); // 8.16 Ah
});
t('access power: exact 80% fits, over largest returns null', () => {
  assert.strictEqual(C.accessPower([{ qty: 1, normalMa: 0, peakMa: 2000 }], 0).psu, 2.5);
  assert.strictEqual(C.accessPower([{ qty: 1, normalMa: 0, peakMa: 2000 }], 0).battery, 0);
  assert.strictEqual(C.accessPower([{ qty: 1, normalMa: 9000, peakMa: 9000 }], 4).psu, null);
  assert.strictEqual(C.accessPower([{ qty: 1, normalMa: 9000, peakMa: 9000 }], 4).battery, null); // 43.2 Ah
});
t('access power: peak never below normal', () => {
  near(C.accessPower([{ qty: 1, normalMa: 500, peakMa: 0 }], 2).peakA, 0.5);
});
t('reader run: Wiegand within distance, power drop', () => {
  // 150 mA, 22 AWG, 400 ft: 2*400*0.15*0.0161 = 1.932 V; 12 - 1.932 = 10.068 V
  const r = C.readerRun('wiegand', 22, 400, 12, 150, 10);
  near(r.drop, 1.932); near(r.endV, 10.068); assert.strictEqual(r.pass, true);
  assert.strictEqual(r.dataOk, true); assert.strictEqual(r.maxDataFt, 500);
  near(r.maxPowerFt, 2 / (2 * 0.15 * 0.0161), 0.01);
});
t('reader run: Wiegand too long, OSDP ok', () => {
  assert.strictEqual(C.readerRun('wiegand', 18, 800, 12, 150, 10).dataOk, false);
  assert.strictEqual(C.readerRun('osdp', 18, 800, 12, 150, 10).dataOk, true);
  assert.throws(() => C.readerRun('rs232', 18, 100, 12, 150, 10));
});
t('PoE class lookup', () => {
  assert.strictEqual(C.poeClassFor(6.5).cls, 3); assert.strictEqual(C.poeClassFor(12.95).cls, 3);
  assert.strictEqual(C.poeClassFor(13).cls, 4); assert.strictEqual(C.poeClassFor(50).cls, 6);
  assert.strictEqual(C.poeClassFor(72), null);
});
t('PoE budget: example job, max-draw mode', () => {
  const r = C.poeBudget([{ qty: 8, watts: 6.5 }, { qty: 4, watts: 12.5 }, { qty: 1, watts: 50 }, { qty: 1, watts: 22 }], 370, 'bt60', 'max');
  const exp = 8 * 6.5 * 15.4 / 12.95 + 4 * 12.5 * 15.4 / 12.95 + 50 * 60 / 51 + 22 * 30 / 25.5;
  near(r.portW, exp); near(r.deviceW, 52 + 50 + 50 + 22); assert.strictEqual(r.ports, 14);
  near(r.limitW, 296); assert.strictEqual(r.pass, true); near(r.minBudgetW, exp / 0.8);
});
t('PoE budget: class mode, port too small, over budget', () => {
  const r = C.poeBudget([{ qty: 8, watts: 6.5 }, { qty: 1, watts: 50 }], 150, 'at', 'class');
  near(r.portW, 8 * 15.4 + 60); assert.strictEqual(r.overPort, 1); assert.strictEqual(r.overBudget, true); assert.strictEqual(r.pass, false);
  assert.strictEqual(C.poeBudget([{ qty: 1, watts: 80 }], 370, 'bt90', 'max').tooBig, 1);
  assert.throws(() => C.poeBudget([], 100, 'xx', 'max'));
});
t('storage: lesson example 12 cameras at 4 Mbps for 30 days', () => {
  const r = C.storage([{ qty: 12, mbps: 4 }], 24, 100, 30);
  near(r.gbPerDay, 518.4); near(r.tb, 15.552); near(r.requiredTb, 18.6624); near(r.mbps, 48);
  assert.strictEqual(r.drives, undefined);
});
t('storage: drives and RAID', () => {
  const groups = [{ qty: 8, mbps: 3 }, { qty: 4, mbps: 6 }, { qty: 1, mbps: 12 }];
  const r = C.storage(groups, 24, 100, 30, 8, 'raid5'); // 648 GB/day, 19.44 TB, 23.328 TB
  near(r.requiredTb, 23.328); assert.strictEqual(r.drives, 4); near(r.usableTb, 24);
  assert.strictEqual(C.storage(groups, 24, 100, 30, 8, 'raid6').drives, 5);
  assert.strictEqual(C.storage(groups, 24, 100, 30, 8, 'raid1').drives, 6);
  assert.strictEqual(C.storage([{ qty: 1, mbps: 1 }], 24, 100, 1, 8, 'raid6').drives, 4);
  near(C.storage(groups, 12, 50, 30).tb, 19.44 / 4);
  assert.throws(() => C.storage(groups, 25, 100, 30));
});
t('field of view: width, density, DORI', () => {
  const r = C.fieldOfView(2560, 90, 20); // width 40 ft, 64 px/ft
  near(r.widthFt, 40); near(r.ppf, 64); assert.strictEqual(r.level.id, 'recognize');
  const id = r.levels.find(l => l.id === 'identify');
  near(id.maxFt, 2560 / (250 / 3.28084) / 2, 0.01); assert.strictEqual(id.ok, false);
  assert.strictEqual(C.fieldOfView(2560, 40, 30).level.id, 'identify');
  assert.strictEqual(C.fieldOfView(640, 120, 200).level, null);
  near(C.hfovFromFocal(2.8, 5.6), 90, 0.001);
  assert.throws(() => C.fieldOfView(2560, 180, 20));
});
console.log(`${n} tests passed`);
