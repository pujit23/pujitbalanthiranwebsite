import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-64px 0px -80% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Hackathons', id: 'hackathons' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-[64px] z-[100] px-6 md:px-20 flex items-center justify-between transition-all duration-400 ease-in-out ${
        scrolled 
          ? 'bg-[rgba(13,27,42,0.92)] backdrop-blur-[32px] saturate-[180%] border-b border-[#1E3A52] border-t border-t-[rgba(201,169,110,0.4)]' 
          : 'bg-transparent border-b border-transparent border-t border-t-transparent'
      }`}
    >
      <div 
        className="font-display font-bold text-[1.3rem] flex"
        data-cursor="hover"
      >
        <span style={{color: '#F5ECD7'}}>P</span>
        <span style={{color: '#C9A96E'}}>23</span>
      </div>

      <div className="flex items-center space-x-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            data-cursor="hover"
            className={`font-sans font-normal text-[0.78rem] tracking-[0.12em] uppercase transition-colors duration-200 ${
              activeSection === link.id ? 'text-[#C9A96E]' : 'text-[#3D5A73] hover:text-[#C9A96E]'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
