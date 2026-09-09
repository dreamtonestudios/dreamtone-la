// Dreamtone LA — loads editable content from /content/*.json, then boots the site.
// Everything the CMS writes lands here as window.LA_* globals.
window.DTA = window.DTA || function (p) { return p; };

window.LA_CONTENT_READY = (async function () {
  const get = async (name) => {
    const r = await fetch('content/' + name + '.json?v=' + Date.now());
    if (!r.ok) throw new Error('Could not load content/' + name + '.json');
    return r.json();
  };

  const [theme, links, loft, dev, projects, lanes, copy] = await Promise.all(
    ['theme', 'links', 'loft', 'development', 'projects', 'lanes', 'copy'].map(get)
  );

  const img = (v) => (v && String(v).trim()) ? v.replace(/^\//, '') : null;

  window.LA_THEME = {
    theme: theme.mode || 'light',
    accent: theme.accentBrand || '#F0D030',
    la: theme.accentLA || '#B15CD9',
    emphasis: theme.emphasis || 'underline',
    headlineFont: theme.headlineFont || 'Biturg',
  };

  window.LA_LINKS = links;
  window.LA_COPY = copy;
  window.LA_LANES = lanes.lanes;
  window.LA_DEV = dev;

  window.LA_LOFT = Object.assign({}, loft, {
    heroImage: img(loft.heroImage),
    gallery: (loft.gallery || []).map((g) => ({ label: g.label, image: img(g.image) })),
  });

  window.LA_PROJECTS = (projects.projects || []).map((p) => Object.assign({}, p, {
    img: img(p.image),
    year: p.year && String(p.year).trim() ? p.year : '—',
  }));

  window.LA_IMG = {
    logoLA: 'assets/min/dreamtone-la-logo.png',
    blake: img(copy.contact && copy.contact.portrait),
    atc1: img('assets/min/atc-1.jpg'),
    atc2: img('assets/min/atc-2.jpg'),
    atc3: img('assets/min/atc-3.jpg'),
    atcStill: img('assets/min/atc-video-still.jpg'),
  };

  return true;
})().catch(function (e) {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('root').innerHTML =
      '<div style="font-family:monospace;padding:48px;line-height:1.6">' +
      '<strong>Content failed to load.</strong><br>' + e.message +
      '<br><br>This page reads its text from the <code>content/</code> folder and needs to be served over http. ' +
      'Opening index.html straight off the desktop will not work \u2014 use the Netlify URL, or run a local server.</div>';
  });
  throw e;
});
