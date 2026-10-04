# Access Control Field Reference

Quick cards for the Reference tab. Each `##` section is one card. Values are common US figures; the approved drawings, the AHJ's adopted code editions, and the manufacturer's instructions always win.

---

## Card: Access door at a glance

```
        SECURE SIDE              |          EGRESS SIDE
                                 |
  [READER]   [DPS in frame head] |  [REX motion above door]
     |              |  DOOR      |
     |              | [LOCK]     |  [lever / exit device]
     |              |            |
  [CONTROLLER] -- [POWER SUPPLY] -- fire alarm release input
```

| Device | Cable (typical) | Controller connection |
|---|---|---|
| Reader | 22/6 shielded (Wiegand) or 22/2 pair + power (OSDP) | Reader port |
| Lock | 18/2 (heavier on long runs) | Lock relay through the power supply |
| DPS | 22/2 | Input, closed when door is closed |
| REX | 22/4 | Input; may also cut lock power |

---

## Card: Fail-safe vs fail-secure

| | Power off | Power on | Used for |
|---|---|---|---|
| **Fail-safe** | Unlocked | Locked | Maglocks, stairwell re-entry, doors that must release on fire alarm |
| **Fail-secure** | Locked | Unlocked | Perimeter doors, fire-rated doors, most strikes and locksets |

- Describes the **secure side** only. The egress side is free either way on a properly installed door. [VERIFY:free-egress]
- Fire-rated doors: fail-secure electrified hardware, listed for fire doors. [VERIFY:fire-door-latch]
- Many strikes and locksets are field-convertible. Check the label or the jumper before you blame the controller.

---

## Card: Lock types compared

| Lock | Where it goes | Egress | Notes |
|---|---|---|---|
| **Electric strike** | Frame, replaces the strike plate | Door's own lever | Must match the latch; watch preload |
| **Rim strike** | Surface of frame | Exit device | For rim panic bars |
| **Maglock** | Frame header, armature on door | Needs sensor release or hardware release (Reference: *Maglock egress: two code paths*) | Fail-safe only; many AHJs restrict |
| **Electrified lockset** | In the door | Inside lever always free | Needs power transfer into the door |
| **Electrified exit device** | On the door | Push bar always free | Latch retraction or electrified trim |
| **Wireless / offline lock** | In the door | Inside lever always free | Battery powered; no door wiring |

---

## Card: Typical lock and device current

Typical values for planning only. **Use the spec sheet** for the actual device. [VERIFY:lock-currents]

| Device | At 12 VDC | At 24 VDC | Draws |
|---|---|---|---|
| Maglock, 600 lb | ≈ 500 mA | ≈ 250 mA | Continuously while locked |
| Maglock, 1,200 lb | ≈ 500 mA | ≈ 250 mA | Continuously while locked |
| Electric strike | ≈ 200 to 450 mA | ≈ 100 to 250 mA | While unlocked (fail-secure) |
| Electrified lockset (solenoid) | ≈ 250 to 500 mA | ≈ 150 to 250 mA | While energized |
| Exit device, solenoid latch retraction | Inrush of several amps | | Needs a supply made for it [VERIFY:exit-device-inrush] |
| Card reader | ≈ 50 to 250 mA | | Continuously |
| Motion REX | ≈ 15 to 30 mA | | Continuously |

---

## Card: Wiegand reader wiring

Most common color convention. **Check the reader's manual.** [VERIFY:wiegand-colors]

| Color | Function |
|---|---|
| Red | + power (usually 12 VDC) |
| Black | Ground |
| Green | Data 0 (D0) |
| White | Data 1 (D1) |
| Brown / orange | LED control |
| Yellow | Beeper |
| Drain | Shield, grounded at controller only [VERIFY:shield-ground] |

- D0 and D1 idle at about 5 V and pulse low.
- Max run about **500 ft** on 22 AWG shielded. [VERIFY:wiegand-distance]

---

## Card: Wiegand 26-bit format

| Bit 1 | Bits 2 to 9 | Bits 10 to 25 | Bit 26 |
|---|---|---|---|
| Even parity (bits 2 to 13) | Facility code 0 to 255 | Card number 0 to 65,535 | Odd parity (bits 14 to 25) |

[VERIFY:wiegand-26]

- Printed card numbers are often "FC-card" (for example 123-45678) or a long decimal of the whole number. Know which before you type one in.
- Other formats: 34, 35, 37 bit and proprietary. The controller must match the cards.

---

## Card: OSDP quick facts

