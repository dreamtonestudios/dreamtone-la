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
    const links = [['work', 'Work'], ['space', 'The Loft'], ['development', 'Development'], ['murals', 'Murals'], ['contact', 'Contact']];
    const active = (id) => route === id;
    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#0B0B0B', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #23231f'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 32px', gap: '20px', flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'inline-flex' }}>
              <img src={window.LA_IMG.logoLA} alt="Dreamtone Los Angeles" style={{ height: '34px', width: 'auto', display: 'block' }} />
            </a>
            <TimeCode />
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '3px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {links.map(([id, label]) =>
              <a key={id} onClick={() => go(id)}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600,
                  padding: '8px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                  color: active(id) ? '#FFFFFF' : 'rgba(255,255,255,0.68)',
                  boxShadow: active(id) ? 'inset 0 -3px 0 var(--la)' : 'none'
                }}>{label}</a>
            )}
            <div style={{ width: '10px' }} />
            <CitySwitch />
            <div style={{ width: '10px' }} />
            <Button size="sm" variant="primary" onClick={() => go('book')}>Start a project</Button>
          </nav>
        </div>
        <Bars height={6} />
      </header>);
  }
  window.LAHeader = LAHeader;
})();
