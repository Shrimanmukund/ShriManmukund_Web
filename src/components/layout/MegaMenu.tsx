'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  Activity,
  Zap,
  CheckCircle2,
  Scissors,
  Leaf,
  Sparkles,
  AlignVerticalSpaceAround,
  Heart,
  Star,
  ChevronRight,
  BookOpen,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/data/content-store';

interface MegaMenuProps {
  type: 'services' | 'knowledge';
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ type, onClose }) => {
  if (type === 'knowledge') {
    return (
      <div
        className="absolute top-full left-0 w-full bg-[#FBF7EC] border-b border-[#6B7F5F]/20 shadow-warm-xl py-8 px-6 transition-all duration-200 z-50"
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-warm border border-[#6B7F5F]/15 hover:border-[#B8894A] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-full bg-[#E5EBDD] text-[#6B7F5F]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1B3A5B]">Playbooks</h3>
                <p className="text-xs text-[#5C4F3A]">Step-by-step patient recovery guides</p>
              </div>
            </div>
            <p className="text-xs text-[#5C4F3A] mb-4">
              Exhaustive practical guides from pre-op preparation to post-operative wound care and diet.
            </p>
            <ul className="space-y-2 text-xs font-medium text-[#1B3A5B]">
              <li>
                <Link
                  href="/knowledge/playbooks/complete-recovery-after-piles-surgery/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Recovery After Piles Surgery</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/playbooks/complete-recovery-after-fistula-surgery/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Recovery After Fistula Surgery</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Ksharsutra Healing Timeline</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[#6B7F5F]/10">
              <Link
                href="/knowledge/playbooks/"
                onClick={onClose}
                className="text-xs font-semibold text-[#6B7F5F] hover:text-[#1B3A5B] flex items-center gap-1"
              >
                View all playbooks &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-warm border border-[#6B7F5F]/15 hover:border-[#B8894A] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-full bg-[#F5EDD5] text-[#B8894A]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1B3A5B]">Articles</h3>
                <p className="text-xs text-[#5C4F3A]">Clinical answers to common questions</p>
              </div>
            </div>
            <p className="text-xs text-[#5C4F3A] mb-4">
              Clear, honest medical answers written by Dr. Vipin and Dr. Swati Tongale on symptoms and treatments.
            </p>
            <ul className="space-y-2 text-xs font-medium text-[#1B3A5B]">
              <li>
                <Link
                  href="/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Piles vs Fissure vs Fistula</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/articles/why-rectal-bleeding-should-never-be-ignored/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Why Rectal Bleeding Matters</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/articles/laser-piles-surgery-what-it-is-what-it-is-not/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Laser Piles Surgery Explained</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[#6B7F5F]/10">
              <Link
                href="/knowledge/articles/"
                onClick={onClose}
                className="text-xs font-semibold text-[#B8894A] hover:text-[#1B3A5B] flex items-center gap-1"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-warm border border-[#6B7F5F]/15 hover:border-[#B8894A] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-full bg-[#E8CFC8] text-[#C08477]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1B3A5B]">Doctor Insights</h3>
                <p className="text-xs text-[#5C4F3A]">Clinical philosophy and perspectives</p>
              </div>
            </div>
            <p className="text-xs text-[#5C4F3A] mb-4">
              Perspectives on combining classical Ayurvedic Shalya Tantra with modern evidence-based surgical standards.
            </p>
            <ul className="space-y-2 text-xs font-medium text-[#1B3A5B]">
              <li>
                <Link
                  href="/knowledge/insights/why-i-chose-shalya-tantra/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Why Shalya Tantra (Dr. Vipin)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/insights/case-for-female-surgeons-in-anorectal-practice/"
                  onClick={onClose}
                  className="hover:text-[#B8894A] flex items-center justify-between"
                >
                  <span>Female Surgeons in Proctology</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A69880]" />
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[#6B7F5F]/10">
              <Link
                href="/knowledge/"
                onClick={onClose}
                className="text-xs font-semibold text-[#C08477] hover:text-[#1B3A5B] flex items-center gap-1"
              >
                Explore Knowledge Hub Library &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-0 w-full bg-[#FBF7EC] border-b border-[#6B7F5F]/20 shadow-warm-xl py-8 px-6 transition-all duration-200 z-50 max-h-[85vh] overflow-y-auto"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#6B7F5F]/15">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1B3A5B]">Clinical Specialties and Units</h2>
            <p className="text-sm text-[#5C4F3A]">
              Comprehensive anorectal, modern surgical, and classical Ayurvedic care under one roof.
            </p>
          </div>
          <Link
            href="/services/"
            onClick={onClose}
            className="text-sm font-semibold text-[#6B7F5F] hover:text-[#1B3A5B] flex items-center gap-1 bg-white px-4 py-2 rounded-warm border border-[#6B7F5F]/20"
          >
            All Services Hub &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="bg-white p-5 rounded-warm border border-[#6B7F5F]/15 hover:border-[#6B7F5F] hover:shadow-warm-md transition group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="p-2 rounded-full bg-[#E5EBDD] text-[#6B7F5F] group-hover:bg-[#1B3A5B] group-hover:text-white transition">
                  {cat.slug === 'anorectal-care' && <ShieldAlert className="w-4 h-4" />}
                  {cat.slug === 'ksharsutra' && <Activity className="w-4 h-4" />}
                  {cat.slug === 'laser-proctology' && <Zap className="w-4 h-4" />}
                  {cat.slug === 'non-surgical-piles-treatment' && <CheckCircle2 className="w-4 h-4" />}
                  {cat.slug === 'general-surgery' && <Scissors className="w-4 h-4" />}
                  {cat.slug === 'ayurveda' && <Leaf className="w-4 h-4" />}
                  {cat.slug === 'panchakarma' && <Sparkles className="w-4 h-4" />}
                  {cat.slug === 'spine-care' && <AlignVerticalSpaceAround className="w-4 h-4" />}
                  {cat.slug === 'female-care' && <Heart className="w-4 h-4" />}
                  {cat.slug === 'specialty-care' && <Star className="w-4 h-4" />}
                </span>
                <Link
                  href={`/services/${cat.slug}/`}
                  onClick={onClose}
                  className="font-serif text-base font-semibold text-[#1B3A5B] hover:text-[#B8894A] transition"
                >
                  {cat.name}
                </Link>
              </div>
              <p className="text-xs text-[#5C4F3A] mb-3 line-clamp-2">{cat.shortDescription}</p>
              <ul className="space-y-1.5 border-t border-[#6B7F5F]/10 pt-2.5">
                {cat.conditions.slice(0, 4).map((cond) => (
                  <li key={cond.slug}>
                    <Link
                      href={`/services/${cat.slug}/${cond.slug}/`}
                      onClick={onClose}
                      className="text-xs text-[#2D2A20] hover:text-[#B8894A] flex items-center justify-between transition py-0.5"
                    >
                      <span className="truncate">{cond.name}</span>
                      <ChevronRight className="w-3 h-3 text-[#A69880] flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
