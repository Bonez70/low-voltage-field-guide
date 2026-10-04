# Verify Sheet: Intrusion Draft

**Status: all 21 items approved as written by David on 2026-10-04. Tags removed from the content.**

Every value in the intrusion draft that needs your check, shown with the full text around it. Items that appear in two places are combined, so there are 21 items instead of 24.

**How to answer:** reply with the item number and your call, for example:
`1 ok, 4 should be 6 to 8 ft, 13 not sure, 18 remove 145`

"Where it comes from" is my honest source note. Nothing here was checked against an actual code book or spec sheet; it's general industry knowledge, so your field experience wins.

---

## Electrical basics

### 1. Transformer output voltage
**Where:** Module 1, Lesson 1.1 "AC vs DC"
> **AC (alternating current)** reverses direction many times a second. The transformer that plugs into the wall puts out low-voltage AC (commonly **16.5 VAC or 18 VAC**) to the panel.

**Proposed:** 16.5 or 18 VAC
**Where it comes from:** the plug-in transformers that common residential panels ship with. Some panels use other values (for example 16 VAC or 24 VAC).

### 2. Class 2 power limit
**Where:** Module 1, Lesson 1.3 "Class 2 and power-limited circuits"
> Panels, transformers, and power supplies are listed as Class 2 sources, and their output is limited (typically **no more than 100 VA** for the low voltages we use).

**Proposed:** 100 VA
**Where it comes from:** the NEC power-source limit tables for Class 2 circuits at 30 V and below. The exact limit depends on voltage and source type.

---

## Sensors

### 3. Contact gap
**Where:** Module 3, Lesson 3.1 "Door and window contacts"
> **Gap** is the distance at which the switch opens. Typical surface contacts operate around **3/4" to 1"** gap; overhead door contacts are rated for **1.5" to 2" or more**. **Steel doors and frames reduce gap**, sometimes by half; use contacts rated for steel.

**Proposed:** surface 3/4" to 1"; overhead 1.5" to 2"+; steel can cut gap in half
**Where it comes from:** typical contact spec sheets. Gap varies a lot by model.

### 4. PIR mounting height
**Where:** Module 3, Lesson 3.2 "Motion detectors", and Reference card "Device placement quick rules"
> Most wall-mounted PIRs are designed for a specific height, commonly about **7 to 7.5 feet**. Mounting at the wrong height shrinks coverage or creates dead zones.

**Proposed:** 7 to 7.5 ft
**Where it comes from:** the installation instructions for common residential PIRs. Some models range from about 6.5 to 8 ft.

### 5. Glass break range
**Where:** Module 3, Lesson 3.4 "Glass break detectors", and Reference card "Device placement quick rules"
> Covers several windows in a room at once, often up to about **20 to 25 feet**.

**Proposed:** 20 to 25 ft
**Where it comes from:** typical acoustic glass break specs. Some are rated for 15 ft and some for 30 ft or more.

### 6. Fire on a burglar panel
**Where:** Module 3, Lesson 3.5 "Smoke and heat on a burglar panel"
> Residential fire installed on a burglar panel still has code requirements (**NFPA 72 chapter on household signaling**).

**Proposed:** NFPA 72's household chapter applies (Chapter 29, "Single- and Multiple-Station Alarms and Household Signaling Systems")
**Where it comes from:** the NFPA 72 structure. Local adoption and edition vary.

---

## Wiring

### 7. EOL resistor values
**Where:** Module 4, Lesson 4.1 "Why end-of-line resistors exist", and Reference card "Common EOL resistor values"
> EOL values depend on the panel brand. Common values include **1 kΩ, 2 kΩ, 2.2 kΩ, 4.7 kΩ, 5.6 kΩ, and 10 kΩ**. **Always use the value in the panel's manual.**

The reference card shows the same values with color bands, for example 2.2 kΩ = Red, Red, Red, Gold and 5.6 kΩ = Green, Blue, Red, Gold.

