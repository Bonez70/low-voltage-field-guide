# Fire Verify Items

Source list for VERIFY-SHEET.md. Each `### key: title` matches a `[VERIFY:key]` tag in the fire content. Items are numbered in the order they appear here. Run `node app/verify-sheet.js fire` to regenerate the sheet.

Chapter references are to NFPA 72 (2019 and 2022 editions) from general industry knowledge, not checked against the book.

## Safety steps

### safety-notify: Notify before testing
**Proposed:** before any work that can cause a signal, put the account on test with the monitoring center (get the operator's name) and notify the owner or building contact, plus occupants if appliances will sound; some jurisdictions also require notifying the fire department.
**Source:** NFPA 72 Ch. 14 (notification before testing). Who else must be called varies by AHJ.

### safety-releasing: Disable releasing circuits and outputs
**Proposed:** disable releasing circuits (clean agent, preaction, deluge) and outputs you don't want to operate (elevator recall, HVAC shutdown, door unlocking) before testing; never test with a releasing circuit armed unless it's a planned discharge test.
**Source:** NFPA 72 Ch. 14 (releasing systems testing) and standard industry practice.

### safety-megger: No megohmmeter with devices connected
**Proposed:** never use a megohmmeter (insulation tester) with devices or the panel connected; disconnect everything first.
**Source:** manufacturer installation manuals; NFPA 72 Ch. 14 notes on insulation testing.

## Codes and wiring

### ul-listings: UL 864 for control units
**Proposed:** fire alarm control units are listed to UL 864.
**Source:** UL standards catalog. Detectors and appliances have their own standards (UL 268 smoke, UL 521 heat, UL 1971 visible, UL 464 audible).

### nec-identify: Fire alarm circuits identified
**Proposed:** fire alarm circuits must be identified at terminal and junction locations; red box covers and red cable are common ways to do it (red itself isn't required).
**Source:** NEC 760.30.

### classa-separation: Class A outgoing and return separated
**Proposed:** Class A outgoing and return conductors don't run in the same cable or raceway, with limited exceptions (such as short drops to a device or into the panel).
**Source:** NFPA 72 Ch. 12 (pathway class designations). The allowed exception length varies by edition.

### no-ttaps: T-taps
**Proposed:** no T-taps on conventional IDCs, NACs, or any Class A circuit; T-taps allowed on Class B addressable SLCs only when the panel manufacturer permits them.
**Source:** industry practice and manufacturer manuals, based on how NFPA 72 Ch. 12 defines supervision.

### relay-3ft: Control relay within 3 ft
**Proposed:** relays or control modules for emergency control functions (HVAC shutdown, elevator recall, door release) within 3 ft of the controlled device, with the wiring to the relay supervised.
**Source:** NFPA 72 Ch. 21 (emergency control function interfaces).

## Initiating devices

### smoke-environment: Smoke detector environment
**Proposed:** keep smoke detectors out of spaces outside their listed range, commonly about 32 °F to 100 °F and up to 93% relative humidity.
**Source:** typical spot smoke detector spec sheets; NFPA 72 Ch. 17 says to follow the listing.

### heat-types: Heat detector ratings
**Proposed:** fixed-temperature heat detectors commonly 135 °F for ordinary spaces and 194 °F for hot spaces; rate-of-rise commonly about 15 °F per minute.
**Source:** typical heat detector spec sheets (UL 521 listings).

### heat-ambient: Heat detector rating vs ceiling temperature
**Proposed:** the detector's rating is at least 20 °F above the highest normal ceiling temperature.
**Source:** NFPA 72 Ch. 17 (heat-sensing fire detectors).

### pull: Pull station location, height, travel
**Proposed:** within 5 ft of each exit doorway on each floor; operable part 42 to 48 in above the floor; no more than 200 ft of travel to the nearest pull station.
**Source:** NFPA 72 Ch. 17 (manual fire alarm boxes).

### pull-sprinklered: Pull stations in sprinklered buildings
**Proposed:** some building codes don't require pull stations throughout a fully sprinklered building (often only one at a location the AHJ approves); follow the drawings.
**Source:** IBC/IFC Section 907 occupancy exceptions. Varies a lot by occupancy and local code.

### waterflow-90s: Waterflow within 90 seconds
**Proposed:** waterflow signal must come in within 90 seconds of flow equal to one sprinkler head (retard included).
**Source:** NFPA 72 Ch. 17 and NFPA 13.

### tamper-travel: Tamper switch operation
**Proposed:** signals within two revolutions of the handwheel or when the valve moves one-fifth of its travel from fully open; restores only when fully open.
**Source:** NFPA 72 Ch. 17 (supervisory signal initiating devices).

### tamper-separate: Tamper and waterflow on separate circuits
**Proposed:** never put a tamper switch on the same circuit or zone as a waterflow switch; supervisory and alarm signals must be distinct at the panel.
**Source:** NFPA 72 Ch. 23 (distinctive signals; supervisory not on alarm circuits).

## Device placement

### smoke-spacing: Smoke detector spacing
**Proposed:** smooth flat ceiling: 30 ft nominal spacing, no more than 15 ft from a wall, every point on the ceiling within 21 ft (0.7 × 30 ft) of a detector.
**Source:** NFPA 72 Ch. 17 (spot-type smoke detector spacing).

### smoke-mount: Smoke detector mounting
**Proposed:** commercial detectors on the ceiling, or on a sidewall with the top of the detector within 12 in of the ceiling. Household smoke alarms keep the 4 in rule: on the ceiling at least 4 in from the wall, or on the wall 4 to 12 in below the ceiling.
**Source:** NFPA 72 Ch. 17 (commercial) and Ch. 29 (household). The 4 in rule was dropped from Ch. 17 in recent editions.

### smoke-hvac: Smoke detectors near HVAC
**Proposed:** at least 3 ft from supply air diffusers and return air openings.
**Source:** NFPA 72 Ch. 17 and Ch. 29.

### heat-spacing: Heat detector spacing
**Proposed:** use the listed spacing (for example 50 × 50 ft), reduced for ceilings above about 10 ft; every point within 0.7 × the listed spacing.
**Source:** NFPA 72 Ch. 17 (heat detector spacing and high ceiling reduction table).

### duct-cfm: Where duct detectors are required
**Proposed:** commonly required on supply systems over 2,000 CFM, downstream of the filters; larger systems (commonly over 15,000 CFM) may also need return-side detection.
**Source:** NFPA 90A and the International Mechanical Code. Thresholds and locations differ between them.

### duct-supervisory: Duct detector signal type
**Proposed:** usually a supervisory signal that shuts down the fan, unless the AHJ or design calls for an alarm.
**Source:** NFPA 72 Ch. 17/21 and NFPA 90A. Some AHJs require alarm.

### duct-remote: Duct detector remote test station
**Proposed:** remote test station or indicator required where the detector isn't readily visible or accessible.
**Source:** NFPA 72 Ch. 17 and manufacturer instructions.

### elevator-recall: Elevator recall detectors
**Proposed:** smoke detectors in each elevator lobby, the machine room, and the hoistway (when required) recall elevators to the main floor, or to an alternate floor when the main lobby detector is in alarm.
**Source:** NFPA 72 Ch. 21 and ASME A17.1.

### elevator-shunt: Shunt trip heat detectors
**Proposed:** where sprinklers are in an elevator machine room or hoistway, heat detectors within 2 ft of each sprinkler head, with a lower temperature rating and faster response than the sprinkler, cut elevator power before water flows.
**Source:** NFPA 72 Ch. 21 (elevator power shutdown).

### construction-dust: Detectors during construction
**Proposed:** don't install smoke detectors until construction cleanup is complete, or protect them with dust covers and remove every cover before the system goes into service.
**Source:** NFPA 72 Ch. 17 (protection during construction).

## Notification

### temporal: Temporal-3 and temporal-4
**Proposed:** temporal-3 fire evacuation: three ½-second pulses with ½-second gaps, then 1½ seconds off, repeating every 4 seconds. CO uses temporal-4: four short pulses, then a pause.
**Source:** NFPA 72 Ch. 18 and ANSI/ASA S3.41 (temporal-3); UL 2075 / NFPA 72 (temporal-4 for CO).

### audibility: Audibility levels
**Proposed:** measured 5 ft above the floor in dBA. Public mode: 15 dB above average ambient, or 5 dB above the maximum lasting 60 s or more, whichever is greater. Private mode: 10 dB above average ambient, or 5 dB above the 60 s maximum. Maximum 110 dBA.
**Source:** NFPA 72 Ch. 18 (audible characteristics).

### sleeping: Sleeping area audibility and tone
**Proposed:** greater of 15 dB above average ambient, 5 dB above the 60 s maximum, or 75 dBA at the pillow; low-frequency 520 Hz tone.
**Source:** NFPA 72 Ch. 18 (sleeping areas). The 520 Hz rule took effect for new installs starting in 2014.

### strobe-mount: Strobe height and flash rate
**Proposed:** wall-mounted strobes with the entire lens between 80 and 96 in above the floor; flash rate 1 to 2 per second.
**Source:** NFPA 72 Ch. 18 (visible characteristics, wall mounting).

### strobe-room-table: Strobe candela by room size
**Proposed:** one wall-mounted strobe: 20 × 20 ft 15 cd, 28 × 28 ft 30 cd, 40 × 40 ft 60 cd, 45 × 45 ft 75 cd, 54 × 54 ft 95 cd, 55 × 55 ft 115 cd.
**Source:** NFPA 72 Ch. 18 room spacing table for wall-mounted visible appliances.

### strobe-corridor: Corridor strobes
**Proposed:** corridors 20 ft wide or less: 15 cd minimum, within 15 ft of each end, no more than 100 ft apart.
**Source:** NFPA 72 Ch. 18 (corridor spacing).

### strobe-sleeping: Sleeping room strobes
**Proposed:** 177 cd if within 24 in of the ceiling, 110 cd if 24 in or more below the ceiling.
**Source:** NFPA 72 Ch. 18 (sleeping area visible appliances).

### strobe-sync: Strobe synchronization
**Proposed:** when more than two strobes can be seen from one spot, they must flash in sync.
**Source:** NFPA 72 Ch. 18 (synchronization within a field of view).

### speaker-volts: Voice speaker circuits
**Proposed:** voice evacuation speakers run on 25 V or 70.7 V audio circuits with wattage taps (such as ¼, ½, 1, 2 W).
**Source:** typical amplifier and speaker spec sheets.

## Power

### primary-dedicated: Dedicated branch circuit
**Proposed:** primary power from a dedicated branch circuit that feeds only fire alarm equipment.
**Source:** NFPA 72 Ch. 10 (primary power supply) and NEC 760.41/760.121.

### primary-marking: Breaker marking and locking
**Proposed:** breaker marked red and identified "FIRE ALARM CIRCUIT", locked or protected and accessible only to authorized people, with its location recorded at the control unit.
**Source:** NFPA 72 Ch. 10 and NEC 760.41/760.121.

### primary-no-gfci: No GFCI or AFCI
**Proposed:** no GFCI or AFCI protection on the fire alarm branch circuit unless the manufacturer and AHJ allow it.
**Source:** NEC 760.41(B)/760.121(B).

### ac-delay: AC loss reporting delay
**Proposed:** AC loss shows locally right away; transmission to the monitoring center is delayed, commonly 1 to 3 hours.
**Source:** NFPA 72 Ch. 10 (power supervision).

### batt-standby: Standby time
**Proposed:** 24 hours of standby.
**Source:** NFPA 72 Ch. 10 (secondary power capacity).

### batt-alarm-time: Alarm time on battery
**Proposed:** after standby, 5 minutes of alarm with every notification appliance operating; 15 minutes at maximum connected load for voice evacuation.
**Source:** NFPA 72 Ch. 10.

### batt-margin: 20% battery safety margin
**Proposed:** battery calculations add a 20% safety margin.
**Source:** NFPA 72 Ch. 10 (added in the 2016 edition, as I understand it). Manufacturers' battery worksheets also use it.

### batt-generator: Batteries with a generator
**Proposed:** a generator can supplement batteries, but the batteries must still carry the system for at least the transfer time; how much battery standby is required with a generator depends on the edition and AHJ.
**Source:** NFPA 72 Ch. 10 (secondary power with generator, commonly 4 h of battery in that case).

### batt-replace: Battery dating and replacement
**Proposed:** mark every battery with the month and year of manufacture (or install); replace sealed lead-acid batteries about every 5 years or sooner per the manufacturer or test results.
**Source:** NFPA 72 Ch. 10 (marking) and Ch. 14 (replacement).

### batt-recharge: Charger capacity
**Proposed:** the charger recharges fully discharged batteries within 48 hours.
**Source:** NFPA 72 Ch. 10.

### batt-test: Battery testing
**Proposed:** batteries checked visually, voltage-checked under load, and load or capacity tested on the NFPA 72 schedule; a battery can read full voltage with no load and still collapse under load.
**Source:** NFPA 72 Ch. 14 (battery test methods).

### nac-rating: NAC current rating
**Proposed:** NAC outputs are commonly rated 1.5 to 3 A per circuit; check the panel.
**Source:** typical panel and NAC extender spec sheets.

### nac-min-volts: Appliance minimum voltage
**Proposed:** appliances listed for regulated 24 VDC typically operate down to 16 VDC.
**Source:** UL 1971 / UL 464 regulated 24 V operating range (16 to 33 V) on appliance spec sheets.

### nac-start-volts: NAC calculation starting voltage
**Proposed:** calculate NAC voltage drop from 20.4 VDC (85% of 24 V, battery at end of standby), not 24 V.
**Source:** common manufacturer voltage drop worksheets. Some manufacturers use a different value; their method wins.

## Monitoring

### comm: Communication paths and test signals
**Proposed:** DACTs traditionally need two separate paths; many single-path cellular or IP communicators are now listed as an acceptable sole means when the path itself is supervised. Test signals go to the monitoring center on a regular schedule (commonly at least every 24 h).
**Source:** NFPA 72 Ch. 26 (supervising station communication methods).

### cid-fire: Contact ID fire codes
**Proposed:** 110 fire, 111 smoke, 113 waterflow, 114 heat, 115 pull station, 116 duct, 200 fire supervisory, 203 gate valve, 301 AC loss, 302 low battery, 373 fire trouble, 602 periodic test.
**Source:** SIA DC-05 Contact ID event code list.

## Testing, impairments, and documentation

### itm-freq: Inspection and testing frequencies
**Proposed:** smoke, restorable heat, duct detectors, pull stations, notification appliances, and the panel functionally tested annually; batteries inspected and tested semiannually; transmission to the monitoring center tested annually.
**Source:** NFPA 72 Ch. 14 testing frequency table.

### itm-waterflow: Waterflow and tamper frequency
**Proposed:** waterflow and valve supervisory switches tested semiannually (NFPA 25 may require some quarterly).
**Source:** NFPA 72 Ch. 14 and NFPA 25.

### test-smoke: Smoke detector test method
**Proposed:** test with listed aerosol smoke or a smoke generator that puts smoke in the chamber; a magnet test only checks electronics; never use an open flame.
**Source:** NFPA 72 Ch. 14 test methods.

### test-sensitivity: Sensitivity testing
**Proposed:** within 1 year after installation, then every other year; if results stay in range, the interval can be extended up to 5 years.
**Source:** NFPA 72 Ch. 14 (sensitivity testing).

### test-heat-nonrestorable: Non-restorable heat detectors
**Proposed:** not heat tested; the circuit is tested mechanically or electrically, and heads are replaced or sample lab-tested after a set number of years (commonly 15 years, 2 per 100).
**Source:** NFPA 72 Ch. 14.

### impairment-4h: Impairments and fire watch
**Proposed:** notify the AHJ and owner when the system will be out of service more than 4 hours in a 24-hour period; the AHJ may require a fire watch.
**Source:** NFPA 72 Ch. 10 (impairments) and IFC 901.7.

### docs: Documentation on site
**Proposed:** record drawings, sequence of operations, calculations, manuals, and site-specific software kept on site (often in a documentation cabinet); inspection and test records kept at least until the next test plus one year.
**Source:** NFPA 72 Ch. 7 (documentation) and Ch. 14 (records retention).
