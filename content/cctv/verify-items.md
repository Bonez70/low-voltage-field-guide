# CCTV Verify Items

Source list for VERIFY-SHEET.md. Each `### key: title` matches a `[VERIFY:key]` (or, once signed off, `[SRC:key]`) tag in the CCTV content. Items are numbered in the order they appear here; keep the order so numbers stay stable. `**Cite:**` is the short source shown next to the value in the app. When David signs an item off, add `**Status:** signed off ...` and change its tags in the content from `[VERIFY:key]` to `[SRC:key]`. Run `node app/verify-sheet.js cctv` to regenerate the sheet.

Code and standard references are to the NEC (2020 and 2023), IEEE 802.3, TIA-568, IEC 62676-4, IEC 60529, IEC 62262, ONVIF, OSHA 29 CFR 1926, and federal and state privacy law, from general industry knowledge, not checked against the books. Section numbers moved between NEC editions (2023 moved much of Article 725 into Article 722), so cites name the article or topic.

## Safety steps

### safety-height: Ladders and lifts
**Proposed:** extension ladders set at 4 to 1, extending 3 ft above the landing, on firm footing, tied off or held, three points of contact, tools carried in a bag or hand line; in a boom lift, a harness and lanyard tied to the basket anchor; in a scissor lift, stay inside the rails; lift training before running a lift.
**Source:** OSHA 29 CFR 1926.1053 (ladders) and 1926.453 (aerial lifts); ANSI A92 for lift training. Industry practice for carrying tools.
**Cite:** OSHA 1926.1053; 1926.453

### safety-mount: Mount to structure
**Proposed:** cameras, and especially PTZs and heavy multi-sensor cameras, are mounted into structure or with the manufacturer's listed mount and anchors rated for the weight, with blocking where needed; never hung from drywall or ceiling tile alone.
**Source:** manufacturer installation instructions; industry practice (falling-object hazard). No single code section.
**Cite:** Manufacturer instructions

### safety-line-voltage: Line voltage is the electrician's
**Proposed:** 120 V outlets, branch circuits, and power to poles are installed by the electrician; the low voltage tech plugs in and doesn't wire branch circuits.
**Source:** state electrical licensing and the NEC; NFPA 70E for working near energized parts. Licensing rules vary by state.
**Cite:** NEC; state licensing

### safety-notify: Notify before taking video offline
**Proposed:** tell the customer before taking a camera or the recorder offline, since recording stops; put monitored video accounts on test with the monitoring center.
**Source:** standard industry practice (customer and monitoring center procedures). No code section.
**Cite:** Industry practice

### safety-privacy-footage: Footage stays with the customer
**Proposed:** don't copy, photograph, share, or keep a customer's footage; exports go to the customer through their process.
**Source:** industry practice and customer confidentiality; some state privacy laws and contracts also apply. No code section.
**Cite:** Industry practice

## Privacy and legal

### privacy-areas: No cameras in private spaces
**Proposed:** no cameras in restrooms, locker rooms, changing areas, or anywhere people have a reasonable expectation of privacy; many states make it a crime.
**Source:** state video voyeurism and surveillance laws (vary by state); federal 18 U.S.C. 1801 on federal property.
**Cite:** State law; 18 U.S.C. 1801

### audio-consent: Audio recording consent
**Proposed:** federal law allows recording a conversation when one party consents, but a camera recording other people's conversations isn't a party to them; some states require every party's consent; default audio off unless the customer has written legal sign-off.
**Source:** federal Wiretap Act, 18 U.S.C. 2511; state wiretap laws (about a dozen states require all-party consent, including California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, and Washington).
**Cite:** 18 U.S.C. 2511; state law

### signage: Surveillance signs
**Proposed:** recommend "video surveillance in use" signs on every job; some states and workplaces require notice to employees or the public, and the customer's legal advice decides where.
**Source:** state employee monitoring notice laws (for example Connecticut, Delaware, New York); industry practice.
**Cite:** State law; industry practice

