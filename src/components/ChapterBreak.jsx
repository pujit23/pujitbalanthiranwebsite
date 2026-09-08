import React from 'react';

const TONES = {
  tobacco: { bg: 'var(--primary)', fg: 'var(--primary-foreground)' },
  espresso: { bg: 'var(--secondary)', fg: 'var(--secondary-foreground)' },
};

const ChapterBreak = ({ label, tone = 'tobacco' }) => {
  const toneStyle = TONES[tone] || TONES.tobacco;
  return (
    <div
      style={{
        background: toneStyle.bg,
        color: toneStyle.fg,
        width: '100%',
        padding: 'clamp(40px, 8vw, 100px) 0',
        overflow: 'hidden',
        borderTop: '4px solid var(--border)',
        borderBottom: '4px solid var(--border)',
      }}
    >
      <h2
        className="font-display"
        style={{
          fontWeight: 400,
          fontSize: 'var(--text-heading-lg)',
          lineHeight: 'var(--leading-tight)',
          margin: 0,
          paddingLeft: 80,
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </h2>
    </div>
  );
};

export default ChapterBreak;
