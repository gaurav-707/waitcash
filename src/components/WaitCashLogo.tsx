'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function WaitCashLogo({ className = '', size = 26, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Minimal Claude-Inspired 8-Ray Terracotta Geometric Spark */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:rotate-45"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Minimalist 8-Ray Symmetrical Asterisk Spark */}
          {/* Vertical & Horizontal Rays */}
          <path
            d="M12 2V22M2 12H22"
            stroke="#D97757"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Diagonal Rays */}
          <path
            d="M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
            stroke="#D97757"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
          {/* Center Minimal Aperture */}
          <circle cx="12" cy="12" r="3.2" fill="#181816" stroke="#D97757" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.4" fill="#FAF8F5" />
        </svg>
      </div>

      {/* Clean Minimal Wordmark (No crowded subtext) */}
      {showText && (
        <span className="claude-heading text-xl font-normal tracking-tight text-[#FAF8F5] leading-none flex items-baseline">
          WaitCash
          <span className="text-[#D97757] ml-0.5 text-lg font-serif">.</span>
        </span>
      )}
    </div>
  );
}
