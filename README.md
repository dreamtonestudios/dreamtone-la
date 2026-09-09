# Dreamtone Los Angeles

The live site for DreamtoneLA.com. Static files, no build step — Netlify serves them as-is.

**Read GUIDE.md** for deployment and day-to-day editing.

## Layout

    index.html          page shell: fonts, theme layer, script loads
    content-loader.js   fetches content/*.json, exposes it to the pages
    content/            THE EDITABLE CONTENT — copy, projects, loft, fees, links, theme
    admin/              the browser editor (Decap CMS) at /admin
    AppLA.jsx           app shell, router, theme
    HeaderLA.jsx        header, nav, LA/NYC city switcher, Pacific timecode
    FooterLA.jsx        footer
    HomeLA.jsx  WorkLA.jsx  SpaceLA.jsx  DevelopmentLA.jsx  MuralsLA.jsx  BookLA.jsx  ContactLA.jsx
    assets/min/         photography and the LA wordmark
    assets/uploads/     photos added through the editor land here
    uploads/            the custom display fonts
    _ds/                Dreamtone design system: tokens + component bundle
    netlify.toml        publish dir, cache headers, SPA + /admin redirects

## How content works

Pages never hardcode copy. `content-loader.js` fetches every file in `content/` and hands the
result to the pages as `window.LA_COPY`, `LA_PROJECTS`, `LA_LOFT`, `LA_DEV`, `LA_LINKS`,
`LA_LANES`, and `LA_THEME`. Editing a JSON file — by hand or through `/admin` — changes the
site. Adding a *new* field means touching a page file too.

## Notes

- JSX compiles in the browser via Babel standalone. Costs roughly a quarter-second at startup
  and needs no toolchain. Worth precompiling only if load time becomes a real complaint.
- React, Babel, and Lucide load from unpkg.com; fonts from Google Fonts. The site needs a
  network connection.
- Several display fonts carry personal or demo licenses (Perfect Girl, Deventer, Anthrope,
  Unique Kingdom demo). A public commercial site usually needs a commercial license — worth
  checking before launch.
- The sibling New York site is a separate deploy. Same design system, its own content.
