import React from 'react';

const ButterflyDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Dotted flight path */}
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        className="absolute -top-10 -left-16 opacity-30"
      >
        <path
          d="M10 70 Q30 20 60 40 Q90 60 110 10"
          stroke="#c9a0a0"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
        />
      </svg>

      {/* Butterfly */}
      <div className="animate-butterfly">
        <svg
          width="60"
          height="50"
          viewBox="0 0 60 50"
          fill="none"
        >
          {/* Left wing */}
          <path
            d="M30 25 Q15 5 5 15 Q0 25 10 30 Q18 35 30 25Z"
            fill="url(#bflyGrad1)"
            stroke="#c9a0a0"
            strokeWidth="0.8"
          />
          <path
            d="M30 25 Q20 30 12 40 Q15 48 25 42 Q30 38 30 25Z"
            fill="url(#bflyGrad2)"
            stroke="#c9a0a0"
            strokeWidth="0.8"
          />

          {/* Right wing */}
          <path
            d="M30 25 Q45 5 55 15 Q60 25 50 30 Q42 35 30 25Z"
            fill="url(#bflyGrad1)"
            stroke="#c9a0a0"
            strokeWidth="0.8"
          />
          <path
            d="M30 25 Q40 30 48 40 Q45 48 35 42 Q30 38 30 25Z"
            fill="url(#bflyGrad2)"
            stroke="#c9a0a0"
            strokeWidth="0.8"
          />

          {/* Body */}
          <ellipse cx="30" cy="25" rx="2" ry="8" fill="#c9a0a0" />

          {/* Antennae */}
          <path d="M29 17 Q25 8 22 5" stroke="#c9a0a0" strokeWidth="0.8" fill="none" />
          <path d="M31 17 Q35 8 38 5" stroke="#c9a0a0" strokeWidth="0.8" fill="none" />
          <circle cx="22" cy="5" r="1.5" fill="#f4c2c2" />
          <circle cx="38" cy="5" r="1.5" fill="#f4c2c2" />

          {/* Heart accents on wings */}
          <path
            d="M15 18 Q15 15 17 15 Q19 15 19 18 Q19 15 21 15 Q23 15 23 18 Q23 21 19 24 Q15 21 15 18Z"
            fill="#fce4ec"
            opacity="0.6"
          />
          <path
            d="M37 18 Q37 15 39 15 Q41 15 41 18 Q41 15 43 15 Q45 15 45 18 Q45 21 41 24 Q37 21 37 18Z"
            fill="#fce4ec"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="bflyGrad1" x1="0" y1="0" x2="60" y2="50">
              <stop offset="0%" stopColor="#fce4ec" />
              <stop offset="100%" stopColor="#f4c2c2" />
            </linearGradient>
            <linearGradient id="bflyGrad2" x1="0" y1="50" x2="60" y2="0">
              <stop offset="0%" stopColor="#f4c2c2" />
              <stop offset="100%" stopColor="#e8a8a8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ButterflyDecoration;
