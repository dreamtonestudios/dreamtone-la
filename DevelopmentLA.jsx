// Dreamtone LA — Creative Development. Exports window.LADevelopment.
(function () {
  function LADevelopment({ go }) {
    const { Button, RomanList } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars;
    const D = window.LA_DEV;
    const C = window.LA_COPY;

    const steps = D.steps;

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 64px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.development.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '20px 0 0', color: '#fff', maxWidth: '13ch' }}>
              {C.development.headLead} <Mark>{C.development.headMark}</Mark>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: '60ch', marginTop: '24px' }}>
              {C.development.sub} {D.works}
            </p>
            <div style={{ display: 'flex', gap: '40px', marginTop: '36px', flexWrap: 'wrap' }}>
              {[[D.turnaround, 'Turnaround'], [D.fee, 'Fixed fee'], [D.credit, 'If we shoot it']].map(([k, v]) =>
                <div key={v}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: 'var(--accent)', fontVariantNumeric: 'tabular-nums' }}>{k}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '5px' }}>{v}</div>
                </div>
              )}
            </div>
          </div>
          <Bars />
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px' }}>
          <Eyebrow>{C.development.stepsEyebrow}</Eyebrow>
          <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '28px' }}>
            {steps.map(s =>
              <div key={s.n} style={{ borderTop: '2px solid var(--la)', paddingTop: '18px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--la)', lineHeight: 1 }}>{s.n}.</div>
                <h3 style={{ fontSize: '21px', margin: '12px 0 8px', color: 'var(--site-text)' }}>{s.t}</h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--site-text-2)', margin: 0 }}>{s.d}</p>
              </div>
            )}
          </div>
        </section>

        <section style={{ background: 'var(--site-bg-alt)', borderTop: '1px solid var(--site-border)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <Eyebrow>{C.development.deliverablesEyebrow}</Eyebrow>
              <div style={{ marginTop: '20px' }}><RomanList items={D.deliverables} /></div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(30px,4vw,52px)', lineHeight: 0.95, margin: 0, color: 'var(--site-text)', whiteSpace: 'pre-line' }}>{C.development.closeHead}</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', lineHeight: 1.5, color: 'var(--site-text-2)', marginTop: '20px', maxWidth: '46ch' }}>
                {C.development.closeBody}
              </p>
              <div style={{ marginTop: '26px' }}>
                <Button variant="primary" size="lg" onClick={() => go('book')}>{C.development.cta}</Button>
              </div>
            </div>
          </div>
        </section>
      </div>);
  }
  window.LADevelopment = LADevelopment;
})();
