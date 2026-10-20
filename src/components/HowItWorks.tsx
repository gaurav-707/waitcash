'use client';

import React from 'react';
import { Download, Cpu, Wallet, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Install Open-Source Extension',
    desc: 'Add WaitCash to Chrome in one click. Completely free, open source, and auditable on GitHub before you install.',
    icon: Download,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Use AI Models As Usual',
    desc: 'Prompt ChatGPT, Claude, or Gemini. While the model spends 10–30s thinking, a single sponsored line appears in the blank whitespace.',
    icon: Cpu,
    accent: 'from-cyan-500 to-emerald-500',
  },
  {
    step: '03',
    title: 'Collect 50% Cash Split',
    desc: 'Once the 5-second dwell verification passes, revenue is credited to your balance. Withdraw in USD directly via Whop or your bank.',
    icon: Wallet,
    accent: 'from-emerald-500 to-green-400',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>SIMPLE 3-STEP FLOW</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How WaitCash <span className="gradient-text-cyan">Works.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          No complicated crypto tokens, no points, and zero disruption to your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              {/* Step Number Background Watermark */}
              <span className="absolute top-4 right-6 font-mono text-6xl font-black text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">
                {item.step}
              </span>

              <div>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-black font-bold mb-6 shadow-lg shadow-cyan-500/10`}>
                  <Icon className="w-6 h-6 text-black" />
                </div>

                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Non-Intrusive</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
