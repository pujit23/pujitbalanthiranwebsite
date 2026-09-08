import React, { useRef, useState, useEffect } from 'react';
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

  const also = ["Tailwind CSS","Vite","Mongoose","JWT","bcryptjs","Multer","Framer Motion","Recharts","D3.js","Leaflet.js","Google Cloud Run","React Router","Lucide React","Figma","Neo4j","Vanilla CSS"];

  const [alsoVisible, setAlsoVisible] = useState(false);
  const alsoRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAlsoVisible(true); }, { threshold: 0.1 });
    if (alsoRef.current) obs.observe(alsoRef.current);
    return () => obs.disconnect();
  }, []);

  const Tag = ({ label, index }) => (
    <span
      className="retro-press"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '2px solid var(--border)',
        background: index % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
        color: index % 2 === 0 ? 'var(--primary-foreground)' : 'var(--accent-foreground)',
        boxShadow: '3px 3px 0 0 var(--shadow-color)',
        padding: '4px 10px',
        fontSize: '0.75rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        fontFamily: 'var(--font-space-grotesk)',
        cursor: 'default',
      }}
    >
      {label}
    </span>
  );

  return (
    <section id="skills" ref={sectionRef}
      style={{ padding: '100px 80px', borderBottom: '4px solid var(--border)', background: 'var(--background)', overflow: 'hidden' }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--primary)' }} />
        002 — Skills
      </div>
      <h2 className="font-display" style={{ fontSize: 'var(--text-heading-sm)', fontWeight: 400, lineHeight: 1.05, color: 'var(--foreground)', marginBottom: '4rem', textTransform: 'uppercase' }}>
        What I work with.
      </h2>

      {/* Ticker rows */}
      <div style={{ marginBottom: '4rem', overflow: 'hidden' }}>
        <div style={{ borderTop: '3px solid var(--border)', borderBottom: '3px solid var(--border)', padding: '14px 0', overflow: 'hidden', position: 'relative', background: 'var(--card)' }}>
          <div style={{ display: 'inline-flex', animation: 'tickerLeft 36s linear infinite', whiteSpace: 'nowrap' }}>
            {[...ticker1, ...ticker1].map((s, i) => (
              <span key={i} className="font-pixel" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--foreground)', margin: '0 24px' }}>
                {s} <span style={{ color: 'var(--primary)', marginLeft: 12, marginRight: 12 }}>★</span>
              </span>
            ))}
          </div>
        </div>
        <div style={{ borderBottom: '3px solid var(--border)', padding: '14px 0', overflow: 'hidden', position: 'relative', background: 'var(--card)' }}>
          <div style={{ display: 'inline-flex', animation: 'tickerRight 30s linear infinite', whiteSpace: 'nowrap' }}>
            {[...ticker2, ...ticker2].map((s, i) => (
              <span key={i} className="font-pixel" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--foreground)', margin: '0 24px' }}>
                {s} <span style={{ color: 'var(--accent)', marginLeft: 12, marginRight: 12 }}>★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skill cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {skillCards.map((card, idx) => (
          <div
            key={card.num}
            className="retro-press"
            style={{
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              padding: '40px 36px',
              border: '4px solid var(--border)',
              boxShadow: '6px 6px 0 0 var(--shadow-color)',
              gridColumn: idx === 4 ? 'span 2' : 'auto',
            }}
          >
            <div className="font-pixel" style={{ fontSize: 10, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16, fontWeight: 700 }}>{card.num}</div>
            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 400, color: 'var(--foreground)', marginBottom: 20, textTransform: 'uppercase' }}>{card.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {card.skills.map((skill, sIdx) => <Tag key={skill} label={skill} index={sIdx} />)}
            </div>
          </div>
        ))}
      </div>

      {/* Also worked with */}
      <div style={{ marginTop: '4rem' }}>
        <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 20, height: 3, background: 'var(--muted-foreground)' }} />
          Also worked with
        </div>
        <div ref={alsoRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {also.map((skill, idx) => (
            <span
              key={skill}
              className="retro-press"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '2px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--card-foreground)',
                boxShadow: '3px 3px 0 0 var(--shadow-color)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-space-grotesk)',
                opacity: 0,
                animation: alsoVisible ? `fadeIn 0.5s ease forwards ${idx * 0.04}s` : 'none',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
