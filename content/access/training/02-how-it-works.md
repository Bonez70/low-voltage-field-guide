# Module 2: How an Access System Works

**You'll be able to:** follow a badge read from the reader to the lock and back, explain the main controller architectures, set up the building blocks of a database (people, access levels, schedules), and describe what the system reports.

---

## Lesson 2.1: One badge read, step by step

Everything an access system does is built on this sequence.

1. **Present.** The user holds a card or phone to the reader.
2. **Read.** The reader pulls the credential number and sends it to the controller (over Wiegand or OSDP wiring, Module 3).
3. **Decide.** The controller looks the number up in its **local database**: is the card valid, is it allowed at this door, is it allowed right now?
4. **Grant.** If yes, the controller energizes (or de-energizes) its **lock relay** for the **unlock time** (commonly a few seconds), turns the reader LED green, and **shunts** the door alarm so opening the door isn't a forced-door alarm.
5. **Open and close.** The DPS shows the door open, then closed. The lock relocks when the unlock time ends or when the door closes, depending on how it's programmed.
6. **Log.** The event (who, which door, when, granted or denied) goes to the software.

If the card is denied, the LED shows red, nothing unlocks, and the event is logged as a denial with the reason (unknown card, wrong time, wrong door, expired).

**The controller decides, not the server.** Good controllers keep their own copy of the database, so doors keep working when the network or server is down. Events are stored at the controller and uploaded when it reconnects.

---

## Lesson 2.2: Controller architectures

You'll see four common layouts in the field.

| Layout | How it works | Where you see it |
|---|---|---|
| **Standalone** | Keypad or reader and lock in one unit at the door, programmed at the door | Single doors, small offices, storage rooms |
| **Panel-based (centralized)** | A multi-door controller in a closet, home-run cable to every door | Most commercial buildings |
| **Edge / PoE** | A small controller at or above each door, powered by and talking over the network cable | Newer buildings, retrofits with good network |
| **Cloud-hosted** | Any of the above, with the software running in the cloud instead of on a local server | Growing quickly in small and mid-size sites |

**Panel-based** systems usually have a main controller that talks to the software and **door interface modules** (sub-controllers) that each handle one to four doors. The main controller to module link is often RS-485.

**Home-run cabling** for a panel-based door typically means separate cables for the reader, the lock, the DPS, and the REX, all landing at the controller. Composite cables carry all of them in one jacket (Module 5).

**Wireless and offline locks** are a separate category: battery-powered locksets that read the card at the door and talk to a hub (or get updates from the cards themselves). They save wiring but have their own battery maintenance.

---

## Lesson 2.3: The database: people, access levels, schedules

Every access system organizes permissions the same way.

- **Cardholders** are the people. Each has one or more **credentials**.
- **Doors** (and readers) are the hardware.
- **Schedules** (time zones) are blocks of time: "Weekdays 7 am to 6 pm."
- **Access levels** (access groups) tie doors to schedules: "Main entrance and office suite, weekdays 7 to 6."
- Each cardholder gets one or more access levels.

So you never give a person a door directly; you give them an access level, and the access level gives them doors and times. When a new door is added to a suite, you add it to the access level once and everyone who needs it gets it.

Other common features:

- **Holidays:** days when normal schedules don't apply.
- **Door schedules (auto-unlock):** the main entrance unlocks itself during business hours. Good practice is **first-person-in**: it stays locked until a valid card is used after the scheduled time, so a snow day doesn't leave the building open.
- **Anti-passback:** a card used to enter must be used to exit before it can enter again. Stops one card being passed back to a second person.
- **Two-person rule, card plus PIN, elevator floors:** higher-security options you'll meet on larger sites.

> **Field tip (David to add):** the schedule mistake you see most on service calls.

---

## Lesson 2.4: Events, alarms, and integrations

The system watches each door with the DPS and REX.

| Event | What happened | Common cause |
|---|---|---|
| **Access granted / denied** | A credential was read | Normal use |
| **Door forced open** | The door opened with no valid card and no REX | Break-in, a REX that didn't trip, a bad DPS, a worn latch that let the door pop open |
| **Door held open** | The door stayed open longer than the held-open time | Propped door, slow closer, deliveries |
| **Tamper** | A reader, controller, or enclosure was opened | Vandalism, or a tech who didn't put the account on test |
| **Offline / comm loss** | The controller or a reader stopped talking | Network, cable, or power problem |
| **AC loss / low battery** | Power supply troubles, if the supply is monitored | Breaker, failing battery |

**Integrations** you'll meet:

- **Fire alarm:** fail-safe locks on egress doors release when the fire alarm activates. This connection is a life safety function (Module 6 and Module 8).
- **Intrusion:** badging in can disarm an area; the access system can report door alarms to the intrusion panel.
- **Video:** door events pull up camera clips.
- **Elevators:** the reader in the cab controls which floor buttons work.
- **Intercom and visitor management:** remote unlock and visitor badges.

---

## Module 2 quiz

1. List the six steps of a badge read.
2. Where does the decision to unlock happen in a well-designed system?
3. What does "shunting" the door alarm mean during a valid read?
4. What's the difference between a panel-based and an edge controller layout?
5. A new door is added to the accounting suite. How do you give everyone in accounting access with one change?
6. What does first-person-in do on an auto-unlock schedule?
7. A door shows "forced open" but nobody broke in. Name two likely causes.
8. Which integration is a life safety function?

**Answer key:** 1) Present, read, decide, grant, open and close, log. 2) In the controller, using its local database. 3) The controller ignores the door opening for that event so it isn't reported as forced. 4) Panel-based has a central controller with cable home-run to each door; edge puts a small controller at each door, usually powered over the network. 5) Add the door to the accounting access level. 6) The door stays locked after the schedule starts until a valid card is used. 7) Any two of: a REX that didn't trip, a bad or misaligned DPS, a worn latch that lets the door pop open. 8) The fire alarm release of fail-safe locks on egress doors.
