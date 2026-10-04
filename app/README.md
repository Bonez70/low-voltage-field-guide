# Low Voltage Field Guide (v1 app)

Installable, offline mobile web app (PWA) for security low voltage techs. Carries the Intrusion and Fire alarm packs; Access control and CCTV show in the system switcher as coming.

## Layout

| Path | What it is |
|---|---|
| `index.html` | App shell: header with system switcher and search, bottom tabs (Home, then Learn, Reference, Calculators, Troubleshoot for the open pack) |
| `app.js` | Routing (`#/home`, `#/<pack>/<tab>/...`), the Home screen, the four tab screens, search, install prompt, service worker registration |
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

## Code Finder

`content/codes/codes.md` is a topic index to NFPA 72-2022, NFPA 70-2020 (NEC), NFPA 101-2021 and IBC 2021: each entry gives the section to open and a short summary in our own words (never the code text). The format is described at the top of that file. `build.js` writes it to `packs/codes.js` and the app shows it at `#/codes` (a tile on Home, and in search).

Each entry is signed off on its own: only entries with a `**Status:**` line go on the live site, and the Home tile hides while none are signed off. `node app/verify-sheet.js codes` writes `content/codes/VERIFY-SHEET.md` for review, and `--drafts --preview` shows every entry marked Verify #n.

## Adding a system pack (Fire, Access, CCTV)

1. Put its content in `content/<pack>/` with the same shape: `training/NN-*.md` (`# Module N: Title`, `## Lesson N.N: Title`, `## Module N quiz` with an `**Answer key:**` line), `reference.md` (`## Card: Title` sections), `troubleshooting.md` (`## N. Title` with a `**Symptom:**` line).
2. Add it to `PACKS` in `build.js` (and remove it from `UPCOMING`), listing which calculators it uses.
3. New calculators go in `calculators/calc.js` (math + tests) and `calc-ui.js` (screen).
4. Add `<script src="packs/<pack>.js"></script>` to `index.html`, rebuild.

## Hosting

Any static host over HTTPS (GitHub Pages, Netlify, Cloudflare Pages). Serve the `app/` folder as the site root. Offline and "Add to Home Screen" need HTTPS. Test locally with any static server on `localhost`.
