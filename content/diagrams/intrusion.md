# Intrusion Wiring Diagrams

Generic, brand-neutral panel wiring. Every panel names its terminals a little differently; match by function and use the values in the panel's installation manual.

<!-- Same format as access.md. -->

## Diagram: Panel power, siren, aux power, and keypad bus
**Drawing:** panel-power-bus
**Related:** Lesson 4.5, Lesson 4.6, Lesson 6.4, Lesson 6.5, Reference: *Battery standby formula*, Guide 4, Guide 5, Guide 6, Guide 9

The power side of a generic panel: the plug-in transformer on AC, the battery on BAT, the siren on BELL, a powered device on AUX, a keypad on the 4-wire data bus, and earth ground. Terminal names differ by brand, but every panel has these same connections. [VERIFY:dg-panel-power]

### How it works

- **AC:** the transformer feeds the board and charges the battery. Use the transformer the manual specifies, on a non-switched outlet, secured with its retaining screw if it has one.
- **Battery:** red to +, black to −. It carries the system when AC fails.
- **BELL:** the alarm output. Most sirens are polarity sensitive: + to BELL +, − to BELL −. Some panels supervise this circuit and need an EOL resistor across it at the siren.
- **AUX:** constant power for motion detectors, glass breaks, and modules, limited by the panel's aux rating.
- **Bus:** two wires for power and two for data, shared by keypads, zone expanders, and receivers. Each device gets its own address. Data wire colors vary by brand; match the terminal labels, not the colors you're used to.
- **Earth ground:** connect it the way the manual says.

### Good to know

- Land every wire before you power up, then follow the manual's power-up order (many say AC first, then battery).
- Add up the standby current on AUX and the bus; it has to stay under the panel's rating, and the battery has to carry it for the required time (Battery Standby calculator).
- Over the panel's rating? Add a supervised auxiliary power supply with its own transformer and battery.
- Keep the bus away from AC power and lighting ballasts.

### Check it before you leave

- [ ] AC and battery troubles are clear.
- [ ] Measure AUX and BELL voltage under load.
- [ ] The farthest keypad shows a clean display and full backlight.
- [ ] Siren test with the account on test.

---

## Diagram: Zones with EOL resistors
**Drawing:** zones-eol
**Related:** Lesson 4.1, Lesson 4.2, Lesson 4.3, Lesson 3.2, Reference: *Zone wiring at a glance*, Reference: *Meter readings on a zone*, Reference: *Common EOL resistor values*, Guide 1, Guide 2, Guide 10

Four common zone hookups on a generic panel. Z1: normally closed contacts in series, EOL resistor in series at the last device. Z2: normally open devices in parallel, EOL resistor across the loop at the last device. Z3: double EOL, one resistor in series with the loop and one across the contact. Z4: a 4-wire motion detector, its alarm and tamper contacts in series with the EOL at the detector, powered from AUX. [VERIFY:dg-zones]

### How it works

- The panel watches each loop for the EOL value. Open, short, or (on DEOL) double the value tells it something changed.
- **The resistor goes at the last device, not at the panel.** A resistor at the panel terminals supervises nothing.
- **DEOL** with two equal resistors reads R when the contact is closed and 2R when it opens, so the panel can tell an alarm from a cut wire or tamper.
- **4-wire motion:** two wires for power from AUX, two for the zone. The jumper puts the tamper in series with the alarm contact, so opening the cover trips the zone. Some installs put the tamper on its own zone instead.

### Good to know

- Use the EOL value in the panel's manual. Common values are 1 k to 10 k.
- Zone wiring styles and EOL values are programmed in the panel; the wiring and the programming have to match.
- Mark resistor locations on the as-built so the next tech can find them.

### Check it before you leave

- [ ] Meter each zone with its wires off the panel (Reference: *Meter readings on a zone*): about the EOL value, nothing to earth ground.
- [ ] Open each device: the zone faults at the keypad.
- [ ] Open the motion detector's cover: tamper or alarm, as programmed.
