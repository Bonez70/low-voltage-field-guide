# Module 4: Locks and Door Hardware

**You'll be able to:** read a door's handing and hardware, choose between strikes, magnetic locks, electrified locksets, and electrified exit devices, install a DPS and REX that report correctly, and recognize the rules for fire-rated doors.

---

## Lesson 4.1: Door anatomy and handing

Know the names before you order hardware.

- **Frame:** head (top), jambs (sides), stop (the lip the door closes against). **Hollow metal** frames are steel; **aluminum storefront** frames are thin-walled tube; wood frames are common in residential and interiors.
- **Door:** hinge edge, lock edge (latch edge), push side, pull side.
- **Hardware:** hinges, lockset or exit device, closer, stop, and the **door hardware schedule** that lists every piece by door number on commercial jobs.
- **Handing:** stand on the **outside** (the secure, keyed side). Hinges on the left and the door swings away from you: left hand (LH). Hinges on the right, swinging away: right hand (RH). Swinging toward you: left hand reverse (LHR) or right hand reverse (RHR). Strikes, exit devices, and some maglock brackets are handed.

**Read the existing hardware first.** The lock that's already in the door decides what electric strike will work with it (latch type, backset, and whether it has a deadlatch).

> **Field tip (David to add):** the quick way you check handing and backset at a door before ordering.

---

## Lesson 4.2: Electric strikes

An electric strike replaces the frame's strike plate. When it releases, its **keeper** swings free so the latch can pass without being retracted. The lockset stays mechanical.

- **Fail-secure** is the most common: locked without power, unlocked when energized. The door's own lever always lets people out, so egress is unaffected.
- **Fail-safe** strikes exist for doors that must unlock on power loss or fire alarm, but **not on fire-rated doors** (Lesson 4.5).
- **Match the lock:** the strike must fit the latch type (cylindrical, mortise, rim exit device), the latch throw, and the deadlatch. A deadlatch that falls into the keeper gap leaves the door unlockable or unlatched.
- **Preload:** a door that's pushing or pulling on the latch (weatherstrip, warped door, stack pressure) can bind the keeper so it won't release. Strikes are rated for a preload; when it's exceeded, fix the door or use a high-preload strike.
- **Current:** draws only while unlocked, commonly a few hundred milliamps at 12 V. Continuous-duty strikes are needed when a door is held unlocked on a schedule. [SRC:lock-currents]
- **Rim strikes** go with rim exit devices (panic bars) and mount on the surface of the frame.

---

## Lesson 4.3: Magnetic locks

A **magnetic lock (maglock)** is an electromagnet on the frame header and a steel **armature plate** on the door. Energized, it holds the door shut; de-energized, it lets go.

- **Holding force** is commonly 600 lb (interior) or 1,200 lb (perimeter). Current is commonly about 0.5 A at 12 V or 0.25 A at 24 V, drawn **all the time the door is locked**. [SRC:lock-currents]
- **Always fail-safe.** Because it holds with no mechanical release, egress must be guaranteed electrically: the code requires either a motion sensor plus push button arrangement or a switch built into the door hardware (Module 8).
- The magnet always mounts on the **secure side**. On a door that swings away from the secure side (the usual out-swinging exit door), it mounts under the header on the push side, with an L bracket if the frame is narrow. On a door that swings toward the secure side, a Z bracket brings the magnet down to meet the armature on the pull side.
- **Armature** must float on its rubber washers so it can align itself flat with the magnet. A tightened-down armature won't seat flat and holds poorly.
- **Residual magnetism:** a worn or dirty magnet can hold slightly after release. Most maglocks have a built-in suppression and anti-residual circuit; keep faces clean.
- **Bond sensor** and **DPS** options report whether the magnet is actually holding.

Maglocks are easy to install on doors where nothing else fits (glass doors, existing panic hardware), which is why they're overused. Many AHJs restrict them; check before you quote one.

