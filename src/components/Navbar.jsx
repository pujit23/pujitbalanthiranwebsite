import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themeMode');
      if (saved && ['light', 'dark', 'cyberpunk'].includes(saved)) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'cyberpunk');
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (themeMode === 'cyberpunk') {
      document.documentElement.classList.add('cyberpunk');
    }
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-64px 0px -80% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 56, behavior: 'smooth' });
  };

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Hackathons', id: 'hackathons' },
    { name: 'Contact', id: 'contact' },
  ];

  const cycleTheme = () => {
    setThemeMode(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'cyberpunk';
      return 'light';
    });
  };

  const getThemeLabel = () => {
    if (themeMode === 'light') return '☀️ LIGHT';
    if (themeMode === 'dark') return '🌙 DARK';
    return '⚡ CYBER';
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: 56, zIndex: 100,
      background: 'var(--card)',
      borderBottom: '4px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 80px',
    }}>
      {/* Logo */}
      <span className="font-pixel" style={{ fontWeight: 900, fontSize: 14, letterSpacing: '0.08em', color: 'var(--foreground)' }}>
        P<span style={{ color: 'var(--primary)' }}>23</span>
      </span>

      {/* Links and Theme Toggles */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {links.map(link => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={e => scrollTo(e, link.id)}
              className="retro-press"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive ? 'var(--primary-foreground)' : 'var(--card-foreground)',
                background: isActive ? 'var(--primary)' : 'var(--card)',
                border: '3px solid var(--border)',
                boxShadow: isActive ? 'none' : '3px 3px 0 0 var(--shadow-color)',
                padding: '4px 10px',
                display: 'inline-block',
              }}
            >
              {link.name}
            </a>
          );
        })}

        {/* Theme Cycle Toggle Button */}
        <button
          onClick={cycleTheme}
          className="retro-press font-pixel"
          aria-label="Cycle theme mode"
          style={{
            fontSize: 9,
            padding: '5px 12px',
            background: themeMode === 'cyberpunk' ? '#ff007f' : 'var(--accent)',
            color: themeMode === 'cyberpunk' ? '#000000' : 'var(--accent-foreground)',
            border: '3px solid var(--border)',
            boxShadow: '3px 3px 0 0 var(--shadow-color)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 700,
            textTransform: 'uppercase',
            marginLeft: 8,
          }}
        >
          {getThemeLabel()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
