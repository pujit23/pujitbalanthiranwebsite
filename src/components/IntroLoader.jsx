import React, { useState, useEffect } from 'react';

const IntroLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1400);
    const t4 = setTimeout(() => setPhase(4), 1900);
    const t5 = setTimeout(() => setPhase(5), 2600);
    const t6 = setTimeout(() => setPhase(6), 3300);
    const t7 = setTimeout(() => onComplete(), 3900);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
    };
  }, [onComplete]);

  const nameString = "PUJIT BALANTHIRAN";

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0f1f',
        color: '#f2f1ec',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase >= 6 ? 0 : 1,
        transition: 'opacity 600ms ease',
        overflow: 'hidden',
        pointerEvents: phase >= 6 ? 'none' : 'auto',
      }}
    >
      {/* P23 Container */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          opacity: phase >= 3 ? 0 : 1,
          letterSpacing: '-0.02em',
          transform: phase >= 3 ? 'scale(1.04)' : 'scale(1)',
          transition: 'all 600ms cubic-bezier(0.16,1,0.3,1)',
          lineHeight: 1,
        }}
      >
        <span
          className="font-serif"
          style={{
            fontSize: 'clamp(5.5rem, 13vw, 9.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: '#f2f1ec',
            fontVariantNumeric: 'lining-nums',
            fontFeatureSettings: '"lnum" 1',
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 400ms ease',
          }}
        >
          P
        </span>
        <span
          className="font-serif"
          style={{
            fontSize: 'clamp(5.5rem, 13vw, 9.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: '#ff6a2b',
            fontVariantNumeric: 'lining-nums',
            fontFeatureSettings: '"lnum" 1',
            opacity: phase >= 2 ? 1 : 0,
            transition: 'opacity 400ms ease',
          }}
        >
          23
        </span>
      </div>

      {/* Name Display */}
      {phase >= 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '0.12em' }}>
            {nameString.split('').map((char, index) => (
              <span
                key={index}
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
                  fontWeight: 700,
                  color: '#f2f1ec',
                  opacity: 0,
                  transform: 'translateY(12px)',
                  animation: `slideUp 450ms cubic-bezier(0.16,1,0.3,1) forwards`,
                  animationDelay: `${index * 30}ms`,
                  letterSpacing: '0.04em',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

          {/* Accent Line */}
          <div
            style={{
              height: '2px',
              width: phase >= 4 ? '80px' : '0px',
              background: '#ff6a2b',
              marginTop: '1.25rem',
              borderRadius: '1px',
              transition: 'width 600ms cubic-bezier(0.16,1,0.3,1)',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#9aa3b8',
              marginTop: '1.25rem',
              fontWeight: 400,
              opacity: phase >= 5 ? 1 : 0,
              transition: 'opacity 500ms ease',
            }}
          >
            Software Developer
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroLoader;
