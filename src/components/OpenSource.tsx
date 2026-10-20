'use client';

import React from 'react';
import { ShieldCheck, FileCode2, Check, X, ExternalLink } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97757]/10 border border-[#D97757]/30 text-[#D97757] font-mono text-xs mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-TRUST SECURITY ARCHITECTURE</span>
        </div>
        <h2 className="claude-heading text-3xl sm:text-5xl font-normal text-[#FAF8F5] tracking-tight">
          Don&apos;t trust us. <span className="italic text-[#D97757]">Read the code.</span>
        </h2>
        <p className="mt-4 text-[#A09E96] text-base sm:text-lg">
          Previous wait-state tools failed because they used closed-source binaries that modified local terminal files. WaitCash is 100% open source and strictly isolated inside Chrome&apos;s browser sandbox.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* The Flawed Legacy Approach */}
        <div className="p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-red-950/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
              <X className="w-4 h-4" />
              <span>Closed-Source Adware (The Kickbacks Mistake)</span>
            </div>
            <h3 className="claude-heading text-xl font-normal text-[#FAF8F5] mb-4">Why Previous Tools Got Removed</h3>
            <ul className="space-y-3 text-sm text-[#A09E96]">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Modified local files like <code className="text-xs bg-red-500/20 px-1 py-0.5 rounded text-red-300">~/.claude/settings.json</code></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Ran unsigned remote code updates without integrity verification</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Executed inside terminal environments where SSH keys and .env files live</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Closed-source binaries that couldn&apos;t be audited by security researchers</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-red-500/10 text-xs font-mono text-red-400/80">
            Result: Heavily criticized by security researchers and pulled from marketplaces.
          </div>
        </div>

        {/* The WaitCash Security Standard */}
        <div className="p-6 sm:p-8 rounded-3xl border border-[#D97757]/30 bg-[#1F1E1B] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-[#D97757] font-mono text-xs uppercase tracking-wider mb-2 font-bold">
              <Check className="w-4 h-4" />
              <span>The WaitCash Standard (100% Client Sandbox)</span>
            </div>
            <h3 className="claude-heading text-xl font-normal text-[#FAF8F5] mb-4">Zero Access to Private Data</h3>
            <ul className="space-y-3 text-sm text-[#FAF8F5]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#D97757] font-bold shrink-0">✓</span>
                <span><strong>Never reads prompts:</strong> Only watches DOM state (generating vs. idle)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D97757] font-bold shrink-0">✓</span>
                <span><strong>Browser sandboxed:</strong> Manifest V3 strictly blocks filesystem or terminal access</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D97757] font-bold shrink-0">✓</span>
                <span><strong>Minimal permissions:</strong> Only requests host access to claude.ai, chatgpt.com, gemini</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D97757] font-bold shrink-0">✓</span>
                <span><strong>100% Public Source:</strong> Every line is publicly visible and buildable with <code className="text-xs bg-[#D97757]/20 px-1 py-0.5 rounded text-[#D97757]">pnpm build</code></span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D97757]">
            <span>Result: Auditable, secure, and compliant.</span>
            <a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <span>Inspect on GitHub (@gaurav-707)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Code Inspector Box (Warm Basalt Theme) */}
      <div className="rounded-2xl border border-white/10 bg-[#1F1E1B] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5 font-mono text-xs text-[#9E9B91]">
          <div className="flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-[#D97757]" />
            <span>extension/manifest.json — Host Permissions Verified</span>
          </div>
          <span className="text-[10px] text-[#9E9B91]">MIT LICENSE</span>
        </div>
        <pre className="p-5 font-mono text-xs text-[#FAF8F5] overflow-x-auto leading-relaxed bg-[#181816]">
{`{
  "manifest_version": 3,
  "name": "WaitCash — Earn While AI Thinks",
  "permissions": [
    "storage"  // Stores anonymous device ID and offline balance only
  ],
  "host_permissions": [
    "https://claude.ai/*",
    "https://chatgpt.com/*",
    "https://gemini.google.com/*"
  ]
  // ZERO access to cookies, passwords, filesystem, or other websites.
}`}
        </pre>
      </div>
    </section>
  );
}
