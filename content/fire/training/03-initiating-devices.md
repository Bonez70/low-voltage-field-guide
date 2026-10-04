# Module 3: Initiating Devices

**You'll be able to:** pick the right detector for a space, explain how each type senses fire, place pull stations, and connect sprinkler waterflow and valve supervisory switches correctly.

---

## Lesson 3.1: Smoke detectors

**Photoelectric** detectors shine a light inside a chamber; smoke scatters the light onto a sensor. They respond best to **smoldering fires** with large, visible smoke particles (a cigarette in a couch, an overheated wire). Most new commercial spot detectors are photoelectric.

**Ionization** detectors use a tiny radioactive source to make the air in a chamber conduct a small current; smoke particles disrupt it. They respond faster to **fast, flaming fires** with small particles. They contain a radioactive source, so follow the manufacturer's disposal instructions; don't throw them in the trash.

**Multi-criteria** detectors combine photoelectric with heat, CO, or infrared sensing to respond faster and reject nuisance sources such as steam and cooking.

**Where smoke detectors don't belong** (they'll false alarm or fail early):
- Kitchens, bathrooms with showers, garages, and other dusty, steamy, or exhaust-filled spaces
- Places outside the detector's listed temperature and humidity range, commonly about **32 °F to 100 °F** and up to **93% relative humidity** [VERIFY:smoke-environment]
- Directly in the airflow from supply diffusers or near return grilles (Module 7)

Use a heat detector in those spaces instead, when the design allows.

**Two-wire vs four-wire:** on conventional systems, **two-wire** smoke detectors get power and signal on the same two IDC wires and must be **listed as compatible** with that panel's zone. **Four-wire** detectors use two wires for the alarm contact and two for resettable power, with an **EOL power supervision relay** at the end of the power run so the panel knows if power is lost.

---

## Lesson 3.2: Heat detectors

Heat detectors respond to heat, not smoke. They're slower but nearly immune to nuisance alarms, so they're used where smoke detectors would false alarm. **A heat detector is property protection; it doesn't replace a smoke detector where smoke detection is required for life safety.**

| Type | How it works |
|---|---|
| **Fixed temperature** | Alarms when the air reaches a set temperature, commonly **135 °F** for ordinary spaces or **194 °F** for hot spaces like attics and boiler rooms [VERIFY:heat-types] |
| **Rate-of-rise (ROR)** | Alarms when temperature climbs fast, commonly about **15 °F per minute**, even if it hasn't reached the fixed setting [VERIFY:heat-types] |
| **Combination** | Fixed temperature plus rate-of-rise in one head |
| **Rate-compensated** | Accounts for how fast the air is heating so it responds close to the actual set point |
| **Linear heat cable** | A cable that detects heat anywhere along its length (tunnels, conveyors, cable trays) |

- **Pick the rating for the space:** the detector's temperature rating should be at least **20 °F above the highest ceiling temperature** the space normally reaches. [VERIFY:heat-ambient]
- **Restorable vs non-restorable:** some fixed-temperature heads use a fusible element that melts and must be replaced after an alarm. Check before you test with a heat gun; you can't test a non-restorable head that way.
- **Rate-of-rise** heads can false alarm in spaces that heat up fast on purpose (near ovens, loading dock doors in winter). Use fixed temperature there.
- Heat detectors have a **listed spacing** (often 50 ft or less) that's reduced for higher ceilings. Use the spacing on the detector's listing, not the smoke detector spacing.

---

## Lesson 3.3: Manual pull stations

A **manual fire alarm box (pull station)** lets a person start the alarm.

- **Single-action:** pull the handle. **Dual-action:** push or lift a flap, then pull. Dual-action, or a protective cover, helps where malicious pulls are a problem. Covers that sound a local horn when lifted are common in schools.
- **Location:** within **5 feet of each exit doorway** on each floor. [VERIFY:pull]
- **Height:** the operable part between **42 and 48 inches** above the floor. [VERIFY:pull]
- **Travel distance:** no more than **200 feet** of travel to the nearest pull station on the same floor. [VERIFY:pull]
- **Color:** red, unless the AHJ approves otherwise.
- **Reset:** most pull stations stay down until reset with a key or tool, so you can tell which one was pulled.

