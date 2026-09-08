import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    name: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS",
    description: "Completed the AWS Academy Cloud Foundations program, covering core AWS services, cloud architecture fundamentals, and best practices. Issued via Credly by Amazon Web Services.",
  },
  { name: "SQL (Basic)", issuer: "HackerRank" },
  { name: "SQL (Intermediate)", issuer: "HackerRank" },
  { name: "SQL", issuer: "Kaggle" },
  { name: "MATLAB Onramp", issuer: "MathWorks" },
];
const clubs = [
  { name: "Microsoft Student Chapter", university: "VIT-AP University", badge: "Active Member" },
  { name: "Computer Society of India (CSI)", university: "VIT-AP University", badge: "Member" },
  { name: "Google Developer Group (GDG)", university: "VIT-AP University", badge: "Active Member" },
];

const CertsAndClubs = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="credentials" ref={sectionRef}
      style={{ padding: '100px 80px', borderBottom: '4px solid var(--border)', background: 'var(--background)' }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--primary)' }} />
        005 — Credentials
      </div>
      <h2 className="font-display" style={{ fontSize: 'var(--text-heading-sm)', fontWeight: 400, lineHeight: 1.05, color: 'var(--foreground)', marginBottom: '4rem', textTransform: 'uppercase' }}>
        Beyond the code.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {/* Certifications Card */}
        <div
          className="retro-press"
          style={{
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            padding: '32px 36px',
            border: '4px solid var(--border)',
            boxShadow: '6px 6px 0 0 var(--shadow-color)',
          }}
        >
          <div className="font-pixel" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 24, fontWeight: 700 }}>Certifications</div>
          {certs.map((c, i) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px 0', borderBottom: i === certs.length - 1 ? 'none' : '3px solid var(--border)' }}>
              <div style={{ paddingRight: 16 }}>
                <div className="font-body" style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--foreground)' }}>{c.name}</div>
                <div className="font-pixel" style={{ fontSize: 8, color: 'var(--primary)', letterSpacing: '0.1em', marginTop: 4, fontWeight: 700 }}>{c.issuer}</div>
                {c.description && (
                  <p className="font-body" style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--foreground)', marginTop: 8, opacity: 0.9 }}>
                    {c.description}
                  </p>
                )}
              </div>
              <span
                className="font-pixel"
                style={{
                  fontSize: 8,
                  border: '2px solid var(--border)',
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '3px 8px',
                  boxShadow: '2px 2px 0 0 var(--shadow-color)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                {c.issuer}
              </span>
            </div>
          ))}
        </div>

        {/* Clubs Card */}
        <div
          className="retro-press"
          style={{
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            padding: '32px 36px',
            border: '4px solid var(--border)',
            boxShadow: '6px 6px 0 0 var(--shadow-color)',
          }}
        >
          <div className="font-pixel" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, fontWeight: 700 }}>Clubs & Community</div>
          {clubs.map((c, i) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i === clubs.length - 1 ? 'none' : '3px solid var(--border)' }}>
              <div>
                <div className="font-body" style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--foreground)' }}>{c.name}</div>
                <div className="font-pixel" style={{ fontSize: 8, color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginTop: 4 }}>{c.university}</div>
              </div>
              <span
                className="font-pixel"
                style={{
                  fontSize: 8,
                  border: '2px solid var(--border)',
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  padding: '3px 8px',
                  boxShadow: '2px 2px 0 0 var(--shadow-color)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                {c.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsAndClubs;
