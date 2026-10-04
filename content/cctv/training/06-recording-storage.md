# Module 6: Recording and Storage

**You'll be able to:** choose between an NVR, DVR, and VMS, set recording modes, calculate the storage a job needs, pick drives and RAID, and keep the recorder running through power problems.

---

## Lesson 6.1: NVR, DVR, and VMS

| Recorder | Cameras | Notes |
|---|---|---|
| **DVR / XVR** | Analog and HD over coax (XVRs also take some IP cameras) | Video is digitized in the recorder |
| **NVR** | IP cameras | Often has a built-in PoE switch; channel count and incoming bandwidth (Mbps) are both limits |
| **VMS on a server** | IP cameras, many brands | Scales to hundreds or thousands of cameras and many sites; licensed per camera |
| **Cloud** | IP cameras through a bridge or directly | Monthly fee per camera; needs upload bandwidth; edge recording covers internet outages |

**Check two NVR limits, not one:** the number of channels (16-channel) and the **incoming bandwidth** (for example 160 Mbps). Sixteen 8 MP cameras at 12 Mbps is 192 Mbps, which is over that limit even though it's 16 channels.

**Edge recording:** a memory card in the camera records when the network or recorder is down, and some systems backfill the gap automatically when it comes back (ONVIF Profile G).

---

## Lesson 6.2: Recording modes

- **Continuous:** records all the time. Simple and complete; uses the most storage.
- **Motion or event:** records only when the camera or recorder sees motion or an analytic event, plus a few seconds before (pre-record) and after (post-record). Saves storage; can miss things if detection is set badly.
- **Continuous plus event:** low frame rate or sub stream all the time, full quality on events. A good balance.
- **Schedule:** different modes by time of day (continuous during business hours, motion at night, or the reverse).

Motion detection set badly is the most common cause of "it didn't record." Trees, shadows, headlights, and rain cause false events; small or distant motion gets missed. Use **analytics** (person and vehicle detection) where the cameras support it, and test by walking the scene.

**What fraction of time does motion recording save?** It depends entirely on the scene: a busy store entrance may record 80% of the day, a back door 5%. Measure for a week, then adjust the storage plan.

---

## Lesson 6.3: Storage math

**Storage per camera per day (GB) = bitrate (Mbps) × 3600 × hours per day × fraction recorded ÷ 8 ÷ 1000**

**Total (TB) = sum of all cameras per day × days to keep ÷ 1000**

**Example.** 12 cameras at 4 Mbps, continuous, 24 hours, kept 30 days:

- Per camera per day: 4 × 3600 × 24 ÷ 8 ÷ 1000 = **43.2 GB**
- All 12 per day: 12 × 43.2 = 518.4 GB
- 30 days: 518.4 × 30 ÷ 1000 = **15.6 TB**

Then add headroom: plan about **20% more** than the math, because bitrates rise at night, in rain, and as the scene gets busier, and some systems need free space to work. 15.6 × 1.2 = **18.7 TB**. [SRC:storage-margin]

- Drives are sold in decimal TB (1 TB = 1000 GB); recorders often show binary TiB, which looks about 9% smaller. That isn't missing space.
- **Use measured bitrates.** After install, read each camera's actual bitrate from the recorder and redo the math.

Use the **Storage calculator**.

---

## Lesson 6.4: Drives and RAID

- **Surveillance-rated (or enterprise) drives.** They're built for writing around the clock. Desktop drives fail early in recorders. [SRC:surveillance-drives]
- **Check the recorder's limits:** number of bays, maximum drive size, and supported RAID levels.

| RAID | Usable space | Survives |
|---|---|---|
| **None (JBOD)** | All drives | No drive failure; that drive's video is lost |
| **RAID 1** | Half | One drive of the pair |
| **RAID 5** | All but one drive | One drive failure |
| **RAID 6** | All but two drives | Two drive failures |

RAID 5 with very large drives is risky: rebuilding after one failure takes days, and a second failure during the rebuild loses everything. RAID 6 is the common choice on bigger systems. **RAID isn't backup**; it only keeps recording going through a drive failure.

Set the recorder to **alert on drive failure** and send it to someone who will act. A failed drive that nobody notices is lost video.

> **Field tip (David to add):** how you catch a failing drive before the customer loses video.

---

## Lesson 6.5: Retention and power

**Retention** is how many days of video the customer keeps. There's no single code for it.

- **30 days** is a common default. Many customers ask for more.
- **Some regulations set a minimum:** state cannabis rules, gaming regulators, some banking and government contracts, and some insurance policies. The customer or their spec tells you; get it in writing. [SRC:retention]
- Set the recorder to **overwrite** oldest video when full, and check the actual days kept after the first month.
- Some customers also have a **maximum** retention for privacy reasons.

**UPS:** put the recorder, the core PoE switch, and the internet modem and router on a UPS. Size it for the customer's runtime, at least long enough to ride through short outages and shut the recorder down cleanly. Most CCTV has no code standby requirement, unlike fire and intrusion. [SRC:ups-recorder]

---

## Module 6 quiz

1. A 16-channel NVR has 160 Mbps incoming bandwidth. Can it take sixteen 4K cameras at 12 Mbps?
2. What's edge recording?
3. What's the most common cause of "it didn't record" on motion recording?
4. How much storage does one 6 Mbps camera use per day, recording continuously?
5. What headroom do you add to the storage math?
6. The recorder shows 14.5 of a 16 TB drive. Is space missing?
7. What does RAID 6 survive, and what does it cost in space?
8. Is RAID a backup?
9. Who decides how many days to keep?

**Answer key:** 1) No: 16 × 12 = 192 Mbps, over 160. 2) Recording on the camera's memory card when the network or recorder is down. 3) Badly set motion detection: false triggers, or small or distant motion missed. 4) 6 × 3600 × 24 ÷ 8 ÷ 1000 = 64.8 GB. 5) About 20%. 6) No: decimal TB versus binary TiB (16 TB is about 14.55 TiB). 7) Two drive failures; costs two drives of space. 8) No, it only keeps recording through a drive failure. 9) The customer or their spec, and any regulation that applies to them.
