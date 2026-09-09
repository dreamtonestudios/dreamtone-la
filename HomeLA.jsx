// Dreamtone LA — Home. Loft-first. Exports window.LAHome.
(function () {
  function LaneRow({ lane, go }) {
    const [hov, setHov] = React.useState(false);
    return (
      <a onClick={() => go(lane.id === 'space' ? 'space' : lane.id === 'development' ? 'development' : lane.id === 'murals' ? 'murals' : 'work')}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1.4fr) auto', gap: '24px',
          alignItems: 'baseline', padding: '22px 4px', cursor: 'pointer',
          borderBottom: '1px solid var(--site-border)',
          background: hov ? 'color-mix(in srgb, var(--la) 7%, transparent)' : 'transparent',
          transition: 'background 160ms ease-out'
        }}>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-display)', textTransform: 'uppercase',
          fontSize: 'clamp(26px,3.2vw,40px)', letterSpacing: '0.01em', lineHeight: 1,
          color: hov ? 'var(--la)' : 'var(--site-text)', transition: 'color 160ms ease-out'
        }}>{lane.t}</h3>
        <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.5, color: 'var(--site-text-2)' }}>{lane.d}</p>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em',
          textTransform: 'uppercase', color: hov ? 'var(--la)' : 'var(--site-text-3)', whiteSpace: 'nowrap'
        }}>{lane.v} ▸</span>
      </a>);
  }

  function LAHome({ go }) {
    const { Button, RomanList } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars, Slot = window.LASlot;
    const L = window.LA_LINKS, loft = window.LA_LOFT, lanes = window.LA_LANES, projects = window.LA_PROJECTS;
    const C = window.LA_COPY;

    return (
      <div>
        {/* HERO — the loft */}
        <section style={{ background: '#0B0B0B', position: 'relative' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px 72px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '52px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid var(--la)', borderRadius: '999px', padding: '6px 14px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--la)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.home.eyebrow}</span>
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase',
                fontSize: 'clamp(50px,7vw,104px)', lineHeight: 0.9, letterSpacing: '-0.02em',
                margin: '24px 0 0', maxWidth: '13ch', color: '#fff'
              }}>{C.home.headLead} <Mark>{C.home.headMark}</Mark></h1>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: '58ch', marginTop: '26px' }}>
                {loft.blurb}
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '34px', flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" onClick={() => go('space')}>{C.home.ctaPrimary}</Button>
                <Button variant="secondary" size="lg" onClick={() => go('book')}>{C.home.ctaSecondary}</Button>
              </div>
              <div style={{ display: 'flex', gap: '28px', marginTop: '38px', flexWrap: 'wrap' }}>
                {[[loft.sqft, 'Photography loft'], ['Fashion District', 'Downtown Los Angeles'], [loft.status, 'Opening ' + loft.opening]].map(([k, v]) =>
                  <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 800, color: '#fff' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{v}</span>
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-lg)', border: '1px solid #33322F', background: 'var(--site-bg-alt)' }}>
              <Slot id="la-hero-loft" label="The Fashion District loft" src={loft.heroImage} />
              <div style={{ position: 'absolute', left: '16px', bottom: '16px', pointerEvents: 'none', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(11,11,11,0.72)', padding: '7px 12px', borderRadius: '999px' }}>
                Under construction · 2026
              </div>
            </div>
          </div>
          <Bars />
        </section>

        {/* POSITIONING */}
        <section style={{ background: 'var(--site-bg)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 32px 64px' }}>
            <Eyebrow>{C.home.statementEyebrow}</Eyebrow>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,3vw,34px)', lineHeight: 1.35, color: 'var(--site-text)', margin: '20px 0 0', textWrap: 'pretty' }}>
              {C.home.statement} <Mark>{C.home.statementMark}</Mark>.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--site-text-2)', maxWidth: '62ch', marginTop: '24px' }}>
              {C.home.statementBody}
            </p>
          </div>
        </section>

        {/* LANES */}
        <section style={{ background: 'var(--site-bg-alt)', borderTop: '1px solid var(--site-border)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px' }}>
            <Eyebrow>{C.home.lanesEyebrow}</Eyebrow>
            <div style={{ marginTop: '26px', borderTop: '1px solid var(--site-border)' }}>
              {lanes.map((l) => <LaneRow key={l.id} lane={l} go={go} />)}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PITCH */}
        <Bars />
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.home.devEyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(38px,5vw,66px)', lineHeight: 0.95, letterSpacing: '-0.01em', margin: '18px 0 0', color: '#fff' }}>{C.home.devHead}</h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', marginTop: '22px', maxWidth: '52ch' }}>
                {C.home.devBody}
              </p>
              <div style={{ marginTop: '30px' }}>
                <Button variant="primary" onClick={() => go('development')}>{C.home.devCta}</Button>
              </div>
            </div>
            <div style={{ border: '1px solid #33322F', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
              <RomanList items={window.LA_DEV.deliverables} />
              <div style={{ display: 'flex', gap: '32px', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #33322F', flexWrap: 'wrap' }}>
                {[[window.LA_DEV.turnaround, 'Turnaround'], [window.LA_DEV.fee, 'Fixed fee']].map(([k, v]) =>
                  <div key={v}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--accent)', fontVariantNumeric: 'tabular-nums' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{v}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section style={{ background: 'var(--site-bg)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' }}>
              <div>
                <Eyebrow>{C.home.workEyebrow}</Eyebrow>
                <h2 style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.01em', margin: '10px 0 0', color: 'var(--site-text)' }}>{C.home.workHead} <Mark>{C.home.workHeadMark}</Mark></h2>
              </div>
              <Button variant="secondary" onClick={() => go('work')}>{C.home.workCta}</Button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
              {projects.filter((p) => p.featured !== false).slice(0, 3).map((p) =>
                <a key={p.id} onClick={() => go(p.cat === 'Mural Commission' ? 'murals' : 'work')} style={{ cursor: 'pointer', display: 'block' }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--site-border)', background: 'var(--site-bg-alt)' }}>
                    <Slot id={'la-home-' + p.id} label={p.slot || p.t} src={p.img} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--la)', marginTop: '14px' }}>{p.cat} · {p.loc}</div>
                  <h3 style={{ margin: '6px 0 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--site-text)' }}>{p.t}</h3>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Bars />
        <section>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px 96px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(38px,6vw,78px)', lineHeight: 1.0, letterSpacing: '-0.02em', margin: '0 0 20px', color: 'var(--site-text)' }}>{C.home.ctaHead}</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', color: 'var(--site-text-2)', maxWidth: '46ch', margin: '0 auto 30px' }}>
              {C.home.ctaSub}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => go('book')}>{C.home.ctaButton}</Button>
              <a href={L.instagram} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="lg">{L.instagramHandle}</Button>
              </a>
            </div>
          </div>
        </section>
      </div>);
  }
  window.LAHome = LAHome;
})();
