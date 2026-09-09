// Dreamtone LA — The Loft (studio, under construction). Exports window.LASpace.
(function () {
  function LASpace({ go }) {
    const { Button, RomanList } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars, Slot = window.LASlot;
    const loft = window.LA_LOFT, L = window.LA_LINKS;
    const C = window.LA_COPY;

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid var(--la)', borderRadius: '999px', padding: '6px 14px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--la)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{loft.status}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '22px 0 0', color: '#fff', maxWidth: '13ch' }}>
              {C.loft.headLead} <Mark>{C.loft.headMark}</Mark>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: '58ch', marginTop: '24px' }}>
              {loft.blurb}
            </p>
            <div style={{ display: 'flex', gap: '32px', marginTop: '34px', flexWrap: 'wrap' }}>
              {[[loft.sqft, 'Floor area'], ['Downtown LA', 'Fashion District'], ['Photography', 'Primary use'], [loft.opening, 'Opening']].map(([k, v]) =>
                <div key={v}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '19px', fontWeight: 800, color: '#fff' }}>{k}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{v}</div>
                </div>
              )}
            </div>
          </div>
          <Bars />
        </section>

        {/* Construction gallery */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '18px' }}>
            {loft.gallery.map((g, i) =>
              <div key={i} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--site-border)', background: 'var(--site-bg-alt)' }}>
                <Slot id={'la-loft-' + i} label={g.label} src={g.image} />
              </div>
            )}
          </div>
        </section>

        {/* Summary — roman numerals, the no-bullets device */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <Eyebrow>{C.loft.summaryEyebrow}</Eyebrow>
              <div style={{ marginTop: '20px' }}>
                <RomanList items={loft.summary} />
              </div>
            </div>
            <div style={{ border: '1px solid var(--site-border)', borderRadius: 'var(--radius-lg)', padding: '32px', background: 'var(--site-bg-alt)' }}>
              <h3 style={{ fontSize: '24px', margin: '0 0 12px', color: 'var(--site-text)' }}>{C.loft.notListedHead}</h3>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--site-text-2)', margin: '0 0 22px', maxWidth: '46ch' }}>
                {C.loft.notListedBody}
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={() => go('book')}>{C.loft.cta}</Button>
                <a href={'mailto:' + L.email + '?subject=Dreamtone%20LA%20loft'} style={{ textDecoration: 'none' }}>
                  <Button variant="ghost">{L.email}</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meanwhile, Brooklyn */}
        <Bars />
        <section style={{ background: 'var(--site-bg-alt)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px', display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <Eyebrow>{C.loft.nycEyebrow}</Eyebrow>
              <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--site-text-2)', margin: '10px 0 0', maxWidth: '52ch' }}>
                {C.loft.nycBody}
              </p>
            </div>
            <a href={L.nyc} style={{ textDecoration: 'none' }}><Button variant="secondary">{C.loft.nycCta}</Button></a>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 88px' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--site-border)', height: '340px' }}>
            <iframe title="Fashion District, Los Angeles" src={L.map} style={{ width: '100%', height: '100%', border: 0 }} loading="lazy"></iframe>
          </div>
        </section>
      </div>);
  }
  window.LASpace = LASpace;
})();
