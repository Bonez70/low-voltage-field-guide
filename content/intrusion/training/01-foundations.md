# Module 1: Foundations

**Who it's for:** brand-new techs, or anyone who wants a refresher on electrical basics.
**You'll be able to:** use Ohm's law on the job, tell series from parallel circuits, explain what makes a circuit Class 2, pick the right tools, and stay safe on site.

---

## Lesson 1.1: Voltage, current, and resistance

Every alarm circuit comes down to three numbers.

| Term | Symbol | Unit | Think of it as |
|---|---|---|---|
| Voltage | V (or E) | volts (V) | The push. How hard electricity is being pushed through the wire. |
| Current | I | amps (A), milliamps (mA) | The flow. How much electricity is actually moving. |
| Resistance | R | ohms (Ω) | The restriction. How hard the path is to push through. |

1 amp = 1,000 milliamps. Alarm devices are usually rated in mA (a contact draws nothing, a motion detector draws roughly 10 to 30 mA, a keypad roughly 30 to 150 mA). Always check the device's spec sheet.

### Ohm's law

**V = I × R**

Cover the one you want to find:

- Voltage = Current × Resistance
- Current = Voltage ÷ Resistance
- Resistance = Voltage ÷ Current

**Power:** P = V × I, measured in watts (W).

**Example.** A siren draws 0.5 A on a 12 V circuit. Power = 12 × 0.5 = 6 W.

**Example.** A zone has a 2,200 Ω (2.2 kΩ) end-of-line resistor and the panel puts about 5 V on the loop. Current = 5 ÷ 2,200 ≈ 0.0023 A, or 2.3 mA. This tiny current is how the panel "watches" the zone.

### AC vs DC

- **AC (alternating current)** reverses direction many times a second. The transformer that plugs into the wall puts out low-voltage AC (commonly 16.5 VAC or 18 VAC) to the panel.
- **DC (direct current)** flows one way. The panel converts the AC to DC (usually about 12 to 13.8 VDC) to run devices and charge the battery.

When you meter a panel's AC input terminals, set the meter to AC volts. Everywhere else in the system (aux power, bell output, battery) is DC.

---

## Lesson 1.2: Series and parallel

**Series:** devices connected end to end, one path. The same current flows through all of them. If any one opens, the whole circuit opens.
- This is how normally closed door contacts are wired on one zone: open any door and the loop breaks.

**Parallel:** devices connected across the same two wires, several paths. Each device gets the same voltage. If one opens, the others keep working.
- This is how you power several motion detectors from aux power: each gets 12 V, and their currents add up.
- This is how normally open devices (like some panic buttons) are wired on one zone: close any one and the loop shorts.

**Resistors in series add:** 1 kΩ + 1 kΩ = 2 kΩ.
**Two equal resistors in parallel halve:** 2 kΩ in parallel with 2 kΩ = 1 kΩ.

You'll use those two rules constantly when you read a zone with a meter (see Module 4).

---

## Lesson 1.3: Class 2 and power-limited circuits

Most intrusion wiring is **Class 2**, a category in the National Electrical Code (NEC) for circuits whose power source is limited so they don't present a significant fire or shock risk.

What that means for you:
- Panels, transformers, and power supplies are listed as Class 2 sources, and their output is limited (typically no more than 100 VA for the low voltages we use).
- Class 2 wiring has lighter rules than power wiring, but it still has rules: use listed cable (CL2, CL3, or a higher rating like CL2R/CL2P where required), keep it separated from line-voltage wiring, and support it properly.
- **Never** run Class 2 cable in the same raceway or box as 120 V wiring unless a listed barrier separates them.
- Plenum spaces (air-handling ceilings) require plenum-rated cable (CL2P or CMP).

Local codes and the AHJ (authority having jurisdiction) can add requirements. See Module 8.

---

## Lesson 1.4: Tools of the trade

**Must have**
- Digital multimeter (volts AC/DC, ohms, continuity, ideally DC milliamps)
- Wire strippers sized for 22 to 14 AWG
- Screwdrivers, including a small flat "tweaker" for terminal strips
- Drill/driver, bits, and a long flex bit for fishing walls
- Fish tape and glow rods
- Cable staples/straps, wire nuts or butt connectors (gel-filled for damp areas)
- Label maker or wire markers
- Ladder (rated for your weight plus tools)
- Flashlight or headlamp
- Smartphone with installer app/manufacturer software

**Nice to have**
- Toner and probe (to trace unlabeled wires)
- Inspection camera
- Magnet set (to test contacts and find gap)
- Glass break simulator
- Walk-test light or second person on the phone
- Cell signal meter

> **Field tip (David to add):** the one tool new techs forget, and why it matters.

---

## Lesson 1.5: Job site safety

- **Ladders:** three points of contact, never stand on the top two steps, set extension ladders at a 4:1 angle.
- **Attics and crawlspaces:** step only on joists, watch for nails coming through the roof deck, wear a mask around insulation, and stay hydrated in hot attics.
- **Line voltage:** you're a low-voltage tech. Don't open electrical panels or work on 120 V circuits unless you're licensed for it. When a transformer needs a dedicated outlet, that's an electrician's job.
- **Drilling:** check for wires, pipes, and gas lines before you drill. Use an inspection camera or stud finder with AC detection.
- **Batteries:** sealed lead-acid batteries can deliver a lot of current. Don't short the terminals with a tool. Disconnect the battery before working on the panel board.
- **Customer homes:** shoe covers, drop cloths, clean up dust, ask before moving furniture.
- **Personal safety:** in vacant or under-construction buildings, let your office know where you are.

---

## Lesson 1.6: Reading a basic floor plan

Before you design or install, you need to read the building.

- Find the **scale** (for example 1/4" = 1'). Use it to estimate wire runs.
- Identify **perimeter openings**: exterior doors, windows, garage doors, basement access.
- Identify **interior traffic paths**: hallways and rooms an intruder must pass through. That's where motion detectors go.
- Find a **panel location**: usually a closet, basement, or utility room, near an outlet, out of sight from entry doors, and with a reasonable path for wiring.
- Mark the **entry/exit door** the customer uses most. The keypad goes there.

Common symbols you'll mark on a plan: C (contact), M or PIR (motion), GB (glass break), K (keypad), S (siren), P (panel), SD (smoke detector).

---

## Module 1 quiz

1. A device draws 250 mA. How many amps is that?
2. A 12 V circuit has 0.2 A flowing. How many watts is that?
3. Five door contacts are wired one after another on one loop. Is that series or parallel?
4. You have two 1 kΩ resistors in series. What's the total resistance?
5. What meter setting do you use on a panel's transformer input terminals?
6. True or false: Class 2 cable can share a junction box with 120 V wiring if you're careful.
7. What cable rating do you need in an air-handling (plenum) ceiling?
8. Name two things to check for before drilling into a wall.

**Answer key:** 1) 0.25 A. 2) 2.4 W. 3) Series. 4) 2 kΩ. 5) AC volts. 6) False, not without a listed barrier. 7) Plenum rated (CL2P or CMP). 8) Any two of: electrical wires, water pipes, gas lines, HVAC ducts.
