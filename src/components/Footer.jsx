import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '36px clamp(20px, 6vw, 80px)',
        borderTop: '1px solid rgba(242, 241, 236, 0.08)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0a0f1f',
        color: '#9aa3b8',
      }}
    >
      <a
        href="https://github.com/pujit23"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 700,
          fontVariantNumeric: 'lining-nums',
          fontFeatureSettings: '"lnum" 1',
          letterSpacing: '-0.02em',
          color: '#f2f1ec',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ff6a2b'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#f2f1ec'; }}
      >
        P23
      </a>
    </footer>
  );
};

export default Footer;
