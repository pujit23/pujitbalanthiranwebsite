import React, { useState, useEffect } from 'react';

const Hero = () => {
  const roles = [
    'Software Developer · CSE @ VIT-AP',
    'Full Stack Builder · React · Node.js',
    'Building systems that matter · Open to internships',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 48);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
        return () => clearTimeout(t);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = e => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 56, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        background: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 80px 60px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '4px solid var(--border)',
      }}
    >
      {/* Top meta line */}
      <div style={{
        position: 'absolute', top: 72, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '3px solid var(--border)', paddingBottom: 10,
      }}>
        <span className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>
          CSE · VIT-AP · Bengaluru, 2026
        </span>
        <span className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 'bold' }}>
          Open to Work
        </span>
      </div>

      {/* Main headline */}
      <div style={{ width: '100%', paddingLeft: 40 }}>
        <h1
          className="font-display"
          style={{
            fontWeight: 400,
            fontSize: 'var(--text-heading)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--foreground)',
            marginBottom: '2rem',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            animation: 'slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both',
          }}
        >
          Pujit Balanthiran
        </h1>

        {/* Two-column below headline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px', paddingTop: '1.5rem' }}>
          {/* Left col — typing role + description */}
          <div>
            <p className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.08em', color: 'var(--primary)', marginBottom: 12 }}>
              {displayed}
              <span style={{ display: 'inline-block', width: 6, height: '1em', background: 'var(--primary)', marginLeft: 4, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </p>
            <p className="font-body" style={{ fontWeight: 400, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--foreground)', maxWidth: 420 }}>
              I build full-stack systems that think in graphs, speak in voices,
              and scale across real communities. Third-year in CSE — always building
              something worth showing.
            </p>
          </div>

          {/* Right col — CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '2.5rem', paddingLeft: '2rem' }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button
                onClick={scrollToProjects}
                className="retro-press"
                style={{
                  background: 'var(--primary)', color: 'var(--primary-foreground)',
                  fontFamily: "var(--font-space-grotesk)", fontSize: 12, fontWeight: 900,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '14px 28px', border: '3px solid var(--border)',
                  boxShadow: '6px 6px 0 0 var(--shadow-color)',
                  cursor: 'pointer',
                }}
              >
                View Projects
              </button>
              <a
                href="/PujitBalanthiran_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="retro-press"
                style={{
                  background: 'var(--card)', color: 'var(--card-foreground)',
                  fontFamily: "var(--font-space-grotesk)", fontSize: 12, fontWeight: 900,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '14px 28px', border: '3px solid var(--border)',
                  boxShadow: '6px 6px 0 0 var(--shadow-color)',
                  textDecoration: 'none', display: 'inline-block',
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SVG wave divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg width="100%" height="32" viewBox="0 0 1440 32" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 16 Q180 4 360 16 Q540 28 720 16 Q900 4 1080 16 Q1260 28 1440 16"
            stroke="var(--border)" strokeWidth="3" fill="none" opacity="0.8"
          />
          <path
            d="M0 22 Q180 10 360 22 Q540 34 720 22 Q900 10 1080 22 Q1260 34 1440 22"
            stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.9"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span className="font-pixel" style={{ fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Scroll</span>
        <svg width="12" height="16" viewBox="0 0 10 14" fill="none" style={{ animation: 'bounceDown 1.8s ease infinite' }}>
          <path d="M5 0V12M5 12L1 8M5 12L9 8" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="square" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
