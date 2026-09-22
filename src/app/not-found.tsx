import React from 'react';
import Link from 'next/link';
import { Home, Phone, Search, ChevronRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-[#FBF7EC]">
      <div className="max-w-lg w-full text-center bg-white p-8 sm:p-10 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-md">
        <span className="font-serif text-6xl font-bold text-[#1B3A5B] block mb-2">404</span>
        <h1 className="font-serif text-2xl font-bold text-[#122844] mb-3">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-[#5C4F3A] mb-8 leading-relaxed">
          The clinical page or guide you are looking for might have been moved or updated. Please explore our main sections below or contact our reception.
        </p>

        <div className="space-y-2 mb-8 text-left text-xs font-semibold text-[#1B3A5B]">
          <Link
            href="/services/"
            className="p-3 bg-[#FBF7EC] rounded-warm flex items-center justify-between hover:bg-[#E5EBDD] transition"
          >
            <span>All Clinical Services</span>
            <ChevronRight className="w-4 h-4 text-[#A69880]" />
          </Link>
          <Link
            href="/dr-vipin/"
            className="p-3 bg-[#FBF7EC] rounded-warm flex items-center justify-between hover:bg-[#E5EBDD] transition"
          >
            <span>Dr. Vipin Tongale Profile</span>
            <ChevronRight className="w-4 h-4 text-[#A69880]" />
          </Link>
          <Link
            href="/dr-swati/"
            className="p-3 bg-[#FBF7EC] rounded-warm flex items-center justify-between hover:bg-[#E5EBDD] transition"
          >
            <span>Dr. Swati Tongale Profile</span>
            <ChevronRight className="w-4 h-4 text-[#A69880]" />
          </Link>
          <Link
            href="/knowledge/"
            className="p-3 bg-[#FBF7EC] rounded-warm flex items-center justify-between hover:bg-[#E5EBDD] transition"
          >
            <span>Knowledge Hub & Recovery Playbooks</span>
            <ChevronRight className="w-4 h-4 text-[#A69880]" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 bg-[#1B3A5B] text-white rounded-warm text-xs font-semibold hover:bg-[#122844] transition flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href="tel:8208927917"
            className="px-5 py-2.5 bg-[#E5EBDD] text-[#1B3A5B] rounded-warm text-xs font-semibold hover:bg-[#6B7F5F] hover:text-white transition flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </div>
  );
}
