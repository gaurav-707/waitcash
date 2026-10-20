'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Sparkles, Clock, DollarSign, Terminal, MessageSquare } from 'lucide-react';

export default function InteractiveDemo() {
  const [platform, setPlatform] = useState<'chatgpt' | 'claude' | 'terminal'>('chatgpt');
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
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE PRODUCT SIMULATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Experience The <span className="gradient-text-emerald">Thinking Gap.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Click &quot;Run Test Prompt&quot; below to experience how WaitCash non-intrusively appears during generation delay, verifies 5 seconds of dwell time, and credits your balance.
        </p>

        {/* Platform Tabs */}
        <div className="mt-8 inline-flex p-1 rounded-xl bg-white/5 border border-white/10 gap-1">
          <button
            onClick={() => { setPlatform('chatgpt'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'chatgpt'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            ChatGPT (chatgpt.com)
          </button>
          <button
            onClick={() => { setPlatform('claude'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'claude'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Claude (claude.ai)
          </button>
          <button
            onClick={() => { setPlatform('terminal'); resetSimulation(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              platform === 'terminal'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Terminal / Claude Code
          </button>
        </div>
      </div>

      {/* Simulator Frame */}
      <div className="w-full rounded-2xl border border-white/10 bg-[#070a0f] shadow-2xl overflow-hidden">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#090d14]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs font-mono text-zinc-500 ml-2">
              {platform === 'chatgpt' ? 'https://chatgpt.com' : platform === 'claude' ? 'https://claude.ai' : 'bash — ~/project/src'}
            </span>
          </div>

          {/* Live mini balance indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono">
            <span className="text-zinc-400">Your Session Earned:</span>
            <span className="text-emerald-400 font-bold">${simulatedBalance.toFixed(3)}</span>
          </div>
        </div>

        {/* Inner Content Area */}
        <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* User Prompt */}
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-[70%] bg-zinc-800/80 border border-zinc-700/50 rounded-2xl rounded-tr-sm px-5 py-3.5 text-sm text-zinc-100 shadow-md">
                <span className="font-semibold text-emerald-400 block text-xs mb-1 font-mono">You:</span>
                Refactor the authentication middleware to support JWT refresh token rotation with Redis blacklist.
              </div>
            </div>

            {/* Injected Sponsor Card (Appears during generation!) */}
            {isSimulating ? (
              <div className="space-y-4 animate-fade-in">
                {/* The Injected Ad Line */}
                <div className="max-w-xl mx-auto rounded-xl border border-cyan-500/30 bg-[#090d14]/90 p-3.5 shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 px-2 py-0.5 rounded bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/40 text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      Sponsored via WaitCash
                    </span>
                    <a
                      href="https://neon.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-200 truncate hover:text-cyan-400 transition-colors"
                    >
                      <strong className="text-white">Neon Tech:</strong> Serverless Postgres with instant branching & auto-suspend →
                    </a>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        isQualified
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {isQualified ? '✓ Earned $0.008' : `${secondsRemaining}s dwell`}
                    </span>
                  </div>
                </div>

                {/* AI Thinking Indicator */}
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pl-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>
                    {isQualified
                      ? 'AI response generated. Impression successfully credited to your ledger!'
                      : `Thinking... (dwell timer running: ${secondsRemaining}s left)`}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-zinc-400 text-sm">
                Press &quot;Run Test Prompt&quot; below to trigger the simulation.
              </div>
            )}
          </div>

          {/* Action Trigger Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Dwell Verification: 5-Second Visible Viewport Required</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {isSimulating ? (
                <button
                  onClick={resetSimulation}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Demo
                </button>
              ) : (
                <button
                  onClick={startSimulation}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
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
