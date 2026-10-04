# Verify Sheet: Fire Alarm Draft

**Status: waiting on David.** 58 items. Nothing in the fire alarm pack goes live until every item is signed off.

Every code value and safety step in the draft, numbered, with the full paragraph it sits in. The value being checked is marked **⟦#n⟧** in the quote. Where the same value appears in several places, the first two are quoted and the rest are listed; one answer covers them all.

**How to answer:** reply with the item number and your call, for example:
`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove`
`all ok except 7, 22`

"Source" is my honest note of where the value comes from. None of it was checked against the code book itself; it's general industry knowledge of NFPA 72 and the NEC, so your field experience and your adopted edition win.

---

## Safety steps

### 1. Notify before testing
**Where:** Module 1, Lesson 1.4 "Safety before you touch a fire system"
> 1. **Call the monitoring center** and put the account on test for the time you need. Get the operator's name. **⟦#1⟧**

**Where:** Reference card "Before you test"
> 1. Monitoring center: account **on test**, get operator name, note the time window. **⟦#1⟧**

**Also in:** Troubleshooting introduction; Troubleshooting Guide 12 "Detector or device needs replacing"

**Proposed:** before any work that can cause a signal, put the account on test with the monitoring center (get the operator's name) and notify the owner or building contact, plus occupants if appliances will sound; some jurisdictions also require notifying the fire department.

**Source:** NFPA 72 Ch. 14 (notification before testing). Who else must be called varies by AHJ.

### 2. Disable releasing circuits and outputs
**Where:** Module 1, Lesson 1.4 "Safety before you touch a fire system"
> 3. **Disable outputs you don't want to operate** using the panel's disable or bypass functions, per the panel manual and the building's procedure: releasing circuits (clean agent, preaction, deluge), elevator recall, HVAC shutdown, door unlocking. **Never test with a releasing circuit armed** unless the test plan calls for a full discharge test with everyone involved. **⟦#2⟧**

**Where:** Reference card "Before you test"
> 3. **Disable releasing circuits** (suppression) and any output you don't want to run: elevator recall, HVAC shutdown, door unlock. **⟦#2⟧**

**Also in:** Troubleshooting introduction

**Proposed:** disable releasing circuits (clean agent, preaction, deluge) and outputs you don't want to operate (elevator recall, HVAC shutdown, door unlocking) before testing; never test with a releasing circuit armed unless it's a planned discharge test.

**Source:** NFPA 72 Ch. 14 (releasing systems testing) and standard industry practice.

### 3. No megohmmeter with devices connected
**Where:** Module 5, Lesson 5.4 "Reading a fire circuit with a meter"
> **Never use a megohmmeter (insulation tester) with devices or the panel connected.** The test voltage will destroy devices. Disconnect every device first, or don't megger at all. **⟦#3⟧**

**Where:** Reference card "Meter readings on fire circuits"
> **No megohmmeter with devices or the panel connected.** **⟦#3⟧**

**Also in:** Troubleshooting Guide 1 "Ground fault trouble"

**Proposed:** never use a megohmmeter (insulation tester) with devices or the panel connected; disconnect everything first.

**Source:** manufacturer installation manuals; NFPA 72 Ch. 14 notes on insulation testing.

---

## Codes and wiring

### 4. UL 864 for control units
**Where:** Module 1, Lesson 1.2 "The codes and who enforces them"
> | Code or standard | What it covers |
> |---|---|
> | **UL 864** | The listing standard for fire alarm control units **⟦#4⟧** |

**Proposed:** fire alarm control units are listed to UL 864.

**Source:** UL standards catalog. Detectors and appliances have their own standards (UL 268 smoke, UL 521 heat, UL 1971 visible, UL 464 audible).

### 5. Fire alarm circuits identified
**Where:** Module 1, Lesson 1.3 "Power-limited fire alarm circuits and cable"
> - **Fire alarm circuits are identified** at terminal and junction locations so nobody mistakes them for something else and cuts power to them. Red box covers and red cable are common ways to do this. **⟦#5⟧**

**Where:** Reference card "Fire alarm cable"
> - Identify fire alarm circuits at terminal and junction locations (red covers are common) **⟦#5⟧**

**Proposed:** fire alarm circuits must be identified at terminal and junction locations; red box covers and red cable are common ways to do it (red itself isn't required).

**Source:** NEC 760.30.

### 6. Class A outgoing and return separated
**Where:** Module 5, Lesson 5.2 "Class B and Class A"
> **The outgoing and return paths should not run in the same cable or raceway**, so one damaged cable can't take out both. The code allows short exceptions; the drawings and the code edition in force say how far. **⟦#6⟧**

**Where:** Reference card "Circuit classes"
> - Class A outgoing and return run in separate cables or raceways. **⟦#6⟧**

**Proposed:** Class A outgoing and return conductors don't run in the same cable or raceway, with limited exceptions (such as short drops to a device or into the panel).

**Source:** NFPA 72 Ch. 12 (pathway class designations). The allowed exception length varies by edition.

### 7. T-taps
**Where:** Module 5, Lesson 5.3 "T-taps and why they're restricted"
> - **Conventional IDCs and NACs: no T-taps.** The EOL at the end only supervises wire that runs *through* it. A branch is unsupervised: if it breaks, the panel never knows, and those devices are silently dead. **⟦#7⟧**

**Where:** Reference card "Circuit classes"
> - No T-taps on conventional IDCs, NACs, or any Class A circuit. **⟦#7⟧**

**Also in:** Troubleshooting Guide 2 "Open circuit trouble (conventional IDC or NAC)"

**Proposed:** no T-taps on conventional IDCs, NACs, or any Class A circuit; T-taps allowed on Class B addressable SLCs only when the panel manufacturer permits them.

**Source:** industry practice and manufacturer manuals, based on how NFPA 72 Ch. 12 defines supervision.

### 8. Control relay within 3 ft
**Where:** Module 7, Lesson 7.5 "Control functions: elevators, HVAC, doors"
> **HVAC shutdown:** relays or control modules within **3 ft** of the device they control, with the circuit to the relay supervised. **⟦#8⟧**

**Where:** Troubleshooting Guide 11 "Elevator recall or control function didn't operate"
> 3. Check the wiring from the relay to the other trade's equipment. The relay should be within 3 ft of the controlled device with a supervised circuit to it. **⟦#8⟧**

**Proposed:** relays or control modules for emergency control functions (HVAC shutdown, elevator recall, door release) within 3 ft of the controlled device, with the wiring to the relay supervised.

**Source:** NFPA 72 Ch. 21 (emergency control function interfaces).

---

## Initiating devices

### 9. Smoke detector environment
**Where:** Module 3, Lesson 3.1 "Smoke detectors"
> - Places outside the detector's listed temperature and humidity range, commonly about **32 °F to 100 °F** and up to **93% relative humidity** **⟦#9⟧**

**Where:** Reference card "Smoke detector placement"
> - Not in kitchens, showers, garages, dusty or outside listed temperature (commonly 32 to 100 °F) **⟦#9⟧**

**Also in:** Troubleshooting Guide 6 "Nuisance smoke alarms"

**Proposed:** keep smoke detectors out of spaces outside their listed range, commonly about 32 °F to 100 °F and up to 93% relative humidity.

**Source:** typical spot smoke detector spec sheets; NFPA 72 Ch. 17 says to follow the listing.

### 10. Heat detector ratings
**Where:** Module 3, Lesson 3.2 "Heat detectors"
> | Type | How it works |
> |---|---|
> | **Fixed temperature** | Alarms when the air reaches a set temperature, commonly **135 °F** for ordinary spaces or **194 °F** for hot spaces like attics and boiler rooms **⟦#10⟧** |

**Where:** Reference card "Heat detector quick rules"
> - Common ratings: 135 °F ordinary, 194 °F hot spaces **⟦#10⟧**

**Proposed:** fixed-temperature heat detectors commonly 135 °F for ordinary spaces and 194 °F for hot spaces; rate-of-rise commonly about 15 °F per minute.

**Source:** typical heat detector spec sheets (UL 521 listings).

### 11. Heat detector rating vs ceiling temperature
**Where:** Module 3, Lesson 3.2 "Heat detectors"
> - **Pick the rating for the space:** the detector's temperature rating should be at least **20 °F above the highest ceiling temperature** the space normally reaches. **⟦#11⟧**

**Where:** Reference card "Heat detector quick rules"
> - Rating at least 20 °F above the hottest normal ceiling temperature **⟦#11⟧**

**Proposed:** the detector's rating is at least 20 °F above the highest normal ceiling temperature.

**Source:** NFPA 72 Ch. 17 (heat-sensing fire detectors).

### 12. Pull station location, height, travel
**Where:** Module 3, Lesson 3.3 "Manual pull stations"
> - **Location:** within **5 feet of each exit doorway** on each floor. **⟦#12⟧**

**Where:** Reference card "Pull stations, waterflow, tamper"
> - Within 5 ft of each exit doorway, each floor **⟦#12⟧**

**Proposed:** within 5 ft of each exit doorway on each floor; operable part 42 to 48 in above the floor; no more than 200 ft of travel to the nearest pull station.

**Source:** NFPA 72 Ch. 17 (manual fire alarm boxes).

### 13. Pull stations in sprinklered buildings
**Where:** Module 3, Lesson 3.3 "Manual pull stations"
> Some building codes don't require pull stations in fully sprinklered buildings, apart from one at a location the AHJ chooses. Follow the approved drawings. **⟦#13⟧**

**Proposed:** some building codes don't require pull stations throughout a fully sprinklered building (often only one at a location the AHJ approves); follow the drawings.

**Source:** IBC/IFC Section 907 occupancy exceptions. Varies a lot by occupancy and local code.

### 14. Waterflow within 90 seconds
**Where:** Module 3, Lesson 3.4 "Sprinkler waterflow and valve supervision"
> - **Retard (delay):** waterflow switches have a built-in adjustable delay so pressure surges don't cause false alarms. The signal must still come in within **90 seconds** of flow equal to one sprinkler head. **⟦#14⟧**

**Where:** Reference card "Pull stations, waterflow, tamper"
> - Signal within 90 s of flow equal to one sprinkler **⟦#14⟧**

**Also in:** Troubleshooting Guide 8 "Waterflow alarm problems"

**Proposed:** waterflow signal must come in within 90 seconds of flow equal to one sprinkler head (retard included).

**Source:** NFPA 72 Ch. 17 and NFPA 13.

### 15. Tamper switch operation
**Where:** Module 3, Lesson 3.4 "Sprinkler waterflow and valve supervision"
> - Must signal within **two revolutions** of the handwheel, or when the valve has moved **one-fifth** of its travel from fully open. **⟦#15⟧**

**Where:** Reference card "Pull stations, waterflow, tamper"
> - Signal within 2 turns of the handwheel or 1/5 of valve travel **⟦#15⟧**

**Also in:** Troubleshooting Guide 7 "Supervisory won't clear (tamper, duct, or other)"

**Proposed:** signals within two revolutions of the handwheel or when the valve moves one-fifth of its travel from fully open; restores only when fully open.

**Source:** NFPA 72 Ch. 17 (supervisory signal initiating devices).

### 16. Tamper and waterflow on separate circuits
**Where:** Module 3, Lesson 3.4 "Sprinkler waterflow and valve supervision"
> **Never wire a tamper switch on the same circuit or zone as a waterflow switch**, or a closed valve could look like a fire (or a fire could be missed). Supervisory and alarm signals must be distinct at the panel. **⟦#16⟧**

**Where:** Reference card "Pull stations, waterflow, tamper"
> - Never on the same zone as waterflow **⟦#16⟧**

**Also in:** Troubleshooting Guide 8 "Waterflow alarm problems"

**Proposed:** never put a tamper switch on the same circuit or zone as a waterflow switch; supervisory and alarm signals must be distinct at the panel.

**Source:** NFPA 72 Ch. 23 (distinctive signals; supervisory not on alarm circuits).

---

## Device placement

### 17. Smoke detector spacing
**Where:** Module 7, Lesson 7.2 "Smoke detector placement"
> - **Spacing:** a nominal **30 ft** spacing between detectors, and no more than **15 ft** from a wall. **⟦#17⟧**

**Where:** Reference card "Smoke detector placement"
> - 30 ft nominal spacing, no more than 15 ft from a wall **⟦#17⟧**

**Proposed:** smooth flat ceiling: 30 ft nominal spacing, no more than 15 ft from a wall, every point on the ceiling within 21 ft (0.7 × 30 ft) of a detector.

**Source:** NFPA 72 Ch. 17 (spot-type smoke detector spacing).

### 18. Smoke detector mounting
**Where:** Module 7, Lesson 7.2 "Smoke detector placement"
> - **Ceiling or wall:** on the ceiling, or on a sidewall with the **top of the detector within 12 inches** of the ceiling. **⟦#18⟧**

**Where:** Reference card "Smoke detector placement"
> - Ceiling, or sidewall with the top of detector within 12 in of the ceiling **⟦#18⟧**

**Proposed:** commercial detectors on the ceiling, or on a sidewall with the top of the detector within 12 in of the ceiling. Household smoke alarms keep the 4 in rule: on the ceiling at least 4 in from the wall, or on the wall 4 to 12 in below the ceiling.

**Source:** NFPA 72 Ch. 17 (commercial) and Ch. 29 (household). The 4 in rule was dropped from Ch. 17 in recent editions.

### 19. Smoke detectors near HVAC
**Where:** Module 7, Lesson 7.2 "Smoke detector placement"
> - **Air movement:** keep detectors at least **3 ft from supply air diffusers** and return air openings. Air blowing across a detector keeps smoke out of it, and dust from a supply vent makes it dirty fast. **⟦#19⟧**

**Where:** Reference card "Smoke detector placement"
> - At least 3 ft from supply diffusers and return openings **⟦#19⟧**

**Also in:** Troubleshooting Guide 6 "Nuisance smoke alarms"

**Proposed:** at least 3 ft from supply air diffusers and return air openings.

**Source:** NFPA 72 Ch. 17 and Ch. 29.

### 20. Heat detector spacing
**Where:** Module 7, Lesson 7.3 "Heat detector placement"
> - Use the **listed spacing** for that detector (on the label or instructions), for example 50 × 50 ft. **⟦#20⟧**

**Where:** Reference card "Heat detector quick rules"
> - Use the **listed spacing**; reduce it above about 10 ft ceilings **⟦#20⟧**

**Proposed:** use the listed spacing (for example 50 × 50 ft), reduced for ceilings above about 10 ft; every point within 0.7 × the listed spacing.

**Source:** NFPA 72 Ch. 17 (heat detector spacing and high ceiling reduction table).

### 21. Where duct detectors are required
**Where:** Module 7, Lesson 7.4 "Duct smoke detectors"
> - **Where required:** NFPA 90A and the mechanical code call for them on air handlers over a certain size. A commonly cited trigger is supply systems over **2,000 CFM**, detecting downstream of the filters. Larger systems may need return-side detection too. Follow the mechanical drawings. **⟦#21⟧**

**Proposed:** commonly required on supply systems over 2,000 CFM, downstream of the filters; larger systems (commonly over 15,000 CFM) may also need return-side detection.

**Source:** NFPA 90A and the International Mechanical Code. Thresholds and locations differ between them.

### 22. Duct detector signal type
**Where:** Module 7, Lesson 7.4 "Duct smoke detectors"
> - **Signal type:** a duct detector is usually set up as a **supervisory** signal that shuts down the fan, rather than a building-wide alarm, unless the AHJ or design calls for an alarm. **⟦#22⟧**

**Proposed:** usually a supervisory signal that shuts down the fan, unless the AHJ or design calls for an alarm.

**Source:** NFPA 72 Ch. 17/21 and NFPA 90A. Some AHJs require alarm.

### 23. Duct detector remote test station
**Where:** Module 7, Lesson 7.4 "Duct smoke detectors"
> - **Remote test station or indicator:** required where the detector isn't easy to see and reach, so it can be tested and its alarm LED seen from the floor. **⟦#23⟧**

**Proposed:** remote test station or indicator required where the detector isn't readily visible or accessible.

**Source:** NFPA 72 Ch. 17 and manufacturer instructions.

### 24. Elevator recall detectors
**Where:** Module 7, Lesson 7.5 "Control functions: elevators, HVAC, doors"
> - Smoke detectors in each elevator lobby, the machine room, and the hoistway (when required) recall elevators to the main floor, or to an alternate floor if the main lobby detector is the one in alarm. **⟦#24⟧**

**Where:** Troubleshooting Guide 11 "Elevator recall or control function didn't operate"
> 5. **Elevators:** confirm lobby detector, machine room, and hoistway signals go to the right recall input (primary or alternate floor). Test with the elevator contractor present. **⟦#24⟧**

**Proposed:** smoke detectors in each elevator lobby, the machine room, and the hoistway (when required) recall elevators to the main floor, or to an alternate floor when the main lobby detector is in alarm.

**Source:** NFPA 72 Ch. 21 and ASME A17.1.

### 25. Shunt trip heat detectors
**Where:** Module 7, Lesson 7.5 "Control functions: elevators, HVAC, doors"
> - **Shunt trip:** where sprinklers are in an elevator machine room or hoistway, **heat detectors** within **2 ft of each sprinkler head**, with a lower temperature rating and faster response than the sprinkler, disconnect elevator power **before** water flows. **⟦#25⟧**

**Proposed:** where sprinklers are in an elevator machine room or hoistway, heat detectors within 2 ft of each sprinkler head, with a lower temperature rating and faster response than the sprinkler, cut elevator power before water flows.

**Source:** NFPA 72 Ch. 21 (elevator power shutdown).

### 26. Detectors during construction
**Where:** Module 7, Lesson 7.6 "Panels, annunciators, and construction protection"
> - **Protect detectors during construction:** smoke detectors installed before construction cleaning is finished get filled with drywall dust. Don't install heads until the area is clean, or cover them with the manufacturer's dust covers and **remove every cover** before the system goes into service. A covered detector can't see smoke. **⟦#26⟧**

**Where:** Reference card "Smoke detector placement"
> - Dust covers during construction; remove every one before service **⟦#26⟧**

**Also in:** Troubleshooting Guide 6 "Nuisance smoke alarms"

**Proposed:** don't install smoke detectors until construction cleanup is complete, or protect them with dust covers and remove every cover before the system goes into service.

**Source:** NFPA 72 Ch. 17 (protection during construction).

---

## Notification

### 27. Temporal-3 and temporal-4
**Where:** Module 4, Lesson 4.1 "Audible signals and the temporal-3 pattern"
> Three half-second pulses, then a pause, repeating every 4 seconds. **⟦#27⟧**

**Where:** Reference card "Audibility and tones"
> ```
> Temporal-3 (fire evacuation)
> █ _ █ _ █ ___  █ _ █ _ █ ___
> ½s on/off ×3, then 1½s off, repeats every 4 s
>
> Temporal-4 (carbon monoxide)
> ▌▌▌▌ _____ ▌▌▌▌ _____
> 4 short pulses, then a pause
> ```
>
> **⟦#27⟧**

**Proposed:** temporal-3 fire evacuation: three ½-second pulses with ½-second gaps, then 1½ seconds off, repeating every 4 seconds. CO uses temporal-4: four short pulses, then a pause.

**Source:** NFPA 72 Ch. 18 and ANSI/ASA S3.41 (temporal-3); UL 2075 / NFPA 72 (temporal-4 for CO).

### 28. Audibility levels
**Where:** Module 4, Lesson 4.2 "How loud is loud enough"
> Audibility is measured in **dBA** with a sound meter, **5 feet above the floor**. **⟦#28⟧**

**Where:** Reference card "Audibility and tones"
> Measured in dBA, 5 ft above the floor. **⟦#28⟧**

**Proposed:** measured 5 ft above the floor in dBA. Public mode: 15 dB above average ambient, or 5 dB above the maximum lasting 60 s or more, whichever is greater. Private mode: 10 dB above average ambient, or 5 dB above the 60 s maximum. Maximum 110 dBA.

**Source:** NFPA 72 Ch. 18 (audible characteristics).

### 29. Sleeping area audibility and tone
**Where:** Module 4, Lesson 4.2 "How loud is loud enough"
> - At least 15 dB above average ambient, 5 dB above the maximum lasting 60 seconds, or **75 dBA at the pillow**, whichever is greater. **⟦#29⟧**

**Where:** Reference card "Audibility and tones"
> | Mode | Minimum |
> |---|---|
> | Sleeping | Greater of 15 dB over ambient, 5 dB over max, or 75 dBA at the pillow; 520 Hz low-frequency tone **⟦#29⟧** |

**Proposed:** greater of 15 dB above average ambient, 5 dB above the 60 s maximum, or 75 dBA at the pillow; low-frequency 520 Hz tone.

**Source:** NFPA 72 Ch. 18 (sleeping areas). The 520 Hz rule took effect for new installs starting in 2014.

### 30. Strobe height and flash rate
**Where:** Module 4, Lesson 4.3 "Strobes and candela"
> **Wall mounting:** the **entire lens** between **80 and 96 inches** above the floor. **⟦#30⟧**

**Where:** Reference card "Strobe candela and placement"
> - Wall mount: entire lens 80 to 96 in above the floor **⟦#30⟧**

**Proposed:** wall-mounted strobes with the entire lens between 80 and 96 in above the floor; flash rate 1 to 2 per second.

**Source:** NFPA 72 Ch. 18 (visible characteristics, wall mounting).

### 31. Strobe candela by room size
**Where:** Module 4, Lesson 4.3 "Strobes and candela"
> | Room size | Minimum candela |
> |---|---|
> | 20 × 20 ft | 15 cd |
> | 28 × 28 ft | 30 cd |
> | 40 × 40 ft | 60 cd |
> | 45 × 45 ft | 75 cd |
> | 54 × 54 ft | 95 cd |
> | 55 × 55 ft | 115 cd |
>
> **⟦#31⟧**

**Where:** Reference card "Strobe candela and placement"
> | Room (one wall strobe) | Minimum cd |
> |---|---|
> | 20 × 20 ft | 15 |
> | 28 × 28 ft | 30 |
> | 40 × 40 ft | 60 |
> | 45 × 45 ft | 75 |
> | 54 × 54 ft | 95 |
> | 55 × 55 ft | 115 |
>
> **⟦#31⟧**

**Proposed:** one wall-mounted strobe: 20 × 20 ft 15 cd, 28 × 28 ft 30 cd, 40 × 40 ft 60 cd, 45 × 45 ft 75 cd, 54 × 54 ft 95 cd, 55 × 55 ft 115 cd.

**Source:** NFPA 72 Ch. 18 room spacing table for wall-mounted visible appliances.

### 32. Corridor strobes
**Where:** Module 4, Lesson 4.3 "Strobes and candela"
> **Corridors** (20 ft wide or less): strobes within **15 ft of each end** and no more than **100 ft apart**, with a minimum of 15 cd. **⟦#32⟧**

**Where:** Reference card "Strobe candela and placement"
> - Corridors up to 20 ft wide: 15 cd minimum, within 15 ft of each end, no more than 100 ft apart **⟦#32⟧**

**Proposed:** corridors 20 ft wide or less: 15 cd minimum, within 15 ft of each end, no more than 100 ft apart.

**Source:** NFPA 72 Ch. 18 (corridor spacing).

### 33. Sleeping room strobes
**Where:** Module 4, Lesson 4.3 "Strobes and candela"
> **Sleeping rooms:** **177 cd** if the strobe is within 24 inches of the ceiling, **110 cd** if it's 24 inches or more below the ceiling. **⟦#33⟧**

**Where:** Reference card "Strobe candela and placement"
> - Sleeping rooms: 177 cd within 24 in of the ceiling, 110 cd if 24 in or more below **⟦#33⟧**

**Proposed:** 177 cd if within 24 in of the ceiling, 110 cd if 24 in or more below the ceiling.

**Source:** NFPA 72 Ch. 18 (sleeping area visible appliances).

### 34. Strobe synchronization
**Where:** Module 4, Lesson 4.4 "Synchronization"
> Flashing strobes out of step can trigger seizures in people with photosensitive epilepsy. When **more than two strobes** can be seen from any one spot, they must flash **in sync**. **⟦#34⟧**

**Where:** Reference card "Strobe candela and placement"
> - More than 2 visible from one spot: must be synchronized **⟦#34⟧**

**Also in:** Troubleshooting Guide 4 "Horns or strobes not working, or NAC trouble"

**Proposed:** when more than two strobes can be seen from one spot, they must flash in sync.

**Source:** NFPA 72 Ch. 18 (synchronization within a field of view).

### 35. Voice speaker circuits
**Where:** Module 4, Lesson 4.5 "Voice evacuation"
> - Speakers run on **25 V or 70.7 V** audio circuits from an amplifier, with taps (such as ¼, ½, 1, 2 W) that set loudness. **⟦#35⟧**

**Proposed:** voice evacuation speakers run on 25 V or 70.7 V audio circuits with wattage taps (such as ¼, ½, 1, 2 W).

**Source:** typical amplifier and speaker spec sheets.

---

## Power

### 36. Dedicated branch circuit
**Where:** Module 6, Lesson 6.1 "Primary power"
> The fire alarm panel's main power comes from a **dedicated branch circuit**: a breaker that feeds the fire alarm and nothing else (other fire alarm equipment, like NAC extenders, can share it if the design allows). **⟦#36⟧**

**Where:** Reference card "Primary power"
> - Dedicated branch circuit, fire alarm only **⟦#36⟧**

**Proposed:** primary power from a dedicated branch circuit that feeds only fire alarm equipment.

**Source:** NFPA 72 Ch. 10 (primary power supply) and NEC 760.41/760.121.

### 37. Breaker marking and locking
**Where:** Module 6, Lesson 6.1 "Primary power"
> - **Marked in red** and identified as **"FIRE ALARM CIRCUIT"** **⟦#37⟧**

**Where:** Reference card "Primary power"
> - Breaker marked red, "FIRE ALARM CIRCUIT", locked, location recorded at the panel **⟦#37⟧**

**Also in:** Troubleshooting Guide 5 "AC power loss or battery trouble"

**Proposed:** breaker marked red and identified "FIRE ALARM CIRCUIT", locked or protected and accessible only to authorized people, with its location recorded at the control unit.

**Source:** NFPA 72 Ch. 10 and NEC 760.41/760.121.

### 38. No GFCI or AFCI
**Where:** Module 6, Lesson 6.1 "Primary power"
> **No plug-in transformers and no GFCI or AFCI breakers** on fire alarm primary power unless the manufacturer and AHJ allow it. A nuisance trip would take the system to battery without anyone noticing until the battery dies. **⟦#38⟧**

**Where:** Reference card "Primary power"
> - No GFCI or AFCI unless the manufacturer and AHJ allow **⟦#38⟧**

**Proposed:** no GFCI or AFCI protection on the fire alarm branch circuit unless the manufacturer and AHJ allow it.

**Source:** NEC 760.41(B)/760.121(B).

### 39. AC loss reporting delay
**Where:** Module 6, Lesson 6.3 "Power troubles and what they mean"
> **AC loss reporting delay:** the panel reports AC loss locally right away, but the transmission to the monitoring center is delayed (commonly **1 to 3 hours**) so short outages don't flood the monitoring center. **⟦#39⟧**

**Where:** Reference card "Primary power"
> - AC loss to monitoring delayed, commonly 1 to 3 h **⟦#39⟧**

**Proposed:** AC loss shows locally right away; transmission to the monitoring center is delayed, commonly 1 to 3 hours.

**Source:** NFPA 72 Ch. 10 (power supervision).

### 40. Standby time
**Where:** Module 6, Lesson 6.2 "Secondary power (batteries)"
> | Requirement | Typical value |
> |---|---|
> | **Standby** | **24 hours** of normal (non-alarm) operation **⟦#40⟧** |

**Where:** Reference card "Secondary power (batteries)"
> | Item | Value |
> |---|---|
> | Standby | 24 h **⟦#40⟧** |

**Proposed:** 24 hours of standby.

**Source:** NFPA 72 Ch. 10 (secondary power capacity).

### 41. Alarm time on battery
**Where:** Module 4, Lesson 4.5 "Voice evacuation"
> - Voice systems need more battery: **15 minutes** of alarm at full load instead of 5. **⟦#41⟧**

**Where:** Reference card "Secondary power (batteries)"
> | Item | Value |
> |---|---|
> | Alarm, horns/strobes | 5 min (0.083 h) **⟦#41⟧** |

**Also in:** Module 6, Lesson 6.2 "Secondary power (batteries)"

**Proposed:** after standby, 5 minutes of alarm with every notification appliance operating; 15 minutes at maximum connected load for voice evacuation.

**Source:** NFPA 72 Ch. 10.

### 42. 20% battery safety margin
**Where:** Module 6, Lesson 6.2 "Secondary power (batteries)"
> - Battery calculations add a **20% safety margin** on top of the calculated amp-hours. **⟦#42⟧**

**Where:** Reference card "Secondary power (batteries)"
> | Item | Value |
> |---|---|
> | Safety margin | 20% **⟦#42⟧** |

**Proposed:** battery calculations add a 20% safety margin.

**Source:** NFPA 72 Ch. 10 (added in the 2016 edition, as I understand it). Manufacturers' battery worksheets also use it.

### 43. Batteries with a generator
**Where:** Module 6, Lesson 6.2 "Secondary power (batteries)"
> - A generator can supplement batteries, but the batteries still need to carry the system for at least the transfer time, and the exact standby required with a generator depends on the code edition and AHJ. **⟦#43⟧**

**Proposed:** a generator can supplement batteries, but the batteries must still carry the system for at least the transfer time; how much battery standby is required with a generator depends on the edition and AHJ.

**Source:** NFPA 72 Ch. 10 (secondary power with generator, commonly 4 h of battery in that case).

### 44. Battery dating and replacement
**Where:** Module 6, Lesson 6.4 "Battery care and replacement"
> - **Date every battery** with the month and year of manufacture or installation when you install it. **⟦#44⟧**

**Where:** Reference card "Secondary power (batteries)"
> | Item | Value |
> |---|---|
> | Replace sealed lead-acid | About every 5 years, date every battery **⟦#44⟧** |

**Also in:** Troubleshooting Guide 5 "AC power loss or battery trouble"

**Proposed:** mark every battery with the month and year of manufacture (or install); replace sealed lead-acid batteries about every 5 years or sooner per the manufacturer or test results.

**Source:** NFPA 72 Ch. 10 (marking) and Ch. 14 (replacement).

### 45. Charger capacity
**Where:** Module 6, Lesson 6.4 "Battery care and replacement"
> - The charger must be able to recharge a fully discharged battery within **48 hours**. **⟦#45⟧**

**Where:** Reference card "Secondary power (batteries)"
> | Item | Value |
> |---|---|
> | Recharge time | Within 48 h **⟦#45⟧** |

**Proposed:** the charger recharges fully discharged batteries within 48 hours.

**Source:** NFPA 72 Ch. 10.

### 46. Battery testing
**Where:** Module 6, Lesson 6.4 "Battery care and replacement"
> - At inspection, batteries are checked visually, voltage-checked under load, and load or capacity tested on the schedule in NFPA 72. A battery that reads full voltage with no load can still collapse under load. **⟦#46⟧**

**Proposed:** batteries checked visually, voltage-checked under load, and load or capacity tested on the NFPA 72 schedule; a battery can read full voltage with no load and still collapse under load.

**Source:** NFPA 72 Ch. 14 (battery test methods).

### 47. NAC current rating
**Where:** Module 5, Lesson 5.6 "NAC power, voltage drop, and extenders"
> - Each NAC has a **maximum current rating** (often 1.5 to 3 A per circuit). Add up every appliance on the circuit at its listed current. **⟦#47⟧**

**Where:** Reference card "NAC voltage drop"
> - NAC rating commonly 1.5 to 3 A per circuit; check the panel **⟦#47⟧**

**Also in:** Troubleshooting Guide 4 "Horns or strobes not working, or NAC trouble"

**Proposed:** NAC outputs are commonly rated 1.5 to 3 A per circuit; check the panel.

**Source:** typical panel and NAC extender spec sheets.

### 48. Appliance minimum voltage
**Where:** Module 5, Lesson 5.6 "NAC power, voltage drop, and extenders"
> - **Voltage drop** matters more on NACs than anywhere else. Appliances listed for "regulated 24 VDC" typically work down to about **16 VDC**. **⟦#48⟧**

**Where:** Reference card "NAC voltage drop"
> - Regulated 24 V appliances commonly work down to **16 V** **⟦#48⟧**

**Also in:** Troubleshooting Guide 4 "Horns or strobes not working, or NAC trouble"

**Proposed:** appliances listed for regulated 24 VDC typically operate down to 16 VDC.

**Source:** UL 1971 / UL 464 regulated 24 V operating range (16 to 33 V) on appliance spec sheets.

### 49. NAC calculation starting voltage
**Where:** Module 5, Lesson 5.6 "NAC power, voltage drop, and extenders"
> - Calculate drop from the **battery voltage at the end of standby**, not a fresh 24 or 27 V. A common starting value is **20.4 VDC** (85% of 24 V). **⟦#49⟧**

**Where:** Reference card "NAC voltage drop"
> - Start from **20.4 V** (battery at end of standby), not 24 V **⟦#49⟧**

**Proposed:** calculate NAC voltage drop from 20.4 VDC (85% of 24 V, battery at end of standby), not 24 V.

**Source:** common manufacturer voltage drop worksheets. Some manufacturers use a different value; their method wins.

---

## Monitoring

### 50. Communication paths and test signals
**Where:** Module 2, Lesson 2.5 "Monitoring and communication"
> - **Cellular and IP communicators:** increasingly the primary path as copper phone lines disappear. Many single-path cellular or IP communicators are now listed as an acceptable sole means when the path itself is supervised. **⟦#50⟧**

**Proposed:** DACTs traditionally need two separate paths; many single-path cellular or IP communicators are now listed as an acceptable sole means when the path itself is supervised. Test signals go to the monitoring center on a regular schedule (commonly at least every 24 h).

**Source:** NFPA 72 Ch. 26 (supervising station communication methods).

### 51. Contact ID fire codes
**Where:** Reference card "Contact ID fire event codes"
> | Code | Event |
> |---|---|
> | 110 | Fire alarm |
> | 111 | Smoke |
> | 113 | Waterflow |
> | 114 | Heat |
> | 115 | Pull station |
> | 116 | Duct |
> | 200 | Fire supervisory |
> | 203 | Gate valve (tamper) |
> | 301 | AC loss |
> | 302 | Low system battery |
> | 373 | Fire trouble |
> | 602 | Periodic test |
>
> **⟦#51⟧**

**Proposed:** 110 fire, 111 smoke, 113 waterflow, 114 heat, 115 pull station, 116 duct, 200 fire supervisory, 203 gate valve, 301 AC loss, 302 low battery, 373 fire trouble, 602 periodic test.

**Source:** SIA DC-05 Contact ID event code list.

---

## Testing, impairments, and documentation

### 52. Inspection and testing frequencies
**Where:** Module 8, Lesson 8.2 "Inspection and testing schedule"
> | Item | Common frequency |
> |---|---|
> | Control panel, trouble signals, power | Visual inspection semiannually or annually, functional test **annually** **⟦#52⟧** |

**Where:** Reference card "Inspection and testing frequencies"
> | Item | Common frequency |
> |---|---|
> | Smoke, heat, duct detectors, pull stations | Annual functional test **⟦#52⟧** |

**Proposed:** smoke, restorable heat, duct detectors, pull stations, notification appliances, and the panel functionally tested annually; batteries inspected and tested semiannually; transmission to the monitoring center tested annually.

**Source:** NFPA 72 Ch. 14 testing frequency table.

### 53. Waterflow and tamper frequency
**Where:** Module 8, Lesson 8.2 "Inspection and testing schedule"
> | Item | Common frequency |
> |---|---|
> | Waterflow and valve supervisory switches | **Semiannually** **⟦#53⟧** |

**Where:** Reference card "Inspection and testing frequencies"
> | Item | Common frequency |
> |---|---|
> | Waterflow, tamper | Semiannual **⟦#53⟧** |

**Proposed:** waterflow and valve supervisory switches tested semiannually (NFPA 25 may require some quarterly).

**Source:** NFPA 72 Ch. 14 and NFPA 25.

### 54. Smoke detector test method
**Where:** Module 8, Lesson 8.3 "How to test each device"
> | Device | Test method |
> |---|---|
> | **Smoke detector** | Listed aerosol smoke or a smoke generator that actually puts smoke into the chamber. A magnet test only checks the electronics, not the chamber. **⟦#54⟧** |

**Where:** Troubleshooting Guide 12 "Detector or device needs replacing"
> 5. Test the new device with listed smoke or the correct method. **⟦#54⟧**

**Proposed:** test with listed aerosol smoke or a smoke generator that puts smoke in the chamber; a magnet test only checks electronics; never use an open flame.

**Source:** NFPA 72 Ch. 14 test methods.

### 55. Sensitivity testing
**Where:** Module 8, Lesson 8.3 "How to test each device"
> | Device | Test method |
> |---|---|
> | **Smoke sensitivity** | Measure with the panel's sensitivity readout (addressable) or a listed sensitivity tester. Required within **1 year** after install, then every **other year**. If results stay in range, the interval can be extended up to **5 years**. **⟦#55⟧** |

**Where:** Reference card "Inspection and testing frequencies"
> | Item | Common frequency |
> |---|---|
> | Smoke sensitivity | 1 year after install, then every other year; up to 5 years if stable **⟦#55⟧** |

**Proposed:** within 1 year after installation, then every other year; if results stay in range, the interval can be extended up to 5 years.

**Source:** NFPA 72 Ch. 14 (sensitivity testing).

### 56. Non-restorable heat detectors
**Where:** Module 8, Lesson 8.3 "How to test each device"
> | Device | Test method |
> |---|---|
> | **Heat detector (non-restorable)** | Not heat tested; test the circuit with a mechanical or electrical method. Replaced or sample-tested after a set number of years per NFPA 72. **⟦#56⟧** |

**Proposed:** not heat tested; the circuit is tested mechanically or electrically, and heads are replaced or sample lab-tested after a set number of years (commonly 15 years, 2 per 100).

**Source:** NFPA 72 Ch. 14.

### 57. Impairments and fire watch
**Where:** Module 8, Lesson 8.4 "Impairments, fire watch, and nuisance alarms"
> - **Notify the AHJ and the owner** when the system will be out of service for more than **4 hours in a 24-hour period**, and the monitoring center whenever signals will be affected. **⟦#57⟧**

**Where:** Reference card "Inspection and testing frequencies"
> | Item | Common frequency |
> |---|---|
> | Impairment over 4 h in 24 h | Notify AHJ; fire watch may be required **⟦#57⟧** |

**Also in:** Troubleshooting Guide 6 "Nuisance smoke alarms"; Troubleshooting Guide 9 "Failure to communicate with the monitoring center"

**Proposed:** notify the AHJ and owner when the system will be out of service more than 4 hours in a 24-hour period; the AHJ may require a fire watch.

**Source:** NFPA 72 Ch. 10 (impairments) and IFC 901.7.

### 58. Documentation on site
**Where:** Module 8, Lesson 8.5 "Documentation"
> - **Record (as-built) drawings, sequence of operations, battery and voltage drop calculations, and manufacturer manuals:** kept on site, often in a **documentation cabinet** at the panel. **⟦#58⟧**

**Proposed:** record drawings, sequence of operations, calculations, manuals, and site-specific software kept on site (often in a documentation cabinet); inspection and test records kept at least until the next test plus one year.

**Source:** NFPA 72 Ch. 7 (documentation) and Ch. 14 (records retention).

