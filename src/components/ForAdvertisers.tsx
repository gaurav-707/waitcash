'use client';

import React from 'react';
import { Target, Users, BarChart3, CheckCircle2, ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function ForAdvertisers() {
  return (
    <section id="advertisers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-[#090d14] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>DIRECT B2B SPONSORSHIP DESK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reach Developers at Their <span className="gradient-text-cyan">Peak Focus.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            When an engineer sends an architecture prompt to ChatGPT or Claude, they stare intently at the screen for 10–30 seconds. Your brand captures 100% of that undivided attention.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">100% High-Intent Audience</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every impression reaches active software engineers, data scientists, and tech founders utilizing frontier models. Zero bots or accidental clicks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">5-Second Guaranteed Dwell</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You only pay for qualified impressions where the user remained on the page with your link in viewport for at least 5 continuous seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Transparent Real-Time Bidding</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Full visibility over daily budget caps, impressions served, and direct referral click-through rates (consistently averaging 2.4% – 4.1% CTR).
            </p>
          </div>
        </div>

        {/* Pricing Card & Booking */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-transparent p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              CURRENT AD INVENTORY
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              $8 – $15 <span className="text-lg font-normal text-zinc-400">CPM (Cost Per 1,000 Impressions)</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 max-w-lg">
              Pilot campaign packages start at $500 for 50,000 guaranteed developer impressions. Includes live dashboard access and custom UTM attribution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="mailto:advertisers@waitcash.ai?subject=Pilot%20Campaign%20Inquiry"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Book Campaign ($500 Pilot)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
