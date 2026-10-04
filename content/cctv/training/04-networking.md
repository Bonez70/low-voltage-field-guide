# Module 4: Networking for Video

**You'll be able to:** address cameras on a network, size switches and uplinks for video, budget PoE power, and set up remote viewing without opening the system to the internet.

---

## Lesson 4.1: IP addresses and subnets

Every camera, recorder, and switch needs a unique **IP address** on the same network (or a routed path between networks).

- **Private ranges** (used inside buildings, never routed on the internet): 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255. [SRC:private-ip]
- **Subnet mask:** 255.255.255.0 (written /24) means the first three numbers name the network and the last one names the device: 192.168.1.1 to 192.168.1.254, 254 usable addresses.
- **Gateway:** the router's address. A camera with no gateway or the wrong one still records on the local NVR but can't reach a time server or the cloud.
- **DHCP vs static:** cameras should have **static addresses** (or DHCP reservations) so the recorder always finds them. A camera that gets a new address from DHCP after a power outage drops off the recorder.

**Keep a list.** Every job gets an IP schedule: camera name, location, IP, MAC address, model, and switch port. It's the first thing you'll want on the service call.

**Many NVRs** have a built-in PoE switch and put cameras on their own internal network (often 10.1.1.x or 192.168.254.x) that the customer's network never sees. Simple, and good for security, but the cameras can't be reached directly from the LAN.

---

## Lesson 4.2: Switches, VLANs, and bandwidth

**Switch choice:**

- **Gigabit** ports and uplinks for anything beyond a handful of cameras.
- **Managed** switches let you set VLANs, see port power, and power-cycle a camera remotely. Worth it on commercial jobs.
- **Uplink math:** add up the bitrate of every camera behind the uplink, plus any live viewing. A 1 Gbps uplink is comfortable up to a few hundred Mbps of steady video; don't plan to run it near full.

**VLAN:** a separate virtual network on the same switches. Put cameras on their own VLAN so office traffic can't slow video and office computers can't reach cameras. The customer's IT department usually controls this; get their IP plan before you arrive.

**Multicast** sends one stream to many viewers without multiplying traffic, but it needs switches set up for it (IGMP snooping). Most small systems use unicast and never touch it.

---

## Lesson 4.3: PoE

**Power over Ethernet** sends DC power on the same cable as data. The switch (or injector) is the **PSE**; the camera is the **PD**.

| Standard | Class | At the switch port | At the device |
|---|---|---|---|
| 802.3af (PoE) | 1 | 4.0 W | 3.84 W |
| 802.3af (PoE) | 2 | 7.0 W | 6.49 W |
| 802.3af (PoE) | 3 | 15.4 W | 12.95 W |
| 802.3at (PoE+) | 4 | 30 W | 25.5 W |
| 802.3bt Type 3 | 5 / 6 | 45 / 60 W | 40 / 51 W |
| 802.3bt Type 4 | 7 / 8 | 75 / 90 W | 62 / 71.3 W |

[SRC:poe-classes]

The difference between the port and the device is what the cable loses over 100 m.

**Budgeting a switch:**

1. Add up each camera's **maximum** draw from the spec sheet: IR on, heater on, PTZ moving. Not the typical number.
2. Compare to the switch's **total PoE budget** (often far less than ports × 30 W).
3. Design to no more than about **80% of the budget**. [SRC:poe-headroom]
4. Some switches reserve the **class maximum** for each port, not the actual draw. A Class 4 camera then takes 30 W of budget even if it uses 9 W.

Use the **PoE Budget calculator**.

- PoE won't run past 100 m on the same cable (Lesson 5.1). Extenders and fiber with a local PoE switch go farther.
- Outdoor PTZs with heaters often need **802.3bt** or a separate 24 VAC supply. Check before you order the switch.

---

## Lesson 4.4: ONVIF, protocols, and ports

**ONVIF** is the industry standard that lets one maker's camera work on another maker's recorder.

- **Profile S:** live video and PTZ. The basic one.
- **Profile T:** H.265, advanced streaming, and events (motion, tamper, analytics).
- **Profile G:** recording on the camera's memory card and playing it back.
- **Profile M:** analytics metadata (people, vehicles, attributes). [SRC:onvif-profiles]

ONVIF gets you video. It often doesn't get you every analytics feature or setting; mixing brands means testing the features that matter before you sell the job.

**Common ports** (the recorder or camera manual has the real list):

| Port | What |
|---|---|
| 80 / 443 | Web page (HTTP / HTTPS); ONVIF commands |
| 554 | RTSP video streams |
| 3702 UDP | ONVIF device discovery |
| 123 UDP | NTP time |

[SRC:ports]

---

## Lesson 4.5: Remote access

Customers want video on their phones. How you deliver it decides whether the system gets hacked.

- **Don't port-forward** camera or recorder ports to the internet. Internet scanners find exposed recorders within hours, and many recorders have had serious security flaws. [SRC:no-port-forward]
- **Better:** the manufacturer's cloud or relay service with strong passwords and multi-factor login, or a **VPN** into the site's network.
- **UPnP** on the recorder or router opens ports automatically. Turn it off. [SRC:hardening]
- Remote viewers use the **sub stream**. A site with a slow upload connection can't send many main streams at once.

Module 8 covers hardening in full.

> **Field tip (David to add):** how you handle a customer who wants their recorder "on the internet like before."

---

## Module 4 quiz

1. Why should cameras have static addresses or DHCP reservations?
2. Which three address ranges are private?
3. A camera records fine but its time is wrong and it can't reach the cloud. What setting do you check?
4. What's a VLAN for on a video job?
5. What does an 802.3at (PoE+) port supply at the switch, and how much reaches the device?
6. A switch has a 370 W PoE budget. What's the most you should plan to load it?
7. Why use maximum draw, not typical, for PoE budgeting?
8. What ONVIF profile covers H.265 and events?
9. Why not port-forward the recorder?

**Answer key:** 1) So the recorder always finds them after a power outage. 2) 10.x.x.x, 172.16.x.x to 172.31.x.x, and 192.168.x.x. 3) The gateway (and DNS). 4) Keeping camera traffic separate from office traffic, for performance and security. 5) 30 W at the port, 25.5 W at the device. 6) About 296 W (80%). 7) IR, heaters, and PTZ motors draw much more than typical, and a switch that runs out of budget shuts ports off. 8) Profile T. 9) Exposed recorders are found by scanners fast and are a common way systems get hacked.
