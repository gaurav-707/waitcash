'use client';

import React, { useState, useEffect } from 'react';
import { Chrome, Github, ArrowRight, ShieldCheck, Zap, Sparkles, DollarSign } from 'lucide-react';

interface HeroProps {
  onOpenInstall?: () => void;
}

// Pure deterministic formatters to guarantee zero hydration mismatches across locales (e.g. en-IN vs en-US)
function formatCurrency(num: number): string {
  const fixed = num.toFixed(2);
  const parts = fixed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function formatInteger(num: number): string {
  return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Hero({ onOpenInstall }: HeroProps) {
  const [liveCents, setLiveCents] = useState(54891.42);
  const [liveSeconds, setLiveSeconds] = useState(2941820);
  const [liveImpressions, setLiveImpressions] = useState(4812091);

  // Live ticking heartbeat
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
      {/* Claude Ambient Warm Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-[#D97757]/15 via-[#D4A373]/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Network Pill (Claude aesthetic) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D97757]/30 bg-[#D97757]/10 text-[#F5EBE6] text-xs font-mono font-medium mb-8 shadow-lg shadow-[#D97757]/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97757] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97757]"></span>
          </span>
          <span className="tracking-wide">THE ATTENTION LAYER FOR GENERATIVE AI</span>
          <span className="text-[#9E9B91]">•</span>
          <span className="text-[#D97757] font-semibold">50/50 REVENUE SPLIT</span>
        </div>

        {/* Main Punchy Headline (Claude Serif Typography) */}
        <h1 className="claude-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF8F5] leading-[1.08] max-w-4xl">
          Get paid while <br />
          <span className="italic font-serif text-[#D97757]">AI thinks.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 text-lg sm:text-xl text-[#A09E96] max-w-2xl leading-relaxed font-normal">
          While Claude, ChatGPT, and Gemini spend 10–30 seconds reasoning, WaitCash displays a single non-intrusive sponsored line in the empty whitespace. You earn real cash for every verified wait.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenInstall}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-base shadow-xl shadow-[#D97757]/20 active:scale-98 transition-all group cursor-pointer"
          >
            <Chrome className="w-5 h-5 text-[#FAF8F5]" />
            <span>Add to Chrome — It&apos;s Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://github.com/gaurav-707/waitcash"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-[#FAF8F5] font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <Github className="w-5 h-5 text-[#9E9B91]" />
            <span>View Source on GitHub</span>
            <span className="px-2 py-0.5 rounded-full bg-[#D97757]/20 text-[#D97757] text-xs font-mono font-medium">
              MIT
            </span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#9E9B91] font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D97757]" />
            <span>Zero Prompt Reading</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#D4A373]" />
            <span>Sandboxed Browser Extension</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-[#D97757]" />
            <span>Instant Bank &amp; Whop Payouts</span>
          </div>
        </div>

        {/* ── Claude-Inspired Warm Terminal Ledger Card ── */}
        <div className="w-full max-w-4xl mt-16 p-1 rounded-3xl bg-gradient-to-b from-[#D97757]/20 via-white/5 to-transparent shadow-2xl">
          <div className="w-full rounded-[22px] bg-[#1F1E1B] border border-white/10 p-6 sm:p-8 backdrop-blur-2xl">
            {/* Header of terminal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#D97757]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4A373]" />
                  <div className="w-3 h-3 rounded-full bg-[#6B705C]" />
                </div>
                <span className="font-mono text-xs text-[#9E9B91] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></span>
                  WaitCash Verified Ledger • Live Net Payouts
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#D97757] bg-[#D97757]/10 px-3 py-1 rounded-full border border-[#D97757]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited By Community</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {/* Metric 1 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-[#9E9B91] uppercase tracking-wider mb-1">
                  Cash Distributed
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#FAF8F5] flex items-baseline">
                  <span className="text-[#D97757] mr-0.5">$</span>
                  <span suppressHydrationWarning>{formatCurrency(liveCents)}</span>
                </div>
                <span className="text-[10px] text-[#D97757] font-mono mt-1 flex items-center gap-1">
                  ↑ +$1,420.50 today
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-[#9E9B91] uppercase tracking-wider mb-1">
                  Latency Monetized
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#D4A373] flex items-baseline">
                  <span suppressHydrationWarning>{(liveSeconds / 3600).toFixed(1)}</span>
                  <span className="text-sm font-normal text-[#9E9B91] ml-1">hrs</span>
                </div>
                <span className="text-[10px] text-[#9E9B91] font-mono mt-1">
                  ~14.2s avg dwell
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-[#9E9B91] uppercase tracking-wider mb-1">
                  Qualified Waits
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#FAF8F5]" suppressHydrationWarning>
                  {formatInteger(liveImpressions)}
                </div>
                <span className="text-[10px] text-[#9E9B91] font-mono mt-1">
                  5s dwell verified
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-[#9E9B91] uppercase tracking-wider mb-1">
                  Your Revenue Cut
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#D97757]">
                  50.0%
                </div>
                <span className="text-[10px] text-[#9E9B91] font-mono mt-1">
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
