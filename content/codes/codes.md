# Code Finder

A topic index to the four code books most low voltage work touches. Each entry gives the book, edition, and section to open, plus a short note in our own words on what it covers. No code text, tables, or figures are copied here: open your copy of the book for the exact wording, and check which edition your AHJ has adopted.

Editions indexed: **NFPA 72-2022** (fire alarm), **NFPA 70-2020** (NEC), **NFPA 101-2021** (Life Safety Code), **IBC 2021** (International Building Code). NFPA codes can be read free (view only) at nfpa.org/freeaccess.

Format of each entry (for whoever edits this file): `### key: Topic`, then `**Code:**` (book, edition, section), `**Systems:**` (intrusion, fire, access, cctv), `**Summary:**` (our own words, two or three lines), `**Look for:**` (what to find in the book), `**Search:**` (extra words people might type), `**Related:**` (pack:key of [SRC] tags in the packs, so the entry links to the lessons and cards that use it), and `**Status:**` once David signs it off. Entries without a Status stay off the live site. Section numbers are from general industry knowledge until checked against the books.

## Detection and spacing

### smoke-spacing: Smoke detector spacing on smooth ceilings
**Code:** NFPA 72-2022 §17.7.3.2.3
**Systems:** fire
**Summary:** Spot smoke detectors on a smooth, flat ceiling are laid out on a nominal 30 ft spacing, with no point on the ceiling farther than 0.7 times that spacing from a detector. Beams, joists, slopes, and high airflow all change the layout.
**Look for:** the smooth ceiling rule, then the subsections for beams, joists, sloped and peaked ceilings.
**Search:** detector spacing, 30 ft, 0.7S, 21 ft, layout
**Related:** fire:smoke-spacing

### smoke-mount: Smoke detector mounting position
**Code:** NFPA 72-2022 §17.7.3.2.1
**Systems:** fire
**Summary:** Spot smoke detectors go on the ceiling, or on a sidewall with the top of the detector within 12 in of the ceiling. Keep them away from supply diffusers and returns per the manufacturer's instructions.
**Look for:** ceiling vs sidewall mounting and the distance from the ceiling.
**Search:** wall mount, 12 inches, ceiling mount, diffuser
**Related:** fire:smoke-mount, fire:smoke-hvac

### smoke-environment: Detector environment and listing limits
**Code:** NFPA 72-2022 §17.7.1.8
**Systems:** fire
**Summary:** Smoke detectors are only installed where temperature, humidity, and air speed stay inside the range the detector is listed for. Outside that range, pick a different detector type.
**Look for:** the list of environmental limits (temperature, humidity, velocity) that point back to the listing.
**Search:** humidity, temperature, garage, attic, nuisance alarm
**Related:** fire:smoke-environment

### construction-dust: Detectors during construction
**Code:** NFPA 72-2022 §17.7.1.11
**Systems:** fire
**Summary:** Smoke detectors aren't installed until the area is cleaned up after construction, unless they are needed to protect the space during work. If they go in early, they are protected from dust and cleaned or replaced before acceptance.
**Look for:** the construction dust rule and what has to happen before final acceptance.
**Search:** dust covers, construction, bagging detectors
**Related:** fire:construction-dust

### heat-spacing: Heat detector spacing and rating
**Code:** NFPA 72-2022 §17.6.3.1, §17.6.2.3
**Systems:** fire
**Summary:** Heat detectors are spaced at their listed spacing on smooth ceilings, reduced for high ceilings and beams. The temperature rating is at least 20 °F above the highest normal ceiling temperature.
**Look for:** listed spacing, the high ceiling reduction, and the 20 °F rule.
**Search:** heat detector, 135, 194, rate of rise, listed spacing
**Related:** fire:heat-spacing, fire:heat-ambient

