# Module 6: Power Supplies and Batteries

**You'll be able to:** set up primary power the way the code expects, size standby batteries, recognize power troubles, and maintain batteries so they're ready when the power fails.

---

## Lesson 6.1: Primary power

The fire alarm panel's main power comes from a **dedicated branch circuit**: a breaker that feeds the fire alarm and nothing else (other fire alarm equipment, like NAC extenders, can share it if the design allows). [SRC:primary-dedicated]

The breaker must be:
- **Marked in red** and identified as **"FIRE ALARM CIRCUIT"** [SRC:primary-marking]
- **Locked** or otherwise protected so it can't be turned off by accident, and accessible only to authorized people [SRC:primary-marking]
- **Recorded at the panel**: the location of the panel board and breaker number is written at the fire alarm control unit [SRC:primary-marking]

**No plug-in transformers and no GFCI or AFCI breakers** on fire alarm primary power unless the manufacturer and AHJ allow it. A nuisance trip would take the system to battery without anyone noticing until the battery dies. [SRC:primary-no-gfci]

An electrician usually installs the branch circuit. Check it before you terminate: correct breaker, red marking, lock, and a panel label.

---

## Lesson 6.2: Secondary power (batteries)

When AC fails, batteries take over automatically with no loss of signals. The batteries must run the system for:

| Requirement | Typical value |
|---|---|
| **Standby** | **24 hours** of normal (non-alarm) operation [SRC:batt-standby] |
| **Then alarm** (horns and strobes) | **5 minutes** with every notification appliance operating [SRC:batt-alarm-time] |
| **Then alarm** (voice evacuation) | **15 minutes** at maximum connected load [SRC:batt-alarm-time] |

- Battery calculations add a **20% safety margin** on top of the calculated amp-hours. [SRC:batt-margin]
- A generator can supplement batteries, but the batteries still need to carry the system for at least the transfer time, and the exact standby required with a generator depends on the code edition and AHJ. [SRC:batt-generator]
- Most panels use **two 12 V sealed lead-acid batteries in series** for 24 V. Both must be the same size, age, and brand.
- The panel's charger can only charge a battery up to a certain size. Check the panel's **maximum battery** before specifying a big one; use an external charger if the manual allows.

Use the **Fire Battery calculator**.

**The formula:**

**Required Ah = [(standby current in A × 24 h) + (alarm current in A × alarm hours)] × 1.2**

Alarm hours: 5 minutes = 0.083 h; 15 minutes = 0.25 h.

---

## Lesson 6.3: Power troubles and what they mean

| Panel shows | Usually means |
|---|---|
| **AC loss / AC trouble** | Breaker off or tripped, wiring fault, blown panel fuse |
| **Low battery** | Batteries discharged, failing, or charger problem |
| **Battery trouble / missing** | Battery disconnected, loose lead, blown battery fuse |
| **Ground fault** | A field wire or the power wiring touching ground |
| **Charger trouble** | Panel's charger circuit has failed |

**AC loss reporting delay:** the panel reports AC loss locally right away, but the transmission to the monitoring center is delayed (commonly **1 to 3 hours**) so short outages don't flood the monitoring center. [SRC:ac-delay]

---

## Lesson 6.4: Battery care and replacement

- **Date every battery** with the month and year of manufacture or installation when you install it. [SRC:batt-replace]
- **Sealed lead-acid batteries** are commonly replaced every **5 years** (or sooner per the manufacturer or if they fail a test). [SRC:batt-replace]
- The charger must be able to recharge a fully discharged battery within **48 hours**. [SRC:batt-recharge]
- At inspection, batteries are checked visually, voltage-checked under load, and load or capacity tested on the schedule in NFPA 72. A battery that reads full voltage with no load can still collapse under load. [SRC:batt-test]
- **Replace both batteries together.** A new battery in series with an old one will be dragged down.
- Keep batteries off concrete floors in cold areas and away from heat; temperature shortens battery life.

**Safe battery handling:** disconnect the battery leads before AC when powering down, and reconnect AC before batteries when powering up (or follow the panel manual's order). Don't let tools bridge the terminals. Recycle old batteries; don't throw them out.

> **Field tip (David to add):** what you write on a battery when you install it, and where.

---

## Lesson 6.5: NAC power extenders and remote power supplies

When the panel can't power all the NACs or devices, a **NAC power extender (booster)** or remote power supply is added.

- It has its **own primary power** (dedicated branch circuit, marked and locked like the panel's) and its **own batteries**. Include it in the battery calculations.
- It's triggered by the panel's NAC or a control module, and it **reports its troubles** (AC loss, low battery, ground fault, NAC trouble) back to the panel. An unsupervised power supply isn't acceptable.
- Set its sync to match the panel (Module 4).
- Label it with its circuit and what it powers.

---

## Module 6 quiz

1. What does "dedicated branch circuit" mean?
2. How must the fire alarm breaker be marked?
3. How long must batteries carry the system in standby before an alarm?
4. How long must the alarm run on battery for a horn/strobe system? For a voice system?
5. What safety margin goes on top of the battery calculation?
6. Why replace both batteries at the same time?
7. Why is AC loss reporting to the monitoring center delayed?
8. What does a NAC power extender need besides AC power?

**Answer key:** 1) A breaker that feeds only the fire alarm system. 2) In red, identified as "FIRE ALARM CIRCUIT", locked, with its location recorded at the panel. 3) 24 hours. 4) 5 minutes; 15 minutes. 5) 20%. 6) A new battery in series with an old one gets dragged down by the old one. 7) So short power blips don't flood the monitoring center with signals. 8) Its own batteries, supervision back to the panel, and matching sync.
