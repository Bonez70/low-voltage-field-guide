# Module 5: Wireless Systems

**You'll be able to:** explain how wireless sensors talk to a panel, enroll and test them, plan for range, and manage battery life.

---

## Lesson 5.1: How wireless works

A wireless sensor is a normal sensor (contact, PIR, smoke) with a small **radio transmitter** and a battery. When it changes state, it sends a coded message to a **receiver** that's built into the panel or connected on the bus.

Each sensor has a unique **serial number** (also called the TXID or ESN). You enroll that number into a zone so the panel knows which sensor is which.

Two broad kinds:
- **One-way:** the sensor transmits; the panel can't talk back. Simpler and cheaper.
- **Two-way:** the panel confirms each message and can send commands back (for example, change sensitivity). More reliable, better battery management.

Wireless sensors from one manufacturer generally only work with that manufacturer's receivers, and different series from the same brand may not mix. Confirm compatibility before ordering.

---

## Lesson 5.2: Supervision

Because a wireless sensor isn't wired, the panel can't measure a loop. Instead, each sensor sends a periodic **check-in** (supervision) signal. If the panel doesn't hear a sensor within its **supervision window**, it shows a **supervision loss** (sometimes "missing" or "check") trouble for that zone.

- Supervision windows vary by panel and listing, commonly a few hours up to 24 hours
- Some devices (like handheld remotes and panic pendants) are usually enrolled **unsupervised** because they leave the building
- Fire and life-safety wireless devices must be supervised

---

## Lesson 5.3: Enrolling sensors

General steps (exact keystrokes vary by panel):

1. Enter installer programming.
2. Choose the zone number and set its zone type and attributes.
3. Enroll the sensor's serial: either type it in, or put the panel in learn mode and trip the sensor (or pull its tamper) to transmit.
4. Set which loop/input of the sensor to use if the device has more than one.
5. Exit programming and **test** the zone.

Record every serial number and location on the zone list.

> **Field tip (David to add):** your process for keeping serials straight when enrolling 20+ sensors.

---

## Lesson 5.4: Range and site survey

Wireless range on the spec sheet is measured in open air. Real buildings cut it down.

**Things that kill signal**
- Metal: steel doors and frames, metal siding, foil-backed insulation, mirrors, appliances, ductwork
- Concrete and brick, especially with rebar
- Water: aquariums, water heaters, people in the way
- Distance and multiple walls

**Before you mount**
- Hold the sensor where it'll go and trip it while watching the panel's **signal strength** reading (most panels show this in a test mode).
- Aim for the "good" or better range the manufacturer recommends; marginal signal will become a supervision trouble later.
- Move the receiver to a central spot if many sensors are weak, or add a **repeater** if the system supports one.
- Don't mount the panel or receiver inside a metal enclosure or right next to the electrical panel.

**RF jamming:** many panels detect a jammer and can report it. If you get jam troubles, look for other wireless equipment on nearby frequencies.

---

## Lesson 5.5: Batteries

- Most sensors use lithium batteries rated for roughly 3 to 5 years, but heavy-traffic doors and frequently triggered motions drain faster.
- The panel shows a **low battery** trouble for the sensor before it dies, usually with weeks of warning.
- Use the **exact** battery type the manufacturer lists. A wrong battery may fit but have the wrong voltage or chemistry.
- Note battery replacement dates on the service record. Some companies replace all sensor batteries on a schedule.

---

## Lesson 5.6: Hybrid systems

A **hybrid** system combines a hardwired panel with a wireless receiver. This is common when:
- Existing wired zones work fine, but new openings are hard to wire
- Adding sensors to a finished home
- Upgrading an older wired system without rewiring

Plan zone numbers so wired and wireless zones are clearly separated on the zone list.

---

## Module 5 quiz

1. What does a wireless sensor's serial number do?
2. What's the difference between one-way and two-way wireless?
3. What trouble shows when the panel stops hearing a sensor's check-in?
4. Why are handheld remotes usually unsupervised?
5. Name three materials that reduce wireless range.
6. What should you check before permanently mounting a wireless sensor?
7. What's a hybrid system?

**Answer key:** 1) It identifies that sensor so the panel can assign it to a zone. 2) Two-way has the panel confirm and talk back; one-way only transmits. 3) Supervision loss (missing/check). 4) They leave the building, so they'd constantly show missing. 5) Any three from Lesson 5.4. 6) Signal strength at that location. 7) A hardwired panel with added wireless sensors through a receiver.
