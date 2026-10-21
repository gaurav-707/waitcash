'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Chrome, ShieldCheck } from 'lucide-react';
import WaitCashLogo from '@/components/WaitCashLogo';

interface NavbarProps {
  onOpenInstall?: () => void;
}

export default function Navbar({ onOpenInstall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#181816]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
            : 'bg-[#181816]/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo with 3D W Ribbon & Prominent Brand Name */}
        <a href="#" className="flex items-center">
          <WaitCashLogo size={38} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9E9B91]">
          <a href="#how-it-works" className="hover:text-[#FAF8F5] transition-colors">
            How It Works
          </a>
          <a href="#interactive-demo" className="hover:text-[#FAF8F5] transition-colors">
            Live Preview
          </a>
          <a href="#calculator" className="hover:text-[#FAF8F5] transition-colors">
            Calculator
          </a>
          <a href="#open-source" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D97757]" />
            Security &amp; Audit
          </a>
          <a href="#advertisers" className="hover:text-[#FAF8F5] transition-colors">
            Advertisers
          </a>
          <a href="#faq" className="hover:text-[#FAF8F5] transition-colors">
            FAQ
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/gaurav-707/waitcash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-[#9E9B91] hover:text-[#FAF8F5] hover:border-white/20 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>gaurav-707</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#D97757]/15 text-[10px] text-[#D97757] font-semibold">
              ⭐ Source
            </span>
          </a>

          <button
            onClick={onOpenInstall}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-xs shadow-lg shadow-[#D97757]/20 active:scale-95 transition-all cursor-pointer"
          >
            <Chrome className="w-3.5 h-3.5" />
            <span>Add to Chrome</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9E9B91] hover:text-[#FAF8F5]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#1F1E1B] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 text-sm font-medium z-50">
          <a onClick={() => setMobileMenuOpen(false)} href="#how-it-works" className="text-[#FAF8F5] py-1">
            How It Works
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#interactive-demo" className="text-[#FAF8F5] py-1">
            Live Preview
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#calculator" className="text-[#FAF8F5] py-1">
            Earnings Calculator
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#open-source" className="text-[#FAF8F5] py-1">
            Security &amp; Audit
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#advertisers" className="text-[#FAF8F5] py-1">
            Advertisers
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="text-[#FAF8F5] py-1">
            FAQ
          </a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInstall) onOpenInstall();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-center"
            >
              <Chrome className="w-4 h-4" /> Add to Chrome — It&apos;s Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
