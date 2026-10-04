# Module 8: Codes, Egress, and Standards

**You'll be able to:** name the codes and standards that govern access-controlled doors, apply the free egress rules, and recognize the requirements for sensor release, electromagnetically locked, and delayed egress doors.

The building code (most of the US uses the **International Building Code, IBC**) and the life safety code (**NFPA 101**) both regulate locked exit doors, and the jurisdiction decides which edition applies. Section numbers move between editions, so this module names the topics; look up the section in the edition your AHJ has adopted.

---

## Lesson 8.1: Who's in charge and which documents apply

| Document | What it covers for access control |
|---|---|
| **IBC** (building code), Chapter 10 | Egress doors, locks, electrically locked doors, panic hardware, stairway doors |
| **NFPA 101** (Life Safety Code) | The same topics for buildings that enforce NFPA 101 (often healthcare, schools, and state fire marshal rules) |
| **NFPA 80** | Fire doors: what hardware can go on them and how they're inspected |
| **NFPA 72** | Fire alarm, including the relays that release doors |
| **NFPA 70 (NEC)** | Class 2 wiring, cable ratings, power supplies |
| **ADA Standards** | Reach range, hardware height, and operating force for accessible doors |
| **UL 294** | Listing standard for access control system units (controllers, readers, locks, power supplies) [VERIFY:ul294] |
| **UL 1034, BHMA A156 series** | Burglary-resistant electric locks; performance grades for strikes, maglocks, and exit devices [VERIFY:lock-standards] |

**The AHJ** (building official and fire marshal) has the final word. Many require a permit and a plan review for any electrically locked egress door, especially maglocks and delayed egress. Get approval **before** you install.

---

## Lesson 8.2: Free egress, one operation, and hardware

The rules every exit door follows, locked or not:

- **Free egress:** an exit door opens from the egress side **without a key, a tool, special knowledge, or special effort**. [VERIFY:free-egress]
- **One operation:** releasing the door takes **one** motion. A lever plus a separate deadbolt or a thumb-turn is two operations, which isn't allowed on most exit doors. [VERIFY:one-operation]
- **Hardware height:** door handles, pulls, latches, locks, and other operating parts on accessible doors are **34 to 48 in** above the floor. [VERIFY:hardware-height]
- **Operable with one hand**, without tight grasping, pinching, or twisting of the wrist, and no more than **5 lbf** to operate. [VERIFY:hardware-grasp]
- **Opening force** for interior hinged doors is no more than **5 lbf** (fire doors excepted: the minimum the AHJ allows). [VERIFY:door-force]
- **Panic hardware** is required on exit doors serving assembly and educational occupancies with **50 or more** people, high-hazard occupancies, and certain electrical rooms. Its actuating portion extends at least **half the door width**. [VERIFY:panic-hardware]

An access system almost never changes egress on a door with a mechanical lever or panic bar: the inside hardware always opens the door. The rules in the next lessons apply when **the lock itself has no mechanical release** (maglocks, fail-safe locksets with no free lever) or when egress is deliberately delayed.

> **Field tip (David to add):** the egress violation you find most often on existing access doors.

---

## Lesson 8.3: Sensor release (maglock with motion and push button)

The most common maglock arrangement: a motion sensor on the egress side unlocks the door as someone approaches, and a push button backs it up. The code calls these **sensor release of electrically locked egress doors** (older editions: access-controlled egress doors). Requirements: [VERIFY:sr-requirements]

1. A **sensor on the egress side** detects someone approaching and unlocks the door. Loss of power to the sensor also unlocks it.
2. **Loss of power to the lock** unlocks the door.
3. A **manual unlock button** labeled **"PUSH TO EXIT"**, mounted **40 to 48 in** above the floor and **within 5 ft** of the door. Pressing it **cuts power to the lock directly**, independent of the access control electronics, and the door stays unlocked for **at least 30 seconds**. [VERIFY:sr-button]
4. **Fire alarm or sprinkler activation** (where the building has them) unlocks the doors, and they stay unlocked until the fire alarm is reset. [VERIFY:fa-release]
5. The locking system is **listed to UL 294**. [VERIFY:ul294]

**Why the push button wiring matters:** the button's contact goes in series with the lock's power, usually a timed relay or a pneumatic-delay button, not into a controller input. If the controller locks up, the button still works.

---

