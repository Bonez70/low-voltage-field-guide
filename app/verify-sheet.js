#!/usr/bin/env node
/*
 * Verify sheet for a system pack's draft content.
 *
 *   node verify-sheet.js fire     writes content/fire/VERIFY-SHEET.md
 *
 * Code values and safety steps in draft content are tagged [VERIFY:key]. Each key is
 * described once in content/<pack>/verify-items.md (### key: title, **Proposed:**, **Source:**)
 * and numbered in that file's order. The sheet quotes the full paragraph around each tag
 * so the reviewer sees every value in context. build.js uses the same numbering for the
 * "Verify #n" markers in the preview, and refuses to publish a pack that still has tags.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const CONTENT = path.join(__dirname, '..', 'content');
const TAG = /\[VERIFY:([a-z0-9-]+)\]/g;

function loadItems(pack) {
  const f = path.join(CONTENT, pack, 'verify-items.md');
  if (!fs.existsSync(f)) return null;
  const items = [];
  let group = '', cur = null;
  fs.readFileSync(f, 'utf8').replace(/\r/g, '').split('\n').forEach(l => {
    let m;
    if ((m = l.match(/^##\s+(.*)$/))) group = m[1].trim();
    else if ((m = l.match(/^###\s+([a-z0-9-]+):\s*(.*)$/))) { cur = { key: m[1], title: m[2].trim(), group, proposed: '', source: '' }; items.push(cur); }
    else if (cur && (m = l.match(/^\*\*Proposed:\*\*\s*(.*)$/))) cur.proposed = m[1];
    else if (cur && (m = l.match(/^\*\*Source:\*\*\s*(.*)$/))) cur.source = m[1];
  });
  items.forEach((it, i) => { it.num = i + 1; });
  return items;
}

/** { key: n } for build.js. */
function numbers(pack) {
  const items = loadItems(pack) || [];
  return Object.fromEntries(items.map(it => [it.key, it.num]));
}

// Every content file of a pack, in reading order, with a function naming where a line sits.
function contentFiles(pack) {
  const dir = path.join(CONTENT, pack);
  const files = [];
  const tdir = path.join(dir, 'training');
  if (fs.existsSync(tdir)) fs.readdirSync(tdir).filter(f => /^\d+.*\.md$/.test(f)).sort().forEach(f => files.push({ rel: 'training/' + f, kind: 'training' }));
  ['reference.md', 'troubleshooting.md'].forEach(f => { if (fs.existsSync(path.join(dir, f))) files.push({ rel: f, kind: f.replace('.md', '') }); });
  return files.map(f => Object.assign(f, { lines: fs.readFileSync(path.join(dir, f.rel), 'utf8').replace(/\r/g, '').split('\n') }));
}

