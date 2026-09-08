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
    <section id="hackathons" ref={sectionRef}
      style={{ padding: '100px 80px', borderBottom: '4px solid var(--border)', background: 'var(--background)' }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--primary)' }} />
        004 — Hackathons & Competitions
      </div>
      <h2 className="font-display" style={{ fontSize: 'var(--text-heading-sm)', fontWeight: 400, lineHeight: 1.05, color: 'var(--foreground)', marginBottom: '3.5rem', textTransform: 'uppercase' }}>
        Built under pressure.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {hackathonsData.map((h, i) => (
          <div
            key={h.name}
            className="retro-press"
            style={{
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              padding: '36px 40px',
              border: '4px solid var(--border)',
              boxShadow: '6px 6px 0 0 var(--shadow-color)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div className="font-body" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--foreground)' }}>{h.name}</div>
              <span
                className="font-pixel"
                style={{
                  fontSize: 8,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '2px solid var(--border)',
                  background: i === 0 ? 'var(--primary)' : 'var(--accent)',
                  color: i === 0 ? 'var(--primary-foreground)' : 'var(--accent-foreground)',
                  padding: '3px 8px',
                  fontWeight: 900,
                  boxShadow: '2px 2px 0 0 var(--shadow-color)',
                  whiteSpace: 'nowrap',
                  marginLeft: 12,
                }}
              >
                {h.badge}
              </span>
            </div>
            <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: 14, fontWeight: 700 }}>{h.organizer}</div>
            <p className="font-body" style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--foreground)' }}>{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
