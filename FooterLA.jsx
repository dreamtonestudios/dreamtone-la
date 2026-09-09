// Dreamtone LA — footer. Exports window.LAFooter.
(function () {
  function LAFooter({ go }) {
    const Eyebrow = window.LAEyebrow;
    const L = window.LA_LINKS;
    const C = window.LA_COPY;
    const linkStyle = { fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--site-text-2)', cursor: 'pointer', textDecoration: 'none' };
    return (
      <footer style={{
        borderTop: '1px solid var(--site-border)', padding: '56px 32px 40px',
        background: 'var(--site-bg)',
        display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
          <span aria-hidden="true" style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--la)', flexShrink: 0 }} />
          <span style={{ flex: 1, height: '1px', background: 'var(--site-border)' }} />
          <span aria-hidden="true" style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--la)', flexShrink: 0 }} />
        </div>
        <div style={{ maxWidth: '340px' }}>
          <img src={window.LA_IMG.logoLA} alt="Dreamtone Los Angeles" style={{ height: '40px', width: 'auto', display: 'block' }} />
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: '16px', lineHeight: 1.5,
            color: 'var(--site-text-2)', marginTop: '18px'
          }}>{C.footer.blurb}</p>
        </div>
        <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
          <div>
            <Eyebrow tone="muted">Los Angeles</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
              {[['Work', 'work'], ['The Loft', 'space'], ['Development', 'development'], ['Murals', 'murals'], ['Contact', 'contact'], ['Start a project', 'book']].map(([l, r], i) =>
                <a key={i} onClick={() => go && go(r)} style={linkStyle}>{l}</a>
              )}
            </div>
          </div>
          <div>
            <Eyebrow tone="muted">Connect</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
              <a href={'mailto:' + L.email} style={linkStyle}>{L.email}</a>
              <a href={L.instagram} target="_blank" rel="noreferrer" style={linkStyle}>{L.instagramHandle}</a>
              <a href={L.subscribe} target="_blank" rel="noreferrer" style={linkStyle}>Subscribe</a>
            </div>
          </div>
          <div>
            <Eyebrow tone="muted">Also in New York</Eyebrow>
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href={L.nyc} style={linkStyle}>dreamtonenyc.com</a>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--site-text-3)', lineHeight: 1.6 }}>
                110 Troutman St, Brooklyn
              </span>
            </div>
          </div>
        </div>
        <div style={{
          width: '100%', borderTop: '1px solid var(--site-border)', paddingTop: '20px',
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em',
          color: 'var(--site-text-3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px'
        }}>
          <span>© 2026 DREAMTONE LOS ANGELES</span>
          <span>DEVELOPMENT · FILM · PHOTO · MURALS · LOS ANGELES</span>
        </div>
      </footer>);
  }
  window.LAFooter = LAFooter;
})();
