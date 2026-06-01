import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '2px',
      width: `${progress}%`,
      background: 'linear-gradient(90deg, #4A9EBF, #C9A96E, #E8735A)',
      zIndex: 9999,
      transition: 'width 0.1s linear',
      boxShadow: '0 0 10px rgba(201,169,110,0.5)',
      pointerEvents: 'none',
    }} />
  );
}
