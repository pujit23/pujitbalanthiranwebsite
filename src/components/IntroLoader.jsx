import React, { useState, useEffect } from 'react';

const IntroLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => setPhase(4), 2500);
    const t5 = setTimeout(() => setPhase(5), 3600);
    const t6 = setTimeout(() => setPhase(6), 4400);
    const t7 = setTimeout(() => setPhase(7), 5600);
    const t8 = setTimeout(() => onComplete(), 6400);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); clearTimeout(t8);
    };
  }, [onComplete]);

  const nameString = "PUJIT BALANTHIRAN";

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--background)',
      color: 'var(--foreground)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: phase >= 7 ? 0 : 1,
      transition: 'opacity 800ms ease',
      overflow: 'hidden'
    }}>
      {/* P23 Container */}
      <div style={{
        position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: phase >= 3 ? 0 : 1,
        letterSpacing: phase >= 3 ? '0.2em' : '0.05em',
        transform: phase >= 3 ? 'scale(1.05)' : 'scale(1)',
        transition: phase >= 3 ? 'all 700ms cubic-bezier(0.16,1,0.3,1)' : 'none',
      }}>
        <span className="font-display" style={{
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          color: 'var(--foreground)',
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 500ms ease'
        }}>P</span>
        <span className="font-display" style={{
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          color: 'var(--primary)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 500ms ease'
        }}>23</span>
      </div>

      {/* Name Container */}
      {(phase >= 4 && phase < 7) && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '0.2em' }}>
            {nameString.split('').map((char, index) => (
              <span key={index} className="font-display" style={{
                fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
                color: 'var(--foreground)',
                opacity: 0, transform: 'translateY(14px)',
                animation: `slideUp 500ms cubic-bezier(0.16,1,0.3,1) forwards`,
                animationDelay: `${index * 40}ms`
              }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div style={{
            height: '4px', width: phase >= 5 ? '140px' : '0px',
            background: 'var(--primary)', marginTop: '1.5rem',
            border: '1px solid var(--border)',
            transition: 'width 700ms cubic-bezier(0.16,1,0.3,1)',
          }} />
          <div className="font-pixel" style={{
            textTransform: 'uppercase',
            fontSize: '0.85rem', letterSpacing: '0.25em',
            color: 'var(--primary)', marginTop: '1.5rem',
            fontWeight: 700,
            opacity: phase >= 6 ? 1 : 0, transition: 'opacity 600ms ease'
          }}>SDE</div>
        </div>
      )}
    </div>
  );
};

export default IntroLoader;
