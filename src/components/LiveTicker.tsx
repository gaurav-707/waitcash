'use client';

import React from 'react';

const EVENTS = [
  { location: 'San Francisco, USA', wait: '14.2s', model: 'Claude 3.7 Sonnet', earned: '+$0.014' },
  { location: 'Berlin, DE', wait: '22.8s', model: 'ChatGPT o3-mini', earned: '+$0.019' },
  { location: 'Bengaluru, IN', wait: 'Payout', model: 'Cashed out via UPI/Bank', earned: '$34.20' },
  { location: 'London, UK', wait: '8.4s', model: 'Gemini 2.5 Flash', earned: '+$0.007' },
  { location: 'Tokyo, JP', wait: '16.5s', model: 'Claude Code Agent', earned: '+$0.016' },
  { location: 'New York, USA', wait: 'Payout', model: 'Cashed out via Whop', earned: '$58.00' },
  { location: 'Toronto, CA', wait: '11.0s', model: 'Cursor AI', earned: '+$0.011' },
  { location: 'Paris, FR', wait: '19.4s', model: 'ChatGPT-4o reasoning', earned: '+$0.015' },
  { location: 'Singapore, SG', wait: '15.1s', model: 'Claude 3.5 Sonnet', earned: '+$0.013' },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-[#1F1E1B]/90 border-y border-white/5 py-2.5 overflow-hidden backdrop-blur-md">
      <div className="flex items-center">
        {/* Label badge */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1 border-r border-white/10 shrink-0 bg-[#181816] z-10">
          <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#D97757] font-bold">
            Live Stream
          </span>
        </div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden select-none whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee items-center gap-8 text-xs font-mono">
            {EVENTS.concat(EVENTS).map((evt, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#9E9B91]">
                <span className="text-zinc-600">•</span>
                <span className="text-[#9E9B91]">{evt.location}:</span>
                <span className="text-[#FAF8F5] font-semibold">{evt.model}</span>
                <span className="text-zinc-500">({evt.wait})</span>
                <span className="text-[#D97757] font-bold bg-[#D97757]/10 px-1.5 py-0.5 rounded border border-[#D97757]/20">
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
