'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-[#FBF7EC]">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-warm-xl border border-[#B91C1C]/30 shadow-warm-md">
        <div className="w-12 h-12 rounded-full bg-[#FEE2E2] text-[#B91C1C] flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#1B3A5B] mb-2">Something Went Wrong</h2>
        <p className="text-xs sm:text-sm text-[#5C4F3A] mb-6 leading-relaxed">
          An error occurred while loading this medical page. Please try refreshing or return to the homepage.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-4 py-2.5 bg-[#1B3A5B] text-white rounded-warm text-xs font-semibold hover:bg-[#122844] transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="px-4 py-2.5 bg-[#E5EBDD] text-[#1B3A5B] rounded-warm text-xs font-semibold hover:bg-[#6B7F5F] hover:text-white transition flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
