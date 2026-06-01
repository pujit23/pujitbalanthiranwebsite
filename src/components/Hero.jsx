import React, { useEffect, useRef, useState } from 'react';
import useMagnet from '../hooks/useMagnet';
import BeachParticles from './BeachParticles';

const Hero = () => {
  const heroRef = useRef(null);
  const wrapperRef = useRef(null);
  const magnetRef1 = useMagnet(0.35);
  const magnetRef2 = useMagnet(0.35);

  const roles = [
    'Software Developer · CSE @ VIT-AP',
    'Full Stack Builder · React · Node.js',
    'Building systems that matter · Open to internships',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => 
          setDisplayed(current.slice(0, displayed.length + 1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => 
          setDisplayed(displayed.slice(0, -1)), 25);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  useEffect(() => {
    let requestRef;
    let dotX = 0;
    let dotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 25;
      mouseY = (e.clientY - window.innerHeight / 2) / 25;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.04;
      dotY += (mouseY - dotY) * 0.04;

      if (heroRef.current) {
        const clampedX = Math.max(-18, Math.min(18, dotX));
        const clampedY = Math.max(-18, Math.min(18, dotY));
        heroRef.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
      }

      if (wrapperRef.current) {
        const scrollY = window.scrollY;
        wrapperRef.current.style.transform = `translateY(${scrollY * 0.22}px)`;
      }

      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const splitText = (text) => text.split('').map((char, i) => (
    <span
      key={i}
      style={{
        display: 'inline-block',
        transition: `transform 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i * 25}ms, color 0.3s ease ${i * 20}ms`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.color = '#C9A96E';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.color = '#F5ECD7';
      }}
    >{char === ' ' ? '\u00A0' : char}</span>
  ));

  return (
    <section
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden pt-[80px] pb-[40px]"
    >
      <BeachParticles />
      
      {/* 1. Deep ocean gradient base */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse 120% 80% at 60% -20%, rgba(74,158,191,0.15) 0%, transparent 55%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* 2. Sand glow bottom left */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse 80% 60% at -10% 110%, rgba(201,169,110,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* 4. Dot Grid */}
      <div
        className="absolute inset-[-50px] opacity-50 z-0 pointer-events-none"
        ref={heroRef}
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #162B3E 2px, transparent 0)',
          backgroundSize: '44px 44px'
        }}
      />

      {/* Main Content Wrapper */}
      <div
        ref={wrapperRef}
        className="relative z-10 w-full will-change-transform px-[24px] md:px-[80px] max-w-[900px] mx-auto"
      >
        {/* Left Column (Text) */}
        <div className="w-full flex flex-col items-center relative z-10">
        {/* Availability Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(232,196,184,0.3)',
          padding: '6px 14px',
          borderRadius: '100px',
          background: 'rgba(232,196,184,0.04)',
          margin: '0 auto 1.5rem'
        }}>
          <span style={{
            width: 7, height: 7,
            borderRadius: '50%',
            background: '#C9A96E',
            display: 'inline-block',
            animation: 'pulse 2s infinite, pulseColor 4s infinite'
          }} />
          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#3D5A73'
          }}>Available for internships · 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="mt-[1.5rem] text-[#F5ECD7] text-center" style={{ fontFamily: '"Ogg", "Recoleta", "Cormorant Garamond", serif', fontStyle: 'normal', fontWeight: 700, textTransform: 'none' }}>
          <span
            className="block opacity-0 translate-y-[60px] animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9.2rem)', lineHeight: 0.93, display: 'block' }}
            data-cursor="hover"
          >
            {splitText('Pujit')}
          </span>
          <span
            className="block opacity-0 translate-y-[60px] animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 9.2rem)',
              lineHeight: 0.93,
              display: 'block',
              textShadow: '0 0 80px rgba(201,169,110,0.15)'
            }}
            data-cursor="hover"
          >
            {splitText('Balanthiran')}
          </span>
        </h1>

        {/* Role Line */}
        <div
          className="mt-[1.2rem] text-center opacity-0 translate-y-[30px] animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards]"
        >
          <p className="font-sans font-light text-[1rem] tracking-[0.03em] text-[#3D5A73]">
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: '#C9A96E',
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite'
            }} />
          </p>
        </div>

        {/* Description */}
        <div
          className="mt-[1.8rem] max-w-[460px] text-center mx-auto opacity-0 translate-y-[20px] animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]"
        >
          <p className="font-sans font-light text-[1rem] leading-[1.85] text-[#A8D5C2]">
            I build full-stack systems that think in graphs, speak in voices,
            and scale across real communities. Sophomore in CSE — always building
            something worth showing.
          </p>
        </div>

        {/* CTA Row */}
        <div
          className="mt-[2.8rem] flex gap-[14px] items-center justify-center opacity-0 animate-[fadeIn_0.5s_ease_0.95s_forwards]"
        >
          <button
            ref={magnetRef1}
            onClick={scrollToProjects}
            data-cursor="hover"
            className="relative overflow-hidden text-[#0D1B2A] font-semibold px-[30px] py-[13px] font-sans text-[0.85rem] tracking-[0.04em] transition-all duration-300 ease-in-out group"
            style={{ background: '#C9A96E' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#E8D5A3';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(201,169,110,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#C9A96E';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="relative z-10 uppercase tracking-widest text-[0.75rem]">View Projects</span>
          </button>
          <a
            ref={magnetRef2}
            href="/PujitBalanthiran_resume.pdf"
            download="PujitBalanthiran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="bg-transparent text-[#F5ECD7] border px-[30px] py-[13px] font-sans font-normal text-[0.75rem] uppercase tracking-widest transition-colors duration-200 inline-block"
            style={{ borderColor: '#1E3A52' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C9A96E';
              e.currentTarget.style.color = '#C9A96E';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1E3A52';
              e.currentTarget.style.color = '#F5ECD7';
            }}
          >
            Download CV
          </a>
        </div>
      </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-sans font-normal text-[0.68rem] tracking-[0.22em] uppercase text-[#3D5A73]">
          Scroll
        </span>
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 animate-bounce-custom"
        >
          <path d="M5 0V12M5 12L1 8M5 12L9 8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(var(--tw-translate-y, 60px));
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(201,169,110,0.6); }
          100% { box-shadow: 0 0 0 8px transparent; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }
        .animate-bounce-custom {
          animation: bounce-custom 1.8s ease infinite;
        }
        @keyframes floatGlow {
          0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, 20px) scale(1.1); opacity: 1; }
          100% { transform: translate(-20px, 40px) scale(0.9); opacity: 0.8; }
        }
        @keyframes floatGlowReverse {
          0% { transform: translate(0, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-40px, -45%) scale(1.15); opacity: 1; }
          100% { transform: translate(20px, -55%) scale(0.95); opacity: 0.6; }
        }
        @media (max-height: 750px) {
          .scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
