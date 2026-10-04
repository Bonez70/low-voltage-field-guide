# Module 3: Credentials and Readers

**You'll be able to:** tell credential technologies apart, read a Wiegand card number, wire a Wiegand or OSDP reader, and mount a reader where everyone can reach it.

---

## Lesson 3.1: Credential technologies

| Technology | How it works | Notes |
|---|---|---|
| **125 kHz proximity (prox)** | Card broadcasts a fixed number when the reader's field powers it | Still everywhere. **Easy to copy** with cheap cloners; no encryption |
| **13.56 MHz smart card** | Card has a chip that answers the reader with encrypted data | The modern standard. Several competing families; the reader must support the card's family and keys |
| **Mobile credential** | Phone app talks to the reader over Bluetooth or NFC | No cards to print; needs readers that support it |
| **PIN** | User types a code on a keypad | Shareable, so usually used with a card (card plus PIN) |
| **Biometric** | Fingerprint, face, or iris | Can't be lent out; enrollment and privacy rules apply |
| **Long range** | UHF tags or vehicle tags read from several feet away | Parking gates and vehicle entrances |

**Multi-technology readers** read both prox and smart cards. They're the usual way to migrate a site: install new readers that read the old prox cards, then reissue cards over time and turn prox off.

**Card numbers aren't secret on prox.** If the customer cares about security, recommend smart cards or mobile with encryption turned on, not just a smart card reading the card's serial number.

---

## Lesson 3.2: Wiegand

Wiegand is the most common reader-to-controller wiring. It's old, simple, and one-way: the reader sends the card number and the controller sends back LED and beeper signals on separate wires.

**Wires** (the most common color convention; always check the reader's manual): [VERIFY:wiegand-colors]

| Color | Function |
|---|---|
| Red | + power (usually 12 VDC) |
| Black | Ground |
| Green | Data 0 (D0) |
| White | Data 1 (D1) |
| Brown or orange | LED control |
| Yellow | Beeper control |
| Bare / drain | Shield |

D0 and D1 sit at about 5 V when idle and pulse low to send a 0 (on D0) or a 1 (on D1). Swap them and the controller gets the wrong number or nothing at all.

**The 26-bit format.** The classic Wiegand number is 26 bits: [VERIFY:wiegand-26]

| Bit 1 | Bits 2 to 9 | Bits 10 to 25 | Bit 26 |
|---|---|---|---|
| Even parity | **Facility code** (0 to 255) | **Card number** (0 to 65,535) | Odd parity |

Only 65,536 card numbers per facility code means duplicates between sites are common. Larger formats (34-bit, 35-bit, 37-bit, and proprietary formats) give more numbers. The controller must be set to the format the cards use.

**Distance:** Wiegand is good to about **500 ft** using 22 AWG shielded cable. [VERIFY:wiegand-distance]

**Security:** Wiegand is unencrypted and unsupervised. Someone with access to the wires at the reader can capture card numbers or replay them, and the controller can't tell if a reader has been swapped. That's why OSDP is replacing it.

---

## Lesson 3.3: OSDP

**OSDP (Open Supervised Device Protocol)** is the modern reader standard, published by the Security Industry Association. [VERIFY:osdp-basics]

- **Two-way.** The controller polls the reader; the reader answers. If a reader stops answering, the controller knows right away (it's **supervised**).
- **RS-485 wiring:** two data wires (often labeled A/B or +/−) plus power and ground. Four conductors, twisted pair for the data.
- **Multi-drop:** several readers can share one RS-485 run, each with its own address. Wire it as a daisy chain, not a star. [VERIFY:osdp-basics]
- **Distance:** up to about **4,000 ft** on RS-485 with proper twisted pair cable. [VERIFY:osdp-distance]
- **Termination:** long runs get a 120 Ω terminating resistor at each end of the bus. Short runs often don't need it; follow the controller manual. [VERIFY:osdp-term]
- **Secure Channel** encrypts the link (AES-128). Turn it on: OSDP without Secure Channel is supervised but not encrypted. [VERIFY:osdp-secure]
- **Settings must match** on both ends: address, baud rate (commonly 9600 by default), and Secure Channel keys.

**Retrofits:** OSDP usually runs on the existing Wiegand cable, using one twisted pair for data. Check that the old cable has a twisted pair available.

> **Field tip (David to add):** what you check first when an OSDP reader won't come online.

---

## Lesson 3.4: Mounting and wiring the reader

**Height and reach.** Card readers and keypads are operable parts, so they go within the accessible reach range: no higher than **48 in** and no lower than **15 in** above the floor, with clear floor space in front. Many specs call for 42 to 48 in to the center of the reader. [VERIFY:reach-range]

**Location.**

- On the **latch side** of the door, close enough that a user can badge and pull the door in one motion.
- On the wall or mullion, not on the door, unless it's a reader built into the lockset.
- **Metal mullions** detune readers and cut read range. Use a mullion-mount reader or a spacer, and test range after mounting.
- Keep readers away from each other (back-to-back readers on two sides of a wall can interfere).
- Outdoors: a reader rated for the weather, with the cable entry sealed and a drip loop.

**Cable.** Typical Wiegand reader cable is **22 AWG, 6 conductors, shielded** (8 conductors if the reader needs more functions). Ground the shield drain **at the controller end only**; at the reader, cut it back and tape it so it can't touch anything. [VERIFY:shield-ground]

**Power.** Most readers want 12 VDC and draw 50 to 250 mA (more when a heater or LCD is on). Long runs on 22 AWG drop voltage; check with the **Reader Cable calculator**.

---

## Module 3 quiz

1. Why are 125 kHz prox cards considered insecure?
2. What does a multi-technology reader let you do on a migration?
3. On a typical Wiegand reader, what are the green and white wires?
4. In a 26-bit Wiegand number, what range can the facility code be?
5. What's the usual maximum distance for a Wiegand reader run?
6. Name two advantages OSDP has over Wiegand.
7. How should several OSDP readers on one RS-485 run be wired?
8. What's the highest an operable part of a card reader can be mounted?
9. Where is the reader cable's shield grounded?

**Answer key:** 1) They broadcast a fixed, unencrypted number that cheap cloners can copy. 2) Read both the old prox cards and new smart cards, so cards can be replaced over time. 3) Green is Data 0, white is Data 1. 4) 0 to 255. 5) About 500 ft on 22 AWG shielded cable. 6) Any two of: supervised (the controller knows if a reader drops off), encrypted with Secure Channel, two-way, multi-drop, longer distance. 7) As a daisy chain, each reader with its own address, terminated at the ends on long runs. 8) 48 in above the floor. 9) At the controller end only.
