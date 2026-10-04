# Module 2: How an Intrusion System Works

**You'll be able to:** name every major part of an alarm system, explain zones and partitions, and trace an alarm from the sensor to the police dispatcher.

---

## Lesson 2.1: The parts of a system

| Part | What it does |
|---|---|
| **Control panel** | The brain. A circuit board in a metal can with a transformer and battery. It watches every zone, decides what's an alarm, sounds the siren, and sends signals out. |
| **Keypad** | The user interface. Arms, disarms, shows status, and is where you program the system. Some systems use a touchscreen or phone app instead of or alongside it. |
| **Sensors (initiating devices)** | Detect something happening: a door opening, motion, breaking glass. |
| **Siren / sounder** | Makes noise inside (and sometimes outside) on alarm. |
| **Communicator** | Sends alarm signals to the central station: cellular, internet (IP), or phone line. |
| **Power** | Transformer (AC from the wall) plus a backup battery inside the panel. |
| **Expanders / modules** | Add zones, wireless receivers, outputs, or more power. |

---

## Lesson 2.2: Zones

A **zone** is an input the panel watches. It might be one device (a motion detector) or several devices wired together (all the windows in a bedroom).

Each zone has:
- A **number** and a **name** ("Zone 3, Kitchen Windows")
- A **zone type** that tells the panel how to react (entry/exit, perimeter, interior, 24-hour; see Module 7)
- **Attributes** like chime, bypassable, or swinger shutdown

**Why it matters:** the more zones you use, the more precise the central station's report is. "Zone 7, Back Door" helps police more than "Zone 1, All Doors and Windows". Many techs put each door on its own zone and group windows by room.

> **Field tip (David to add):** how you decide when to combine devices on one zone.

---

## Lesson 2.3: Partitions

A **partition** (also called an area) splits one panel into separate systems that arm and disarm independently.

Examples:
- A house with a detached garage or in-law apartment
- A small business with a front office and a warehouse
- A strip of two storefronts sharing one panel

Each partition has its own zones, user codes, and keypads. A user can be given access to one partition or several.

---

## Lesson 2.4: Arming modes

| Mode | Common names | What's armed | Typical use |
|---|---|---|---|
| Away | Away, Full | Perimeter and interior | Nobody home |
| Stay | Stay, Home, Perimeter | Perimeter only; interior motion is ignored | People home, moving around |
| Night | Night, Night-Stay | Perimeter plus selected interior zones | Everyone in bed; downstairs motion armed |
| Instant | Instant, Max | Like Stay or Away but no entry delay | Extra-secure when nobody should come in |

---

## Lesson 2.5: The signal path

What happens when a burglar opens the back door while the system is armed Away:

1. The **contact** on the door opens.
2. The **zone** loop resistance changes, and the panel sees it.
3. The zone is an **entry/exit** type, so the panel starts the **entry delay** and the keypad beeps.
4. Nobody enters a code. The entry delay expires.
5. The panel goes into **alarm**: the siren sounds.
6. The panel holds the signal for a short **abort window** (if programmed) in case the user disarms late.
7. The **communicator** sends the alarm (account number, event code, zone number) to the **central station** over cellular or IP.
8. The **central station receiver** decodes it and puts it on an operator's screen.
9. The operator follows the account's **action plan**: typically call the premises and/or keyholders to verify (Enhanced Call Verification), then dispatch police if it isn't canceled.
10. The siren times out after the programmed **bell cutoff** time and the system resets, ready to alarm again.

---

## Lesson 2.6: Supervision and troubles

The panel doesn't only watch for alarms. It also watches itself and reports **troubles**:

- AC power loss
- Low or missing battery
- Communication failure
- Zone tamper or wire fault
- Wireless sensor supervision loss or low battery
- Keypad or module communication loss

Troubles usually make the keypad beep and show a message, and many are reported to the central station. Clearing troubles is a big part of service work (see the Troubleshoot tab).

---

## Module 2 quiz

1. What part of the system decides whether something is an alarm?
2. What's the difference between a zone and a partition?
3. In Stay mode, which zones are usually ignored?
4. List the steps from "door opens" to "operator sees the signal".
5. What does Enhanced Call Verification mean?
6. Name three troubles a panel supervises.

**Answer key:** 1) The control panel. 2) A zone is one monitored input; a partition is a group of zones that arms and disarms as its own system. 3) Interior (motion) zones. 4) Contact opens, zone changes, entry delay, delay expires, alarm, communicator sends signal, receiver decodes, operator screen. 5) The central station makes at least two calls to verify before dispatching. 6) Any three from Lesson 2.6.
