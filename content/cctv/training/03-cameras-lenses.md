# Module 3: Cameras and Lenses

**You'll be able to:** pick a camera type for the spot, work out how wide a lens sees, check that you'll get enough pixels on a face or a plate, and choose cameras rated for where they're going.

---

## Lesson 3.1: Camera types

| Type | Good for | Watch for |
|---|---|---|
| **Bullet** | Long views, parking lots, obvious deterrence | Easy to knock out of aim; spiders love them |
| **Dome** | Indoors, vandal areas, ceilings | IR bounces off the bubble if it's dirty or the skirt isn't seated |
| **Turret (eyeball)** | Most general use indoors and out | Less vandal resistant than a dome |
| **PTZ** (pan-tilt-zoom) | Large areas with a live operator, guard tours | Only looks one way at a time; never your only camera on a critical spot |
| **Fisheye (360°)** | Ceiling of a room or store, one camera for the whole space | Low pixel density at the edges; poor for identification |
| **Multi-sensor** | Three or four cameras in one housing for corners and lots | Each sensor has its own stream and storage |
| **LPR** | License plates at a gate or lane | Narrow, dedicated view; not a general camera |
| **Covert / pinhole** | Special investigations | Legal review first (Lesson 1.5) |

---

## Lesson 3.2: Focal length and field of view

**Focal length** (mm) sets how wide the camera sees.

- **Short focal length (2.8 mm):** wide view, little detail far away.
- **Long focal length (12 mm and up):** narrow view, detail far away.
- **Varifocal** lenses adjust (2.8 to 12 mm is common); **motorized** varifocal adjusts from software, which saves a trip up the ladder.

The spec sheet lists the **horizontal field of view (HFOV)** in degrees at each focal length. Use that number; it already accounts for the sensor.

**Width of the scene at a distance:**

**Scene width = 2 × distance × tan(HFOV ÷ 2)**

**Example.** A camera with a 90° HFOV, 20 ft from the door: width = 2 × 20 × tan(45°) = 2 × 20 × 1 = **40 ft** of scene across.

The same camera zoomed to 30° HFOV: width = 2 × 20 × tan(15°) = 2 × 20 × 0.268 = **10.7 ft**.

If you only know the focal length, HFOV = 2 × atan(sensor width ÷ (2 × focal length)). The sensor width comes from the spec sheet. Use the **Field of View calculator**.

---

## Lesson 3.3: Pixel density (DORI)

**Pixel density** is how many pixels land on each foot (or meter) of the scene at the target's distance:

**Pixels per foot = horizontal pixels ÷ scene width in feet**

The European standard for video surveillance, IEC 62676-4, sets targets for each level of Lesson 1.1:

| Level | Pixels per meter | About per foot |
|---|---|---|
| **Detect** | 25 | 8 |
| **Observe** | 62.5 | 19 |
| **Recognize** | 125 | 38 |
| **Identify** | 250 | 76 |

[SRC:dori-ppm]

**Example.** A 4 MP camera (2560 pixels wide) seeing a 40 ft wide scene: 2560 ÷ 40 = **64 px/ft**. That's recognize, not identify. Zoom to 30 ft wide: 2560 ÷ 30 = 85 px/ft, identify.

**The lesson:** a wide camera can't do everything. Use a wide camera for the overview (detect and observe), and a separate tighter camera at the door for faces (identify). This pair is the standard design at every entrance.

> **Field tip (David to add):** how you show a customer why their wide-angle camera can't get faces.

---

## Lesson 3.4: Choosing for the scene

**Entrances:** one camera inside, looking at the door from the side people walk toward, framed so a person fills the view at about the point they come through. Aim for identify. Keep the camera low enough that it sees faces, not the tops of heads (Lesson 7.2).

**Hallways:** a turret at the end, with the image rotated to **corridor mode** (9:16 portrait) so the pixels go down the hall instead of onto the walls.

**Parking lots:** wide or multi-sensor cameras for detect and observe, plus tighter cameras at the entrances and exits where every car and person has to pass.

**Cash registers:** above and slightly behind the cashier, seeing hands, the drawer, and the counter.

**License plates (LPR):**

- A dedicated camera per lane, aimed where cars must pass at low speed.
- **Fast shutter:** 1/1000 s or faster for moving vehicles (1/500 s can work in slow lots); plates blur at normal settings.
- Keep the angle to the plate under about 30° horizontally and vertically.
- Follow the LPR camera's pixels-on-plate requirement; it's specific to the camera and the reading software. [SRC:lpr-settings]

---

## Lesson 3.5: Ratings and listings

- **Outdoor cameras:** IP66 or IP67 ingress protection (dust tight, jets of water or temporary immersion). IP is a rating, not "internet protocol" here. **Vandal resistance:** IK10 for domes in reach. [SRC:ip-ik-ratings]
- **Temperature:** check the operating range on the spec sheet. Cold climates need heaters; heaters add PoE power (Lesson 4.3).
- **Safety listing:** cameras, recorders, PoE switches, and power supplies carry a safety listing (UL 62368-1, or UL 60950-1 on older gear), and separate power supplies are Class 2. [SRC:camera-listing]
- **Plenum:** a camera or back box in a plenum ceiling (a return air space) has to be listed for that space. [SRC:plenum-devices]

---

## Module 3 quiz

1. Why is a PTZ never your only camera on a critical spot?
2. What happens to the field of view as focal length goes up?
3. A camera has a 60° HFOV. How wide is the scene 25 ft away? (tan 30° = 0.577)
4. A 1080p camera (1920 pixels wide) sees a 30 ft wide scene. What's the pixel density, and what level is it?
5. What's the IEC 62676-4 identify target in pixels per meter?
6. What's corridor mode for?
7. What shutter speed for license plates on moving cars?
8. What does IP66 tell you?

**Answer key:** 1) It only looks one way at a time and misses whatever happens behind it. 2) It gets narrower, with more detail far away. 3) 2 × 25 × 0.577 = about 28.9 ft. 4) 1920 ÷ 30 = 64 px/ft: recognize. 5) 250 px/m (about 76 px/ft). 6) Turns the image to portrait so pixels go down a hallway instead of onto the walls. 7) 1/1000 s or faster (1/500 s in slow lots). 8) Dust tight and protected against powerful water jets.
