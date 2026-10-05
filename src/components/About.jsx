import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const timer = setInterval(() => {
          start++;
          setCount(start);
          if (start === 4) clearInterval(timer);
        }, 250);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
          001 — About
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px 64px', alignItems: 'start' }}>
          {/* Narrative */}
          <div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#f2f1ec',
                marginBottom: '1.75rem',
              }}
            >
              Building systems<br />that matter.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#9aa3b8', marginBottom: '1.25rem', fontWeight: 300 }}>
              I'm a third-year Computer Science &amp; Engineering student at VIT-AP, focused on building systems that are technically sound and genuinely useful.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#9aa3b8', marginBottom: '1.25rem', fontWeight: 300 }}>
              I've worked across full-stack applications spanning AI pipelines, real-time data processing, graph databases, and multilingual voice interfaces &mdash; approaching each as a system, not just a set of features. A strong foundation in Data Structures &amp; Algorithms shapes how I think: efficiently, structurally, and with scale in mind.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#9aa3b8', fontWeight: 300 }}>
              I work primarily with Python, Java, JavaScript, and React, with hands-on experience in AI integration, graph data modeling, and scalable architecture.
            </p>
          </div>

          {/* Stat Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Counter Card */}
            <div
              ref={countRef}
              style={{
                background: '#0d1428',
                padding: '28px 32px',
                borderRadius: 14,
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
              <div className="font-serif" style={{ fontSize: '3.2rem', fontWeight: 400, color: '#ff6a2b', lineHeight: 1 }}>
                0{count}
              </div>
              <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9aa3b8', marginTop: 10, fontWeight: 500 }}>
                Projects built
              </div>
            </div>

            {/* Stack Depth Card */}
            <div
              style={{
                background: '#0d1428',
                padding: '28px 32px',
                borderRadius: 14,
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
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 8, fontWeight: 500 }}>
                Stack depth
              </div>
              <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 400, color: '#f2f1ec' }}>
                AI &middot; Graph DB &middot; Voice APIs &middot; React &middot; Cloud
              </div>
            </div>

            {/* Open to Card */}
            <div
              style={{
                background: '#0d1428',
                padding: '28px 32px',
                borderRadius: 14,
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
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 8, fontWeight: 500 }}>
                Open to
              </div>
              <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 400, color: '#f2f1ec' }}>
                Internships &middot; Freelance &middot; Collaborations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
