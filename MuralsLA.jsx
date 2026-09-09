// Dreamtone LA — Murals. Exports window.LAMurals.
(function () {
  function LAMurals({ go }) {
    const { Button, Badge } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars, Slot = window.LASlot;
    const I = window.LA_IMG;
    const C = window.LA_COPY;

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 60px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.murals.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '20px 0 0', color: '#fff', maxWidth: '13ch' }}>
              {C.murals.headLead} <Mark>{C.murals.headMark}</Mark>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: '58ch', marginTop: '24px' }}>
              {C.murals.sub}
            </p>
          </div>
          <Bars />
        </section>

        {/* ATC case study */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 0' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge tone="marigold">Commission</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--site-text-3)' }}>{C.murals.caseTag}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4.4vw,58px)', letterSpacing: '-0.01em', margin: '16px 0 0', color: 'var(--site-text)' }}>{C.murals.caseTitle}</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--site-text-2)', maxWidth: '62ch', marginTop: '16px' }}>
            {C.murals.caseBody}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '18px', marginTop: '32px' }}>
            {[I.atc1, I.atc2, I.atc3].map((src, i) =>
              <div key={i} style={{ position: 'relative', aspectRatio: i === 0 ? '4/5' : '4/5', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--site-border)', background: 'var(--site-bg-alt)' }}>
                <Slot id={'la-atc-' + i} label={'Above The Clouds — ' + (i + 1)} src={src} />
              </div>
            )}
          </div>
        </section>

        {/* Commission a wall */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px 88px' }}>
          <div style={{
            border: '2px solid #0B0B0B', borderRadius: 'var(--radius-lg)', padding: '44px',
            background: 'linear-gradient(135deg,#FFFFFF 0%, var(--accent) 100%)'
          }}>
            <Eyebrow>{C.murals.commissionEyebrow}</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 0.95, margin: '14px 0 0', color: '#0B0B0B', maxWidth: '16ch' }}>
              {C.murals.commissionHead}
            </h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', lineHeight: 1.5, color: '#0B0B0B', maxWidth: '52ch', marginTop: '18px' }}>
              {C.murals.commissionBody}
            </p>
            <div style={{ marginTop: '28px' }}>
              <Button variant="primary" size="lg" onClick={() => go('book')}>{C.murals.commissionCta}</Button>
            </div>
          </div>
        </section>
      </div>);
  }
  window.LAMurals = LAMurals;
})();
