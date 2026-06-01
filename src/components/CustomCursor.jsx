import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      document.body.style.cursor = 'auto';
      return;
    }

    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateRing = () => {
      // Ring follows mouse
      ringPos.current.x += (mousePos.x - ringPos.current.x - 16) * 0.09;
      ringPos.current.y += (mousePos.y - ringPos.current.y - 16) * 0.09;
      
      // Trail follows ring
      trailPos.current.x += (ringPos.current.x + 16 - trailPos.current.x - 12) * 0.05;
      trailPos.current.y += (ringPos.current.y + 16 - trailPos.current.y - 12) * 0.05;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(updateRing);

    // Initial setup for existing elements
    const setupHoverListeners = () => {
      const hoverElements = document.querySelectorAll('[data-cursor="hover"]');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    setupHoverListeners();

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, [mousePos.x, mousePos.y]);

  if (isMobile) return null;

  return (
    <>
      {/* DOT */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-sand"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate(${mousePos.x - 3}px, ${mousePos.y - 3}px)`,
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0 : 1,
          transition: 'opacity 0.2s ease, scale 0.2s ease'
        }}
      />
      {/* RING */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-transparent"
        style={{
          width: isHovering ? '52px' : '32px',
          height: isHovering ? '52px' : '32px',
          border: `1px solid ${isHovering ? '#C9A96E' : 'rgba(201,169,110,0.5)'}`,
          background: isHovering ? 'rgba(201,169,110,0.06)' : 'transparent',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease',
          marginLeft: isHovering ? '-10px' : '0',
          marginTop: isHovering ? '-10px' : '0'
        }}
      />
      {/* TRAIL */}
      <div 
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: '24px',
          height: '24px',
          background: 'rgba(74,158,191,0.1)',
          transition: 'opacity 0.2s ease, scale 0.2s ease',
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
