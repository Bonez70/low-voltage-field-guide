# Fire Alarm Field Reference

Quick cards for the Reference tab. Each `##` section is one card. Values are common NFPA 72 based figures; the approved drawings, the AHJ's adopted edition, and the installation manual always win.

---

## Card: Signal types at a glance

| Signal | Means | Examples | Monitoring center |
|---|---|---|---|
| **Alarm** | Possible fire | Smoke, heat, pull station, waterflow | Dispatches fire department |
| **Supervisory** | Fire protection off-normal | Valve tamper, low air, duct detector (usually), fire pump | Calls the building |
| **Trouble** | Fire alarm system fault | Open, ground, AC loss, low battery, missing device | Calls the service company |

Priority: alarm, then supervisory, then trouble. Alarm and supervisory latch until reset.

---

## Card: Before you test

1. Monitoring center: account **on test**, get operator name, note the time window. [VERIFY:safety-notify]
2. Building: owner, manager, or engineer notified; occupants told if appliances will sound. [VERIFY:safety-notify]
3. **Disable releasing circuits** (suppression) and any output you don't want to run: elevator recall, HVAC shutdown, door unlock. [VERIFY:safety-releasing]
4. Coordinate with sprinkler, elevator, and HVAC trades if their equipment is part of the test.
5. When finished: re-enable everything, reset, panel **normal with no troubles**, account **off test** with the operator.

---

## Card: Circuit classes

```
Class B (one path, EOL at the end)
PANEL ──[D1]──[D2]──[D3]──[EOL]
Open = trouble, devices past the break are lost

Class A (out and back, no EOL)
PANEL OUT ══[D1]══[D2]══[D3]══╗
PANEL RET ════════════════════╝
Open = trouble, every device still works

Class X = Class A + isolators, survives a short
```

- No T-taps on conventional IDCs, NACs, or any Class A circuit. [VERIFY:no-ttaps]
- T-taps on Class B addressable SLC only if the manufacturer allows. [VERIFY:no-ttaps]
- Class A outgoing and return run in separate cables or raceways. [VERIFY:classa-separation]

---

## Card: Meter readings on fire circuits

Circuit **disconnected** from the panel, panel and account on test.

| Reading | Conventional IDC | NAC (appliances polarized) |
|---|---|---|
| ≈ EOL value | Good | Good (in the reverse direction) |
| Lower than EOL one way, EOL the other | Normal for two-wire smokes | Normal (appliances seen forward) |
| OL in both directions | Open: wire, terminal, missing device or EOL | Open |
| ≈ 0 Ω both directions | Short, or a device in alarm | Short |
| Any reading to earth ground | Ground fault | Ground fault |

**No megohmmeter with devices or the panel connected.** [VERIFY:safety-megger]

---

## Card: Smoke detector placement

Smooth flat ceiling, spot-type. Follow the drawings for beams, slopes, and high ceilings.

- 30 ft nominal spacing, no more than 15 ft from a wall [VERIFY:smoke-spacing]
- Every ceiling point within 21 ft of a detector [VERIFY:smoke-spacing]
- Ceiling, or sidewall with the top of detector within 12 in of the ceiling [VERIFY:smoke-mount]
- Household smoke alarms: 4 in from the wall on the ceiling, or 4 to 12 in down on the wall [VERIFY:smoke-mount]
- At least 3 ft from supply diffusers and return openings [VERIFY:smoke-hvac]
- Not in kitchens, showers, garages, dusty or outside listed temperature (commonly 32 to 100 °F) [VERIFY:smoke-environment]
- Dust covers during construction; remove every one before service [VERIFY:construction-dust]

---

## Card: Heat detector quick rules

- Rating at least 20 °F above the hottest normal ceiling temperature [VERIFY:heat-ambient]
- Common ratings: 135 °F ordinary, 194 °F hot spaces [VERIFY:heat-types]
- Rate-of-rise: commonly about 15 °F per minute [VERIFY:heat-types]
- Use the **listed spacing**; reduce it above about 10 ft ceilings [VERIFY:heat-spacing]
- Every point within 0.7 × listed spacing [VERIFY:heat-spacing]
- Non-restorable heads can't be heat tested
- Heat detectors are property protection, not a substitute for required smoke detection

---

## Card: Pull stations, waterflow, tamper

