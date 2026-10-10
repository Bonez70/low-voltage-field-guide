# Access Control Wiring Diagrams

Generic, brand-neutral door wiring. Terminal names are the common generic ones; your controller, power supply, and lock will use their own labels, so match by function and follow the manufacturer's instructions.

<!--
Format: one "## Diagram: Title" section per diagram.
**Drawing:** names content/diagrams/drawings/<id>.js (the SVG and the connection table come from it).
**Related:** lessons (Lesson 4.3), cards (Reference: *Card title*) and guides (Guide 6) that link to this diagram.
A diagram with any VERIFY tag stays off the live site until David signs off its items
(content/diagrams/verify-items.md, then `node app/verify-sheet.js diagrams`).
-->

## Diagram: Maglock with motion REX, PUSH TO EXIT, and fire alarm release
**Drawing:** maglock-sensor-release
**Related:** Lesson 4.3, Lesson 8.3, Lesson 6.4, Reference: *Maglock egress: two code paths*, Reference: *Fire alarm release*, Guide 6, Guide 10

A fail-safe maglock on the sensor release path. Lock power runs in series through three contacts: the controller's lock relay (C to NC), the motion REX's first relay (C to NC), and the PUSH TO EXIT button's timed contact (C to NC). Opening any one of them drops the magnet. The fire alarm relay opens the power supply's fire alarm input (FAI), which shuts off the lock output. The motion REX's second relay tells the controller the door opening is an exit, not a forced door. [VERIFY:dg-maglock-sr]

### How it works

- **Locked:** the controller's relay is at rest, all three contacts are closed, and the magnet holds.
- **Valid card:** the controller energizes its relay, NC opens, and the magnet lets go for the unlock time.
- **Someone walks up from the egress side:** the motion REX opens R1 and the door unlocks before they reach it. Loss of power to the sensor must also unlock it. [SRC:sr-requirements]
- Set the motion REX's relay so it holds R1 closed only while powered and idle (often called fail-safe relay mode), so a dead sensor opens the lock circuit instead of leaving it locked. [VERIFY:dg-rex-failsafe]
- **PUSH TO EXIT:** cuts lock power directly, with no help from the controller, and keeps the door unlocked at least 30 seconds. Mount it 40 to 48 in above the floor, within 5 ft of the door, labeled PUSH TO EXIT. [SRC:sr-button]
- **Fire alarm:** the relay opens, the supply drops the lock output, and the doors stay unlocked until the fire alarm is reset. [SRC:fa-release] The relay goes within 3 ft of the supply's FA input. [SRC:fa-relay-3ft] It belongs to the fire alarm contractor; coordinate and test together. [SRC:safety-fa-interface]
- **Power loss:** a maglock lets go with no power, which is why it's always fail-safe.

### Good to know

- Most maglocks have suppression built in. If yours doesn't, put a diode across its terminals at the lock, band to +. [SRC:diode]
- Many PUSH TO EXIT buttons have a second contact. Wire its NO side to the controller's REX input, in parallel with the motion REX, so a button exit is logged instead of reported as forced.
- Maglocks draw current the whole time they're locked; size the supply with the Access Power calculator. [SRC:lock-currents]
- Get AHJ approval before quoting a maglock; many restrict them. The other code path, a switch in the door hardware, is in Lesson 8.4.

### Check it before you leave

- [ ] Valid card unlocks; the door relocks after the unlock time.
- [ ] Walk up from the egress side: it unlocks before you reach the door. It can't be tripped from the secure side through the door gap.
- [ ] Unplug the motion REX's power: the door unlocks.
- [ ] Press PUSH TO EXIT: the door unlocks and stays unlocked at least 30 seconds, even with the controller off. [SRC:sr-button]
- [ ] Fire alarm release tested with the fire alarm contractor, account on test. [SRC:fa-release-test]
- [ ] Exit through the door: the controller logs a REX, not a forced door.

---

## Diagram: Electric strike, fail-secure or fail-safe, with diode
**Drawing:** strike-diode
**Related:** Lesson 4.2, Lesson 5.3, Reference: *Suppression diode*, Reference: *Fail-safe vs fail-secure*, Guide 7, Guide 12

An electric strike switched by the controller's lock relay. A fail-secure strike (locked with no power) lands on NO, so the relay powers it only to unlock. A fail-safe strike (unlocked with no power) lands on NC instead, the dashed wire. A diode across the strike terminals, at the strike, with the band toward +, absorbs the voltage spike when the relay opens. [VERIFY:dg-strike]

### How it works

- **Fail-secure on NO:** at rest the relay is open and the strike is locked. A valid card closes the relay, the strike gets power, and the keeper swings free.
- **Fail-safe on NC:** at rest the relay is closed and the strike is powered (locked). A valid card opens the relay and the strike releases.
- The door's own lever still lets people out on a fail-secure strike, so egress doesn't depend on power.

