'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, X, ChevronRight, Stethoscope } from 'lucide-react';
import { ConsultantDoctor } from '@/types/content';
import { CONSULTANT_DOCTORS } from '@/lib/data/content-store';

export const ConsultantTeamSection: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<ConsultantDoctor | null>(null);

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDoctor(null);
      }
    };

    if (selectedDoctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDoctor]);

  return (
    <section className="consultant-team-section py-16 px-4 sm:px-6 lg:px-12 bg-[#FBF7EC] relative overflow-hidden" id="consultants">
      {/* Decorative subtle background elements */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <div className="section-tag inline-flex items-center justify-center gap-2 mx-auto">
            <span>Specialist Clinical Faculty</span>
          </div>
          <div className="text-sm font-semibold tracking-wider uppercase text-[#B8894A] font-devanagari mb-2">
            आमचे सल्लागार तज्ज्ञ वैद्य
          </div>
          <h2 className="section-title text-center text-3xl sm:text-4xl text-[#1B3A5B] font-serif font-bold">
            Our Consultant <em>Medical Team</em>
          </h2>
          <p className="section-lede text-center mx-auto mt-3 max-w-2xl text-[#5C4F3A]">
            Distinguished specialist surgeons, physicians, and anesthesiologists providing expert collaborative care across clinical disciplines at Shri Manmukund Hospital.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
          {CONSULTANT_DOCTORS.map((doc) => (
            <article
              key={doc.id}
              onClick={() => setSelectedDoctor(doc)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDoctor(doc);
                }
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View profile and contact info for ${doc.name}`}
              className="bg-white rounded-2xl p-6 border border-[#6B7F5F]/15 shadow-[0_4px_20px_rgba(107,127,95,0.06)] hover:shadow-[0_12px_32px_rgba(107,127,95,0.15)] hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#6B7F5F]"
            >
              {/* Circular Doctor Portrait */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-[#E5EBDD] group-hover:border-[#3E5437] transition-all duration-300 p-1 bg-white shadow-md mb-4 shrink-0 relative">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Doctor Name */}
              <h3 className="font-serif text-lg font-bold text-[#1B3A5B] group-hover:text-[#3E5437] transition-colors leading-tight mb-1.5 min-h-[48px] flex items-center justify-center">
                {doc.name}
              </h3>

              {/* Qualification Pill */}
              <div className="text-[11px] font-semibold tracking-wide text-[#3E5437] bg-[#E5EBDD] px-2.5 py-0.5 rounded-full mb-3 inline-block max-w-full truncate">
                {doc.qualification}
              </div>

              {/* Specialty Summary */}
              <p className="text-xs text-[#5C4F3A] line-clamp-3 leading-relaxed mb-4 flex-1">
                {doc.specialty}
              </p>

              {/* Interactive CTA Badge */}
              <div className="mt-auto w-full pt-3 border-t border-[#6B7F5F]/10 flex items-center justify-center gap-1 text-xs font-semibold text-[#1B3A5B] group-hover:text-[#3E5437]">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Popup */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#122844]/65 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedDoctor(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doctor-name"
        >
          <div
            className="bg-[#FBF7EC] rounded-3xl border border-[#6B7F5F]/20 shadow-2xl max-w-lg w-full overflow-hidden relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-[#1B3A5B] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#C89968]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E4CFA5]">Consultant Profile</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                {/* Image */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#6B7F5F]/30 shadow-md shrink-0 relative bg-white">
                  <Image
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    fill
                    sizes="128px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Main Info */}
                <div className="text-center sm:text-left flex-1">
                  <h3 id="modal-doctor-name" className="font-serif text-2xl font-bold text-[#1B3A5B] leading-snug">
                    {selectedDoctor.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#3E5437] bg-[#E5EBDD] px-3 py-1 rounded-full inline-block mt-2 mb-2">
                    {selectedDoctor.qualification}
                  </div>
                  <p className="text-xs font-medium text-[#8B7355]">
                    {selectedDoctor.role}
                  </p>
                </div>
              </div>

              {/* Clinical Scope / Description */}
              <div className="bg-white rounded-xl p-4 border border-[#6B7F5F]/15 mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B3A5B] mb-1.5 flex items-center gap-1.5">
                  <span>Specialty &amp; Clinical Scope</span>
                </div>
                <p className="text-sm text-[#2D2A20] leading-relaxed">
                  {selectedDoctor.specialty}
                </p>

                {/* Tags */}
                {selectedDoctor.tags && selectedDoctor.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                    {selectedDoctor.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium bg-[#F7F3EB] text-[#5C4F3A] px-2.5 py-0.5 rounded-md border border-[#6B7F5F]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Phone / Contact Actions */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${selectedDoctor.phone}`}
                  className="w-full py-3 px-4 bg-[#1B3A5B] hover:bg-[#122844] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#C89968]" />
                  <span>Call {selectedDoctor.displayPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${selectedDoctor.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedDoctor.name}, I would like to enquire about consultation at Shri Manmukund Hospital.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#E5EBDD] hover:bg-[#6B7F5F] text-[#1B3A5B] hover:text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="text-center mt-4 text-[11px] text-[#8B7355]">
                Consultations available at Shri Manmukund Hospital, Amravati by prior schedule.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
