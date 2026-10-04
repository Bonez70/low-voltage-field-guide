# CCTV Field Reference

Quick cards for the Reference tab. Each `##` section is one card. Values are common US figures; the job's specification, the customer's IT rules, the AHJ, and the manufacturer's instructions always win.

---

## Card: Camera system at a glance

```
 [CAMERA]--Cat6 (PoE)--[PoE SWITCH]--[NVR / VMS]--[MONITOR]
 [CAMERA]--Cat6 (PoE)--/     |            |
                             |            +--[DRIVES]
                     [ROUTER / FIREWALL]--cloud or VPN--[PHONE]
 [UPS] powers NVR, core switch, modem/router
```

| Part | Check on every call |
|---|---|
| Camera | Power, link light, IP, time, focus day and night |
| PoE switch | Port power, budget used, uplink errors |
| NVR / VMS | Recording status, drive health, days of retention |
| Network | IP conflicts, VLAN, gateway, internet |
| UPS | Battery date, load, self-test |

---

## Card: Pixel density targets (DORI)

IEC 62676-4 targets on the target, at the target's distance. [SRC:dori-ppm]

| Level | px/m | px/ft (about) | You can tell |
|---|---|---|---|
| Detect | 25 | 8 | Someone is there |
| Observe | 62.5 | 19 | What they're doing |
| Recognize | 125 | 38 | Someone you know |
| Identify | 250 | 76 | Who it is, to a stranger |

**px/ft = horizontal pixels ÷ scene width (ft)**. Use the **Field of View calculator**.

---

## Card: Lens and field of view

**Scene width = 2 × distance × tan(HFOV ÷ 2)**
**HFOV = 2 × atan(sensor width ÷ (2 × focal length))**

Use the spec sheet's HFOV at your focal length when you have it.

| HFOV | Scene width at 20 ft | at 50 ft | 4 MP (2560 px) at 50 ft |
|---|---|---|---|
| 100° | 47.7 ft | 119 ft | 21 px/ft |
| 90° | 40 ft | 100 ft | 26 px/ft |
| 60° | 23.1 ft | 57.7 ft | 44 px/ft |
| 30° | 10.7 ft | 26.8 ft | 96 px/ft |
| 15° | 5.3 ft | 13.2 ft | 194 px/ft |

---

## Card: Resolution and pixel counts

| Name | Pixels (W × H) | Notes |
|---|---|---|
| D1 (analog) | 720 × 480 | Legacy analog |
| 720p | 1280 × 720 | Common sub stream size |
| 1080p / 2 MP | 1920 × 1080 | Entry level |
| 4 MP | 2560 × 1440 or 2688 × 1520 | Common workhorse |
| 5 MP | 2592 × 1944 or 2880 × 1620 | Check which |
| 4K / 8 MP | 3840 × 2160 | Detail on wide scenes; more storage |
| 12 MP | 4000 × 3000 | Often fisheye |

Design uses the **width** in pixels.

---

## Card: PoE classes and power

IEEE 802.3. Budget each camera's **maximum** draw (IR, heater, PTZ). [SRC:poe-classes]

| Standard | Class | At the port | At the device |
|---|---|---|---|
| 802.3af | 1 | 4.0 W | 3.84 W |
| 802.3af | 2 | 7.0 W | 6.49 W |
| 802.3af | 3 | 15.4 W | 12.95 W |
| 802.3at (PoE+) | 4 | 30 W | 25.5 W |
| 802.3bt Type 3 | 5 | 45 W | 40 W |
| 802.3bt Type 3 | 6 | 60 W | 51 W |
| 802.3bt Type 4 | 7 | 75 W | 62 W |
| 802.3bt Type 4 | 8 | 90 W | 71.3 W |

- Load a switch to no more than about **80% of its PoE budget**. [SRC:poe-headroom]
- Switches that allocate by class reserve the class's port watts, whatever the camera really draws.
- Use the **PoE Budget calculator**.

---

## Card: Network cable and distance

- **100 m (328 ft)** channel: 90 m installed + 10 m cords. [SRC:ethernet-100m]
- Cat5e or Cat6, **solid copper**, never CCA.
- Terminate T568B (or A) the same both ends; test every run.
- Past 100 m: PoE extender, fiber to a remote switch, or media converters.
- Between buildings: **fiber**.
- PoE bundles with more than 0.3 A per conductor: NEC bundle limits, or -LP cable. [SRC:poe-bundle]

---

## Card: Coax and HD analog

