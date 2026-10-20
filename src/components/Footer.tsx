'use client';

import React from 'react';
import { Github, Twitter, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070a] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-extrabold text-base shadow-lg shadow-cyan-500/20">
                ⚡
              </div>
              <span className="font-bold text-white tracking-tight text-xl">
                WaitCash<span className="text-emerald-400">.ai</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              The open-source attention layer for generative AI. Monetize waiting latency across ChatGPT, Claude, and Gemini with a verified 50/50 revenue split.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Status: 100% Operational</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#install" className="hover:text-white transition-colors">Chrome Extension</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#interactive-demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Earnings Calculator</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Transparency
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1"><span>GitHub Repo (@gaurav-707)</span></a></li>
              <li><a href="#open-source" className="hover:text-white transition-colors">Security & Audit</a></li>
              <li><a href="https://whop.com" className="hover:text-white transition-colors">Whop Payout Rail</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Advertisers
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#advertisers" className="hover:text-white transition-colors">Direct Desk ($8–$15 CPM)</a></li>
              <li><a href="mailto:advertisers@waitcash.ai" className="hover:text-white transition-colors">Pilot Packages ($500)</a></li>
              <li><a href="mailto:contact@waitcash.ai" className="hover:text-white transition-colors">Contact Founders</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 WaitCash.ai. Released under the MIT Open Source License.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            <a href="https://discord.com" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
