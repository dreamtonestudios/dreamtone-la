// Dreamtone LA — Start a project (inquiry). Exports window.LABook.
(function () {
  function LABook({ go }) {
    const { Button } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Eyebrow = window.LAEyebrow;
    const Mark = window.LAMark, Bars = window.LABars;
    const L = window.LA_LINKS;
    const C = window.LA_COPY;

    const kinds = C.book.kinds;

    return (
      <div>
        <section style={{ background: '#0B0B0B' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 60px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--la)' }}>{C.book.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(46px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: '20px 0 0', color: '#fff', maxWidth: '13ch' }}>
              {C.book.headLead} <Mark>{C.book.headMark}</Mark>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: '56ch', marginTop: '24px' }}>
              {C.book.sub}
            </p>
          </div>
          <Bars />
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 0' }}>
          <Eyebrow>{C.book.kindsEyebrow}</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '18px', marginTop: '22px' }}>
            {kinds.map(k =>
              <div key={k.t} onClick={() => k.r && go(k.r)} style={{
                border: '1px solid var(--site-border)', borderTop: '2px solid var(--la)',
                borderRadius: 'var(--radius-md)', padding: '22px', cursor: k.r ? 'pointer' : 'default'
              }}>
                <h3 style={{ fontSize: '19px', margin: '0 0 8px', color: 'var(--site-text)' }}>{k.t}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.5, color: 'var(--site-text-2)', margin: 0 }}>{k.d}</p>
              </div>
            )}
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 88px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--site-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '760px' }}>
            <iframe title="Dreamtone LA inquiry" src={L.bookingForm} style={{ width: '100%', height: '760px', border: 0 }} loading="lazy"></iframe>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', margin: '0 0 12px', color: 'var(--site-text)' }}>{C.book.altHead}</h3>
            <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--site-text-2)', maxWidth: '44ch' }}>
              {C.book.altBody}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '22px', alignItems: 'flex-start' }}>
              <a href={'mailto:' + L.email} style={{ textDecoration: 'none' }}><Button variant="primary">{L.email}</Button></a>
              <a href={'mailto:' + L.directorEmail} style={{ textDecoration: 'none' }}><Button variant="ghost">{L.directorEmail}</Button></a>
              <a href={L.instagram} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Button variant="ghost">{L.instagramHandle}</Button></a>
            </div>
          </div>
        </section>
      </div>);
  }
  window.LABook = LABook;
})();
