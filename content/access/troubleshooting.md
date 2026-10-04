# Access Control Troubleshooting Guides

One guide per common access service call, for the Troubleshoot tab. Each guide is a step-by-step flowchart: do the step, then follow the result.

**Every guide starts the same way:** tell the building contact what you're doing, put monitored door alarms on test, and make sure the door you're working on can always be opened from the egress side while you work. [VERIFY:safety-notify] [VERIFY:safety-egress] Anything that touches the fire alarm release gets the fire alarm contractor and the fire alarm account on test first. [VERIFY:safety-fa-interface]

---

## 1. Valid card reads, door doesn't unlock

**Symptom:** reader beeps and flashes green (or the log shows access granted), but the door stays locked.

1. Check the event log. Does it show **granted** for that card at that door? No → it's a programming or card issue, go to Guide 3.
2. Listen and feel at the lock while someone badges. Does the strike or lock click?
   - Clicks but door won't open → mechanical: go to step 6.
   - No click → electrical: go to step 3.
3. Meter the lock output at the controller or power supply while badging. Voltage switches on (or off, for fail-safe) → the controller side is fine; go to step 4. Nothing changes → check the relay programming (fail-safe vs fail-secure setting), the relay's wiring (NO vs NC contact), and the output fuse or PTC on the power supply.
4. Meter **at the lock, energized** (Reference: *Meter checks at the door*). Low voltage → voltage drop, a loose splice, or a thin power transfer hinge. Use the **Voltage Drop calculator**.
5. Correct voltage at the lock but no action → lock set for the wrong voltage, wrong fail mode, or a failed coil. Check the jumper and the label.
6. **Strike clicks but door won't open:** preload. Push the door closed firmly and badge again. Opens → the door is pushing on the keeper (weatherstrip, warped door, closer adjustment, air pressure). Fix the door alignment or use a high-preload strike.
7. Check that the lockset's latch lands in the keeper, and that the deadlatch isn't falling into the keeper gap.

> **Field tip (David to add):** the quickest way you prove preload on a strike.

---

## 2. Reader dead: no LED, no beep

**Symptom:** reader shows no light and doesn't respond to cards.