**Pull stations**
- Within 5 ft of each exit doorway, each floor [VERIFY:pull]
- Operable part 42 to 48 in above the floor [VERIFY:pull]
- No more than 200 ft travel to the nearest one [VERIFY:pull]

**Waterflow (alarm)**
- Signal within 90 s of flow equal to one sprinkler [VERIFY:waterflow-90s]
- Test through the inspector's test valve

**Tamper / valve supervisory (supervisory)**
- Signal within 2 turns of the handwheel or 1/5 of valve travel [VERIFY:tamper-travel]
- Restore only when fully open [VERIFY:tamper-travel]
- Never on the same zone as waterflow [VERIFY:tamper-separate]

---

## Card: Strobe candela and placement

- Wall mount: entire lens 80 to 96 in above the floor [VERIFY:strobe-mount]
- Flash rate 1 to 2 per second [VERIFY:strobe-mount]
- More than 2 visible from one spot: must be synchronized [VERIFY:strobe-sync]

| Room (one wall strobe) | Minimum cd |
|---|---|
| 20 × 20 ft | 15 |
| 28 × 28 ft | 30 |
| 40 × 40 ft | 60 |
| 45 × 45 ft | 75 |
| 54 × 54 ft | 95 |
| 55 × 55 ft | 115 |

[VERIFY:strobe-room-table]

- Corridors up to 20 ft wide: 15 cd minimum, within 15 ft of each end, no more than 100 ft apart [VERIFY:strobe-corridor]
- Sleeping rooms: 177 cd within 24 in of the ceiling, 110 cd if 24 in or more below [VERIFY:strobe-sleeping]

---

## Card: Audibility and tones

Measured in dBA, 5 ft above the floor. [VERIFY:audibility]

| Mode | Minimum |
|---|---|
| Public | 15 dB over average ambient, or 5 dB over 60 s max (greater) [VERIFY:audibility] |
| Private | 10 dB over average ambient, or 5 dB over 60 s max [VERIFY:audibility] |
| Sleeping | Greater of 15 dB over ambient, 5 dB over max, or 75 dBA at the pillow; 520 Hz low-frequency tone [VERIFY:sleeping] |
| Maximum | 110 dBA [VERIFY:audibility] |

```
Temporal-3 (fire evacuation)
█ _ █ _ █ ___  █ _ █ _ █ ___
½s on/off ×3, then 1½s off, repeats every 4 s

Temporal-4 (carbon monoxide)
▌▌▌▌ _____ ▌▌▌▌ _____
4 short pulses, then a pause
```

[VERIFY:temporal]

---

## Card: Secondary power (batteries)

**Required Ah = [(standby A × 24 h) + (alarm A × alarm h)] × 1.2**

| Item | Value |
|---|---|
| Standby | 24 h [VERIFY:batt-standby] |
| Alarm, horns/strobes | 5 min (0.083 h) [VERIFY:batt-alarm-time] |
| Alarm, voice evacuation | 15 min (0.25 h) [VERIFY:batt-alarm-time] |
| Safety margin | 20% [VERIFY:batt-margin] |
| Replace sealed lead-acid | About every 5 years, date every battery [VERIFY:batt-replace] |
| Recharge time | Within 48 h [VERIFY:batt-recharge] |

- Two 12 V batteries in series for 24 V; same size, age, and brand
- Check the panel's maximum battery size and charger capability
- Include NAC extenders and power supplies (each has its own batteries)

Use the Fire Battery calculator.

---

## Card: NAC voltage drop

- Start from **20.4 V** (battery at end of standby), not 24 V [VERIFY:nac-start-volts]
- Regulated 24 V appliances commonly work down to **16 V** [VERIFY:nac-min-volts]
- Use appliance current at minimum voltage when listed
- NAC rating commonly 1.5 to 3 A per circuit; check the panel [VERIFY:nac-rating]

**Drop = 2 × one-way length (ft) × total current (A) × Ω per foot**

| AWG | Ω per foot |
|---|---|
| 18 | 0.00639 |
| 16 | 0.00402 |
| 14 | 0.00253 |
| 12 | 0.00159 |

Lumping all current at the far end is the conservative method. If it fails, the manufacturer's point-to-point calculation may still pass.

Use the NAC Voltage Drop calculator.

---

## Card: Primary power

