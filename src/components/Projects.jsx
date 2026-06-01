import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    num: "01",
    category: "AI · Social Impact",
    title: "NeedGraph",
    description: "An AI-powered early warning system helping NGOs predict and prevent community crises before they escalate. Field workers submit voice reports via WhatsApp in regional languages. Google Speech-to-Text transcribes them. Gemini Pro scores severity, extracts location and need type. A graph model detects cascading risks — food insecurity triggering school dropouts triggering mental health crises — alerting coordinators 3 weeks before it happens.",
    tech: ["React", "Vite", "Tailwind CSS", "D3.js", "Leaflet.js", "Node.js", "Google Cloud Functions", "Google Gemini Pro", "Google Speech-to-Text API", "Neo4j", "WhatsApp Cloud API", "Google Cloud Run", "GitHub Actions CI/CD"],
    url: "needgraph.app",
    gradient: "linear-gradient(145deg, #061421 0%, #0D2335 50%, #061B2E 100%)",
    previewText: "NeedGraph",
    previewTextColor: "#4A9EBF",
    previewSubtext: "Crisis Intelligence Platform",
    previewSubtextColor: "#1E3A52"
  },
  {
    num: "02",
    category: "Full Stack · Community",
    title: "CycHigh",
    description: "India's most comprehensive cycling encyclopedia and community platform. 120 bicycles across 25 brands with complete technical specifications, pricing in INR and USD, maintenance guides, and upgrade recommendations. Includes a smart 5-question recommendation engine, side-by-side comparison tool with PDF export, virtual bike builder with real-time weight and cost calculation, ride tracker, and a community with posts, upvotes, and comment threads.",
    tech: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "bcryptjs", "Multer"],
    url: "cychigh.in",
    gradient: "linear-gradient(145deg, #0D1B10 0%, #142B18 50%, #0D1B10 100%)",
    previewText: "CycHigh",
    previewTextColor: "#C9A96E",
    previewSubtext: "Know Your Ride",
    previewSubtextColor: "#1E3A52"
  },
  {
    num: "03",
    category: "Full Stack · Marketplace",
    title: "FindSpace",
    description: "A secure, exclusive campus trading marketplace for university students to buy, sell, and exchange textbooks, gadgets, and gear within their verified university community. Features a curated campus feed with category filtering, product listings with seller contact and checkout workflows, quick sell modals with image uploads, Firebase authentication, glassmorphism UI, and full dark/light theme support.",
    tech: ["React 19", "React Router v7", "Vite", "Vanilla CSS", "Lucide React", "Firebase"],
    url: "findspace.campus",
    gradient: "linear-gradient(145deg, #1A1020 0%, #251535 50%, #1A1020 100%)",
    previewText: "FindSpace",
    previewTextColor: "#E8735A",
    previewSubtext: "Campus Marketplace",
    previewSubtextColor: "#2A1535"
  }
];