### ndaa-889: NDAA Section 889
**Proposed:** NDAA Section 889 bars federal agencies from buying, and federal contractors from using, video surveillance and telecom equipment from Hikvision, Dahua, Hytera, Huawei, and ZTE and their affiliates, including relabeled products; the FCC also bars new equipment authorizations for these companies' video gear.
**Source:** FY2019 National Defense Authorization Act, Section 889; FCC Covered List and its 2022 equipment authorization order.
**Cite:** NDAA FY2019 §889; FCC Covered List

### evidence-export: Evidence export
**Proposed:** export the original in the recorder's native format with its player plus an MP4 copy, keep timestamps on, watermark or hash if offered, record who exported what and when, lock the clip on the recorder, and check the export plays on another computer.
**Source:** SWGDE (Scientific Working Group on Digital Evidence) best practices for digital video; industry practice.
**Cite:** SWGDE; industry practice

### time-sync: Time sync
**Proposed:** set time zone and daylight saving, and sync the recorder and every camera to one NTP time source.
**Source:** industry practice; accurate timestamps support evidence use. No code section.
**Cite:** Industry practice

### retention: Retention
**Proposed:** no single code sets retention; 30 days is a common default; some regulations set a minimum (state cannabis rules, gaming regulators, some banking and government contracts, some insurance policies); the customer or spec sets it in writing.
**Source:** industry practice; state and industry regulations vary (for example many state cannabis programs require 45 to 90 days).
**Cite:** Customer spec; regulations

## Image and design

### dori-ppm: DORI pixel density
**Proposed:** IEC 62676-4 targets: detect 25 px/m (about 8 px/ft), observe 62.5 px/m (about 19 px/ft), recognize 125 px/m (about 38 px/ft), identify 250 px/m (about 76 px/ft).
**Source:** IEC 62676-4 (video surveillance systems, application guidelines). The Field of View calculator uses these four values.
**Cite:** IEC 62676-4

### frame-rate: Frame rates
**Proposed:** about 15 fps for most surveillance; 25 to 30 fps for fast action (cash handling, gaming, traffic); 1 to 7 fps for wide overviews to save storage.
**Source:** industry practice. Gaming and some regulators set their own minimums.
**Cite:** Industry practice

### codec-savings: H.265 savings
**Proposed:** H.265 uses roughly 30 to 50% less bitrate than H.264 at similar quality.
**Source:** ITU-T H.265 design goals and manufacturer test data; real savings vary with the scene.
**Cite:** Manufacturer data

### bitrate-typical: Planning bitrates
**Proposed:** at 15 fps, planning bitrates of 2 to 4 Mbps (H.264) or 1 to 2 Mbps (H.265) for 2 MP, 4 to 6 or 2 to 4 Mbps for 4 MP, and 8 to 16 or 4 to 8 Mbps for 8 MP; measure the real cameras on site.
**Source:** manufacturer bitrate calculators and industry rules of thumb. Planning figures only.
**Cite:** Manufacturer data

### ir-wavelength: IR wavelengths
**Proposed:** 850 nm IR gives a faint red glow at the LEDs and longer range; 940 nm is invisible with shorter range.
**Source:** manufacturer data.
**Cite:** Manufacturer data

### lpr-settings: License plate cameras
**Proposed:** LPR cameras use a shutter of 1/1000 s or faster for moving vehicles (1/500 s can work in slow lots), keep the angle to the plate under about 30° horizontally and vertically, and follow the camera's pixels-on-plate requirement.
**Source:** manufacturer LPR installation guides; industry practice.
**Cite:** Manufacturer data

### mount-height: Mounting height for faces
**Proposed:** identify cameras at doors commonly mount 8 to 10 ft high with the vertical angle to faces under about 15 to 30°; overviews 10 to 14 ft or higher.
**Source:** industry practice and manufacturer design guides. No code section.
**Cite:** Industry practice

