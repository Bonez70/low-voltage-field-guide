# Module 2: How Video Works

**You'll be able to:** explain resolution, frame rate, shutter speed, compression, and bitrate, and say how each one changes image quality, bandwidth, and storage.

---

## Lesson 2.1: Sensor and resolution

Light comes through the lens onto an **image sensor**, a grid of millions of light-sensitive pixels. The camera reads the grid many times a second and turns each read into a frame.

**Resolution** is the size of that grid, written as width × height in pixels or as megapixels (MP).

| Name | Pixels (W × H) | About |
|---|---|---|
| 1080p | 1920 × 1080 | 2 MP |
| 4 MP | 2560 × 1440 (or 2688 × 1520) | 4 MP |
| 5 MP | 2592 × 1944 (or 2880 × 1620) | 5 MP |
| 4K | 3840 × 2160 | 8 MP |

Two things to remember:

- **Horizontal pixels are what matter for design.** Pixel density (Lesson 3.3) uses the width, because you're spreading those pixels across the width of the scene.
- **More megapixels isn't automatically better.** A 4K camera with a small, cheap sensor can look worse at night than a good 2 MP camera, because each tiny pixel gathers less light. Sensor size is printed as a fraction like 1/2.8" or 1/1.8"; bigger is better in low light.

---

## Lesson 2.2: Frame rate and shutter

**Frame rate** is how many pictures per second (fps) the camera records.

- About **15 fps** looks smooth enough for most surveillance and is a common default.
- **25 to 30 fps** for fast action: cash handling, gaming tables, traffic.
- **1 to 7 fps** for wide overviews where you only need to know what happened, to save storage. [SRC:frame-rate]

Storage and bandwidth go up with frame rate, but not in a straight line, because compression (Lesson 2.3) only sends what changed between frames.

**Shutter speed** is how long each frame's exposure lasts. It's a separate setting from frame rate and matters more for moving things.

- At slow shutters (1/30 s), a person walking blurs and a moving car's plate is unreadable.
- Cameras in **auto** stretch the shutter at night to gather light, which is why faces blur after dark.
- For people walking, cap the slowest shutter around 1/60 to 1/120 s. For license plates on moving cars, much faster (Lesson 3.4).

---

## Lesson 2.3: Compression and codecs

Raw video is enormous. A **codec** compresses it so it fits on the network and the drives.

- **I-frame (key frame):** a complete picture.
- **P-frames:** only what changed since the last frame.
- **GOP (group of pictures) or I-frame interval:** how many frames between I-frames. A longer GOP saves bandwidth; a shorter one makes playback and seeking smoother. A common setting is one I-frame per second or two (GOP = 1 to 2 × fps).

| Codec | Notes |
|---|---|
| **H.264 (AVC)** | Plays on everything. The safe choice for evidence export. |
| **H.265 (HEVC)** | Roughly 30 to 50% less bitrate than H.264 at similar quality. [SRC:codec-savings] Some older clients and browsers can't play it. |
| **Smart codecs** (vendor names vary) | Make the background change rarely and spend bits on moving objects. Big savings on quiet scenes; watch for smeared motion. |
| **MJPEG** | Every frame a full JPEG. Huge. Only for special cases. |

---

## Lesson 2.4: Bitrate and streams

**Bitrate** is how much data per second a stream uses, in Mbps (megabits per second). It's what you actually size the network and drives from.

- **CBR (constant bitrate):** the camera always sends about the same amount. Predictable, but a busy scene gets blurry when it hits the cap.
- **VBR (variable bitrate):** the camera sends what the scene needs, up to a maximum you set. Usually the better choice; set the maximum high enough that busy scenes stay clear.

Bitrate goes **up** with resolution, frame rate, scene motion (trees, rain, traffic), and **noise** (dark scenes at night are noisy and can double the bitrate). Bitrate goes **down** with better codecs and lower quality settings.

**Streams:** most IP cameras send two or three streams at once.

- **Main stream:** full resolution, for recording.
- **Sub stream:** low resolution (often 640 × 360 or 720p), for multi-camera live views and phone apps.

Viewing a 16-camera grid on main streams will choke a recorder or a phone. Set grids to the sub stream.

**Planning numbers** for a first pass (measure the real cameras on site): a 4 MP camera at 15 fps runs roughly 4 to 6 Mbps in H.264 and 2 to 4 Mbps in H.265. Reference: *Bitrate and storage planning* has the table. [SRC:bitrate-typical]

---

## Lesson 2.5: Light, WDR, and IR

Cameras need light. When there isn't enough, they cheat, and every cheat has a cost.

- **Gain** amplifies the signal: brighter image, more noise, higher bitrate.
- **Slow shutter:** brighter image, motion blur.
- **Day/night (ICR):** at dusk, a filter swings out of the way so the sensor can see infrared; the image switches to black and white.
- **IR illuminators:** built-in IR LEDs light the scene at night. **850 nm** gives a faint red glow at the LEDs and more range; **940 nm** is invisible but has less range. [SRC:ir-wavelength]

**WDR (wide dynamic range)** handles scenes with very bright and very dark areas at once, like a person standing in front of a glass door at noon. Without it, the face is a black silhouette. True WDR is listed in dB (120 dB or more is good); "digital WDR" is weaker. BLC (backlight compensation) is the older, cruder fix.

**Rules of thumb:**

- Don't aim cameras into the sun, headlights, or bright windows if you can help it.
- IR light bounces off anything close to the lens: eaves, walls, spider webs, the dome bubble itself. That's the white haze at night. Guide 4 covers it.
- Plan site lighting with the customer. Real light beats IR every time, and it shows color.

---

## Module 2 quiz

1. Why does design use horizontal pixels, not megapixels?
2. A 4K camera with a 1/2.8" sensor and a 2 MP camera with a 1/1.8" sensor: which probably looks better at night, and why?
3. What frame rate is a common default for general surveillance?
4. Why do faces blur at night on a camera set to auto?
5. What's an I-frame?
6. About how much less bitrate does H.265 use than H.264?
7. CBR or VBR for most cameras, and why?
8. Why use the sub stream for live grids?
9. What does 940 nm IR trade for being invisible?
10. A person stands in front of a bright glass door and their face is black. What camera feature helps?

**Answer key:** 1) Pixel density spreads the width in pixels across the width of the scene. 2) The 2 MP camera: its bigger sensor and larger pixels gather more light. 3) About 15 fps. 4) The camera slows the shutter to gather light, so motion blurs. 5) A complete picture; frames between I-frames carry only changes. 6) Roughly 30 to 50%. 7) VBR with a sensible maximum: it spends bits only when the scene needs them. 8) Main streams on many tiles overload the recorder, network, or phone. 9) Range: 940 nm reaches less far than 850 nm. 10) True WDR (or BLC on older cameras).
