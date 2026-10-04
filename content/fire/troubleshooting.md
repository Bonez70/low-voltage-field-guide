# Fire Alarm Troubleshooting Guides

One guide per common fire service call, for the Troubleshoot tab. Each guide is a step-by-step flowchart: do the step, then follow the result.

**Every guide starts the same way:** put the account **on test** with the monitoring center, notify the building, and disable releasing circuits and any outputs you don't want to operate before you touch anything (Reference: *Before you test*). [SRC:safety-notify] [SRC:safety-releasing] When you're done, re-enable everything, reset, confirm the panel is normal, and take the account off test.

---

## 1. Ground fault trouble

**Symptom:** panel shows a ground fault (sometimes with + or − polarity, sometimes with the circuit).

1. Read the panel. Does it name a circuit or module? → Start with that circuit at step 4.
2. Was anything worked on recently (remodel, new devices, roof work, rain)? → Check that area first.
3. No circuit named: disconnect field circuits one at a time (SLCs, IDCs, NACs, communicator, annunciator, power supply outputs). Wait for the panel to re-check after each one. The ground fault clears → that circuit has it.
4. With the circuit off the panel, meter each conductor to earth ground. Any reading → the fault is on that conductor.
5. Split the circuit at an accessible midpoint and test each half. Repeat until you're down to one run or device.
6. Look for: a staple or screw through the cable, wire pinched against a metal box or cover, water in an exterior or basement device, a damaged conduit fitting, or a shield drain wire touching the box.
7. **No megohmmeter with devices connected.** [SRC:safety-megger]
8. Repair, reconnect, confirm the trouble clears and the circuit works.

> **Field tip (David to add):** the most common place you find a ground fault in a finished building.

---

## 2. Open circuit trouble (conventional IDC or NAC)

**Symptom:** panel shows trouble or open on a zone or NAC.

1. Look for the obvious: a device removed, a detector out of its base, a ceiling tile disturbed, recent construction.
2. Disconnect the circuit at the panel and meter it (Reference: *Meter readings on fire circuits*).
   - Reads the EOL value → wiring is good. Check the panel terminal and the circuit's programming. Try the EOL resistor directly on the panel terminals: trouble clears → field wiring issue that comes and goes; trouble stays → panel side.
   - Reads open → go to step 3.
3. Find the EOL. Is it there and the right value? A missing or wrong EOL is common after another contractor's work.
4. Go device by device from the panel: check each detector is seated in its base and each terminal is tight. On two-wire smokes, a detector removed from its base opens the circuit by design.
5. Split the circuit at an accessible device and meter each half to find the break.
6. Look for a T-tap. A branch someone added will leave part of the circuit unsupervised and may hide the real break. Rewire it as a single path. [SRC:no-ttaps]
7. Reconnect, confirm the trouble clears, and test the devices past where the break was.

---

## 3. Addressable device missing, no answer, or wrong type

**Symptom:** panel shows a device missing, no answer, invalid reply, wrong device type, or duplicate address.

1. Note the address and look it up on the point list.
2. **One device missing:** go to it. Is it in its base? Is the base wiring tight? Is it damaged or painted over? Replace with the same type and set the same address.
3. **Wrong device type:** the device installed doesn't match the programming (a heat detector where a smoke is programmed). Install the correct type or have the program changed by someone authorized, per the drawings.
4. **Duplicate address:** two devices set to the same address. Common after a device swap. Find both and correct one.
5. **Many devices missing past one point:** an open on the SLC (Class B), a short isolated by an isolator (Class X), or a damaged cable. Go to the first missing device and check the wiring in and out.
6. **Devices dropping in and out:** SLC wiring too long, too much capacitance, unshielded cable near noise, a loose splice, or a ground fault. Check the panel's SLC limits and the loop's wiring.
7. After repair, confirm the device reports at the right address with the right label, and test it.

---

## 4. Horns or strobes not working, or NAC trouble

**Symptom:** NAC trouble on the panel, or some appliances don't sound or flash during a test.

