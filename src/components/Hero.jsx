import React from 'react';

const Hero = () => {
  const scrollToProjects = e => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
  };

  const scrollToAbout = e => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
  };

  const scrollToContact = e => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '94vh',
        background: '#0a0f1f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px clamp(20px, 6vw, 80px) 60px',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/hero-bg.jpg?v=2"
          alt="Twilight lake background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      <div style={{ maxWidth: 840, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Name */}
        <h1
          className="font-serif"
          style={{
            fontWeight: 400,
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            lineHeight: 1.1,
            color: '#f2f1ec',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
            animation: 'slideUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          Pujit Balanthiran
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            fontWeight: 300,
            letterSpacing: '0.04em',
            color: '#9aa3b8',
            marginBottom: '1.5rem',
          }}
        >
          Plan hard. Build <span style={{ color: '#ff6a2b', fontWeight: 500 }}>harder</span>.
        </p>

        {/* Bio Copy */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(154, 163, 184, 0.85)',
            maxWidth: 580,
            marginBottom: '2rem',
          }}
        >
          Software Developer &amp; CSE student at VIT-AP, building full-stack systems that think in graphs,
          speak in voices, and scale across real communities.
        </p>


        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={scrollToProjects}
            style={{
              background: '#0d1428',
              color: '#f2f1ec',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.05em',
              padding: '12px 28px',
              borderRadius: 8,
              border: '1px solid rgba(242, 241, 236, 0.12)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.4)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(255, 106, 43, 0.14)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            style={{
              background: '#0d1428',
              color: '#f2f1ec',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.05em',
              padding: '12px 28px',
              borderRadius: 8,
              border: '1px solid rgba(242, 241, 236, 0.12)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.4)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(255, 106, 43, 0.14)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        onClick={scrollToAbout}
        aria-label="Scroll down to About section"
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#9aa3b8',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          zIndex: 1,
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ff6a2b'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#9aa3b8'; }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'bounceDown 2s ease infinite' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
