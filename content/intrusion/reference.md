# Intrusion Field Reference

Quick cards for the Reference tab. Each `##` section is one card. Values reviewed and signed off by David on 2026-10-04; panel-specific values always defer to the installation manual.

---

## Card: Zone wiring at a glance

```
NC, single EOL (series contacts, resistor at last device)
PANEL Z ──[C1]──[C2]──[C3]──┐
                            [EOL]
PANEL COM ──────────────────┘
Normal = EOL   Open/cut = ALARM   Short = trouble/alarm (panel)

NO, single EOL (parallel devices, resistor across at last device)
PANEL Z ───┬────┬────┬──────┐
          [D1] [D2] [D3]  [EOL]
PANEL COM ─┴────┴────┴──────┘
Normal = EOL   Device closes (short) = ALARM   Cut = TROUBLE

Double EOL (per device: R in series, R across the contact)
PANEL Z ──[R]──┬─[C]─┐
               └─[R]─┘
PANEL COM ─────────────
Closed = R   Open = 2R (ALARM)   Cut = open (TAMPER)   Short = 0 (FAULT)
```

---

## Card: Meter readings on a zone

| Reading (wires off the panel) | Single EOL NC | Single EOL NO | DEOL (equal R) |
|---|---|---|---|
| ≈ EOL value | Normal | Normal | Normal (contact closed) |
| ≈ 2 × EOL | Two resistors in series (miswire) | Miswire | Alarm (contact open) |
| ≈ ½ × EOL | Two resistors in parallel (miswire) | Two EOLs installed | Miswire |
| OL / open | Device open or wire cut | Wire cut | Wire cut / tamper |
| ≈ 0 Ω | Short | Device closed or short | Short |
| Any reading to earth ground | Ground fault | Ground fault | Ground fault |

Tolerance: within about ±10% of the expected value is normal. Higher than expected, with no open, usually means a corroded or loose splice.

---

## Card: Common EOL resistor values

Always use the value the panel manual calls for. Common values seen in the field:

| Value | Color bands (4-band, 5% gold) |
|---|---|
| 1 kΩ | Brown, Black, Red, Gold |
| 2 kΩ | Red, Black, Red, Gold |
| 2.2 kΩ | Red, Red, Red, Gold |
| 4.7 kΩ | Yellow, Violet, Red, Gold |
| 5.6 kΩ | Green, Blue, Red, Gold |
| 10 kΩ | Brown, Black, Orange, Gold |

Color code: Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Gray 8, White 9. Bands 1 and 2 are digits, band 3 is the number of zeros, band 4 is tolerance.

---

## Card: Copper wire resistance

Approximate resistance of solid copper at 68 °F (20 °C), per conductor:

| AWG | Ω per 1,000 ft | Ω per foot |
|---|---|---|
| 22 | 16.1 | 0.0161 |
| 20 | 10.2 | 0.0102 |
| 18 | 6.39 | 0.00639 |
| 16 | 4.02 | 0.00402 |
| 14 | 2.53 | 0.00253 |
| 12 | 1.59 | 0.00159 |

**Voltage drop = 2 × one-way length (ft) × current (A) × Ω per foot.** The 2 accounts for the wire out and back. Use the Voltage Drop calculator.

---

## Card: Battery standby formula

**Required Ah = [(total standby current in A × standby hours) + (total alarm current in A × alarm hours)] × 1.2 safety factor**

- Alarm minutes ÷ 60 = alarm hours (for example 4 min = 0.067 h)
- Round up to the next standard battery size (common sizes 4, 5, 7, 8, 12, 18 Ah)
- Commonly cited standby requirements: about 4 hours for UL residential burglary, 24 hours for UL commercial/certificated burglary, 24 hours for fire
- Check the panel's maximum battery size and charger capability

Use the Battery Standby calculator.

---

## Card: Zone type cheat sheet

| Type | Armed Away | Armed Stay | Disarmed |
|---|---|---|---|
| Entry/Exit | Delay | Delay | Chime (if set) |
| Perimeter | Instant | Instant | Chime (if set) |
| Interior follower | Instant, or delay after entry zone | Bypassed | Ignored |
| Interior instant | Instant | Bypassed | Ignored |
| 24-hour panic/hold-up | Alarm | Alarm | Alarm |
| 24-hour fire | Fire alarm | Fire alarm | Fire alarm |
| 24-hour supervisory | Report | Report | Report |
| Day zone | Alarm | Alarm | Trouble beep |

