# Low Voltage Field Guide

Offline mobile field guide for security low voltage technicians: training, quick reference, calculators and troubleshooting. v1 covers intrusion (burglary) systems; fire alarm, access control and CCTV are coming.

**Use it:** https://bonez70.github.io/low-voltage-field-guide/ — open on your phone and add it to your home screen. It works with no signal after the first load.

- `content/` holds the Markdown the app is built from. Edit there.
- `app/` is the web app. `node app/build.js` regenerates the content packs and the offline cache. See `app/README.md`.
- Every push to `main` rebuilds and publishes the site.
