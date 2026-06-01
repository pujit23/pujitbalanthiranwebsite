import React from 'react';

const Footer = () => {
  return (
    <footer className="py-[32px] px-[24px] md:px-[80px] border-t border-[#1E3A52] shadow-[0_-1px_0_0_rgba(201,169,110,0.15)] flex flex-col md:flex-row justify-between items-center gap-[20px] bg-transparent">
      <div className="font-sans font-normal text-[0.75rem] tracking-[0.1em] text-[#8BA5B8]">
        © {new Date().getFullYear()} PUJIT BALANTHIRAN.
      </div>
      
      <div 
        className="font-serif italic text-[1.4rem]"
        data-cursor="hover"
      >
        <span style={{color: '#8BA5B8'}}>P</span>
        <span style={{color: '#C9A96E'}}>23</span>
      </div>

      <div className="font-sans font-normal text-[0.75rem] tracking-[0.1em] text-[#8BA5B8]">
        DESIGNED & BUILT FROM SCRATCH
      </div>
    </footer>
  );
};

export default Footer;
