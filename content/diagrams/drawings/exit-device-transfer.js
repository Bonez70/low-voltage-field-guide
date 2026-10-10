// Electrified exit device (panic bar): controller relay triggers the exit device power supply,
// power and the bar's REX switch pass through a power transfer into the door.
module.exports = K => {
  const d = K.diagram({ w: 340, h: 300 });
  d.box('ctrl', { x: 8, y: 10, w: 324, h: 66, title: 'Access controller', sub: 'lock relay and REX input',
    bottom: [['c', 'C', 40], ['no', 'NO', 76], ['g', 'GND', 168], ['rex', 'REX', 198]] });
  d.box('eps', { x: 8, y: 116, w: 112, h: 174, title: ['Exit device', 'power supply'], sub: 'made for inrush', titleY: 44,
    top: [['t1', 'TRIG', 40], ['t2', 'TRIG', 76]], right: [['p', '+', 104], ['n', '−', 121]] });
  d.box('xfer', { x: 146, y: 116, w: 84, h: 174, title: ['Power', 'transfer'], sub: 'hinge or EPT', titleBottom: true,
    top: [['c', '', 30], ['no', '', 60]], left: [['p', '', 104], ['n', '', 121]],
    right: [['ono', '', 54], ['oc', '', 71], ['op', '', 104], ['on', '', 121]] });
  d.box('exit', { x: 252, y: 116, w: 80, h: 174, title: 'Exit device', sub: 'in the door', titleBottom: true,
    left: [['no', 'REX NO', 54], ['c', 'REX C', 71], ['p', '+', 104], ['n', '−', 121]] });

  // Conductors inside the transfer.
  d.lead([[146, 220], [230, 220]]).lead([[146, 237], [230, 237]]);
  d.lead([[176, 116], [176, 187], [230, 187]]).lead([[206, 116], [206, 170], [230, 170]]);

  d.wire('blu', ['ctrl.c', 'eps.t1'], { note: 'Trigger (dry contact)' });
  d.wire('wht', ['ctrl.no', 'eps.t2'], { note: 'Trigger (dry contact)' });
  d.wire('red', ['eps.p', 'xfer.p'], { to: 'Power transfer, + conductor', note: 'Device +' });
  d.wire('blk', ['eps.n', 'xfer.n'], { to: 'Power transfer, − conductor', note: 'Device −' });
  d.wire('red', ['xfer.op', 'exit.p'], { from: 'Power transfer, + conductor', note: 'Device +' });
  d.wire('blk', ['xfer.on', 'exit.n'], { from: 'Power transfer, − conductor', note: 'Device −' });
  d.wire('grn', ['ctrl.rex', 'xfer.no'], { to: 'Power transfer, REX NO conductor', note: 'REX signal' });
  d.wire('blk', ['ctrl.g', 'xfer.c'], { to: 'Power transfer, REX C conductor', note: 'REX signal' });
  d.wire('grn', ['xfer.ono', 'exit.no'], { from: 'Power transfer, REX NO conductor', note: 'REX signal' });
  d.wire('blk', ['xfer.oc', 'exit.c'], { from: 'Power transfer, REX C conductor', note: 'REX signal' });
  return d.done('Electrified exit device with power transfer');
};
