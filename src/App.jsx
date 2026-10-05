import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import CertsAndClubs from './components/CertsAndClubs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

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
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <About />
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <Skills />
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <Projects />
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <Hackathons />
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <CertsAndClubs />
          <hr style={{ border: 'none', borderTop: '1px solid rgba(242,241,236,0.08)', margin: 0 }} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
