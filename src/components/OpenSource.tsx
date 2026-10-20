'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileCode2, Check, X, ExternalLink, Github } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-TRUST SECURITY ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Don&apos;t Trust Us. <span className="gradient-text-emerald">Read The Code.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Previous wait-state tools failed because they used closed-source binaries that modified local terminal files. WaitCash is 100% open source and strictly isolated inside Chrome&apos;s browser sandbox.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* The Flawed Legacy Approach */}
        <div className="p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-950/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
              <X className="w-4 h-4" />
              <span>Closed-Source Adware (The Kickbacks Mistake)</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Why Previous Tools Got Removed</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
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
        <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
              <Check className="w-4 h-4" />
              <span>The WaitCash Standard (100% Client Sandbox)</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Zero Access to Private Data</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Never reads prompts:</strong> Only watches DOM state (generating vs. idle)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Browser sandboxed:</strong> Manifest V3 strictly blocks filesystem or terminal access</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Minimal permissions:</strong> Only requests host access to chatgpt.com, claude.ai, gemini</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>100% Public Source:</strong> Every line is publicly visible and buildable with <code className="text-xs bg-emerald-500/20 px-1 py-0.5 rounded text-emerald-300">pnpm build</code></span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-xs font-mono text-emerald-400">
            <span>Result: Auditable, secure, and compliant.</span>
            <a href="https://github.com/gaurav-707/waitcash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <span>Inspect on GitHub (@gaurav-707)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Code Inspector Box */}
      <div className="rounded-2xl border border-white/10 bg-[#090d14] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-emerald-400" />
            <span>extension/manifest.json — Host Permissions Verified</span>
          </div>
          <span className="text-[10px] text-zinc-400">MIT LICENSE</span>
        </div>
        <pre className="p-5 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed bg-[#05070a]">
{`{
  "manifest_version": 3,
  "name": "WaitCash — Earn While AI Thinks",
  "permissions": [
    "storage"  // Stores anonymous device ID and offline balance only
  ],
  "host_permissions": [
    "https://chatgpt.com/*",
    "https://claude.ai/*",
    "https://gemini.google.com/*"
  ]
  // ZERO access to cookies, passwords, filesystem, or other websites.
}`}
        </pre>
      </div>
    </section>
  );
}
