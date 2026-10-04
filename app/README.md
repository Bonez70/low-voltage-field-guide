# Low Voltage Field Guide (v1 app)

Installable, offline mobile web app (PWA) for security low voltage techs. v1 carries the Intrusion pack; Fire, Access control and CCTV show in the system switcher as coming.

## Layout

| Path | What it is |
|---|---|
| `index.html` | App shell: header with system switcher and search, four bottom tabs (Learn, Reference, Calculators, Troubleshoot) |
| `app.js` | Routing (`#/<pack>/<tab>/...`), the four tab screens, search, install prompt, service worker registration |
| `app.css` | Styles (same field-meter look as the calculators) |
| `calc-ui.js` | Calculator screens, mounted in the Calculators tab |
| `calculators/` | Calculator math (`calc.js`), tests (`node calculators/calc.test.js`), standalone calculator page |
| `packs/*.js` | **Generated** content bundles, one per system pack. Don't edit |
| `sw.template.js` → `sw.js` | Offline cache. `sw.js` is **generated** with a version hash so every change reaches installed phones |
| `manifest.webmanifest`, `icons/` | Home screen name and icons |
| `build.js` | Turns `../content/<pack>/*.md` into `packs/<pack>.js` and writes `sw.js` |

## Changing content

1. Edit the Markdown in `content/intrusion/` (training modules, `reference.md`, `troubleshooting.md`).
2. Run `node app/build.js`.
3. Publish the `app/` folder. Installed apps pick up the change and offer a Reload.

Field tip boxes written as `> **Field tip (David to add):** topic` show as a dashed "coming soon" placeholder. Replace with `> **Field tip:** your tip` and rebuild to show the real tip.

`node app/build.js --preview out.html` writes a single-file preview (no offline support) for quick review.

## Adding a system pack (Fire, Access, CCTV)

1. Put its content in `content/<pack>/` with the same shape: `training/NN-*.md` (`# Module N: Title`, `## Lesson N.N: Title`, `## Module N quiz` with an `**Answer key:**` line), `reference.md` (`## Card: Title` sections), `troubleshooting.md` (`## N. Title` with a `**Symptom:**` line).
2. Add it to `PACKS` in `build.js` (and remove it from `UPCOMING`), listing which calculators it uses.
3. New calculators go in `calculators/calc.js` (math + tests) and `calc-ui.js` (screen).
4. Add `<script src="packs/<pack>.js"></script>` to `index.html`, rebuild.

## Hosting

Any static host over HTTPS (GitHub Pages, Netlify, Cloudflare Pages). Serve the `app/` folder as the site root. Offline and "Add to Home Screen" need HTTPS. Test locally with any static server on `localhost`.
