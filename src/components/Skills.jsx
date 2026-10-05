import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const ticker1 = ["React.js","HTML5","CSS3","JavaScript","Firebase","SQL","MongoDB","Node.js","REST APIs","GCP","Python","Java","C","C++","Leaflet","AI"];
  const ticker2 = ["DSA","Git","MATLAB","RStudio","Vivado","Vite","D3.js","Gemini Pro","WhatsApp API","GitHub Actions","Framer Motion","Figma","JWT","Tailwind CSS","Neo4j","Express.js"];

  const skillCards = [
    { num: "01", title: "Frontend", skills: ["HTML5","CSS3","JavaScript","React.js"] },
    { num: "02", title: "Backend & Data", skills: ["Node.js","Express.js","MongoDB","SQL","Firebase"] },
    { num: "03", title: "AI & Cloud", skills: ["Google Gemini Pro","Google Speech-to-Text API","WhatsApp Cloud API","GitHub Actions CI/CD"] },
    { num: "04", title: "Languages & Tools", skills: ["Java","Python","C++","Git","MATLAB","RStudio","Vivado"] },
    { num: "05", title: "CS Core", skills: ["OOP","Data Structures & Algorithms","Cryptography","Problem Solving","DBMS","Software Engineering"] },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: '100px clamp(20px, 6vw, 80px)',
        background: '#0a0f1f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#ff6a2b' }} />
          002 — Skills
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#f2f1ec',
            marginBottom: '3rem',
          }}
        >
          What I work with.
        </h2>

        {/* Ticker rows */}
        <div style={{ marginBottom: '3.5rem', overflow: 'hidden', borderRadius: 12, border: '1px solid rgba(242, 241, 236, 0.08)' }}>
          <div style={{ padding: '12px 0', overflow: 'hidden', position: 'relative', background: '#0d1428', borderBottom: '1px solid rgba(242, 241, 236, 0.06)' }}>
            <div style={{ display: 'inline-flex', animation: 'tickerLeft 40s linear infinite', whiteSpace: 'nowrap' }}>
              {[...ticker1, ...ticker1].map((s, i) => (
                <span key={i} style={{ fontSize: 13, letterSpacing: '0.04em', color: '#9aa3b8', margin: '0 20px', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span>{s}</span>
                  <span style={{ color: '#ff6a2b', fontSize: 10, opacity: 0.8 }}>✦</span>
                </span>
              ))}
            </div>
          </div>
          <div style={{ padding: '12px 0', overflow: 'hidden', position: 'relative', background: '#0d1428' }}>
            <div style={{ display: 'inline-flex', animation: 'tickerRight 36s linear infinite', whiteSpace: 'nowrap' }}>
              {[...ticker2, ...ticker2].map((s, i) => (
                <span key={i} style={{ fontSize: 13, letterSpacing: '0.04em', color: '#9aa3b8', margin: '0 20px', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span>{s}</span>
                  <span style={{ color: '#ff6a2b', fontSize: 10, opacity: 0.8 }}>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {skillCards.map((card, idx) => (
            <div
              key={card.num}
              style={{
                background: '#0d1428',
                padding: '32px 28px',
                borderRadius: 14,
                border: '1px solid rgba(242, 241, 236, 0.08)',
                transition: 'all 0.25s ease',
                gridColumn: idx === 4 ? 'span 1' : 'auto',
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
              <div style={{ fontSize: 11, color: '#ff6a2b', letterSpacing: '0.15em', marginBottom: 12, fontWeight: 500 }}>
                {card.num}
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 400, color: '#f2f1ec', marginBottom: 20 }}>
                {card.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.skills.map(s => (
                  <span
                    key={s}
                    style={{
                      background: 'rgba(10, 15, 31, 0.8)',
                      border: '1px solid rgba(242, 241, 236, 0.08)',
                      color: '#9aa3b8',
                      fontSize: 12,
                      padding: '4px 12px',
                      borderRadius: 9999,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
