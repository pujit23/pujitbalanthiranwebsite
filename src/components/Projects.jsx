import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    num: "01", category: "AI · Social Impact", title: "NeedGraph", status: "Live",
    description: "An AI-powered early warning system helping NGOs predict and prevent community crises before they escalate. Field workers submit voice reports via WhatsApp in regional languages. Google Speech-to-Text transcribes them. Gemini Pro scores severity, extracts location and need type. A graph model detects cascading risks — food insecurity triggering school dropouts triggering mental health crises — alerting coordinators 3 weeks before it happens.",
    tech: ["React","Vite","Tailwind CSS","D3.js","Leaflet.js","Node.js","Google Cloud Functions","Google Gemini Pro","Google Speech-to-Text API","Neo4j","WhatsApp Cloud API","Google Cloud Run","GitHub Actions CI/CD"],
    url: "https://github.com/pujit23/needgraph_final",
  },
  {
    num: "02", category: "Full Stack · Community", title: "CycHigh", status: "Live",
    description: "India's most comprehensive cycling encyclopedia and community platform. 120 bicycles across 25 brands with complete technical specifications, pricing in INR and USD, maintenance guides, and upgrade recommendations. Includes a smart 5-question recommendation engine, side-by-side comparison tool with PDF export, virtual bike builder with real-time weight and cost calculation, ride tracker, and a community with posts, upvotes, and comment threads.",
    tech: ["React 18","Vite","Tailwind CSS","Framer Motion","Recharts","Node.js","Express.js","MongoDB Atlas","Mongoose","JWT","bcryptjs","Multer"],
    url: "https://github.com/pujit23/cychigh",
  },
  {
    num: "03", category: "Full Stack · Marketplace", title: "FindSpace", status: "Live",
    description: "A secure, exclusive campus trading marketplace for university students to buy, sell, and exchange textbooks, gadgets, and gear within their verified university community. Features a curated campus feed with category filtering, product listings with seller contact and checkout workflows, quick sell modals with image uploads, Firebase authentication, glassmorphism UI, and full dark/light theme support.",
    tech: ["React 19","React Router v7","Vite","Vanilla CSS","Lucide React","Firebase"],
    url: "https://github.com/pujit23/Findspace",
  },
  {
    num: "04", category: "AI · Quantum Optimization", title: "QRoute", status: "Live",
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
      className="retro-press"
      style={{
        background: 'var(--card)',
        color: 'var(--card-foreground)',
        border: '4px solid var(--border)',
        boxShadow: '8px 8px 0 0 var(--shadow-color)',
        padding: '40px',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}>
            {project.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="font-pixel" style={{ fontSize: 9, color: 'var(--muted-foreground)' }}>{project.num}</span>
            <span
              className="font-pixel"
              style={{
                fontSize: 8,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '2px solid var(--border)',
                background: 'var(--accent)',
                color: 'var(--accent-foreground)',
                padding: '3px 8px',
                fontWeight: 900,
                boxShadow: '2px 2px 0 0 var(--shadow-color)',
              }}
            >
              {project.status}
            </span>
          </div>
        </div>

        <h3 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--foreground)', lineHeight: 1.05, marginBottom: '1.2rem', textTransform: 'uppercase' }}>
          {project.title}
        </h3>

        <p className="font-body" style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--foreground)', maxWidth: '780px', marginBottom: '1.8rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
          {project.tech.map((tech, tIdx) => (
            <span
              key={tech}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '2px solid var(--border)',
                background: tIdx % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                color: tIdx % 2 === 0 ? 'var(--primary-foreground)' : 'var(--accent-foreground)',
                boxShadow: '2px 2px 0 0 var(--shadow-color)',
                padding: '3px 8px',
                fontSize: '0.72rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-link"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            fontSize: '0.85rem',
            padding: '10px 20px',
          }}
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="projects" ref={sectionRef}
      style={{ padding: '100px 80px', borderBottom: '4px solid var(--border)', background: 'var(--background)' }}>
      <div className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--primary)' }} />
        003 — Projects
      </div>
      <h2 className="font-display" style={{ fontSize: 'var(--text-heading-sm)', fontWeight: 400, lineHeight: 1.05, color: 'var(--foreground)', marginBottom: '3.5rem', textTransform: 'uppercase' }}>
        Selected work.
      </h2>

      <div>
        {projectsData.map((p, i) => <ProjectCard key={p.num} project={p} index={i} />)}
      </div>
    </section>
  );
};

export default Projects;
