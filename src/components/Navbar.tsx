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

  const handleInstall = () => {
    // 1. Trigger direct ZIP download immediately
    const link = document.createElement('a');
    link.href = '/waitcash-extension.zip';
    link.download = 'waitcash-extension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Open setup modal instructions
    if (onOpenInstall) onOpenInstall();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pt-3 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#181816]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
            : 'bg-[#181816]/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo with 3D W Ribbon & Prominent Brand Name */}
        <a href="#" className="flex items-center shrink-0 mr-2 sm:mr-4 lg:mr-6">
          <WaitCashLogo size={34} />
        </a>

        {/* Desktop Links (Visible on lg screens where horizontal room is ample) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#9E9B91]">
          <a href="#how-it-works" className="hover:text-[#FAF8F5] transition-colors whitespace-nowrap shrink-0">
            How It Works
          </a>
          <a href="#interactive-demo" className="hover:text-[#FAF8F5] transition-colors whitespace-nowrap shrink-0">
            Live Preview
          </a>
          <a href="#calculator" className="hover:text-[#FAF8F5] transition-colors whitespace-nowrap shrink-0">
            Calculator
          </a>
          <a href="#open-source" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#D97757] shrink-0" />
            <span>Security &amp; Audit</span>
          </a>
          <a href="#advertisers" className="hover:text-[#FAF8F5] transition-colors whitespace-nowrap shrink-0">
            Advertisers
          </a>
          <a href="#faq" className="hover:text-[#FAF8F5] transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://github.com/gaurav-707/waitcash"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-[#9E9B91] hover:text-[#FAF8F5] hover:border-white/20 transition-all shrink-0 whitespace-nowrap"
          >
            <Github className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">gaurav-707</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#D97757]/15 text-[10px] text-[#D97757] font-semibold whitespace-nowrap shrink-0">
              ⭐ Source
            </span>
          </a>

          <button
            onClick={handleInstall}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-xs shadow-lg shadow-[#D97757]/20 active:scale-95 transition-all cursor-pointer shrink-0 whitespace-nowrap"
          >
            <Chrome className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Add to Chrome</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9E9B91] hover:text-[#FAF8F5] shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#1F1E1B] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 text-sm font-medium z-50 animate-fade-in">
          <a onClick={() => setMobileMenuOpen(false)} href="#how-it-works" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            How It Works
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#interactive-demo" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            Live Preview
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#calculator" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            Earnings Calculator
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#open-source" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            Security &amp; Audit
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#advertisers" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            Advertisers
          </a>
          <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="text-[#FAF8F5] py-1 hover:text-[#D97757] transition-colors">
            FAQ
          </a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleInstall();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-center"
            >
              <Chrome className="w-4 h-4" /> Add to Chrome — Download .ZIP
            </button>
            <a
              href="https://github.com/gaurav-707/waitcash"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-[#9E9B91]"
            >
              <Github className="w-4 h-4" /> gaurav-707 / waitcash (⭐ Source)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
