# CCTV Troubleshooting Guides

One guide per common video service call, for the Troubleshoot tab. Each guide is a step-by-step flowchart: do the step, then follow the result.

**Every guide starts the same way:** tell the customer before you take a camera or the recorder offline, and put monitored video on test with the monitoring center. [SRC:safety-notify] Leave footage on the recorder, not on your phone. [SRC:safety-privacy-footage] Ladders and lifts by the rules in Lesson 1.4. [SRC:safety-height]

---

## 1. IP camera shows no video

**Symptom:** one camera shows "video loss," "offline," or a black tile on the recorder.

1. Do other cameras on the same switch work? No → go to step 6 (switch or uplink).
2. Look at the switch port: link light on, and is the port giving PoE power? No link → step 3. Link and power but no video → step 4.
3. **No link:** test the cable with a tester, then with a known-good short cable at the camera. Re-terminate if it fails. A run that passes continuity but fails under load is a bad termination or CCA cable (Lesson 5.1). Over 100 m → extender or fiber.
4. **Link but no video:** ping the camera's IP from the recorder or a laptop. No reply → IP changed (DHCP), IP conflict, or wrong subnet; go to Guide 3. Replies → log in to the camera's web page. Does it show video there?
   - Yes → the recorder side: wrong password stored on the recorder (changed on the camera), wrong stream or codec setting, or the recorder is out of incoming bandwidth (Lesson 6.1).
   - No → camera fault. Power-cycle it from the switch port; factory reset as a last resort; replace.
5. Camera works on the bench but not on the wall → cable, water in the connection (open the junction box), or PoE power short of what the camera needs at night (Guide 2).
6. **Several cameras down on one switch:** check the switch's power and uplink. PoE budget exhausted → the switch shuts off the last ports to ask for power (Guide 2).

---

## 2. Camera keeps rebooting or drops off at night

**Symptom:** the camera goes offline for a minute and comes back, often at dusk or in cold weather.

1. **Night only?** IR turning on raises power draw. Check the switch's PoE budget and the port's draw. Over budget → move cameras, lower the load, or upgrade the switch. Use the **PoE Budget calculator** with maximum draws. [SRC:poe-headroom]
2. **Cold weather only?** The heater turned on. Cameras with heaters often need PoE+ or 802.3bt; check the port's class against the spec sheet. [SRC:poe-classes]
3. **Non-PoE camera:** measure voltage at the camera with IR on. Low → voltage drop or a weak power supply output; use the **Voltage Drop calculator**. [SRC:camera-voltage]
4. **Random times:** check the switch log for PoE faults and link flaps. Re-terminate both ends; check for water in the junction box.
5. **Every day at the same time:** a scheduled reboot in the camera's maintenance settings, or a timer on the outlet or UPS powering the switch.
6. Still rebooting on a known-good cable and port → update firmware, then replace the camera.

> **Field tip (David to add):** the reboot cause that fooled you the longest.

---

## 3. Can't find the camera on the network

**Symptom:** a new or reset camera doesn't show up, or the recorder can't reach a camera after a change.

1. Run the manufacturer's discovery tool or the recorder's device search on the same switch. Found → note its IP and go to step 4.
2. Not found → check link and PoE at the switch port (Guide 1, steps 2 and 3).
3. Look up the camera's MAC address (label on the camera) in the switch's MAC table to confirm it's talking. Factory default IP is in the manual; put a laptop on that subnet to reach it.
4. **Wrong subnet:** the camera has 192.168.1.x and the recorder is on 10.1.1.x. Change the camera to the right address from your IP schedule.
5. **IP conflict:** two devices on the same address drop in and out. Unplug the camera and ping the address; a reply means something else has it.
6. **Camera worked, then vanished after a power outage** → it was on DHCP and got a new address. Set a static address or a DHCP reservation.

---

## 4. Blurry at night, or white haze from IR

**Symptom:** the image is sharp by day but soft, hazy, or washed out at night.

1. **Soft at night only:** the lens focus shifts under IR. Refocus with IR on (auto-focus in night mode on motorized lenses). [SRC:ir-wavelength]
2. **White haze or glow:** IR bouncing back into the lens.
   - Dome: clean the bubble inside and out (no fingerprints), and seat the IR skirt against the bubble.
   - Eaves, walls, or a soffit in the bottom or edge of the view: re-aim or move the camera away from the surface.
   - Spider webs: clean, and treat with a spider deterrent.
3. **Faces white, background dark:** IR too strong close up. Turn on smart IR or lower IR power.
4. **Blurry moving people at night, sharp still objects:** slow shutter. Cap the shutter around 1/60 to 1/120 s and add site lighting if it gets too dark.
5. **Grainy and the bitrate jumps at night:** gain noise. Lower the maximum gain, add light, or accept it and plan storage for it.
6. **Flips between color and black-and-white at dusk:** set the day/night threshold or delay, or schedule the switch.

---

## 5. Faces are dark against bright doorways

**Symptom:** people at a glass door or window show as dark silhouettes.

1. Turn on **WDR** (true WDR, not digital, where the camera has it).
2. Still dark → try BLC or HLC, or set a region of interest for exposure on the face area.
3. Re-aim so less of the bright window or sky fills the view.
4. Move the identify camera to look at people **from the inside wall toward the room**, not out the door, or add lighting on the interior side.
5. The camera has no real WDR → replace it with one rated for the scene (120 dB or more is a common spec).

---

## 6. Video choppy, lagging, or smeared

**Symptom:** live or recorded video stutters, freezes, lags, or moving people smear.

