import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const hackathonsData = [
  {
    name: "Google TechSprint",
    badge: "🏆 Top 10 Finalist",
    badgeBg: "rgba(201,169,110,0.15)",
    badgeColor: "var(--sand)",
    badgeBorder: "1px solid rgba(201,169,110,0.3)",
    organizer: "Google Developer Ecosystem",
    description: "Built and presented a functional technical solution under time constraints. Ranked Top 10 out of all participating teams."
  },
  {
    name: "Google DevSprint",
    badge: "Participant",
    badgeBg: "rgba(74,158,191,0.1)",
    badgeColor: "var(--sky)",
    badgeBorder: "1px solid rgba(74,158,191,0.2)",
    organizer: "Google Developer Ecosystem",
    description: "Participated and collaborated in a fast-paced engineering sprint organized by the Google Developer ecosystem."
  },
  {
    name: "Google Solutions Challenge",
    badge: "Participant",
    badgeBg: "rgba(74,158,191,0.1)",
    badgeColor: "var(--sky)",
    badgeBorder: "1px solid rgba(74,158,191,0.2)",
    organizer: "Google Developer Groups",
    description: "Developed a socially impactful technology solution addressing UN Sustainable Development Goals."
  },
  {
    name: "Smart India Hackathon",
    badge: "Participant",
    badgeBg: "rgba(168,213,194,0.1)",
    badgeColor: "var(--sea-foam)",
    badgeBorder: "1px solid rgba(168,213,194,0.2)",
    organizer: "Government of India",
    description: "Participated in India's largest national-level hackathon. Proposed and prototyped an engineering solution for a real government problem statement."
  }
];

const Hackathons = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  cardRefs.forEach((ref, index) => {
    useScrollReveal(ref, { threshold: 0.12, delay: index * 0.1 });
  });

  return (
    <section 
      id="hackathons" 
      ref={sectionRef}
      className="py-[80px] md:py-[160px] px-[24px] md:px-[80px] border-t border-[#1E3A52]"
    >
      <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
        <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
        004 — Hackathons & Competitions
      </div>
      <h2 
        className="text-[#F5ECD7] mt-[1rem]" 
        style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.84rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
      >
        Built under pressure.
      </h2>
      <p className="font-sans font-light text-[#8BA5B8] mt-[0.5rem] text-[1rem]">
        Competing, building, and shipping — fast.
      </p>

      <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#C9A96E]">
        {hackathonsData.map((hackathon, idx) => (
          <div 
            key={hackathon.name}
            ref={cardRefs[idx]}
            className="group/card bg-[#162B3E] py-[36px] px-[40px] hover:bg-[#1C3450] hover:-translate-y-[3px] hover:border-t hover:border-t-[rgba(201,169,110,0.25)] transition-all duration-300 ease-out"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-display font-semibold text-[1.1rem] text-[#F5ECD7]">
                {hackathon.name}
              </h3>
            </div>
            <div className="font-sans font-light text-[0.85rem] text-[#8BA5B8] mt-[6px]">
              {hackathon.organizer}
            </div>
            <p className="font-sans font-light text-[0.9rem] text-[#8BA5B8] leading-[1.7] mt-[12px]">
              {hackathon.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
