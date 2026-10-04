# Module 1: Foundations

**Who it's for:** techs new to access control, including intrusion and fire techs crossing over.
**You'll be able to:** name every part of an access-controlled door, explain fail-safe and fail-secure, describe the power and wiring an access door uses, and work on doors without trapping or locking out anyone.

---

## Lesson 1.1: What access control does

An access control system decides **who** can go through **which door** at **what time**, and keeps a record of every attempt.

It replaces keys with credentials (cards, fobs, phones, PINs) that can be added, removed, or limited from software. When an employee leaves, you delete their card instead of rekeying the building.

Three jobs, all at once:

- **Keep people out** who shouldn't be there (the secure side of the door).
- **Let people out** freely, every time, even when the power or the system fails (the egress side of the door). This is the job that's regulated by building and life safety codes.
- **Report** what happened: who badged in, which doors were forced or propped open, which doors are offline.

Access control isn't a burglar alarm, but the two often work together. The access system may arm and disarm the intrusion panel, and door alarms often report to the same monitoring center.

---

## Lesson 1.2: Parts of an access-controlled door

Almost every access door has the same building blocks.

| Part | What it does | Where it lives |
|---|---|---|
| **Credential** | Card, fob, phone, or PIN that identifies the person | In the user's pocket |
| **Reader** | Reads the credential and sends the number to the controller | Secure side, next to the door |
| **Controller** | Decides yes or no, drives the lock, logs the event | Secure area: IT closet, above ceiling, or at the door (edge controller) |
| **Electrified lock** | Electric strike, magnetic lock, electrified lockset, or electrified exit device | In or on the door and frame |
| **Door position switch (DPS)** | Tells the controller whether the door is closed | Top of the door frame, usually recessed |
| **Request to exit (REX)** | Tells the controller someone is leaving, so opening the door isn't a forced-door alarm | Egress side: motion sensor above the door, or a switch in the exit hardware |
| **Power supply** | Powers the locks (and often the controller and readers) with battery backup | Next to the controller |
| **Software** | Where cardholders, access levels, schedules, and reports live | Server, workstation, or cloud |

```
           SECURE SIDE             |            EGRESS SIDE
                                   |
   [READER]        [DPS]===========|  [REX motion]
      |              |   DOOR      |
      |              |  [LOCK]     |  [lever / exit device]
      |              |             |
   [CONTROLLER] ---- [POWER SUPPLY] ---- fire alarm release
```

You'll learn each part in detail in Modules 3, 4, and 5.

---

## Lesson 1.3: Fail-safe and fail-secure

These two words come up on every door. They describe what the lock does **on the secure side when it loses power**.

| Term | Power off | Power on | Typical devices |
|---|---|---|---|
| **Fail-safe** | **Unlocked** | Locked | Magnetic locks; some electric strikes and locksets set fail-safe |
| **Fail-secure** | **Locked** | Unlocked | Most electric strikes; most electrified locksets and exit devices |

Memory aid: fail-**safe** keeps **people** safe (door opens); fail-**secure** keeps the **building** secure (door stays locked).

**The egress side is always free.** On a properly installed door, someone inside can always get out with one motion, whatever the lock does on the secure side. A fail-secure strike stays locked from the outside during a power failure, but the lever or panic bar on the inside still opens the door mechanically. [VERIFY:free-egress]

A **magnetic lock** has no mechanical way to release it. It holds only while powered, so it must be fail-safe, and the code adds extra rules to guarantee people can get out (Module 8).

Which one to use depends on the door:

- **Fire-rated doors** must stay latched in a fire, so their electrified hardware is fail-secure. [VERIFY:fire-door-latch]
- **Stairwell doors** that are locked from the stair side often have to unlock on a fire alarm so people can get back onto a floor (Module 8).
- **Perimeter doors** are usually fail-secure so a power failure doesn't leave the building open.

> **Field tip (David to add):** how you tell fail-safe from fail-secure on a strike that's already installed.

---

## Lesson 1.4: Power and wiring basics for access

If you've done intrusion work, the electrical basics are the same: Ohm's law, voltage drop, series and parallel (see the Intrusion pack's Foundations module). What's different is the **load**: locks draw a lot more current than motion detectors.

- Locks run on **12 VDC or 24 VDC**. Many are field-selectable with a jumper or by wiring. Setting a 12 V lock on 24 V will burn out its coil; setting a 24 V lock on 12 V gives a weak hold or no release.
- A magnetic lock commonly draws about **0.5 A at 12 V** (half that at 24 V), all the time it's locked. An electric strike draws a few hundred milliamps, only while unlocked. [VERIFY:lock-currents]
- Most access power is **Class 2**: the supply is limited (no more than 30 V and 100 VA per output for the voltages we use) so the wiring doesn't present a fire or shock hazard. [VERIFY:nec-class2]
- Class 2 wiring stays **separated from 120 V wiring**: not in the same raceway, box, or enclosure compartment unless a listed barrier separates them. [VERIFY:nec-separation]
- A lock is a coil. When its power is cut, the collapsing magnetic field kicks back a voltage spike that can reset or damage the controller. A **suppression diode** at the lock stops it (Module 5).

---

## Lesson 1.5: Safety and the life safety mindset

Access control is security equipment installed on **exit doors**. A mistake can trap people in a fire. Treat every door as part of the building's life safety system.

- **Never leave a door unable to open from the egress side**, even for a few minutes while you work. If you have to take hardware off, prop the door, post someone at it, or leave it unlocked, and tell the building contact. [VERIFY:safety-egress]
- **Tell the building before you work.** People may get locked out, doors may go unlocked, and forced and held-open alarms may report to a monitoring center. Put the account on test if door alarms are monitored. [VERIFY:safety-notify]
- **Don't touch the fire alarm release without the fire alarm contractor.** The connection that unlocks doors on a fire alarm belongs to both systems. Testing it means putting the fire alarm account on test and following its testing rules (see the Fire pack's testing module). [VERIFY:safety-fa-interface]
- **Ladders and doors:** a door swinging into your ladder is the classic access injury. Lock the door open or post someone at it while you work overhead.
- **Lock out 120 V** before working on a power supply's AC input, and disconnect the battery before you change fuses or outputs.
- **Drilling doors and frames:** find out if the door is fire-rated (label on the hinge edge of the door and in the frame's hinge rabbet) before you drill anything (Module 4).

---

## Module 1 quiz

1. Name the three jobs an access control system does.
2. Which device tells the controller whether the door is closed?
3. What does a fail-safe lock do when it loses power?
4. A fail-secure strike loses power. Can someone inside still get out? Why?
5. Why must a magnetic lock be fail-safe?
6. What happens if you power a 12 V lock with 24 V?
7. Why can't Class 2 lock wiring share a junction box with 120 V wiring?
8. Before you take a lock off an exit door, what must you do?

**Answer key:** 1) Keep unauthorized people out, let everyone out freely, and report what happened. 2) The door position switch (DPS). 3) It unlocks. 4) Yes. The lever or exit device on the egress side releases the latch mechanically, whatever the strike does. 5) It has no mechanical release, so if it held without power people couldn't get out. 6) The coil overheats and can burn out. 7) The code requires Class 2 wiring to be separated from power wiring unless a listed barrier separates them. 8) Make sure the door can still be opened from the egress side (prop it, post someone, or leave it unlocked) and tell the building contact.
