# Module 4: Wiring and Circuits

**You'll be able to:** wire zones in every common style, read a zone with a meter, size wire, power devices correctly, and leave a clean, labeled install.

---

## Lesson 4.1: Why end-of-line resistors exist

Without a resistor, a panel can only tell "closed" from "open". A cut wire looks exactly like an open door, and a burglar who shorts the wires together makes the zone look normal forever.

An **end-of-line (EOL) resistor** placed at the **last device** on the loop gives the panel a known resistance to watch for. Now the panel can tell three states apart:

| What the panel reads | Meaning |
|---|---|
| About the EOL value | Normal |
| Open (infinite resistance) | Alarm or trouble, depending on wiring style |
| Short (near 0 Ω) | Alarm or trouble, depending on wiring style |

**The resistor goes at the end of the run, at the last device, not at the panel.** A resistor installed at the panel terminals supervises nothing; the panel can't see a cut or short in the wire. Some inspectors and companies require it at the device for this reason.

EOL values depend on the panel brand. Common values include 1 kΩ, 2 kΩ, 2.2 kΩ, 4.7 kΩ, 5.6 kΩ, and 10 kΩ. **Always use the value in the panel's manual.**

---

## Lesson 4.2: Zone wiring styles

### Normally closed (NC), single EOL
Contacts wired in **series**, resistor in series at the last device.
- Normal: EOL value
- Any device opens or wire cut: open → alarm
- Wires shorted together: near 0 Ω → panel sees trouble or alarm (depends on panel)

This is the most common style for doors and windows.

### Normally open (NO), single EOL
Devices wired in **parallel**, resistor across the loop at the last device.
- Normal: EOL value
- Any device closes: short → alarm
- Wire cut: open → trouble

Used for some panic buttons, older glass breaks, and some environmental sensors.

### Double end-of-line (DEOL)
Each device gets **two resistors**: one in series with the loop and one across (in parallel with) the contact. Many panels use two resistors of the same value.

With two equal resistors of value R:
- Contact closed (normal): the parallel resistor is shorted out, so the panel reads **R**
- Contact open (alarm): both resistors are in series, so the panel reads **2R**
- Wire cut or tamper opened: **open** → tamper/trouble
- Wires shorted: **near 0 Ω** → fault

DEOL lets the panel tell an alarm from a tamper or wire fault on the same zone. Check the manual for the exact resistor values and arrangement.

### No EOL (closed loop)
Some panels let you disable EOL supervision. Normal = short, alarm = open. It's quick but unsupervised; avoid it unless the panel or job requires it.

> **Field tip (David to add):** the wiring style you see most often in the field, and how to spot it when you take over another company's system.

---

## Lesson 4.3: Reading a zone with a meter

1. Disconnect the zone wires from the panel terminals (or test at the device end).
2. Set the meter to ohms.
3. Measure across the two zone wires.

| You read | Single EOL NC loop means |
|---|---|
| EOL value (within about 10%) | Zone is good and closed |
| OL / open | A device is open, a splice failed, or a wire is broken |
| Near 0 Ω | Short somewhere (staple through the cable, pinched wire, wrong wiring) |
| A different value | Wrong resistor, two resistors, or corrosion/bad splice adding resistance |

**Also check for ground faults:** measure from each zone wire to earth ground. You should read open. Any reading means a wire is touching something grounded.

---

## Lesson 4.4: Wire types and gauges

**AWG** (American Wire Gauge): a smaller number is a thicker wire.

| Typical use | Common cable |
|---|---|
| Door/window contacts, zones | 22/2 (22 AWG, 2 conductors) |
| Motion detectors (zone + power) | 22/4 |
| Keypads and data bus | 22/4 (some panels allow or require 18/4 on long runs) |
| Sirens and bells | 18/2 |
| Power supply runs, long device power runs | 18/2 or 18/4, heavier as needed |
| Transformer to panel | 18/2 or 16/2 per manual |

- Use **stranded** wire where it flexes and **solid** where your terminals and practice call for it; follow the manufacturer.
- Use the **correct jacket rating** for the space (CL2, CL2R riser, CL2P plenum, outdoor/direct-burial rated outside).
- Leave a service loop at the panel and devices.

Use the **Wire Gauge** and **Voltage Drop** calculators for long runs.

---

## Lesson 4.5: Home runs vs data bus

**Home run (hardwired zones):** each zone has its own cable back to the panel or a zone expander.

**Data bus (keypad bus, addressable):** keypads, zone expanders, wireless receivers, and output modules share one 4-wire bus: two for power, two for data. Each device needs a unique **address**.

Bus rules to remember (exact limits vary by panel; check the manual):
- Total bus wire length and per-device length limits
- Star (home-run) vs daisy-chain topology allowed
- Don't run the bus next to AC power or lighting ballasts
- Wire colors vary by manufacturer; match the terminal labels, not the color you're used to

---

## Lesson 4.6: Powering devices

The panel has an **auxiliary (aux) power output** (typically around 12 VDC) with a maximum current rating. Every powered device (motion detectors, keypads, glass breaks, modules) adds to that load.

**Rules**
- Add up the **standby current** of everything on aux. It must stay under the panel's aux rating.
- Add up the **alarm current** too (sirens and bell output have their own rating).
- Your battery must carry the standby load for the required hours plus the alarm load for the required minutes (use the **Battery Standby** calculator).
- If you exceed the panel's rating, add a **supervised auxiliary power supply** with its own transformer and battery.
- **Fused or PTC-protected outputs** trip on overload; a dead keypad or motion bank can be a tripped aux output.

---

## Lesson 4.7: Grounding, wire management, and labeling

- **Earth ground:** connect the panel's earth-ground terminal to a proper ground (often a cold water pipe or ground rod per manufacturer and local code). It protects the panel from lightning and static.
- **Separation:** keep low-voltage cable away from 120 V runs, fluorescent fixtures, and motors. Cross power wiring at right angles.
- **Support:** use cable staples sized for the cable and don't pinch it. A staple through the jacket causes intermittent shorts that are hard to find.
- **Splices:** solder or use gel-filled connectors. Avoid twisted-and-taped splices.
- **Labeling:** label every cable at both ends with the zone number or device. Leave a zone list and wiring chart in the panel can.

---

## Module 4 quiz

1. Why does the EOL resistor go at the last device and not at the panel?
2. On a single EOL NC zone, what does a cut wire look like to the panel?
3. With DEOL using two 5.6 kΩ resistors, what does the panel read when the door is closed? When it's open?
4. You meter a zone and read 0 Ω. What's the most likely cause?
5. Which is thicker, 18 AWG or 22 AWG?
6. What is the bus used for?
7. What do you do when total aux current exceeds the panel's rating?
8. Why should every cable be labeled at both ends?

**Answer key:** 1) At the panel, it can't supervise the wire between the panel and the devices. 2) An open, the same as an alarm. 3) Closed: 5.6 kΩ. Open: 11.2 kΩ. 4) A short (staple, pinch, or miswire). 5) 18 AWG. 6) Connecting keypads and modules to the panel over shared power and data wires. 7) Add a supervised auxiliary power supply. 8) So you and the next tech can trace and service the system quickly.