- Dedicated branch circuit, fire alarm only [VERIFY:primary-dedicated]
- Breaker marked red, "FIRE ALARM CIRCUIT", locked, location recorded at the panel [VERIFY:primary-marking]
- No GFCI or AFCI unless the manufacturer and AHJ allow [VERIFY:primary-no-gfci]
- AC loss to monitoring delayed, commonly 1 to 3 h [VERIFY:ac-delay]

---

## Card: Fire alarm cable

| Marking | Use |
|---|---|
| FPL | General |
| FPLR | Riser (and anywhere FPL is allowed) |
| FPLP | Plenum (anywhere) |
| CI | Circuit integrity, survivability |

- Identify fire alarm circuits at terminal and junction locations (red covers are common) [VERIFY:nec-identify]
- Keep separate from power and non-power-limited circuits
- Support from structure, not ceiling grid wires
- Wire size and length limits: panel manual

---

## Card: Inspection and testing frequencies

| Item | Common frequency |
|---|---|
| Smoke, heat, duct detectors, pull stations | Annual functional test [VERIFY:itm-freq] |
| Horns, strobes, speakers | Annual [VERIFY:itm-freq] |
| Panel and power, trouble signals | Annual [VERIFY:itm-freq] |
| Waterflow, tamper | Semiannual [VERIFY:itm-waterflow] |
| Batteries | Semiannual inspection and test [VERIFY:itm-freq] |
| Smoke sensitivity | 1 year after install, then every other year; up to 5 years if stable [VERIFY:test-sensitivity] |
| Impairment over 4 h in 24 h | Notify AHJ; fire watch may be required [VERIFY:impairment-4h] |

---

## Card: Contact ID fire event codes

| Code | Event |
|---|---|
| 110 | Fire alarm |
| 111 | Smoke |
| 113 | Waterflow |
| 114 | Heat |
| 115 | Pull station |
| 116 | Duct |
| 200 | Fire supervisory |
| 203 | Gate valve (tamper) |
| 301 | AC loss |
| 302 | Low system battery |
| 373 | Fire trouble |
| 602 | Periodic test |

[VERIFY:cid-fire]

Qualifier 1 = new event, 3 = restore. Confirm the panel reports the specific code, not just 110, if the monitoring center needs device type.

---

## Card: Before you leave the job

- [ ] Every disabled device, circuit, and output re-enabled
- [ ] Panel reset, normal, no troubles, no ground faults
- [ ] Account off test, confirmed with the operator
- [ ] AC and batteries good; batteries dated
- [ ] Impairment tags removed (or impairment documented with owner and AHJ)
- [ ] Dust covers removed
- [ ] Test report filled out; deficiencies listed
- [ ] Documentation cabinet updated

---

## Glossary

- **AHJ:** Authority Having Jurisdiction; usually the fire marshal.
- **Alarm verification:** the panel resets a smoke detector and rechecks before declaring an alarm.
- **Annunciator:** remote display that shows what's in alarm.
- **Candela (cd):** brightness rating of a strobe.
- **Class A / B / X:** how a circuit behaves with an open, ground, or short.
- **DACT:** digital alarm communicator transmitter; sends signals over phone lines.
- **dBA:** sound level, A-weighted, used for audibility.
- **EVACS:** emergency voice/alarm communication system.
- **FACP / FACU:** fire alarm control panel / unit.
- **Fire watch:** people patrolling for fire while a system is impaired.
- **FPL / FPLR / FPLP:** power-limited fire alarm cable ratings: general, riser, plenum.
- **IDC:** initiating device circuit (conventional).
- **Impairment:** any time all or part of the system can't do its job.
- **Monitor module:** addressable input for a dry contact.
- **NAC:** notification appliance circuit.
- **NAC power extender:** booster supply that adds NAC capacity.
- **PLFA:** power-limited fire alarm circuit.
- **Record of Completion:** NFPA 72 form documenting the installed system.
- **Retard:** adjustable delay in a waterflow switch.
- **Sequence of operations:** what happens when each device activates.
- **Shunt trip:** breaker that cuts elevator power before sprinklers discharge on it.
- **SLC:** signaling line circuit (addressable).
- **Supervisory:** signal that fire protection equipment is off-normal.
- **Tamper switch:** valve supervisory switch on a sprinkler control valve.
- **Temporal-3:** the standard fire evacuation pattern.
- **Trouble:** signal that the fire alarm system has a fault.
- **Waterflow switch:** detects water moving in a sprinkler pipe.