1. **NAC trouble with no alarm:** treat as an open or short (Guide 2 for opens). A **short** on a NAC usually shows when the panel tries to activate it; meter both directions for a short.
2. **Some appliances work, some don't:**
   - All the dead ones past one point → open or bad splice between the last working and first dead appliance.
   - Random dead ones → bad appliance, appliance wired backward (polarity), or a loose terminal.
3. **Strobes dim, slow, or not flashing at the far end:** voltage drop. Measure voltage at the last appliance **during alarm**. Compare to the appliance's minimum (commonly 16 V). [SRC:nac-min-volts] Use the NAC Voltage Drop calculator to confirm and fix (heavier wire, split the circuit, or add an extender).
4. **Strobes flashing out of sync:** sync protocol mismatch between panel, extender, or appliance brands; an extender not set to follow the panel; or mixed appliance models. [SRC:strobe-sync]
5. **NAC extender circuits dead:** check the extender's AC, batteries, and trouble LEDs, and the trigger wiring from the panel.
6. **Panel shuts down the NAC:** total current over the NAC rating. Add up every appliance at its setting. [SRC:nac-rating]
7. Retest every appliance on the circuit after the fix.

---

## 5. AC power loss or battery trouble

**Symptom:** panel shows AC loss, low battery, battery trouble, or charger trouble.

1. **AC loss:** check the fire alarm breaker (it should be red-marked and locked). Tripped or turned off? → Find out why before resetting. Then check the panel's AC fuse and terminal connections. [SRC:primary-marking]
2. **AC good but low battery:** measure battery voltage with the batteries on the charger, then under load (disconnect AC for a short test, or use a battery load tester).
   - Low with AC on for more than a couple of days → charger problem or a dead battery.
   - Good with no load, collapses under load → battery is failing. Replace both.
3. Check the date on the batteries. Older than about 5 years → replace both. [SRC:batt-replace]
4. **Battery trouble / missing:** loose lead, blown battery fuse, corroded terminals, or a jumper missing between the two batteries.
5. **Batteries keep dying:** run a battery calculation (Fire Battery calculator) against actual current. Too much load for the battery size, or a battery bigger than the charger can recharge.
6. Date the new batteries and confirm the trouble clears. [SRC:batt-replace]

---

## 6. Nuisance smoke alarms

**Symptom:** repeated alarms from a smoke detector with no fire.

1. Pull the history: same device each time? Same time of day? (Cooking, cleaning, HVAC cycling, shift change, sprinkler testing.)
2. **Addressable:** check the detector's sensitivity and dirty or maintenance alert on the panel. Dirty → clean per manufacturer or replace.
3. Look at the environment: steam (showers, kitchens), dust (construction, warehouses), insects, exhaust, aerosol sprays, humidity, or temperature outside the listed range. [SRC:smoke-environment]
4. Check the location: within 3 ft of a supply diffuser or return? Air drawing dust into it or blowing across it? [SRC:smoke-hvac]
5. Construction dust? Clean or replace, and make sure dust covers are used next time. [SRC:construction-dust]
6. Fix the cause: clean, replace, or relocate or change the detector type **with the designer's or AHJ's approval**. Don't change device types on your own.
7. **Never leave a nuisance detector disabled** without notifying the owner and AHJ and documenting the impairment. [SRC:impairment-4h]

> **Field tip (David to add):** a nuisance alarm cause that took you a long time to find.

---

## 7. Supervisory won't clear (tamper, duct, or other)

**Symptom:** supervisory signal on the panel that stays after a reset.

1. Identify the device. Is it a valve tamper, duct detector, low air, fire pump, or other monitored input?
2. **Valve tamper:** is the valve fully open? Coordinate with the building or sprinkler contractor; never open or close sprinkler valves yourself unless you're authorized. A partly closed valve won't restore. [SRC:tamper-travel]
3. Valve fully open but still supervisory → adjust or replace the switch; check that the switch's trip lever sits correctly on the valve.
4. **Duct detector:** check the detector's LED and the remote test station. Dirty, in alarm, or in trouble? Check airflow across the sampling tubes. Reset at the detector if it latches locally. (Guide 10)
5. **Wiring:** meter the circuit. A short on a supervisory input can read as an active supervisory.
6. Reset the panel and confirm the supervisory clears.

