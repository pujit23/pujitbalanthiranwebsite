import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ChapterBreak from './components/ChapterBreak';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import CertsAndClubs from './components/CertsAndClubs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  // Quick fix for smooth scrolling when jumping from Intro to App
  useEffect(() => {
    if (introComplete) {
      window.scrollTo(0, 0);
    }
  }, [introComplete]);

  return (
    <>
      {!introComplete && <IntroLoader onComplete={() => setIntroComplete(true)} />}
      <div className={`site-wrapper ${introComplete ? 'visible' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <hr style={{ border: 'none', borderTop: '4px solid var(--border)', margin: 0 }} />
          <About />
          <hr style={{ border: 'none', borderTop: '4px solid var(--border)', margin: 0 }} />
          <Skills />
          <ChapterBreak label="Projects" tone="tobacco" />
          <Projects />
          <hr style={{ border: 'none', borderTop: '4px solid var(--border)', margin: 0 }} />
          <Hackathons />
          <hr style={{ border: 'none', borderTop: '4px solid var(--border)', margin: 0 }} />
          <CertsAndClubs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
