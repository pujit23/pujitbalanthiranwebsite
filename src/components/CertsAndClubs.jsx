import React, { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  { name: "SQL (Basic)", issuer: "HackerRank", badge: "HackerRank", badgeStyle: { bg: "rgba(201,169,110,0.1)", color: "var(--sand)", border: "rgba(201,169,110,0.2)" } },
  { name: "SQL (Intermediate)", issuer: "HackerRank", badge: "HackerRank", badgeStyle: { bg: "rgba(201,169,110,0.1)", color: "var(--sand)", border: "rgba(201,169,110,0.2)" } },
  { name: "SQL", issuer: "Kaggle", badge: "Kaggle", badgeStyle: { bg: "rgba(74,158,191,0.1)", color: "var(--sky)", border: "rgba(74,158,191,0.2)" } },
  { name: "MATLAB Onramp", issuer: "MathWorks", badge: "MathWorks", badgeStyle: { bg: "rgba(168,213,194,0.1)", color: "var(--sea-foam)", border: "rgba(168,213,194,0.2)" } }
];

const clubs = [
  { name: "Microsoft Student Chapter", university: "VIT-AP University", badge: "Active Member", badgeStyle: { bg: "rgba(74,158,191,0.1)", color: "var(--sky)", border: "rgba(74,158,191,0.2)" } },
  { name: "Computer Society of India (CSI)", university: "VIT-AP University", badge: "Member", badgeStyle: { bg: "rgba(201,169,110,0.1)", color: "var(--sand)", border: "rgba(201,169,110,0.2)" } },
  { name: "Google Developer Group (GDG)", university: "VIT-AP University", badge: "Active Member", badgeStyle: { bg: "rgba(168,213,194,0.1)", color: "var(--sea-foam)", border: "rgba(168,213,194,0.2)" } }
];

const CertsAndClubs = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  
  useScrollReveal(sectionRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="credentials" 
      ref={sectionRef}
      className="py-[80px] md:py-[160px] px-[24px] md:px-[80px] border-t border-[#1E3A52] overflow-hidden"
    >
      <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
        <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
        005 — Credentials
      </div>
      <h2 
        className="text-[#F5ECD7] mt-[1rem]" 
        style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.84rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
      >
        Beyond the code.
      </h2>

      <div className="mt-[4rem] flex flex-col md:flex-row gap-[60px]">
        {/* LEFT COLUMN */}
        <div 
          ref={leftColRef}
          className="w-full md:w-1/2 opacity-0 animate-[slideFromLeft_0.7s_ease_forwards]"
          style={{ animationPlayState: 'paused' }}
        >
          <div className="font-sans font-normal text-[0.72rem] uppercase tracking-[0.15em] text-[#C9A96E] mb-[1.2rem]">
            Certifications
          </div>
          <div className="flex flex-col">
            {certs.map(cert => (
              <div key={cert.name} className="flex justify-between items-center py-[16px] border-b border-[#1E3A52]">
                <div>
                  <div className="font-sans font-normal text-[0.95rem] text-[#F5ECD7]">
                    {cert.name}
                  </div>
                  <div className="font-sans font-light text-[0.8rem] text-[#8BA5B8] mt-[3px]">
                    {cert.issuer}
                  </div>
                </div>
                <div 
                  className="font-sans font-normal text-[0.72rem] px-[12px] py-[4px] rounded-full whitespace-nowrap"
                  style={{ 
                    background: cert.badgeStyle.bg, 
                    color: cert.badgeStyle.color, 
                    border: `1px solid ${cert.badgeStyle.border}` 
                  }}
                >
                  {cert.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div 
          ref={rightColRef}
          className="w-full md:w-1/2 opacity-0 animate-[slideFromRight_0.7s_ease_forwards]"
          style={{ animationPlayState: 'paused' }}
        >
          <div className="font-sans font-normal text-[0.72rem] uppercase tracking-[0.15em] text-[#4A9EBF] mb-[1.2rem]">
            Clubs & Community
          </div>
          <div className="flex flex-col">
            {clubs.map(club => (
              <div key={club.name} className="flex justify-between items-center py-[16px] border-b border-[#1E3A52]">
                <div>
                  <div className="font-sans font-normal text-[0.95rem] text-[#F5ECD7]">
                    {club.name}
                  </div>
                  <div className="font-sans font-light text-[0.8rem] text-[#8BA5B8] mt-[3px]">
                    {club.university}
                  </div>
                </div>
                <div 
                  className="font-sans font-normal text-[0.72rem] px-[12px] py-[4px] rounded-full whitespace-nowrap"
                  style={{ 
                    background: club.badgeStyle.bg, 
                    color: club.badgeStyle.color, 
                    border: club.badgeStyle.border ? `1px solid ${club.badgeStyle.border}` : 'none'
                  }}
                >
                  {club.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
export default CertsAndClubs;
