# Intrusion Troubleshooting Guides

One guide per common service call, for the Troubleshoot tab. Each guide is a step-by-step flowchart: do the step, then follow the result. Always put the account **on test** with the central station before you trip anything, and take it off test when you're done.

---

## 1. Zone shows trouble or fault

**Symptom:** keypad shows a trouble, fault, or "check" on a hardwired zone.

1. Note the zone number and look it up on the zone list. Is it a wireless zone? → Go to Guide 7.
2. Look at the device. Is it physically damaged, missing, or its cover off? → Repair or replace; restore the tamper.
3. Remove the zone wires from the panel and meter them (Reference: *Meter readings on a zone*).
   - Reads normal EOL value → wiring is good. Check the panel terminal (loose screw, corrosion) and the zone's programmed EOL setting. Swap the wires to a known good zone to see if the problem follows the wire or stays with the panel input.
   - Reads 0 Ω (short) → go to step 4.
   - Reads open → go to step 5.
   - Reads a wrong value → wrong or extra resistor, or a high-resistance splice. Find the EOL and check every splice.
4. **Short:** look for a staple through the cable, a pinched wire behind trim, a crushed cable in a door frame, or water in a splice. Split the run in half at an accessible device and test each half to narrow it down.
5. **Open:** check each contact with its magnet in place (it should read closed). Check splices and the EOL itself. Split the run at accessible points to narrow it down.
6. After repair, meter again, re-land, confirm the zone restores, and walk-test it.

> **Field tip (David to add):** fastest way you've found to locate a short in a finished wall.

---

## 2. Zone won't restore / system won't arm

**Symptom:** keypad shows "not ready" or a zone open, and the customer can't arm.

1. Check the keypad for which zone is open. Is that door or window actually open? → Close it.
2. Close the opening. Does the zone still show open?
   - Check magnet alignment and gap. Has the door sagged or the window shifted? Realign or use a wide-gap contact.
   - Check for a missing magnet (painted over, knocked off, removed during window replacement).
3. If it's a motion, is something moving in its view (fan, curtains, pet, balloon)? The zone may restore after a few seconds of no motion.
4. Still open: meter the zone (Guide 1, step 3).
5. **Short-term fix for the customer:** bypass the zone so they can arm, and tell them clearly that the zone is unprotected until it's repaired. Note it on the ticket.

---

## 3. False alarms from a specific zone

**Symptom:** the central station or customer reports repeated alarms from one zone with no break-in.

1. Pull the event history: what times, what arming mode, and was it the same zone each time?
   - Alarms right after arming or right at entry → likely user error or delay settings. Check entry/exit times, check that motions on the entry path are interior follower (Module 7), retrain the customer.
2. **Contact:** check gap and alignment. Does the zone open when you push or rattle the door? Wind and loose doors cause this. Tighten, realign, or replace with a wide-gap contact.
3. **Motion:** look for heat sources, HVAC vents, sunlight, curtains, fans, new furniture pets can climb, or a recent change in pets. Check mounting height and pet setting. Consider dual-tech or relocating.
4. **Glass break:** check sensitivity, nearby noise sources (dishes, dog barking, TV), and whether it was moved closer to a noise source.
5. **Wiring:** an intermittent open causes alarms with nothing visible. Meter the zone while wiggling the cable at the device, splices, and panel. Look for corroded splices in damp areas.
6. **Wireless:** check signal strength and battery. Weak signal can cause missed restores. See Guide 7.
7. Set or verify **swinger shutdown** so one bad zone can't keep dispatching while you fix it.
8. Document what you found and changed.

---

## 4. Low battery or AC loss

**Symptom:** keypad shows low battery, battery trouble, AC loss, or power trouble.

1. **AC loss first:** is the transformer plugged in? Is the outlet live (on a switch, tripped GFCI, or tripped breaker)? Reconnect or have the customer reset the breaker or GFCI.
2. Meter AC at the panel's AC terminals (AC volts). Expect about the transformer's rated output. Low or zero with the transformer plugged in → check the wire run, then the transformer.
3. **Battery:** disconnect the battery and meter it.
   - A 12 V sealed lead-acid battery at roughly 12.6 V or more is charged; much lower than 12 V usually means it's weak or dead. A battery reading OK unloaded can still fail under load.
   - Check the battery date. Many companies replace panel batteries every 3 to 5 years.
4. Check charging voltage at the panel's battery leads with the battery disconnected (commonly around 13.5 to 13.8 VDC). Low charge voltage points to a panel or transformer problem.
5. Replace the battery if it's old or fails a load test. Give it time to charge; many panels run a battery test periodically and may show the trouble until the next test or a manual test clears it.
6. Recurring low battery with a new battery: the standby load may be too high. Measure total aux current and run the Battery Standby calculator. Add a power supply if needed.

---

## 5. Keypad blank, dead, or "system busy"

**Symptom:** keypad display is blank, frozen, or shows busy/not available.

1. Are all keypads affected, or just one?
   - **All keypads blank** → panel power problem. Check AC and battery (Guide 4). Check the aux output fuse or PTC; a short on aux can shut down every keypad. Disconnect aux devices one group at a time to find the short.
   - **One keypad** → continue.
2. Meter voltage at the keypad's power terminals. Expect near panel aux voltage.
   - Low voltage → voltage drop (long run or thin wire) or a bad splice. Use the Voltage Drop calculator; upgrade wire or add a power supply.
   - Zero → open in the power wires. Check splices and terminals.