### duct-detectors: Duct smoke detectors
**Code:** NFPA 72-2022 §17.7.5
**Systems:** fire
**Summary:** Duct detectors are installed in the airstream per the manufacturer's listing, accessible for testing, with a remote indicator or test station when the detector can't be seen. Where the system doesn't need them as alarm devices, they often report as supervisory.
**Look for:** placement in the duct, access, remote test stations, and how the signal is annunciated.
**Search:** duct detector, sampling tube, remote test, HVAC shutdown
**Related:** fire:duct-supervisory, fire:duct-remote

### household-smoke: Smoke alarms in dwelling units
**Code:** NFPA 72-2022 §29.8.1
**Systems:** fire, intrusion
**Summary:** Smoke alarms go in each sleeping room, outside each sleeping area near the bedrooms, and on every level including the basement. New construction usually needs them interconnected so one sounds them all.
**Look for:** required locations and the interconnection rule.
**Search:** smoke alarm, bedroom, household, residential, interconnect
**Related:** fire:smoke-mount

### co-detection: Carbon monoxide detection
**Code:** IBC 2021 §915
**Systems:** fire, intrusion
**Summary:** The building code requires CO detection in certain occupancies that have fuel-burning appliances, fireplaces, or attached garages. Location and type (single station or system) depend on the occupancy.
**Look for:** which occupancies need CO detection and where it goes.
**Search:** carbon monoxide, CO detector, fuel burning
**Related:**

## Manual stations and sprinkler monitoring

### pull-stations: Manual fire alarm boxes
**Code:** NFPA 72-2022 §17.15; IBC 2021 §907.4.2
**Systems:** fire
**Summary:** Pull stations go within 5 ft of each exit doorway on each floor, with the operable part 42 to 48 in above the floor, and no more than 200 ft of travel to reach one. The IBC decides which buildings need them at all.
**Look for:** location, mounting height, travel distance, and the IBC exceptions for sprinklered buildings.
**Search:** pull station, manual station, 42 48, 5 ft, 200 ft
**Related:** fire:pull, fire:pull-sprinklered

### waterflow: Sprinkler waterflow alarm
**Code:** NFPA 72-2022 §17.13.2
**Systems:** fire
**Summary:** A waterflow switch has to send its alarm within 90 seconds of a flow equal to one sprinkler head, retard time included.
**Look for:** the 90 second rule for waterflow initiating devices.
**Search:** waterflow, flow switch, retard, 90 seconds, vane
**Related:** fire:waterflow-90s

### tamper-switches: Valve supervisory (tamper) switches
**Code:** NFPA 72-2022 §17.17.2
**Systems:** fire
**Summary:** A valve tamper switch signals within two turns of the handwheel or one fifth of the valve's travel from fully open, and restores only when the valve is fully open again. It reports as supervisory, separate from alarm.
**Look for:** the travel limit and the restore requirement.
**Search:** tamper, OS&Y, PIV, valve supervisory, two revolutions
**Related:** fire:tamper-travel, fire:tamper-separate

## Notification

### audibility: Audible notification levels
**Code:** NFPA 72-2022 §18.4.3, §18.4.1
**Systems:** fire
**Summary:** In public mode, the alarm must be at least 15 dB over the average ambient sound level, and the total sound shouldn't go above 110 dBA at the minimum hearing distance.
**Look for:** public mode, private mode, and the maximum sound level.
**Search:** dBA, 15 dB, ambient, horn, decibel, 110
**Related:** fire:audibility

### sleeping-audibility: Sleeping area audibility
**Code:** NFPA 72-2022 §18.4.6
**Systems:** fire
**Summary:** Where people sleep, the alarm has to be loud enough at the pillow (75 dBA is the usual minimum) and, in newer editions, use a low frequency tone in sleeping rooms.
**Look for:** sound level at the pillow and the low frequency signal rule.
**Search:** pillow, 75 dBA, 520 Hz, low frequency, hotel, dorm
**Related:** fire:sleeping