const ProjectRow = ({ project, index }) => {
  const isOdd = index % 2 === 0;
  const rowRef = useRef(null);
  
  useScrollReveal(rowRef, { threshold: 0.12, delay: index * 0.12 });

  const handleTilt = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    el.style.transition = 'transform 0.1s ease';
  };

  const resetTilt = (el) => {
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.transition = 'transform 0.5s ease';
  };

  const TextBlock = () => (
    <div className="relative w-full md:w-[55%]">
      <div 
        className={`absolute top-[-10px] ${isOdd ? 'left-0' : 'right-0'} font-serif text-[7rem] text-[#112236] group-hover:text-[#162B3E] leading-none pointer-events-none select-none z-0 transition-colors duration-400`}
      >
        {project.num}
      </div>
      
      <div className="font-sans font-medium text-[0.72rem] tracking-[0.18em] uppercase mb-[10px] relative z-10" style={{ color: ['#4A9EBF', '#C9A96E', '#E8C4B8', '#A8D5C2'][index] }}>
        {project.category}
      </div>
      
      <h3 
        className="font-serif italic text-[#F5ECD7] group-hover:text-[#C9A96E] relative z-10 leading-[1.1] transition-colors duration-300 ease-out"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
      >
        {project.title}
      </h3>
      
      <p className="font-sans font-light text-[0.95rem] leading-[1.85] text-[#8BA5B8] mt-[1rem] max-w-[400px]">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-[6px] mt-[1.4rem]">
        {project.tech.map(tech => (
          <span 
            key={tech} 
            className="bg-transparent border border-[#1E3A52] px-[14px] py-[6px] rounded-[2px] font-sans font-normal text-[0.78rem] text-[#8BA5B8] hover:border-[#C9A96E] hover:text-[#C9A96E] hover:bg-[rgba(201,169,110,0.04)] transition-colors duration-200"
            data-cursor="hover"
          >
            {project.tech.length > 0 && tech}
          </span>
        ))}
      </div>
      
      <div className="mt-[1.8rem]">
        <a 
          href="#" 
          className="font-sans font-normal text-[0.83rem] text-[#F5ECD7] tracking-[0.04em] border-b border-[#1E3A52] pb-[3px] inline-block hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-200"
          style={{ textShadow: '0 0 20px rgba(201,169,110,0.3)' }}
          data-cursor="hover"
        >
          View Project →
        </a>
      </div>
    </div>
  );

  const PreviewBlock = () => (
    <div 
      className="w-full md:w-[40%] border border-[#1E3A52] rounded-[6px] overflow-hidden bg-[#0D1B2A] transition-all duration-400 ease-out group-hover:translate-y-[-8px] group-hover:shadow-[0_8px_40px_rgba(201,169,110,0.12),inset_0_-1px_0_rgba(201,169,110,0.08)]"
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={e => handleTilt(e, e.currentTarget)}
      onMouseLeave={e => resetTilt(e.currentTarget)}
    >
      {/* Browser Bar */}
      <div className="h-[38px] bg-[#061421] border-b border-[#1E3A52] flex items-center">
        <div className="flex gap-[6px] ml-[14px]">
          <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto w-[55%] bg-[#0D1B2A] rounded-[3px] py-[4px] px-[10px] text-center font-sans font-normal text-[0.7rem] text-[#3D5A73] truncate">
          {project.url}
        </div>
        <div className="w-[43px]" />
      </div>
      
      {/* Content Area */}
      <div 
        className="h-[220px] relative overflow-hidden flex flex-col items-center justify-center project-preview-bg"
        style={{ background: project.gradient }}
      >
        <div 
          className="font-serif italic text-[3rem] opacity-30 select-none"
          style={{ color: project.previewTextColor }}
        >
          {project.previewText}
        </div>
        <div 
          className="font-sans font-normal uppercase tracking-[0.2em] text-[0.7rem] mt-[8px] select-none"
          style={{ color: project.previewSubtextColor }}
        >
          {project.previewSubtext}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={rowRef}
      className={`group py-[64px] flex flex-col md:flex-row items-center justify-between gap-[60px] border-t border-[#1E3A52] hover:bg-[#112236] transition-colors duration-400 ease-in-out ${index === projectsData.length - 1 ? 'border-b' : ''}`}
      data-cursor="hover"
    >
      <div className="w-full flex flex-col md:hidden gap-[40px]">
        <PreviewBlock />
        <TextBlock />
      </div>
      
      <div className="hidden md:flex w-full items-center justify-between gap-[60px]">
        {isOdd ? (
          <>
            <TextBlock />
            <PreviewBlock />
          </>
        ) : (
          <>
            <PreviewBlock />
            <TextBlock />
          </>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-[80px] md:py-[160px] px-[24px] md:px-[80px] border-t border-[#1E3A52]"
    >
      <div className="font-sans font-normal text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A96E]">
        <span style={{display:'inline-block', width:4, height:4, background:'#C9A96E', marginRight:10, verticalAlign:'middle'}} />
        003 — Projects
      </div>
      <h2 
        className="text-[#F5ECD7] mt-[1rem]" 
        style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.84rem)', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
      >
        Selected work.
      </h2>

      <div className="mt-[3rem]">
        {projectsData.map((project, index) => (
          <ProjectRow key={project.num} project={project} index={index} />
        ))}
      </div>

      <style>{`
        .project-preview-bg {
          background-size: 200% 200% !important;
          transition: background-position 0.5s ease;
        }
        .group:hover .project-preview-bg {
          animation: shimmer 1.5s ease infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