### ip-ik-ratings: IP and IK ratings
**Proposed:** outdoor cameras are IP66 or IP67; vandal domes within reach are IK10.
**Source:** IEC 60529 (IP codes); IEC 62262 (IK codes); industry practice for which rating to specify.
**Cite:** IEC 60529; IEC 62262

### camera-listing: Equipment listing
**Proposed:** cameras, recorders, PoE switches, and power supplies carry a safety listing (UL 62368-1, or UL 60950-1 on older equipment), and separate camera power supplies are Class 2.
**Source:** NEC 110.3(B) and the Class 2 power source rules (Article 725, 722 in 2023); UL 62368-1 replaced UL 60950-1.
**Cite:** UL 62368-1; NEC 725

### plenum-devices: Devices in plenum spaces
**Proposed:** a camera or back box in a plenum (return-air) ceiling is listed for use in that space.
**Source:** NEC 300.22(C) (other spaces used for environmental air); UL 2043 for heat and smoke release.
**Cite:** NEC 300.22(C); UL 2043

## Network and power

### private-ip: Private address ranges
**Proposed:** private address ranges are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255.
**Source:** IETF RFC 1918.
**Cite:** RFC 1918

### ports: Common ports
**Proposed:** 80 and 443 TCP web and ONVIF commands, 554 TCP RTSP, 3702 UDP ONVIF discovery, 123 UDP NTP.
**Source:** IANA port registry; ONVIF core specification. Devices can be set to other ports.
**Cite:** IANA; ONVIF

### onvif-profiles: ONVIF profiles
**Proposed:** Profile S streaming and PTZ; Profile T H.265, advanced streaming, and events; Profile G edge storage and playback; Profile M analytics metadata.
**Source:** ONVIF profile specifications.
**Cite:** ONVIF

### poe-classes: PoE classes and power
**Proposed:** 802.3af Class 1 4.0 W at the port / 3.84 W at the device, Class 2 7.0 / 6.49 W, Class 3 15.4 / 12.95 W; 802.3at Class 4 30 / 25.5 W; 802.3bt Type 3 Class 5 45 / 40 W and Class 6 60 / 51 W; Type 4 Class 7 75 / 62 W and Class 8 90 / 71.3 W.
**Source:** IEEE 802.3af, 802.3at, 802.3bt (now in IEEE 802.3 Clause 33 and 145). The PoE Budget calculator uses these values.
**Cite:** IEEE 802.3

### poe-headroom: PoE switch at 80%
**Proposed:** budget each camera's maximum draw (IR, heater, PTZ), and design a switch to no more than about 80% of its total PoE budget.
**Source:** design practice and switch manufacturer guidance. No code section. The PoE Budget calculator uses 80%.
**Cite:** Design practice

### poe-bundle: PoE in bundles
**Proposed:** where PoE puts more than 0.3 A on each conductor, the NEC limits how many cables can be bundled by gauge and temperature rating, or the cable is marked -LP for the current.
**Source:** NEC 725.144 (2017 and 2020; 2023 keeps the rule with the Class 2 requirements) and its ampacity table; -LP cable listing.
**Cite:** NEC 725.144

### ethernet-100m: Ethernet 100 m
**Proposed:** an Ethernet run is limited to 100 m (328 ft), usually 90 m of installed cable plus 10 m of patch cords.
**Source:** ANSI/TIA-568 (channel and permanent link); IEEE 802.3 for 10/100/1000BASE-T.
**Cite:** TIA-568; IEEE 802.3

### camera-voltage: Camera voltage tolerance
**Proposed:** most cameras want their rated voltage within about ±10% (check the spec sheet), measured at the camera with IR on.
**Source:** manufacturer data; industry practice for measuring under load.
**Cite:** Manufacturer data

