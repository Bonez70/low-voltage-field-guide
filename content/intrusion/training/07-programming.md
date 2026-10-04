# Module 7: Programming and Commissioning

**You'll be able to:** program zone types, delays, user codes, and central station reporting, then fully test the system and hand it off to the customer.

---

## Lesson 7.1: Zone types

Names vary by brand; the behavior is what matters.

| Zone type | Behavior | Typical devices |
|---|---|---|
| **Entry/Exit (delay)** | Starts the entry delay when tripped while armed; ignored during exit delay | Main entry door, garage entry door |
| **Perimeter (instant)** | Alarms immediately when armed in Stay or Away | Other exterior doors, windows, glass break |
| **Interior follower** | Instant, unless an entry/exit zone was tripped first, then it follows the entry delay. Bypassed in Stay | Motion and interior doors on the entry path |
| **Interior instant** | Instant in Away; bypassed in Stay | Motion away from the entry path |
| **24-hour audible / silent** | Always active, armed or not | Panic, hold-up |
| **24-hour fire** | Always active, fire priority | Smoke, heat |
| **24-hour supervisory / auxiliary** | Always active, non-burglary | Water, low temperature |
| **Day zone / trouble by day** | Trouble beep when disarmed, alarm when armed | Emergency exit doors at a business |

**Why "interior follower" matters:** when the homeowner comes in through the front door and walks past the hallway motion, the motion must give them the entry delay. If you program that motion as interior instant, it alarms before they reach the keypad.

---

## Lesson 7.2: Entry and exit delays

- **Exit delay:** time after arming to leave. **Entry delay:** time after opening an entry door to disarm.
- The ANSI/SIA CP-01 false alarm standard sets minimums and defaults for these: for example, a minimum exit delay of 45 seconds (default 60) and entry delay minimum of 30 seconds, with a combined entry delay plus abort window not to exceed 1 minute.
- Set delays long enough for the customer's real path (garage door to keypad with groceries), but not so long that an intruder gets far.
- Multiple entry delays are available on many panels (short for the front door, longer for the garage).

---

## Lesson 7.3: User codes and authority levels

- **Installer code:** your access to programming. Change it from the factory default on every install; leaving defaults is a security hole.
- **Master code:** the customer's top code; can add and delete users.
- **User codes:** for family members or employees; can be limited by partition, schedule, or function.
- **Duress code:** disarms normally but silently sends a duress signal.
- **Temporary / one-time codes:** for cleaners, contractors.

Teach the customer to give each person their own code so event history shows who armed and disarmed.

---

## Lesson 7.4: Central station setup

You need from the central station or your dealer portal:
- **Account number** for the site
- **Receiver phone number or IP/cellular path** (often pre-set by the communicator provider)
- **Reporting format:** most panels today use **Contact ID** or **SIA** format

Then program:
- Which events report (alarms, restores, troubles, openings/closings, tests)
- **Periodic test** timer (commonly every 24 hours, sometimes more often for commercial) so the central station knows the communicator is alive
- **Abort window** (also called communication delay) and **cancel** reporting per CP-01
- Zone list sent to the central station with names, zone types, and the customer's call list

---

## Lesson 7.5: Testing and commissioning

**1. Put the account on test** with the central station first. Never trip a live system without doing this.

**2. Walk test** every zone. Most panels have a walk-test mode that chimes each zone as it trips.
- Open every door and window with a contact.
- Walk every motion pattern from all likely approaches.
- Use the simulator on every glass break.
- Pull every tamper you can.

**3. Test communication.** Arm the system, trip a zone, let it alarm, and confirm with the central station that they received the alarm with the right zone number and name. Test troubles too (AC loss, low battery if practical).

**4. Test power.** Unplug AC and confirm the system runs on battery and reports AC loss. Check battery voltage under load.

**5. Take the account off test**, confirming with the operator.

**6. Document:** zone list, device locations, serial numbers, test results, battery install date, communicator ID.

---

## Lesson 7.6: Customer training and handoff

A trained customer is the best way to prevent false alarms.

Cover, with the customer doing it themselves:
- Arming Away, Stay, and Night, and what each does
- Disarming, and what to do if they set it off by mistake (disarm, then answer the central station's call and give their passcode)
- Their **verbal passcode** for the central station
- Bypassing a zone, and why not to leave windows bypassed forever
- What troubles look like and who to call
- How to use the phone app if there is one
- Panic buttons and what they do
- Keeping the call list up to date

Leave a printed or digital quick-start sheet and the zone list.

> **Field tip (David to add):** the one thing customers always forget after handoff.

---

## Module 7 quiz

1. Why should hallway motion be programmed as interior follower and not interior instant?
2. What does a duress code do?
3. Why must you change the installer code from the default?
4. What does a periodic test signal tell the central station?
5. What's the first thing you do before walk-testing a monitored system?
6. Name four things the customer should be able to do before you leave.

**Answer key:** 1) So it follows the entry delay when the user walks in through the entry door. 2) Disarms normally while silently sending a duress signal. 3) Defaults are publicly known and anyone could reprogram the system. 4) That the communicator and path are working. 5) Put the account on test with the central station. 6) Any four from Lesson 7.6.