### Good to know

- **Fire-rated doors:** the strike must be fail-secure and listed for fire doors. [SRC:fire-door-latch]
- **Diode:** 1N4001 to 1N4007, at the strike, band (cathode) to +. Backward, it shorts the lock output. AC strikes take a MOV instead. Check for built-in suppression first. [SRC:diode]
- Strikes draw only while unlocked; a door held unlocked on a schedule needs a continuous-duty strike. [SRC:lock-currents]
- Keep lock power off the controller's own supply where you can. Lock kickback on a shared supply is the classic cause of controller reboots (Guide 12).
- Set the strike's voltage (12 or 24 V) to match the supply; many are dual voltage by jumper.

### Check it before you leave

- [ ] Valid card releases the strike; it relocks when the unlock time ends.
- [ ] With the strike energized, measure the voltage at its terminals (Reference: *Meter checks at the door*).
- [ ] The controller and reader don't glitch when the strike releases.
- [ ] Door latches every time it closes, with no preload binding the keeper.

---

## Diagram: Electrified panic bar with power transfer
**Drawing:** exit-device-transfer
**Related:** Lesson 4.4, Lesson 8.2, Reference: *Lock types compared*, Guide 1

An electrified exit device (panic bar). The controller's lock relay is used as a dry contact to trigger an exit device power supply, which powers the device through a power transfer (electrified hinge, concealed transfer, or door loop) in the hinge edge of the door. The bar's built-in REX switch comes back through the same transfer to the controller's REX input. [VERIFY:dg-exit-device]

### How it works

- **Valid card:** the controller's relay closes the trigger, the supply powers the device, and the latch retracts (or the outside trim unlocks).
- **Someone pushes the bar:** the latch releases mechanically, and the bar's REX switch tells the controller it's an exit.

### Good to know

- **Inrush:** a solenoid latch retraction device pulls several amps for a fraction of a second. Power it from a supply made for it, not from the controller's lock output. Motorized devices draw much less. [SRC:exit-device-inrush]
- **Count conductors before you order the transfer:** two for power, two for the REX switch, plus any latch or dogging monitor switches. Check the transfer's wire gauge against the device current and run length (Voltage Drop calculator).
- **Fire-rated doors:** electrified exit hardware must be listed for the fire door, and electric latch retraction on a fire door must let the latch project again on fire alarm (or loss of power) so the door positively latches. [VERIFY:dg-elr-fire]
- Panic hardware is required on certain exit doors; its push pad covers at least half the door width. [SRC:panic-hardware]

### Check it before you leave

- [ ] Valid card retracts the latch (or unlocks the trim); it relatches when the unlock time ends.
- [ ] Push the bar: the controller logs a REX, not a forced door.
- [ ] Measure voltage at the device during retraction, not just at rest.
- [ ] Open and close the door through its full swing: the transfer wires don't pinch or pull.

---

## Diagram: Reader, door position switch, and REX on a controller
**Drawing:** reader-dps-rex
**Related:** Lesson 3.2, Lesson 3.4, Lesson 4.5, Reference: *Wiegand reader wiring*, Reference: *Access door at a glance*, Guide 2, Guide 3, Guide 4

One door's low-voltage inputs on a generic controller: a Wiegand reader on the reader port, a door position switch (DPS) on the DPS input, and a REX contact on the REX input. The lock wiring is in the other diagrams. [VERIFY:dg-reader]

### How it works

- **Reader:** red + power, black ground, green D0, white D1, brown or orange LED, yellow beeper. Check the reader's manual. [SRC:wiegand-colors]
- **Shield drain:** grounded at the controller only; cut it back and tape it at the reader. [SRC:shield-ground]
- **DPS:** most controllers want it closed when the door is closed. Open with no valid read or REX is a forced door; open too long is a held door.
- **REX:** a motion sensor or a switch in the lever or exit device. Set the input for NO or NC to match the contact you use.

### Good to know

- Wiegand is good to about 500 ft on 22 AWG shielded cable. [SRC:wiegand-distance] Use the Reader Cable calculator for longer runs or high-current readers.
- **OSDP readers** use four conductors instead: + power, ground, and a twisted pair for RS-485 data (A and B). [SRC:osdp-basics] Long buses get a terminating resistor at each end. [SRC:osdp-term]
- Readers draw 50 to 250 mA; add them to the supply load. [SRC:lock-currents]

### Check it before you leave

- [ ] Present a card: the reader beeps and its LED changes, and the event shows the right card number.
- [ ] Open the door without a read: forced-door alarm. Prop it: held-door alarm after the held time.
- [ ] Trigger the REX: the door opening logs as an exit.
