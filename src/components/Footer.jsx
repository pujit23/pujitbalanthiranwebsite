import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '32px 80px',
      borderTop: '4px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--card)',
      color: 'var(--card-foreground)',
    }}>
      <span className="font-pixel" style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>
        Plan hard. Build harder.
      </span>
      <span className="font-display" style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--primary)' }}>P23</span>
    </footer>
  );
};

export default Footer;
