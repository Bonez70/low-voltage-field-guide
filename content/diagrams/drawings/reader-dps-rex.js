// Wiegand reader, door position switch and REX to one door's inputs on a generic controller.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 298 });
  d.box('ctrl', { x: 8, y: 10, w: 132, h: 280, title: 'Access controller', sub: 'reader port, door inputs',
    right: [['p', '+12V'], ['g', 'GND'], ['d0', 'D0'], ['d1', 'D1'], ['led', 'LED'], ['bz', 'BZR'], ['sh', 'SHLD'], null, null,
      ['dps', 'DPS'], ['g2', 'GND'], null, ['rex', 'REX'], ['g3', 'GND']] });
  d.box('rdr', { x: 208, y: 10, w: 124, h: 128, title: 'Reader', sub: 'Wiegand', titleAt: 'end', titleY: 100,
    left: [['p', '+'], ['g', 'GND'], ['d0', 'D0'], ['d1', 'D1'], ['led', 'LED'], ['bz', 'BZR']] });
  d.box('dps', { x: 208, y: 185, w: 124, h: 48, title: 'Door position', sub: 'closed = door closed', titleAt: 'end', left: [['a', '', 14], ['b', '', 31]] });
  d.box('rex', { x: 208, y: 235, w: 124, h: 50, title: 'REX', sub: 'motion or lever, NO', titleAt: 'end', left: [['a', '', 15], ['b', '', 32]] });

  d.wire('red', ['ctrl.p', 'rdr.p'], { note: 'Reader power' });
  d.wire('blk', ['ctrl.g', 'rdr.g'], { note: 'Ground' });
  d.wire('grn', ['ctrl.d0', 'rdr.d0'], { note: 'Data 0' });
  d.wire('wht', ['ctrl.d1', 'rdr.d1'], { note: 'Data 1' });
  d.wire('brn', ['ctrl.led', 'rdr.led'], { note: 'LED control (orange on some readers)' });
  d.wire('yel', ['ctrl.bz', 'rdr.bz'], { note: 'Beeper' });
  d.wire('gry', ['ctrl.sh', [300, 148]], { to: 'nothing at the reader (cut back and tape)', note: 'Shield drain' });
  d.text(150, 161, 'Drain: ground at the controller only;', { cls: 'wd-sub' });
  d.text(150, 172, 'cut back and tape it at the reader', { cls: 'wd-sub' });
  d.wire('wht', ['ctrl.dps', 'dps.a'], { to: 'Door position switch', note: 'DPS loop' });
  d.wire('blk', ['ctrl.g2', 'dps.b'], { to: 'Door position switch', note: 'DPS loop' });
  d.wire('grn', ['ctrl.rex', 'rex.a'], { to: 'REX contact', note: 'REX signal' });
  d.wire('blk', ['ctrl.g3', 'rex.b'], { to: 'REX contact', note: 'REX signal' });
  return d.done('Wiegand reader, door position switch and REX to a controller');
};
