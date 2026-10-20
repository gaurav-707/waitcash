'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface EarningsCalculatorProps {
  onOpenInstall?: () => void;
}

export default function EarningsCalculator({ onOpenInstall }: EarningsCalculatorProps) {
  const [promptsPerDay, setPromptsPerDay] = useState(50);
  const [modelType, setModelType] = useState<'reasoning' | 'standard'>('reasoning');

  // Pricing formula:
  // Standard models (GPT-4o, Sonnet standard): avg $0.007 per qualified wait
  // Reasoning models (o1, o3, Claude 3.7 Extended Think): avg $0.014 per qualified wait
  const ratePerPrompt = modelType === 'reasoning' ? 0.014 : 0.008;
  const monthlyEarnings = +(promptsPerDay * 30 * ratePerPrompt).toFixed(2);
  const yearlyEarnings = +(monthlyEarnings * 12).toFixed(2);

  // Pro subscription is $20/month ($240/yr)
  const percentOfSubscription = Math.min(100, Math.round((monthlyEarnings / 20.0) * 100));

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0d1420] to-[#070a0f] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATE YOUR REVENUE SHARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calculate Your <span className="gradient-text-emerald">Monthly Payout</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            See how much you can earn just by doing your everyday work with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Left */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-zinc-200">
                  Daily AI Prompts / Coding Queries
                </label>
                <span className="text-2xl font-bold font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                  {promptsPerDay} <span className="text-xs font-normal text-zinc-400">/ day</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={promptsPerDay}
                onChange={(e) => setPromptsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-2">
                <span>10 (Casual User)</span>
                <span>50 (Active Pro)</span>
                <span>200 (Heavy Developer)</span>
              </div>
            </div>

            {/* Model Tier Selector */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <label className="text-sm font-semibold text-zinc-200 block mb-3">
                Primary Model Workflow
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModelType('reasoning')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    modelType === 'reasoning'
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-white'
                      : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold font-mono text-emerald-400">High Dwell Models</div>
                  <div className="text-xs text-zinc-300 mt-1 font-medium">o1, o3, Claude 3.7 Thinking</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Higher CPM payouts (~$14 CPM)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setModelType('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    modelType === 'standard'
                      ? 'border-cyan-500/60 bg-cyan-500/15 text-white'
                      : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold font-mono text-cyan-400">Fast Standard Models</div>
                  <div className="text-xs text-zinc-300 mt-1 font-medium">GPT-4o, Claude Sonnet, Gemini</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Rapid frequency (~$8 CPM)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Right Card */}
          <div className="lg:col-span-5 p-7 rounded-2xl border border-emerald-500/30 bg-[#090d14] flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                Estimated Monthly Revenue
              </span>
              <div className="text-5xl font-black font-mono text-white tracking-tight flex items-baseline">
                <span className="text-emerald-400 text-3xl mr-1">$</span>
                <span>{monthlyEarnings.toFixed(2)}</span>
                <span className="text-sm font-normal text-zinc-400 ml-2 font-sans">/ month</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-1">
                ≈ ${yearlyEarnings.toFixed(2)} / year passively
              </div>

              {/* Progress Toward Subscription */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-zinc-300">Subsidizes $20 Pro AI Sub:</span>
                  <span className="text-emerald-400 font-bold">{percentOfSubscription}% Covered</span>
                </div>
                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentOfSubscription}%` }}
                  />
                </div>
                <p className="text-[11px] text-zinc-400 mt-2">
                  {percentOfSubscription >= 100
                    ? '🎉 Your AI subscriptions are completely 100% free with cash left over!'
                    : `Covers ${percentOfSubscription}% of your monthly ChatGPT Plus or Claude Pro cost.`}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenInstall}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>Install Extension & Start Earning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
