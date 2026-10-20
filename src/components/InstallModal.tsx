'use client';

import React, { useState } from 'react';
import { Download, Check, Copy, X, ArrowRight, ShieldCheck } from 'lucide-react';
import WaitCashLogo from '@/components/WaitCashLogo';

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
        className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#1F1E1B] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97757]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#9E9B91] hover:text-[#FAF8F5] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header (Claude Style) */}
        <div className="flex items-center gap-3 mb-6">
          <WaitCashLogo size={44} showText={false} />
          <div>
            <h3 className="claude-heading text-2xl font-normal text-[#FAF8F5] tracking-tight">
              Install WaitCash Extension
            </h3>
            <p className="text-xs text-[#9E9B91] font-mono">
              Version 1.0.0 • Manifest V3 • 100% Open Source
            </p>
          </div>
        </div>

        {/* Immediate Direct Download Button */}
        <a
          href="/waitcash-extension.zip"
          download="waitcash-extension.zip"
          className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-sm shadow-xl shadow-[#D97757]/20 active:scale-98 transition-all group mb-6"
        >
          <Download className="w-5 h-5" />
          <span>Download Extension Package (.ZIP)</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Installation Steps */}
        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#181816] p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-[#D97757] font-bold mb-1">
            Quick 3-Step Setup (60 Seconds):
          </div>

          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#2B2A25] text-[#FAF8F5] font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              1
            </div>
            <div className="text-xs text-[#FAF8F5]">
              <strong className="text-white">Unzip the downloaded file:</strong> Extract <code className="bg-black/40 px-1.5 py-0.5 rounded text-[#D97757] font-mono">waitcash-extension.zip</code> to any folder on your computer.
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#2B2A25] text-[#FAF8F5] font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              2
            </div>
            <div className="text-xs text-[#FAF8F5] flex-1">
              <strong className="text-white">Open Chrome Extensions:</strong> In your browser URL bar, open:
              <div className="mt-1 flex items-center gap-2">
                <code className="bg-black/40 px-2 py-1 rounded text-[#D4A373] font-mono text-xs flex-1">
                  chrome://extensions
                </code>
                <button
                  onClick={copyUrl}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-[#FAF8F5] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#D97757]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="mt-1 text-[11px] text-[#9E9B91]">
                Then toggle on <strong>&quot;Developer mode&quot;</strong> in the top-right corner.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#2B2A25] text-[#FAF8F5] font-mono text-xs flex items-center justify-center shrink-0 font-bold border border-white/10">
              3
            </div>
            <div className="text-xs text-[#FAF8F5]">
              <strong className="text-white">Click &quot;Load unpacked&quot;:</strong> Select the unzipped folder. WaitCash will instantly appear in your extensions bar!
            </div>
          </div>
        </div>

        {/* Chrome Web Store Submission Badge */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9E9B91]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D97757]" />
            <span>Chrome Web Store: In Review Process</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9E9B91] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
