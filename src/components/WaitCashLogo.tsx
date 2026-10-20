'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function WaitCashLogo({ className = '', size = 32, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Claude-Inspired Geometric Terracotta Starburst / Spark */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform hover:rotate-12 duration-300"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(217,119,87,0.35)]"
        >
          <defs>
            <linearGradient id="claudeSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E07A5F" />
              <stop offset="50%" stopColor="#D97757" />
              <stop offset="100%" stopColor="#C15F3C" />
            </linearGradient>
            <radialGradient id="claudeCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5EBE6" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#D97757" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8E3E23" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 12 Radiating Tapered Petals / Rays (Claude signature geometry) */}
          <g transform="translate(50, 50)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
              const isMajor = idx % 2 === 0;
              const height = isMajor ? 38 : 28;
              const width = isMajor ? 9 : 7;
              return (
                <path
                  key={angle}
                  d={`M0 0 L-${width / 2} -${height * 0.4} Q-${width / 2} -${height} 0 -${height} Q${width / 2} -${height} ${width / 2} -${height * 0.4} Z`}
                  fill="url(#claudeSparkGrad)"
                  transform={`rotate(${angle})`}
                  opacity={isMajor ? 0.95 : 0.8}
                />
              );
            })}
            {/* Center Core Aperture */}
            <circle cx="0" cy="0" r="10" fill="#181816" stroke="url(#claudeSparkGrad)" strokeWidth="3" />
            <circle cx="0" cy="0" r="4.5" fill="#FAF8F5" />
          </g>
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5] leading-none flex items-center">
            WaitCash
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97757] ml-1 self-end mb-1" />
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#9E9B91] uppercase mt-0.5">
            ATTENTION LAYER
          </span>
        </div>
      )}
    </div>
  );
}
