'use client';

import React, { useState } from 'react';
import { Chrome, Download, Check, Copy, ExternalLink, X, FolderArchive, ArrowRight, ShieldCheck } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstallModal({ isOpen, onClose }: InstallModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyUrl = () => {
    navigator.clipboard.writeText('chrome://extensions');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#090d14] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/20">
            <Chrome className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Install WaitCash Extension
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              Version 1.0.0 • Manifest V3 • 100% Open Source
            </p>
          </div>
        </div>

        {/* Immediate Direct Download Button */}
        <a
          href="/waitcash-extension.zip"
          download="waitcash-extension.zip"
          className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition-all group mb-6"
        >
          <Download className="w-5 h-5" />
          <span>Download Extension Package (.ZIP)</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Installation Steps */}
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
            Quick 3-Step Setup (60 Seconds):
          </div>

          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              1
            </div>
            <div className="text-xs text-zinc-300">
              <strong className="text-white">Unzip the downloaded file:</strong> Extract <code className="bg-black/40 px-1.5 py-0.5 rounded text-cyan-300 font-mono">waitcash-extension.zip</code> to any folder on your computer.
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              2
            </div>
            <div className="text-xs text-zinc-300 flex-1">
              <strong className="text-white">Open Chrome Extensions:</strong> In your browser URL bar, open:
              <div className="mt-1 flex items-center gap-2">
                <code className="bg-black/40 px-2 py-1 rounded text-emerald-400 font-mono text-xs flex-1">
                  chrome://extensions
                </code>
                <button
                  onClick={copyUrl}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-zinc-200 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="mt-1 text-[11px] text-zinc-400">
                Then toggle on <strong>&quot;Developer mode&quot;</strong> in the top-right corner.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              3
            </div>
            <div className="text-xs text-zinc-300">
              <strong className="text-white">Click &quot;Load unpacked&quot;:</strong> Select the unzipped folder. WaitCash will instantly appear in your extensions bar!
            </div>
          </div>
        </div>

        {/* Chrome Web Store Submission Badge */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Chrome Web Store: In Review Process</span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
