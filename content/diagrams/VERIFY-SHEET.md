# Verify Sheet: Wiring Diagrams Draft

**Status: 8 of 10 signed off, 2 waiting on David** (items 9 to 10). Each diagram goes live once none of its items are waiting.

Every code value and safety step in the draft, numbered, with the full paragraph it sits in. The value being checked is marked **⟦#n⟧** in the quote. Where the same value appears in several places, the first two are quoted and the rest are listed; one answer covers them all.

**How to answer:** reply with the item number and your call, for example:
`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove`
`all ok except 7, 22`

Each diagram has an "as drawn" item: open it in the review preview (Reference tab of its system, Wiring diagrams) and check the drawing and its connection table, not just the quoted paragraph.

"Source" is my honest note of where the value comes from. None of it was checked against the code book itself; it's general industry knowledge of manufacturer installation instructions, the IBC, NFPA 101, and NFPA 80, so your field experience and your adopted edition win.

---

## Delayed egress (added 2026-10-10)

### 9. Delayed egress maglock wiring as drawn
**Where:** Access Control wiring diagram "Delayed egress maglock with an external alarm"
> A delayed egress maglock with its own timer and local alarm. The access power supply feeds it, and the fire alarm relay opens the supply's fire alarm input so the lock loses power and releases at once. The access controller's relay, used as a dry contact on the bypass input, lets a valid card exit without starting the delay. A keyswitch at the door rearms it after a release. Its alarm relay (C to NC, closed when idle) is wired to a zone on an external alarm panel, with the EOL resistor at the lock. **⟦#9⟧**

**Proposed:** access power supply + and − to the delayed egress maglock, with the fire alarm relay on the supply's FA input so an alarm drops lock power; the access controller relay (C and NO) on the lock's bypass input for a valid card; a rearm keyswitch at the door on the lock's reset input; the lock's alarm relay (C and NC, closed when idle) to an external alarm panel zone with the EOL at the lock.

**Source:** delayed egress maglock and power supply instructions; follows the signed-off access items de-timing, de-release, and fa-release.

**Shown in the app as:** (Manufacturer instructions)

### 10. External alarm adds to the local alarm
**Where:** Access Control wiring diagram "Delayed egress maglock with an external alarm"
> - **External alarm:** the lock's alarm relay opens when a release starts, faulting the panel zone so the panel can sound or report it. It's in addition to the lock's own local alarm at the door, never a replacement for it. **⟦#10⟧**

**Proposed:** the delayed egress lock's alarm output can fault an external alarm panel zone when a release starts, but that's in addition to the required local audible signal at the door, never a replacement for it.

**Source:** IBC Ch. 10 and NFPA 101 7.2.1.6.1 require the local audible signal; the external report is customer choice.

**Shown in the app as:** (IBC Ch. 10; NFPA 101 7.2.1.6.1)

---

## Signed off

- **1. Maglock sensor release wiring as drawn** (signed off by David 2026-10-10): lock power in series through the controller lock relay (C to NC), the motion REX relay (C to NC), and the PUSH TO EXIT timed contact (C to NC) to the maglock; maglock − back to the supply; fire alarm relay contact on the power supply's FA input so an alarm drops the lock output; motion REX powered from the supply's aux output; a second REX contact (NO) to the controller's REX input; DPS to the controller's DPS input. *Source: Manufacturer instructions; industry practice.*
- **2. Motion REX relay in fail-safe mode** (signed off by David 2026-10-10): set the motion REX relay that breaks lock power so it's closed only while the sensor is powered and idle (fail-safe relay mode), so losing sensor power unlocks the door. *Source: IBC Ch. 10; NFPA 101 7.2.1.6.2.*
- **3. Electric strike wiring as drawn** (signed off by David 2026-10-10): supply + to the controller lock relay C; fail-secure strike on NO, fail-safe strike on NC; strike − back to the supply; a diode across the strike terminals at the strike, band to +. *Source: Manufacturer instructions.*
- **4. Electrified exit device wiring as drawn** (signed off by David 2026-10-10): controller lock relay used as a dry contact (C and NO) to the trigger input of an exit device power supply; supply + and − through a power transfer to the device; the device's REX switch back through the transfer to the controller's REX input and ground. *Source: Manufacturer instructions.*
- **5. Latch retraction on fire doors** (signed off by David 2026-10-10): on a fire-rated door, electrified exit hardware must be listed for the fire door, and electric latch retraction must let the latch project again on fire alarm (or loss of power) so the door positively latches; fire exit hardware can't be held retracted during a fire. *Source: NFPA 80.*
- **6. Reader, DPS, and REX wiring as drawn** (signed off by David 2026-10-10): Wiegand reader + power, ground, D0, D1, LED, and beeper to the controller's reader port, shield drain at the controller only; DPS between the DPS input and ground; REX contact between the REX input and ground. *Source: Manufacturer instructions.*
- **7. Panel power, siren, aux, and bus wiring as drawn** (signed off by David 2026-10-10): transformer to the AC terminals; battery red to BAT +, black to BAT −; siren + to BELL +, − to BELL −; powered device on AUX + and AUX −; keypad on the 4-wire bus (+, −, and two data wires); earth ground per the manual. *Source: Manufacturer instructions.*
- **8. Zone wiring as drawn** (signed off by David 2026-10-10): NC contacts in series with the EOL in series at the last device; NO devices in parallel with the EOL across the loop at the last device; double EOL with one resistor in series and one across the contact; 4-wire motion with alarm and tamper in series, EOL at the detector, and power from AUX. *Source: Manufacturer instructions.*

