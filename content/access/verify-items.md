# Access Control Verify Items

Source list for VERIFY-SHEET.md. Each `### key: title` matches a `[VERIFY:key]` tag in the access content. Items are numbered in the order they appear here; keep the order so numbers stay stable. `**Cite:**` is the short source shown next to the value in the app. When David signs an item off, add `**Status:** signed off ...` and change its tags in the content from `[VERIFY:key]` to `[SRC:key]`. Run `node app/verify-sheet.js access` to regenerate the sheet.

Code references are to the IBC (2018 and 2021), NFPA 101 (2018 and 2021), NFPA 80, NFPA 72, the NEC (2020 and 2023), and the 2010 ADA Standards, from general industry knowledge, not checked against the books. Section numbers moved between editions, so cites name the chapter or topic.

## Safety steps

### safety-egress: Keep egress while working
**Proposed:** never leave a door unable to open from the egress side while you work, even for a few minutes; if hardware comes off, prop the door, post someone at it, or leave it unlocked, and tell the building contact.
**Source:** follows from the free egress rule (IBC Ch. 10, NFPA 101 Ch. 7); standard industry practice.
**Cite:** IBC Ch. 10; NFPA 101 Ch. 7

### safety-notify: Notify before working
**Proposed:** tell the building contact before working on doors, and put the account on test if door alarms are monitored.
**Source:** standard industry practice (monitoring center and customer procedures). No code section.
**Cite:** Industry practice

### safety-fa-interface: Fire alarm contractor for the release
**Proposed:** don't touch or test the fire alarm door release without the fire alarm contractor; put the fire alarm account on test first and follow fire alarm testing rules.
**Source:** NFPA 72 Ch. 14 (testing of emergency control functions, notification before testing); industry practice on who owns the relay.
**Cite:** NFPA 72 Ch. 14

## Egress and door codes

### free-egress: Free egress
**Proposed:** an egress door opens from the egress side without a key, tool, special knowledge, or special effort, whatever the lock does on the secure side.
**Source:** IBC Ch. 10 (door operations, locks and latches); NFPA 101 7.2.1.5.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.5

### one-operation: One releasing operation
**Proposed:** releasing an egress door takes one operation; a lever plus a separate deadbolt or thumb-turn is two and isn't allowed on most exit doors.
**Source:** IBC Ch. 10 (unlatching); NFPA 101 7.2.1.5. Both have limited exceptions (some dwelling units, existing doors).
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.5

### hardware-height: Door hardware 34 to 48 in
**Proposed:** handles, pulls, latches, locks, and other operating parts on accessible doors are 34 to 48 in above the floor.
**Source:** IBC Ch. 10 (hardware height); 2010 ADA Standards 404.2.7. Locks used only for security, not normal operation, may be at any height.
**Cite:** IBC Ch. 10; ADA 404.2.7

### hardware-grasp: One hand, 5 lbf
**Proposed:** door hardware works with one hand without tight grasping, pinching, or twisting of the wrist, and takes no more than 5 lbf to operate.
**Source:** 2010 ADA Standards 309.4 and 404.2.7.
**Cite:** ADA 309.4

### door-force: Interior door opening force 5 lbf
**Proposed:** interior hinged doors open with no more than 5 lbf; fire doors use the minimum the AHJ allows.
**Source:** 2010 ADA Standards 404.2.9; IBC Ch. 10 (door opening force).
**Cite:** ADA 404.2.9

### reach-range: Reader reach range 15 to 48 in
**Proposed:** card readers and keypads are within the 15 to 48 in reach range with clear floor space in front; many specs use 42 to 48 in to the center.
**Source:** 2010 ADA Standards 308 (reach ranges) and 309 (operable parts). The 42 to 48 in figure is common specification practice, not code.
**Cite:** ADA 308

### panic-hardware: Panic hardware
**Proposed:** panic hardware is required on exit doors serving assembly and educational occupancies with 50 or more people, high-hazard occupancies, and certain electrical rooms; its actuating portion extends at least half the door width.
**Source:** IBC Ch. 10 (panic and fire exit hardware); NFPA 101 occupancy chapters; NEC 110.26(C)(3) for large electrical equipment rooms.
**Cite:** IBC Ch. 10

