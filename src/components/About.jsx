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
        }, 300);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}
      style={{ padding: '100px 80px', borderBottom: '4px solid var(--border)', background: 'var(--background)' }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--primary)' }} />
        001 — About
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '0 80px', alignItems: 'start' }}>
        <div>
          <h2 className="font-display" style={{ fontSize: 'var(--text-heading-sm)', fontWeight: 400, lineHeight: 1.05, color: 'var(--foreground)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Building systems<br />that matter.
          </h2>
          <p className="font-body" style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--foreground)', marginBottom: '1.2rem' }}>
            I'm a third-year Computer Science & Engineering student at VIT-AP, focused on building systems that are technically sound and genuinely useful.
          </p>
          <p className="font-body" style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--foreground)', marginBottom: '1.2rem' }}>
            I've worked across full-stack applications spanning AI pipelines, real-time data processing, graph databases, and multilingual voice interfaces — approaching each as a system, not just a set of features. A strong foundation in Data Structures & Algorithms shapes how I think: efficiently, structurally, and with scale in mind.
          </p>
          <p className="font-body" style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--foreground)' }}>
            I work primarily with Python, Java, JavaScript, and React, with hands-on experience in AI integration, graph data modeling, and scalable architecture.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div ref={countRef} className="retro-press" style={{ background: 'var(--card)', color: 'var(--card-foreground)', padding: '32px 36px', border: '4px solid var(--border)', boxShadow: '6px 6px 0 0 var(--shadow-color)' }}>
            <div className="font-display" style={{ fontSize: '3.8rem', fontWeight: 400, color: 'var(--primary)', lineHeight: 1 }}>0{count}</div>
            <div className="font-pixel" style={{ fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginTop: 12 }}>Projects built</div>
          </div>
          <div className="retro-press" style={{ background: 'var(--card)', color: 'var(--card-foreground)', padding: '32px 36px', border: '4px solid var(--border)', boxShadow: '6px 6px 0 0 var(--shadow-color)' }}>
            <div className="font-pixel" style={{ fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10 }}>Stack depth</div>
            <div className="font-display" style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--foreground)', textTransform: 'uppercase' }}>AI · Graph DB · Voice APIs · React · Cloud</div>
          </div>
          <div className="retro-press" style={{ background: 'var(--card)', color: 'var(--card-foreground)', padding: '32px 36px', border: '4px solid var(--border)', boxShadow: '6px 6px 0 0 var(--shadow-color)' }}>
            <div className="font-pixel" style={{ fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10 }}>Open to</div>
            <div className="font-display" style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--foreground)', textTransform: 'uppercase' }}>Internships · Freelance · Collabs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
