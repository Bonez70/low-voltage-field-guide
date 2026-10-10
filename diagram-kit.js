/*
 * Wiring diagram kit: draws brand-neutral, terminal-level wiring diagrams as inline SVG.
 *
 * Used by build.js. Each drawing in content/diagrams/drawings/<id>.js exports function (K) that
 * returns K.diagram(...) after placing boxes and wires. Colors and text come from CSS classes
 * (app.css, "Wiring diagrams"), so the same SVG reads in light and dark mode.
 *
 *   const d = K.diagram({ w: 340, h: 520 });
 *   d.box('psu', { x, y, w, h, title: 'Power supply', sub: '12/24 VDC',
 *                  left: [['fa1', 'FAI']], bottom: [['p', '+'], ['n', '−']] });
 *   d.wire('red', ['psu.p', { y: 200 }, 'ctrl.c'], { note: '18 AWG' });
 *
 * A route is a list of points: 'box.key' (a terminal), [x, y], { x } (move across), { y } (move down/up).
 * Wires that start and end on terminals are listed in the diagram's connection table.
 */
'use strict';

const COLOR_NAMES = { red: 'Red', blk: 'Black', grn: 'Green', wht: 'White', blu: 'Blue', yel: 'Yellow', brn: 'Brown', org: 'Orange', vio: 'Violet', gry: 'Gray' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const r1 = n => Math.round(n * 10) / 10;

function diagram(opts) {
  const W = opts.w || 340, H = opts.h || 400;
  const layers = { back: [], box: [], wire: [], top: [] };
  const boxes = {};
  const conns = [];
  const T = 7; // terminal size

  function term(ref) {
    const [b, k] = ref.split('.');
    const box = boxes[b];
    if (!box || !box.terms[k]) throw new Error('Unknown terminal ' + ref);
    return box.terms[k];
  }

  const api = {
    /* A device: rounded box, title, optional subtitle, terminals on any side. */
    box(id, o) {
      const { x, y, w, h } = o;
      const pitch = o.pitch || 17;
      const box = { id, title: o.name || [].concat(o.title).join(' '), terms: {} };
      boxes[id] = box;
      layers.box.push(`<rect class="wd-dev${o.dashed ? ' wd-dev-dash' : ''}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>`);
      const nTitle = Array.isArray(o.title) ? o.title.length : 1;
      const titleY = o.titleBottom ? y + h - (o.sub ? 21 : 8) - (nTitle - 1) * 13 : y + (o.titleY || 15);
      const tx = o.titleAt === 'start' ? x + 8 : o.titleAt === 'end' ? x + w - 8 : x + w / 2;
      const ta = o.titleAt === 'start' ? 'start' : o.titleAt === 'end' ? 'end' : 'middle';
      (Array.isArray(o.title) ? o.title : [o.title]).forEach((t, i) => {
        layers.top.push(`<text class="wd-title" x="${tx}" y="${titleY + i * 13}" text-anchor="${ta}">${esc(t)}</text>`);
      });
      if (o.sub) layers.top.push(`<text class="wd-sub" x="${tx}" y="${titleY + (nTitle - 1) * 13 + 12}" text-anchor="${ta}">${esc(o.sub)}</text>`);
      const side = (list, name) => (list || []).forEach((t, i) => {
        if (!t) return; // null leaves a gap
        const [key, label, at] = t;
        let px, py, lx, ly, anchor;
        const first = (o.first && o.first[name]) || (name === 'left' || name === 'right' ? 36 : 22);
        const off = at !== undefined ? at : first + i * pitch;
        if (name === 'left') { px = x; py = y + off; lx = x + 8; ly = py + 3.5; anchor = 'start'; }
        else if (name === 'right') { px = x + w; py = y + off; lx = x + w - 8; ly = py + 3.5; anchor = 'end'; }
        else if (name === 'top') { px = x + off; py = y; lx = px; ly = y + 16; anchor = 'middle'; }
        else { px = x + off; py = y + h; lx = px; ly = y + h - 9; anchor = 'middle'; }
        box.terms[key] = { x: px, y: py, label: label, box: box };
        layers.top.push(`<rect class="wd-term" x="${r1(px - T / 2)}" y="${r1(py - T / 2)}" width="${T}" height="${T}" rx="1"/>`);
        if (label) layers.top.push(`<text class="wd-tl" x="${lx}" y="${ly}" text-anchor="${anchor}">${esc(label)}</text>`);
      });
      side(o.left, 'left'); side(o.right, 'right'); side(o.top, 'top'); side(o.bottom, 'bottom');
      return api;
    },

    /* A wire along an orthogonal route. o.dash for an alternative or optional run, o.note for the table. */
    wire(color, route, o) {
      o = o || {};
      const pts = [];
      route.forEach(p => {
        const last = pts[pts.length - 1];
        if (typeof p === 'string') { const t = term(p); pts.push([t.x, t.y]); }
        else if (Array.isArray(p)) pts.push(p);
        else if (p.x !== undefined) pts.push([p.x, last[1]]);
        else if (p.y !== undefined) pts.push([last[0], p.y]);
      });
      for (let i = 1; i < pts.length; i++) {
        const [a, b] = [pts[i - 1], pts[i]];
        if (Math.abs(a[0] - b[0]) > 0.01 && Math.abs(a[1] - b[1]) > 0.01) throw new Error(`Slanted wire segment ${a} to ${b} in ${JSON.stringify(route)}`);
      }
      const d = 'M' + pts.map(p => r1(p[0]) + ' ' + r1(p[1])).join('L');
      const dash = o.dash ? ' wd-dash' : '';
      layers.wire.push(`<path class="wc${dash}" d="${d}"/><path class="w w-${color}${dash}" d="${d}"/>`);
      const a = o.from || (typeof route[0] === 'string' ? termName(route[0]) : null);
      const b = o.to || (typeof route[route.length - 1] === 'string' ? termName(route[route.length - 1]) : null);
      if (a && b && !o.noTable) conns.push({ a, b, key: color, color: COLOR_NAMES[color] || color, note: o.note || '', dash: !!o.dash });
      return api;
    },

    /* A component lead: thin ink line along an orthogonal route of [x, y] points. */
    lead(points) {
      layers.wire.push(`<path class="wd-sw" d="M${points.map(p => r1(p[0]) + ' ' + r1(p[1])).join('L')}"/>`);
      return api;
    },

    /* Junction dot. */
    dot(x, y) { layers.top.push(`<circle class="wd-dot" cx="${x}" cy="${y}" r="3.2"/>`); return api; },

    /* Free text. cls: 'wd-lbl' (default), 'wd-sub', 'wd-title', 'wd-em'. */
    text(x, y, s, o) {
      o = o || {};
      (Array.isArray(s) ? s : [s]).forEach((line, i) =>
        layers.top.push(`<text class="${o.cls || 'wd-lbl'}" x="${x}" y="${y + i * (o.lh || 12)}" text-anchor="${o.anchor || 'start'}">${esc(line)}</text>`));
      return api;
    },

    /* A label on a wire: a small pill so it reads over the wire. */
    tag(x, y, s) {
      const w = s.length * 5.6 + 8;
      layers.top.push(`<rect class="wd-tag" x="${r1(x - w / 2)}" y="${y - 7}" width="${r1(w)}" height="13" rx="6.5"/><text class="wd-tagt" x="${x}" y="${y + 3}" text-anchor="middle">${esc(s)}</text>`);
      return api;
    },

    /* Dashed outline around a group (e.g. "by the fire alarm contractor"). */
    zone(x, y, w, h, label) {
      layers.back.push(`<rect class="wd-zone" x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/>`);
      if (label) layers.top.push(`<text class="wd-zl" x="${x + 6}" y="${y + h - 5}">${esc(label)}</text>`);
      return api;
    },

    /* Resistor (rectangle body) centred at x,y, 'h' or 'v'. Draw the wire through it first. */
    resistor(x, y, dir, label, labelSide) {
      const [w, h] = dir === 'v' ? [9, 22] : [22, 9];
      layers.top.push(`<rect class="wd-part" x="${r1(x - w / 2)}" y="${r1(y - h / 2)}" width="${w}" height="${h}" rx="1.5"/>`);
      if (label) {
        const ls = labelSide || (dir === 'v' ? 'right' : 'top');
        const lx = ls === 'right' ? x + 9 : ls === 'left' ? x - 9 : x;
        const ly = ls === 'top' ? y - 9 : ls === 'bottom' ? y + 16 : y + 3.5;
        const an = ls === 'right' ? 'start' : ls === 'left' ? 'end' : 'middle';
        layers.top.push(`<text class="wd-lbl" x="${lx}" y="${ly}" text-anchor="${an}">${esc(label)}</text>`);
      }
      return api;
    },

    /* Diode centred at x,y; band points toward dir ('up', 'down', 'left', 'right'). */
    diode(x, y, dir, label) {
      const s = 7;
      const rot = { down: 0, left: 90, up: 180, right: 270 }[dir];
      layers.top.push(`<g transform="translate(${x} ${y}) rotate(${rot})"><path class="wd-part" d="M${-s} ${-s}L${s} ${-s}L0 ${s}Z"/><path class="wd-band" d="M${-s} ${s}L${s} ${s}"/></g>`);
      if (label) layers.top.push(`<text class="wd-lbl" x="${x + 12}" y="${y + 3.5}">${esc(label)}</text>`);
      return api;
    },

    /* Switch contact across a gap in a wire: 'NC' (blade resting on its stop) or 'NO' (blade lifted). dir 'h' or 'v'. */
    contact(x, y, dir, type, label, labelSide) {
      const g = 9;
      const v = dir === 'v';
      const P = (a, b) => v ? `${r1(x + b)} ${r1(y + a)}` : `${r1(x + a)} ${r1(y + b)}`; // a along the wire, b across it
      const blade = type === 'NC' ? `M${P(-g, 0)}L${P(g + 1, 6)}M${P(g, 0)}L${P(g, 6)}` : `M${P(-g, 0)}L${P(g - 2, -8)}`;
      layers.top.push(`<path class="wd-gap" d="M${P(-g + 1, 0)}L${P(g - 1, 0)}"/><path class="wd-sw" d="${blade}"/>` +
        `<circle class="wd-pin" cx="${v ? x : x - g}" cy="${v ? y - g : y}" r="2"/><circle class="wd-pin" cx="${v ? x : x + g}" cy="${v ? y + g : y}" r="2"/>`);
      if (label) {
        const ls = labelSide || (v ? 'left' : 'top');
        const lx = ls === 'right' ? x + 13 : ls === 'left' ? x - 9 : x;
        const ly = ls === 'top' ? y - 13 : ls === 'bottom' ? y + 20 : y + 3.5;
        const an = ls === 'right' ? 'start' : ls === 'left' ? 'end' : 'middle';
        (Array.isArray(label) ? label : [label]).forEach((l, i) =>
          layers.top.push(`<text class="wd-lbl" x="${lx}" y="${ly + i * 11}" text-anchor="${an}">${esc(l)}</text>`));
      }
      return api;
    },

    /* Earth ground symbol hanging below x,y. */
    earth(x, y) {
      layers.top.push(`<path class="wd-sw" d="M${x} ${y}L${x} ${y + 6}M${x - 8} ${y + 6}L${x + 8} ${y + 6}M${x - 5} ${y + 9.5}L${x + 5} ${y + 9.5}M${x - 2} ${y + 13}L${x + 2} ${y + 13}"/>`);
      return api;
    },

    /* Build the result: svg markup and the connection list. */
    done(title) {
      const svg = `<svg class="wd-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title || 'Wiring diagram')}" xmlns="http://www.w3.org/2000/svg">` +
        layers.back.join('') + layers.box.join('') + layers.wire.join('') + layers.top.join('') + '</svg>';
      return { svg, conns, w: W, h: H };
    }
  };

  function termName(ref) {
    const t = term(ref);
    return `${t.box.title} ${t.label || ref.split('.')[1]}`.trim();
  }
  return api;
}

module.exports = { diagram, COLOR_NAMES };