### temporal-3: Evacuation tone (Temporal-3)
**Code:** NFPA 72-2022 §18.4.2
**Systems:** fire
**Summary:** The audible evacuation signal uses the three pulse temporal pattern, repeating, so everyone recognizes it as "get out". Voice systems use it before the message.
**Look for:** the pattern timing and where it's required.
**Search:** temporal, code 3, evacuation tone, three pulse
**Related:** fire:temporal

### strobe-mounting: Strobe mounting height
**Code:** NFPA 72-2022 §18.5.5.1
**Systems:** fire
**Summary:** Wall-mounted strobes go so the whole lens is between 80 and 96 in above the floor, or at the height the listing allows. Ceiling strobes follow their own spacing tables.
**Look for:** wall mount height range and the exceptions for low ceilings.
**Search:** strobe height, 80 inches, 96 inches, visible appliance
**Related:** fire:strobe-mount

### strobe-spacing: Strobe spacing and candela
**Code:** NFPA 72-2022 §18.5.5.5
**Systems:** fire
**Summary:** Strobe candela and placement come from the room spacing tables and the corridor rules (corridors up to 20 ft wide have their own spacing). Sleeping rooms need higher candela.
**Look for:** the room and corridor spacing tables and the sleeping room rule.
**Search:** candela, 15 cd, 75 cd, 177 cd, corridor, room size
**Related:** fire:strobe-room-table, fire:strobe-corridor, fire:strobe-sleeping

### strobe-sync: Strobe synchronization
**Code:** NFPA 72-2022 §18.5.5.5.2
**Systems:** fire
**Summary:** When more than two strobes can be seen from any one spot, they must flash in sync, to protect people with photosensitive epilepsy.
**Look for:** the field of view rule for synchronization.
**Search:** sync, synchronize, flash rate, seizure, photosensitive
**Related:** fire:strobe-sync

### ibc-alarms: Where the IBC requires alarm notification
**Code:** IBC 2021 §907.5.2
**Systems:** fire
**Summary:** The building code sets which buildings need audible and visible notification and where. It points to NFPA 72 for how to install them.
**Look for:** audible and visible requirements by occupancy, and the dwelling unit visible alarm rules.
**Search:** visible alarm, audible alarm, occupancy, R-2
**Related:**

## Fire alarm power

### primary-power: Dedicated branch circuit for the fire panel
**Code:** NFPA 72-2022 §10.6.5; NEC 2020 §760.41, §760.121
**Systems:** fire
**Summary:** The fire alarm panel gets a dedicated branch circuit. Its breaker is marked red, labeled as the fire alarm circuit, locked in the on position, and its location is noted at the panel.
**Look for:** the dedicated circuit, the red marking, the locking means, and no GFCI or AFCI on that circuit.
**Search:** dedicated circuit, breaker, red, lock, GFCI, 120 V
**Related:** fire:primary-dedicated, fire:primary-marking, fire:primary-no-gfci

### battery-capacity: Secondary power (standby batteries)
**Code:** NFPA 72-2022 §10.6.7.2
**Systems:** fire
**Summary:** Batteries carry the system for 24 hours of standby, then 5 minutes of alarm (15 minutes for voice evacuation). Size them with a safety margin for aging.
**Look for:** standby and alarm durations, the generator exception, and the recharge requirement.
**Search:** battery, standby, 24 hours, 5 minutes, 15 minutes, amp hour
**Related:** fire:batt-standby, fire:batt-alarm-time, fire:batt-margin, fire:batt-generator, fire:batt-recharge

### battery-replace: Battery marking and replacement
**Code:** NFPA 72-2022 §10.6.10; Table 14.4.3.2
**Systems:** fire
**Summary:** Sealed lead acid batteries are marked with the month and year they were made (or installed) and replaced on the schedule the code and manufacturer set, commonly every 3 to 5 years, or sooner if they fail a load test.
**Look for:** marking, replacement interval, and the battery test method.
**Search:** battery date, replace battery, load test, SLA
**Related:** fire:batt-replace, fire:batt-test