### sr-requirements: Sensor release requirements
**Proposed:** a sensor-release maglock door has an egress-side sensor that unlocks it on approach (loss of sensor power unlocks), loss of lock power unlocks, a manual PUSH TO EXIT button, fire alarm or sprinkler release, and a UL 294 listed locking system.
**Source:** IBC Ch. 10 (sensor release of electrically locked egress doors; "access-controlled egress doors" in older editions); NFPA 101 7.2.1.6.2.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.2

### sr-button: PUSH TO EXIT button
**Proposed:** the button is labeled PUSH TO EXIT, mounted 40 to 48 in above the floor and within 5 ft of the door, cuts lock power directly (independent of the access control electronics), and keeps the door unlocked at least 30 seconds.
**Source:** IBC Ch. 10 (sensor release); NFPA 101 7.2.1.6.2. Some newer editions changed when the button is required; check the adopted edition.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.2

### em-lock: Electromagnetically locked egress doors
**Proposed:** on this path, hardware on the door with an obvious one-hand operation directly cuts maglock power and unlocks the door immediately; loss of power unlocks; required panic hardware also releases it; UL 294 listed.
**Source:** IBC Ch. 10 (electromagnetically locked egress doors); NFPA 101 7.2.1.6.4 (door hardware release of electrically locked egress doors).
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6

### de-conditions: Delayed egress where allowed
**Proposed:** delayed egress locks only in the occupancies the code allows, in buildings with a complete sprinkler system or complete fire detection system, and generally no more than one delayed egress door in the path to an exit.
**Source:** IBC Ch. 10 (delayed egress); NFPA 101 7.2.1.6.1. Healthcare and detention occupancies have their own allowances.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.1

### de-timing: Delayed egress timing
**Proposed:** a force of no more than 15 lbf for no more than 3 seconds starts an irreversible release; the door unlocks within 15 seconds (30 if the AHJ approves); a local audible signal sounds; it rearms only manually at the door.
**Source:** IBC Ch. 10 (delayed egress); NFPA 101 7.2.1.6.1.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.1

### de-release: Delayed egress releases
**Proposed:** delayed egress locks release immediately on sprinkler or fire detection activation, on loss of power, and by a signal from the fire command center where there is one.
**Source:** IBC Ch. 10 (delayed egress); NFPA 101 7.2.1.6.1.
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.1