| Item | Typical |
|---|---|
| Impedance | 75 Ω |
| Cable | RG59 (RG6 for longer runs); siamese RG59 + 18/2 |
| Center conductor | Solid copper, not copper-clad steel |
| Connectors | Compression BNC matched to the cable |
| HD over coax 1080p | About 500 m (1,600 ft) on RG59 |
| HD over coax 4K / 8 MP | About 300 m (1,000 ft) |

Distances vary by maker and format (HD-TVI, HD-CVI, AHD); check the specs. [SRC:coax-distance]

Baluns: matched passive pairs, one camera per twisted pair.

---

## Card: Bitrate and storage planning

**Planning bitrates at 15 fps** (measure the real cameras on site): [SRC:bitrate-typical]

| Resolution | H.264 | H.265 |
|---|---|---|
| 2 MP | 2 to 4 Mbps | 1 to 2 Mbps |
| 4 MP | 4 to 6 Mbps | 2 to 4 Mbps |
| 8 MP / 4K | 8 to 16 Mbps | 4 to 8 Mbps |

Night, rain, trees, and busy scenes push bitrate up; smart codecs push it down. H.265 runs roughly 30 to 50% below H.264. [SRC:codec-savings]

**GB per camera per day = Mbps × 3600 × hours × fraction recorded ÷ 8 ÷ 1000**
**TB total = GB per day (all cameras) × days ÷ 1000**, then add about **20%**. [SRC:storage-margin]

| Bitrate | GB per day (24 h continuous) | TB for 30 days |
|---|---|---|
| 2 Mbps | 21.6 | 0.65 |
| 4 Mbps | 43.2 | 1.30 |
| 6 Mbps | 64.8 | 1.94 |
| 8 Mbps | 86.4 | 2.59 |

Use the **Storage calculator**.

---

## Card: IP addressing basics

- **Private ranges:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. [SRC:private-ip]
- **/24 = 255.255.255.0:** 254 usable addresses (.1 to .254).
- **Gateway:** the router; needed for time, cloud, and remote access.
- Cameras: **static IP or DHCP reservation.**
- IP schedule for every job: name, location, IP, MAC, model, switch port.
- Find a camera: the maker's discovery tool, the NVR's device search, or the switch's MAC table.

---

## Card: Common ports and protocols

Check the device manual for the real list. [SRC:ports]

| Port | What |
|---|---|
| 80 / 443 TCP | Web page (HTTP / HTTPS), ONVIF commands |
| 554 TCP | RTSP streams |
| 3702 UDP | ONVIF discovery (WS-Discovery) |
| 123 UDP | NTP time |

**ONVIF profiles:** S streaming and PTZ; T H.265, advanced streaming, events; G edge storage and playback; M analytics metadata. [SRC:onvif-profiles]

**RTSP stream:** most cameras give an RTSP address for the main and sub stream, used for testing with a media player and for third-party recorders.

---

## Card: Camera placement and mounting

- **Identify at doors:** 8 to 10 ft high, small vertical angle to faces (under about 15 to 30°). [SRC:mount-height]
- **Overviews:** 10 to 14 ft, out of reach.
- **Pair every entrance:** a wide overview plus a tight identify camera.
- **Hallways:** corridor mode (portrait).
- **Avoid:** sky, sun, headlights, bright windows behind the subject.
- **Mount to structure** or listed hardware; PTZs get blocking. [SRC:safety-mount]
- **LPR:** dedicated lane camera, shutter 1/1000 s or faster, under about 30° to the plate. [SRC:lpr-settings]

---

## Card: IR and low light

| Item | Notes |
|---|---|
| 850 nm IR | Faint red glow, longer range |
| 940 nm IR | Invisible, shorter range |

[SRC:ir-wavelength]

- IR bounces off eaves, walls, webs, and dirty dome bubbles: white haze.
- Focus with IR on; lenses shift focus under infrared.
- Smart IR keeps close faces from whiting out.
- Night noise raises bitrate; good site lighting beats IR and shows color.
- Shutter cap 1/60 to 1/120 s for people.

---

## Card: Cable ratings and outdoor runs

| Location | Data cable | Coax |
|---|---|---|
| General | CM / CL2 | CATV |
| Riser | CMR / CL2R | CATVR |
| Plenum | CMP / CL2P | CATVP |

[SRC:nec-cable-type]