Some building codes don't require pull stations in fully sprinklered buildings, apart from one at a location the AHJ chooses. Follow the approved drawings. [VERIFY:pull-sprinklered]

---

## Lesson 3.4: Sprinkler waterflow and valve supervision

Most fire alarm systems monitor the building's sprinkler system.

### Waterflow switches (alarm)
A **vane-type** switch sits in the sprinkler pipe; water flowing past pushes the vane and closes the contact. A **pressure switch** is used on dry-pipe and some other systems.

- **Retard (delay):** waterflow switches have a built-in adjustable delay so pressure surges don't cause false alarms. The signal must still come in within **90 seconds** of flow equal to one sprinkler head. [VERIFY:waterflow-90s]
- Waterflow is an **alarm** signal. It means water is moving, which usually means a sprinkler head opened.
- Test it by flowing water through the **inspector's test valve**, not by tripping the switch by hand, so you test the whole path. Coordinate with the sprinkler contractor or building engineer.

### Valve supervisory switches (tamper switches)
A **tamper switch** mounts on a sprinkler control valve and reports when the valve is moved toward closed.

- Must signal within **two revolutions** of the handwheel, or when the valve has moved **one-fifth** of its travel from fully open. [VERIFY:tamper-travel]
- Must restore only when the valve is fully open again. [VERIFY:tamper-travel]
- It's a **supervisory** signal, not an alarm: a closed valve means the sprinklers may not work.

**Never wire a tamper switch on the same circuit or zone as a waterflow switch**, or a closed valve could look like a fire (or a fire could be missed). Supervisory and alarm signals must be distinct at the panel. [VERIFY:tamper-separate]

> **Field tip (David to add):** how you set the retard on a waterflow switch, and the setting you use most.

---

## Lesson 3.5: Other initiating devices

- **Duct smoke detectors:** sample air in an HVAC duct to shut down the air handler and stop it spreading smoke. Covered in Module 7.
- **Projected beam detectors:** a transmitter and receiver (or reflector) across a large open space like a warehouse or atrium. Alignment matters; building movement can cause troubles.
- **Air sampling (aspirating) detectors:** pipes pull air back to a very sensitive detector. Used in data centers, clean rooms, and places where you can't reach the ceiling to service spot detectors.
- **Flame detectors:** see the infrared or ultraviolet light of a flame. Used for fuel and chemical hazards.
- **Carbon monoxide (CO) detectors:** detect CO from fuel-burning appliances. CO is a separate signal from fire, with its own notification pattern (Module 4).
- **Monitor modules:** let an addressable system watch any dry contact (waterflow, tamper, fire pump, suppression panel).

---

## Module 3 quiz

1. Which type of smoke detector responds best to a smoldering fire?
2. Why shouldn't you put a smoke detector in a kitchen?
3. What does a four-wire smoke detector circuit need at the end of the power run?
4. What does rate-of-rise detect?
5. Why do waterflow switches have a retard?
6. Is a closed sprinkler valve an alarm, a supervisory, or a trouble signal?
7. Why can't a tamper switch share a zone with a waterflow switch?
8. How should you test a waterflow switch?

**Answer key:** 1) Photoelectric. 2) Cooking smoke and steam cause nuisance alarms; use a heat detector if the design allows. 3) An EOL power supervision relay. 4) A fast rise in temperature, even below the fixed setting. 5) So pressure surges in the pipe don't cause false alarms. 6) Supervisory. 7) Alarm and supervisory signals must be distinct; a closed valve could otherwise look like a fire. 8) Flow water through the inspector's test valve, coordinated with the sprinkler contractor or building.
