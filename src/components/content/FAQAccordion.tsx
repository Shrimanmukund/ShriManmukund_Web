'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { generateFAQSchema } from '@/lib/seo/schemas';
import type { FAQItem } from '@/types/content';

export interface FAQAccordionProps {
  faqs?: FAQItem[];
  items?: FAQItem[];
  title?: string;
  description?: string;
  hideHeader?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  items,
  title,
  description,
  hideHeader = false,
}) => {
  const faqList = faqs || items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const schema = generateFAQSchema(faqList);

  if (!faqList || faqList.length === 0) return null;

  return (
    <div className="my-6">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {!hideHeader && title && (
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7F5F] uppercase tracking-wider mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Patient Clarifications</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3A5B]">
            {title}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-[#5C4F3A] mt-1">{description}</p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {faqList.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-warm border border-[#6B7F5F]/20 overflow-hidden shadow-warm-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FBF7EC]/60 transition"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-sm sm:text-base font-semibold text-[#1B3A5B]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#A69880] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#B8894A]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C4F3A] leading-relaxed border-t border-[#6B7F5F]/10 bg-[#FBF7EC]/30">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