1. Is the controller online and are other readers on it working? Not → go to Guide 9 (it may be power for the whole panel).
2. Meter reader power **at the reader**, red to black. About 12 V (or the reader's rating) → go to step 4. Zero → step 3. Low → voltage drop or overload; use the **Reader Cable calculator**.
3. Meter at the controller's reader terminals. Voltage there but not at the reader → open cable or bad splice. No voltage at the controller → reader power fuse or PTC tripped (often from a short in the reader cable). Disconnect the reader and see if it recovers.
4. Power is good but reader is dead → failed reader, or a reader that needs to be configured (OSDP address or mode). Swap with a known-good reader of the same model.
5. Outdoors: look for water in the back box, corroded terminals, or vandalism.

---

## 3. Card denied, or reads the wrong number

**Symptom:** a cardholder who should have access is denied, or the log shows a different card number than expected.

1. Read the denial reason in the log:
   - **Unknown card** → card not in the system, or the number doesn't match. Go to step 3.
   - **Wrong time / schedule** → check the access level's schedule and holidays.
   - **Wrong door / no access** → check the cardholder's access levels include this door.
   - **Expired / disabled** → check the card's activation and expiration dates.
2. Check the **controller's clock and time zone**. A controller off by an hour (daylight saving) denies cards at the edges of schedules.
3. **Unknown card:** compare the number in the log with the number in the cardholder record. Facility code wrong → card enrolled with the wrong format or facility code. Number completely different every read → Wiegand D0 and D1 swapped, or the wrong format set on the reader port.
4. Changes in the software haven't reached the controller → check that the controller is online and the database download finished.
5. One card fails everywhere, others work → damaged card or a card technology the readers don't read.

---

## 4. False forced-door alarms

**Symptom:** door forced open alarms with no break-in.

1. Look at the pattern in the log. Forced alarm right after a valid card → the DPS is seeing the door open after the unlock time ended, or relock-on-close isn't set. Forced alarm when people walk out → REX problem.
2. **REX:** walk up to the door from inside. Does the REX input change state before your hand reaches the hardware? No → re-aim the motion REX toward the door hardware, or use a hardware REX. A REX that trips too late is the most common cause.
3. **DPS:** open and close the door while watching the input. Bounces open and closed (door rattles, wind, air pressure) → adjust the DPS, increase the gap tolerance, or fix the door. Misaligned magnet → realign.
4. **Door doesn't latch:** a door that pops open on air pressure or a weak closer shows as forced. Fix the closer and latching.
5. **Mechanical key override:** someone is using a key. That's correctly reported as forced unless the lock reports key use.
6. Check unlock time: too short for slow users → extend it or give them extended unlock.

---

## 5. Held-open alarms

**Symptom:** door held open alarms when the door looks closed, or too many held-open alarms.

1. Is the door actually closed and latched? No → closer adjustment, a sweep or threshold dragging, or a propped door (talk to the customer).
2. Door is closed but the DPS reads open → DPS gap too large, magnet missing or misaligned, broken wire. Meter the DPS disconnected: near 0 Ω with the door closed, open with it open (Reference: *Meter checks at the door*).
3. Doors that legitimately stay open (deliveries, loading docks) → lengthen the held-open time or put the door on a schedule, with the customer's approval.
4. Pre-alarm beeping without anyone noticing → move the reader beeper or add a local sounder.

---

## 6. Maglock won't hold, or holds weakly

**Symptom:** door can be pulled open while the maglock should be locked.

1. Check the bond sensor or status LED on the maglock, if it has one. Not bonded → step 2.
2. **Voltage at the maglock, energized.** Low → voltage drop or wrong voltage setting; a 24 V-set maglock on 12 V holds weakly.
3. **Armature:** it must float on its rubber washers. Over-tightened, it can't sit flat. Loosen to factory spec.
4. **Alignment:** the armature should meet the magnet face fully. A door that sags or a bent bracket leaves a gap. Even paper or paint on the faces cuts holding force a lot.
5. **Faces:** clean rust or debris off both faces; don't grind them.
6. Door opens on REX, push button, or fire alarm when it shouldn't → check those inputs aren't stuck (a failed REX holding the lock released, or a fire alarm relay in alarm).

---

## 7. Electric strike won't release, or releases intermittently

**Symptom:** card grants and the strike clicks (or should), but the door stays latched some or all of the time.

1. **Preload test:** push the door closed hard, then badge. Works only when pushed → preload. Fix the door, adjust the strike position, or use a high-preload strike.
2. **Voltage at the strike, energized.** Low → voltage drop or a weak power transfer. Correct → step 3.
3. **Fit:** the latch must sit fully in the keeper pocket with room to move. A latch that rides on the keeper edge, or a deadlatch in the keeper gap, binds.
4. **Wrong mode:** a fail-safe strike on a fail-secure output (or the reverse) does the opposite of what you expect.
5. **Continuous duty:** a strike held unlocked for hours on a schedule must be rated for continuous duty; an intermittent strike overheats and fails.
6. Intermittent on cold days → door shrinks or swells; adjust the strike and check the closer.

---

## 8. Door won't relock, or stays unlocked

**Symptom:** door stays unlocked after the unlock time, or is unlocked when it should be locked.

1. Check the door's mode and schedule in the software. Is it on a scheduled unlock, a manual override, or a lockdown release someone forgot to undo?
2. **REX stuck active** (motion REX seeing a heater, a sign moving in air, or a door gap) and REX set to unlock → the lock keeps cycling open. Watch the REX input.
3. **Fire alarm release still active** → the fire alarm panel isn't reset or its relay is stuck. Check with the fire alarm contractor. [VERIFY:fa-release]
4. **Fail-safe lock with no power** → check the power supply output, fuse, and battery (Guide 11).
5. Relay welded closed on the controller → swap to a spare relay or replace the module, and add a diode at the lock so it doesn't happen again.
6. Strike held mechanically → a latch with a hold-back (dogged exit device) or a taped latch. Not an electrical problem.

---

## 9. Controller offline or communication lost

**Symptom:** software shows a controller, door module, or reader offline.

1. Is it one controller, a group, or everything? Everything → the server, software service, or network on the server side.
2. **One IP controller:** does it have power and a link light at its network port? Ping it from a workstation on the same network. No reply → cable, switch port, VLAN change, or an IP address conflict. Ask IT what changed.
3. **PoE controller:** check the switch's PoE budget and port status. A switch that's out of PoE budget turns off ports.
4. **RS-485 door modules:** check the bus wiring (A/B polarity, termination at the ends, shield grounded once), addresses (two modules on the same address), and the baud rate.
5. **OSDP reader offline:** address, baud, and Secure Channel key must match. A reader replaced with a new one needs to be re-keyed.
6. Controller online but doors not working while offline → check that it has its database (some controllers lose it after a power-down with a dead backup battery).

> **Field tip (David to add):** the first question you ask IT when a controller drops off.

---

## 10. Doors didn't release on fire alarm (or won't relock after reset)

**Symptom:** fail-safe doors stayed locked during a fire alarm or a test, or stay unlocked after the fire alarm is reset.

**This is a life safety failure. Tell the building owner right away, and keep the doors unlocked or posted until it's fixed.** [VERIFY:fa-release]

1. Get the fire alarm contractor and put the fire alarm account on test. [VERIFY:safety-fa-interface]
2. Activate the release and meter the fire alarm interface input at the access power supply. Does the contact change state? No → the fire alarm relay isn't operating (programming or wiring on the fire alarm side).
3. Contact changes but locks stay powered → the FA input is jumpered, wired to the wrong terminals, or the locks are on an output the FA input doesn't control (a second supply, or the controller's own lock output). Every fail-safe egress lock must lose power on alarm.
4. A push button or REX wired as a bypass around the release → rewire so the fire alarm contact cuts lock power directly. [VERIFY:fa-release]
5. **Won't relock after reset:** the FA relay is still in alarm or not reset, or the power supply has a latching FA input that needs its own reset. Check the supply's FA input setting.
6. Retest every door the release controls, and record the test. [VERIFY:fa-release-test]

