import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const hackathonsData = [
  { name: "Google TechSprint", badge: "Top 10 Finalist", organizer: "Google Developer Ecosystem", description: "Built and presented a functional technical solution under time constraints. Ranked Top 10 out of all participating teams." },
  { name: "Google DevSprint", badge: "Participant", organizer: "Google Developer Ecosystem", description: "Participated and collaborated in a fast-paced engineering sprint organized by the Google Developer ecosystem." },
  { name: "Google Solutions Challenge", badge: "Participant", organizer: "Google Developer Groups", description: "Developed a socially impactful technology solution addressing UN Sustainable Development Goals." },
  { name: "Smart India Hackathon", badge: "Participant", organizer: "Government of India", description: "Participated in India's largest national-level hackathon. Proposed and prototyped an engineering solution for a real government problem statement." },
];

const Hackathons = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="hackathons"
      ref={sectionRef}
      style={{
        padding: '100px clamp(20px, 6vw, 80px)',
        background: '#0a0f1f',
        position: 'relative',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#ff6a2b' }} />
          004 — Hackathons &amp; Sprints
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#f2f1ec',
            marginBottom: '3.5rem',
          }}
        >
          Built under pressure.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {hackathonsData.map((h, i) => (
            <div
              key={h.name}
              style={{
                background: '#0d1428',
                padding: '32px 28px',
                borderRadius: 14,
                border: '1px solid rgba(242, 241, 236, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.38)';
                e.currentTarget.style.boxShadow = '0 0 28px rgba(255, 106, 43, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 400, color: '#f2f1ec' }}>
                    {h.name}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: i === 0 ? '1px solid rgba(255, 106, 43, 0.4)' : '1px solid rgba(242, 241, 236, 0.1)',
                      background: i === 0 ? 'rgba(255, 106, 43, 0.12)' : 'rgba(10, 15, 31, 0.6)',
                      color: i === 0 ? '#ff6a2b' : '#9aa3b8',
                      padding: '3px 9px',
                      borderRadius: 9999,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      marginLeft: 12,
                    }}
                  >
                    {h.badge}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#ff6a2b', letterSpacing: '0.04em', marginBottom: 16, fontWeight: 500 }}>
                  {h.organizer}
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#9aa3b8', fontWeight: 300 }}>
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
