# dreamtonela.com — project instructions

Static site, no build step. Netlify serves the repo root; a push to `main` redeploys in
about 30 seconds. Live at https://www.dreamtonela.com.

## Do not

- Introduce a bundler, npm, TypeScript, Next.js, or a component library. The no-toolchain
  architecture exists so a non-technical owner can edit the site in a browser. Ask before
  changing it.
- Use bullet points or `<ul>` in site copy. Use the `RomanList` component — roman numerals
  in Times New Roman. Hard brand rule.
- Use emoji. Icons are Lucide only, via `<i data-lucide="name">`.
- Hardcode copy into a `*LA.jsx` file. Copy lives in `content/*.json`.
- Add a content field without adding it to `admin/config.yml` in the same commit.
- Remove the static first-paint block inside `#root` in `index.html` — it is the only
  thing non-JS crawlers and link unfurlers see. Keep it in sync with what React renders.
- Invent colors. The approved accents are enforced by `config.yml` selects.
- Replace the `!important` font rules at the bottom of the `index.html` style block. They
  are intentional. Extend them instead.

## Architecture

`index.html` loads React, Babel standalone, Lucide, the design-system bundle, and
`content-loader.js`, then each page as `<script type="text/babel">`. Every page file is an
IIFE assigning one component to a global (`window.LAHome`, `window.LAMurals`, …).
`content-loader.js` fetches `content/*.json` into `window.LA_*` globals and resolves
`window.LA_CONTENT_READY`, which the boot script awaits before first render.

Routes are real URLs. `AppLA.jsx` owns `PATHS`, `META`, `setMeta()`, `pushState`
navigation, and a `popstate` listener; `netlify.toml` rewrites `/*` to `/index.html`.

`/admin` is Decap CMS on Netlify Identity + Git Gateway, branch `main`, media folder
`assets/uploads`.

## Adding a page

New `*LA.jsx`; a `<script type="text/babel">` line in `index.html`; a branch in the
`AppLA.jsx` route switch; entries in `PATHS` and `META`; a nav entry in `HeaderLA.jsx`;
a `<url>` in `sitemap.xml`; and if it has editable copy, a `content/*.json` file plus a
`config.yml` collection.

## Design system

Vendored at `_ds/dreamtone-nyc-design-system-4e9f520c-69d6-44f8-8314-6363b924e8e7/`,
published as `window.DreamtoneNYCDesignSystem_4e9f52`. Compose its components — Button,
Card, Badge, Tag, Input, Switch, RomanList, Eyebrow, Timecode, Logo — rather than
restyling raw HTML.

Local primitives in `AppLA.jsx`: `Mark` (accent-underlined headline half), `Slot`
(`<image-slot>` photo placeholder — unique stable `id` per instance), `LAEyebrow`,
`Bars` (SMPTE colour strip divider).

Theme variables are in the `index.html` style block under `.theme-light` / `.theme-dark`;
`--accent` and `--la` are injected per-render in `AppLA.jsx` from `theme.json`.

Layout: 1200px content column, 32px side padding, 56–88px section padding, fluid `clamp()`
headlines. Structure on dark grounds uses hairline borders, never shadows.

Voice: first-person plural, plainspoken New York, spare. No buzzwords, no exclamation
marks.

## Responsive

`window.LAuseNarrow(px)` — a `matchMedia` hook exported from `HeaderLA.jsx`. The header
collapses to a hamburger at 920px; homepage lane rows stack at 760px. Minimum tap target
44px. Grids are `repeat(auto-fit,minmax(Npx,1fr))` and wrap on their own.

## Before pushing

Serve the folder over http and click through all seven routes plus back/forward — the site
fetches `content/*.json`, so opening `index.html` from the filesystem shows the "content
failed to load" message rather than the site. Check the console is clean and check one
narrow viewport.