- Support from structure, not ceiling tile, grid wires, pipes, or conduit. [SRC:nec-support]
- Firestop every rated wall and floor penetration. [SRC:firestop]
- Plenum-space devices listed for plenum use. [SRC:plenum-devices]
- Outdoor: UV-rated; gel-filled or direct burial underground; buried conduit is a wet location. [SRC:outdoor-cable]
- Copper leaving the building: surge protection bonded to building ground. [SRC:outdoor-surge]
- Metal poles bonded and grounded; lightning protection where designed. [SRC:pole-grounding]

---

## Card: Cybersecurity checklist

- [ ] Default passwords changed, unique to the site. [SRC:hardening]
- [ ] Firmware current on cameras and recorder.
- [ ] UPnP, unused P2P, Telnet, SSH off.
- [ ] No port forwarding; cloud with multi-factor login, or VPN. [SRC:no-port-forward]
- [ ] Cameras on the NVR's PoE network or a camera VLAN.
- [ ] Named user accounts with only the rights they need.
- [ ] Passwords handed over securely, not stuck on the recorder.
- [ ] NDAA-compliant models where the spec requires it. [SRC:ndaa-889]

---

## Card: Privacy, audio, and signage

- **Never** in restrooms, locker rooms, changing areas, or other private spaces. [SRC:privacy-areas]
- **Mask** neighbors' windows, keypads, and restroom doorways.
- **Audio off** unless the customer has written legal sign-off; some states need all-party consent. [SRC:audio-consent]
- **Signs** recommended everywhere; required notice in some states and workplaces. [SRC:signage]
- **Footage** stays with the customer: no copies on your phone. [SRC:safety-privacy-footage]

---

## Card: Evidence export checklist

- [ ] Native format with the player, plus an MP4 copy. [SRC:evidence-export]
- [ ] Timestamps on; time zone noted; recorder time error noted.
- [ ] Watermark or hash if the recorder offers it.
- [ ] Record who exported, when, which cameras, which times.
- [ ] Clip locked on the recorder so it isn't overwritten.
- [ ] Export plays on another computer.

---

## Card: Commissioning checklist

- [ ] Every camera recording: right schedule, resolution, fps, codec.
- [ ] Day and night views checked on playback with a walk test.
- [ ] Focus checked with IR on.
- [ ] Time synced to one NTP source on recorder and cameras. [SRC:time-sync]
- [ ] Drives healthy; expected retention days shown; recheck after a few weeks. [SRC:retention]
- [ ] Alerts for drive failure and video loss go to someone who acts.
- [ ] Hardening done (Reference: *Cybersecurity checklist*).
- [ ] Remote viewing on the customer's phone via cloud or VPN.
- [ ] Recorder, core switch, and modem on a UPS. [SRC:ups-recorder]
- [ ] Customer trained on playback and export.
- [ ] As-built: plan, IP schedule, views captured, passwords handed over.

---

## Glossary

- **Bitrate:** data per second of a video stream, in Mbps.
- **BLC:** backlight compensation; an older fix for bright backgrounds.
- **Codec:** the compression method, such as H.264 or H.265.
- **DORI:** detect, observe, recognize, identify; pixel density targets from IEC 62676-4.
- **DVR:** recorder for analog and HD-over-coax cameras.
- **Edge recording:** recording to a memory card in the camera.
- **FPS:** frames per second.
- **GOP:** group of pictures; frames from one I-frame to the next.
- **HD over coax:** HD-TVI, HD-CVI, and AHD analog HD on coax.
- **HFOV:** horizontal field of view, in degrees.
- **I-frame:** a complete frame; the frames between carry only changes.
- **IR:** infrared illumination for night views.
- **LPR:** license plate recognition.
- **NDAA:** the 2019 defense law whose Section 889 bars certain video brands from federal use.
- **NVR:** recorder for IP cameras.
- **ONVIF:** the standard that lets cameras and recorders from different makers work together.
- **PD / PSE:** powered device (camera) and power sourcing equipment (switch or injector) in PoE.
- **PoE:** power over Ethernet.
- **PPF / PPM:** pixels per foot / per meter on the target.
- **PTZ:** pan-tilt-zoom camera.
- **RAID:** several drives working as one, so recording survives a drive failure.
- **RTSP:** the protocol most cameras use to send streams.
- **Sub stream:** low-resolution second stream for live grids and phones.
- **Varifocal:** a lens with adjustable focal length.
- **VBR / CBR:** variable or constant bitrate.
- **VLAN:** a separate virtual network on the same switches.
- **VMS:** video management software.
- **WDR:** wide dynamic range; handles bright and dark areas in one scene.
