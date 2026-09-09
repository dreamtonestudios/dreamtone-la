// Dreamtone LA — Work. Exports window.LAWork.
(function () {
  function LAWork({ go }) {
    const { Button, Badge } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars, Slot = window.LASlot;
    const projects = window.LA_PROJECTS, L = window.LA_LINKS;
    const C = window.LA_COPY;
    const [filter, setFilter] = React.useState('All');
    const cats = ['All', ...Array.from(new Set(projects.map(p => p.cat)))];
    const shown = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 60px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.work.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '20px 0 0', color: '#fff', maxWidth: '14ch' }}>
              {C.work.headLead} <Mark>{C.work.headMark}</Mark>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', maxWidth: '58ch', marginTop: '24px' }}>
              {C.work.sub}
            </p>
          </div>
          <Bars />
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 32px 8px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '34px' }}>
            {cats.map(c =>
              <button key={c} onClick={() => setFilter(c)} style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '9px 16px', borderRadius: '999px', cursor: 'pointer',
                border: '1px solid ' + (filter === c ? 'var(--la)' : 'var(--site-border)'),
                background: filter === c ? 'var(--la)' : 'transparent',
                color: filter === c ? '#fff' : 'var(--site-text-2)'
              }}>{c}</button>
            )}
          </div>

          <div style={{ display: 'grid', gap: '56px' }}>
            {shown.map((p, i) =>
              <article key={p.id} style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
                gap: '36px', alignItems: 'center',
                direction: i % 2 ? 'rtl' : 'ltr'
              }}>
                <div style={{ direction: 'ltr', position: 'relative', aspectRatio: '16/10', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--site-border)', background: 'var(--site-bg-alt)' }}>
                  <Slot id={'la-work-' + p.id} label={p.slot || p.t} src={p.img} />
                </div>
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Badge tone="marigold">{p.cat}</Badge>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--site-text-3)' }}>{p.loc}{p.year !== '—' ? ' · ' + p.year : ''}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '-0.01em', margin: '14px 0 0', color: 'var(--site-text)' }}>{p.t}</h2>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--site-text-2)', maxWidth: '52ch', marginTop: '14px' }}>{p.d}</p>
                  <div style={{ display: 'flex', gap: '28px', marginTop: '20px', flexWrap: 'wrap' }}>
                    {[[p.client, 'Client'], [p.role, 'Role']].map(([k, v]) =>
                      <div key={v}>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 700, color: 'var(--site-text)' }}>{k}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--site-text-3)', marginTop: '3px' }}>{v}</div>
                      </div>
                    )}
                  </div>
                  {p.id === 'atc-mural' &&
                    <div style={{ marginTop: '22px' }}><Button variant="secondary" size="sm" onClick={() => go('murals')}>See the mural</Button></div>}
                </div>
              </article>
            )}
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px 88px' }}>
          <div style={{ border: '1px solid var(--site-border)', borderRadius: 'var(--radius-lg)', padding: '40px', display: 'flex', justifyContent: 'space-between', gap: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <Eyebrow>{C.work.licEyebrow}</Eyebrow>
              <h3 style={{ fontSize: '26px', margin: '10px 0 6px', color: 'var(--site-text)' }}>{C.work.licHead}</h3>
              <p style={{ fontSize: '16px', color: 'var(--site-text-2)', margin: 0, maxWidth: '48ch' }}>{C.work.licBody}</p>
            </div>
            <a href={L.gettyReel} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="primary">{C.work.licCta}</Button>
            </a>
          </div>
        </section>
      </div>);
  }
  window.LAWork = LAWork;
})();
