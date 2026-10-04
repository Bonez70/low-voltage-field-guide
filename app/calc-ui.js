/*
 * Calculator screens for the app. Same screens and math as app/calculators/index.html,
 * mounted one at a time into the Calculators tab. Math lives in calculators/calc.js.
 */
(function () {
  'use strict';
  var C = window.SLVCalc;
  var KEY = 'slv-calc-v1';
  var f = function (n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };

  var DEFAULTS = {
    b: { preset: 'res', hours: 4, alarm: 4, devices: [
      { name: 'Control panel', qty: 1, standbyMa: 120, alarmMa: 150 },
      { name: 'Keypad', qty: 2, standbyMa: 40, alarmMa: 60 },
      { name: 'PIR motion', qty: 4, standbyMa: 15, alarmMa: 15 },
      { name: 'Interior siren', qty: 1, standbyMa: 0, alarmMa: 800 }
    ] },
    d: { amps: 0.5, gauge: 18, len: 150, vs: 12, vmin: 10.5 },
    g: { amps: 0.5, len: 150, vs: 12, mode: 'vmin', allow: 10.5 }
  };
  var S;
  try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
  if (!S || !S.b || !S.d || !S.g) S = JSON.parse(JSON.stringify(DEFAULTS));
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function isExample() { return JSON.stringify(S.b.devices) === JSON.stringify(DEFAULTS.b.devices); }

  var CALCS = {
    battery: { label: 'Battery', title: 'Battery standby' },
    drop: { label: 'Volt drop', title: 'Voltage drop' },
    gauge: { label: 'Wire gauge', title: 'Wire gauge' }
  };

  var HTML = {
    battery:
      '<div class="readout" aria-live="polite"><div class="lbl">Battery to install</div><div class="big" id="b-batt">–</div><div class="sub" id="b-req"></div><div id="b-flag"></div></div>' +
      '<p class="example" id="b-example">Example job loaded. Replace the devices with your own from their spec sheets.</p>' +
      '<section class="card"><h2>Standby requirement</h2><div class="seg" id="b-presets"></div><div class="fields">' +
      '<label>Standby time<div class="unit"><input id="b-hours" type="number" inputmode="decimal" min="0" step="any"><span>hours</span></div></label>' +
      '<label>Alarm time<div class="unit"><input id="b-alarm" type="number" inputmode="decimal" min="0" step="any"><span>min</span></div></label></div>' +
      '<p class="note">Confirm the required standby and alarm times with the applicable standard, the AHJ, and the panel installation manual.</p></section>' +
      '<section class="card"><h2>Devices on the battery</h2><p class="note">Current in milliamps, per device. Include the panel itself, keypads, modules, detectors, and sirens (siren draw goes in alarm only).</p>' +
      '<div class="devices" id="b-devices"></div><div class="actions"><button class="add" id="b-add" type="button">+ Add device</button><button class="add" id="b-reset" type="button">Load example</button></div><div class="totals" id="b-totals"></div></section>' +
      '<section class="card"><h2>The math</h2><div class="math" id="b-math"></div><p class="note">Formula: Required Ah = [(standby A × standby h) + (alarm A × alarm h)] × 1.2. Common sizes 4, 5, 7, 8, 12, 18 Ah. Check the panel\'s maximum battery size and charger capability.</p></section>',
    drop:
      '<div class="readout" aria-live="polite"><div class="lbl">Voltage at the device</div><div class="big" id="d-end">–</div><div class="sub" id="d-sub"></div><div id="d-flag"></div></div>' +
      '<p class="example">Example values loaded. Enter your run.</p>' +
      '<section class="card"><h2>The run</h2><div class="fields">' +
      '<label>Load current<div class="unit"><input id="d-amps" type="number" inputmode="decimal" min="0" step="any"><span>A</span></div></label>' +
      '<label>Wire gauge<select id="d-gauge"></select></label>' +
      '<label>One-way length<div class="unit"><input id="d-len" type="number" inputmode="decimal" min="0" step="any"><span>ft</span></div></label>' +
      '<label>Supply voltage<div class="unit"><input id="d-vs" type="number" inputmode="decimal" min="0" step="any"><span>VDC</span></div></label>' +
      '<label class="full">Device minimum operating voltage (spec sheet)<div class="unit"><input id="d-vmin" type="number" inputmode="decimal" min="0" step="any"><span>VDC</span></div></label></div>' +
      '<p class="note">Add up every device on the run for the load current. Use the alarm current if devices draw more in alarm.</p></section>' +
      '<section class="card"><h2>The math</h2><div class="math" id="d-math"></div><p class="note">Voltage drop = 2 × one-way length × current × Ω per foot. The 2 counts the wire out and back. Solid copper at 68 °F; hot spaces and stranded wire run a little higher.</p></section>',
    gauge:
      '<div class="readout" aria-live="polite"><div class="lbl">Smallest wire that works</div><div class="big" id="g-pick">–</div><div class="sub" id="g-sub"></div><div id="g-flag"></div></div>' +
      '<p class="example">Example values loaded. Enter your run.</p>' +
      '<section class="card"><h2>The run</h2><div class="fields">' +
      '<label>Load current<div class="unit"><input id="g-amps" type="number" inputmode="decimal" min="0" step="any"><span>A</span></div></label>' +
      '<label>One-way length<div class="unit"><input id="g-len" type="number" inputmode="decimal" min="0" step="any"><span>ft</span></div></label>' +
      '<label>Supply voltage<div class="unit"><input id="g-vs" type="number" inputmode="decimal" min="0" step="any"><span>VDC</span></div></label>' +
      '<label>Allowed by<select id="g-mode"><option value="vmin">Device minimum voltage</option><option value="pct">Percent drop</option><option value="volts">Volts of drop</option></select></label>' +
      '<label class="full"><span id="g-allow-txt">Device minimum operating voltage</span><div class="unit"><input id="g-allow" type="number" inputmode="decimal" min="0" step="any"><span id="g-allow-unit">VDC</span></div></label></div></section>' +
      '<section class="card"><h2>Every gauge for this run</h2><div class="tbl"><table><thead><tr><th>AWG</th><th>Drop</th><th>At device</th><th>Max run</th></tr></thead><tbody id="g-rows"></tbody></table></div>' +
      '<p class="note">Max run is the longest one-way length that stays within your allowance at this current. Based on solid copper at 68 °F.</p></section>'
  };

  function mount(el, which) {
    var $ = function (id) { return el.querySelector('#' + id); };
    el.innerHTML = '<div class="panel">' + HTML[which] + '</div>';
    if (which === 'battery') battery($); else if (which === 'drop') drop($); else gauge($);
  }

  /* ---------- battery ---------- */
  function battery($) {
    var presets = C.STANDBY_PRESETS.concat([{ id: 'custom', label: 'Custom', hours: null }]);
    $('b-presets').innerHTML = presets.map(function (p) {
      return '<button type="button" data-id="' + p.id + '">' + esc(p.label) + (p.hours ? ' · ' + p.hours + ' h' : '') + '</button>';
    }).join('');
    $('b-presets').addEventListener('click', function (e) {
      var btn = e.target.closest('button'); if (!btn) return;
      var p = presets.filter(function (x) { return x.id === btn.dataset.id; })[0];
      S.b.preset = p.id; if (p.hours) S.b.hours = p.hours;
      $('b-hours').value = S.b.hours; calc();
    });
    $('b-hours').value = S.b.hours; $('b-alarm').value = S.b.alarm;
    $('b-hours').addEventListener('input', function () {
      S.b.hours = this.value;
      var m = presets.filter(function (p) { return p.hours === Number(S.b.hours); })[0];
      S.b.preset = m ? m.id : 'custom'; calc();
    });
    $('b-alarm').addEventListener('input', function () { S.b.alarm = this.value; calc(); });

    function renderDevices() {
      $('b-devices').innerHTML = S.b.devices.map(function (d, i) {
        return '<div class="dev" data-i="' + i + '">' +
          '<label class="name">Device<input id="dv-n-' + i + '" data-k="name" value="' + esc(d.name) + '"></label>' +
          '<label>Qty<input id="dv-q-' + i + '" data-k="qty" type="number" inputmode="numeric" min="0" step="1" value="' + esc(d.qty) + '"></label>' +
          '<label>Standby mA<input id="dv-s-' + i + '" data-k="standbyMa" type="number" inputmode="decimal" min="0" step="any" value="' + esc(d.standbyMa) + '"></label>' +
          '<label>Alarm mA<input id="dv-a-' + i + '" data-k="alarmMa" type="number" inputmode="decimal" min="0" step="any" value="' + esc(d.alarmMa) + '"></label>' +
          '<button type="button" class="del" aria-label="Remove ' + esc(d.name || 'device') + '">×</button></div>';
      }).join('');
    }
    $('b-devices').addEventListener('input', function (e) {
      var row = e.target.closest('.dev'); if (!row) return;
      S.b.devices[+row.dataset.i][e.target.dataset.k] = e.target.value; calc();
    });
    $('b-devices').addEventListener('click', function (e) {
      if (!e.target.classList.contains('del')) return;
      S.b.devices.splice(+e.target.closest('.dev').dataset.i, 1); renderDevices(); calc();
    });
    $('b-add').addEventListener('click', function () {
      S.b.devices.push({ name: '', qty: 1, standbyMa: '', alarmMa: '' });
      renderDevices(); calc();
      var i = S.b.devices.length - 1; var el = $('dv-n-' + i); if (el) el.focus();
    });
    $('b-reset').addEventListener('click', function () {
      S.b = JSON.parse(JSON.stringify(DEFAULTS.b));
      $('b-hours').value = S.b.hours; $('b-alarm').value = S.b.alarm; renderDevices(); calc();
    });

    function calc() {
      save();
      $('b-example').hidden = !isExample();
      $('b-reset').hidden = isExample();
      Array.prototype.forEach.call($('b-presets').children, function (b) { b.setAttribute('aria-pressed', String(b.dataset.id === S.b.preset)); });
      var devs = S.b.devices.map(function (d) { return { qty: d.qty || 0, standbyMa: d.standbyMa || 0, alarmMa: d.alarmMa || 0 }; });
      try {
        var r = C.batteryStandby(devs, S.b.hours === '' ? NaN : S.b.hours, S.b.alarm === '' ? NaN : S.b.alarm);
        $('b-batt').innerHTML = r.battery ? r.battery + '<small>Ah</small>' : 'Over ' + r.largestCommon + '<small>Ah</small>';
        $('b-req').textContent = 'Required ' + f(r.requiredAh, 2) + ' Ah with 20% margin';
        $('b-flag').innerHTML = r.battery ? '<span class="pill ok">Next standard size up</span>'
          : '<span class="pill bad">Larger than common sizes</span><p class="sub" style="margin:8px 0 0">Use a larger battery only if the panel charger allows it, or move load to a supervised power supply with its own battery.</p>';
        $('b-totals').innerHTML = '<span>Standby ' + f(r.standbyA * 1000, 0) + ' mA</span><span>Alarm ' + f(r.alarmA * 1000, 0) + ' mA</span>';
        $('b-math').textContent =
          'Standby  ' + f(r.standbyA, 3) + ' A × ' + f(r.standbyHours, 2) + ' h  = ' + f(r.standbyAh, 3) + ' Ah\n' +
          'Alarm    ' + f(r.alarmA, 3) + ' A × ' + f(r.alarmHours, 3) + ' h = ' + f(r.alarmAh, 3) + ' Ah\n' +
          'Subtotal                  = ' + f(r.baseAh, 3) + ' Ah\n' +
          '× 1.2 safety factor       = ' + f(r.requiredAh, 3) + ' Ah\n' +
          'Next standard size        → ' + (r.battery ? r.battery + ' Ah' : 'none (over 18 Ah)');
      } catch (err) {
        $('b-batt').textContent = '–'; $('b-req').innerHTML = '<span class="err">' + esc(err.message) + '</span>';
        $('b-flag').innerHTML = ''; $('b-math').textContent = '';
      }
    }
    renderDevices(); calc();
  }

  /* ---------- voltage drop ---------- */
  function drop($) {
    $('d-gauge').innerHTML = C.GAUGES.map(function (g) { return '<option value="' + g + '">' + g + ' AWG (' + C.WIRE_OHMS_PER_FT[g] + ' Ω/ft)</option>'; }).join('');
    ['amps', 'gauge', 'len', 'vs', 'vmin'].forEach(function (k) {
      var el = $('d-' + k); el.value = S.d[k];
      el.addEventListener('input', function () { S.d[k] = el.value; calc(); });
    });
    function calc() {
      save();
      try {
        ['amps', 'len', 'vs'].forEach(function (k) { if (S.d[k] === '') throw new Error('Fill in every field'); });
        var r = C.voltageDrop(S.d.amps, Number(S.d.gauge), S.d.len, S.d.vs, S.d.vmin);
        $('d-end').innerHTML = f(r.endV, 2) + '<small>V</small>';
        $('d-sub').textContent = 'Drop ' + f(r.drop, 2) + ' V (' + f(r.pct, 1) + '%)';
        $('d-flag').innerHTML = r.pass === undefined ? '<span class="pill warn">Enter device minimum</span>'
          : r.pass ? '<span class="pill ok">Pass · ' + f(r.marginV, 2) + ' V to spare</span>'
          : '<span class="pill bad">Fail · ' + f(-r.marginV, 2) + ' V short</span><p class="sub" style="margin:8px 0 0">Go to a heavier gauge, shorten the run, split the load, or add a power supply near the devices.</p>';
        $('d-math').textContent =
          'Loop  2 × ' + S.d.len + ' ft × ' + r.ohmsPerFt + ' Ω/ft = ' + f(r.loopOhms, 3) + ' Ω\n' +
          'Drop  ' + f(r.loopOhms, 3) + ' Ω × ' + S.d.amps + ' A       = ' + f(r.drop, 3) + ' V\n' +
          'End   ' + S.d.vs + ' V − ' + f(r.drop, 3) + ' V          = ' + f(r.endV, 3) + ' V';
      } catch (err) {
        $('d-end').textContent = '–'; $('d-sub').innerHTML = '<span class="err">' + esc(err.message) + '</span>';
        $('d-flag').innerHTML = ''; $('d-math').textContent = '';
      }
    }
    calc();
  }

  /* ---------- wire gauge ---------- */
  function gauge($) {
    var MODES = { vmin: ['Device minimum operating voltage', 'VDC'], pct: ['Allowed drop', '%'], volts: ['Allowed drop', 'V'] };
    ['amps', 'len', 'vs', 'mode', 'allow'].forEach(function (k) {
      var el = $('g-' + k); el.value = S.g[k];
      el.addEventListener('input', function () { S.g[k] = el.value; calc(); });
    });
    function calc() {
      save();
      $('g-allow-txt').textContent = MODES[S.g.mode][0]; $('g-allow-unit').textContent = MODES[S.g.mode][1];
      try {
        ['amps', 'len', 'vs', 'allow'].forEach(function (k) { if (S.g[k] === '') throw new Error('Fill in every field'); });
        var allowance = S.g.mode === 'pct' ? { percent: S.g.allow }
          : S.g.mode === 'volts' ? { volts: S.g.allow }
          : { volts: Number(S.g.vs) - Number(S.g.allow) };
        if (allowance.volts < 0) throw new Error('Device minimum is above the supply voltage');
        var r = C.wireGauge(S.g.amps, S.g.len, S.g.vs, allowance);
        var pick = r.rows.filter(function (x) { return x.gauge === r.gauge; })[0];
        $('g-pick').innerHTML = r.gauge ? r.gauge + '<small>AWG</small>' : 'None';
        $('g-sub').textContent = 'Allowed drop ' + f(r.allowedV, 2) + ' V' + (pick ? ' · this gauge drops ' + f(pick.drop, 2) + ' V' : '');
        $('g-flag').innerHTML = r.gauge ? '<span class="pill ok">Heavier wire also works</span>'
          : '<span class="pill bad">Even 12 AWG is too much drop</span><p class="sub" style="margin:8px 0 0">Add a power supply near the devices or split the load across runs.</p>';
        $('g-rows').innerHTML = r.rows.map(function (x) {
          return '<tr class="' + (x.gauge === r.gauge ? 'pick' : '') + '"><td>' + x.gauge + '</td><td class="' + (x.ok ? 'ok' : 'bad') + '">' +
            f(x.drop, 2) + ' V</td><td>' + f(x.endV, 2) + ' V</td><td>' + (isFinite(x.maxRunFt) ? Math.floor(x.maxRunFt) + ' ft' : '—') + '</td></tr>';
        }).join('');
      } catch (err) {
        $('g-pick').textContent = '–'; $('g-sub').innerHTML = '<span class="err">' + esc(err.message) + '</span>';
        $('g-flag').innerHTML = ''; $('g-rows').innerHTML = '';
      }
    }
    calc();
  }

  window.SLVCalcUI = { CALCS: CALCS, mount: mount };
})();
