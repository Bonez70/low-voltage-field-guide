# Module 2: How a Fire Alarm System Works

**You'll be able to:** name the parts of a fire alarm system, tell the three signal types apart, explain conventional vs addressable systems, and trace a signal from a detector to the fire department.

---

## Lesson 2.1: The parts of a system

| Part | What it does |
|---|---|
| **Fire alarm control unit (FACU / FACP)** | The brain. Watches every circuit, decides what each signal means, sounds the alarms, runs the control functions, and reports off site |
| **Initiating devices** | Inputs: smoke and heat detectors, manual pull stations, waterflow switches, valve tamper switches, duct detectors |
| **Notification appliances** | Outputs that warn people: horns, strobes, horn/strobes, speakers, chimes |
| **Annunciator** | A remote display (often at the main entrance) so firefighters can see what's in alarm without going to the panel |
| **Power** | Primary (a dedicated 120 VAC branch circuit) and secondary (batteries, sometimes a generator) |
| **Communicator** | Sends signals to the monitoring center (DACT phone lines, cellular, IP, or radio) |
| **Control outputs** | Relays and modules that recall elevators, shut down fans, release door holders, unlock doors, and trigger other systems |
| **NAC power extenders** | Booster power supplies that add notification circuits and power when the panel's own NAC capacity runs out |

---

## Lesson 2.2: The three signal types

Every condition a fire panel reports falls into one of three types. Knowing which one you're looking at tells you how urgent it is and who needs to know.

| Signal | Means | Examples | What happens |
|---|---|---|---|
| **Alarm** | A fire may be happening | Smoke detector, heat detector, pull station, waterflow | Notification appliances sound, control functions run, monitoring center dispatches the fire department |
| **Supervisory** | Something that protects the building is off-normal | Sprinkler valve closed (tamper), low air on a dry-pipe system, duct detector (in many systems), fire pump trouble | Panel sounds and shows supervisory; monitoring center calls the building to investigate. No evacuation |
| **Trouble** | The fire alarm system itself has a fault | Open or ground on a circuit, AC power loss, low battery, missing device, communication failure | Panel sounds and shows trouble; monitoring center notifies the service company |

Some systems also have a **pre-alarm** (an addressable smoke detector getting close to its alarm threshold) that alerts staff before a full alarm.

**Alarm signals take priority** over supervisory, and supervisory over trouble.

**Latching:** alarm and supervisory signals stay on the panel until someone resets it, even after the device restores. Most troubles clear on their own when the fault is fixed.

---

## Lesson 2.3: Conventional vs addressable

### Conventional (zoned) systems
Detectors are wired on **initiating device circuits (IDCs)**, one circuit per zone, each supervised by an **end-of-line (EOL)** device at the far end. The panel only knows that *something on Zone 3* is in alarm, so someone has to go find which detector.

Common in small buildings. Simple and inexpensive, but finding a problem means walking the zone.

### Addressable (intelligent) systems
Every device has its own **address** and talks to the panel over a **signaling line circuit (SLC)**, a two-wire data loop. The panel knows exactly which device is in alarm or trouble: *"Smoke detector, 2nd floor corridor outside room 214."*

Addressable systems also:
- Report each detector's sensitivity and dirtiness
- Let you disable one device instead of a whole zone
- Use **monitor modules** to bring conventional devices (waterflow switches, tampers, older detectors) onto the SLC
- Use **control/relay modules** to run outputs from anywhere on the loop

### Notification circuits
Either type uses **notification appliance circuits (NACs)** to power horns and strobes, usually at a regulated 24 VDC. The panel reverses polarity on the NAC to sound the appliances, so NAC appliances are **polarized** and use diodes or EOL resistors for supervision.

---

## Lesson 2.4: The signal path

1. **Detection:** a smoke detector senses smoke and sends an alarm (current draw on a conventional IDC, a data message on an addressable SLC).
2. **Panel processing:** the panel confirms the signal (some smoke systems use **alarm verification**, which resets and rechecks the detector before going into alarm), then follows its programming.
3. **Occupant notification:** NACs activate; horns sound the **temporal-3** evacuation pattern and strobes flash (Module 4).
4. **Control functions:** elevators recall, fans shut down, door holders release, according to the **sequence of operations**.
5. **Off-site reporting:** the communicator transmits to the monitoring center, which dispatches the fire department.
6. **Annunciation:** the panel and annunciator display the device and location so the responding firefighters can go straight to it.

Silencing the horns does **not** reset the system. The panel stays in alarm until the cause is cleared and the panel is reset.

---

## Lesson 2.5: Monitoring and communication

Most commercial fire systems are monitored by a **supervising station**: a central station, a proprietary station (owned by the building), or a remote station.

- **DACT** (digital alarm communicator transmitter): sends signals over phone lines. Traditionally needs **two** separate communication paths.
- **Cellular and IP communicators:** increasingly the primary path as copper phone lines disappear. Many single-path cellular or IP communicators are now listed as an acceptable sole means when the path itself is supervised. [SRC:comm]
- **Radio:** private radio networks in some areas.

The panel must **supervise its communication path** and report a trouble if it can't get through. Test signals go to the monitoring center on a regular schedule (commonly at least every 24 hours) so a dead path gets noticed. [SRC:comm]

---

## Module 2 quiz

1. What's the difference between an initiating device and a notification appliance?
2. A sprinkler control valve is closed. Which signal type is that?
3. The panel loses AC power. Which signal type is that?
4. On a conventional system, what does the panel know when a detector goes into alarm?
5. What does an addressable system use to bring a waterflow switch onto the SLC?
6. Why are NAC appliances polarized?
7. Does silencing the horns reset the panel?
8. What does the annunciator do for firefighters?

**Answer key:** 1) Initiating devices detect and send signals in; notification appliances warn occupants. 2) Supervisory. 3) Trouble. 4) Only which zone (circuit) is in alarm. 5) A monitor module. 6) The panel reverses polarity to sound them, and diodes or EOL resistors supervise the circuit in standby. 7) No; the panel stays in alarm until it's reset. 8) Shows which device and location is in alarm, away from the panel.
