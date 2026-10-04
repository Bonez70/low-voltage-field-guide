# Module 6: Installation

**You'll be able to:** survey a door before quoting it, mount and wire each device at the door, place the controller and power supply, wire the fire alarm release correctly, and leave a door that the next tech can service.

---

## Lesson 6.1: Door survey

Most access problems are built in at the survey. Go to every door and write down:

- **Door and frame:** material (hollow metal, aluminum storefront, wood, glass), handing, swing direction, condition. Does it close and latch on its own every time? If not, fix that first; an access system can't secure a door that doesn't latch.
- **Fire label:** on the door edge and in the frame. A fire door limits what hardware you can use and how you install it (Module 4).
- **Existing hardware:** lockset type and brand, exit device, closer, hinges. Take photos of the latch, strike, and both sides of the door.
- **Egress:** is this door part of an exit path? Is panic hardware required? Will the AHJ allow a maglock here?
- **Cable path:** from the door to the controller location. Ceiling type (plenum?), walls (block, drywall), fire-rated walls you'll penetrate.
- **Power:** where the 120 V for the power supply comes from and who provides it.
- **Network:** for IP controllers, a port and an address from the customer's IT.
- **Fire alarm:** does the building have one? Where's the panel, and who services it?

> **Field tip (David to add):** the survey question that saves you a return trip.

---

## Lesson 6.2: At the door

- **Reader:** latch side, within reach range (Lesson 3.4), on a single-gang box or surface mount. Seal exterior penetrations.
- **Lock:** follow the hardware manufacturer's template exactly. Measure twice on aluminum storefront; you can't undo a hole in a thin-wall frame.
- **DPS:** in the frame head near the latch side, magnet in the door top. Check the gap at the hinge side isn't so big that a door opened a few inches still reads closed.
- **REX:** above the door on the egress side, aimed down at the door hardware area. Walk test it from both sides of the door: it must trip from the inside and must not trip from the outside.
- **Diode** at the lock if the lock doesn't have built-in suppression (Lesson 5.3).
- **Service loop** of a foot or two above the door, so the next tech can remake terminations.
- **Fire-rated walls:** seal every penetration with a listed firestop system for that wall type. [SRC:firestop]

---

## Lesson 6.3: Controller and power supply

- In a **secure location**: a locked room, inside the secure perimeter, never on the unsecure side of the door it controls.
- **Close to the doors** it serves to keep cable runs short, but accessible for service (not over a drop ceiling above a desk if you can avoid it).
- **Enclosure tamper** switches wired and reporting.
- **Dedicated 120 V circuit** where possible, not a shared receptacle someone can unplug. Label the breaker. Make the AC connection inside the enclosure's high-voltage compartment, separated from Class 2 wiring.
- **Grounding:** earth ground the enclosure and the controller's ground terminal per the manual. One ground point per shield.
- **Network:** a static address or a DHCP reservation, documented. Ask IT whether the controller is on its own VLAN.

---

## Lesson 6.4: Fire alarm release

Where a building has a fire alarm system, **fail-safe locks on egress doors unlock when the fire alarm activates**, and stay unlocked until the fire alarm is reset. [SRC:fa-release]

How it's wired in practice:

- A fire alarm **relay** (a control module or panel relay) opens on alarm.
- That contact goes in the **lock power path**, typically the access power supply's **fire alarm interface** input, so the locks lose power directly. Don't rely on a controller input and software to unlock the doors. [SRC:fa-release]
- The fire alarm relay or control module goes within **3 ft** of the device it controls (here, the power supply's fire alarm input), with the fire alarm wiring to the relay supervised, the same rule as any fire alarm control function (see the Fire pack's lesson on control functions). [SRC:fa-relay-3ft]
- **Fail-secure locks don't unlock on fire alarm** unless they're required to (stairwell re-entry, Module 8). Their egress side is already free.
- **Who wires it:** the fire alarm contractor owns the relay and its programming. Coordinate, and test the release together.

**Test it** at acceptance and after any change to either system: put the fire alarm account on test, activate an alarm, confirm every fail-safe door releases, reset, and confirm they relock. [SRC:fa-release-test]

---

## Lesson 6.5: Labeling and documentation

- Label **both ends** of every cable with the door number and device (D104-RDR, D104-LOCK).
- Label power supply outputs with the doors they feed, and the fuse or PTC size.
- Label the breaker for the power supply, and record it inside the enclosure.
- Leave a **door schedule** in the enclosure or with the customer: door number, controller and port, lock type, fail-safe or fail-secure, voltage, power supply output.
- Keep the wiring diagram and the controller's IP address and login with the customer's records (not taped to the enclosure).

---

## Module 6 quiz

1. Why check that a door closes and latches on its own before quoting access?
2. Where do you find a fire door's label?
3. How do you check a motion REX after mounting it?
4. Where should the controller be located relative to the door it controls?
5. What must you do to every penetration through a fire-rated wall?
6. On a fire alarm, which locks must release, and until when?
7. Why put the fire alarm contact in the lock power path instead of a controller input?
8. How close must the fire alarm relay be to the device it controls?
9. What goes on the label at each end of a cable?

**Answer key:** 1) The access system can't secure a door that doesn't latch; fix the door first. 2) On the hinge edge of the door and in the frame. 3) Walk test it: it must trip from the inside and must not trip from the outside. 4) In a secure location, on the secure side, never on the unsecure side of that door. 5) Seal it with a listed firestop system for that wall. 6) Fail-safe locks on egress doors; until the fire alarm is reset. 7) So the locks lose power directly without depending on controller electronics or software. 8) Within 3 ft. 9) The door number and the device.
