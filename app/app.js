/*
 * Security Low Voltage App shell: routing, the four tabs, search, offline install.
 * Content comes from packs/*.js (built from content/ by build.js). Routes are #/<pack>/<tab>/...
 */
(function () {
  'use strict';
  var PACKS = window.SLV_PACKS || [];
  var UPCOMING = window.SLV_UPCOMING || [];
  var CALC = window.SLVCalcUI;
  var TABS = { learn: 'Learn', reference: 'Reference', calculators: 'Calculators', troubleshoot: 'Troubleshoot' };
  var DISCLAIMER = '<p class="disclaimer">Training aid only. It doesn\'t replace manufacturer instructions, the applicable codes, or the AHJ.</p>';
  var KEY = 'slv-app-v1';
  var $ = function (id) { return document.getElementById(id); };
  var view = $('view');
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var chev = '<svg class="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var prefs = {};
  try { prefs = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { prefs = {}; }
  function savePrefs() { try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch (e) {} }

  function packById(id) { return PACKS.filter(function (p) { return p.id === id; })[0]; }
  function upcomingById(id) { return UPCOMING.filter(function (p) { return p.id === id; })[0]; }

  /* ---------- system switcher ---------- */
  var sys = $('sys-select');
  sys.innerHTML = PACKS.map(function (p) { return '<option value="' + p.id + '">' + esc(p.name) + '</option>'; }).join('') +
    UPCOMING.map(function (p) { return '<option value="' + p.id + '">' + esc(p.name) + ' (coming)</option>'; }).join('');
  sys.addEventListener('change', function () { go('/' + sys.value + '/' + (state.tab || 'learn')); });

  /* ---------- routing ---------- */
  var state = { route: '', pack: '', tab: '', query: '' };
  var scrolls = {};
  var memoryRoute = null; // used when the page can't write to location (some embedded previews)

  function currentHash() {
    if (memoryRoute !== null) return memoryRoute;
    return (location.hash || '').replace(/^#/, '');
  }
  function go(route, replace) {
    scrolls[state.route] = window.scrollY;
    try {
      if (replace) history.replaceState(null, '', '#' + route); else history.pushState(null, '', '#' + route);
      memoryRoute = null;
    } catch (e) { memoryRoute = route; }
    render();
  }
  window.addEventListener('popstate', function () { memoryRoute = null; render(); });
  window.addEventListener('hashchange', function () { memoryRoute = null; render(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#/"]');
    if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    go(a.getAttribute('href').slice(1));
  });

  function setHeader(title, parent) {
    $('page-title').textContent = title;
    document.title = title + ' · Low Voltage Field Guide';
    $('back').hidden = !parent;
    $('back').dataset.to = parent || '';
    document.querySelector('.top-in').classList.toggle('has-back', !!parent);
  }
  $('back').addEventListener('click', function () { if (this.dataset.to) go(this.dataset.to); });

  function setTabs(pack, tab) {
    Array.prototype.forEach.call(document.querySelectorAll('#tabs a'), function (a) {
      var t = a.dataset.tab;
      var dest = t === 'calculators' && prefs.calc ? '/calculators/' + prefs.calc : '/' + t;
      a.setAttribute('href', '#/' + pack + dest);
      if (t === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function render() {
    var route = currentHash();
    if (!route || route === '/') { route = prefs.last || '/' + (PACKS[0] ? PACKS[0].id : 'intrusion') + '/learn'; go(route, true); return; }
    var parts = route.split('?')[0].split('/').filter(Boolean);
    state.route = route;

    if (parts[0] === 'search') {
      state.tab = 'search';
      setTabs(state.pack || PACKS[0].id, '');
      renderSearch();
      return;
    }
    closeSearchIfEmpty();

    var packId = parts[0], tab = TABS[parts[1]] ? parts[1] : 'learn';
    state.pack = packId; state.tab = tab;
    sys.value = packId;
    setTabs(packId, tab);
    var pack = packById(packId);
    var html;
    if (!pack) html = upcomingById(packId) ? viewUpcoming(upcomingById(packId), tab) : viewMissing();
    else if (tab === 'learn') html = viewLearn(pack, parts[2], parts[3]);
    else if (tab === 'reference') html = viewReference(pack, parts[2]);
    else if (tab === 'calculators') html = viewCalculators(pack, parts[2]);
    else html = viewTroubleshoot(pack, parts[2]);
    if (html !== null) view.innerHTML = html;
    if (pack) { prefs.last = route; savePrefs(); }
    window.scrollTo(0, scrolls[route] || 0);
  }

  function viewMissing() {
    setHeader('Not found', '');
    return '<div class="empty">That page isn\'t here. <a href="#/' + PACKS[0].id + '/learn">Go to Learn</a></div>';
  }

  function viewUpcoming(up, tab) {
    setHeader(TABS[tab], '');
    return '<div class="soon"><p class="eyebrow">Coming in a later release</p><h2>' + esc(up.name) + '</h2>' +
      '<p>This system pack will have the same four tabs: lessons, reference cards, calculators, and troubleshooting guides.</p>' +
      '<p>' + PACKS.map(function (p) { return '<a href="#/' + p.id + '/' + tab + '">Open ' + esc(p.name) + '</a>'; }).join(' · ') + '</p></div>';
  }

  /* ---------- Learn ---------- */
  function viewLearn(pack, modNum, sub) {
    var base = '/' + pack.id + '/learn';
    var mods = pack.learn.modules;
    if (!modNum) {
      setHeader('Learn', '');
      var lessons = mods.reduce(function (n, m) { return n + m.lessons.length; }, 0);
      return installCard() +
        '<div class="page-h"><p class="eyebrow">' + esc(pack.name) + ' training</p><h2>' + esc(pack.blurb) + '</h2>' +
        '<p class="lede">' + mods.length + ' modules, ' + lessons + ' short lessons, a quiz at the end of each. Start at Module 1 if you\'re new.</p></div>' +
        '<ul class="rows">' + mods.map(function (m) {
          return '<li><a href="#' + base + '/' + m.num + '"><span class="n">' + m.num + '</span><span class="t"><b>' + esc(m.title) + '</b><small>' +
            m.lessons.length + ' lessons' + (m.quiz ? ' · quiz' : '') + '</small></span>' + chev + '</a></li>';
        }).join('') + '</ul>' + DISCLAIMER;
    }
    var mod = mods.filter(function (m) { return String(m.num) === modNum; })[0];
    if (!mod) return viewMissing();
    var mbase = base + '/' + mod.num;
    if (!sub) {
      setHeader('Module ' + mod.num, base);
      return '<div class="page-h"><p class="eyebrow">Module ' + mod.num + '</p><h2>' + esc(mod.title) + '</h2></div>' +
        (mod.introHtml ? '<div class="prose">' + mod.introHtml + '</div>' : '') +
        '<ul class="rows">' + mod.lessons.map(function (l) {
          return '<li><a href="#' + mbase + '/' + l.id + '"><span class="n sm">' + l.id + '</span><span class="t"><b>' + esc(l.title) + '</b><small>About ' + l.mins + ' min</small></span>' + chev + '</a></li>';
        }).join('') +
        (mod.quiz ? '<li><a href="#' + mbase + '/quiz"><span class="n">?</span><span class="t"><b>Module ' + mod.num + ' quiz</b><small>' + mod.quiz.questions.length + ' questions</small></span>' + chev + '</a></li>' : '') +
        '</ul>';
    }
    var nextMod = mods[mods.indexOf(mod) + 1];
    if (sub === 'quiz' && mod.quiz) {
      setHeader('Quiz', mbase);
      var q = mod.quiz;
      var items = q.questions.map(function (t, i) {
        return '<li class="q"><span class="qn">Question ' + (i + 1) + '</span><p>' + t + '</p>' +
          (q.answers ? '<button type="button" data-a="' + i + '">Show answer</button><div class="a" id="ans-' + i + '" hidden><b>Answer</b>' + q.answers[i] + '</div>' : '') + '</li>';
      }).join('');
      var html = '<div class="page-h"><p class="eyebrow">Module ' + mod.num + ' · ' + esc(mod.title) + '</p><h2>Quiz</h2>' +
        '<p class="lede">Answer each one in your head or on paper, then check.</p></div>' + (q.noteHtml ? '<div class="prose">' + q.noteHtml + '</div>' : '') +
        '<ol class="quiz">' + items + '</ol>' +
        (q.answers ? '<div class="actions"><button class="btn" type="button" id="show-all">Show all answers</button></div>'
          : (q.keyHtml ? '<div class="actions"><button class="btn" type="button" id="show-key">Show answer key</button></div><div class="prose" id="key" hidden><p><strong>Answer key:</strong> ' + q.keyHtml + '</p></div>' : '')) +
        '<div class="pager">' + (nextMod ? '<a class="next primary" href="#' + base + '/' + nextMod.num + '"><small>Next module</small><b>' + esc(nextMod.title) + '</b></a>'
          : '<a class="next" href="#' + base + '"><small>Done</small><b>All modules</b></a>') + '</div>' + DISCLAIMER;
      return html;
    }
    var li = -1;
    mod.lessons.forEach(function (l, i) { if (l.id === sub) li = i; });
    if (li < 0) return viewMissing();
    var lesson = mod.lessons[li], prev = mod.lessons[li - 1], next = mod.lessons[li + 1];
    setHeader('Lesson ' + lesson.id, mbase);
    var nextLink = next ? '<a class="next primary" href="#' + mbase + '/' + next.id + '"><small>Next lesson</small><b>' + esc(next.title) + '</b></a>'
      : mod.quiz ? '<a class="next primary" href="#' + mbase + '/quiz"><small>Next</small><b>Module ' + mod.num + ' quiz</b></a>' : '';
    return '<div class="page-h"><p class="eyebrow">Module ' + mod.num + ' · Lesson ' + lesson.id + '</p><h2>' + esc(lesson.title) + '</h2></div>' +
      '<div class="prose">' + lesson.html + '</div>' +
      '<div class="pager">' + (prev ? '<a href="#' + mbase + '/' + prev.id + '"><small>Previous</small><b>' + esc(prev.title) + '</b></a>' : '') + nextLink + '</div>' + DISCLAIMER;
  }
  function quizClick(e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.a !== undefined) {
      var a = $('ans-' + b.dataset.a); a.hidden = !a.hidden; b.textContent = a.hidden ? 'Show answer' : 'Hide answer';
    } else if (b.id === 'show-all') {
      var open = b.textContent.indexOf('Show') === 0;
      Array.prototype.forEach.call(view.querySelectorAll('.q .a'), function (x) { x.hidden = !open; });
      Array.prototype.forEach.call(view.querySelectorAll('.q button'), function (x) { x.textContent = open ? 'Hide answer' : 'Show answer'; });
      b.textContent = open ? 'Hide all answers' : 'Show all answers';
    } else if (b.id === 'show-key') {
      $('key').hidden = !$('key').hidden; b.textContent = $('key').hidden ? 'Show answer key' : 'Hide answer key';
    }
  }
  view.addEventListener('click', quizClick);

  /* ---------- Reference ---------- */
  function viewReference(pack, cardId) {
    var base = '/' + pack.id + '/reference';
    var cards = pack.reference.cards;
    if (!cardId) {
      setHeader('Reference', '');
      return '<div class="page-h"><p class="eyebrow">' + esc(pack.name) + ' field reference</p><h2>Quick cards</h2>' +
        '<p class="lede">One screen each, built for a quick look on the job. Panel-specific values always defer to the installation manual.</p></div>' +
        '<ul class="rows">' + cards.map(function (c) {
          return '<li><a href="#' + base + '/' + c.id + '"><span class="n sm" aria-hidden="true">' + refGlyph(c) + '</span><span class="t"><b>' + esc(c.title) + '</b></span>' + chev + '</a></li>';
        }).join('') + '</ul>' + DISCLAIMER;
    }
    var i = -1;
    cards.forEach(function (c, j) { if (c.id === cardId) i = j; });
    if (i < 0) return viewMissing();
    var c = cards[i], prev = cards[i - 1], next = cards[i + 1];
    setHeader('Reference', base);
    return '<div class="page-h"><p class="eyebrow">Reference card</p><h2>' + esc(c.title) + '</h2></div>' +
      '<div class="prose">' + c.html + '</div>' +
      '<div class="pager">' + (prev ? '<a href="#' + base + '/' + prev.id + '"><small>Previous</small><b>' + esc(prev.title) + '</b></a>' : '') +
      (next ? '<a class="next" href="#' + base + '/' + next.id + '"><small>Next</small><b>' + esc(next.title) + '</b></a>' : '') + '</div>' + DISCLAIMER;
  }
  // A short field label for each card's tile: units where the card is about a value, otherwise its initial.
  function refGlyph(c) {
    var t = c.title.toLowerCase();
    if (/meter|resist|eol/.test(t)) return 'Ω';
    if (/battery/.test(t)) return 'Ah';
    if (/wire|copper/.test(t)) return 'AWG';
    if (/event code|contact id/.test(t)) return 'CID';
    if (/leave|checklist/.test(t)) return '✓';
    if (/glossary/.test(t)) return 'A–Z';
    return esc(c.title.charAt(0));
  }

  /* ---------- Calculators ---------- */
  function viewCalculators(pack, which) {
    var list = pack.calculators || [];
    if (list.indexOf(which) < 0) which = list.indexOf(prefs.calc) >= 0 ? prefs.calc : list[0];
    if (!which) { setHeader('Calculators', ''); return '<div class="empty">No calculators for this system yet.</div>'; }
    prefs.calc = which; savePrefs();
    setTabs(pack.id, 'calculators');
    setHeader('Calculators', '');
    view.innerHTML = '<nav class="calc-tabs" aria-label="Calculator">' + list.map(function (k) {
      return '<a href="#/' + pack.id + '/calculators/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(CALC.CALCS[k].label) + '</a>';
    }).join('') + '</nav><div id="calc-host"></div>' + DISCLAIMER;
    CALC.mount($('calc-host'), which);
    return null;
  }

  /* ---------- Troubleshoot ---------- */
  function viewTroubleshoot(pack, num) {
    var base = '/' + pack.id + '/troubleshoot';
    var guides = pack.troubleshoot.guides;
    if (!num) {
      setHeader('Troubleshoot', '');
      return '<div class="page-h"><p class="eyebrow">' + esc(pack.name) + ' service calls</p><h2>Pick the symptom</h2></div>' +
        '<p class="on-test"><strong>Before you trip anything:</strong> put the account on test with the central station, and take it off test when you\'re done.</p>' +
        '<ul class="rows">' + guides.map(function (g) {
          return '<li><a href="#' + base + '/' + g.num + '"><span class="n">' + g.num + '</span><span class="t"><b>' + esc(g.title) + '</b>' +
            (g.symptomHtml ? '<small>' + stripTags(g.symptomHtml) + '</small>' : '') + '</span>' + chev + '</a></li>';
        }).join('') + '</ul>' + DISCLAIMER;
    }
    var i = -1;
    guides.forEach(function (g, j) { if (String(g.num) === num) i = j; });
    if (i < 0) return viewMissing();
    var g = guides[i], prev = guides[i - 1], next = guides[i + 1];
    setHeader('Guide ' + g.num, base);
    return '<div class="page-h"><p class="eyebrow">Troubleshooting guide ' + g.num + '</p><h2>' + esc(g.title) + '</h2></div>' +
      (g.symptomHtml ? '<div class="symptom"><span class="lbl">Symptom</span><p>' + g.symptomHtml + '</p></div>' : '') +
      '<p class="on-test">Account on test before you trip anything. Do each step, then follow the result.</p>' +
      '<div class="prose">' + g.html + '</div>' +
      '<div class="pager">' + (prev ? '<a href="#' + base + '/' + prev.num + '"><small>Guide ' + prev.num + '</small><b>' + esc(prev.title) + '</b></a>' : '') +
      (next ? '<a class="next" href="#' + base + '/' + next.num + '"><small>Guide ' + next.num + '</small><b>' + esc(next.title) + '</b></a>' : '') + '</div>' + DISCLAIMER;
  }
  function stripTags(h) { var d = document.createElement('div'); d.innerHTML = h; return esc(d.textContent); }

  /* ---------- Search ---------- */
  var bar = $('search-bar'), input = $('search-input');
  $('search-btn').addEventListener('click', function () {
    if (bar.hidden) { bar.hidden = false; input.focus(); if (input.value) go('/search', state.tab === 'search'); }
    else { bar.hidden = true; input.value = ''; if (state.tab === 'search') go(prefs.last || '/' + PACKS[0].id + '/learn'); }
  });
  bar.addEventListener('submit', function (e) { e.preventDefault(); input.blur(); });
  input.addEventListener('input', function () {
    state.query = input.value;
    if (state.tab === 'search') renderSearch(); else go('/search');
  });
  function closeSearchIfEmpty() { if (!input.value) bar.hidden = true; }

  function renderSearch() {
    setHeader('Search', prefs.last || '');
    bar.hidden = false;
    var q = (input.value || '').trim().toLowerCase();
    if (!q) { view.innerHTML = '<p class="empty">Search every lesson, reference card, glossary term, and troubleshooting guide. Try "EOL", "glass break", or "low battery".</p>'; return; }
    var terms = q.split(/\s+/).filter(Boolean);
    var hits = [];
    PACKS.forEach(function (p) {
      p.search.forEach(function (it) {
        var title = it.title.toLowerCase(), text = it.text.toLowerCase(), score = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i], inT = title.indexOf(t) >= 0, inX = text.indexOf(t) >= 0;
          if (!inT && !inX) return;
          score += (inT ? 10 : 0) + (inX ? 1 + Math.min(4, text.split(t).length - 1) * 0.5 : 0);
        }
        if (title === q) score += 20;
        if (it.kind === 'Glossary') score += 2;
        hits.push({ it: it, pack: p, score: score });
      });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    view.innerHTML = hits.length ? '<p class="eyebrow">' + hits.length + ' result' + (hits.length === 1 ? '' : 's') + '</p><div class="hits">' + hits.slice(0, 40).map(function (h) {
      return '<a class="hit" href="#/' + h.pack.id + '/' + h.it.href + '"><span class="k">' + esc(h.it.kind) + ' · ' + esc(h.it.where) + '</span><b>' + mark(h.it.title, terms) + '</b><p>' + mark(snippet(h.it.text, terms), terms) + '</p></a>';
    }).join('') + '</div>' : '<p class="empty">Nothing matches "' + esc(input.value) + '". Try a shorter word.</p>';
    window.scrollTo(0, 0);
  }
  function snippet(text, terms) {
    var low = text.toLowerCase(), at = -1;
    terms.forEach(function (t) { var i = low.indexOf(t); if (i >= 0 && (at < 0 || i < at)) at = i; });
    if (at < 0) return text.slice(0, 140) + (text.length > 140 ? '…' : '');
    var s = Math.max(0, at - 50), e = Math.min(text.length, at + 110);
    return (s > 0 ? '…' : '') + text.slice(s, e) + (e < text.length ? '…' : '');
  }
  function mark(s, terms) {
    var out = esc(s);
    terms.forEach(function (t) {
      var re = new RegExp('(' + esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  /* ---------- install + offline ---------- */
  var deferredPrompt = null;
  var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  var embedded = false;
  try { embedded = window.top !== window; } catch (e) { embedded = true; }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; if (state.tab === 'learn') render(); });
  function installCard() {
    if (standalone || embedded || prefs.hideInstall) return '';
    var ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    var how = deferredPrompt ? '<div class="actions"><button class="btn primary" type="button" id="install">Install app</button><button class="btn" type="button" id="install-x">Not now</button></div>'
      : '<p class="note">' + (ios ? 'In Safari, tap the Share button, then <strong>Add to Home Screen</strong>.' : 'Open your browser menu and choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.') +
        ' <a href="#" id="install-x">Hide this</a></p>';
    setTimeout(function () {
      var b = $('install'), x = $('install-x');
      if (b) b.addEventListener('click', function () { deferredPrompt.prompt(); deferredPrompt = null; });
      if (x) x.addEventListener('click', function (e) { e.preventDefault(); prefs.hideInstall = true; savePrefs(); render(); });
    });
    return '<section class="card"><h2>Put it on your home screen</h2><p class="note" style="color:var(--ink)">Installed, it opens like an app and works with no signal: basements, mechanical rooms, new construction.</p>' + how + '</section>';
  }

  function toast(msg, action, fn) {
    var t = $('toast');
    t.innerHTML = '<span>' + esc(msg) + '</span>' + (action ? '<button type="button">' + esc(action) + '</button>' : '');
    t.hidden = false;
    if (action) t.querySelector('button').addEventListener('click', fn);
    else setTimeout(function () { t.hidden = true; }, 3500);
  }

  if ('serviceWorker' in navigator && !embedded && /^(https:|http:\/\/localhost|http:\/\/127\.)/.test(location.href)) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').then(function () {
      if (!hadController) navigator.serviceWorker.ready.then(function () { toast('Saved for offline use.'); });
    }).catch(function () {});
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (hadController) toast('A content update is ready.', 'Reload', function () { location.reload(); });
    });
  }

  render();
})();
