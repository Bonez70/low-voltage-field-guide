# Module 5: Circuits and Wiring

**You'll be able to:** wire IDCs, SLCs, and NACs in Class B and Class A, explain why T-taps are allowed on some circuits and not others, read a fire circuit with a meter, and find a ground fault.

---

## Lesson 5.1: The three circuit types

| Circuit | Carries | Typical wiring |
|---|---|---|
| **IDC** (initiating device circuit) | Conventional detectors, pull stations, waterflow and tamper switches | 2 wires, EOL resistor at the last device |
| **SLC** (signaling line circuit) | Addressable devices and modules, panel-to-panel networks | 2 wires (often twisted, sometimes shielded) |
| **NAC** (notification appliance circuit) | Horns, strobes, speakers | 2 wires, EOL resistor at the last appliance, usually 24 VDC |

The wire size, length limit, and whether shielding is needed come from the **panel's installation manual**. SLC limits are often given as a maximum loop resistance and capacitance, not just a length.

---

## Lesson 5.2: Class B and Class A

NFPA 72 defines circuits by **how they behave when something goes wrong**, using classes.

### Class B
A single path out to the devices, ending at an EOL device.
- An **open** anywhere gives a **trouble**, and every device **past the break stops working**.
- A **ground fault** gives a trouble.
- Most common: it's cheaper and simpler.

```
PANEL + ──[D1]──[D2]──[D3]──┐
                          [EOL]
PANEL − ────────────────────┘
```

### Class A
The circuit goes out to every device and **returns to the panel** on a separate pair. There's no EOL; the panel supervises the loop itself.
- A single **open** gives a **trouble**, but **every device still works**, because the panel feeds the circuit from both ends.
- A **ground fault** gives a trouble.
- Required by the design in some buildings, such as high-rises or where the engineer specifies it.

```
PANEL OUT ══[D1]══[D2]══[D3]══╗
                              ║
PANEL RET ════════════════════╝
(each line is a pair: + and −, no EOL)
```

**The outgoing and return conductors don't run in the same cable or raceway**, so one damaged cable can't take out both. The exceptions are limited, such as short drops to a device or into the panel; the drawings and the code edition in force say how far. [SRC:classa-separation]

### Class X
Like Class A, but it also keeps working through a **short** (using **isolation modules** between groups of devices). Common on addressable SLCs in larger buildings.

### Class N
Ethernet-based pathways for newer networked and voice systems. You'll see it on newer designs.

---

## Lesson 5.3: T-taps and why they're restricted

A **T-tap** is a branch off the middle of a circuit.

- **Conventional IDCs and NACs: no T-taps.** The EOL at the end only supervises wire that runs *through* it. A branch is unsupervised: if it breaks, the panel never knows, and those devices are silently dead. [SRC:no-ttaps]
- **Class A circuits: no T-taps.** A branch breaks the loop design. [SRC:no-ttaps]
- **Class B addressable SLCs: T-taps usually allowed** if the panel manufacturer permits them, because the panel polls every device and notices one that stops answering. Check the manual for limits on total wire length with taps. [SRC:no-ttaps]

**Wire through every device.** On conventional circuits, the wire must land on the device terminals in and out (or on separate terminals, as the device instructions show), not be twisted together with a pigtail to the device. That way, removing a device opens the circuit and the panel reports a trouble.

---

## Lesson 5.4: Reading a fire circuit with a meter

**Disconnect the circuit from the panel first** (with the panel and account on test). Don't meter a circuit while it's connected; you'll read the panel, not the wire.

**Conventional IDC with EOL:**

| You read | Means |
|---|---|
| About the EOL value | Wiring good (with all devices normal) |
| Open (OL) | Break in the wire, loose terminal, or missing device or EOL |
| Near 0 Ω | Short, or a device in alarm |
| Any reading from either wire to ground | Ground fault |

Two-wire smoke detectors have electronics across the circuit. They're polarized, so you may read different values depending on which way your leads are. Read in both directions, and expect the EOL value in one of them.

**NAC with EOL:** appliances have built-in blocking diodes, so in one direction you read about the EOL value and in the other direction you read lower (the appliances). An open in one direction means a break; a near-zero reading **in both** directions means a short.

**Never use a megohmmeter (insulation tester) with devices or the panel connected.** The test voltage will destroy devices. Disconnect every device first, or don't megger at all. [SRC:safety-megger]

---

## Lesson 5.5: Ground faults

A **ground fault** is any connection between a fire alarm conductor and earth ground: a staple through the cable, a wire touching a metal box, a damp splice. Fire panels check for ground faults on all circuits and report a **trouble**.

A single ground fault usually doesn't stop the system from working, but a second one on another wire can create a short or an unwanted path, so **every ground fault must be fixed**.

**Finding a ground fault:**
1. Note which circuit the panel names (many panels show the circuit or even polarity).
2. If it doesn't, disconnect circuits one at a time until the trouble clears. Wait for the panel to re-check between steps; it can take a minute.
3. On the faulted circuit, meter from each wire to earth ground with the circuit off the panel.
4. Split the circuit at an accessible device and test each half to narrow it down.
5. Check devices in damp spaces, exterior devices, and anything mounted in metal back boxes first.

> **Field tip (David to add):** your fastest way to track a ground fault on a big addressable loop.

---

## Lesson 5.6: NAC power, voltage drop, and extenders

NACs carry the heaviest current on the system. Strobes draw the most, especially at high candela settings.

- Each NAC has a **maximum current rating** (often 1.5 to 3 A per circuit). Add up every appliance on the circuit at its listed current. [SRC:nac-rating]
- **Voltage drop** matters more on NACs than anywhere else. Appliances listed for "regulated 24 VDC" typically work down to about **16 VDC**. [SRC:nac-min-volts]
- Calculate drop from the **battery voltage at the end of standby**, not a fresh 24 or 27 V. A common starting value is **20.4 VDC** (85% of 24 V). [SRC:nac-start-volts]
- Use the appliance's current at its **minimum operating voltage** if the manufacturer lists it. Strobes draw more current as voltage drops.
- When a NAC is too long or too loaded: use heavier wire, split the circuit, or add a **NAC power extender** near the appliances. Extenders have their own batteries and must be supervised by the panel.

Use the **NAC Voltage Drop calculator**.

---

## Module 5 quiz

1. Which circuit type carries addressable devices?
2. On a Class B IDC, what happens to devices past an open?
3. On a Class A circuit with one open, do the devices still work?
4. Why are T-taps not allowed on conventional IDCs?
5. What should you disconnect before using a megohmmeter?
6. Is a single ground fault OK to leave if the system still works?
7. Why should NAC voltage drop be calculated from 20.4 V instead of 24 V?
8. Name two ways to fix a NAC that has too much voltage drop.

**Answer key:** 1) The SLC (signaling line circuit). 2) They stop working, and the panel shows a trouble. 3) Yes; the panel feeds the loop from both ends. 4) The EOL can't supervise a branch, so a break on it would go unnoticed. 5) Every device and the panel. 6) No; every ground fault must be fixed. 7) It's a common value for the battery at the end of standby, the worst case when the alarm sounds. 8) Heavier wire, splitting the circuit, or a NAC power extender near the appliances.
