# Module 1: Foundations

**Who it's for:** techs new to video surveillance, including intrusion, fire, and access techs crossing over.
**You'll be able to:** say what a video system is for, tell the system types apart, name every part of the system, and work on cameras safely and without creating legal trouble for the customer.

---

## Lesson 1.1: What a video system is for

A video surveillance system (still called CCTV, closed-circuit television) does two jobs:

- **Live viewing:** someone watches what's happening now: a guard desk, a manager's phone, or a remote monitoring center.
- **Forensic review:** someone goes back after an incident and pulls the video. This is most of what most systems are used for, which means **the recording has to be there and good enough to use** when it's needed.

Before you pick a single camera, ask the customer what they need to see at each spot, in four levels:

| Level | What you can tell | Example |
|---|---|---|
| **Detect** | Something or someone is there | A person crossed the back lot |
| **Observe** | What they're doing | They walked to the dumpster and back |
| **Recognize** | It's someone you know | That's the night manager |
| **Identify** | Who it is, beyond reasonable doubt, to a stranger | A face good enough for police |

Each level needs more pixels on the target. That's the single most important design idea in video, and it's covered in Lesson 3.3.

The most common complaint in this trade is "we have cameras everywhere and you can't see anyone's face." That's a design problem, not a camera problem.

---

## Lesson 1.2: System types

| Type | Cameras | Cable | Recorder |
|---|---|---|---|
| **Analog (legacy)** | Standard definition, about 0.3 MP or less | Coax (RG59) | DVR |
| **HD over coax** (HD-TVI, HD-CVI, AHD) | 1 to 8 MP analog HD | Coax, or UTP with baluns | Hybrid DVR (XVR) |
| **IP** | 2 to 12 MP and up, digital | Ethernet (Category 5e/6), PoE | NVR or VMS server |
| **Cloud / hybrid** | IP cameras that record to the cloud, to an on-site box, or to their own memory card | Ethernet | Cloud service, sometimes with a local cache |

- **IP is the default for new work.** Higher resolution, PoE power on the same cable, analytics in the camera, and one network for everything.
- **HD over coax** is the cheap upgrade path for sites with good existing coax: swap the cameras and the DVR, keep the cable.
- **VMS (video management software)** runs on a server and handles many cameras, many recorders, and many sites. Large commercial jobs use one.

---

## Lesson 1.3: Parts of the system

```
 [CAMERA]--Cat6--[PoE SWITCH]--[NVR / VMS SERVER]--[MONITOR]
 [CAMERA]--Cat6--/     |              |
                       |              +--[HARD DRIVES]
                  [ROUTER / FIREWALL]--internet--[PHONE APP / REMOTE SITE]
```

| Part | What it does |
|---|---|
| **Camera** | Lens, image sensor, processor, and network port. Turns light into a compressed video stream. |
| **Lens** | Sets how wide the view is and how far you can see detail. Fixed, varifocal, or motorized (zoom). |
| **PoE switch** | Connects cameras to the network and powers them over the same cable. |
| **NVR / DVR / VMS server** | Records the video to hard drives and plays it back. |
| **Hard drives** | Where the video lives. Sized for how many days the customer must keep. |
| **Client** | Monitor at the recorder, software on a workstation, or a phone app. |
| **Router / firewall** | Connects the system to the internet for remote viewing. Also the biggest security risk. |
| **UPS** | Keeps the recorder and switch running through short outages. |

---

## Lesson 1.4: Working safely

Most CCTV injuries come from **ladders and lifts**, not electricity.

- **Ladders:** extension ladders set at 4 to 1 (1 ft out for every 4 ft up), extending 3 ft above the landing, on firm footing, tied off or held. Three points of contact. Don't carry the camera up in your hand; use a bag or a hand line. [SRC:safety-height]
- **Lifts:** in a boom lift, wear a harness and lanyard tied to the basket anchor; in a scissor lift, stay inside the rails. Lift training is required before you run one. [SRC:safety-height]
- **Mounting:** cameras, and especially PTZs, go into structure or listed mounting hardware, never hung from drywall or ceiling tile alone. A camera that falls on someone is a serious injury. [SRC:safety-mount]
- **Line voltage:** 120 V outlets, circuits, and power to a pole are the electrician's. You plug in; you don't wire branch circuits. [SRC:safety-line-voltage]
- **Tell the customer first.** Taking a camera or the recorder offline creates a gap in recording, and a gap is exactly when something happens. If the video is monitored, put the account on test with the monitoring center. [SRC:safety-notify]

> **Field tip (David to add):** the ladder or lift habit that has kept you safe on camera jobs.

---

## Lesson 1.5: The footage isn't yours

You'll see live video and recordings of people who never agreed to be filmed by you.

- **Don't copy, photograph, share, or keep footage.** Not for training, not because it's funny, not to show the customer later on your own phone. Exports go to the customer through their process. [SRC:safety-privacy-footage]
- **Some places never get cameras:** restrooms, locker rooms, changing areas, and anywhere people have a reasonable expectation of privacy. If a customer asks, the answer is no. [SRC:privacy-areas]
- **Audio is a different law.** Recording conversations falls under wiretap laws, and some states require every party's consent. Leave audio off unless the customer has legal sign-off. Module 8 covers this. [SRC:audio-consent]

---

## Module 1 quiz

1. What are the two jobs a video system does?
2. Name the four levels of what you need to see, from least to most detail.
3. What's the usual cause of "you can't see anyone's face"?
4. Which system type is the default for new work, and why?
5. When does HD over coax make sense?
6. What's the safe setup angle for an extension ladder?
7. A customer asks for a camera in the employee restroom hallway pointed at the restroom door. What's the issue?
8. Why tell the customer before taking the recorder offline?

**Answer key:** 1) Live viewing and forensic review of recordings. 2) Detect, observe, recognize, identify. 3) Not enough pixels on the target: the camera covers too wide a view for the distance. 4) IP: higher resolution, PoE power on one cable, analytics, one network. 5) When the site has good existing coax and a tight budget. 6) 4 to 1: 1 ft out for every 4 ft up. 7) The hallway is fine if it doesn't see into the restroom; the restroom itself never gets a camera, so aim and mask so no part of the inside is visible. 8) Recording stops, and a gap is when something happens; monitored accounts go on test too.
