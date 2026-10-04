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
    g: { amps: 0.5, len: 150, vs: 12, mode: 'vmin', allow: 10.5 },
    fb: { preset: 'hs', hours: 24, alarm: 5, devices: [
      { name: 'Fire alarm control panel', qty: 1, standbyMa: 180, alarmMa: 300 },
      { name: 'Addressable smoke detector', qty: 30, standbyMa: 0.3, alarmMa: 0.3 },
      { name: 'Monitor module', qty: 4, standbyMa: 0.4, alarmMa: 0.4 },
      { name: 'Horn/strobe 15 cd', qty: 10, standbyMa: 0, alarmMa: 60 },
      { name: 'Horn/strobe 75 cd', qty: 4, standbyMa: 0, alarmMa: 150 }
    ] },
    n: { vs: 20.4, gauge: 14, len: 250, vmin: 16, rating: 2, apps: [
      { name: 'Horn/strobe 15 cd', qty: 6, ma: 75 },
      { name: 'Horn/strobe 75 cd', qty: 3, ma: 160 },
      { name: 'Horn/strobe 110 cd', qty: 1, ma: 230 }
    ] }
  };
  var S;
  try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
  if (!S || typeof S !== 'object') S = {};
  Object.keys(DEFAULTS).forEach(function (k) { if (!S[k]) S[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  // Battery screens: intrusion (b) and fire (fb) share one screen with different presets and sizes.
  var BATT = {
    battery: { key: 'b', presets: C.STANDBY_PRESETS, sizes: C.BATTERY_SIZES_AH, calc: C.batteryStandby,
      who: 'Include the panel itself, keypads, modules, detectors, and sirens (siren draw goes in alarm only).' },
    firebatt: { key: 'fb', presets: C.FIRE_STANDBY_PRESETS, sizes: C.FIRE_BATTERY_SIZES_AH, calc: C.fireBattery,
      who: 'Include the panel, every detector and module, annunciators, and every horn, strobe, and speaker (appliance draw goes in alarm only). NAC extenders have their own batteries; calculate them separately.' }
  };

  var CALCS = {
    battery: { label: 'Battery', title: 'Battery standby' },
    drop: { label: 'Volt drop', title: 'Voltage drop' },
    gauge: { label: 'Wire gauge', title: 'Wire gauge' },
    firebatt: { label: 'Battery', title: 'Fire battery' },
    nac: { label: 'NAC drop', title: 'NAC voltage drop' }
  };

  var HTML = {
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

  function batteryHtml(cfg) {
    var fire = cfg.key === 'fb';
    return '<div class="readout" aria-live="polite"><div class="lbl">Battery to install</div><div class="big" id="b-batt">–</div><div class="sub" id="b-req"></div><div id="b-flag"></div></div>' +
      '<p class="example" id="b-example">Example job loaded. Replace the devices with your own from their spec sheets.</p>' +
      '<section class="card"><h2>Standby requirement</h2><div class="seg" id="b-presets"></div><div class="fields">' +
      '<label>Standby time<div class="unit"><input id="b-hours" type="number" inputmode="decimal" min="0" step="any"><span>hours</span></div></label>' +
      '<label>Alarm time<div class="unit"><input id="b-alarm" type="number" inputmode="decimal" min="0" step="any"><span>min</span></div></label></div>' +
      '<p class="note">Confirm the required standby and alarm times with the applicable standard, the AHJ, and the panel installation manual.</p></section>' +
      '<section class="card"><h2>Devices on the battery</h2><p class="note">Current in milliamps, per device. ' + cfg.who + '</p>' +
      '<div class="devices" id="b-devices"></div><div class="actions"><button class="add" id="b-add" type="button">+ Add device</button><button class="add" id="b-reset" type="button">Load example</button></div><div class="totals" id="b-totals"></div></section>' +
      '<section class="card"><h2>The math</h2><div class="math" id="b-math"></div><p class="note">Formula: Required Ah = [(standby A × standby h) + (alarm A × alarm h)] × 1.2. Common sizes ' + cfg.sizes.join(', ') + ' Ah. ' +
      (fire ? 'Most fire panels use two 12 V batteries in series for 24 V; both the same size and age. ' : '') +
      'Check the panel\'s maximum battery size and charger capability.</p></section>';
  }
    HTML.nac =
    '<div class="readout" aria-live="polite"><div class="lbl">Voltage at the last appliance</div><div class="big" id="n-end">–</div><div class="sub" id="n-sub"></div><div id="n-flag"></div></div>' +
    '<p class="example" id="n-example">Example circuit loaded. Replace the appliances with your own from their spec sheets.</p>' +
    '<section class="card"><h2>The circuit</h2><div class="fields">' +
    '<label>Source voltage<div class="unit"><input id="n-vs" type="number" inputmode="decimal" min="0" step="any"><span>VDC</span></div></label>' +
    '<label>Wire gauge<select id="n-gauge"></select></label>' +
    '<label>One-way length to last appliance<div class="unit"><input id="n-len" type="number" inputmode="decimal" min="0" step="any"><span>ft</span></div></label>' +
    '<label>Appliance minimum voltage<div class="unit"><input id="n-vmin" type="number" inputmode="decimal" min="0" step="any"><span>VDC</span></div></label>' +
    '<label class="full">NAC output rating (panel or extender manual)<div class="unit"><input id="n-rating" type="number" inputmode="decimal" min="0" step="any"><span>A</span></div></label></div>' +
    '<p class="note">Start from the battery voltage at the end of standby (commonly 20.4 V), not 24 V. Regulated 24 V appliances commonly work down to 16 V; use the spec sheet value.</p></section>' +
    '<section class="card"><h2>Appliances on this NAC</h2><p class="note">Current per appliance in milliamps at its candela setting, using the current at minimum voltage when the spec sheet lists it.</p>' +
    '<div class="devices" id="n-apps"></div><div class="actions"><button class="add" id="n-add" type="button">+ Add appliance</button><button class="add" id="n-reset" type="button">Load example</button></div><div class="totals" id="n-totals"></div></section>' +
    '<section class="card"><h2>The math</h2><div class="math" id="n-math"></div><p class="note">All current is treated as if it were at the last appliance, the conservative method. If this fails, the manufacturer\'s point-to-point calculation may still pass. Solid copper at 68 °F.</p></section>';

  function mount(el, which) {
    var $ = function (id) { return el.querySelector('#' + id); };
    el.innerHTML = '<div class="panel">' + (BATT[which] ? batteryHtml(BATT[which]) : HTML[which]) + '</div>';
    if (BATT[which]) battery($, BATT[which]); else if (which === 'drop') drop($); else if (which === 'nac') nac($); else gauge($);
  }

  /* ---------- battery ---------- */
  function battery($, cfg) {
    var B = S[cfg.key], DEF = DEFAULTS[cfg.key];
    var isExample = function () { return JSON.stringify(B.devices) === JSON.stringify(DEF.devices); };
    var presets = cfg.presets.concat([{ id: 'custom', label: 'Custom', hours: null }]);
    $('b-presets').innerHTML = presets.map(function (p) {
      return '<button type="button" data-id="' + p.id + '">' + esc(p.label) + (p.hours ? ' · ' + p.hours + ' h' : '') + (p.alarm ? ' + ' + p.alarm + ' min' : '') + '</button>';
    }).join('');
    $('b-presets').addEventListener('click', function (e) {
      var btn = e.target.closest('button'); if (!btn) return;
      var p = presets.filter(function (x) { return x.id === btn.dataset.id; })[0];
      B.preset = p.id; if (p.hours) B.hours = p.hours; if (p.alarm) B.alarm = p.alarm;
      $('b-hours').value = B.hours; $('b-alarm').value = B.alarm; calc();
    });
    $('b-hours').value = B.hours; $('b-alarm').value = B.alarm;
    function matchPreset() {
      var m = presets.filter(function (p) { return p.hours === Number(B.hours) && (!p.alarm || p.alarm === Number(B.alarm)); })[0];
      B.preset = m ? m.id : 'custom';
    }
    $('b-hours').addEventListener('input', function () { B.hours = this.value; matchPreset(); calc(); });
    $('b-alarm').addEventListener('input', function () { B.alarm = this.value; matchPreset(); calc(); });

    function renderDevices() {
      $('b-devices').innerHTML = B.devices.map(function (d, i) {
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
      B.devices[+row.dataset.i][e.target.dataset.k] = e.target.value; calc();
    });
    $('b-devices').addEventListener('click', function (e) {
      if (!e.target.classList.contains('del')) return;
      B.devices.splice(+e.target.closest('.dev').dataset.i, 1); renderDevices(); calc();
    });
    $('b-add').addEventListener('click', function () {
      B.devices.push({ name: '', qty: 1, standbyMa: '', alarmMa: '' });
      renderDevices(); calc();
      var i = B.devices.length - 1; var el = $('dv-n-' + i); if (el) el.focus();
    });
    $('b-reset').addEventListener('click', function () {
      S[cfg.key] = B = JSON.parse(JSON.stringify(DEF));
      $('b-hours').value = B.hours; $('b-alarm').value = B.alarm; renderDevices(); calc();
    });

    function calc() {
      save();
      $('b-example').hidden = !isExample();
      $('b-reset').hidden = isExample();
      Array.prototype.forEach.call($('b-presets').children, function (b) { b.setAttribute('aria-pressed', String(b.dataset.id === B.preset)); });
      var devs = B.devices.map(function (d) { return { qty: d.qty || 0, standbyMa: d.standbyMa || 0, alarmMa: d.alarmMa || 0 }; });
      try {
        var r = cfg.calc(devs, B.hours === '' ? NaN : B.hours, B.alarm === '' ? NaN : B.alarm);
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
          'Next standard size        → ' + (r.battery ? r.battery + ' Ah' : 'none (over ' + r.largestCommon + ' Ah)');
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

  /* ---------- NAC voltage drop (fire) ---------- */
  function nac($) {
    var N = S.n;
    var isExample = function () { return JSON.stringify(N.apps) === JSON.stringify(DEFAULTS.n.apps); };
    $('n-gauge').innerHTML = C.FIRE_GAUGES.map(function (g) { return '<option value="' + g + '">' + g + ' AWG (' + C.WIRE_OHMS_PER_FT[g] + ' Ω/ft)</option>'; }).join('');
    ['vs', 'gauge', 'len', 'vmin', 'rating'].forEach(function (k) {
      var el = $('n-' + k); el.value = N[k];
      el.addEventListener('input', function () { N[k] = el.value; calc(); });
    });
    function renderApps() {
      $('n-apps').innerHTML = N.apps.map(function (d, i) {
        return '<div class="dev nac" data-i="' + i + '">' +
          '<label class="name">Appliance<input id="na-n-' + i + '" data-k="name" value="' + esc(d.name) + '"></label>' +
          '<label>Qty<input data-k="qty" type="number" inputmode="numeric" min="0" step="1" value="' + esc(d.qty) + '"></label>' +
          '<label>mA each<input data-k="ma" type="number" inputmode="decimal" min="0" step="any" value="' + esc(d.ma) + '"></label>' +
          '<button type="button" class="del" aria-label="Remove ' + esc(d.name || 'appliance') + '">×</button></div>';
      }).join('');
    }
    $('n-apps').addEventListener('input', function (e) {
      var row = e.target.closest('.dev'); if (!row) return;
      N.apps[+row.dataset.i][e.target.dataset.k] = e.target.value; calc();
    });
    $('n-apps').addEventListener('click', function (e) {
      if (!e.target.classList.contains('del')) return;
      N.apps.splice(+e.target.closest('.dev').dataset.i, 1); renderApps(); calc();
    });
    $('n-add').addEventListener('click', function () {
      N.apps.push({ name: '', qty: 1, ma: '' }); renderApps(); calc();
      var el = $('na-n-' + (N.apps.length - 1)); if (el) el.focus();
    });
    $('n-reset').addEventListener('click', function () {
      S.n = N = JSON.parse(JSON.stringify(DEFAULTS.n));
      ['vs', 'gauge', 'len', 'vmin', 'rating'].forEach(function (k) { $('n-' + k).value = N[k]; });
      renderApps(); calc();
    });
    function calc() {
      save();
      $('n-example').hidden = !isExample();
      $('n-reset').hidden = isExample();
      try {
        ['vs', 'len', 'vmin'].forEach(function (k) { if (N[k] === '') throw new Error('Fill in every field'); });
        var apps = N.apps.map(function (a) { return { qty: a.qty || 0, ma: a.ma || 0 }; });
        var r = C.nacDrop(apps, Number(N.gauge), N.len, N.vs, N.vmin, N.rating);
        $('n-end').innerHTML = f(r.endV, 2) + '<small>V</small>';
        $('n-sub').textContent = 'Drop ' + f(r.drop, 2) + ' V (' + f(r.pct, 1) + '%) · ' + f(r.currentA, 2) + ' A on the circuit';
        var flags = r.pass ? '<span class="pill ok">Pass · ' + f(r.marginV, 2) + ' V to spare</span>'
          : '<span class="pill bad">Fail · ' + f(-r.marginV, 2) + ' V short</span>';
        if (r.overRating) flags += ' <span class="pill bad">Over the ' + f(r.ratingA, 2) + ' A NAC rating</span>';
        if (!r.pass || r.overRating) flags += '<p class="sub" style="margin:8px 0 0">Go to a heavier gauge, split the appliances onto another NAC, or add a NAC power extender near the appliances.</p>';
        $('n-flag').innerHTML = flags;
        $('n-totals').innerHTML = '<span>Total ' + f(r.currentA * 1000, 0) + ' mA</span><span>Max run at this gauge ' + (isFinite(r.maxRunFt) ? Math.floor(r.maxRunFt) + ' ft' : '—') + '</span>';
        $('n-math').textContent =
          'Current  sum of qty × mA          = ' + f(r.currentA, 3) + ' A\n' +
          'Loop     2 × ' + N.len + ' ft × ' + r.ohmsPerFt + ' Ω/ft = ' + f(r.loopOhms, 3) + ' Ω\n' +
          'Drop     ' + f(r.loopOhms, 3) + ' Ω × ' + f(r.currentA, 3) + ' A     = ' + f(r.drop, 3) + ' V\n' +
          'End      ' + N.vs + ' V − ' + f(r.drop, 3) + ' V        = ' + f(r.endV, 3) + ' V\n' +
          'Minimum  ' + N.vmin + ' V → ' + (r.pass ? 'pass' : 'fail');
      } catch (err) {
        $('n-end').textContent = '–'; $('n-sub').innerHTML = '<span class="err">' + esc(err.message) + '</span>';
        $('n-flag').innerHTML = ''; $('n-math').textContent = ''; $('n-totals').innerHTML = '';
      }
    }
    renderApps(); calc();
  }

  window.SLVCalcUI = { CALCS: CALCS, mount: mount };
})();
