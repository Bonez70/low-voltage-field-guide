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
console.log(`${n} tests passed`);
