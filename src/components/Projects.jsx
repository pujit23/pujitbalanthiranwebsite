import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    num: "01",
    category: "AI · Social Impact",
    title: "NeedGraph",
    status: "Live",
    description: "An AI-powered early warning system helping NGOs predict and prevent community crises before they escalate. Field workers submit voice reports via WhatsApp in regional languages. Google Speech-to-Text transcribes them. Gemini Pro scores severity, extracts location and need type. A graph model detects cascading risks — food insecurity triggering school dropouts triggering mental health crises — alerting coordinators 3 weeks before it happens.",
    tech: ["React","Vite","Tailwind CSS","D3.js","Leaflet.js","Node.js","Google Cloud Functions","Google Gemini Pro","Google Speech-to-Text API","Neo4j","WhatsApp Cloud API","Google Cloud Run","GitHub Actions CI/CD"],
    url: "https://github.com/pujit23/needgraph_final",
  },
  {
    num: "02",
    category: "Full Stack · Community",
    title: "CycHigh",
    status: "Live",
    description: "India's most comprehensive cycling encyclopedia and community platform. 120 bicycles across 25 brands with complete technical specifications, pricing in INR and USD, maintenance guides, and upgrade recommendations. Includes a smart 5-question recommendation engine, side-by-side comparison tool with PDF export, virtual bike builder with real-time weight and cost calculation, ride tracker, and a community with posts, upvotes, and comment threads.",
    tech: ["React 18","Vite","Tailwind CSS","Framer Motion","Recharts","Node.js","Express.js","MongoDB Atlas","Mongoose","JWT","bcryptjs","Multer"],
    url: "https://github.com/pujit23/cychigh",
  },
  {
    num: "03",
    category: "Full Stack · Marketplace",
    title: "FindSpace",
    status: "Live",
    description: "A secure, exclusive campus trading marketplace for university students to buy, sell, and exchange textbooks, gadgets, and gear within their verified university community. Features a curated campus feed with category filtering, product listings with seller contact and checkout workflows, quick sell modals with image uploads, Firebase authentication, and clean UI.",
    tech: ["React 19","React Router v7","Vite","Vanilla CSS","Lucide React","Firebase"],
    url: "https://github.com/pujit23/Findspace",
  },
  {
    num: "04",
    category: "AI · Quantum Optimization",
    title: "QRoute",
    status: "Live",
    description: "A route-optimization platform solving large-scale Vehicle Routing and shortest-path problems using QPSO — a quantum-inspired swarm convergence method rather than classical greedy or brute-force search. Models real road networks via OpenStreetMap/OSMnx, simulates dynamic traffic with live-injected incidents and real-time re-optimization, and benchmarks QPSO against classical metaheuristics and exact methods for convergence speed and scalability on city-sized networks.",
    tech: ["Python","Streamlit","OSMnx","QPSO","OpenStreetMap"],
    url: "https://github.com/pujit23/QRoute23",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  useScrollReveal(cardRef, { threshold: 0.1, delay: index * 0.1 });

  return (
    <div
      ref={cardRef}
      style={{
        background: '#0d1428',
        border: '1px solid rgba(242, 241, 236, 0.08)',
        borderRadius: 16,
        padding: 'clamp(28px, 4vw, 44px)',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 106, 43, 0.38)';
        e.currentTarget.style.boxShadow = '0 0 32px rgba(255, 106, 43, 0.12)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(242, 241, 236, 0.08)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div>
        {/* Top category & status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff6a2b', fontWeight: 600 }}>
            {project.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 12, color: '#9aa3b8', fontFamily: 'var(--font-mono)' }}>{project.num}</span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: '1px solid rgba(242, 241, 236, 0.12)',
                background: 'rgba(10, 15, 31, 0.6)',
                color: '#f2f1ec',
                padding: '2px 8px',
                borderRadius: 9999,
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff6a2b' }} />
              {project.status}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
            fontWeight: 400,
            color: '#f2f1ec',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: '#9aa3b8', maxWidth: '820px', marginBottom: '2rem', fontWeight: 300 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2.5rem' }}>
          {project.tech.map(tech => (
            <span
              key={tech}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(242, 241, 236, 0.08)',
                background: 'rgba(10, 15, 31, 0.8)',
                color: '#9aa3b8',
                padding: '4px 12px',
                fontSize: '0.78rem',
                borderRadius: 9999,
                letterSpacing: '0.02em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / CTA */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '1.25rem', borderTop: '1px solid rgba(242, 241, 236, 0.06)' }}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            color: '#f2f1ec',
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#ff6a2b'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#f2f1ec'; }}
        >
          <span>View on GitHub</span>
          <span>&rarr;</span>
        </a>
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
      style={{
        padding: '100px clamp(20px, 6vw, 80px)',
        background: '#0a0f1f',
        position: 'relative',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6a2b', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#ff6a2b' }} />
          003 — Selected Projects
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#f2f1ec',
            marginBottom: '3.5rem',
          }}
        >
          Systems built to scale.
        </h2>

        <div>
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