## Circuits and pathways

### pathway-class: Circuit classes (A, B, X) and survivability
**Code:** NFPA 72-2022 §12.3, §12.4
**Systems:** fire
**Summary:** Pathway class says how a circuit behaves under an open, short, or ground (Class B reports trouble, Class A keeps working past a single open). Survivability levels say how well the cable is protected from fire.
**Look for:** class definitions and the survivability levels.
**Search:** Class A, Class B, Class X, style, survivability, pathway
**Related:** fire:classa-separation

### classa-routing: Class A outgoing and return routing
**Code:** NFPA 72-2022 §12.3.8
**Systems:** fire
**Summary:** The outgoing and return legs of a Class A or X circuit are run separately so one event can't take out both. Short exceptions exist for drops into a device or the panel.
**Look for:** the separation rule and the length limits on the exceptions.
**Search:** Class A, return loop, separate routing
**Related:** fire:classa-separation, fire:no-ttaps

### relay-3ft: Control relays within 3 ft
**Code:** NFPA 72-2022 §21.2.4
**Systems:** fire, access
**Summary:** The relay or module that controls an emergency function (door release, HVAC, elevator recall) sits within 3 ft of the thing it controls, and the wiring between the panel and the relay is supervised.
**Look for:** the 3 ft rule and the supervision requirement.
**Search:** relay, control module, 3 feet, interface
**Related:** fire:relay-3ft, access:fa-relay-3ft

### elevator-recall: Elevator recall and shunt trip
**Code:** NFPA 72-2022 §21.3, §21.4
**Systems:** fire
**Summary:** Lobby, hoistway, and machine room detectors recall elevators to the right floor. Where sprinklers are in the hoistway or machine room, heat detectors trip the power before water flows.
**Look for:** primary and alternate recall, the warning light, and shunt trip.
**Search:** elevator, recall, shunt trip, hoistway, machine room, firefighter
**Related:** fire:elevator-recall, fire:elevator-shunt

### fa-communication: Communication to the monitoring station
**Code:** NFPA 72-2022 §26.6
**Systems:** fire
**Summary:** The fire panel reports to the supervising station over approved paths (cellular, IP, radio, or DACT with two paths). Each path is supervised, and how often depends on the method.
**Look for:** allowed transmission methods and their supervision intervals.
**Search:** communicator, DACT, cellular, dual path, monitoring, central station
**Related:** fire:comm

## Doors and egress

### free-egress: Free egress without a key
**Code:** NFPA 101-2021 §7.2.1.5; IBC 2021 §1010.2.4
**Systems:** access
**Summary:** Egress doors open from the egress side without a key, tool, or special knowledge, in one motion. Exceptions are narrow and tied to occupancy.
**Look for:** the general rule, the single operation rule, and the occupancy exceptions.
**Search:** free egress, key, one operation, locks and latches
**Related:** access:free-egress, access:one-operation, access:safety-egress

### hardware-height: Door hardware height
**Code:** IBC 2021 §1010.2.2; NFPA 101-2021 §7.2.1.5.10
**Systems:** access
**Summary:** Handles, pulls, latches, and release devices are mounted 34 to 48 in above the floor.
**Look for:** the mounting height range and any occupancy exceptions.
**Search:** hardware height, 34 48, lever, handle
**Related:** access:hardware-height

### panic-hardware: Panic and fire exit hardware
**Code:** IBC 2021 §1010.2.9; NFPA 101-2021 §7.2.1.7
**Systems:** access
**Summary:** Assembly, educational, and some high hazard spaces need panic hardware on egress doors with latches. Fire exit hardware is the listed version for fire doors.
**Look for:** which occupancies need it and the actuating portion requirements.
**Search:** panic bar, crash bar, exit device, fire exit hardware
**Related:** access:panic-hardware

