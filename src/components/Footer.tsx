'use client';

import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import WaitCashLogo from '@/components/WaitCashLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121210] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <WaitCashLogo size={42} />
            <p className="text-xs text-[#A09E96] max-w-sm leading-relaxed font-sans">
              The open-source attention layer for generative AI. Monetize waiting latency across Claude, ChatGPT, and Gemini with a verified 50/50 revenue split.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D97757] bg-[#D97757]/10 px-3 py-1.5 rounded-lg border border-[#D97757]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />
              <span>System Status: 100% Operational</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5] font-bold mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A09E96]">
              <li><a href="#install" className="hover:text-[#FAF8F5] transition-colors">Chrome Extension</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FAF8F5] transition-colors">How It Works</a></li>
              <li><a href="#interactive-demo" className="hover:text-[#FAF8F5] transition-colors">Interactive Demo</a></li>
              <li><a href="#calculator" className="hover:text-[#FAF8F5] transition-colors">Earnings Calculator</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5] font-bold mb-4">
              Transparency
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A09E96]">
              <li><a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1"><span>GitHub Repo (@gaurav-707)</span></a></li>
              <li><a href="#open-source" className="hover:text-[#FAF8F5] transition-colors">Security &amp; Audit</a></li>
              <li><a href="https://whop.com" className="hover:text-[#FAF8F5] transition-colors">Whop Payout Rail</a></li>
              <li><a href="#faq" className="hover:text-[#FAF8F5] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5] font-bold mb-4">
              Advertisers
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A09E96]">
              <li><a href="#advertisers" className="hover:text-[#FAF8F5] transition-colors">Direct Desk ($8–$15 CPM)</a></li>
              <li><a href="mailto:advertisers@waitcash.ai" className="hover:text-[#FAF8F5] transition-colors">Pilot Packages ($500)</a></li>
              <li><a href="mailto:contact@waitcash.ai" className="hover:text-[#FAF8F5] transition-colors">Contact Founders</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9E9B91]">
          <div>
            © 2026 WaitCash.ai. Released under the MIT Open Source License by @gaurav-707.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            <a href="https://discord.com" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
