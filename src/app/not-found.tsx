import Link from 'next/link';
import WaitCashLogo from '@/components/WaitCashLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#181816] text-[#FAF8F5] flex flex-col items-center justify-center px-4 selection:bg-[#D97757] selection:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <WaitCashLogo size={42} />
        </div>
        <h1 className="claude-heading text-6xl font-normal text-[#D97757]">404</h1>
        <h2 className="text-xl font-medium text-[#FAF8F5]">Page Not Found</h2>
        <p className="text-sm text-[#A09E96]">
          The page you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D97757] hover:bg-[#C15F3C] text-[#FAF8F5] font-semibold text-xs transition-all shadow-lg shadow-[#D97757]/20"
          >
            Return to Homepage →
          </Link>
        </div>
      </div>
    </div>
  );
}
