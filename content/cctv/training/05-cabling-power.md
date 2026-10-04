# Module 5: Cabling and Power

**You'll be able to:** pick the right cable for each camera, stay inside distance limits, power non-PoE cameras without voltage drop problems, and run cable outdoors and through buildings the way code expects.

---

## Lesson 5.1: Network cable

- **Category 5e** works for most cameras; **Category 6** is the common choice on new jobs. Solid copper conductors only. Copper-clad aluminum (CCA) "Cat" cable isn't real category cable: it fails certification, runs hot with PoE, and breaks at terminations.
- **Distance limit: 100 m (328 ft)** per run, switch to camera, including patch cords. The usual split is 90 m of installed cable plus 10 m of cords. [SRC:ethernet-100m]
- **Terminate to T568B** (or T568A) the same at both ends, and test every run. A cable that passes a simple continuity check can still fail at gigabit speed or under PoE load.
- **Longer runs:** a PoE extender in the middle, a remote PoE switch fed by fiber, or fiber media converters at both ends.
- **Between buildings: use fiber.** It carries no current, so lightning and ground differences can't travel on it.

**PoE in big bundles.** PoE puts current on every conductor, and a tight bundle of PoE cables gets warm. Where each conductor carries more than 0.3 A (PoE+ and especially 802.3bt), the NEC limits how many cables can be bundled for each cable gauge and temperature rating, or you use cable marked **-LP** (limited power) for the current. [SRC:poe-bundle]

---

## Lesson 5.2: Coax and HD analog

Analog and HD-over-coax cameras use **75 Ω coax**.

- **RG59** for most runs; **RG6** for longer runs (lower loss).
- **Siamese** cable puts RG59 and an 18/2 power pair in one jacket.
- **Solid copper center conductor.** Copper-clad steel (common in TV cable) cuts the distance for HD video badly.
- **Connectors:** compression BNCs, matched to the exact cable. Twist-on BNCs cause most intermittent video problems.

**Distance:** HD over coax at 1080p is commonly rated around **500 m (1,600 ft)** on RG59 with a solid copper center, and less (about 300 m) for 4K / 8 MP. Check the camera and DVR specs; they vary by maker and format. [SRC:coax-distance]

**Baluns** convert coax video to one twisted pair of a Category cable, so you can run HD analog on UTP. Use matched passive baluns at both ends, and one camera per pair.

---

## Lesson 5.3: Powering non-PoE cameras

Analog cameras, PTZs, and heaters often run on **12 VDC** or **24 VAC** from a separate power supply.

- **Power supply:** a listed Class 2 supply with **individually fused (or PTC) outputs**, one per camera, so one shorted camera doesn't kill the rest.
- **Voltage at the camera:** most cameras want their rated voltage within about ±10%. Check the spec sheet and measure **at the camera, with IR on**. [SRC:camera-voltage]
- **12 VDC drops fast.** A 12 V camera with heater and IR can draw 1 A. On 18 AWG at 200 ft: 2 × 200 × 1 × 0.00639 = 2.56 V of drop, leaving 9.4 V. Too low. Use 16 AWG or heavier, a closer supply, or a 24 VAC model.
- **24 VAC** tolerates long runs better and is standard for many PTZs and heaters.
- **Polarity** matters on DC. Reversing it can destroy a camera.

Use the **Voltage Drop calculator** and the **Wire Gauge calculator** for the power pair.

---

## Lesson 5.4: Cable ratings and support

**Cable ratings** (NEC): [SRC:nec-cable-type]

- **CM / CL2:** general use in walls and open ceilings.
- **CMR / CL2R:** riser, between floors in a vertical shaft.
- **CMP / CL2P:** plenum, in air-handling spaces such as return-air ceilings.
- **CATV / CATVR / CATVP:** coax ratings, same idea.
- A higher rating can always replace a lower one.

**Support:** cable is supported by the building structure with listed hardware (J-hooks, bridle rings), not laid on ceiling tiles or tied to ceiling grid wires, pipes, or conduit. [SRC:nec-support]

**Fire-rated walls and floors:** every hole you make through a rated wall or floor is sealed with a listed firestop system for that wall and cable. Unsealed penetrations are a common inspection failure. [SRC:firestop]

---

## Lesson 5.5: Outdoor runs, surge, and grounding

- **Outdoor-rated cable** for any run outside: UV-resistant jacket, and gel-filled or direct-burial rated for underground. Conduit underground counts as a wet location, so indoor cable inside buried conduit isn't allowed. [SRC:outdoor-cable]
- **Drip loops** at every outdoor entry, and seal the camera's cable entry and the wall penetration. Water follows the cable into the camera otherwise.
- **Surge protection:** copper runs that leave the building, to a pole, a gate, or another building, get a surge protector at the building end (and at the camera end on poles), bonded to the building's grounding electrode system with a short, straight wire. Better still, use fiber between buildings. [SRC:outdoor-surge]
- **Poles:** metal camera poles are bonded and grounded under the electrical work for the pole, and tall poles may need lightning protection where the design calls for it. Coordinate with the electrician. [SRC:pole-grounding]

> **Field tip (David to add):** the outdoor connection or weatherproofing habit that stopped your callbacks.

---

## Module 5 quiz

1. What's wrong with CCA network cable?
2. What's the distance limit for an Ethernet run, and how is it usually split?
3. When do PoE bundle limits come into play?
4. Why does a copper-clad steel center conductor matter for HD over coax?
5. About how far can 1080p HD over coax run on good RG59?
6. A 12 VDC camera draws 0.8 A, 150 ft away on 18 AWG. What's the drop, and what does the camera see?
7. What cable rating is needed above a return-air ceiling?
8. What's the best way to connect cameras in another building?
9. Why is indoor cable not allowed in buried conduit?

**Answer key:** 1) It isn't real category cable: fails certification, runs hot with PoE, breaks at terminations. 2) 100 m (328 ft): 90 m installed plus 10 m of patch cords. 3) When each conductor carries more than 0.3 A, as with PoE+ and 802.3bt in tight bundles. 4) It cuts the distance HD video can travel. 5) About 500 m (1,600 ft), less for 4K. 6) 2 × 150 × 0.8 × 0.00639 = about 1.53 V; the camera sees about 10.5 V. 7) Plenum: CMP (or CL2P). 8) Fiber, which can't carry lightning or ground differences. 9) Underground conduit is a wet location.
