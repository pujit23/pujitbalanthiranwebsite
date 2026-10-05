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
    <section
      id="credentials"
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
          005 — Credentials &amp; Leadership
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
          Beyond the code.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {/* Certifications Card */}
          <div
            style={{
              background: '#0d1428',
              padding: 'clamp(28px, 4vw, 36px)',
              borderRadius: 16,
              border: '1px solid rgba(242, 241, 236, 0.08)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.38)';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(255, 106, 43, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 20, fontWeight: 600 }}>
              Certifications
            </div>
            {certs.map((c, i) => (
              <div
                key={c.name}
                style={{
                  padding: '14px 0',
                  borderBottom: i === certs.length - 1 ? 'none' : '1px solid rgba(242, 241, 236, 0.06)',
                }}
              >
                <div style={{ fontSize: '0.98rem', fontWeight: 500, color: '#f2f1ec' }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#ff6a2b', letterSpacing: '0.04em', marginTop: 4, fontWeight: 400 }}>{c.issuer}</div>
                {c.description && (
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: '#9aa3b8', marginTop: 6, fontWeight: 300 }}>
                    {c.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Leadership & Clubs Card */}
          <div
            style={{
              background: '#0d1428',
              padding: 'clamp(28px, 4vw, 36px)',
              borderRadius: 16,
              border: '1px solid rgba(242, 241, 236, 0.08)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.38)';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(255, 106, 43, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 20, fontWeight: 600 }}>
              Campus Chapters &amp; Community
            </div>
            {clubs.map((cl, i) => (
              <div
                key={cl.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: i === clubs.length - 1 ? 'none' : '1px solid rgba(242, 241, 236, 0.06)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 500, color: '#f2f1ec' }}>{cl.name}</div>
                  <div style={{ fontSize: 12, color: '#9aa3b8', marginTop: 3 }}>{cl.university}</div>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(242, 241, 236, 0.1)',
                    background: 'rgba(10, 15, 31, 0.6)',
                    color: '#9aa3b8',
                    padding: '3px 9px',
                    borderRadius: 9999,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cl.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertsAndClubs;
