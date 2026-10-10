// Electric strike on the controller's lock relay: NO for fail-secure, NC for fail-safe, diode across the strike.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 300 });
  d.box('psu', { x: 8, y: 10, w: 134, h: 64, title: 'Access power supply', sub: '12 or 24 VDC', right: [['p', '+']], bottom: [['n', '−', 30]] });
  d.box('ctrl', { x: 196, y: 10, w: 136, h: 96, title: 'Access controller', sub: 'lock relay', titleAt: 'end',
    left: [['c', 'C'], ['no', 'NO'], ['nc', 'NC']] });
  d.box('strike', { x: 196, y: 150, w: 136, h: 110, title: 'Electric strike', sub: 'DC, no built-in diode', titleAt: 'end', titleY: 66,
    left: [['p', '+', 40], ['n', '−', 86]] });

  d.wire('red', ['psu.p', 'ctrl.c'], { note: 'Lock +' });
  d.wire('red', ['ctrl.no', { x: 172 }, { y: 190 }, 'strike.p'], { note: 'Fail-secure strike' });
  d.wire('red', ['ctrl.nc', { x: 156 }, { y: 190 }, { x: 172 }], { to: 'Electric strike +', dash: true, note: 'Fail-safe strike, instead of NO' });
  d.wire('blk', ['psu.n', { y: 236 }, 'strike.n'], { note: 'Lock −' });
  d.dot(172, 190);

  // Diode across the strike terminals, band (cathode) toward +.
  d.lead([[186, 190], [186, 236]]);
  d.dot(186, 190).dot(186, 236);
  d.diode(186, 213, 'up');

  d.text(150, 116, 'NO = fail-secure', { anchor: 'end', cls: 'wd-em' });
  d.text(150, 130, '(locked with no power)', { anchor: 'end' });
  d.text(150, 152, 'NC = fail-safe, dashed', { anchor: 'end', cls: 'wd-em' });
  d.text(150, 166, '(unlocked with no power)', { anchor: 'end' });
  d.text(8, 268, ['Diode across the strike, at the strike:', 'band (stripe) to +.  AC strike: MOV instead.'], { cls: 'wd-lbl', lh: 13 });
  return d.done('Electric strike on the lock relay with a suppression diode');
};
