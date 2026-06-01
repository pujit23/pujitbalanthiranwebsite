import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WaveDivider from './components/WaveDivider';
import Hackathons from './components/Hackathons';
import CertsAndClubs from './components/CertsAndClubs';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showAmbientLine, setShowAmbientLine] = useState(false);
  
  useEffect(() => {
    if (introComplete) {
      setTimeout(() => setShowAmbientLine(true), 100);
    }
  }, [introComplete]);
  
  return (
    <>
      {!introComplete && (
        <IntroLoader onComplete={() => setIntroComplete(true)} />
      )}
      <div className={`site-wrapper ${introComplete ? 'visible' : ''}`}>
        <ScrollProgress />
        
        {/* Ocean Wave Texture Overlay */}
        <div 
          className="fixed inset-0 z-[9997] pointer-events-none select-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(74,158,191,0.15) 3px, rgba(74,158,191,0.15) 4px)",
            backgroundSize: "100% 8px"
          }}
        />

        {/* Film grain noise overlay */}
        <div 
          className="fixed inset-0 z-[9996] pointer-events-none select-none opacity-[0.018]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px"
          }}
        />

        {/* Top ambient horizon line */}
        <div 
          className="fixed top-0 left-0 right-0 h-[1px] z-[9998] pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(74,158,191,0.4) 20%, rgba(201,169,110,0.8) 50%, rgba(74,158,191,0.4) 80%, transparent 100%)",
            opacity: showAmbientLine ? 0.6 : 0
          }}
        />

        <Navbar />
        <main>
          <Hero />
          <WaveDivider />
          <About />
          <Skills />
          <WaveDivider />
          <Projects />
          <WaveDivider />
          <Hackathons />
          <WaveDivider />
          <CertsAndClubs />
          <WaveDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
