#!/usr/bin/env node
/*
 * Security Low Voltage App: content build.
 *
 *   node build.js                       rebuild packs/*.js and sw.js from content/
 *   node build.js --preview out.html    also write a single-file preview (no service worker)
 *   node build.js --drafts --preview out.html
 *                                       preview that also includes draft packs (never published)
 *
 * Content stays as Markdown in ../content/<pack>/ so it can be read and corrected
 * without touching code. Run this after any content change, then publish the app folder.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const verify = require('./verify-sheet.js');

const APP = __dirname;
const CONTENT = path.join(APP, '..', 'content');

// One entry per system pack. Access and CCTV get added here when their content exists.
// draft: true keeps a pack off the live site (it shows as coming soon) until its verify sheet
// is signed off; it only appears in a --drafts preview. A non-draft pack with [VERIFY] tags fails the build.
const PACKS = [
  {
    id: 'intrusion', name: 'Intrusion', blurb: 'Burglary alarm, residential to small commercial',
    calculators: ['battery', 'drop', 'gauge'],
    training: 'training', reference: 'reference.md', troubleshooting: 'troubleshooting.md'
  },
  {
    id: 'fire', name: 'Fire alarm', blurb: 'Fire alarm, NFPA 72 based, small to mid-size commercial',
    calculators: ['firebatt', 'nac', 'gauge'],
    training: 'training', reference: 'reference.md', troubleshooting: 'troubleshooting.md'
  }
];
// Shown in the system switcher as coming soon (draft packs are added to this list on the live site).
const UPCOMING = [
  { id: 'access', name: 'Access control', blurb: 'Card readers, door hardware, and controllers' },
  { id: 'cctv', name: 'CCTV', blurb: 'Cameras, recorders, and network video' }
];
const WITH_DRAFTS = process.argv.includes('--drafts');

/* ---------------- Markdown (the subset the content uses) ---------------- */

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function makeRenderer(ctx) {
  // ctx: { pack, cards: [{id,title}], modules: [{num}], lessons: Set('2.6') }
  function crossLinks(html) {
    const p = '#/' + ctx.pack;
    return html
      .replace(/\b(Guides?) (\d{1,2})\b/g, (m, w, n) => `<a href="${p}/troubleshoot/${n}">${w} ${n}</a>`)
      .replace(/\bLesson (\d)\.(\d)\b/g, (m, a, b) => ctx.lessons.has(a + '.' + b) ? `<a href="${p}/learn/${a}/${a}.${b}">Lesson ${a}.${b}</a>` : m)
      .replace(/\bModule (\d)\b(?!\.\d)/g, (m, n) => ctx.modules.has(Number(n)) ? `<a href="${p}/learn/${n}">Module ${n}</a>` : m)
      .replace(/\b(NAC Voltage Drop|Fire Battery|Battery Standby|Voltage Drop|Wire Gauge) calculator\b/gi, (m, n) => {
        const id = { 'nac voltage drop': 'nac', 'fire battery': 'firebatt', 'battery standby': 'battery', 'voltage drop': 'drop', 'wire gauge': 'gauge' }[n.toLowerCase()];
        return `<a href="${p}/calculators/${id}">${m}</a>`;
      })
      .replace(/Reference: <em>([^<]+)<\/em>/g, (m, t) => {
        const c = ctx.cards.find(c => c.title.toLowerCase() === t.toLowerCase());
        return c ? `Reference: <a href="${p}/reference/${c.id}"><em>${t}</em></a>` : m;
      });
  }

  function inline(s) {
    const codes = [];
    s = esc(s).replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => /^https?:/.test(u) ? `<a href="${u}" target="_blank" rel="noopener">${t}</a>` : t);
    s = crossLinks(s);
    const src = k => ctx.cites[k] ? `<span class="src">(${esc(ctx.cites[k])})</span>` : '';
    s = s.replace(/\[SRC:([a-z0-9-]+)\]/g, (m, k) => src(k))
      .replace(/\[VERIFY:([a-z0-9-]+)\]/g, (m, k) => src(k) + ` <mark class="verify" title="Waiting on sign-off">Verify #${ctx.verify[k] || '?'}</mark>`);
    return s.replace(/\u0000(\d+)\u0000/g, (m, i) => '<code>' + codes[i] + '</code>');
  }

  const LIST = /^(\s*)([-*]|\d+\.)\s+(.*)$/;

  function blocks(lines, tight) {
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      let m;
      if (/^```/.test(line)) {
        const buf = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
        i++;
        out.push('<div class="scroll"><pre><code>' + esc(buf.join('\n')) + '</code></pre></div>');
      } else if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
        const lvl = Math.min(6, m[1].length + 1); // # in a section body sits under the page title
        out.push(`<h${lvl}>${inline(m[2])}</h${lvl}>`); i++;
      } else if (/^-{3,}\s*$/.test(line)) {
        out.push('<hr>'); i++;
      } else if (/^>/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
        const tip = buf.join(' ').match(/^\*\*Field tip \(David to add\):\*\*\s*(.*)$/);
        if (tip) {
          out.push('<aside class="tip tip-open"><div class="tip-h">Field tip</div><p>Coming soon from a working tech. Topic: ' + inline(tip[1]) + '</p></aside>');
        } else {
          const ft = buf.join(' ').match(/^\*\*Field tip:?\*\*:?\s*(.*)$/);
          out.push(ft ? '<aside class="tip"><div class="tip-h">Field tip</div><p>' + inline(ft[1]) + '</p></aside>'
                      : '<aside class="callout">' + blocks(buf) + '</aside>');
        }
      } else if (/^\|/.test(line) && i + 1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[i + 1])) {
        const row = l => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
        const head = row(line); i += 2;
        const body = [];
        while (i < lines.length && /^\|/.test(lines[i])) body.push(row(lines[i++]));
        out.push('<div class="scroll"><table><thead><tr>' + head.map(h => `<th>${inline(h)}</th>`).join('') +
          '</tr></thead><tbody>' + body.map(r => '<tr>' + r.map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') +
          '</tbody></table></div>');
      } else if ((m = line.match(LIST))) {
        const indent = m[1].length;
        const ordered = /\d/.test(m[2]);
        const items = [];
        while (i < lines.length) {
          const lm = lines[i].match(LIST);
          if (!lm || lm[1].length !== indent || /\d/.test(lm[2]) !== ordered) break;
          const item = [lm[3]]; i++;
          while (i < lines.length && lines[i].trim() && (lines[i].match(/^(\s*)/)[1].length > indent) ) {
            item.push(lines[i].slice(Math.min(indent + 3, lines[i].match(/^(\s*)/)[1].length))); i++;
          }
          items.push(item);
          // a blank line followed by another item at this indent continues the list
          if (i < lines.length && !lines[i].trim() && i + 1 < lines.length) {
            const nm = lines[i + 1].match(LIST);
            if (nm && nm[1].length === indent && /\d/.test(nm[2]) === ordered) i++;
          }
        }
        const start = ordered ? parseInt(m[2], 10) : 1;
        const tag = ordered ? 'ol' : 'ul';
        const lis = items.map(it => {
          let first = it[0], cls = '';
          const cb = first.match(/^\[( |x)\]\s+(.*)$/i);
          if (cb) { first = cb[2]; cls = ' class="check"'; }
          const rest = it.slice(1);
          const inner = inline(first) + (rest.length ? blocks(rest, true) : '');
          return cb ? `<li${cls}><label><input type="checkbox"${cb[1] !== ' ' ? ' checked' : ''}><span>${inner}</span></label></li>` : `<li>${inner}</li>`;
        }).join('');
        const isCheck = items.some(it => /^\[( |x)\]/i.test(it[0]));
        out.push(`<${tag}${start !== 1 ? ` start="${start}"` : ''}${isCheck ? ' class="checklist"' : ''}>${lis}</${tag}>`);
      } else {
        const buf = [];
        while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>|\||-{3,}\s*$)/.test(lines[i]) && !LIST.test(lines[i])) buf.push(lines[i++].trim());
        out.push(tight && out.length === 0 && i >= lines.length ? inline(buf.join(' ')) : '<p>' + inline(buf.join(' ')) + '</p>');
      }
    }
    return out.join('\n');
  }

  return { render: md => blocks(md.replace(/\r/g, '').split('\n')), inline };
}

function plain(md) {
  return md.replace(/```[\s\S]*?```/g, ' ').replace(/\[(VERIFY|SRC):[a-z0-9-]+\]/g, ' ').replace(/[*`>#|]/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/-{3,}/g, ' ').replace(/\s+/g, ' ').trim();
}

// Split a Markdown file into { head, sections: [{ heading, body }] } on ## headings.
function splitH2(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const res = { title: '', head: [], sections: [] };
  let cur = null;
  for (const l of lines) {
    const h1 = l.match(/^#\s+(.*)$/), h2 = l.match(/^##\s+(.*)$/);
    if (h1 && !res.title && !cur) res.title = h1[1].trim();
    else if (h2) { cur = { heading: h2[1].trim(), body: [] }; res.sections.push(cur); }
    else (cur ? cur.body : res.head).push(l);
  }
  const trim = arr => arr.join('\n').replace(/^\s*(-{3,}\s*)?/, '').replace(/(\s*-{3,})?\s*$/, '').trim();
  res.head = trim(res.head);
  res.sections.forEach(s => { s.body = trim(s.body); });
  return res;
}

const slug = s => s.toLowerCase().replace(/^card:\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* ---------------- Pack build ---------------- */

function buildPack(cfg) {
  const dir = path.join(CONTENT, cfg.id);
  const read = f => fs.readFileSync(path.join(dir, f), 'utf8');

  // First pass: names for cross-links.
  const modFiles = fs.readdirSync(path.join(dir, cfg.training)).filter(f => /^\d+.*\.md$/.test(f)).sort();
  const modSrc = modFiles.map(f => splitH2(read(path.join(cfg.training, f))));
  const refSrc = splitH2(read(cfg.reference));
  const tsSrc = splitH2(read(cfg.troubleshooting));
  const vc = verify.check(cfg.id);
  if (!cfg.draft && vc.count) throw new Error(`${cfg.id}: ${vc.count} [VERIFY] tags still in the content. Get them signed off, or mark the pack draft.`);
  if (vc.unknown.length) throw new Error(`${cfg.id}: [VERIFY] tags with no entry in verify-items.md: ${vc.unknown.join(', ')}`);
  const ctx = {
    pack: cfg.id, verify: verify.numbers(cfg.id), cites: verify.cites(cfg.id),
    modules: new Set(modSrc.map(m => Number((m.title.match(/Module (\d+)/) || [])[1]))),
    lessons: new Set(),
    cards: refSrc.sections.map(s => ({ id: slug(s.heading), title: s.heading.replace(/^Card:\s*/, '') }))
  };
  modSrc.forEach(m => m.sections.forEach(s => { const lm = s.heading.match(/^Lesson (\d+\.\d+)/); if (lm) ctx.lessons.add(lm[1]); }));
  const R = makeRenderer(ctx);
  const search = [];
  let openTips = 0;
  const countTips = md => { openTips += (md.match(/Field tip \(David to add\)/g) || []).length; };

  const modules = modSrc.map((m, mi) => {
    const tm = m.title.match(/^Module (\d+):\s*(.*)$/) || [null, String(mi + 1), m.title];
    const num = Number(tm[1]);
    const lessons = [];
    let quiz = null;
    m.sections.forEach(s => {
      countTips(s.body);
      const lm = s.heading.match(/^Lesson (\d+\.\d+):\s*(.*)$/);
      if (lm) {
        lessons.push({ id: lm[1], title: lm[2], html: R.render(s.body), mins: Math.max(2, Math.round(plain(s.body).split(' ').length / 180)) });
        search.push({ kind: 'Lesson', title: `${lm[1]} ${lm[2]}`, where: `Module ${num}`, href: `learn/${num}/${lm[1]}`, text: plain(s.body) });
      } else if (/quiz/i.test(s.heading)) {
        const lines = s.body.split('\n');
        const qs = [], other = [];
        let key = '';
        lines.forEach(l => {
          const q = l.match(/^\d+\.\s+(.*)$/), k = l.match(/^\*\*Answer key:\*\*\s*(.*)$/);
          if (q) qs.push(q[1]); else if (k) key = k[1]; else if (l.trim()) other.push(l);
        });
        // "1) a. 2) b." → per-question answers when the numbering lines up.
        let answers = null;
        if (key) {
          const parts = key.split(/(?:^|\s)(\d+)\)\s+/).slice(1);
          const a = [];
          for (let j = 0; j < parts.length; j += 2) a[Number(parts[j]) - 1] = parts[j + 1].trim();
          if (a.length === qs.length && a.every(Boolean)) answers = a.map(x => R.inline(x.replace(/\.$/, '')));
        }
        quiz = { questions: qs.map(R.inline), answers, keyHtml: key ? R.inline(key) : '', noteHtml: other.length ? R.render(other.join('\n')) : '' };
      }
    });
    countTips(m.head);
    search.push({ kind: 'Module', title: `Module ${num}: ${tm[2]}`, where: 'Learn', href: `learn/${num}`, text: plain(m.head) });
    return { num, title: tm[2], introHtml: R.render(m.head), lessons, quiz };
  });

  const cards = refSrc.sections.map(s => {
    countTips(s.body);
    const id = slug(s.heading), title = s.heading.replace(/^Card:\s*/, '');
    search.push({ kind: 'Reference', title, where: 'Reference', href: `reference/${id}`, text: plain(s.body) });
    return { id, title, html: R.render(s.body) };
  });
  // Each glossary term is its own search hit.
  const gloss = refSrc.sections.find(s => /glossary/i.test(s.heading));
  if (gloss) gloss.body.split('\n').forEach(l => {
    const g = l.match(/^-\s+\*\*(.+?):?\*\*:?\s*(.*)$/);
    if (g) search.push({ kind: 'Glossary', title: g[1].replace(/:$/, ''), where: 'Glossary', href: `reference/${slug(gloss.heading)}`, text: g[2] });
  });

  const guides = tsSrc.sections.map(s => {
    countTips(s.body);
    const gm = s.heading.match(/^(\d+)\.\s*(.*)$/) || [null, '', s.heading];
    const sym = s.body.match(/^\*\*Symptom:\*\*\s*(.*)$/m);
    const body = s.body.replace(/^\*\*Symptom:\*\*.*$/m, '').trim();
    search.push({ kind: 'Troubleshoot', title: gm[2], where: `Guide ${gm[1]}`, href: `troubleshoot/${gm[1]}`, text: plain(s.body) });
    return { num: Number(gm[1]), title: gm[2], symptomHtml: sym ? R.inline(sym[1].charAt(0).toUpperCase() + sym[1].slice(1)) : '', html: R.render(body) };
  });

  if (cfg.draft) {
    // Every page of a draft pack says so.
    const note = `<p class="draft-note"><strong>Draft for review.</strong> Values marked Verify # are waiting on sign-off (${vc.pending.length} of ${vc.items.length} items left).</p>`;
    modules.forEach(m => { m.introHtml = note + m.introHtml; m.lessons.forEach(l => { l.html = note + l.html; }); });
    cards.forEach(c => { c.html = note + c.html; });
    guides.forEach(g => { g.html = note + g.html; });
  }
  return {
    id: cfg.id, name: cfg.name, blurb: cfg.blurb, calculators: cfg.calculators, openTips, draft: !!cfg.draft,
    verifyOpen: vc.count ? vc.pending.length : 0,
    learn: { modules },
    reference: { introHtml: R.render(refSrc.head), cards },
    troubleshoot: { introHtml: R.render(tsSrc.head), guides },
    search
  };
}

/* ---------------- Write outputs ---------------- */

fs.mkdirSync(path.join(APP, 'packs'), { recursive: true });
const all = PACKS.map(buildPack);
const built = all.filter(p => !p.draft);
const drafts = all.filter(p => p.draft);
const liveUpcoming = drafts.map(p => ({ id: p.id, name: p.name, blurb: p.blurb })).concat(UPCOMING);
const packFiles = [];
built.forEach(p => {
  const f = `packs/${p.id}.js`;
  fs.writeFileSync(path.join(APP, f),
    '/* Generated by build.js from content/' + p.id + '/. Do not edit; edit the Markdown and rebuild. */\n' +
    '(window.SLV_PACKS = window.SLV_PACKS || []).push(' + JSON.stringify(p) + ');\n');
  packFiles.push(f);
});
fs.writeFileSync(path.join(APP, 'packs/index.js'),
  '/* Generated by build.js. */\nwindow.SLV_UPCOMING = ' + JSON.stringify(liveUpcoming) + ';\n');
packFiles.unshift('packs/index.js');

// Service worker: precache the whole app; the version is a hash of every file so any change ships an update.
const SHELL = ['./', 'index.html', 'app.css', 'app.js', 'calc-ui.js', 'calculators/calc.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'icons/icon.svg'].concat(packFiles);
const hash = crypto.createHash('sha256');
SHELL.filter(f => f !== './').forEach(f => { const fp = path.join(APP, f); if (fs.existsSync(fp)) hash.update(fs.readFileSync(fp)); });
const version = hash.digest('hex').slice(0, 10);
const swTpl = fs.readFileSync(path.join(APP, 'sw.template.js'), 'utf8');
fs.writeFileSync(path.join(APP, 'sw.js'),
  '/* Generated by build.js from sw.template.js. */\n' +
  swTpl.replace('__VERSION__', version).replace('__FILES__', JSON.stringify(SHELL, null, 2)));

console.log('Built ' + all.map(p => (p.draft ? '[draft, not published] ' : '') + `${p.id}: ${p.learn.modules.length} modules, ${p.learn.modules.reduce((n, m) => n + m.lessons.length, 0)} lessons, ` +
  `${p.reference.cards.length} cards, ${p.troubleshoot.guides.length} guides, ${p.openTips} field tips open` +
  (p.verifyOpen ? `, ${p.verifyOpen} verify items open` : '')).join('; ') + '. Cache version ' + version + '.');

// Single-file preview: same app, everything inline, no service worker or manifest.
const pi = process.argv.indexOf('--preview');
if (pi > 0) {
  const out = process.argv[pi + 1];
  const html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
  const inlineJs = f => '<script>\n' + fs.readFileSync(path.join(APP, f), 'utf8').replace(/<\/script/gi, '<\\/script') + '\n</script>';
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
    .replace(/<meta charset[^>]*>\s*/i, '').replace(/<meta name="viewport"[^>]*>\s*/i, '')
    .replace(/<link rel="(manifest|apple-touch-icon|icon)"[^>]*>\s*/g, '')
    .replace(/<link rel="stylesheet" href="app.css">/, '<style>\n' + fs.readFileSync(path.join(APP, 'app.css'), 'utf8') + '\n</style>');
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
  body = body.replace(/<script src="([^"]+)"><\/script>/g, (m, f) => {
    if (f !== 'packs/index.js' || !WITH_DRAFTS) return inlineJs(f);
    // Preview with drafts: draft packs load as real packs instead of "coming soon".
    return '<script>\nwindow.SLV_UPCOMING = ' + JSON.stringify(UPCOMING) + ';\n' +
      drafts.map(p => '(window.SLV_PACKS = window.SLV_PACKS || []).push(' + JSON.stringify(p).replace(/<\/script/gi, '<\\/script') + ');').join('\n') + '\n</script>';
  });
  fs.writeFileSync(out, head.trim() + '\n' + body.trim() + '\n');
  console.log('Preview written to ' + out);
}
