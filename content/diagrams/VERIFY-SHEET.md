# Verify Sheet: Wiring Diagrams Draft

**Status: 0 of 8 signed off, 8 waiting on David** (items 1 to 8). Each diagram goes live once none of its items are waiting.

Every code value and safety step in the draft, numbered, with the full paragraph it sits in. The value being checked is marked **⟦#n⟧** in the quote. Where the same value appears in several places, the first two are quoted and the rest are listed; one answer covers them all.

**How to answer:** reply with the item number and your call, for example:
`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove`
`all ok except 7, 22`

Each diagram has an "as drawn" item: open it in the review preview (Reference tab of its system, Wiring diagrams) and check the drawing and its connection table, not just the quoted paragraph.

"Source" is my honest note of where the value comes from. None of it was checked against the code book itself; it's general industry knowledge of manufacturer installation instructions, the IBC, NFPA 101, and NFPA 80, so your field experience and your adopted edition win.

---

## Access control diagrams

### 1. Maglock sensor release wiring as drawn
**Where:** Access Control wiring diagram "Maglock with motion REX, PUSH TO EXIT, and fire alarm release"
> A fail-safe maglock on the sensor release path. Lock power runs in series through three contacts: the controller's lock relay (C to NC), the motion REX's first relay (C to NC), and the PUSH TO EXIT button's timed contact (C to NC). Opening any one of them drops the magnet. The fire alarm relay opens the power supply's fire alarm input (FAI), which shuts off the lock output. The motion REX's second relay tells the controller the door opening is an exit, not a forced door. **⟦#1⟧**

**Proposed:** lock power in series through the controller lock relay (C to NC), the motion REX relay (C to NC), and the PUSH TO EXIT timed contact (C to NC) to the maglock; maglock − back to the supply; fire alarm relay contact on the power supply's FA input so an alarm drops the lock output; motion REX powered from the supply's aux output; a second REX contact (NO) to the controller's REX input; DPS to the controller's DPS input.

**Source:** common sensor release wiring from maglock, motion REX, and power supply instructions; follows the signed-off access items sr-requirements, sr-button, and fa-release.

**Shown in the app as:** (Manufacturer instructions; industry practice)

### 2. Motion REX relay in fail-safe mode
**Where:** Access Control wiring diagram "Maglock with motion REX, PUSH TO EXIT, and fire alarm release"
> - Set the motion REX's relay so it holds R1 closed only while powered and idle (often called fail-safe relay mode), so a dead sensor opens the lock circuit instead of leaving it locked. **⟦#2⟧**

**Proposed:** set the motion REX relay that breaks lock power so it's closed only while the sensor is powered and idle (fail-safe relay mode), so losing sensor power unlocks the door.

**Source:** follows from the sensor release rule that loss of power to the sensor unlocks the door (IBC Ch. 10, NFPA 101 7.2.1.6.2); motion REX manuals offer this as a relay mode setting.

**Shown in the app as:** (IBC Ch. 10; NFPA 101 7.2.1.6.2)

### 3. Electric strike wiring as drawn
**Where:** Access Control wiring diagram "Electric strike, fail-secure or fail-safe, with diode"
> An electric strike switched by the controller's lock relay. A fail-secure strike (locked with no power) lands on NO, so the relay powers it only to unlock. A fail-safe strike (unlocked with no power) lands on NC instead, the dashed wire. A diode across the strike terminals, at the strike, with the band toward +, absorbs the voltage spike when the relay opens. **⟦#3⟧**

**Proposed:** supply + to the controller lock relay C; fail-secure strike on NO, fail-safe strike on NC; strike − back to the supply; a diode across the strike terminals at the strike, band to +.

**Source:** controller and strike manufacturer instructions; follows the signed-off access item diode.

**Shown in the app as:** (Manufacturer instructions)