- RS-485, 2 data wires (A/B) plus power and ground; twisted pair for data. [VERIFY:osdp-basics]
- Daisy chain (multi-drop), each reader with its own address; no star wiring. [VERIFY:osdp-basics]
- Up to about **4,000 ft** of RS-485 cable. [VERIFY:osdp-distance]
- 120 Ω termination at both ends of long runs. [VERIFY:osdp-term]
- Default baud rate commonly 9600; address, baud, and keys must match the controller.
- **Secure Channel** (AES-128) encrypts the link. Turn it on. [VERIFY:osdp-secure]
- Supervised: the controller reports a reader that stops answering.

---

## Card: Cable and distance limits

| Run | Limit | Notes |
|---|---|---|
| Wiegand reader | ≈ 500 ft | 22 AWG shielded [VERIFY:wiegand-distance] |
| OSDP / RS-485 | ≈ 4,000 ft | Twisted pair [VERIFY:osdp-distance] |
| Ethernet / PoE | 100 m (328 ft) | Per channel, switch to device [VERIFY:ethernet-100m] |
| Lock power | Voltage drop decides | Use the **Voltage Drop calculator** |
| Reader power | Voltage drop decides | Use the **Reader Cable calculator** |

**Cable ratings:** CL2 general, CL2R riser, CL2P plenum (CM types may substitute). [VERIFY:nec-cable-type]
**Support:** from the structure, not ceiling tiles, grid wires, or pipes. [VERIFY:nec-support]
**Separation:** Class 2 not in the same raceway or box as 120 V without a listed barrier. [VERIFY:nec-separation]

---

## Card: Suppression diode

```
        LOCK
   +  ──┬────┬──  from + output
        │ ▲  │
     coil │band (cathode) to +
        │ │  │
   −  ──┴────┴──  from − output
```

- DC locks: a 1N4001 to 1N4007 diode across the lock terminals, **band to +**, **at the lock**. [VERIFY:diode]
- Backward = dead short across the lock output.
- AC locks: MOV instead of a diode.
- Skip it if the lock has built-in suppression.

---

## Card: Power supply and battery quick rules

- Listed for access control (UL 294) or burglar alarm (UL 603) use. [VERIFY:psu-listing]
- Load to no more than about **80%** of the rating. [VERIFY:psu-80]
- Separate lock power from controller and reader power.
- Battery: **Required Ah = load A × standby h × 1.2**. [VERIFY:batt-factor]
- UL 294 standby levels: I none, II 30 min, III 2 h, IV 4 h. [VERIFY:ul294-standby]
- 24 V = two 12 V batteries in series, same size and age.
- Replace sealed lead-acid batteries every 3 to 5 years; date them. [VERIFY:batt-replace]
- PoE: about 15.4 W per port (12.95 W at the device); PoE+ 30 W (25.5 W). [VERIFY:poe-classes]

Use the **Access Power calculator**.

---

## Card: Meter checks at the door

| Check | Where | Expect |
|---|---|---|
| Lock voltage | At the lock terminals, **lock energized** | Within the lock's rating (often ±10% of 12 or 24 V) |
| Reader power | At the reader, red to black | Within the reader's rating (often about 12 V) |
| Wiegand data | D0 to ground, D1 to ground, idle | About 5 V each; pulses low when a card reads |
| DPS | Disconnected, door closed | Near 0 Ω (closed); OL with door open |
| REX contact | Disconnected | Changes state when you walk up to the door from inside |
| Fire alarm interface | Power supply FA input | Closed in normal (most supplies); opens on alarm |

A lock that reads full voltage with no load can still be starved under load. Always measure energized.

---

## Card: Egress door rules

- Opens from the egress side without a key, tool, or special knowledge or effort. [VERIFY:free-egress]
- One releasing operation. [VERIFY:one-operation]
- Hardware 34 to 48 in above the floor. [VERIFY:hardware-height]
- One hand, no tight grasping, pinching, or twisting; 5 lbf max to operate. [VERIFY:hardware-grasp]
- Interior door opening force 5 lbf max (fire doors: AHJ minimum). [VERIFY:door-force]
- Readers and keypads within 15 to 48 in reach range. [VERIFY:reach-range]
- Panic hardware on assembly and educational doors serving 50 or more, high hazard, and certain electrical rooms; bar at least half the door width. [VERIFY:panic-hardware]

---

## Card: Maglock egress: two code paths

**Path 1: Sensor release** [VERIFY:sr-requirements]
- Egress-side motion sensor unlocks the door; loss of sensor power unlocks
- Loss of lock power unlocks
- **PUSH TO EXIT** button 40 to 48 in high, within 5 ft, cuts lock power directly, unlocked at least 30 s [VERIFY:sr-button]
- Fire alarm or sprinkler activation unlocks until reset [VERIFY:fa-release]
- UL 294 listed [VERIFY:ul294]

