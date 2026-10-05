import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-64px 0px -75% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
  };

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Hackathons', id: 'hackathons' },
    { name: 'Credentials', id: 'credentials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="transition-all duration-300"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 64,
        zIndex: 100,
        background: scrolled ? 'rgba(10, 15, 31, 0.92)' : 'rgba(10, 15, 31, 0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(242, 241, 236, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 64px)',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={e => scrollTo(e, 'hero')}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
      >
        <span
          className="font-serif"
          style={{
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: '-0.02em',
            color: '#f2f1ec',
          }}
        >
          Pujit Balanthiran
        </span>
      </a>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 28px)', alignItems: 'center' }}>
        {links.map(link => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={e => scrollTo(e, link.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: isActive ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive ? '#ff6a2b' : '#9aa3b8',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '4px 0',
              }}
              onMouseEnter={e => { if (!isActive) e.target.style.color = '#f2f1ec'; }}
              onMouseLeave={e => { if (!isActive) e.target.style.color = '#9aa3b8'; }}
            >
              {link.name}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: '#ff6a2b',
                    borderRadius: 1,
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