---

## Card: Device placement quick rules

- **Door contact:** latch side, top of door. Steel doors cut gap; use steel-rated contacts.
- **Overhead door contact:** floor mount at the leading edge or track mount; armored cable.
- **PIR:** rated height (commonly 7 to 7.5 ft), aimed across traffic. Not at heat, vents, sunlit windows, fans.
- **Pet-immune PIR:** exact rated height and orientation; no furniture or stairs pets can climb in view.
- **Dual-tech:** turn microwave range down so it doesn't see through walls or windows.
- **Glass break:** clear line of sight, within rated range (commonly up to about 20 to 25 ft); test with the listed simulator.
- **Keypad:** inside near entry, not visible from outside.
- **Siren:** central, out of reach. Exterior: high and visible.
- **Wireless:** check signal strength before mounting; avoid metal.

---

## Card: Contact ID event codes (common)

Contact ID message: `ACCT 18 Q EEE GG ZZZ`
- ACCT = 4-digit account, 18 = message type, Q = qualifier (1 = new event/opening, 3 = restore/closing), EEE = event code, GG = partition, ZZZ = zone or user number

| Code | Event | | Code | Event |
|---|---|---|---|---|
| 100 | Medical | | 301 | AC loss |
| 110 | Fire | | 302 | Low system battery |
| 120 | Panic | | 344 | RF receiver jam |
| 121 | Duress | | 350 | Communication trouble |
| 122 | Silent panic | | 373 | Fire trouble |
| 130 | Burglary | | 380 | Sensor trouble |
| 131 | Perimeter burglary | | 381 | Loss of RF supervision |
| 132 | Interior burglary | | 383 | Sensor tamper |
| 134 | Entry/exit burglary | | 384 | RF low battery |
| 137 | Tamper | | 401 | Open/close by user |
| 139 | Verified intrusion | | 406 | Cancel |
| 145 | Expansion module tamper | | 570 | Zone bypass |
| 150 | 24-hour non-burglary | | 602 | Periodic test |


---

## Card: Communicator quick facts

- Check cell signal at the panel before mounting; use the communicator's own signal readout.
- Weak signal: remote antenna, relocate within manufacturer limits, or dual-path.
- After install: activate on the provider portal, link to central station account, send test signals, confirm account and zone at the station.
- Periodic test commonly every 24 h; more often for commercial or certificated systems.

---

## Card: Before you leave the job

- [ ] Account taken off test, confirmed with the operator
- [ ] All zones walk-tested and reported correctly
- [ ] AC loss and battery verified
- [ ] Installer code changed from default
- [ ] Customer trained and knows their passcode
- [ ] Zone list and documentation left in panel and uploaded
- [ ] Panel can closed and tamper restored
- [ ] Work area cleaned

---

## Glossary

- **AHJ:** Authority Having Jurisdiction; the office that enforces codes where you work.
- **Abort window:** delay before an alarm is reported so a quick disarm cancels it.
- **Aux power:** the panel's DC output for powering devices.
- **Bus:** shared 4-wire power and data connection for keypads and modules.
- **Bypass:** temporarily ignore a zone.
- **Central station:** monitoring center that receives signals and dispatches.
- **Contact ID / SIA:** common formats for reporting events to the central station.
- **CP-01:** ANSI/SIA standard for false alarm reduction features in control panels.
- **DEOL:** double end-of-line; two resistors per zone to tell alarm from tamper.
- **ECV:** Enhanced Call Verification; two calls to verify before dispatch.
- **EOL:** end-of-line resistor; lets the panel supervise the zone wiring.
- **NC / NO:** normally closed / normally open.
- **Partition:** a group of zones armed and disarmed as its own system.
- **PIR:** passive infrared motion detector.
- **Supervision:** the panel checking that devices and paths are working.
- **Swinger shutdown:** limit on repeated alarms from one zone.
- **Tamper:** a switch or circuit that detects a device or cover being opened.
- **Zone:** one input the panel monitors.
