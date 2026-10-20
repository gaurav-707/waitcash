'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Does WaitCash read my chat prompts or AI responses?',
    a: 'Absolutely not. WaitCash is strictly an attention detector. The open-source content script monitors layout states (watching for the presence of the stop button or thinking indicators) and inserts a single sponsored card into empty whitespace. It never parses, reads, stores, or transmits your prompt text or code.',
  },
  {
    q: 'Why did other tools like Kickbacks.ai face backlash?',
    a: 'Kickbacks.ai attempted to inject ads into terminal CLIs and local configuration files (~/.claude/settings.json) using closed-source binaries with unverified auto-updates. Developers rightly rejected this as adware. WaitCash solves this by remaining 100% open source, operating strictly within Chrome’s isolated browser sandbox, and never touching your local filesystem or terminal configs.',
  },
  {
    q: 'Is it legal to run this extension on ChatGPT, Claude, and Gemini?',
    a: 'Yes. Browser extensions that modify client-side DOM for the user (like Dark Reader, Grammarly, or uBlock Origin) are established as legal client-side customizations under US and international law. We adhere strictly to Google Chrome Web Store policies: every ad has clear attribution ("Sponsored via WaitCash") and is instantly dismissible.',
  },
  {
    q: 'How and when do I get paid?',
    a: 'Your balance accumulates in USD in real-time. Once your account reaches the $10 minimum threshold, you can withdraw your cash via Whop, direct bank transfer, UPI (for India), or PayPal. Payouts are settled within 2 business days.',
  },
  {
    q: 'Why do you share 50% of the revenue with users?',
    a: 'Traditional ad platforms like Google AdSense keep the vast majority of ad revenue while third parties capture the rest. We believe that since it is YOUR attention and screen time while waiting for AI, you deserve a direct 50/50 partnership with the network.',
  },
  {
    q: 'Will the extension slow down my AI generation or browser?',
    a: 'No. The sponsored line is a static text card styled purely with lightweight CSS. It makes zero heavy network calls and has zero impact on streaming speeds or token generation latency.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Everything You Need to <span className="gradient-text-emerald">Know.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#090d14]/80 backdrop-blur-md overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
