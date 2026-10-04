# Calculators (v1, intrusion)

- `calc.js`: the math, as pure functions (battery standby, voltage drop, wire gauge). Works in the browser (`window.SLVCalc`) and in Node.
- `calc.test.js`: worked examples. Run `node calc.test.js`.
- `index.html`: the phone screens. Written as a page body for the Artifact preview (no doctype/head); the app build (thread 4) should wrap it in its own shell and add the offline service worker and manifest.

Values come from `content/intrusion/reference.md` (signed off by David 2026-10-04): copper Ω/ft for 22 to 12 AWG, the 1.2 battery safety factor, standard sizes 4/5/7/8/12/18 Ah, and standby presets of 4 h (UL residential burglary) and 24 h (UL commercial/certificated burglary). If a value changes there, change it in `calc.js` and the tests.

Prefilled device currents, runs, and the 10.5 V device minimum are example inputs only, labeled as such on screen.
