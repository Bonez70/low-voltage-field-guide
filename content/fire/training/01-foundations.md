# Module 1: Fire Alarm Foundations

**You'll be able to:** explain why fire alarm work is held to a higher standard than burglary work, name the codes that govern it, recognize power-limited fire alarm wiring, and follow the safety steps that come before touching a live fire system.

> These lessons give an overview based on NFPA 72. Codes are adopted and amended locally, and editions change. Always confirm requirements with your company, the AHJ, the adopted code edition, and the equipment's installation manual.

---

## Lesson 1.1: Why fire alarm is different

A burglar alarm protects property. A fire alarm protects **lives**. That one difference changes how the work is done:

- **The rules are mandatory.** Most commercial fire alarm systems are required by the building or fire code, designed to NFPA 72, and inspected by the fire marshal before anyone moves in.
- **The design is engineered.** Device locations, candela ratings, and wire sizes come from approved drawings. You install what's on the drawings; if something won't work in the field, you get it changed through the designer, not on your own.
- **Every change is documented.** Drawings, battery and voltage drop calculations, and test records follow the system for its whole life.
- **The system must always be watching.** Any time you take a fire system out of service, people in that building lose protection. You notify the right people before, and you put it back the way you found it after.
- **Liability is real.** If a system fails in a fire, the install and every service ticket will be examined.

Many states require a **fire alarm license** for the company and the technician, and many AHJs and employers require **NICET certification** in Fire Alarm Systems for designers and lead techs. Know what your state requires before you work on fire.

---

## Lesson 1.2: The codes and who enforces them

| Code or standard | What it covers |
|---|---|
| **NFPA 72** (National Fire Alarm and Signaling Code) | How fire alarm systems are designed, installed, tested, and maintained |
| **NFPA 70** (National Electrical Code), **Article 760** | Fire alarm wiring: circuit types, cable ratings, separation |
| **IBC / IFC** (International Building and Fire Codes) or **NFPA 101** (Life Safety Code) | *When* a fire alarm is required, and what kind, based on building use and size |
| **NFPA 90A** | HVAC systems, including where duct smoke detectors are required |
| **UL 864** | The listing standard for fire alarm control units [SRC:ul-listings] |

**The building code says whether you need a system. NFPA 72 says how to build it.**

The **AHJ** (Authority Having Jurisdiction) is usually the fire marshal or fire prevention office. The AHJ:
- Adopts a specific edition of each code, often with local amendments
- Reviews and approves the drawings before installation (plan review)
- Witnesses the acceptance test before the building is occupied
- Can require more than the code minimum

**Listed equipment only.** Every device, panel, and appliance must be listed for fire alarm use and **listed as compatible** with the panel it connects to. A smoke detector that works fine on one brand of panel may not be listed for another.

---

## Lesson 1.3: Power-limited fire alarm circuits and cable

Most of what you'll wire is **power-limited fire alarm (PLFA)** circuits: initiating device circuits, signaling line circuits, and notification appliance circuits from a listed fire alarm control unit. The panel limits the power on those circuits, so the NEC allows lighter wiring methods than for 120 V power.

**Fire alarm cable types (NEC Article 760)**

| Marking | Where it's used |
|---|---|
| **FPL** | General use, not in risers or plenums |
| **FPLR** | Riser: vertical runs between floors (also OK where FPL is allowed) |
| **FPLP** | Plenum: air-handling spaces above drop ceilings (OK anywhere) |
| **CI** (circuit integrity) | Survivability: keeps working for a rated time in a fire |

Rules to remember:
- **Fire alarm circuits are identified** at terminal and junction locations so nobody mistakes them for something else and cuts power to them. Red box covers and red cable are common ways to do this, but red itself isn't required. [SRC:nec-identify]
- **Keep PLFA cables separated** from power, lighting, and non-power-limited circuits. Don't share a box or raceway with 120 V wiring.
- **Use the jacket rating for the space.** Plenum spaces need FPLP (or cable in a raceway as allowed by the NEC and AHJ).
- **Support the cable** from the building structure, not from ceiling grid wires or pipes.

---

## Lesson 1.4: Safety before you touch a fire system

Working on a live fire system can trigger an evacuation, dispatch the fire department, shut down HVAC, recall elevators, release doors, or **discharge a suppression system**. Before you do anything that could cause a signal:

1. **Call the monitoring center** and put the account on test. Get the operator's name. [SRC:safety-notify]
2. **Notify the owner or building contact**, plus occupants if appliances will sound. Some jurisdictions also require notifying the fire department. [SRC:safety-notify]
3. **Disable outputs you don't want to operate** using the panel's disable or bypass functions, per the panel manual and the building's procedure: releasing circuits (clean agent, preaction, deluge), elevator recall, HVAC shutdown, door unlocking. **Never test with a releasing circuit armed** unless the test plan calls for a full discharge test with everyone involved. [SRC:safety-releasing]
4. **When you're done**, re-enable everything you disabled, reset the panel, confirm it's normal with no troubles, and take the account off test with the monitoring center.

Other hazards on fire jobs:
- **120 VAC is in the panel** (and in power supplies and NAC extenders). Turn off and lock the dedicated breaker before working on primary power.
- **Batteries can deliver very high current.** Disconnect them before working in the panel; don't let a wrench or tool bridge the terminals.
- **Ladders and lifts:** most devices are on the ceiling. Use the right ladder, and a lift for high ceilings.
- **If the system will be out of service** for a while, the AHJ may require a **fire watch** (Module 8).

> **Field tip (David to add):** the step new techs skip most often when putting a system on test, and what happens when they do.

---

## Lesson 1.5: Who's who on a fire alarm job

| Role | What they do |
|---|---|
| **Owner** | Responsible for keeping the system inspected, tested, and maintained |
| **Designer / engineer** | Produces the drawings, calculations, and sequence of operations |
| **Installing contractor** | Pulls wire, mounts devices, terminates, programs (often you) |
| **AHJ / fire inspector** | Approves plans, witnesses acceptance tests, enforces the code |
| **Monitoring center** | Receives alarm, supervisory, and trouble signals and dispatches |
| **Sprinkler contractor** | Installs waterflow and valve tamper switches you'll monitor |
| **Elevator, HVAC, door hardware contractors** | Their equipment is controlled by the fire alarm; coordinate testing with them |

A smooth fire job is mostly coordination. Know who you need on site for the final test before you schedule it.

---

## Module 1 quiz

1. What's the biggest difference between what a burglar alarm and a fire alarm protect?
2. Which code says *how* to design and install a fire alarm system?
3. Which NEC article covers fire alarm wiring?
4. Which cable type is required in a plenum space above a drop ceiling?
5. What does "listed as compatible" mean for a smoke detector?
6. Name three things you do before testing a fire alarm system.
7. Why must releasing circuits be disabled before testing?
8. Who usually witnesses the acceptance test before a building is occupied?

**Answer key:** 1) A fire alarm protects lives; a burglar alarm protects property. 2) NFPA 72. 3) Article 760. 4) FPLP (or cable in a raceway where the NEC and AHJ allow it). 5) The detector is listed to work with that specific control panel. 6) Put the account on test with the monitoring center, notify the building, and disable outputs such as releasing, elevator recall, and HVAC shutdown. 7) So a test signal doesn't discharge a suppression system. 8) The AHJ (fire inspector).