function whereAt(file, idx) {
  let h1 = '', h2 = '';
  for (let i = 0; i <= idx; i++) {
    const l = file.lines[i];
    let m;
    if ((m = l.match(/^#\s+(.*)$/))) h1 = m[1].trim();
    else if ((m = l.match(/^##\s+(.*)$/))) h2 = m[1].trim();
  }
  if (file.kind === 'training') {
    const mod = (h1.match(/^(Module \d+)/) || [])[1] || h1;
    if (!h2) return `${mod} introduction`;
    const lm = h2.match(/^(Lesson \d+\.\d+):\s*(.*)$/);
    return lm ? `${mod}, ${lm[1]} "${lm[2]}"` : `${mod}, ${h2}`;
  }
  if (file.kind === 'reference') return h2 ? `Reference card "${h2.replace(/^Card:\s*/, '')}"` : 'Reference introduction';
  const gm = h2.match(/^(\d+)\.\s*(.*)$/);
  return gm ? `Troubleshooting Guide ${gm[1]} "${gm[2]}"` : 'Troubleshooting introduction';
}

const isList = l => /^\s*([-*]|\d+\.)\s+/.test(l);
const isTable = l => /^\|/.test(l);
const onlyTags = l => l.replace(TAG, '').trim() === '';

// The block of text around line idx: a paragraph, one list item, a whole table row with its header,
// or (for a line that is only tags) the block right above it.
function blockAt(lines, idx) {
  const l = lines[idx];
  if (onlyTags(l)) {
    let j = idx - 1;
    while (j >= 0 && !lines[j].trim()) j--;
    let s = j;
    while (s > 0 && lines[s - 1].trim() && !/^#/.test(lines[s - 1])) s--;
    if (/^```/.test(lines[j])) { s = j - 1; while (s > 0 && !/^```/.test(lines[s])) s--; }
    return lines.slice(s, j + 1).concat(['', l]);
  }
  if (isTable(l)) {
    let s = idx;
    while (s > 0 && isTable(lines[s - 1])) s--;
    return s === idx || s + 1 === idx ? lines.slice(s, idx + 1) : [lines[s], lines[s + 1], l];
  }
  if (isList(l)) {
    const ind = l.match(/^(\s*)/)[1].length;
    let e = idx;
    while (e + 1 < lines.length && lines[e + 1].trim() && !isList(lines[e + 1]) && lines[e + 1].match(/^(\s*)/)[1].length > ind) e++;
    return lines.slice(idx, e + 1);
  }
  let s = idx, e = idx;
  const stop = x => !x.trim() || /^#/.test(x) || isList(x) || isTable(x);
  while (s > 0 && !stop(lines[s - 1])) s--;
  while (e + 1 < lines.length && !stop(lines[e + 1])) e++;
  return lines.slice(s, e + 1);
}

function collect(pack) {
  const uses = {};
  contentFiles(pack).forEach(file => file.lines.forEach((l, i) => {
    let m; TAG.lastIndex = 0;
    const seen = new Set();
    while ((m = TAG.exec(l))) {
      if (seen.has(m[1])) continue;
      seen.add(m[1]);
      (uses[m[1]] = uses[m[1]] || []).push({ file: file.rel, kind: file.kind, line: i + 1, where: whereAt(file, i), block: blockAt(file.lines, i) });
    }
  }));
  return uses;
}

function check(pack) {
  const items = loadItems(pack) || [];
  const uses = collect(pack);
  const known = new Set(items.map(i => i.key));
  const unknown = Object.keys(uses).filter(k => !known.has(k));
  const unused = items.filter(i => !uses[i.key]).map(i => i.key);
  return { items, uses, unknown, unused, count: Object.values(uses).reduce((n, u) => n + u.length, 0) };
}

function sheet(pack, packName) {
  const { items, uses, unknown, unused } = check(pack);
  if (unknown.length) throw new Error('Tags with no entry in verify-items.md: ' + unknown.join(', '));
  if (unused.length) throw new Error('verify-items.md entries not used in the content: ' + unused.join(', '));
  const num = Object.fromEntries(items.map(i => [i.key, i.num]));
  const quote = (block, key) => block.map(l => {
    const t = l.replace(TAG, (m, k) => k === key ? `**⟦#${num[k]}⟧**` : `⟦#${num[k] || '?'}⟧`);
    return t.trim() ? '> ' + t : '>';
  }).join('\n');
  const out = [];
  out.push(`# Verify Sheet: ${packName} Draft`, '');
  out.push(`**Status: waiting on David.** ${items.length} items. Nothing in the ${packName.toLowerCase()} pack goes live until every item is signed off.`, '');
  out.push('Every code value and safety step in the draft, numbered, with the full paragraph it sits in. The value being checked is marked **⟦#n⟧** in the quote. Where the same value appears in several places, the first two are quoted and the rest are listed; one answer covers them all.', '');
  out.push('**How to answer:** reply with the item number and your call, for example:', '`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove`', '`all ok except 7, 22`', '');
  out.push('"Source" is my honest note of where the value comes from. None of it was checked against the code book itself; it\'s general industry knowledge of NFPA 72 and the NEC, so your field experience and your adopted edition win.', '');
  let group = null;
  items.forEach(it => {
    if (it.group !== group) { group = it.group; out.push('---', '', `## ${group}`, ''); }
    out.push(`### ${it.num}. ${it.title}`);
    const u = uses[it.key];
    // Quote the first use, plus the first use from a different kind of file (lesson vs card vs guide).
    const shown = [u[0]];
    const other = u.find(x => x.kind !== u[0].kind);
    if (other) shown.push(other);
    shown.forEach(x => { out.push(`**Where:** ${x.where}`, quote(x.block, it.key), ''); });
    const shownWhere = new Set(shown.map(x => x.where));
    const rest = [...new Set(u.map(x => x.where))].filter(w => !shownWhere.has(w));
    if (rest.length) out.push(`**Also in:** ${rest.join('; ')}`, '');
    out.push(`**Proposed:** ${it.proposed}`, '', `**Source:** ${it.source}`, '');
  });
  return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

module.exports = { loadItems, numbers, check, sheet, TAG };

if (require.main === module) {
  const pack = process.argv[2];
  if (!pack) { console.error('Usage: node verify-sheet.js <pack>'); process.exit(1); }
  const name = { fire: 'Fire Alarm', access: 'Access Control', cctv: 'CCTV', intrusion: 'Intrusion' }[pack] || pack;
  const md = sheet(pack, name);
  const f = path.join(CONTENT, pack, 'VERIFY-SHEET.md');
  fs.writeFileSync(f, md);
  const { items, count } = check(pack);
  console.log(`Wrote ${path.relative(process.cwd(), f)}: ${items.length} items, ${count} tags in the content.`);
}
