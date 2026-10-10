// Maglock, sensor release: motion REX + PUSH TO EXIT in series with lock power, fire alarm drops the supply.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 372 });
  d.zone(3, 3, 134, 92, 'Fire alarm contractor');
  d.box('fa', { x: 8, y: 10, w: 124, h: 64, title: 'Fire alarm relay', sub: 'opens on alarm', right: [['c', 'C'], ['nc', 'NC']] });
  d.box('psu', { x: 200, y: 10, w: 124, h: 100, title: 'Access power supply', sub: '12 or 24 VDC',
    left: [['fa1', 'FAI'], ['fa2', 'FAI']], right: [['ln', 'LOCK −', 53]],
    bottom: [['lp', 'LOCK +', 22], ['ap', 'AUX +', 70], ['an', 'AUX −', 108]] });
  d.box('ctrl', { x: 8, y: 120, w: 124, h: 152, title: 'Access controller', sub: 'door 1',
    right: [['c', 'LOCK C'], ['nc', 'LOCK NC'], ['no', 'LOCK NO'], null, ['rex', 'REX'], ['g1', 'GND']],
    bottom: [['dps', 'DPS', 34], ['g2', 'GND', 88]] });
  d.box('rex', { x: 200, y: 128, w: 124, h: 120, title: 'Motion REX', sub: 'egress side', titleAt: 'end', titleY: 34,
    top: [['p', '+', 70], ['n', '−', 108]],
    right: [], left: [['c1', 'R1 C'], ['nc1', 'R1 NC'], null, ['no2', 'R2 NO'], ['c2', 'R2 C']], first: { left: 45 } });
  d.box('pte', { x: 200, y: 262, w: 124, h: 50, title: 'PUSH TO EXIT', sub: 'timed, NC opens', titleAt: 'end', left: [['c', 'C', 18], ['nc', 'NC', 35]] });
  d.box('mag', { x: 200, y: 322, w: 124, h: 44, title: 'Maglock', sub: 'fail-safe', left: [['p', '+', 22]], right: [['n', '−', 22]] });
  d.box('dps', { x: 8, y: 304, w: 124, h: 56, title: 'Door position switch', sub: 'closed = door closed', titleBottom: true,
    top: [['a', '', 34], ['b', '', 88]] });

  // Fire alarm relay opens the supply's FA input on alarm: lock power drops.
  d.wire('blu', ['fa.c', 'psu.fa1'], { note: 'Fire alarm contractor' });
  d.wire('wht', ['fa.nc', 'psu.fa2'], { note: 'Fire alarm contractor' });
  // Lock power, in series: supply + → controller relay (C to NC) → motion REX R1 (C to NC) → PUSH TO EXIT (C to NC) → maglock + ... maglock − → supply −.
  d.wire('red', ['psu.lp', { y: 117 }, { x: 140 }, { y: 156 }, 'ctrl.c'], { note: 'Lock +' });
  d.wire('red', ['ctrl.nc', 'rex.c1'], { note: 'Lock +, fail-safe uses NC' });
  d.wire('red', ['rex.nc1', { x: 186 }, { y: 280 }, 'pte.c'], { note: 'Lock +' });
  d.wire('red', ['pte.nc', { x: 186 }, { y: 344 }, 'mag.p'], { note: 'Lock +' });
  d.wire('blk', ['psu.ln', { x: 332 }, { y: 344 }, 'mag.n'], { note: 'Lock −' });
  // Sensor power from the supply's aux output.
  d.wire('red', ['psu.ap', 'rex.p'], { note: 'Sensor power' });
  d.wire('blk', ['psu.an', 'rex.n'], { note: 'Sensor power' });
  // Second REX contact tells the controller it's an exit, not a forced door.
  d.wire('grn', ['rex.no2', 'ctrl.rex'], { note: 'REX signal' });
  d.wire('blk', ['rex.c2', 'ctrl.g1'], { note: 'REX signal' });
  d.wire('wht', ['dps.a', 'ctrl.dps'], { note: 'DPS loop' });
  d.wire('blk', ['dps.b', 'ctrl.g2'], { note: 'DPS loop' });
  return d.done('Maglock with motion REX, PUSH TO EXIT button and fire alarm release');
};
