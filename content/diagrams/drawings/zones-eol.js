// Hardwired zones on a generic intrusion panel: NC with EOL, NO with EOL, double EOL, and a 4-wire motion.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 380 });
  d.box('pnl', { x: 8, y: 10, w: 92, h: 362, title: 'Panel', sub: 'zone inputs',
    right: [['z1', 'Z1', 40], ['c1', 'COM', 80], ['z2', 'Z2', 110], ['c2', 'COM', 150], ['z3', 'Z3', 180], ['c3', 'COM', 228],
      ['z4', 'Z4', 250], ['c4', 'COM', 301], ['ap', 'AUX +', 326], ['an', 'AUX −', 343]] });
  const N = { noTable: true };

  // Z1: normally closed contacts in series, EOL at the last device.
  d.text(112, 40, 'Z1  NC contacts in series', { cls: 'wd-em' });
  d.wire('wht', ['pnl.z1', { x: 300 }, { y: 59 }], N);
  d.wire('blk', [[300, 81], { y: 90 }, 'pnl.c1'], N);
  d.contact(160, 50, 'h', 'NC', 'Door 1', 'bottom').contact(228, 50, 'h', 'NC', 'Door 2', 'bottom');
  d.resistor(300, 70, 'v', 'EOL', 'left');

  // Z2: normally open devices in parallel, EOL across the loop at the last device.
  d.text(112, 110, 'Z2  NO devices in parallel', { cls: 'wd-em' });
  d.wire('wht', ['pnl.z2', { x: 300 }, { y: 129 }], N);
  d.wire('blk', [[300, 151], { y: 160 }, 'pnl.c2'], N);
  [168, 236].forEach((x, i) => {
    d.lead([[x, 120], [x, 160]]).dot(x, 120).dot(x, 160);
    d.contact(x, 140, 'v', 'NO', 'Btn ' + (i + 1), 'left');
  });
  d.resistor(300, 140, 'v', 'EOL', 'left');

  // Z3: double EOL, one resistor in series and one across the contact.
  d.text(112, 180, 'Z3  double EOL', { cls: 'wd-em' });
  d.wire('wht', ['pnl.z3', { x: 300 }, { y: 214 }], N);
  d.wire('blk', [[300, 214], { y: 238 }, 'pnl.c3'], N);
  d.resistor(148, 190, 'h', 'R series', 'bottom');
  d.lead([[212, 190], [212, 212], [268, 212], [268, 190]]).dot(212, 190).dot(268, 190);
  d.resistor(240, 212, 'h', 'R across', 'bottom');
  d.contact(240, 190, 'h', 'NC', 'Contact', 'top');

  // Z4: 4-wire motion: alarm and tamper contacts in series, EOL at the detector, power from AUX.
  d.text(112, 250, 'Z4  4-wire motion', { cls: 'wd-em' });
  d.box('pir', { x: 222, y: 246, w: 110, h: 118, title: ['Motion', 'detector'], titleAt: 'end', titleY: 64,
    left: [['a1', 'ALM', 14], ['a2', 'ALM', 31], ['t1', 'TMP', 48], ['t2', 'TMP', 65], ['p', '+', 90], ['n', '−', 107]] });
  d.wire('wht', ['pnl.z4', 'pir.a1'], N);
  d.lead([[222, 277], [204, 277], [204, 294], [222, 294]]);
  d.text(200, 289, 'jumper', { cls: 'wd-sub', anchor: 'end' });
  d.wire('blk', ['pir.t2', { x: 170 }], N);
  d.wire('blk', [[148, 311], 'pnl.c4'], N);
  d.resistor(159, 311, 'h', 'EOL at detector', 'top');
  d.wire('red', ['pnl.ap', 'pir.p'], { note: 'Detector power' });
  d.wire('blk', ['pnl.an', 'pir.n'], { note: 'Detector power' });
  return d.done('Zone wiring: NC, NO, double EOL, and a 4-wire motion detector');
};
