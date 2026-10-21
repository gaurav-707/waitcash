'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function WaitCashLogo({ className = '', size = 38, showText = true }: LogoProps) {
  // Ribbon has aspect ratio 384x255 (~1.5:1)
  const width = Math.round(size * 1.4);
  const height = size;

  return (
    <div className={`group inline-flex items-center gap-3 select-none cursor-pointer shrink-0 ${className}`}>
      {/* 3D Interlocking 'W' Ribbon Logo with Hover Animation */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-1"
        style={{ width, height }}
      >
        <Image
          src="/brand-logo.png"
          alt="WaitCash Logo"
          width={width}
          height={height}
          priority
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(217,119,87,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_6px_22px_rgba(217,119,87,0.6)] group-hover:brightness-110"
        />
      </div>

      {/* Prominent, Highlighted Brand Name */}
      {showText && (
        <span className="claude-heading text-2xl sm:text-3xl font-semibold tracking-tight leading-none flex items-center transition-all duration-300 whitespace-nowrap shrink-0">
          <span className="bg-gradient-to-r from-white via-[#FAF8F5] to-[#E5A869] bg-clip-text text-transparent group-hover:to-[#D97757] transition-all duration-300">
            WaitCash
          </span>
          <span className="text-[#D97757] text-3xl font-serif ml-0.5 animate-pulse-slow">.</span>
        </span>
      )}
    </div>
  );
}