### door-hardware-release: Door hardware release of electric locks
**Code:** IBC 2021 §1010.2.10
**Systems:** access
**Summary:** An electric lock released by the door's own hardware (a lever or exit device with a switch) must unlock in one motion from the egress side and unlock on loss of power.
**Look for:** the operation and fail-safe requirements.
**Search:** request to exit switch, REX, exit device switch, electrified hardware
**Related:** access:free-egress

### sensor-release: Sensor release of electrically locked doors
**Code:** IBC 2021 §1010.2.11; NFPA 101-2021 §7.2.1.6.2
**Systems:** access
**Summary:** Mag locks and other electric locks released by a motion sensor also need a push button by the door, unlock on loss of power and on fire alarm, and the button holds the door unlocked for a set time independent of the access system.
**Look for:** the sensor, the manual button (height, distance, sign, hold time), power loss and fire alarm release.
**Search:** mag lock, maglock, motion sensor, PIR, push to exit, 30 seconds
**Related:** access:sr-requirements, access:sr-button, access:em-lock

### delayed-egress: Delayed egress locks
**Code:** IBC 2021 §1010.2.12; NFPA 101-2021 §7.2.1.6.1
**Systems:** access
**Summary:** Delayed egress is allowed only in certain occupancies with sprinklers or detection. The door releases after a short delay (commonly 15 seconds) once someone pushes, sounds a local alarm, needs a manual reset, and carries a sign explaining it.
**Look for:** where it's allowed, the delay and nuisance times, the release conditions, and the sign wording.
**Search:** delayed egress, 15 seconds, 30 seconds, nuisance delay, push until alarm sounds
**Related:** access:de-conditions, access:de-timing, access:de-release, access:de-sign

### electromagnetic-locks: Electromagnetically locked egress doors
**Code:** IBC 2021 §1010.2.14
**Systems:** access
**Summary:** A mag lock released by listed door hardware (no motion sensor) is allowed in some occupancies if the hardware has a switch that cuts power directly and the door unlocks on power loss.
**Look for:** the occupancies allowed and the hardware requirements.
**Search:** mag lock, electromagnetic, listed hardware
**Related:** access:em-lock

### stair-reentry: Stairwell re-entry
**Code:** NFPA 101-2021 §7.2.1.5.7; IBC 2021 §1010.2.6
**Systems:** access
**Summary:** Stair doors that lock from the stair side must allow re-entry, usually by unlocking all of them from a central point or on fire alarm, so people aren't trapped in the stair.
**Look for:** the re-entry rule, the remote unlock option, and the floor signage.
**Search:** stairwell, re-entry, stair door, fail safe
**Related:** access:stair-reentry

### fa-door-release: Fire alarm release of locked doors
**Code:** NFPA 72-2022 §21.9; IBC 2021 §1010.2.11
**Systems:** access, fire
**Summary:** Where an electric lock must release on fire alarm, the fire alarm system drives the release, and that release is tested with the fire alarm. Loss of power to the lock releases it too.
**Look for:** how the fire alarm interfaces with locking and what's tested.
**Search:** fire alarm unlock, door release, egress, interface
**Related:** access:fa-release, access:fa-release-test, access:safety-fa-interface

### fire-doors: Fire doors and hardware changes
**Code:** IBC 2021 §716; NFPA 101-2021 §8.3.3
**Systems:** access
**Summary:** Fire doors must self-close and positively latch. Adding locks, strikes, or cable paths can void the label, so use listed hardware and listed prep, and leave the latch working.
**Look for:** self-closing and latching rules and the reference to NFPA 80 for field modifications.
**Search:** fire door, label, positive latching, NFPA 80, door closer
**Related:** access:fire-door-latch, access:fire-door-mod

### door-inspection: Egress door inspection
**Code:** NFPA 101-2021 §7.2.1.15
**Systems:** access
**Summary:** Certain egress doors (panic hardware, delayed egress, sensor release, and others) are inspected and tested every year, with records kept.
**Look for:** which doors are covered and what the inspection checks.
**Search:** annual door inspection, door testing, records
**Related:** access:door-inspect