---

## 8. Waterflow alarm problems

**Symptom:** waterflow alarm with no fire, or no alarm when water flows.

1. **False waterflow alarms:** check for pressure surges (fire pump starting, city water pressure changes). Check the retard setting; it may be too short. Don't set it so long that it exceeds the 90-second requirement. [SRC:waterflow-90s]
2. Is water actually moving? A leak, a broken head, or an open drain will cause a real waterflow. Investigate before you call it false.
3. Check the switch for corrosion, water in the electrical housing, or a damaged paddle.
4. **No alarm on flow:** test with the inspector's test valve with the sprinkler contractor. Time it. No signal → check the switch contact with a meter while water flows, then the wiring and module or zone.
5. Confirm the waterflow is not on the same zone as a tamper switch. [SRC:tamper-separate]

---

## 9. Failure to communicate with the monitoring center

**Symptom:** panel shows communication trouble, or the monitoring center isn't receiving signals or periodic tests.

1. Which path failed? (Phone line 1 or 2, cellular, IP.)
2. **Phone line (DACT):** is there dial tone at the panel? Lines often get disconnected or moved to VoIP without anyone telling the alarm company. VoIP may not pass DACT signals reliably.
3. **Cellular:** check signal strength at the communicator, the antenna connection, and that the account is active with the provider.
4. **IP:** check the network cable, the switch port, and that the network still allows the communicator out.
5. Check the account number and receiver numbers in the panel or communicator programming.
6. Send a test signal and confirm with the operator that the account and event came in correctly.
7. Until the path is restored, the system is impaired for off-site reporting; notify the owner. [SRC:impairment-4h]

---

## 10. Panel won't reset

**Symptom:** the panel goes back into alarm, supervisory, or trouble right after a reset.

1. Which device is still active? Find it on the panel.
2. **Pull station:** still pulled down. Reset it with its key or tool.
3. **Smoke detector:** smoke or dust still in the chamber. Wait, clear it, or replace it. On a **four-wire** zone, the panel must drop resettable power to reset the detector; check the resettable power output and the EOL relay.
4. **Duct detector:** some latch at the detector and need a local reset or a reset from the remote test station.
5. **Heat detector:** a non-restorable head has fused and must be replaced.
6. **Waterflow:** water is still flowing.
7. **Monitor module input** still closed: check the contact it watches (a suppression panel, fire pump controller, etc.).
8. **Short on an IDC** looks like a device in alarm on many conventional panels. Disconnect the zone and meter it (Guide 2).

---

## 11. Elevator recall or control function didn't operate

**Symptom:** during a test, elevators didn't recall, fans didn't shut down, or doors didn't release.

1. Was the output disabled for testing and not re-enabled? Check the panel's disabled list first.
2. Check the relay or control module: does it change state when the input is activated? Listen and meter the contact.
3. Check the wiring from the relay to the other trade's equipment. The relay should be within 3 ft of the controlled device with a supervised circuit to it. [SRC:relay-3ft]
4. Check the programming against the sequence of operations: is the input mapped to that output?
5. **Elevators:** confirm lobby detector, machine room, and hoistway signals go to the right recall input (primary or alternate floor). Test with the elevator contractor present. [SRC:elevator-recall]
6. Retest the full sequence after the fix and document it.

---

## 12. Detector or device needs replacing

**Symptom:** a detector fails sensitivity, is damaged, or is past its service life.

1. Get the exact replacement: same type, **listed and compatible** with the panel. A different model may need panel programming or may not be compatible at all.
2. Put the account on test and disable the device or zone. [SRC:safety-notify]
3. Replace the head (or base and head), set the same address on addressable systems.
4. Confirm the panel sees the correct device type at the correct address, with no troubles.
5. Test the new device with listed smoke or the correct method. [SRC:test-smoke]
6. Record the replacement on the test report.
