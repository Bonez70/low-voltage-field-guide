# Module 8: Programming, Cybersecurity, and Evidence

**You'll be able to:** set up cameras and a recorder from the box, lock the system down, set up users and remote access, handle privacy and audio correctly, and export video that holds up as evidence.

---

## Lesson 8.1: First setup

On a new camera:

1. **Activate** it with a strong, unique password. Many cameras force this on first login; older ones ship with a known default.
2. **Address it:** static IP (or reservation), subnet mask, gateway, DNS, from your IP schedule.
3. **Update firmware** to the current release before it goes on the wall.
4. **Name it** by location ("East Lobby Door"), the same name on the camera and the recorder.
5. **Set time:** time zone, daylight saving, and an NTP server (usually the recorder or the site's router). [SRC:time-sync]
6. **Set streams:** main stream resolution, frame rate, codec, VBR with a maximum bitrate; sub stream for live grids and phones.
7. **Image settings** (Lesson 7.3), then add it to the recorder.

Recorders: create the recording schedule, motion or analytics zones, drive alerts, and the overwrite setting. Many NVRs with built-in PoE add their own cameras automatically ("plug and play"); still check the names, time, and passwords.

---

## Lesson 8.2: Hardening

Video systems are among the most hacked devices on the internet. Every job:

- **Change every default password,** unique to the site, and don't reuse your company's "standard" password on every customer. [SRC:hardening]
- **Turn off what isn't used:** UPnP, P2P cloud if the customer doesn't use it, Telnet, SSH, and older protocols. [SRC:hardening]
- **Update firmware** on install and on service visits. [SRC:hardening]
- **No port forwarding** (Lesson 4.5). [SRC:no-port-forward]
- **Separate the cameras** from the office network: the NVR's internal PoE network or a camera VLAN.
- **HTTPS** for web logins where the device supports it.
- **Write down** passwords and hand them over securely to the customer, not in a text message or on a sticker on the recorder.

> **Field tip (David to add):** how you store and hand over customer passwords.

---

## Lesson 8.3: Users and remote access

- **Admin account** for the owner or their IT; nobody uses it day to day.
- **Named accounts** for each person, with only the rights they need: live view, playback, export, PTZ, no settings. Named accounts mean the audit log shows who did what.
- **Remove accounts** when people leave. The same rule as access control cards.
- **Installer access:** use your own named account, and agree with the customer whether you keep it after handoff.
- **Remote access** through the maker's cloud with multi-factor login, or a VPN. Check that the phone app uses the sub stream on cellular data.

---

## Lesson 8.4: Privacy, audio, and signage

**Never in private spaces.** Restrooms, locker rooms, changing areas, and anywhere people have a reasonable expectation of privacy. Many states make it a crime. [SRC:privacy-areas]

**Privacy masks** block parts of the view that the customer has no right to record: a neighbor's windows or yard, keypads where people enter codes, and the doorway into a restroom. Masks are recorded black; they can't be removed later from the recording.

**Audio:** recording conversations falls under federal and state wiretap laws.

- Federal law allows recording when **one party** to the conversation consents, but a camera recording other people's conversations isn't a party to them.
- **Some states require every party's consent.**
- **Default: audio off.** Turn it on only when the customer has legal sign-off in writing. [SRC:audio-consent]

**Signs:** "video surveillance in use" signs deter crime and, in some states and workplaces, are required notice to employees or the public. Recommend them on every job; the customer's legal advice decides where they're required. [SRC:signage]

---

## Lesson 8.5: Exporting evidence

When the customer or police need video, how you export it decides whether it's usable.

- **Export the original recording** in the recorder's native format **with its player**, and an **MP4** copy for easy viewing. A phone video of the monitor isn't evidence quality.
- **Keep timestamps** on, and the original time zone; note the recorder's time error if you know it.
- **Watermark or hash** if the recorder offers it, so the file can be shown unchanged.
- **Write down** who exported, when, which cameras, and which times (chain of custody).
- **Check the export plays** on another computer before you leave. [SRC:evidence-export]
- **Protect the original:** lock or protect the clip on the recorder so it isn't overwritten while police or insurance decide what they need.

---

## Lesson 8.6: Compliance: NDAA and listings

**NDAA Section 889** (from the 2019 National Defense Authorization Act) bars US federal agencies from buying, and federal contractors from using, video surveillance and telecom equipment made by certain companies (Hikvision, Dahua, Hytera, Huawei, and ZTE) and their affiliates, including products made by them and sold under other brand names. The FCC also bars new equipment authorizations for these companies' video gear. Government, school, and many corporate specs require "NDAA compliant" products. [SRC:ndaa-889]

- Ask for the manufacturer's NDAA compliance letter for each model; relabeled products are the trap.
- The product listing (UL 62368-1) and the ratings in Lesson 3.5 apply to every job.

---

## Module 8 quiz

1. Why update firmware before the camera goes on the wall?
2. What's the risk of using your company's standard password on every job?
3. Name three services to turn off when they aren't used.
4. Why give each person their own account?
5. Can a privacy mask be removed later to see what was behind it?
6. What's the default setting for audio, and why?
7. What two files do you export for police?
8. A government spec says "NDAA compliant." What do you ask the manufacturer for?

**Answer key:** 1) It's much easier at the bench than on a ladder, and old firmware often has known security flaws. 2) One leak opens every customer's system. 3) Any of UPnP, P2P cloud, Telnet, SSH, or older protocols. 4) The audit log shows who did what, and one person can be removed without changing everyone's password. 5) No, masked areas are recorded black. 6) Off, because wiretap laws apply and some states require every party's consent. 7) The native-format recording with its player, plus an MP4 copy. 8) A compliance letter for each model, since relabeled products are the trap.
