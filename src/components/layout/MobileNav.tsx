'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronDown, Phone, MessageCircle, Calendar } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/data/content-store';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [knowledgeExpanded, setKnowledgeExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#122844]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-[#FBF7EC] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-[#6B7F5F]/15 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/images/logo/logo.jpg"
                alt="Shri Manmukund Hospital"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-serif font-bold text-sm text-[#1B3A5B] leading-tight">
                Shri Manmukund Hospital
              </h2>
              <span className="text-[10px] text-[#5C4F3A]">Amravati, Maharashtra</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C4F3A] hover:text-[#1B3A5B] rounded-full hover:bg-[#E5EBDD] transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="p-5 flex-1 space-y-4">
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Home
            </Link>

            <Link
              href="/about/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              About Hospital
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
              >
                <span>Services & Treatments</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#A69880] transition-transform ${
                    servicesExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-white/70 rounded-warm my-1 border border-[#6B7F5F]/15">
                  <Link
                    href="/services/"
                    onClick={onClose}
                    className="block text-xs font-bold text-[#6B7F5F] hover:text-[#1B3A5B] py-1"
                  >
                    View All Services Hub &rarr;
                  </Link>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/services/${cat.slug}/`}
                      onClick={onClose}
                      className="block text-xs text-[#2D2A20] hover:text-[#B8894A] py-1 border-t border-[#6B7F5F]/10"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Doctors */}
            <Link
              href="/dr-vipin/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Dr. Vipin Tongale
            </Link>

            <Link
              href="/dr-swati/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Dr. Swati Tongale
            </Link>

            {/* Knowledge Hub */}
            <div>
              <button
                onClick={() => setKnowledgeExpanded(!knowledgeExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
              >
                <span>Knowledge Hub</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#A69880] transition-transform ${
                    knowledgeExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {knowledgeExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-white/70 rounded-warm my-1 border border-[#6B7F5F]/15">
                  <Link
                    href="/knowledge/"
                    onClick={onClose}
                    className="block text-xs font-bold text-[#6B7F5F] hover:text-[#1B3A5B] py-1"
                  >
                    All Knowledge Hub Library &rarr;
                  </Link>
                  <Link
                    href="/knowledge/playbooks/"
                    onClick={onClose}
                    className="block text-xs text-[#2D2A20] hover:text-[#B8894A] py-1 border-t border-[#6B7F5F]/10"
                  >
                    Recovery Playbooks
                  </Link>
                  <Link
                    href="/knowledge/articles/"
                    onClick={onClose}
                    className="block text-xs text-[#2D2A20] hover:text-[#B8894A] py-1 border-t border-[#6B7F5F]/10"
                  >
                    Clinical Articles
                  </Link>
                  <Link
                    href="/knowledge/insights/"
                    onClick={onClose}
                    className="block text-xs text-[#2D2A20] hover:text-[#B8894A] py-1 border-t border-[#6B7F5F]/10"
                  >
                    Doctor Insights
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/patients/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Patient Resources
            </Link>

            <Link
              href="/testimonials/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Testimonials
            </Link>

            <Link
              href="/achievements/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Achievements
            </Link>

            <Link
              href="/contact/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-warm text-base font-medium text-[#1B3A5B] hover:bg-[#E5EBDD] transition"
            >
              Contact & Location
            </Link>
          </nav>
        </div>

        {/* Action Buttons in Drawer */}
        <div className="p-4 border-t border-[#6B7F5F]/15 bg-white space-y-2.5">
          <Link
            href="/contact/#book"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#1B3A5B] text-white rounded-warm font-semibold text-sm hover:bg-[#122844] transition shadow-warm-md"
          >
            <Calendar className="w-4 h-4 text-[#C89968]" />
            <span>Book Consultation</span>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:8208927917"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-[#E5EBDD] text-[#1B3A5B] rounded-warm font-medium text-xs hover:bg-[#6B7F5F] hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call OPD</span>
            </a>
            <a
              href="https://wa.me/918208927917"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-[#E0EEFA] text-[#1D6EAE] rounded-warm font-medium text-xs hover:bg-[#1D6EAE] hover:text-white transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
