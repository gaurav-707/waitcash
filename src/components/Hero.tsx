'use client';

import React, { useState, useEffect } from 'react';
import { Chrome, Github, ArrowRight, ShieldCheck, Zap, Sparkles, DollarSign } from 'lucide-react';

interface HeroProps {
  onOpenInstall?: () => void;
}

export default function Hero({ onOpenInstall }: HeroProps) {
  const [liveCents, setLiveCents] = useState(54891.42);
  const [liveSeconds, setLiveSeconds] = useState(2941820);
  const [liveImpressions, setLiveImpressions] = useState(4812091);

  // Live ticking heartbeat (Kickbacks.ai signature feature)
  useEffect(() => {
    const timer = setInterval(() => {
      const addedCent = +(Math.random() * 0.035 + 0.005).toFixed(3);
      setLiveCents((prev) => +(prev + addedCent).toFixed(2));
      setLiveSeconds((prev) => prev + Math.floor(Math.random() * 8 + 3));
      setLiveImpressions((prev) => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Network Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono font-medium mb-8 shadow-lg shadow-emerald-500/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>THE ATTENTION LAYER FOR GENERATIVE AI</span>
          <span className="text-zinc-500">•</span>
          <span className="text-white font-semibold">50/50 CASH REVENUE SPLIT</span>
        </div>

        {/* Main Punchy Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] max-w-4xl">
          Get Paid While <br />
          <span className="gradient-text-emerald">AI Thinks.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
          While ChatGPT, Claude, and Gemini spend 10–30 seconds reasoning, WaitCash displays a single non-intrusive sponsored line in the empty whitespace. You earn real cash for every verified wait.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenInstall}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition-all group cursor-pointer"
          >
            <Chrome className="w-5 h-5 text-black" />
            <span>Add to Chrome — It&apos;s Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://github.com/gaurav-707/waitcash"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <Github className="w-5 h-5 text-zinc-300" />
            <span>View Source on GitHub</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              MIT
            </span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Prompt Reading</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Sandboxed Browser Extension</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Instant Bank &amp; Whop Payouts</span>
          </div>
        </div>

        {/* ── Kickbacks.ai Authentic Live Financial Terminal ── */}
        <div className="w-full max-w-4xl mt-16 p-1 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-2xl">
          <div className="w-full rounded-[22px] bg-[#090d14]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl">
            {/* Header of terminal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  WaitCash Verified Ledger • Live Net Payouts
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited By Community</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {/* Metric 1 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Cash Distributed
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white flex items-baseline">
                  <span className="text-emerald-400 mr-0.5">$</span>
                  <span>{liveCents.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                  ↑ +$1,420.50 today
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Latency Monetized
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-cyan-400 flex items-baseline">
                  <span>{(liveSeconds / 3600).toFixed(1)}</span>
                  <span className="text-sm font-normal text-zinc-400 ml-1">hrs</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono mt-1">
                  ~14.2s avg dwell
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Qualified Waits
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
                  {liveImpressions.toLocaleString()}
                </div>
                <span className="text-[10px] text-zinc-400 font-mono mt-1">
                  5s dwell verified
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Your Revenue Cut
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-400">
                  50.0%
                </div>
                <span className="text-[10px] text-zinc-400 font-mono mt-1">
                  Deposited in USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
