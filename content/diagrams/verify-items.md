# Wiring Diagram Verify Items

Source list for VERIFY-SHEET.md. Each `### key: title` matches a `[VERIFY:key]` (or, once signed off, `[SRC:key]`) tag in content/diagrams/*.md. Items are numbered in the order they appear here; keep the order so numbers stay stable. `**Cite:**` is the short source shown next to the value in the app. When David signs an item off, add `**Status:** signed off ...` and change its tags from `[VERIFY:key]` to `[SRC:key]`. Run `node app/verify-sheet.js diagrams` to regenerate the sheet.

The diagram notes also reuse values already signed off in the access pack (`[SRC:sr-button]` and the like); those cite the access pack's verify items and aren't asked again. A diagram goes live once none of its own items are waiting.

The "as drawn" items cover the drawing itself: look at the diagram in the review preview and say whether the wiring is right.

## Access control diagrams

### dg-maglock-sr: Maglock sensor release wiring as drawn
**Proposed:** lock power in series through the controller lock relay (C to NC), the motion REX relay (C to NC), and the PUSH TO EXIT timed contact (C to NC) to the maglock; maglock − back to the supply; fire alarm relay contact on the power supply's FA input so an alarm drops the lock output; motion REX powered from the supply's aux output; a second REX contact (NO) to the controller's REX input; DPS to the controller's DPS input.
**Source:** common sensor release wiring from maglock, motion REX, and power supply instructions; follows the signed-off access items sr-requirements, sr-button, and fa-release.
**Cite:** Manufacturer instructions; industry practice

### dg-rex-failsafe: Motion REX relay in fail-safe mode
**Proposed:** set the motion REX relay that breaks lock power so it's closed only while the sensor is powered and idle (fail-safe relay mode), so losing sensor power unlocks the door.
**Source:** follows from the sensor release rule that loss of power to the sensor unlocks the door (IBC Ch. 10, NFPA 101 7.2.1.6.2); motion REX manuals offer this as a relay mode setting.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.2

### dg-strike: Electric strike wiring as drawn
**Proposed:** supply + to the controller lock relay C; fail-secure strike on NO, fail-safe strike on NC; strike − back to the supply; a diode across the strike terminals at the strike, band to +.
**Source:** controller and strike manufacturer instructions; follows the signed-off access item diode.
**Cite:** Manufacturer instructions

### dg-exit-device: Electrified exit device wiring as drawn
**Proposed:** controller lock relay used as a dry contact (C and NO) to the trigger input of an exit device power supply; supply + and − through a power transfer to the device; the device's REX switch back through the transfer to the controller's REX input and ground.
**Source:** exit device and exit device power supply instructions (common electric latch retraction wiring).
**Cite:** Manufacturer instructions

### dg-elr-fire: Latch retraction on fire doors
**Proposed:** on a fire-rated door, electrified exit hardware must be listed for the fire door, and electric latch retraction must let the latch project again on fire alarm (or loss of power) so the door positively latches; fire exit hardware can't be held retracted during a fire.
**Source:** NFPA 80 (positive latching, fire exit hardware); exit device manufacturer instructions for fire-rated electric latch retraction.
**Cite:** NFPA 80

### dg-reader: Reader, DPS, and REX wiring as drawn
**Proposed:** Wiegand reader + power, ground, D0, D1, LED, and beeper to the controller's reader port, shield drain at the controller only; DPS between the DPS input and ground; REX contact between the REX input and ground.
**Source:** controller and reader manufacturer instructions; follows the signed-off access items wiegand-colors and shield-ground.
**Cite:** Manufacturer instructions

## Intrusion diagrams

### dg-panel-power: Panel power, siren, aux, and bus wiring as drawn
**Proposed:** transformer to the AC terminals; battery red to BAT +, black to BAT −; siren + to BELL +, − to BELL −; powered device on AUX + and AUX −; keypad on the 4-wire bus (+, −, and two data wires); earth ground per the manual.
**Source:** common residential and small commercial panel installation manuals; matches the signed-off intrusion lessons 4.5, 4.6, 6.4, and 6.5.
**Cite:** Manufacturer instructions

### dg-zones: Zone wiring as drawn
**Proposed:** NC contacts in series with the EOL in series at the last device; NO devices in parallel with the EOL across the loop at the last device; double EOL with one resistor in series and one across the contact; 4-wire motion with alarm and tamper in series, EOL at the detector, and power from AUX.
**Source:** panel installation manuals; matches the signed-off intrusion lessons 4.1 and 4.2 and the Zone wiring at a glance card.
**Cite:** Manufacturer instructions
