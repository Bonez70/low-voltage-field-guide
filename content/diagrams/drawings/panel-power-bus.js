// Generic intrusion panel: transformer, battery, siren, aux-powered device, keypad bus, earth ground.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 366 });
  d.box('pnl', { x: 8, y: 10, w: 112, h: 330, title: 'Intrusion panel', sub: 'control board',
    right: [['ac1', 'AC'], ['ac2', 'AC'], null, ['bp', 'BAT +'], ['bn', 'BAT −'], null, ['sp', 'BELL +'], ['sn', 'BELL −'], null,
      ['ap', 'AUX +'], ['an', 'AUX −'], null, ['kp', 'BUS +'], ['kn', 'BUS −'], ['k1', 'DATA'], ['k2', 'DATA']],
    bottom: [['eg', 'EGND', 40]] });
  const R = { x: 196, w: 136, titleAt: 'end' };
  d.box('xf', Object.assign({ y: 30, h: 48, title: 'Transformer', sub: 'plug-in, per manual', left: [['a', '', 16], ['b', '', 33]] }, R));
  d.box('bat', Object.assign({ y: 84, h: 44, title: 'Battery', sub: '12 V sealed lead-acid', left: [['p', '+', 13], ['n', '−', 30]] }, R));
  d.box('sir', Object.assign({ y: 134, h: 46, title: 'Siren', sub: 'polarity matters', left: [['p', '+', 14], ['n', '−', 31]] }, R));
  d.box('dev', Object.assign({ y: 186, h: 44, title: 'Powered device', sub: 'motion, glass break', left: [['p', '+', 13], ['n', '−', 30]] }, R));
  d.box('kp', Object.assign({ y: 236, h: 80, title: 'Keypad', sub: 'addressed on the bus',
    left: [['p', '+', 14], ['n', '−', 31], ['d1', 'DATA', 48], ['d2', 'DATA', 65]] }, R));

  d.wire('wht', ['pnl.ac1', 'xf.a'], { to: 'Transformer', note: 'Low-voltage AC' });
  d.wire('wht', ['pnl.ac2', 'xf.b'], { to: 'Transformer', note: 'Low-voltage AC' });
  d.wire('red', ['pnl.bp', 'bat.p'], { note: 'Battery lead' });
  d.wire('blk', ['pnl.bn', 'bat.n'], { note: 'Battery lead' });
  d.wire('red', ['pnl.sp', 'sir.p'], { note: 'Siren +' });
  d.wire('blk', ['pnl.sn', 'sir.n'], { note: 'Siren −' });
  d.wire('red', ['pnl.ap', 'dev.p'], { note: 'Device power' });
  d.wire('blk', ['pnl.an', 'dev.n'], { note: 'Device power' });
  d.wire('red', ['pnl.kp', 'kp.p'], { note: 'Bus power' });
  d.wire('blk', ['pnl.kn', 'kp.n'], { note: 'Bus power' });
  d.wire('grn', ['pnl.k1', 'kp.d1'], { note: 'Bus data (color varies by brand)' });
  d.wire('yel', ['pnl.k2', 'kp.d2'], { note: 'Bus data (color varies by brand)' });
  d.wire('grn', ['pnl.eg', { y: 348 }], { to: 'Earth ground', note: 'Per the panel manual' });
  d.earth(48, 348);
  d.text(62, 358, 'Earth ground per the manual', { cls: 'wd-sub' });
  return d.done('Intrusion panel power, siren, aux power and keypad bus');
};
