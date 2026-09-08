import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/pujitbalanthiran" },
    { name: "GitHub", url: "https://github.com/pujit23" },
  ];

  return (
    <section id="contact" ref={sectionRef}
      style={{
        padding: '100px 80px',
        background: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '4px solid var(--border)',
      }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--accent)' }} />
        006 — Contact
      </div>

      <h2 className="font-display" style={{ fontSize: 'var(--text-heading)', fontWeight: 400, lineHeight: 'var(--leading-tight)', color: 'var(--secondary-foreground)', marginBottom: '2.5rem', textTransform: 'uppercase' }}>
        Let's build<br />something.
      </h2>

      <p className="font-body" style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--secondary-foreground)', maxWidth: 520, marginBottom: '3.5rem', opacity: 0.95 }}>
        Currently looking for software engineering internships and collaborative opportunities.
        Whether you have a question or just want to say hi, I'll try my best to get back to you.
      </p>

      <a href="mailto:pujitbalanthiran23@gmail.com"
        className="retro-press"
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)',
          fontWeight: 900,
          color: 'var(--accent-foreground)',
          background: 'var(--accent)',
          border: '4px solid var(--border)',
          boxShadow: '6px 6px 0 0 var(--shadow-color)',
          textDecoration: 'none',
          padding: '14px 28px',
          display: 'inline-block',
          marginBottom: '3.5rem',
        }}>
        pujitbalanthiran23@gmail.com
      </a>

      <div style={{ display: 'flex', gap: 20 }}>
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
            className="retro-press"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--card-foreground)',
              background: 'var(--card)',
              textDecoration: 'none',
              border: '3px solid var(--border)',
              boxShadow: '4px 4px 0 0 var(--shadow-color)',
              padding: '12px 24px',
              display: 'inline-block',
            }}>
            {s.name}
          </a>
        ))}
      </div>

      {/* Large P23 watermark */}
      <div className="font-display" style={{
        position: 'absolute', right: -20, bottom: -40,
        fontSize: '22vw', fontWeight: 400,
        color: 'var(--accent)', opacity: 0.08, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        P23
      </div>
    </section>
  );
};

export default Contact;