### 4. Electrified exit device wiring as drawn
**Where:** Access Control wiring diagram "Electrified panic bar with power transfer"
> An electrified exit device (panic bar). The controller's lock relay is used as a dry contact to trigger an exit device power supply, which powers the device through a power transfer (electrified hinge, concealed transfer, or door loop) in the hinge edge of the door. The bar's built-in REX switch comes back through the same transfer to the controller's REX input. **⟦#4⟧**

**Proposed:** controller lock relay used as a dry contact (C and NO) to the trigger input of an exit device power supply; supply + and − through a power transfer to the device; the device's REX switch back through the transfer to the controller's REX input and ground.

**Source:** exit device and exit device power supply instructions (common electric latch retraction wiring).

**Shown in the app as:** (Manufacturer instructions)

### 5. Latch retraction on fire doors
**Where:** Access Control wiring diagram "Electrified panic bar with power transfer"
> - **Fire-rated doors:** electrified exit hardware must be listed for the fire door, and electric latch retraction on a fire door must let the latch project again on fire alarm (or loss of power) so the door positively latches. **⟦#5⟧**

**Proposed:** on a fire-rated door, electrified exit hardware must be listed for the fire door, and electric latch retraction must let the latch project again on fire alarm (or loss of power) so the door positively latches; fire exit hardware can't be held retracted during a fire.

**Source:** NFPA 80 (positive latching, fire exit hardware); exit device manufacturer instructions for fire-rated electric latch retraction.

**Shown in the app as:** (NFPA 80)

### 6. Reader, DPS, and REX wiring as drawn
**Where:** Access Control wiring diagram "Reader, door position switch, and REX on a controller"
> One door's low-voltage inputs on a generic controller: a Wiegand reader on the reader port, a door position switch (DPS) on the DPS input, and a REX contact on the REX input. The lock wiring is in the other diagrams. **⟦#6⟧**

**Proposed:** Wiegand reader + power, ground, D0, D1, LED, and beeper to the controller's reader port, shield drain at the controller only; DPS between the DPS input and ground; REX contact between the REX input and ground.

**Source:** controller and reader manufacturer instructions; follows the signed-off access items wiegand-colors and shield-ground.

**Shown in the app as:** (Manufacturer instructions)

---

## Intrusion diagrams

### 7. Panel power, siren, aux, and bus wiring as drawn
**Where:** Intrusion wiring diagram "Panel power, siren, aux power, and keypad bus"
> The power side of a generic panel: the plug-in transformer on AC, the battery on BAT, the siren on BELL, a powered device on AUX, a keypad on the 4-wire data bus, and earth ground. Terminal names differ by brand, but every panel has these same connections. **⟦#7⟧**

**Proposed:** transformer to the AC terminals; battery red to BAT +, black to BAT −; siren + to BELL +, − to BELL −; powered device on AUX + and AUX −; keypad on the 4-wire bus (+, −, and two data wires); earth ground per the manual.

**Source:** common residential and small commercial panel installation manuals; matches the signed-off intrusion lessons 4.5, 4.6, 6.4, and 6.5.

**Shown in the app as:** (Manufacturer instructions)

### 8. Zone wiring as drawn
**Where:** Intrusion wiring diagram "Zones with EOL resistors"
> Four common zone hookups on a generic panel. Z1: normally closed contacts in series, EOL resistor in series at the last device. Z2: normally open devices in parallel, EOL resistor across the loop at the last device. Z3: double EOL, one resistor in series with the loop and one across the contact. Z4: a 4-wire motion detector, its alarm and tamper contacts in series with the EOL at the detector, powered from AUX. **⟦#8⟧**

**Proposed:** NC contacts in series with the EOL in series at the last device; NO devices in parallel with the EOL across the loop at the last device; double EOL with one resistor in series and one across the contact; 4-wire motion with alarm and tamper in series, EOL at the detector, and power from AUX.

**Source:** panel installation manuals; matches the signed-off intrusion lessons 4.1 and 4.2 and the Zone wiring at a glance card.

**Shown in the app as:** (Manufacturer instructions)