**Proposed:** that list of six values
**Where it comes from:** values used by the major panel brands. Are there any you see often that are missing, or any that shouldn't be listed?

### 8. Cable by use
**Where:** Module 4, Lesson 4.4 "Wire types and gauges"

| Typical use | Common cable |
|---|---|
| Door/window contacts, zones | 22/2 |
| Motion detectors (zone + power) | 22/4 |
| Keypads and data bus | 22/4 (some panels allow or require 18/4 on long runs) |
| Sirens and bells | 18/2 |
| Power supply runs, long device power runs | 18/2 or 18/4, heavier as needed |
| Transformer to panel | 18/2 or 16/2 per manual |

**Proposed:** the table above
**Where it comes from:** common practice. Is this how you and your area actually wire?

---

## Wireless

### 9. Wireless supervision window
**Where:** Module 5, Lesson 5.2 "Supervision"
> Each sensor sends a periodic check-in. If the panel doesn't hear a sensor within its supervision window, it shows a supervision loss trouble. Supervision windows vary by panel and listing, **commonly a few hours up to 24 hours**.

**Proposed:** a few hours up to 24 hours
**Where it comes from:** the range across common panels. Commercial and fire listings are usually shorter.

---

## Installation

### 10. Glass break on the same wall as the glass
**Where:** Module 6, Lesson 6.3 "Device placement quick rules" (table row)
> Glass break. **Do:** line of sight to the glass, within rated range. **Don't:** mount on the same wall as the glass if the manufacturer prohibits it, or behind heavy drapes.

**Proposed:** generally avoid mounting on the same wall as the glass; opposite wall or ceiling preferred
**Where it comes from:** many manufacturers recommend the opposite or an adjacent wall, or the ceiling. Some allow the same wall.

### 11. Keypad mounting height
**Where:** Module 6, Lesson 6.3 "Device placement quick rules" (table row)
> Keypad. **Do:** inside, near entry, about **4 to 5 ft high**. **Don't:** visible through a window from outside.

**Proposed:** 4 to 5 ft
**Where it comes from:** common practice. Note that the ADA's maximum reach height for operable parts is 48 inches, which matters for commercial jobs. Should commercial say "top of keypad at 48 in max"?

### 12. Bell circuit EOL
**Where:** Module 6, Lesson 6.5 "Keypads and sirens"
> Siren wiring is polarity-sensitive on most sirens: positive to bell +, negative to bell −. **Some panels supervise the bell circuit and need an EOL resistor on it.**

**Proposed:** keep it as a general "some panels" statement
**Where it comes from:** some panels supervise the bell output with a resistor. Is this common enough in your area to deserve more detail?

---

## Programming and codes

### 13. CP-01 entry and exit delays
**Where:** Module 7, Lesson 7.2 "Entry and exit delays"
> The ANSI/SIA CP-01 false alarm standard sets minimums and defaults for these: for example, a **minimum exit delay of 45 seconds (default 60)** and **entry delay minimum of 30 seconds**, with a **combined entry delay plus abort window not to exceed 1 minute**.

**Proposed:** exit 45 s minimum, 60 s default; entry 30 s minimum; entry plus abort window 1 minute max
**Where it comes from:** my recollection of CP-01. Confirm against the standard or the CP-01 table in a panel manual.

### 14. Alarm ordinance topics
**Where:** Module 8, Lesson 8.2 "Licensing, permits, and alarm ordinances"
> **Alarm ordinances** often set false alarm fees, bell cutoff time limits for exterior sirens, and verification requirements (such as Enhanced Call Verification or video/audio verified response).

**Proposed:** those three topics as typical ordinance content
**Where it comes from:** a general pattern across U.S. cities. Does your area have anything else worth calling out?

### 15. Standards list
**Where:** Module 8, Lesson 8.3 "Key standards"

