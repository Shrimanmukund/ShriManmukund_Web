'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#6B7F5F]/20 p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:8208927917"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#E5EBDD] text-[#1B3A5B] font-semibold text-xs rounded-warm hover:bg-[#6B7F5F] hover:text-white transition active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 text-[#6B7F5F]" />
          <span>Call Hospital</span>
        </a>
        <Link
          href="/contact/#book"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1B3A5B] text-white font-semibold text-xs rounded-warm hover:bg-[#122844] transition shadow-warm-sm active:scale-98"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C89968]" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
};
