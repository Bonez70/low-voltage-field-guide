# Module 7: Programming and Commissioning

**You'll be able to:** set up a door in the software, choose sensible door timers, build schedules and access levels, test every door before handoff, and train the customer.

---

## Lesson 7.1: Bringing hardware online

Every system differs, but the order is the same.

1. **Controllers:** give each one its network address (or bus address on RS-485), add it in the software, and confirm it shows online. Update firmware to the version the software expects before you go further.
2. **Readers:** set the card format (Wiegand) or the OSDP address, baud rate, and Secure Channel. Confirm a test card reads and shows up in the event log, even as "unknown card."
3. **Inputs:** assign the DPS and REX inputs to each door, and set each as normally open or normally closed (and supervised with resistors if the controller supports it).
4. **Outputs:** assign the lock relay, and set it for fail-safe or fail-secure so "unlock" does the right thing.
5. **Power supply supervision:** AC fail, low battery, and tamper inputs, named so an operator knows which enclosure has the trouble.

**Name everything** the way the building does: "D104 Main Lobby Entry," not "Door 1." Operators will read these names in alarms at 2 am.

---

## Lesson 7.2: Door timers and modes

| Setting | What it does | Common starting point |
|---|---|---|
| **Unlock (strike) time** | How long the lock stays unlocked after a valid card | 3 to 5 s |
| **Extended unlock** | Longer unlock for cardholders who need it (ADA) | 10 to 30 s |
| **Held-open time** | How long the door can stay open before a held-open alarm | 30 to 60 s; longer at loading docks |
| **Pre-alarm** | Reader beeps before held-open alarm | A few seconds before held-open |
| **Relock on close** | Lock relocks as soon as the DPS shows closed, rather than waiting out the unlock time | On, for most doors |
| **REX unlocks** | Whether REX also unlocks the lock | Usually off for fail-secure doors; on for maglock doors per the egress design |

These are customer choices, not code values; set them with the customer and write them down.

**Door modes:** card only, card plus PIN, unlocked (scheduled), locked (lockdown), first-person-in. Make sure the customer knows how to put a door back to its normal mode after an override.

---

## Lesson 7.3: Schedules, levels, and cardholders

- Build **schedules** first, then **access levels**, then add **cardholders** (Lesson 2.3).
- **Holidays** go in before the first one arrives.
- **Least privilege:** give each person only the doors and times they need. "All doors, all times" is for a few administrators.
- **Card enrollment:** read the card at an enrollment reader or type the number printed on it. Confirm the facility code matches the system's format.
- **Operators:** each person who uses the software gets their own login with only the permissions they need. No shared "admin" password.

> **Field tip (David to add):** how you handle a customer who wants everyone on "all doors, all times."

---

## Lesson 7.4: Testing every door

Test each door from both sides before you call it done. Write the results on a door test sheet.

- [ ] Valid card: green LED, lock releases, door opens, relocks on close, event logged with the right name and door
- [ ] Invalid card (and a valid card outside its schedule): red LED, stays locked, denial logged
- [ ] REX: trips from the inside, does **not** trip from the outside, opening the door with REX is not a forced alarm
- [ ] Forced door: open the door without a card or REX (key override or a helper inside with the REX masked), forced alarm reported
- [ ] Held open: prop it past the held-open time, alarm reported, restores when closed
- [ ] Egress: inside hardware opens the door with one motion with the lock in every state, including with power off
- [ ] Power loss: remove AC, door behaves as designed on battery; remove battery and AC, fail-safe unlocks and fail-secure stays locked from outside
- [ ] Fire alarm release (fail-safe egress doors): with the fire alarm account on test, activate an alarm, door releases; reset, door relocks [SRC:fa-release-test]
- [ ] Lock voltage at the lock, energized, within the lock's rating
- [ ] Tamper on readers and enclosures reports

---

## Lesson 7.5: Handoff and customer training

- **Train the administrator:** adding and removing cardholders, lost cards, changing schedules, holiday setup, running reports, and responding to door alarms.
- **Lost or terminated cards** get **disabled right away**, not deleted, so their history stays in reports.
- **Hand over:** door schedule, wiring diagrams, controller addresses and admin credentials (in a sealed envelope or password manager, not an email), and the door test sheet.
- **Explain the egress features** to the building: what happens in a fire alarm and a power failure, and that doors must never be chained, padlocked, or blocked.
- **Inspection:** fire door assemblies and certain egress doors need an inspection every year with written records. Tell the customer who does it. [SRC:door-inspect]

---

## Module 7 quiz

1. Why update controller firmware before you program doors?
2. What's a good starting unlock time, and when do you use extended unlock?
3. What does relock on close do?
4. Are door timers code values? Who decides them?
5. Put these in the order you build them: cardholders, schedules, access levels.
6. Why disable a lost card instead of deleting it?
7. How do you test a REX from both sides?
8. What should a fail-safe and a fail-secure door do with AC and battery both removed?
9. How often do fire door assemblies need to be inspected?

**Answer key:** 1) So the controller runs the version the software expects and you don't have to redo programming. 2) 3 to 5 seconds; extended unlock for cardholders who need more time, such as people with disabilities. 3) Relocks as soon as the door closes instead of waiting out the unlock time. 4) No; the customer decides them with you, and you write them down. 5) Schedules, access levels, cardholders. 6) The history stays in reports. 7) It must trip from inside and must not trip from outside. 8) Fail-safe unlocks; fail-secure stays locked from outside, and both still open from inside. 9) Every year, with written records.