### de-sign: Delayed egress sign
**Proposed:** a sign above and within 12 in of the release hardware reads "PUSH UNTIL ALARM SOUNDS. DOOR CAN BE OPENED IN 15 SECONDS." (30 where approved), with letters at least 1 in high and 1/8 in stroke.
**Source:** IBC Ch. 10 (delayed egress); NFPA 101 7.2.1.6.1 (NFPA 101's sign wording differs slightly).
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.6.1

### stair-reentry: Stairway re-entry
**Proposed:** stairway doors in multistory buildings generally allow re-entry; where locked from the stair side, they unlock automatically on fire alarm and from the fire command center where there is one; rules depend on building height and code edition.
**Source:** IBC Ch. 10 (stairway doors); NFPA 101 7.2.1.5 (re-entry).
**Cite:** IBC Ch. 10; NFPA 101 7.2.1.5

### door-inspect: Annual door inspection
**Proposed:** fire door assemblies are inspected and tested every year by a qualified person with a written record; NFPA 101 also requires annual inspection of certain egress doors, including doors with panic hardware and electrically controlled egress.
**Source:** NFPA 80 Ch. 5 (inspection, testing, and maintenance); NFPA 101 7.2.1.15.
**Cite:** NFPA 80 Ch. 5; NFPA 101 7.2.1.15

### ul294: UL 294 listing
**Proposed:** access control system units (controllers, readers, electric locks, power supplies) and electrically locked egress door locking systems are listed to UL 294.
**Source:** UL standards catalog; IBC Ch. 10 requires UL 294 for sensor release, electromagnetically locked, and delayed egress locking systems.
**Cite:** UL 294

### ul294-standby: UL 294 standby power levels
**Proposed:** UL 294 standby power levels: Level I none, Level II 30 minutes, Level III 2 hours, Level IV 4 hours; the specification or customer picks the level.
**Source:** UL 294 performance levels (destructive attack, line security, endurance, standby power).
**Cite:** UL 294

### lock-standards: Lock standards
**Proposed:** UL 1034 covers burglary-resistant electric locking mechanisms; the BHMA A156 series grades electric strikes (A156.31), electromagnetic locks (A156.23), and exit devices (A156.3).
**Source:** UL and BHMA standards catalogs.
**Cite:** UL 1034; BHMA A156

## Fire alarm interface and fire doors

### fa-release: Fire alarm release of fail-safe locks
**Proposed:** where the building has a fire alarm or sprinkler system, fail-safe locks on egress doors unlock on fire alarm activation and stay unlocked until the fire alarm is reset; the fire alarm contact goes in the lock power path (the power supply's fire alarm input), not through a controller input and software.
**Source:** IBC Ch. 10 (sensor release, electromagnetically locked doors) and NFPA 101 7.2.1.6 for the release; NFPA 72 Ch. 21 (emergency control functions). Wiring it in the lock power path is industry practice that follows the "independent of the access control electronics" wording.
**Cite:** IBC Ch. 10; NFPA 72 Ch. 21

### fa-relay-3ft: Fire alarm relay within 3 ft
**Proposed:** the fire alarm relay or control module goes within 3 ft of the device it controls, with the fire alarm wiring to the relay supervised (same rule as the signed-off fire pack item).
**Source:** NFPA 72 Ch. 21 (emergency control function interfaces). Matches fire pack item relay-3ft.
**Cite:** NFPA 72 Ch. 21

### fa-release-test: Test the fire alarm release
**Proposed:** test the fire alarm release on every fail-safe egress door at acceptance and after any change to either system, with the fire alarm account on test: activate, confirm each door releases, reset, confirm each relocks; record it.
**Source:** NFPA 72 Ch. 14 (acceptance and reacceptance testing of emergency control functions).
**Cite:** NFPA 72 Ch. 14

### fire-door-latch: Fire doors latch; strikes fail-secure
**Proposed:** fire-rated doors must positively latch, so electrified hardware on them must be listed for fire doors and electric strikes on them must be fail-secure.
**Source:** NFPA 80 Ch. 6 (latching and hardware for swinging doors) and the fire listing of the hardware.
**Cite:** NFPA 80

### fire-door-mod: No field modification of fire doors
**Proposed:** don't cut, drill, or enlarge preps on a fire door or frame beyond what NFPA 80 allows; other modifications need the manufacturer or a listing agency, or the label is void.
**Source:** NFPA 80 Ch. 4 (field modifications).
**Cite:** NFPA 80 Ch. 4

### firestop: Firestop rated penetrations
**Proposed:** seal every cable penetration through a fire-rated wall or floor with a listed firestop system for that assembly.
**Source:** IBC Ch. 7 (penetrations); NEC 300.21 (spread of fire).
**Cite:** IBC Ch. 7; NEC 300.21

## Wiring and cable

### nec-class2: Class 2 power limits
**Proposed:** most access power is Class 2: no more than 30 V and 100 VA per output at the voltages used, from a listed Class 2 source.
**Source:** NEC Art. 725 and Ch. 9 Tables 11(A) and 11(B). Same value as the signed-off intrusion item.
**Cite:** NEC 725; Ch. 9 Table 11

### nec-separation: Class 2 separated from power
**Proposed:** Class 2 wiring isn't in the same raceway, box, or enclosure compartment as 120 V wiring unless a listed barrier separates them.
**Source:** NEC 725.136.
**Cite:** NEC 725.136

### nec-cable-type: Cable ratings
**Proposed:** CL2/CL3 general use, CL2R/CL3R risers, CL2P/CL3P plenums; communications cable (CM, CMR, CMP) of the same or higher level may substitute.
**Source:** NEC 725.154 and 725.179 (2020); Art. 722 (2023).
**Cite:** NEC 725 / 722

### nec-support: Cable support
**Proposed:** cable is supported by the building structure with listed hardware, not laid on ceiling tiles or tied to ceiling grid wires, pipes, or conduit.
**Source:** NEC 725.24 and 300.11.
**Cite:** NEC 725.24; 300.11

### ethernet-100m: Ethernet 100 m
**Proposed:** an Ethernet (Category 5e/6) channel to an IP controller or PoE device is limited to 100 m (328 ft).
**Source:** TIA-568 cabling standard; IEEE 802.3.
**Cite:** TIA-568

### shield-ground: Shield grounded at one end
**Proposed:** ground the reader cable shield drain at the controller end only; cut back and tape it at the reader.
**Source:** reader and controller manufacturer manuals; standard practice to avoid ground loops.
**Cite:** Manufacturer manuals

## Readers and protocols

### wiegand-colors: Wiegand wire colors
**Proposed:** red + power, black ground, green D0, white D1, brown or orange LED, yellow beeper, drain shield.
**Source:** the common reader manufacturer convention; not a standard. Always check the manual.
**Cite:** Manufacturer convention

### wiegand-26: 26-bit format
**Proposed:** bit 1 even parity, bits 2 to 9 facility code (0 to 255), bits 10 to 25 card number (0 to 65,535), bit 26 odd parity.
**Source:** the standard 26-bit Wiegand format (often called H10301).
**Cite:** 26-bit Wiegand format

### wiegand-distance: Wiegand 500 ft
**Proposed:** Wiegand reader runs are good to about 500 ft on 22 AWG shielded cable.
**Source:** SIA Wiegand interface standard (AC-01) and reader manufacturer manuals.
**Cite:** SIA AC-01; manufacturer manuals

### osdp-basics: OSDP wiring
**Proposed:** OSDP uses RS-485 (two data wires plus power and ground, twisted pair for data), is two-way and supervised, and multi-drops readers as a daisy chain with each reader on its own address.
**Source:** SIA OSDP standard (also IEC 60839-11-5).
**Cite:** SIA OSDP

### osdp-distance: OSDP 4,000 ft
**Proposed:** OSDP over RS-485 is good to about 4,000 ft with proper twisted pair cable.
**Source:** RS-485 (TIA-485) cable length at OSDP baud rates; SIA OSDP guidance.
**Cite:** SIA OSDP; TIA-485

### osdp-term: OSDP termination
**Proposed:** long RS-485 runs get a 120 Ω terminating resistor at each end of the bus; short runs often don't need it; follow the controller manual.
**Source:** TIA-485 practice; controller manufacturer manuals.
**Cite:** TIA-485; manufacturer manuals

### osdp-secure: OSDP Secure Channel
**Proposed:** OSDP Secure Channel encrypts the reader link with AES-128; without it OSDP is supervised but not encrypted.
**Source:** SIA OSDP standard (Secure Channel Protocol).
**Cite:** SIA OSDP

## Locks and power

### lock-currents: Typical lock currents
**Proposed:** typical planning values: maglocks (600 and 1,200 lb) about 500 mA at 12 V or 250 mA at 24 V, continuous while locked; electric strikes about 200 to 450 mA at 12 V, only while unlocked; electrified locksets about 250 to 500 mA at 12 V; readers 50 to 250 mA; motion REX 15 to 30 mA. Always use the spec sheet.
**Source:** typical manufacturer spec sheets; not a standard.
**Cite:** Typical spec sheets

### exit-device-inrush: Solenoid exit device inrush
**Proposed:** solenoid electric latch retraction exit devices draw an inrush of several amps for a fraction of a second and need a power supply or controller made for it; motorized latch retraction draws much less.
**Source:** exit device manufacturer instructions.
**Cite:** Manufacturer instructions

### diode: Suppression diode
**Proposed:** on DC locks without built-in suppression, put a 1N4001 to 1N4007 diode across the lock terminals at the lock, reverse biased (band to +); AC locks get a MOV instead.
**Source:** lock and controller manufacturer instructions; standard industry practice.
**Cite:** Manufacturer instructions

### psu-listing: Power supply listing
**Proposed:** use a power supply listed for access control (UL 294) or burglar alarm (UL 603) use, and for fire alarm use where it's part of a fire alarm system.
**Source:** UL standards catalog; NFPA 72 requires listed fire alarm equipment.
**Cite:** UL 294; UL 603

### psu-80: Load to 80%
**Proposed:** design an access power supply for no more than about 80% of its rated output.
**Source:** common design practice and some manufacturer guidance; not a code requirement.
**Cite:** Design practice

### batt-factor: Battery formula and 1.2 factor
**Proposed:** Required Ah = load current in A × standby hours × 1.2, the same 20% margin used in the signed-off intrusion and fire packs.
**Source:** industry practice; matches the signed-off intrusion battery item.
**Cite:** Industry practice

### batt-replace: Battery replacement
**Proposed:** sealed lead-acid batteries are commonly replaced every 3 to 5 years and dated when installed.
**Source:** battery manufacturer service life ratings; industry practice (the fire pack uses 5 years per NFPA 72).
**Cite:** Battery manufacturers

### poe-classes: PoE power
**Proposed:** standard PoE (802.3af) supplies about 15.4 W per port with about 12.95 W reaching the device; PoE+ (802.3at) supplies 30 W with 25.5 W at the device.
**Source:** IEEE 802.3af and 802.3at.
**Cite:** IEEE 802.3af/at