## Cable and pathways

### class2-wiring: Class 2 and Class 3 circuits
**Code:** NEC 2020 Art. 725 (§725.121, §725.130)
**Systems:** intrusion, access, cctv
**Summary:** Most security wiring (panels, readers, locks on Class 2 supplies, cameras) is Class 2, powered by a listed limited source. That allows lighter wiring methods than power circuits.
**Look for:** power source rules and permitted wiring methods for Class 2 and 3.
**Search:** Class 2, power limited, low voltage, transformer
**Related:** access:nec-class2

### plfa-wiring: Power limited fire alarm (PLFA) circuits
**Code:** NEC 2020 Art. 760 (§760.121, §760.130)
**Systems:** fire
**Summary:** Fire alarm initiating, notification, and signaling circuits from a listed panel are usually power limited fire alarm circuits, with their own cable types and rules.
**Look for:** PLFA power sources and wiring methods.
**Search:** PLFA, FPL, fire alarm cable, power limited
**Related:** fire:nec-identify

### fa-identification: Fire alarm circuit identification
**Code:** NEC 2020 §760.30
**Systems:** fire
**Summary:** Fire alarm circuits are identified at terminals and junction boxes so they aren't mistaken for other systems. Red covers or red cable are a common way to do it.
**Look for:** the identification rule.
**Search:** red cable, red box, label, identify
**Related:** fire:nec-identify

### cable-types: Cable types and where they can go
**Code:** NEC 2020 §725.135, §725.154, §760.135, §760.154, §800.179
**Systems:** intrusion, fire, access, cctv
**Summary:** Cable markings set where cable can run: plenum (CL2P, FPLP, CMP) in air handling spaces, riser (CL2R, FPLR, CMR) between floors, general purpose elsewhere. A higher rated cable can always replace a lower one.
**Look for:** installation by space type and the substitution rules.
**Search:** plenum, riser, CMP, CMR, CL2P, FPLP, cable rating, substitution
**Related:** access:nec-cable-type, cctv:nec-cable-type

### cable-support: Supporting low voltage cable
**Code:** NEC 2020 §725.24, §760.24, §800.24, §300.11
**Systems:** intrusion, fire, access, cctv
**Summary:** Cable is supported by the building structure with straps, hangers, or J-hooks, not laid on ceiling tiles or tied to the ceiling grid wires or pipes, and installed so it doesn't block access panels.
**Look for:** mechanical execution of work and the ceiling support rules.
**Search:** J-hook, ceiling grid, support, drop ceiling, cable ties
**Related:** access:nec-support, cctv:nec-support

### separation: Separation from power conductors
**Code:** NEC 2020 §725.136, §760.136
**Systems:** intrusion, fire, access, cctv
**Summary:** Class 2 and PLFA wiring stays out of the same raceway, box, or enclosure as power wiring unless a barrier or listed method separates them.
**Look for:** separation in enclosures and raceways and the permitted exceptions.
**Search:** separation, high voltage, same box, barrier, power wiring
**Related:** access:nec-separation

### poe: PoE and bundled cables carrying power
**Code:** NEC 2020 §725.144
**Systems:** cctv, access
**Summary:** When data cables carry power (PoE), bundle size and conductor gauge limit how much current each pair can carry without overheating. Bigger bundles and higher power need heavier cable or LP-rated cable.
**Look for:** the ampacity rules for bundled cable and the LP cable option.
**Search:** PoE, power over ethernet, bundle, LP cable, heat
**Related:** cctv:poe-bundle

