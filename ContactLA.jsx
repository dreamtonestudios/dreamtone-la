// Dreamtone LA — Contact. Exports window.LAContact.
(function () {
  function LAContact({ go }) {
    const { Button } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars, Slot = window.LASlot;
    const L = window.LA_LINKS, I = window.LA_IMG;
    const C = window.LA_COPY;

    const rows = [
      ['General', L.email, 'mailto:' + L.email],
      ['Director', L.directorEmail, 'mailto:' + L.directorEmail],
      ['Instagram', L.instagramHandle, L.instagram],
      ['New York', 'dreamtonenyc.com', L.nyc],
    ];

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 60px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.contact.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '20px 0 0', color: '#fff', maxWidth: '12ch' }}>
              {C.contact.headLead} <Mark>{C.contact.headMark}</Mark>
            </h1>
          </div>
          <Bars />
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
          <div>
            <Eyebrow>Reach us</Eyebrow>
            <div style={{ marginTop: '20px', borderTop: '1px solid var(--site-border)' }}>
              {rows.map(([k, v, href]) =>
                <a key={k} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
                  display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '18px 2px',
                  borderBottom: '1px solid var(--site-border)', textDecoration: 'none', alignItems: 'baseline'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--site-text-3)' }}>{k}</span>
                  <span style={{ fontSize: '17px', fontWeight: 600, color: 'var(--site-text)' }}>{v}</span>
                </a>
              )}
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.5, color: 'var(--site-text-2)', marginTop: '28px', maxWidth: '46ch' }}>
              {C.contact.note}
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => go('book')}>Start a project</Button>
              <Button variant="secondary" onClick={() => go('space')}>See the loft</Button>
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-lg)', border: '1px solid var(--site-border)', background: 'var(--site-bg-alt)' }}>
            <Slot id="la-contact-portrait" label="Blake — portrait" src={I.blake} />
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 88px' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--site-border)', height: '320px' }}>
            <iframe title="Fashion District, Los Angeles" src={L.map} style={{ width: '100%', height: '100%', border: 0 }} loading="lazy"></iframe>
          </div>
        </section>
      </div>);
  }
  window.LAContact = LAContact;
})();
