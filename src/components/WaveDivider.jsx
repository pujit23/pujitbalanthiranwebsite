import React from 'react';

const WaveDivider = ({ style = {} }) => {
  return (
    <svg 
      viewBox="0 0 1440 60" 
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: 60,
        display: 'block',
        marginBottom: '-2px',
        ...style
      }}
    >
      <path 
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill="#0D1B2A" 
        stroke="none"
      />
      <path 
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30"
        fill="none" 
        stroke="rgba(201,169,110,0.12)" 
        strokeWidth="1"
      />
    </svg>
  );
};

export default WaveDivider;
