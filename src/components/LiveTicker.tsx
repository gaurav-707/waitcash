'use client';

import React from 'react';

const EVENTS = [
  { location: 'San Francisco, USA', wait: '14.2s', model: 'Claude 3.5 Sonnet', earned: '+$0.012' },
  { location: 'Berlin, DE', wait: '22.8s', model: 'ChatGPT o1-preview', earned: '+$0.019' },
  { location: 'Bengaluru, IN', wait: 'Payout', model: 'Cashed out via UPI/Bank', earned: '$34.20' },
  { location: 'London, UK', wait: '8.4s', model: 'Gemini 1.5 Pro', earned: '+$0.007' },
  { location: 'Tokyo, JP', wait: '16.5s', model: 'Claude Code Agent', earned: '+$0.014' },
  { location: 'New York, USA', wait: 'Payout', model: 'Cashed out via Whop', earned: '$58.00' },
  { location: 'Toronto, CA', wait: '11.0s', model: 'Cursor AI', earned: '+$0.009' },
  { location: 'Paris, FR', wait: '19.4s', model: 'ChatGPT-4o reasoning', earned: '+$0.016' },
  { location: 'Singapore, SG', wait: '15.1s', model: 'Claude 3.7 Sonnet', earned: '+$0.013' },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-[#090d14]/80 border-y border-white/5 py-2.5 overflow-hidden backdrop-blur-md">
      <div className="flex items-center">
        {/* Label badge */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1 border-r border-white/10 shrink-0 bg-[#05070a] z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
            Live Stream
          </span>
        </div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden select-none whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee items-center gap-8 text-xs font-mono">
            {EVENTS.concat(EVENTS).map((evt, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-300">
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{evt.location}:</span>
                <span className="text-zinc-200 font-semibold">{evt.model}</span>
                <span className="text-zinc-500">({evt.wait})</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {evt.earned}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