---

## Lesson 4.4: Electrified locksets, exit devices, and power transfer

- **Electrified lockset** (cylindrical or mortise): the lock itself has a solenoid or motor that locks or unlocks the outside lever. The inside lever is always free. Fail-secure or fail-safe by order or by setting. Usually the cleanest, most secure option.
- **Electrified exit device (panic bar):** either **electric latch retraction** (pulls the latch in so the door is push/pull, often used with door operators) or **electrified trim** (unlocks the outside lever).
- **Solenoid latch retraction** can pull a large **inrush current** for a fraction of a second (several amps). It needs a power supply or controller made for it. Motorized latch retraction draws much less. [SRC:exit-device-inrush]
- **Request-to-exit switch** built into the lockset or exit device: reports that the inside hardware was used.

**Getting power into the door:**

- **Electrified hinge** (power transfer hinge): wires run through the hinge. Clean and protected.
- **Concealed power transfer:** a device mortised into the door edge and frame.
- **Door loop:** an armored flexible loop between frame and door. Cheapest, most exposed.

All three limit wire count and wire size. Check the conductor gauge in the hinge against the lock's current and the run length (voltage drop, Module 5).

---

## Lesson 4.5: DPS, REX, and fire-rated doors

**Door position switch (DPS).** A recessed magnetic contact in the frame head near the latch side (or a surface contact). Most controllers want it closed when the door is closed. Mount it where it will show "open" before the door has moved far enough to let someone through.

**REX.** Tells the controller someone's leaving so the door opening isn't reported as forced.

- **Motion REX:** a PIR mounted above the door on the egress side, aimed down at the area in front of the door. Aim it so it **can't be tripped from the secure side** through the gap under or between doors (people slide things under or use air or smoke through the gap).
- **Hardware REX:** a switch in the lever or exit device. More reliable for reporting.
- On a fail-secure strike, the REX usually **only shunts** the alarm; the lever releases the latch mechanically.
- On a maglock, the REX may also be one of the ways the lock is released, under the code rules in Module 8.

**Fire-rated doors.** Look for the label on the hinge edge of the door and in the frame. A fire door must **positively latch** every time it closes, so:

- Electrified hardware on it must be **listed for use on fire doors**, and electric strikes on fire doors must be **fail-secure**. A fail-safe strike would leave the door unlatched in a fire. [SRC:fire-door-latch]
- **Don't field-modify** a fire door or frame (cutting, drilling, enlarging preps) beyond what the fire door standard allows. Most modifications need factory or listed-agency preparation; otherwise the label is void. [SRC:fire-door-mod]
- Don't add a hold-open or remove the closer to make a door easier to use. Fire doors close and latch.

---

## Module 4 quiz

1. Standing on the outside, hinges on the right, door swings away from you. What hand is the door?
2. Why does an electric strike need to match the lockset that's already there?
3. What is strike preload, and what does it cause?
4. Typical maglock current at 12 V, and when does it draw it?
5. Why should a maglock's armature be left free to float?
6. What's special about solenoid latch retraction exit devices for power?
7. Name the three ways to get power into a door.
8. Where should a motion REX be aimed, and what must it not see?
9. Can you put a fail-safe electric strike on a fire-rated door? Why?

**Answer key:** 1) Right hand (RH). 2) The keeper must fit the latch type, throw, and deadlatch or the door won't lock or latch correctly. 3) The door pushing or pulling on the latch; it binds the keeper so it won't release. 4) About 0.5 A, all the time the door is locked. 5) So it can align flat with the magnet; a tight armature holds poorly. 6) They pull a large inrush current for an instant and need a power supply made for it. 7) Electrified hinge, concealed power transfer, or a door loop. 8) Down at the area in front of the door on the egress side; it must not be trippable from the secure side through door gaps. 9) No. Fire doors must positively latch, so electric strikes on them must be fail-secure.
