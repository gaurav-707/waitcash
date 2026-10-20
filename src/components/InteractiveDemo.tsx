'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Sparkles, Clock, Terminal, MessageSquare } from 'lucide-react';
import WaitCashLogo from '@/components/WaitCashLogo';

export default function InteractiveDemo() {
  const [platform, setPlatform] = useState<'claude' | 'chatgpt' | 'terminal'>('claude');
  const [isSimulating, setIsSimulating] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [isQualified, setIsQualified] = useState(false);
  const [simulatedBalance, setSimulatedBalance] = useState(0.00);

  const startSimulation = () => {
    setIsSimulating(true);
    setSecondsRemaining(5);
    setIsQualified(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating && secondsRemaining > 0) {
      timer = setTimeout(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (isSimulating && secondsRemaining === 0) {
      setIsQualified(true);
      setSimulatedBalance((prev) => +(prev + 0.008).toFixed(3));
    }
    return () => clearTimeout(timer);
  }, [isSimulating, secondsRemaining]);

  const resetSimulation = () => {
    setIsSimulating(false);
    setSecondsRemaining(5);
    setIsQualified(false);
  };

  return (
    <section id="interactive-demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title (Claude Editorial Serif) */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97757]/10 border border-[#D97757]/30 text-[#D97757] font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE PRODUCT SIMULATION</span>
        </div>
        <h2 className="claude-heading text-3xl sm:text-5xl font-normal text-[#FAF8F5] tracking-tight">
          Experience the <span className="italic text-[#D97757]">thinking gap.</span>
        </h2>
        <p className="mt-4 text-[#A09E96] text-base sm:text-lg">
          Click &quot;Run Test Prompt&quot; below to see how WaitCash non-intrusively appears during generation delay, verifies 5 seconds of dwell time, and credits your balance.
        </p>

        {/* Platform Tabs (Claude & ChatGPT Style) */}
        <div className="mt-8 inline-flex p-1 rounded-xl bg-white/5 border border-white/10 gap-1">
          <button
            onClick={() => { setPlatform('claude'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'claude'
                ? 'bg-[#D97757] text-[#FAF8F5] shadow-md'
                : 'text-[#9E9B91] hover:text-[#FAF8F5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Claude (claude.ai)
          </button>
          <button
            onClick={() => { setPlatform('chatgpt'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'chatgpt'
                ? 'bg-[#D97757] text-[#FAF8F5] shadow-md'
                : 'text-[#9E9B91] hover:text-[#FAF8F5]'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            ChatGPT (chatgpt.com)
          </button>
          <button
            onClick={() => { setPlatform('terminal'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'terminal'
                ? 'bg-[#D97757] text-[#FAF8F5] shadow-md'
                : 'text-[#9E9B91] hover:text-[#FAF8F5]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Terminal / Claude Code
          </button>
        </div>
      </div>

      {/* Simulator Frame (Warm Claude & ChatGPT UI) */}
      <div className="w-full rounded-2xl border border-white/10 bg-[#181816] shadow-2xl overflow-hidden">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#1F1E1B]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#D97757]" />
              <span className="w-3 h-3 rounded-full bg-[#D4A373]" />
              <span className="w-3 h-3 rounded-full bg-[#6B705C]" />
            </div>
            <span className="text-xs font-mono text-[#9E9B91] ml-2">
              {platform === 'claude' ? 'https://claude.ai/chat' : platform === 'chatgpt' ? 'https://chatgpt.com' : 'bash — claude-code ~/project'}
            </span>
          </div>

          {/* Live mini balance indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#D97757]/10 border border-[#D97757]/20 text-xs font-mono">
            <span className="text-[#9E9B91]">Session Earned:</span>
            <span className="text-[#D97757] font-bold">${simulatedBalance.toFixed(3)}</span>
          </div>
        </div>

        {/* Inner Content Area */}
        <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between bg-[#181816]">
          <div className="space-y-6">
            {/* User Prompt */}
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-[70%] bg-[#262521] border border-white/10 rounded-2xl rounded-tr-sm px-5 py-3.5 text-sm text-[#FAF8F5] shadow-md">
                <span className="font-semibold text-[#D97757] block text-xs mb-1 font-mono">You:</span>
                Analyze the algorithmic performance tradeoffs between B-Trees and LSM-Trees for high-write databases.
              </div>
            </div>

            {/* Injected Sponsor Card (Appears during generation!) */}
            {isSimulating ? (
              <div className="space-y-4 animate-fade-in">
                {/* The Injected Ad Line (Warm Claude Terracotta Palette) */}
                <div className="max-w-xl mx-auto rounded-xl border border-[#D97757]/40 bg-[#21201D] p-3.5 shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 px-2 py-0.5 rounded bg-[#D97757]/20 border border-[#D97757]/40 text-[10px] font-mono text-[#D97757] font-bold uppercase">
                      Sponsored via WaitCash
                    </span>
                    <a
                      href="https://neon.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#FAF8F5] truncate hover:text-[#D97757] transition-colors"
                    >
                      <strong className="text-white">Neon Tech:</strong> Serverless Postgres with instant branching &amp; auto-suspend →
                    </a>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        isQualified
                          ? 'bg-[#D97757]/20 text-[#D97757] border border-[#D97757]/40'
                          : 'bg-[#2B2A25] text-[#9E9B91]'
                      }`}
                    >
                      {isQualified ? '✓ Earned $0.008' : `${secondsRemaining}s dwell`}
                    </span>
                  </div>
                </div>

                {/* AI Thinking Indicator (Claude Starburst icon + thinking message) */}
                <div className="flex items-center gap-3 text-xs font-mono text-[#A09E96] pl-2">
                  <WaitCashLogo size={16} showText={false} />
                  <span>
                    {isQualified
                      ? 'Claude response completed. Verified impression logged to your balance.'
                      : `Thinking... (dwell timer running: ${secondsRemaining}s remaining)`}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-[#9E9B91] text-sm font-sans">
                Press &quot;Run Test Prompt&quot; below to trigger the simulation.
              </div>
            )}
          </div>

          {/* Action Trigger Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#9E9B91]">
              <Clock className="w-4 h-4 text-[#D97757]" />
              <span>Dwell Verification: 5-Second Visible Viewport Required</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {isSimulating ? (
                <button
                  onClick={resetSimulation}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-mono text-[#FAF8F5] hover:bg-white/10 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Demo
                </button>
              ) : (
                <button
                  onClick={startSimulation}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-xs shadow-lg shadow-[#D97757]/20 active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-[#FAF8F5]" />
                  Run Test Prompt
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
