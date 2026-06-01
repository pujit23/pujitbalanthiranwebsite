import React, { useMemo } from 'react';

const BeachParticles = () => {
  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    left: Math.random() * 90 + 5,
    top: Math.random() * 80 + 10,
    duration: Math.random() * 4 + 4,
    delay: Math.random() * 6,
    type: ['sand', 'ocean', 'pearl', 'coral'][Math.floor(Math.random() * 4)]
  })), []);

  const getColor = (type) => {
    switch (type) {
      case 'sand': return 'rgba(201,169,110,0.4)';
      case 'ocean': return 'rgba(74,158,191,0.3)';
      case 'pearl': return 'rgba(240,235,225,0.3)';
      case 'coral': return 'rgba(255,107,71,0.25)';
      default: return 'rgba(201,169,110,0.4)';
    }
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes floatUpFade {
            0% { transform: translateY(0); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(-80px); opacity: 0; }
          }
        `}
      </style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: getColor(p.type),
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `floatUpFade ${p.duration}s ease-in-out ${p.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
};

export default BeachParticles;
