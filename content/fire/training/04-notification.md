# Module 4: Notification Appliances

**You'll be able to:** explain the evacuation signal, check that horns are loud enough, choose and place strobes by candela, keep strobes synchronized, and recognize voice evacuation systems.

---

## Lesson 4.1: Audible signals and the temporal-3 pattern

Every fire evacuation signal in the US uses the same rhythm so people recognize it anywhere: the **temporal-3** pattern.

```
ON ½s · off ½s · ON ½s · off ½s · ON ½s · off 1½s · repeat
```

Three half-second pulses, then a pause, repeating every 4 seconds. [VERIFY:temporal]

- **Horns** produce the pattern from the NAC (the panel or a sync module sets the rhythm).
- **Chimes and bells** are used in some occupancies; they still follow the evacuation pattern.
- **Carbon monoxide** uses a different pattern, **temporal-4** (four short beeps, then a pause), so people can tell CO from fire. [VERIFY:temporal]

---

## Lesson 4.2: How loud is loud enough

Audibility is measured in **dBA** with a sound meter, **5 feet above the floor**. [VERIFY:audibility]

| Mode | Requirement |
|---|---|
| **Public mode** (everyone evacuates) | At least **15 dB above the average ambient** sound level, or **5 dB above the maximum** sound level lasting 60 seconds or more, whichever is greater [VERIFY:audibility] |
| **Private mode** (staff only, such as a hospital) | At least **10 dB above average ambient**, or 5 dB above the maximum lasting 60 seconds [VERIFY:audibility] |
| **Maximum** | No more than **110 dBA** at the minimum hearing distance [VERIFY:audibility] |

**Sleeping areas** (hotels, dorms, apartments) need more:
- At least 15 dB above average ambient, 5 dB above the maximum lasting 60 seconds, or **75 dBA at the pillow**, whichever is greater. [VERIFY:sleeping]
- A **low-frequency (520 Hz) tone**, because it wakes sleeping people, including those with some hearing loss, far better than a high-pitched horn. [VERIFY:sleeping]

Doors, carpets, and walls cut sound a lot. A horn in the corridor rarely gets 75 dBA to a pillow behind a closed door, so sleeping rooms usually get their own appliance.

> **Field tip (David to add):** the most common reason a building fails audibility at the acceptance test.

---

## Lesson 4.3: Strobes and candela

Strobes (visible notification) alert people who are deaf or hard of hearing, and anyone in a noisy space. Brightness is rated in **candela (cd)**. Many strobes are **multi-candela**: you set 15, 30, 75, 110, and so on with a switch, and the current draw goes up with the setting.

**Wall mounting:** the **entire lens** between **80 and 96 inches** above the floor. [VERIFY:strobe-mount]

**Flash rate:** between **1 and 2 flashes per second**. [VERIFY:strobe-mount]

**Room spacing (one wall-mounted strobe per room, centered on a wall):**

| Room size | Minimum candela |
|---|---|
| 20 × 20 ft | 15 cd |
| 28 × 28 ft | 30 cd |
| 40 × 40 ft | 60 cd |
| 45 × 45 ft | 75 cd |
| 54 × 54 ft | 95 cd |
| 55 × 55 ft | 115 cd |

[VERIFY:strobe-room-table]

Ceiling-mounted strobes have their own table that depends on ceiling height. Two or more strobes can cover a larger room. **Use the values on the approved drawings.**

**Corridors** (20 ft wide or less): strobes within **15 ft of each end** and no more than **100 ft apart**, with a minimum of 15 cd. [VERIFY:strobe-corridor]

**Sleeping rooms:** **177 cd** if the strobe is within 24 inches of the ceiling, **110 cd** if it's 24 inches or more below the ceiling. [VERIFY:strobe-sleeping]

---

## Lesson 4.4: Synchronization

Flashing strobes out of step can trigger seizures in people with photosensitive epilepsy. When **more than two strobes** can be seen from any one spot, they must flash **in sync**. [VERIFY:strobe-sync]

- Sync comes from the panel's NAC (built-in sync protocol) or from a **sync module**.
- Strobes and horns from **different manufacturers** usually don't sync with each other. Match the sync protocol to the appliances.
- **NAC power extenders** must use the same sync protocol and be set to follow the panel, or the strobes on the extender won't match the ones on the panel.
- Horn/strobes on a two-wire sync circuit can **silence the horns while strobes keep flashing** (common after the alarm is acknowledged, if the AHJ allows).

---

## Lesson 4.5: Voice evacuation

**Emergency voice/alarm communication systems (EVACS)** use speakers instead of horns. They play the temporal-3 tone, then a recorded message ("A fire emergency has been reported in the building. Please leave by the nearest exit..."). Firefighters can also make live announcements.

- Required in many high-rises, assembly occupancies, and some schools, per the building code.
- Speakers run on **25 V or 70.7 V** audio circuits from an amplifier, with taps (such as ¼, ½, 1, 2 W) that set loudness. [VERIFY:speaker-volts]
- **Intelligibility** matters, not just loudness: people must understand the words. Echoes and hard surfaces make that hard, so speaker layout is engineered.
- Voice systems need more battery: **15 minutes** of alarm at full load instead of 5. [VERIFY:batt-alarm-time]
- Some voice systems are **mass notification systems (MNS)** that can also announce weather, lockdown, or other emergencies.

---

## Module 4 quiz

1. Describe the temporal-3 pattern.
2. What pattern does carbon monoxide use?
3. In public mode, how far above average ambient sound must the signal be?
4. What tone is required in sleeping areas, and why?
5. What's the mounting height for a wall strobe?
6. When must strobes be synchronized?
7. Why might strobes on an NAC extender not sync with the panel's strobes?
8. How much alarm time does a voice evacuation system need on battery?

**Answer key:** 1) Three half-second pulses with half-second gaps, then a 1.5-second pause, repeating. 2) Temporal-4. 3) 15 dB (or 5 dB above the 60-second maximum, whichever is greater). 4) A 520 Hz low-frequency tone; it wakes sleeping people better, including those with some hearing loss. 5) The entire lens between 80 and 96 inches above the floor. 6) When more than two strobes can be seen from one spot. 7) The extender isn't set to the same sync protocol or isn't set to follow the panel. 8) 15 minutes at full load.
