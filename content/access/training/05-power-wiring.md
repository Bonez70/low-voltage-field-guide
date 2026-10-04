# Module 5: Power and Wiring

**You'll be able to:** size an access power supply and its batteries, keep lock power from upsetting the controller, pick the right cable for each device, and check voltage drop to the lock and reader.

---

## Lesson 5.1: Access power supplies

Access power supplies are built for locks: a Class 2 supply with a battery charger and several **individually fused or PTC-protected outputs**, often with a **fire alarm interface** input that cuts lock power on alarm.

- **Listed for the job.** Use a power supply listed for access control (UL 294) or burglar alarm (UL 603) use, and for fire alarm use where it's part of a fire alarm system. [VERIFY:psu-listing]
- **Don't load it to 100%.** Design for no more than about **80% of the rated output**, leaving room for inrush, aging batteries, and the door someone adds next year. [VERIFY:psu-80]
- **Separate lock power from controller power** where you can: a separate supply, or at least separate outputs. A lock's inrush and kickback on the same output as the controller is the classic cause of controllers rebooting when a door unlocks.
- **12 or 24 V:** pick one per supply and match every lock to it. 24 V halves the current for the same lock, which cuts voltage drop on long runs.
- **Supervision:** wire the supply's AC fail and low battery outputs to controller inputs so power troubles get reported.

Use the **Access Power calculator** to add up the load and pick a supply and battery.

---

## Lesson 5.2: Batteries and standby time

Access batteries keep doors locked (and readers working) through a power failure. How long is a design decision, not a single code number.

- **UL 294 standby power levels:** Level I has no standby requirement; Level II is 30 minutes; Level III is 2 hours; Level IV is 4 hours. The specification or the customer picks the level. [VERIFY:ul294-standby]
- **Formula (same as intrusion):** Required Ah = load current in A × standby hours × 1.2. The 1.2 is a 20% margin for battery aging and temperature. [VERIFY:batt-factor]
- **Fail-safe locks drain batteries fast.** Every maglock draws current the whole time it's locked. Some designs leave maglocks off the battery on purpose (they unlock in a power failure); that's a security and egress decision for the customer and AHJ, so get it in writing.
- **Fail-secure strikes barely touch the battery.** They draw only while unlocked.
- **Two 12 V batteries in series** for a 24 V supply: same size, same age.
- Sealed lead-acid batteries are commonly replaced every **3 to 5 years**, and dated when installed. [VERIFY:batt-replace]

---

## Lesson 5.3: Suppression and kickback

When power to a lock coil is cut, the collapsing magnetic field produces a voltage spike in the opposite direction, sometimes hundreds of volts for an instant. It arcs relay contacts, resets controllers, and garbles reader data.

- On **DC locks**, put a **diode** (commonly a 1N4001 to 1N4007) across the lock terminals, **at the lock**, reverse biased: the band (cathode) to +, the other end to −. Installed backward, it's a short circuit across the lock output. [VERIFY:diode]
- Many maglocks and some strikes have **built-in suppression**. Check before adding a diode.
- **AC strikes** use a **MOV** (metal oxide varistor) instead, since a diode would block AC.
- At the lock is the right place. A diode back at the controller still lets the spike travel the whole cable run next to reader wiring.

> **Field tip (David to add):** the symptom that made you start putting a diode on every lock.

---

## Lesson 5.4: Cable

**A typical home-run door, panel-based controller** (check the manufacturer's wiring diagram):

| Device | Common cable |
|---|---|
| Reader (Wiegand) | 22 AWG, 6 conductor, shielded (8 conductor for extra functions) |
| Reader (OSDP) | 22 AWG, 2 twisted pair (data pair plus power pair), shielded |
| Lock | 18 AWG, 2 conductor (16 AWG or heavier on long runs or high current) |
| DPS | 22 AWG, 2 conductor |
| REX (motion) | 22 AWG, 4 conductor (power plus relay contact) |

**Composite cable** puts all of these in one jacket and is common on new installs.

**Cable ratings** (NEC power-limited cable types): [VERIFY:nec-cable-type]

- **CL2 / CL3:** general use.
- **CL2R / CL3R:** riser, between floors in a shaft.
- **CL2P / CL3P:** plenum, in air-handling spaces such as return air ceilings.
- Communications cable ratings (CM, CMR, CMP) of the same or higher level are allowed substitutes.

**Support:** cable is supported by the building structure with listed hardware, not laid on ceiling tiles or tied to ceiling grid wires, pipes, or conduit. [VERIFY:nec-support]

**Network cable:** Ethernet (Category 5e/6) to IP controllers and PoE devices is limited to **100 m (328 ft)** per run. [VERIFY:ethernet-100m]

---

## Lesson 5.5: Voltage drop to the door

Locks are the heaviest load you'll put on long, thin wire, and a lock that gets too little voltage holds weakly or won't release.

**Voltage drop = 2 × one-way length × current × Ω per foot**

**Example.** A maglock draws 0.5 A at 12 V, 200 ft from the power supply on 18 AWG (0.00639 Ω/ft).
Drop = 2 × 200 × 0.5 × 0.00639 = **1.28 V**. The lock sees about 10.7 V.

Most locks want to see within about 10% of their rated voltage (check the spec sheet); 10.7 V is borderline. The fixes: 16 AWG, set the lock and supply to 24 V (half the current, a quarter of the voltage loss as a percentage), or put a power supply closer to the door.

- Measure lock voltage **at the lock, with the lock energized**. An unloaded reading tells you nothing.
- Count the electrified hinge or power transfer: its thin conductors are part of the run.
- **PoE edge devices:** budget the power. A standard PoE port supplies about 15.4 W (about 12.95 W reaches the device); PoE+ supplies 30 W (25.5 W at the device). Locks powered from a PoE controller must fit inside what's left after the controller and reader. [VERIFY:poe-classes]

Use the **Voltage Drop calculator** for lock runs and the **Reader Cable calculator** for readers.

---

## Module 5 quiz

1. Why design a power supply to about 80% of its rating?
2. Why separate lock power from controller power?
3. What are the UL 294 standby levels?
4. A site needs 2 hours of standby for 1.5 A of locks and readers. How many amp-hours, including the margin?
5. Which way does a suppression diode go across a DC lock, and where?
6. What do you use instead of a diode on an AC strike?
7. What cable rating do you need above a return-air ceiling?
8. A 12 V maglock draws 0.5 A, 150 ft away on 18 AWG. What's the drop?
9. How should you measure the voltage at a lock?

**Answer key:** 1) To leave room for inrush, battery aging, and added doors. 2) Lock inrush and kickback on the controller's supply can reboot it or garble reader data. 3) Level I none, Level II 30 minutes, Level III 2 hours, Level IV 4 hours. 4) 1.5 × 2 × 1.2 = 3.6 Ah. 5) Reverse biased (band to +), at the lock. 6) A MOV. 7) Plenum: CL2P (or CMP). 8) 2 × 150 × 0.5 × 0.00639 = about 0.96 V. 9) At the lock terminals, with the lock energized.