### coax-distance: HD over coax distance
**Proposed:** HD over coax at 1080p is commonly rated around 500 m (1,600 ft) on RG59 with a solid copper center, and about 300 m for 4K / 8 MP; copper-clad steel cuts it.
**Source:** HD-TVI, HD-CVI, and AHD manufacturer specifications; values vary by maker and format.
**Cite:** Manufacturer data

## Cabling and installation

### nec-cable-type: Cable ratings
**Proposed:** CM / CL2 general use, CMR / CL2R riser, CMP / CL2P plenum, CATV / CATVR / CATVP for coax; a higher rating can replace a lower one.
**Source:** NEC Article 800 (and 805) for communications cable, Article 725 (722 in 2023) for Class 2, Article 820 for coax, with their substitution tables.
**Cite:** NEC 725; 800; 820

### nec-support: Cable support
**Proposed:** cable is supported by the building structure with listed hardware, not laid on ceiling tiles or tied to ceiling grid wires, pipes, or conduit (same rule as the signed-off access item).
**Source:** NEC 725.24 and 800.24 (mechanical execution of work), 300.11.
**Cite:** NEC 725.24; 800.24

### firestop: Firestop penetrations
**Proposed:** every penetration through a fire-rated wall or floor is sealed with a listed firestop system for that wall and cable.
**Source:** NEC 300.21 (spread of fire), 725.3, 800.26; IBC Ch. 7 (penetrations).
**Cite:** NEC 300.21; IBC Ch. 7

### outdoor-cable: Outdoor and underground cable
**Proposed:** outdoor runs use outdoor-rated, UV-resistant cable; underground runs use gel-filled or direct-burial rated cable, since buried conduit is a wet location and indoor cable isn't allowed in it.
**Source:** NEC 300.5(B) (underground installations are wet locations), 310.10 and the cable listings.
**Cite:** NEC 300.5(B)

### outdoor-surge: Surge protection outside the building
**Proposed:** copper runs leaving the building get a surge protector at the building end (and the camera end on poles), bonded to the building grounding electrode system with a short, straight conductor; fiber between buildings is better.
**Source:** NEC 800.90 and 800.100 for communications circuits entering a building; industry practice for campus and pole runs.
**Cite:** NEC 800.90; industry practice

### pole-grounding: Pole grounding
**Proposed:** metal camera poles are bonded and grounded as part of the electrical work for the pole, with lightning protection where the design calls for it, coordinated with the electrician.
**Source:** NEC Article 250 (bonding and grounding); NFPA 780 (lightning protection).
**Cite:** NEC 250; NFPA 780

## Recording and storage

### storage-margin: Storage headroom
**Proposed:** plan storage about 20% above the calculated amount, because bitrates rise at night, in rain, and in busy scenes.
**Source:** design practice and manufacturer storage calculators. No code section. The Storage calculator uses 20%.
**Cite:** Design practice

### surveillance-drives: Surveillance drives
**Proposed:** use surveillance-rated or enterprise drives built for 24/7 writing; desktop drives fail early in recorders.
**Source:** drive manufacturer data (workload ratings); recorder manufacturer compatibility lists.
**Cite:** Manufacturer data

### ups-recorder: UPS for the recorder
**Proposed:** put the recorder, core PoE switch, and internet modem and router on a UPS sized for the customer's runtime; most CCTV has no code standby requirement.
**Source:** industry practice. No general code requirement for CCTV standby (unlike fire and intrusion); some specs and regulations set one.
**Cite:** Industry practice

### hardening: Hardening
**Proposed:** change every default password to one unique to the site, turn off unused services (UPnP, unused P2P cloud, Telnet, SSH), and update firmware on install and service visits.
**Source:** CISA and manufacturer hardening guides; industry practice.
**Cite:** CISA; manufacturer guides

### no-port-forward: No port forwarding
**Proposed:** don't port-forward camera or recorder ports to the internet; use the manufacturer's cloud service with multi-factor login, or a VPN.
**Source:** CISA guidance on internet-exposed devices; manufacturer hardening guides.
**Cite:** CISA; manufacturer guides
