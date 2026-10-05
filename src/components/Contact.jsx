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
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '100px clamp(20px, 6vw, 80px)',
        background: '#0a0f1f',
        position: 'relative',
      }}
    >
      <div
        className="max-w-4xl mx-auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontWeight: 500 }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#ff6a2b' }} />
          006 — Contact
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#ff6a2b' }} />
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#f2f1ec',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Let's build<br />something.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            lineHeight: 1.75,
            color: '#9aa3b8',
            maxWidth: 580,
            marginBottom: '3rem',
            fontWeight: 300,
            textAlign: 'center',
          }}
        >
          Currently looking for software engineering internships and collaborative opportunities.
          Whether you have a question or just want to say hi, I'll try my best to get back to you.
        </p>

        {/* Email Pill Button */}
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a
            href="mailto:pujitbalanthiran23@gmail.com"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              fontWeight: 500,
              color: '#f2f1ec',
              background: '#0d1428',
              border: '1px solid rgba(242, 241, 236, 0.12)',
              borderRadius: 12,
              padding: '16px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.4)';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(255, 106, 43, 0.14)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>pujitbalanthiran23@gmail.com</span>
            <span style={{ color: '#ff6a2b' }}>&rarr;</span>
          </a>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#9aa3b8',
                background: '#0d1428',
                border: '1px solid rgba(242, 241, 236, 0.08)',
                borderRadius: 8,
                padding: '8px 18px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#f2f1ec';
                e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#9aa3b8';
                e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.08)';
              }}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
