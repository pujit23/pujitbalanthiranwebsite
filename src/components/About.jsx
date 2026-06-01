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
        const end = 4;
        const duration = 1200;
        const step = duration / end;
        const timer = setInterval(() => {
          start++;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-[80px] md:py-[160px] px-[24px] md:px-[80px]"
    >
      <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
        <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
        001 — About
      </div>

      <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-[80px] items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-[#F5ECD7] leading-[1.08] mt-[1rem]" style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.84rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}>
            Building systems<br/>
            <span className="text-[#E8C4B8]">that matter.</span>
          </h2>
          
          <div className="mt-[1.4rem] space-y-[1.4rem]">
            <p className="font-sans font-light text-[1rem] leading-[1.9] text-[#8BA5B8]">
              Sophomore pursuing Computer Science & Engineering at VIT-AP, 
              focused on building systems that are technically rigorous and 
              meaningfully useful.
            </p>
            <p className="font-sans font-light text-[1rem] leading-[1.9] text-[#8BA5B8]">
              I've built full-stack applications involving AI pipelines, 
              real-time data processing, graph databases, and multilingual voice 
              interfaces — thinking in systems, not just features. My foundation 
              in Data Structures & Algorithms drives how I approach problems: 
              efficiently, structurally, and with scale in mind.
            </p>
            <p className="font-sans font-light text-[1rem] leading-[1.9] text-[#8BA5B8]">
              Skilled in Python, Java, JavaScript, React, and modern web 
              technologies, with hands-on experience in AI integration, graph data 
              modeling, and scalable architecture. Actively seeking internships where 
              I can contribute meaningfully and work on problems worth solving.
            </p>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="flex flex-col gap-[1px] bg-[#1E3A52] w-full">
          {/* Card 1 */}
          <div className="bg-[#162B3E] border-l-2 border-[#C9A96E] hover:bg-[#1C3450] hover:shadow-[-4px_0_20px_rgba(201,169,110,0.2)] transition-all duration-250 py-[32px] px-[36px]">
            <div ref={countRef} className="font-serif text-[3.5rem] font-bold text-[#C9A96E] leading-none">0{count}</div>
            <div className="mt-[8px] font-sans font-normal text-[0.75rem] tracking-[0.14em] uppercase text-[#3D5A73]">
              Projects built
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#162B3E] border-l-2 border-[#A8D5C2] hover:bg-[#1C3450] hover:shadow-[-4px_0_20px_rgba(168,213,194,0.2)] transition-all duration-250 py-[32px] px-[36px]">
            <div className="font-sans font-normal text-[0.72rem] tracking-[0.14em] uppercase text-[#3D5A73]">
              Stack depth
            </div>
            <div className="mt-[10px] text-[1.4rem] text-[#F5ECD7]" style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}>
              AI · Graph DB · Voice APIs · React · Cloud
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#162B3E] border-l-2 border-[#E8C4B8] hover:bg-[#1C3450] hover:shadow-[-4px_0_20px_rgba(232,196,184,0.2)] transition-all duration-250 py-[32px] px-[36px]">
            <div className="font-sans font-normal text-[0.72rem] tracking-[0.14em] uppercase text-[#3D5A73]">
              Open to
            </div>
            <div className="mt-[10px] text-[1.4rem] text-[#F5ECD7]" style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}>
              Internships · Freelance · Collabs
            </div>
          </div>
        </div>
      </div>

      {/* Decorative ocean wave divider at bottom */}
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none"
        style={{width:'100%', height:40, opacity:0.08, position:'absolute', bottom:0, left:0}}>
        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#4A9EBF"/>
      </svg>
    </section>
  );
};

export default About;
