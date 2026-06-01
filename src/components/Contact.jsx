import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail } from 'lucide-react';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .2-3.7s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0 .2 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/pujitbalanthiran", hoverColor: "#C9A96E", hoverShadow: "rgba(201,169,110,0.1)", hoverBg: "rgba(201,169,110,0.05)", icon: <Linkedin size={18} /> },
    { name: "GitHub", url: "https://github.com/pujit23", hoverColor: "#4A9EBF", hoverShadow: "rgba(74,158,191,0.1)", hoverBg: "rgba(74,158,191,0.05)", icon: <Github size={18} /> },
    { name: "Twitter", url: "#", hoverColor: "#E8C4B8", hoverShadow: "rgba(232,196,184,0.1)", hoverBg: "rgba(232,196,184,0.05)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-[80px] md:py-[160px] px-[24px] md:px-[80px] border-t border-[#1E3A52] overflow-hidden bg-transparent"
    >
      {/* Floating pearl/shell decorative circles */}
      <div 
        className="absolute top-[10%] right-[10%] w-[15vw] h-[15vw] rounded-full mix-blend-screen pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, rgba(232,196,184,0.06) 0%, transparent 70%)',
          border: '1px solid rgba(232,196,184,0.1)',
          animation: 'floatGlow 8s infinite alternate' 
        }} 
      />
      <div 
        className="absolute bottom-[20%] left-[5%] w-[20vw] h-[20vw] rounded-full mix-blend-screen pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, rgba(168,213,194,0.05) 0%, transparent 70%)',
          border: '1px solid rgba(168,213,194,0.08)',
          animation: 'floatGlowReverse 10s infinite alternate' 
        }} 
      />
      <div 
        className="absolute top-[60%] right-[30%] w-[12vw] h-[12vw] rounded-full mix-blend-screen pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
          border: '1px solid rgba(201,169,110,0.08)',
          animation: 'floatGlow 12s infinite alternate-reverse' 
        }} 
      />

      <div className="relative z-10">
        <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
          <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
          006 — Contact
        </div>
        
        <h2 className="text-[#F5ECD7] leading-[1.05] mt-[2rem]" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}>
          Let's build<br/>
          <span 
            className="text-[#E8C4B8]"
            style={{ textShadow: '0 0 60px rgba(232,196,184,0.2)' }}
          >
            something.
          </span>
        </h2>

        <div className="mt-[2rem] max-w-[460px]">
          <p className="font-sans font-light text-[1rem] leading-[1.85] text-[#8BA5B8]">
            Currently looking for software engineering internships and collaborative opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="mt-[4rem] flex flex-col items-start gap-[2rem]">
          <a 
            href="mailto:pujitbalanthiran23@gmail.com"
            data-cursor="hover"
            className="group font-sans font-light text-[1.4rem] md:text-[2rem] text-[#F5ECD7] border-b border-[#1E3A52] pb-[6px] transition-all duration-300 ease-out hover:tracking-[0.03em] tracking-[0.01em]"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E8C4B8';
              e.currentTarget.style.color = '#E8C4B8';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(232,196,184,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1E3A52';
              e.currentTarget.style.color = '#F5ECD7';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            pujitbalanthiran23@gmail.com
          </a>

          <div className="flex gap-[16px]">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="flex items-center justify-center w-[44px] h-[44px] rounded-[4px] border border-[#1E3A52] text-[#8BA5B8] transition-all duration-300 ease-out hover:-translate-y-[3px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.hoverColor;
                  e.currentTarget.style.color = social.hoverColor;
                  e.currentTarget.style.backgroundColor = social.hoverBg;
                  e.currentTarget.style.boxShadow = `0 0 20px ${social.hoverShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1E3A52';
                  e.currentTarget.style.color = '#8BA5B8';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Massive P23 Watermark */}
      <div 
        className="hidden lg:block absolute right-0 bottom-[-10%] pointer-events-none select-none z-0"
        style={{ 
          fontSize: '18vw', 
          color: 'rgba(201,169,110,0.03)',
          lineHeight: '1',
          fontFamily: '"DM Serif Display", serif',
          fontStyle: 'italic'
        }}
      >
        P23
      </div>

    </section>
  );
};

export default Contact;
