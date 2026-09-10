// Dreamtone LA — app shell + router + theme. Exports window.LAApp.
(function(){
  function Mark({ children, ...p }){
    return <span className="dt-mark" {...p}>{children}</span>;
  }
  window.LAMark = Mark;

  function Slot({ id, label, radius, src }){
    return React.createElement('image-slot', {
      id, shape:'rect', radius, placeholder: label || 'Drop a photo', src,
      style:{ width:'100%', height:'100%', display:'block' },
    });
  }
  window.LASlot = Slot;

  // Eyebrow that reads on light grounds — the DS marigold one vanishes on paper.
  function LAEyebrow({ children }){
    return (
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.16em',
        textTransform:'uppercase', color:'var(--la)', fontWeight:700 }}>{children}</div>
    );
  }
  window.LAEyebrow = LAEyebrow;

  function Bars({ height=22 }){
    const cols = ['#bfbfbf','#bfbf00','#00bfbf','#00bf00','#bf00bf','#bf0000','#0000bf'];
    return (
      <div aria-hidden="true" style={{display:'flex',width:'100%',height:height+'px'}}>
        {cols.map((c,i)=>(<div key={i} style={{flex:1,background:c}} />))}
      </div>
    );
  }
  window.LABars = Bars;


  const DISPLAY_FONTS = {
    'Biturg': "'Biturg', 'Anthrope', 'Anton', sans-serif",
    'Helicopter': "'Helicopter', 'Anthrope', 'Anton', sans-serif",
    'Perfect Girl': "'Perfect Girl', 'Anthrope', 'Anton', sans-serif",
    'Unique Kingdom': "'Unique Kingdom', 'Anthrope', 'Anton', sans-serif",
    'Deventer': "'Deventer', 'Anthrope', 'Anton', sans-serif",
    'Anthrope': "'Anthrope', 'Anton', sans-serif",
    'Anton': "'Anton', sans-serif",
  };

  // Real addresses. The Netlify catch-all rewrite sends every path to index.html,
  // so these are genuine, shareable, crawlable URLs — not fragments.
  const PATHS = { home:'/', work:'/work', space:'/the-loft', murals:'/murals',
                  development:'/development', book:'/start', contact:'/contact' };
  window.LA_PATHS = PATHS;
  const ROUTES = Object.keys(PATHS).reduce((o,k)=>{ o[PATHS[k]]=k; return o; },{});

  const META = {
    home:        ['Dreamtone Los Angeles \u2014 Film, Photo, Murals, Development',
                  'A creative canvas and production ecosystem in Los Angeles. Creative development, music videos, documentary, film and TV, murals, and a photography loft in the Fashion District.'],
    work:        ['Work \u2014 Dreamtone Los Angeles',
                  'Selected music video, documentary, film and television work from Dreamtone LA.'],
    space:       ['The Loft \u2014 Dreamtone Los Angeles',
                  'A daylight photography loft in the Downtown Los Angeles Fashion District. Square footage, availability, and booking.'],
    murals:      ['Murals \u2014 Dreamtone Los Angeles',
                  'Commissioned mural work across Los Angeles with our exclusive mural partner, Westside Muralist. Offices, retail, hospitality, and public walls.'],
    development: ['Creative Development \u2014 Dreamtone Los Angeles',
                  'A treatment, budget, plan, and deck in three weeks, for a fixed fee. Credited back if we shoot it.'],
    book:        ['Start a project \u2014 Dreamtone Los Angeles',
                  'Tell us what it is about. One form, whatever the job is. We answer from Los Angeles.'],
    contact:     ['Contact \u2014 Dreamtone Los Angeles',
                  'Reach Dreamtone Los Angeles \u2014 email, Instagram, and the Fashion District studio.'],
  };

  const ORIGIN = 'https://www.dreamtonela.com';

  function setMeta(route){
    const m = META[route] || META.home;
    document.title = m[0];
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', m[1]);
    set('meta[property="og:title"]', 'content', m[0]);
    set('meta[property="og:description"]', 'content', m[1]);
    set('meta[property="og:url"]', 'content', ORIGIN + (PATHS[route] || '/'));
    set('link[rel="canonical"]', 'href', ORIGIN + (PATHS[route] || '/'));
  }

  function LAApp(){
    const TWEAK_DEFAULTS = window.LA_THEME;
    const useTweaks = window.useTweaks;
    const [t, setTweak] = useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, ()=>{}];

    const [route, setRoute] = React.useState(() => ROUTES[window.location.pathname.replace(/\/+$/,'') || '/'] || 'home');

    const go = (r) => {
      setRoute(r);
      const p = PATHS[r] || '/';
      if (window.location.pathname !== p) window.history.pushState({ route:r }, '', p);
      setMeta(r);
      window.scrollTo(0,0);
    };

    // Back and forward buttons move between pages the way a visitor expects.
    React.useEffect(()=>{
      const onPop = () => {
        const r = ROUTES[window.location.pathname.replace(/\/+$/,'') || '/'] || 'home';
        setRoute(r); setMeta(r);
      };
      window.addEventListener('popstate', onPop);
      return () => window.removeEventListener('popstate', onPop);
    },[]);

    React.useEffect(()=>{ setMeta(route); },[route]);

    React.useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });

    const ready = !!window.DreamtoneNYCDesignSystem_4e9f52;

    const rootClass = `theme-${t.theme} emph-${t.emphasis}` + (t.theme==='light' ? ' dt-paper' : '');
    const rootStyle = {
      minHeight:'100vh',
      background:'var(--site-bg)',
      color:'var(--site-text)',
      fontFamily:'var(--font-sans)',
      '--accent': t.accent,
      '--accent-hover': t.accent,
      '--accent-press': t.accent,
      '--on-accent': '#0B0B0B',
      '--la': t.la,
      '--font-display': DISPLAY_FONTS[t.headlineFont] || DISPLAY_FONTS.Anton,
    };

    const Panel = window.TweaksPanel;
    const TweakSection = window.TweakSection;
    const TweakRadio = window.TweakRadio;
    const TweakColor = window.TweakColor;

    const panel = Panel ? (
      <Panel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.theme} options={['dark','light']}
                    onChange={(v)=>setTweak('theme', v)} />
        <TweakColor label="LA accent" value={t.la}
                    options={['#B15CD9','#E85D3D','#7BD4D0','#E8527A']}
                    onChange={(v)=>setTweak('la', v)} />
        <TweakColor label="Brand accent" value={t.accent}
                    options={['#F0D030','#F5853F','#E0452B']}
                    onChange={(v)=>setTweak('accent', v)} />
        <TweakSection label="Brand voice" />
        <TweakRadio label="Emphasis" value={t.emphasis} options={['underline','plain']}
                    onChange={(v)=>setTweak('emphasis', v)} />
        <TweakRadio label="Headline" value={t.headlineFont} options={['Biturg','Helicopter','Perfect Girl','Unique Kingdom','Deventer','Anthrope','Anton']}
                    onChange={(v)=>setTweak('headlineFont', v)} />
      </Panel>
    ) : null;

    if(!ready){
      return (
        <div className={rootClass} style={rootStyle}>
          <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',
            color:'var(--site-text-3)',fontFamily:'monospace',fontSize:'12px',letterSpacing:'0.16em',textTransform:'uppercase'}}>
            Loading the Dreamtone system…
          </div>
          {panel}
        </div>
      );
    }

    let screen;
    if (route==='work') screen = <window.LAWork go={go} />;
    else if (route==='space') screen = <window.LASpace go={go} />;
    else if (route==='murals') screen = <window.LAMurals go={go} />;
    else if (route==='development') screen = <window.LADevelopment go={go} />;
    else if (route==='book') screen = <window.LABook go={go} />;
    else if (route==='contact') screen = <window.LAContact go={go} />;
    else screen = <window.LAHome go={go} />;

    return (
      <div className={rootClass} style={rootStyle}>
        <window.LAHeader route={route} go={go} />
        {screen}
        <window.LAFooter go={go} />
        {panel}
      </div>
    );
  }
  window.LAApp = LAApp;
})();
