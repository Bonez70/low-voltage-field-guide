// Delayed egress maglock: own timer and local alarm, fire alarm drops its supply, card bypass,
// rearm keyswitch at the door, alarm relay to an external alarm panel zone.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 416 });
  d.zone(3, 3, 134, 92, 'Fire alarm contractor');
  d.box('fa', { x: 8, y: 10, w: 124, h: 64, title: 'Fire alarm relay', sub: 'opens on alarm', right: [['c', 'C'], ['nc', 'NC']] });
  d.box('psu', { x: 200, y: 10, w: 124, h: 100, title: 'Access power supply', sub: '12 or 24 VDC',
    left: [['fa1', 'FAI'], ['fa2', 'FAI']], bottom: [['lp', 'LOCK +', 30], ['ln', 'LOCK −', 94]] });
  d.box('del', { x: 200, y: 136, w: 124, h: 196, title: ['Delayed egress', 'maglock'], sub: 'timer, local alarm', titleAt: 'end', titleY: 34,
    top: [['p', '+', 30], ['n', '−', 94]],
    left: [['b1', 'BYP', 80], ['b2', 'BYP', 97], ['r1', 'RST', 131], ['r2', 'RST', 148]],
    bottom: [['ac', 'ALM C', 30], ['anc', 'ALM NC', 82]] });
  d.box('ctrl', { x: 8, y: 150, w: 124, h: 96, title: 'Access controller', sub: 'relay as dry contact', right: [['c', 'C', 66], ['no', 'NO', 83]] });
  d.box('key', { x: 8, y: 254, w: 124, h: 46, title: 'Rearm keyswitch', sub: 'at the door', titleAt: 'start', right: [['a', '', 13], ['b', '', 30]] });
  d.box('pnl', { x: 8, y: 350, w: 124, h: 56, title: 'External alarm', sub: 'alarm panel zone', titleAt: 'start', titleY: 34,
    right: [['z', 'Z', 20], ['com', 'COM', 37]] });

  d.wire('blu', ['fa.c', 'psu.fa1'], { note: 'Fire alarm contractor' });
  d.wire('wht', ['fa.nc', 'psu.fa2'], { note: 'Fire alarm contractor' });
  d.wire('red', ['psu.lp', 'del.p'], { note: 'Lock +' });
  d.wire('blk', ['psu.ln', 'del.n'], { note: 'Lock −' });
  d.wire('org', ['ctrl.c', 'del.b1'], { note: 'Bypass: valid card exits without the delay' });
  d.wire('wht', ['ctrl.no', 'del.b2'], { note: 'Bypass: valid card exits without the delay' });
  d.wire('yel', ['key.a', 'del.r1'], { from: 'Rearm keyswitch', to: 'Delayed egress maglock RST', note: 'Manual rearm at the door' });
  d.wire('blu', ['key.b', 'del.r2'], { from: 'Rearm keyswitch', to: 'Delayed egress maglock RST', note: 'Manual rearm at the door' });
  // Alarm relay to the external panel: closed normally, opens when a release starts. EOL at the lock end.
  d.wire('wht', ['del.ac', { y: 341 }], { noTable: true });
  d.wire('wht', [[230, 361], { y: 370 }, 'pnl.z'], { from: 'Delayed egress maglock ALM C (through EOL)', note: 'Alarm output' });
  d.resistor(230, 351, 'v', 'EOL', 'right');
  d.wire('blk', ['del.anc', { y: 387 }, 'pnl.com'], { note: 'Alarm output' });
  return d.done('Delayed egress maglock with fire alarm release, card bypass, rearm key and external alarm');
};
