import React, { useState, useEffect } from 'react';

const IntroLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Initial black screen
    
    // Phase 1: "P" fades in
    const t1 = setTimeout(() => setPhase(1), 400);
    
    // Phase 2: "23" fades in
    const t2 = setTimeout(() => setPhase(2), 900);
    
    // Phase 3: Hold "P23", then expand and fade out
    const t3 = setTimeout(() => setPhase(3), 1800); // 900 + 900 hold
    
    // Phase 4: Name appears
    const t4 = setTimeout(() => setPhase(4), 2500); // 1800 + 700 expand/fade
    
    // Phase 5: Line draws
    // Calculate total time for name to appear: staggered 52ms per letter
    // "PUJIT BALANTHIRAN".length = 17 characters * 52 = 884ms
    // Plus 300ms delay = 1184ms
    const t5 = setTimeout(() => setPhase(5), 2500 + 884 + 300); 
    
    // Phase 6: Subtitle fades in
    const t6 = setTimeout(() => setPhase(6), 3684 + 850); // 700 line draw + 150 delay
    
    // Phase 7: Hold, then fade entire intro out
    const t7 = setTimeout(() => setPhase(7), 4534 + 1200); // Hold for 1200ms
    
    // Phase 8: Unmount
    const t8 = setTimeout(() => {
      onComplete();
    }, 5734 + 800); // fade out takes 800ms

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  const nameString = "PUJIT BALANTHIRAN";

  return (
    <div 
      className="fixed inset-0 bg-[#061421] z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        opacity: phase >= 7 ? 0 : 1,
        transition: 'opacity 800ms ease',
      }}
    >
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(74,158,191,0.04) 0px, rgba(74,158,191,0.04) 1px, transparent 1px, transparent 2px)'
        }}
      />

      {/* P23 Container */}
      <div 
        className="absolute flex items-center justify-center z-[2]"
        style={{
          opacity: phase >= 3 ? 0 : 1,
          letterSpacing: phase >= 3 ? '0.5em' : '0.05em',
          transform: phase >= 3 ? 'scale(1.08)' : 'scale(1)',
          transition: phase >= 3 ? 'all 700ms ease' : 'none',
        }}
      >
        {/* Animated Radial Glow */}
        <div 
          className="absolute z-[-1]"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(74,158,191,0.12) 0%, transparent 60%)',
            animation: 'breathe 3s ease-in-out infinite'
          }}
        />
        <span 
          className="text-[#F5ECD7] font-display font-bold"
          style={{
            fontSize: 'clamp(5rem, 12vw, 11rem)',
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 500ms ease'
          }}
        >
          P
        </span>
        <span 
          className="text-[#C9A96E] font-display font-bold"
          style={{
            fontSize: 'clamp(5rem, 12vw, 11rem)',
            opacity: phase >= 2 ? 1 : 0,
            transition: 'opacity 500ms ease'
          }}
        >
          23
        </span>
      </div>

      {/* Name Container */}
      {(phase >= 4 && phase < 7) && (
        <div className="flex flex-col items-center relative z-[2]">
          <div className="flex space-x-[0.2em]">
            {nameString.split('').map((char, index) => (
              <span
                key={index}
                className="text-[#F5ECD7] uppercase inline-block"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  letterSpacing: '0.12em',
                  fontSize: 'clamp(1.6rem, 4.5vw, 4.5rem)',
                  opacity: 0,
                  transform: 'translateY(14px)',
                  animation: `nameReveal 500ms ease forwards`,
                  animationDelay: `${index * 52}ms`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          
          <div 
            className="mx-auto mt-4"
            style={{
              height: '1px',
              width: phase >= 5 ? '100px' : '0px',
              background: 'linear-gradient(90deg, #C9A96E, #4A9EBF, transparent)',
              transition: 'width 700ms ease',
            }}
          />
          
          <div 
            className="uppercase font-sans font-light mt-4 text-center"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.32em',
              color: 'rgba(245,236,215,0.4)',
              opacity: phase >= 6 ? 1 : 0,
              transition: 'opacity 500ms ease'
            }}
          >
            Software Developer · CSE @ VIT-AP
          </div>
        </div>
      )}

      <style>{`
        @keyframes nameReveal {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;