---

## 11. Power supply troubles: AC loss, low battery, blown output

**Symptom:** AC fail or low battery reported, or one or more doors lost power.

1. **AC fail:** check the breaker and the AC input at the supply's terminals. Breaker on but no AC → the circuit or a switched outlet. Label the breaker so it doesn't happen again.
2. **Low battery:** with AC on, meter the battery. Disconnect it and meter the charger output (often about 13.6 V for a 12 V system). Charger good, battery low after a day of charging → replace the batteries (both in a 24 V pair). Date the new ones. [VERIFY:batt-replace]
3. **Output dead:** find the fuse or PTC for that output. Blown or tripped → disconnect the load and look for a short: a pinched cable at the door, a backward diode, or a failed lock.
4. **Overloaded:** add up the load with the **Access Power calculator**. Over about 80% of the rating, or batteries that can't last the required standby → add a supply. [VERIFY:psu-80]
5. Supply cycling or hot → overload or a failing supply.

---

## 12. Controller resets or readers glitch when a lock operates

**Symptom:** the controller reboots, a reader beeps oddly, or the wrong number reads when a door unlocks or relocks.

1. Does it happen exactly when the lock changes state? Yes → lock kickback or inrush.
2. Check for a **suppression diode at the lock** (or built-in suppression). Missing → add one at the lock, band to +. [VERIFY:diode]
3. Is the lock powered from the **same supply or output** as the controller or readers? Yes → move locks to a separate supply or output.
4. Solenoid latch retraction exit device → needs a supply made for its inrush. [VERIFY:exit-device-inrush]
5. Lock and reader cables bundled together over a long run, with the reader shield not grounded → ground the shield at the controller end and separate the cables where you can. [VERIFY:shield-ground]
6. Recheck after the fix by cycling the lock twenty times while watching the controller and reader.