3. Check the keypad's address. A duplicate or out-of-range address causes errors or no display.
4. **"Busy" or "system not available"** can also mean another keypad or software is in programming mode, or the panel is still powering up. Wait a minute and exit programming at the other keypad or software.
5. Swap in a known good keypad at that location to tell keypad failure from wiring.

---

## 6. Bus or keypad communication errors

**Symptom:** module or keypad communication failure, bus fault, or supervision loss on a bus device.

1. Check the keypad or event history for which address is failing.
2. Check that the device's address is set correctly and isn't duplicated.
3. Meter power at the device under load.
4. Check the data wires: correct terminals (wire colors vary by brand), tight connections, no reversed data lines.
5. Check bus length and topology against the manual. Long runs or a mix of star and daisy chain can exceed limits.
6. Check for interference: bus cable running alongside AC power, fluorescent ballasts, or motors.
7. Disconnect bus devices one at a time (power down first, if the manual says so) to find a device that's dragging the bus down.
8. After a fix, many panels need the bus devices re-enrolled or supervision reset.

---

## 7. Wireless sensor supervision loss

**Symptom:** a wireless zone shows missing, supervision, or check trouble.

1. Is the sensor still there and in one piece? Customers sometimes remove sensors during painting or window replacement.
2. Check the sensor battery. Replace with the exact type the manufacturer lists.
3. Trip the sensor and watch signal strength in test mode.
   - Weak → something changed: new metal (appliance, mirror, foil insulation, metal blinds), a moved receiver, or a remodel. Relocate the sensor or receiver, or add a repeater.
   - No signal at all → confirm the serial number is enrolled to that zone. Re-enroll if needed.
4. Check the receiver: power, antennas, and location (not inside a metal can or next to the electrical panel).
5. If several sensors drop at once, suspect the receiver, RF jamming, or interference from new wireless equipment.
6. Clear the trouble per the panel's procedure and confirm the sensor checks in.

---

## 8. Failure to communicate with the central station

**Symptom:** panel shows communication failure, or the central station reports a missed periodic test or no signals.

1. Ask the central station what they last received and when.
2. **Cellular:** check signal strength at the communicator. Has something blocked it (a new metal door, panel moved)? Is the communicator activated and the account in good standing on the provider portal? Is it on a network that's been retired? → Remote antenna, relocate, or upgrade the communicator.
3. **IP:** is the customer's internet up? Did they change the router or internet provider? Check the Ethernet cable and link lights. The panel may need a new IP setting or DHCP.
4. **Phone line (POTS):** is there dial tone? Many landlines have been replaced by VoIP or fiber that may not pass alarm signals reliably. Recommend cellular.
5. Check programming: account number, receiver path, and reporting format match what the central station expects.
6. Send a test signal and confirm with the operator that it arrived with the right account.

---

## 9. Siren not sounding, or won't shut off

**Symptom:** no sound on alarm, or the siren keeps sounding after disarm.

**No sound**
1. Check bell cutoff and siren programming (some installs or partitions are set to silent).
2. Meter the bell output during an alarm (on test with the central station). Expect about panel DC voltage.
   - Voltage present → wiring to the siren or the siren itself. Check polarity, splices, and the siren.
   - No voltage → check the bell fuse or PTC, the bell supervision EOL if the panel needs one, and the bell output programming.
3. Check total siren current against the bell output rating.

**Won't shut off**
1. Disarm with a valid code. Still sounding? Check whether it's a different device (a smoke's built-in sounder, a separate system).
2. A 24-hour zone (fire, panic, tamper) may still be active. Clear the cause, then reset.
3. A tamper on an exterior siren box can keep it sounding; check the tamper and cover.
4. If you must silence it while troubleshooting, disconnect the siren wires at the panel and the self-contained siren's battery, and note it on the ticket.

---

## 10. Tamper troubles

**Symptom:** tamper trouble on a zone, keypad, module, siren, or panel.

1. Which device? Check the keypad or event history.
2. **Panel or module cover:** is the door closed and the tamper switch engaged?
3. **Wireless sensor:** is the cover snapped on fully? Was the sensor pulled off the wall?
4. **DEOL zone tamper:** the zone wiring reads open. Meter it (Guide 1). Check that both resistors are installed and correct.
5. **Siren tamper:** check the cover and tamper loop.
6. Clear the tamper per the panel; some need a code or a reset after the device restores.

---

## 11. Motion detector not triggering or over-triggering

**Symptom:** walk test doesn't trip the motion, or it trips with nothing there.

**Not triggering**
1. Is the LED enabled for testing? (Many detectors disable it after setup.)
2. Meter power at the detector. Low or none → aux wiring or voltage drop.
3. Is it mounted at the rated height and aimed across the traffic path? Walking straight at a PIR is the weakest detection direction.
4. Is something blocking it (new shelving, a plant)?
5. Check jumper or DIP settings (pulse count, sensitivity, pet mode).
6. Meter the alarm contacts while walking in front of it. They should open. No change → replace the detector.

**Over-triggering** → see Guide 3, step 3.

---

## 12. Ground fault

**Symptom:** panel shows a ground fault trouble.

1. Confirm the panel's earth ground connection is correct.
2. Disconnect zones and outputs one at a time (or in halves), clearing the trouble between each, until the ground fault clears. The last thing you removed has the fault.
3. Meter each conductor of that circuit to earth ground. Any reading means a wire is touching ground.
4. Look for a wire touching a metal box, a staple through a cable into a metal stud or conduit, water in an outdoor splice, or an outdoor device with damaged cable.
5. Repair, re-land, and confirm the trouble clears.

---

*These guides are a training aid. They don't replace the panel's installation manual, applicable codes, or your company's procedures.*
