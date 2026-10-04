# Verify Sheet: CCTV Draft

**Status: all 42 items signed off.**

Every code value and safety step in the draft, numbered, with the full paragraph it sits in. The value being checked is marked **⟦#n⟧** in the quote. Where the same value appears in several places, the first two are quoted and the rest are listed; one answer covers them all.

**How to answer:** reply with the item number and your call, for example:
`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove`
`all ok except 7, 22`

"Source" is my honest note of where the value comes from. None of it was checked against the code book itself; it's general industry knowledge of the NEC, IEEE 802.3, TIA-568, IEC 62676-4, ONVIF, OSHA, and federal and state privacy law, so your field experience and your adopted edition win.

---

## Signed off

- **1. Ladders and lifts** (signed off by David 2026-10-04): extension ladders set at 4 to 1, extending 3 ft above the landing, on firm footing, tied off or held, three points of contact, tools carried in a bag or hand line; in a boom lift, a harness and lanyard tied to the basket anchor; in a scissor lift, stay inside the rails; lift training before running a lift. *Source: OSHA 1926.1053; 1926.453.*
- **2. Mount to structure** (signed off by David 2026-10-04): cameras, and especially PTZs and heavy multi-sensor cameras, are mounted into structure or with the manufacturer's listed mount and anchors rated for the weight, with blocking where needed; never hung from drywall or ceiling tile alone. *Source: Manufacturer instructions.*
- **3. Line voltage is the electrician's** (signed off by David 2026-10-04): 120 V outlets, branch circuits, and power to poles are installed by the electrician; the low voltage tech plugs in and doesn't wire branch circuits. *Source: NEC; state licensing.*
- **4. Notify before taking video offline** (signed off by David 2026-10-04): tell the customer before taking a camera or the recorder offline, since recording stops; put monitored video accounts on test with the monitoring center. *Source: Industry practice.*
- **5. Footage stays with the customer** (signed off by David 2026-10-04): don't copy, photograph, share, or keep a customer's footage; exports go to the customer through their process. *Source: Industry practice.*
- **6. No cameras in private spaces** (signed off by David 2026-10-04): no cameras in restrooms, locker rooms, changing areas, or anywhere people have a reasonable expectation of privacy; many states make it a crime. *Source: State law; 18 U.S.C. 1801.*
- **7. Audio recording consent** (signed off by David 2026-10-04): federal law allows recording a conversation when one party consents, but a camera recording other people's conversations isn't a party to them; some states require every party's consent; default audio off unless the customer has written legal sign-off. *Source: 18 U.S.C. 2511; state law.*
- **8. Surveillance signs** (signed off by David 2026-10-04): recommend "video surveillance in use" signs on every job; some states and workplaces require notice to employees or the public, and the customer's legal advice decides where. *Source: State law; industry practice.*
- **9. NDAA Section 889** (signed off by David 2026-10-04): NDAA Section 889 bars federal agencies from buying, and federal contractors from using, video surveillance and telecom equipment from Hikvision, Dahua, Hytera, Huawei, and ZTE and their affiliates, including relabeled products; the FCC also bars new equipment authorizations for these companies' video gear. *Source: NDAA FY2019 §889; FCC Covered List.*
- **10. Evidence export** (signed off by David 2026-10-04): export the original in the recorder's native format with its player plus an MP4 copy, keep timestamps on, watermark or hash if offered, record who exported what and when, lock the clip on the recorder, and check the export plays on another computer. *Source: SWGDE; industry practice.*
- **11. Time sync** (signed off by David 2026-10-04): set time zone and daylight saving, and sync the recorder and every camera to one NTP time source. *Source: Industry practice.*
- **12. Retention** (signed off by David 2026-10-04): no single code sets retention; 30 days is a common default; some regulations set a minimum (state cannabis rules, gaming regulators, some banking and government contracts, some insurance policies); the customer or spec sets it in writing. *Source: Customer spec; regulations.*
- **13. DORI pixel density** (signed off by David 2026-10-04): IEC 62676-4 targets: detect 25 px/m (about 8 px/ft), observe 62.5 px/m (about 19 px/ft), recognize 125 px/m (about 38 px/ft), identify 250 px/m (about 76 px/ft). *Source: IEC 62676-4.*
- **14. Frame rates** (signed off by David 2026-10-04): about 15 fps for most surveillance; 25 to 30 fps for fast action (cash handling, gaming, traffic); 1 to 7 fps for wide overviews to save storage. *Source: Industry practice.*
- **15. H.265 savings** (signed off by David 2026-10-04): H.265 uses roughly 30 to 50% less bitrate than H.264 at similar quality. *Source: Manufacturer data.*
- **16. Planning bitrates** (signed off by David 2026-10-04): at 15 fps, planning bitrates of 2 to 4 Mbps (H.264) or 1 to 2 Mbps (H.265) for 2 MP, 4 to 6 or 2 to 4 Mbps for 4 MP, and 8 to 16 or 4 to 8 Mbps for 8 MP; measure the real cameras on site. *Source: Manufacturer data.*
- **17. IR wavelengths** (signed off by David 2026-10-04): 850 nm IR gives a faint red glow at the LEDs and longer range; 940 nm is invisible with shorter range. *Source: Manufacturer data.*
- **18. License plate cameras** (signed off by David 2026-10-04): LPR cameras use a shutter of 1/1000 s or faster for moving vehicles (1/500 s can work in slow lots), keep the angle to the plate under about 30° horizontally and vertically, and follow the camera's pixels-on-plate requirement. *Source: Manufacturer data.*
- **19. Mounting height for faces** (signed off by David 2026-10-04): identify cameras at doors commonly mount 8 to 10 ft high with the vertical angle to faces under about 15 to 30°; overviews 10 to 14 ft or higher. *Source: Industry practice.*
- **20. IP and IK ratings** (signed off by David 2026-10-04): outdoor cameras are IP66 or IP67; vandal domes within reach are IK10. *Source: IEC 60529; IEC 62262.*
- **21. Equipment listing** (signed off by David 2026-10-04): cameras, recorders, PoE switches, and power supplies carry a safety listing (UL 62368-1, or UL 60950-1 on older equipment), and separate camera power supplies are Class 2. *Source: UL 62368-1; NEC 725.*
- **22. Devices in plenum spaces** (signed off by David 2026-10-04): a camera or back box in a plenum (return-air) ceiling is listed for use in that space. *Source: NEC 300.22(C); UL 2043.*
- **23. Private address ranges** (signed off by David 2026-10-04): private address ranges are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255. *Source: RFC 1918.*
- **24. Common ports** (signed off by David 2026-10-04): 80 and 443 TCP web and ONVIF commands, 554 TCP RTSP, 3702 UDP ONVIF discovery, 123 UDP NTP. *Source: IANA; ONVIF.*
- **25. ONVIF profiles** (signed off by David 2026-10-04): Profile S streaming and PTZ; Profile T H.265, advanced streaming, and events; Profile G edge storage and playback; Profile M analytics metadata. *Source: ONVIF.*
- **26. PoE classes and power** (signed off by David 2026-10-04): 802.3af Class 1 4.0 W at the port / 3.84 W at the device, Class 2 7.0 / 6.49 W, Class 3 15.4 / 12.95 W; 802.3at Class 4 30 / 25.5 W; 802.3bt Type 3 Class 5 45 / 40 W and Class 6 60 / 51 W; Type 4 Class 7 75 / 62 W and Class 8 90 / 71.3 W. *Source: IEEE 802.3.*
- **27. PoE switch at 80%** (signed off by David 2026-10-04): budget each camera's maximum draw (IR, heater, PTZ), and design a switch to no more than about 80% of its total PoE budget. *Source: Design practice.*
- **28. PoE in bundles** (signed off by David 2026-10-04): where PoE puts more than 0.3 A on each conductor, the NEC limits how many cables can be bundled by gauge and temperature rating, or the cable is marked -LP for the current. *Source: NEC 725.144.*
- **29. Ethernet 100 m** (signed off by David 2026-10-04): an Ethernet run is limited to 100 m (328 ft), usually 90 m of installed cable plus 10 m of patch cords. *Source: TIA-568; IEEE 802.3.*
- **30. Camera voltage tolerance** (signed off by David 2026-10-04): most cameras want their rated voltage within about ±10% (check the spec sheet), measured at the camera with IR on. *Source: Manufacturer data.*
- **31. HD over coax distance** (signed off by David 2026-10-04): HD over coax at 1080p is commonly rated around 500 m (1,600 ft) on RG59 with a solid copper center, and about 300 m for 4K / 8 MP; copper-clad steel cuts it. *Source: Manufacturer data.*
- **32. Cable ratings** (signed off by David 2026-10-04): CM / CL2 general use, CMR / CL2R riser, CMP / CL2P plenum, CATV / CATVR / CATVP for coax; a higher rating can replace a lower one. *Source: NEC 725; 800; 820.*
- **33. Cable support** (signed off by David 2026-10-04): cable is supported by the building structure with listed hardware, not laid on ceiling tiles or tied to ceiling grid wires, pipes, or conduit (same rule as the signed-off access item). *Source: NEC 725.24; 800.24.*
- **34. Firestop penetrations** (signed off by David 2026-10-04): every penetration through a fire-rated wall or floor is sealed with a listed firestop system for that wall and cable. *Source: NEC 300.21; IBC Ch. 7.*
- **35. Outdoor and underground cable** (signed off by David 2026-10-04): outdoor runs use outdoor-rated, UV-resistant cable; underground runs use gel-filled or direct-burial rated cable, since buried conduit is a wet location and indoor cable isn't allowed in it. *Source: NEC 300.5(B).*
- **36. Surge protection outside the building** (signed off by David 2026-10-04): copper runs leaving the building get a surge protector at the building end (and the camera end on poles), bonded to the building grounding electrode system with a short, straight conductor; fiber between buildings is better. *Source: NEC 800.90; industry practice.*
- **37. Pole grounding** (signed off by David 2026-10-04): metal camera poles are bonded and grounded as part of the electrical work for the pole, with lightning protection where the design calls for it, coordinated with the electrician. *Source: NEC 250; NFPA 780.*
- **38. Storage headroom** (signed off by David 2026-10-04): plan storage about 20% above the calculated amount, because bitrates rise at night, in rain, and in busy scenes. *Source: Design practice.*
- **39. Surveillance drives** (signed off by David 2026-10-04): use surveillance-rated or enterprise drives built for 24/7 writing; desktop drives fail early in recorders. *Source: Manufacturer data.*
- **40. UPS for the recorder** (signed off by David 2026-10-04): put the recorder, core PoE switch, and internet modem and router on a UPS sized for the customer's runtime; most CCTV has no code standby requirement. *Source: Industry practice.*
- **41. Hardening** (signed off by David 2026-10-04): change every default password to one unique to the site, turn off unused services (UPnP, unused P2P cloud, Telnet, SSH), and update firmware on install and service visits. *Source: CISA; manufacturer guides.*
- **42. No port forwarding** (signed off by David 2026-10-04): don't port-forward camera or recorder ports to the internet; use the manufacturer's cloud service with multi-factor login, or a VPN. *Source: CISA; manufacturer guides.*

