// Dreamtone LA — site header with city switcher. Exports window.LAHeader.
(function () {
  function TimeCode() {
    const [tc, setTc] = React.useState('00:00:00:00');
    React.useEffect(() => {
      const p = (n) => String(n).padStart(2, '0');
      const id = setInterval(() => {
        const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
        const f = Math.floor((Date.now() % 1000) / 1000 * 24);
        setTc(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}:${p(f)}`);
      }, 1000 / 24);
      return () => clearInterval(id);
    }, []);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span aria-hidden="true" style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E0452B', boxShadow: '0 0 8px #E0452B', animation: 'dt-rec 1.2s steps(1,end) infinite', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.78)', fontVariantNumeric: 'tabular-nums' }}>{tc}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.42)' }}>PT</span>
      </div>);
  }

  function CitySwitch() {
    const L = window.LA_LINKS;
    const base = {
      fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em',
      textTransform: 'uppercase', padding: '5px 10px', borderRadius: '999px',
      textDecoration: 'none', lineHeight: 1, display: 'inline-flex', alignItems: 'center'
    };
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #33322F', borderRadius: '999px', padding: '3px' }}>
        <span style={{ ...base, background: 'var(--la)', color: '#fff', fontWeight: 700 }}>LA</span>
        <a href={L.nyc} style={{ ...base, color: 'rgba(255,255,255,0.6)' }}>NYC</a>
      </div>);
  }

  function LAHeader({ route, go }) {
    const { Button } = window.DreamtoneNYCDesignSystem_4e9f52;
    const Bars = window.LABars;
    const narrow = window.LAuseNarrow(920);
    const [open, setOpen] = React.useState(false);
    const links = [['home', 'Home'], ['work', 'Work'], ['space', 'The Loft'], ['development', 'Development'], ['murals', 'Murals'], ['contact', 'Contact']];
    const href = (id) => (window.LA_PATHS && window.LA_PATHS[id]) || '/';
    const active = (id) => route === id;
    React.useEffect(() => { if (!narrow) setOpen(false); }, [narrow]);
    const nav = (id) => { setOpen(false); go(id); };

    const linkStyle = (id, big) => ({
      fontFamily: 'var(--font-sans)', fontSize: big ? '18px' : '14px', fontWeight: 600,
      padding: big ? '14px 4px' : '8px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
      color: active(id) ? '#FFFFFF' : 'rgba(255,255,255,0.68)',
      boxShadow: active(id) ? (big ? 'inset 3px 0 0 var(--la)' : 'inset 0 -3px 0 var(--la)') : 'none',
      paddingLeft: big ? '14px' : undefined, display: big ? 'block' : undefined
    });

    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#0B0B0B', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #23231f'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: narrow ? '12px 18px' : '14px 32px', gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: 0 }}>
            <a href="/" onClick={(e) => { e.preventDefault(); nav('home'); }} style={{ cursor: 'pointer', display: 'inline-flex' }}>
              <img src={window.LA_IMG.logoLA} alt="Dreamtone Los Angeles" style={{ height: narrow ? '28px' : '34px', width: 'auto', display: 'block' }} />
            </a>
            {!narrow && <TimeCode />}
          </div>

          {narrow ? (
            <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(v => !v)}
              style={{
                width: '44px', height: '44px', flexShrink: 0, display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer',
                background: 'transparent', border: '1px solid #33322F', borderRadius: 'var(--radius-sm)', padding: 0
              }}>
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--la)' : '#fff', transform: open ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 160ms ease-out' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: '#fff', opacity: open ? 0 : 1, transition: 'opacity 120ms ease-out' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--la)' : '#fff', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 160ms ease-out' }} />
            </button>
          ) : (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '3px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {links.map(([id, label]) =>
                <a key={id} href={href(id)} onClick={(e) => { e.preventDefault(); nav(id); }} style={linkStyle(id)}>{label}</a>
              )}
              <div style={{ width: '10px' }} />
              <CitySwitch />
              <div style={{ width: '10px' }} />
              <Button size="sm" variant="primary" onClick={() => nav('book')}>Start a project</Button>
            </nav>
          )}
        </div>

        {narrow && open &&
          <nav style={{ borderTop: '1px solid #23231f', padding: '10px 18px 22px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {links.map(([id, label]) =>
              <a key={id} href={href(id)} onClick={(e) => { e.preventDefault(); nav(id); }} style={linkStyle(id, true)}>{label}</a>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '18px', flexWrap: 'wrap' }}>
              <CitySwitch />
              <TimeCode />
            </div>
            <div style={{ marginTop: '16px' }}>
              <Button size="lg" variant="primary" onClick={() => nav('book')}>Start a project</Button>
            </div>
          </nav>}

        <Bars height={6} />
      </header>);
  }
  window.LAHeader = LAHeader;

  // Shared viewport hook — true when the window is at or below `px` wide.
  window.LAuseNarrow = function (px) {
    const q = '(max-width:' + px + 'px)';
    const [n, setN] = React.useState(() => window.matchMedia(q).matches);
    React.useEffect(() => {
      const m = window.matchMedia(q);
      const on = (e) => setN(e.matches);
      m.addEventListener('change', on);
      setN(m.matches);
      return () => m.removeEventListener('change', on);
    }, [q]);
    return n;
  };
})();