## Lesson 8.4: Electromagnetically locked egress doors

The other code path for a maglock: the **door hardware itself** releases the magnet. Requirements: [VERIFY:em-lock]

1. The hardware on the door has an **obvious method of operation** under all lighting conditions and works **with one hand**.
2. Operating the hardware **directly interrupts power** to the maglock and **unlocks the door immediately** (a switch built into the lever or exit device, wired in series with the lock power).
3. **Loss of power** unlocks the door.
4. Where **panic hardware** is required, operating the panic hardware releases the maglock.
5. The locking system is **listed to UL 294**.

No motion sensor or push button is required on this path because the hardware the occupant naturally uses does the release.

---

## Lesson 8.5: Delayed egress and stairway doors

**Delayed egress locks** hold an exit door locked for a short delay when someone pushes on it, sounding a local alarm. They're used to stop theft and patient or resident wandering. Only allowed in certain occupancies, and only where the building has a **complete sprinkler system or fire detection system**. [VERIFY:de-conditions]

- Applying a force of no more than **15 lbf** for no more than **3 s** starts an **irreversible** release; the door **unlocks within 15 s** (up to 30 s if the AHJ approves). A local audible signal sounds when the process starts. [VERIFY:de-timing]
- Once released, it **rearms only manually** at the door. [VERIFY:de-timing]
- It **releases immediately** on sprinkler or fire detection activation, on loss of power, and from the fire command center where one exists. [VERIFY:de-release]
- A sign on the door, above and within **12 in** of the release hardware: **"PUSH UNTIL ALARM SOUNDS. DOOR CAN BE OPENED IN 15 SECONDS."** (30 where that's approved), in letters at least **1 in** high with **1/8 in** stroke. [VERIFY:de-sign]
- An occupant generally can't be made to pass through **more than one** delayed egress door before reaching an exit. [VERIFY:de-conditions]

**Stairway doors.** In multistory buildings, doors from an exit stair back into a floor generally must allow **re-entry**. Where they're locked from the stair side, they must unlock automatically on a fire alarm and from the fire command center where there is one (the exact rules depend on building height and the code edition). This is usually fail-safe hardware on the stair side. [VERIFY:stair-reentry]

---

## Lesson 8.6: NEC, ADA, and inspection

- **NEC:** Class 2 power (Lesson 1.4), separation from power wiring, listed cable for the space (CL2, CL2R, CL2P), and support from the structure (Module 5). [VERIFY:nec-class2]
- **ADA:** readers within the **15 to 48 in** reach range; hardware 34 to 48 in; operable with one hand. [VERIFY:reach-range]
- **Fire doors (NFPA 80):** listed hardware, positive latching, no unapproved field modifications (Module 4).
- **Annual inspection:** fire door assemblies get an inspection and test **every year** by a qualified person, with a written record. NFPA 101 also requires annual inspection of certain egress doors, including doors with panic hardware and electrically controlled egress. [VERIFY:door-inspect]
- **Documentation:** keep the permit, the approved drawings, door test sheets, and the fire alarm release test with the customer's records.

---

## Module 8 quiz

1. Why does this module name topics instead of exact code section numbers?
2. What does "free egress" mean?
3. A door has a lever and a separate deadbolt. What rule does it break?
4. What height range applies to door hardware on accessible doors?
5. On a sensor release maglock door, what does the PUSH TO EXIT button have to do?
6. How is an electromagnetically locked egress door released, and what extra devices does it need?
7. What force and time start the release on a delayed egress door, and how long until it unlocks?
8. What three events release a delayed egress lock immediately?
9. What does a locked stairway door need to do on a fire alarm?
10. How often are fire door assemblies inspected?

**Answer key:** 1) Section numbers change between code editions; the AHJ's adopted edition decides. 2) The door opens from the egress side without a key, tool, special knowledge, or special effort. 3) One operation: releasing the door must take one motion. 4) 34 to 48 in above the floor. 5) Be within 5 ft and 40 to 48 in high, cut lock power directly, and keep the door unlocked at least 30 seconds. 6) A switch in the door hardware cuts lock power directly; no motion sensor or push button is needed. 7) No more than 15 lbf for no more than 3 s; unlocks within 15 s (30 s if approved). 8) Sprinkler or fire detection activation, loss of power, and a signal from the fire command center. 9) Unlock automatically to allow re-entry. 10) Every year.
