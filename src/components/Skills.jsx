import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const row1Skills = [
    "React.js", "HTML5", "CSS3", "JavaScript", "Firebase", 
    "SQL", "MongoDB", "Node.js", "REST APIs", "Leaflet", 
    "GCP", "AI", "Python", "Java", "C", "C++"
  ];

  const row2Skills = [
    "DSA", "Git", "MATLAB", "RStudio", "Tinkercad", 
    "Fritzing", "Vivado", "Vite", "D3.js", "Gemini Pro", 
    "WhatsApp API", "GitHub Actions", "Framer Motion", 
    "Figma", "JWT", "Tailwind CSS"
  ];

  const skillCards = [
    {
      num: "01",
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      num: "02",
      title: "Backend & Data",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Firebase"]
    },
    {
      num: "03",
      title: "AI & Cloud",
      skills: ["Google Gemini Pro", "Google Speech-to-Text API", "WhatsApp Cloud API", "GitHub Actions CI/CD"]
    },
    {
      num: "04",
      title: "Languages & Tools",
      skills: ["Java", "Python", "C++", "Git", "MATLAB", "RStudio", "Vivado"]
    },
    {
      num: "05",
      title: "CS Core",
      skills: ["Object-Oriented Programming", "Data Structures & Algorithms", "Cryptography", "Problem Solving", "Database Management Systems", "Software Engineering"]
    }
  ];

  const alsoWorkedWith = [
    "Tailwind CSS", "Vite", "Mongoose", "JWT", "bcryptjs", "Multer",
    "Framer Motion", "Recharts", "D3.js", "Leaflet.js",
    "Google Cloud Functions", "Google Cloud Run",
    "React Router", "Lucide React", "Figma", "Neo4j",
    "Vanilla CSS", "React Context API"
  ];

  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  cardRefs.forEach((ref, index) => {
    useScrollReveal(ref, { threshold: 0.12, delay: index * 0.08 });
  });

  const cloudRef = useRef(null);
  const [cloudVisible, setCloudVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCloudVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (cloudRef.current) {
      observer.observe(cloudRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-[80px] md:py-[160px] px-[24px] md:px-[80px] border-t border-[#1E3A52] overflow-hidden"
    >
      <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
        <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
        002 — Skills
      </div>
      <h2 
        className="text-[#F5ECD7] mt-[1rem]" 
        style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.84rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
      >
        What I work with.
      </h2>

      {/* TICKER */}
      <div className="mt-[5rem] overflow-hidden mb-[5rem]">
        {/* Row 1 */}
        <div className="flex border-t border-b border-[#1E3A52] py-[16px] group relative w-full overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-ticker-left group-hover:[animation-play-state:paused] will-change-transform">
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
              <React.Fragment key={`r1-${index}`}>
                <span className="font-sans font-normal text-[0.8rem] tracking-[0.1em] uppercase text-[#3D5A73] mx-[36px] group-hover:text-[#C9A96E] transition-colors duration-300">
                  {skill}
                </span>
                <span style={{ color: index % 2 === 0 ? '#C9A96E' : '#E8C4B8' }}>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex border-b border-[#1E3A52] py-[16px] group relative w-full overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-ticker-right group-hover:[animation-play-state:paused] will-change-transform">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
              <React.Fragment key={`r2-${index}`}>
                <span className="font-sans font-normal text-[0.8rem] tracking-[0.1em] uppercase text-[#3D5A73] mx-[36px] group-hover:text-[#C9A96E] transition-colors duration-300">
                  {skill}
                </span>
                <span style={{ color: index % 2 === 0 ? '#C9A96E' : '#E8C4B8' }}>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION A — "Verified Skills" */}
      <div className="mb-[1.5rem] flex items-center gap-[8px] font-sans font-normal text-[0.72rem] tracking-[0.18em] uppercase text-[#A8D5C2]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#A8D5C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Verified & Endorsed
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#C9A96E]">
        {skillCards.map((card, idx) => (
          <div 
            key={card.num}
            ref={cardRefs[idx]}
            className={`group/card bg-[#162B3E] py-[44px] px-[40px] hover:bg-[#1C3450] hover:-translate-y-[3px] hover:border-t hover:border-t-[rgba(201,169,110,0.3)] hover:shadow-[0_-4px_20px_rgba(201,169,110,0.06)] transition-all duration-300 ease-out ${idx === 4 ? 'md:col-span-2' : ''}`}
          >
            <div className="font-sans font-normal text-[0.72rem] tracking-[0.1em] text-[#C9A96E] mb-[20px]">
              {card.num}
            </div>
            <h3 className="font-serif italic text-[1.6rem] text-[#F5ECD7] mb-[20px]">
              {card.title}
            </h3>
            <div className="flex flex-wrap gap-[8px]">
              {card.skills.map(skill => (
                <div 
                  key={skill}
                  data-cursor="hover"
                  className="bg-transparent border border-[#1E3A52] px-[14px] py-[6px] rounded-[2px] font-sans font-normal text-[0.78rem] text-[#8BA5B8] hover:border-[#C9A96E] hover:text-[#C9A96E] hover:bg-[rgba(201,169,110,0.05)] transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION B — "Also worked with" */}
      <div className="mt-[5rem]">
        <div className="mb-[1.5rem] flex items-center gap-[8px] font-sans font-normal text-[0.72rem] tracking-[0.18em] uppercase text-[#3D5A73]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 4L1 7l3 3M10 4l3 3-3 3M8 2l-2 10" stroke="#D4856A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#3D5A73]">Also worked with</span>
        </div>
        
        <div ref={cloudRef} className="flex flex-wrap gap-[10px]">
          {alsoWorkedWith.map((skill, idx) => (
            <div
              key={`aww-${skill}`}
              data-cursor="hover"
              className="bg-transparent border border-[#1E3A52] px-[14px] py-[6px] rounded-[2px] font-sans font-normal text-[0.78rem] text-[#3D5A73] hover:border-[#C9A96E] hover:text-[#C9A96E] hover:bg-[rgba(201,169,110,0.04)] transition-colors duration-200 opacity-0"
              style={{
                animation: cloudVisible ? `fadeSlideUp 0.7s ease forwards ${idx * 0.02}s` : 'none',
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes ticker-right {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }
        .animate-ticker-left {
          animation: ticker-left 40s linear infinite;
        }
        .animate-ticker-right {
          animation: ticker-right 35s linear infinite;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
