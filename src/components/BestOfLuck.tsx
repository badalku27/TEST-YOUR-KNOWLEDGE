import React from 'react';
import './BestOfLuck.css';

const BestOfLuck: React.FC = () => {
  return (
    <div className="best-of-luck-container">
      {/* Speech Bubble */}
      <div className="speech-bubble">
        <div className="bubble-content">
          <h2 className="luck-text">Best of Luck!</h2>
        </div>
        {/* Bubble Tail */}
        <div className="bubble-tail"></div>
      </div>

      {/* Animated Paw */}
      <div className="paw-container">
        <svg 
          className="animated-paw" 
          width="120" 
          height="120" 
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Paw Pad */}
          <ellipse 
            cx="60" 
            cy="75" 
            rx="28" 
            ry="32" 
            fill="#f0f4ff"
            stroke="#a5b4fc"
            strokeWidth="2"
          />
          
          {/* Toe Pads */}
          <ellipse 
            cx="40" 
            cy="50" 
            rx="12" 
            ry="16" 
            fill="#e0e7ff"
            stroke="#a5b4fc"
            strokeWidth="1.5"
          />
          <ellipse 
            cx="60" 
            cy="45" 
            rx="12" 
            ry="16" 
            fill="#e0e7ff"
            stroke="#a5b4fc"
            strokeWidth="1.5"
          />
          <ellipse 
            cx="80" 
            cy="50" 
            rx="12" 
            ry="16" 
            fill="#e0e7ff"
            stroke="#a5b4fc"
            strokeWidth="1.5"
          />
          
          {/* Small center toe */}
          <ellipse 
            cx="60" 
            cy="30" 
            rx="10" 
            ry="12" 
            fill="#e0e7ff"
            stroke="#a5b4fc"
            strokeWidth="1.5"
          />
          
          {/* Paw detail lines */}
          <path 
            d="M 45 75 Q 60 80, 75 75" 
            stroke="#c7d2fe"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default BestOfLuck;