1. **Live only, recording fine:** the viewing device or link is the bottleneck. Set grids and the phone app to the **sub stream**.
2. **Remote only:** check the site's upload speed against the streams being viewed.
3. **Recording choppy too:** check the recorder's incoming bandwidth against its rating, and the switch uplink against the total bitrate (Lesson 4.2).
4. **Smeared motion:** the bitrate cap is too low for the scene (CBR or VBR maximum), or a smart codec is too aggressive. Raise the cap or turn the smart codec down.
5. **Drops on one camera:** cable errors on that switch port (CRC errors), a duplex mismatch, or a failing termination. Re-terminate and test.
6. **Frame rate set low** on purpose to save storage? Raise it where motion matters (Lesson 2.2). [SRC:frame-rate]

---

## 7. Recording gaps or no recording

**Symptom:** live video works, but the recording has gaps or nothing at all.

1. Check the recorder's status page: drives present and healthy? A failed or full drive with overwrite off stops recording. Go to Guide 8 for drives.
2. Check the **schedule** for that camera: continuous, motion, or nothing at that time?
3. **Motion recording missed it:** look at the motion or analytics zones and sensitivity. Walk the scene and watch the event indicator. Small or distant motion needs a closer zone or analytics.
4. **Gaps at the same time every night:** day/night switching or IR causing camera reboots (Guide 2), or the bitrate exceeding the recorder's limit at night.
5. **Gaps after power outages:** the recorder isn't on a UPS, or its drive took time to come back. [SRC:ups-recorder]
6. **Gaps that match network drops:** edge recording on the camera can fill them; check the switch and uplink.
7. After fixing: set alerts for recording failure and video loss, sent to someone who acts.

---

## 8. Storage doesn't last as long as it should

**Symptom:** the recorder keeps fewer days than the customer was promised.

1. Read the **actual bitrate** of every camera from the recorder. Night, rain, and busy scenes run higher than the planning numbers. [SRC:bitrate-typical]
2. Redo the math with real bitrates in the **Storage calculator**, with headroom. [SRC:storage-margin]
3. **Fixes without buying drives:** H.265 or a smart codec, VBR with a sensible cap, lower frame rate on overviews, motion or analytics recording on quiet cameras, sub stream recording off when not needed. [SRC:codec-savings]
4. Check the drive health and RAID status: a degraded RAID or a drive dropped out leaves less space.
5. Still short → add drives (check the recorder's maximum size and bays) or a larger recorder. Confirm the required days in writing. [SRC:retention]

> **Field tip (David to add):** the setting change that recovers the most days on an existing system.

---

## 9. Remote viewing doesn't work

**Symptom:** the phone app shows "offline" or can't connect from outside the building.

1. Does the app work on the site's Wi-Fi? Yes → the problem is the outside path; step 2. No → login or app setup; check the account, password, and that the recorder is reachable on the LAN.
2. Check the recorder's cloud or P2P status page: online? Offline → check the recorder's gateway and DNS settings and the site's internet. A firewall blocking outbound traffic needs the customer's IT.
3. Using a VPN → check the VPN connection on the phone first.
4. Connects but won't play → the phone is pulling the main stream on a slow connection. Set the app to the sub stream.
5. The old setup used **port forwarding** → don't restore it. Move the customer to the cloud service with multi-factor login, or a VPN. [SRC:no-port-forward]

---

## 10. Wrong time on recordings

**Symptom:** recordings are off by minutes or an hour, or cameras disagree with each other.

1. Check the recorder's time, time zone, and daylight saving setting.
2. Is it synced to an NTP server? It needs a working gateway and DNS to reach an internet time server, or point it at a local time source. [SRC:time-sync]
3. Set every camera to sync to the recorder or the same NTP source. Cameras added to many NVRs sync automatically; check that the option is on.
4. Off by exactly an hour → daylight saving setting or the wrong time zone.
5. Slowly drifting → no NTP at all; the clock is running free.
6. Note the time error before you fix it if there's an incident under review, so the exported video can be corrected. [SRC:evidence-export]

---

## 11. Rolling bars or interference on HD analog

**Symptom:** horizontal bars rolling up the picture, hum lines, snow, or color loss on coax cameras.

1. **Rolling dark bars:** a ground loop. The camera and DVR are grounded at different potentials (a camera on a metal pole or a different building). Use a ground loop isolator, isolate the camera from the pole, or go to fiber or UTP with baluns.
2. **Snow or loss on long runs:** too long for the format, or copper-clad steel coax. Check the distance against the spec. [SRC:coax-distance]
3. **Intermittent video:** BNC connectors. Replace twist-on BNCs with compression connectors matched to the cable.
4. **Interference near motors or lights:** reroute away from line voltage, or use shielded or twisted-pair with baluns.
5. **No video and wrong format:** set the camera's output format (TVI, CVI, AHD, CVBS) to one the DVR accepts, usually with the camera's menu button or the DVR's auto-detect.

---

## 12. PTZ won't move, or presets drift

**Symptom:** the PTZ doesn't respond to controls, or presets point at the wrong place.

1. Can you move it from its own web page? Yes → the recorder's PTZ setup: protocol, address, or user rights (the user needs PTZ permission).
2. No movement at all → power. PTZs need much more power than fixed cameras; check PoE class (often 802.3bt) or the 24 VAC supply under load. [SRC:poe-classes]
3. **Analog PTZ** (RS-485 control): check the address, protocol, baud rate, and polarity of the data pair.
4. **Presets drift:** run the PTZ's calibration or home function; check for a loose mount letting the housing twist.
5. **Moves on its own:** a guard tour, park action, or auto-tracking is set. Check the schedule and park settings.
6. Remind the customer a PTZ only sees one way at a time; critical spots need fixed cameras too.