**Path 2: Door hardware release** [VERIFY:em-lock]
- Lever or panic bar with a built-in switch that directly cuts lock power
- Obvious operation, one hand
- Loss of power unlocks
- Panic hardware (where required) releases the lock

Get AHJ approval first; many restrict maglocks.

---

## Card: Delayed egress

- Only in occupancies the code allows, in fully sprinklered or fully detected buildings. [VERIFY:de-conditions]
- ≤ 15 lbf for ≤ 3 s starts an irreversible release; unlocks within **15 s** (30 s if AHJ approves); local alarm sounds. [VERIFY:de-timing]
- Rearms manually at the door only. [VERIFY:de-timing]
- Releases immediately on sprinkler or detection activation, power loss, and from the fire command center. [VERIFY:de-release]
- Sign within 12 in above the hardware: "PUSH UNTIL ALARM SOUNDS. DOOR CAN BE OPENED IN 15 SECONDS." Letters 1 in high, 1/8 in stroke. [VERIFY:de-sign]
- No more than one delayed egress door in the path to an exit. [VERIFY:de-conditions]

---

## Card: Fire alarm release

- Fail-safe locks on egress doors unlock on fire alarm and stay unlocked until reset. [VERIFY:fa-release]
- Fire alarm contact in the **lock power path** (power supply FA input), not a software input. [VERIFY:fa-release]
- Fire alarm relay within 3 ft of the controlled device, wiring to the relay supervised. [VERIFY:fa-relay-3ft]
- Stairway doors locked from the stair side unlock for re-entry. [VERIFY:stair-reentry]
- The fire alarm contractor owns the relay; coordinate and test together. [VERIFY:safety-fa-interface]
- Test every fail-safe door at acceptance and after changes, with the fire alarm account on test. [VERIFY:fa-release-test]

---

## Card: Fire-rated doors

- Label on the hinge edge of the door and in the frame.
- Must positively latch: electrified hardware listed for fire doors; strikes fail-secure. [VERIFY:fire-door-latch]
- No field modification beyond what NFPA 80 allows. [VERIFY:fire-door-mod]
- Closer stays; no unlisted hold-opens.
- Inspected and tested every year, with records. [VERIFY:door-inspect]
- Penetrations in rated walls get a listed firestop system. [VERIFY:firestop]

---

## Card: Door test checklist

- [ ] Valid card: unlocks, relocks, logged with the right name and door
- [ ] Invalid and off-schedule card: denied and logged
- [ ] REX trips from inside, not from outside
- [ ] Forced door and held-open alarms report and restore
- [ ] Inside hardware opens the door in every lock state, power off included
- [ ] AC off: runs on battery; AC and battery off: fail-safe unlocks, fail-secure stays locked outside
- [ ] Fire alarm release (fail-safe egress doors), account on test [VERIFY:fa-release-test]
- [ ] Lock voltage at the lock, energized
- [ ] Reader and enclosure tampers report

---

## Glossary

- **Access level (access group):** a set of doors and schedules given to cardholders.
- **Anti-passback:** a card must exit before it can enter again.
- **Armature:** the steel plate on the door that a maglock holds.
- **Backset:** distance from the door edge to the center of the lock's hub.
- **Credential:** card, fob, phone, PIN, or biometric that identifies a person.
- **Delayed egress:** a lock that delays opening an exit door by 15 or 30 seconds, under strict code rules.
- **DPS:** door position switch; tells the controller the door is closed.
- **Edge controller:** a single-door controller at the door, often powered by PoE.
- **Electrified hinge:** a hinge with wires through it to power hardware in the door.
- **Facility code:** the site number in a Wiegand card number.
- **Fail-safe:** unlocked when power is off.
- **Fail-secure:** locked when power is off.
- **First-person-in:** a scheduled unlock waits for the first valid card.
- **Forced door:** the door opened with no valid card or REX.
- **Handing:** which side the hinges are on and which way the door swings.
- **Held open:** the door stayed open past the allowed time.
- **Keeper:** the part of an electric strike that swings free to release the latch.
- **Maglock:** electromagnetic lock.
- **MOV:** metal oxide varistor; suppresses spikes on AC locks.
- **OSDP:** Open Supervised Device Protocol; encrypted, supervised reader wiring over RS-485.
- **Preload:** door pressure on the latch that can bind a strike.
- **REX:** request to exit.
- **RS-485:** two-wire data bus used by OSDP and many controller networks.
- **Sensor release:** code path for a maglock released by an egress-side motion sensor with a push button backup.
- **Shunt:** ignoring the door contact during a valid entry or exit.
- **Wiegand:** older, unencrypted one-way reader wiring.