| Standard | What it covers |
|---|---|
| ANSI/SIA CP-01 | Control panel features for false alarm reduction |
| NFPA 70 (NEC) | Wiring rules, including Class 2 circuits and cable ratings |
| NFPA 731 | Installation of electronic premises security systems |
| NFPA 72 | Fire alarm and household fire warning (when smoke/heat/CO are on the panel) |
| UL 681 | Installation and classification of burglar alarm systems |
| UL 1023 | Household burglar alarm system units |
| UL 1610 / UL 1076 | Central station and proprietary burglar alarm units |
| UL 827 | Central station alarm services |

**Proposed:** the list above
**Where it comes from:** the standards most often cited for intrusion. Should any be dropped as too deep for this audience, or is anything missing?

---

## Reference cards

### 16. Standard battery sizes
**Where:** Reference card "Battery standby formula"
> Round up to the next standard battery size (common sizes **4, 5, 7, 8, 12, 18 Ah**).

**Proposed:** 4, 5, 7, 8, 12, 18 Ah
**Where it comes from:** the sealed lead-acid sizes commonly stocked for alarm panels.

### 17. Standby hours
**Where:** Reference card "Battery standby formula". The calculator presets will use these too.
> Commonly cited standby requirements: about **4 hours for UL residential burglary**, **24 hours for UL commercial/certificated burglary**, **24 hours for fire**.

**Proposed:** 4 h residential burglary, 24 h commercial burglary, 24 h fire (plus alarm minutes)
**Where it comes from:** commonly cited UL and NFPA 72 figures. This one matters most, because the calculator will use it.

### 18. Contact ID event codes
**Where:** Reference card "Contact ID event codes"

| Code | Event | Code | Event |
|---|---|---|---|
| 100 | Medical | 301 | AC loss |
| 110 | Fire | 302 | Low system battery |
| 120 | Panic | 344 | RF receiver jam |
| 121 | Duress | 350 | Communication trouble |
| 122 | Silent panic | 373 | Fire trouble |
| 130 | Burglary | 380 | Sensor trouble |
| 131 | Perimeter burglary | 381 | Loss of RF supervision |
| 132 | Interior burglary | 383 | Sensor tamper |
| 134 | Entry/exit burglary | 384 | RF low battery |
| 137 | Tamper | 401 | Open/close by user |
| 139 | Verified intrusion | 406 | Cancel |
| 145 | Expansion module tamper | 570 | Zone bypass |
| 150 | 24-hour non-burglary | 602 | Periodic test |

**Proposed:** the table above
**Where it comes from:** the SIA Contact ID code list as I remember it. Compare it to what your central station shows.

---

## Troubleshooting values

### 19. AC voltage at the panel
**Where:** Troubleshooting Guide 4 "Low battery or AC loss", step 2
> Meter AC at the panel's AC terminals (AC volts). **Expect about the transformer's rated output.** Low or zero with the transformer plugged in → check the wire run, then the transformer.

**Proposed:** about the transformer's rating. Should we give a range, such as 16 to 18 VAC for a 16.5 VAC transformer under load?
**Where it comes from:** general. Readings with no load often run higher than the rating.

### 20. Battery voltage
**Where:** Troubleshooting Guide 4, step 3
> Disconnect the battery and meter it. A 12 V sealed lead-acid battery at roughly **12.6 V or more is charged**; **much lower than 12 V usually means it's weak or dead**. A battery reading OK unloaded can still fail under load.

**Proposed:** 12.6 V or more is charged; under 12 V is suspect
**Where it comes from:** sealed lead-acid state-of-charge charts.

### 21. Panel charging voltage
**Where:** Troubleshooting Guide 4, step 4
> Check charging voltage at the panel's battery leads with the battery disconnected (commonly around **13.5 to 13.8 VDC**). Low charge voltage points to a panel or transformer problem.

**Proposed:** 13.5 to 13.8 VDC
**Where it comes from:** typical float charge voltage for 12 V sealed lead-acid batteries on alarm panels.