### firestop: Firestopping penetrations
**Code:** NEC 2020 §300.21; IBC 2021 §714
**Systems:** intrusion, fire, access, cctv
**Summary:** Any hole you make through a fire rated wall, floor, or ceiling gets sealed with a listed firestop system so the rating is kept.
**Look for:** the NEC requirement and the IBC penetration rules.
**Search:** firestop, fire caulk, penetration, rated wall
**Related:** access:firestop, cctv:firestop

### plenum-devices: Devices above the ceiling in plenums
**Code:** NEC 2020 §300.22(C)
**Systems:** cctv, access, intrusion
**Summary:** Equipment installed in an air handling space above a ceiling must be suitable for that space (metal enclosure or listed for plenum use). Cable there must be plenum rated.
**Look for:** what's allowed in "other spaces used for environmental air".
**Search:** plenum, above ceiling, power supply, switch, UL 2043
**Related:** cctv:plenum-devices

### outdoor-cable: Underground and outdoor cable
**Code:** NEC 2020 §300.5
**Systems:** cctv, access, intrusion
**Summary:** Cable in underground conduit is in a wet location, so it must be listed for wet locations. Burial depths depend on the wiring method.
**Look for:** wet location rule and burial depth requirements.
**Search:** underground, wet location, outdoor rated, burial, conduit
**Related:** cctv:outdoor-cable

### grounding-protection: Primary protectors and grounding for outside cable
**Code:** NEC 2020 §800.90, §800.100; Art. 250
**Systems:** cctv, access
**Summary:** Communications cable that runs between buildings or outdoors gets a listed protector where it enters the building, bonded to the building grounding system. Poles and outdoor gear follow the grounding rules.
**Look for:** where protectors are required and how they're bonded.
**Search:** surge, lightning, protector, grounding, bonding, pole
**Related:** cctv:outdoor-surge, cctv:pole-grounding

## Testing and inspection

### notify-before-test: Notification before testing
**Code:** NFPA 72-2022 §14.2.4
**Systems:** fire, access
**Summary:** Before any test that can cause a signal, tell everyone who will receive it (monitoring station, building contact, occupants) and tell them again when done.
**Look for:** who must be notified and when.
**Search:** on test, notify, central station, monitoring, before testing
**Related:** fire:safety-notify, fire:safety-releasing

### itm-frequency: Inspection and test frequencies
**Code:** NFPA 72-2022 Table 14.3.1, Table 14.4.3.2
**Systems:** fire
**Summary:** Two tables set how often each component is visually inspected and functionally tested (most devices yearly, some semiannual or quarterly).
**Look for:** the line for each device type in the inspection and test tables.
**Search:** annual test, semiannual, quarterly, inspection frequency, ITM
**Related:** fire:itm-freq, fire:itm-waterflow

### test-methods: Test methods for detectors
**Code:** NFPA 72-2022 Table 14.4.3.2; §14.4.4.3
**Systems:** fire
**Summary:** Smoke detectors are tested with smoke or listed aerosol at the detector, not a magnet alone, and their sensitivity is checked on a schedule. Non-restorable heat detectors aren't heated; their circuits are tested instead.
**Look for:** the functional test method per device and the sensitivity testing rule.
**Search:** canned smoke, sensitivity, test method, heat detector test
**Related:** fire:test-smoke, fire:test-sensitivity, fire:test-heat-nonrestorable

### impairments: System impairments
**Code:** NFPA 72-2022 §10.21
**Systems:** fire
**Summary:** When a system is out of service, the owner and AHJ are told, and longer outages (over 4 hours in many cases) need extra measures like a fire watch.
**Look for:** impairment notification and the outage duration that triggers more steps.
**Search:** impairment, out of service, fire watch, 4 hours
**Related:** fire:impairment-4h

### records: Documentation and records
**Code:** NFPA 72-2022 §7.6, §14.6
**Systems:** fire
**Summary:** Test and inspection records are kept for the life of the system or a set period, and completion documents go to the owner at acceptance.
**Look for:** record retention and the record of completion.
**Search:** records, record of completion, documentation, inspection report
**Related:** fire:docs
