'use client';

import React from 'react';
import { Download, Cpu, Wallet, ShieldCheck, Zap } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Install Open-Source Extension',
    desc: 'Add WaitCash to Chrome in one click. Completely free, open source, and auditable on GitHub before you install.',
    icon: Download,
    accent: 'bg-[#D97757]/15 text-[#D97757] border border-[#D97757]/30',
  },
  {
    step: '02',
    title: 'Use AI Models As Usual',
    desc: 'Prompt Claude, ChatGPT, or Gemini. While the model spends 10–30s reasoning, a single sponsored line appears in the blank whitespace.',
    icon: Cpu,
    accent: 'bg-[#D4A373]/15 text-[#D4A373] border border-[#D4A373]/30',
  },
  {
    step: '03',
    title: 'Collect 50% Cash Split',
    desc: 'Once the 5-second dwell verification passes, revenue is credited to your balance. Withdraw in USD directly via Whop or your bank.',
    icon: Wallet,
    accent: 'bg-[#D97757]/15 text-[#D97757] border border-[#D97757]/30',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97757]/10 border border-[#D97757]/30 text-[#D97757] font-mono text-xs mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>SIMPLE 3-STEP FLOW</span>
        </div>
        <h2 className="claude-heading text-3xl sm:text-5xl font-normal text-[#FAF8F5] tracking-tight">
          How WaitCash <span className="italic text-[#D97757]">works.</span>
        </h2>
        <p className="mt-4 text-[#A09E96] text-base sm:text-lg">
          No complicated crypto tokens, no points, and zero disruption to your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative p-8 rounded-3xl border border-white/10 bg-[#1F1E1B] backdrop-blur-xl flex flex-col justify-between hover:border-[#D97757]/30 transition-all group shadow-xl"
            >
              {/* Step Number Background Watermark */}
              <span className="absolute top-4 right-6 font-mono text-6xl font-black text-white/[0.03] select-none group-hover:text-[#D97757]/10 transition-colors">
                {item.step}
              </span>

              <div>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center font-bold mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono text-[#D97757] uppercase tracking-widest font-bold mb-2">
                  Step {item.step}
                </div>
                <h3 className="claude-heading text-xl font-normal text-[#FAF8F5] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A09E96] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#9E9B91]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97757]" />
                <span>Verified Non-Intrusive</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
