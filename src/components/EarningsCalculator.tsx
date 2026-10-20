'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

interface EarningsCalculatorProps {
  onOpenInstall?: () => void;
}

export default function EarningsCalculator({ onOpenInstall }: EarningsCalculatorProps) {
  const [promptsPerDay, setPromptsPerDay] = useState(50);
  const [modelType, setModelType] = useState<'reasoning' | 'standard'>('reasoning');

  // Rate per prompt:
  // Extended reasoning models (Claude 3.7 Thinking, o1, o3): avg $0.014
  // Standard models (Sonnet standard, GPT-4o, Gemini Flash): avg $0.008
  const ratePerPrompt = modelType === 'reasoning' ? 0.014 : 0.008;
  const monthlyEarnings = +(promptsPerDay * 30 * ratePerPrompt).toFixed(2);
  const yearlyEarnings = +(monthlyEarnings * 12).toFixed(2);

  // Pro subscription is $20/month
  const percentOfSubscription = Math.min(100, Math.round((monthlyEarnings / 20.0) * 100));

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-[#1F1E1B] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97757]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97757]/10 border border-[#D97757]/30 text-[#D97757] font-mono text-xs mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATE YOUR REVENUE SHARE</span>
          </div>
          <h2 className="claude-heading text-3xl sm:text-4xl font-normal text-[#FAF8F5] tracking-tight">
            Calculate your <span className="italic text-[#D97757]">monthly payout.</span>
          </h2>
          <p className="mt-2 text-[#A09E96] text-sm sm:text-base">
            See how much you can earn just by doing your everyday work with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Left */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider */}
            <div className="p-5 rounded-2xl bg-[#181816] border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-[#FAF8F5]">
                  Daily AI Prompts / Reasoning Queries
                </label>
                <span className="text-2xl font-bold font-mono text-[#D97757] bg-[#D97757]/10 px-3 py-1 rounded-lg border border-[#D97757]/20">
                  {promptsPerDay} <span className="text-xs font-normal text-[#9E9B91]">/ day</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={promptsPerDay}
                onChange={(e) => setPromptsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-[#2B2A25] rounded-lg appearance-none cursor-pointer accent-[#D97757]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#9E9B91] mt-2">
                <span>10 (Casual User)</span>
                <span>50 (Active Pro)</span>
                <span>200 (Heavy Developer)</span>
              </div>
            </div>

            {/* Model Tier Selector */}
            <div className="p-5 rounded-2xl bg-[#181816] border border-white/10">
              <label className="text-sm font-semibold text-[#FAF8F5] block mb-3">
                Primary Model Workflow
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModelType('reasoning')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    modelType === 'reasoning'
                      ? 'border-[#D97757] bg-[#D97757]/15 text-[#FAF8F5]'
                      : 'border-white/10 bg-white/5 text-[#9E9B91] hover:text-[#FAF8F5]'
                  }`}
                >
                  <div className="text-xs font-bold font-mono text-[#D97757]">Thinking Models</div>
                  <div className="text-xs text-[#FAF8F5] mt-1 font-medium">Claude 3.7 Thinking, o1, o3</div>
                  <div className="text-[10px] text-[#9E9B91] mt-0.5">Extended latency (~$14 CPM)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setModelType('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    modelType === 'standard'
                      ? 'border-[#D4A373] bg-[#D4A373]/15 text-[#FAF8F5]'
                      : 'border-white/10 bg-white/5 text-[#9E9B91] hover:text-[#FAF8F5]'
                  }`}
                >
                  <div className="text-xs font-bold font-mono text-[#D4A373]">Standard Models</div>
                  <div className="text-xs text-[#FAF8F5] mt-1 font-medium">Sonnet standard, GPT-4o, Gemini</div>
                  <div className="text-[10px] text-[#9E9B91] mt-0.5">High volume (~$8 CPM)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Right Card */}
          <div className="lg:col-span-5 p-7 rounded-2xl border border-[#D97757]/30 bg-[#181816] flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E9B91] block mb-1">
                Estimated Monthly Revenue
              </span>
              <div className="text-5xl font-bold font-mono text-[#FAF8F5] tracking-tight flex items-baseline">
                <span className="text-[#D97757] text-3xl mr-1">$</span>
                <span>{monthlyEarnings.toFixed(2)}</span>
                <span className="text-sm font-normal text-[#9E9B91] ml-2 font-sans">/ month</span>
              </div>
              <div className="text-xs font-mono text-[#9E9B91] mt-1">
                ≈ ${yearlyEarnings.toFixed(2)} / year passively
              </div>

              {/* Progress Toward Subscription */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#FAF8F5]">Subsidizes $20 Claude / Pro Sub:</span>
                  <span className="text-[#D97757] font-bold">{percentOfSubscription}% Covered</span>
                </div>
                <div className="w-full bg-[#2B2A25] h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#D97757] to-[#D4A373] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentOfSubscription}%` }}
                  />
                </div>
                <p className="text-[11px] text-[#9E9B91] mt-2">
                  {percentOfSubscription >= 100
                    ? '🎉 Your Claude Pro or ChatGPT Plus subscription is completely 100% paid for!'
                    : `Covers ${percentOfSubscription}% of your monthly $20 Claude Pro or ChatGPT Plus subscription.`}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenInstall}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-sm transition-all shadow-lg shadow-[#D97757]/20 cursor-pointer active:scale-98"
            >
              <span>Install Extension &amp; Start Earning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
