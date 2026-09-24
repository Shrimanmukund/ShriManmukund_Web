import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Clock, Activity, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import type { DoctorProfile } from '@/types/content';

interface DoctorCardProps {
  doctor: DoctorProfile;
  variant?: 'featured' | 'compact' | 'horizontal';
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, variant = 'featured' }) => {
  return (
    <div className="bg-white rounded-warm-lg border border-[#6B7F5F]/20 overflow-hidden shadow-warm-md hover:shadow-warm-xl transition duration-300 flex flex-col">
      {/* Top Banner / Avatar Header */}
      <div className="p-6 bg-gradient-to-br from-[#1B3A5B] to-[#122844] text-[#F7F3EB] relative">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B8894A]/30 text-[#E4CFA5] text-[11px] font-semibold tracking-wide uppercase mb-2">
              <UserCheck className="w-3 h-3" />
              <span>{doctor.designations[0]}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {doctor.honorific} {doctor.fullName}
            </h3>
            <p className="text-xs text-[#C89968] font-medium mt-0.5">
              {doctor.credentials.join(' • ')}
            </p>
          </div>

          {/* Doctor Avatar Frame */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#B8894A] bg-[#FBF7EC] relative overflow-hidden shadow-md flex-shrink-0">
            <Image
              src={doctor.portraitUrl || (doctor.slug === 'dr-vipin' ? '/images/doctors/dr-vipin-tongale.jpg' : '/images/doctors/dr-swati-tongale.jpg')}
              alt={`${doctor.honorific} ${doctor.fullName}`}
              fill
              sizes="(max-width: 640px) 120px, 160px"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

        {/* Experience Metrics Badge Strip */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C89968]" />
            <span><strong>{doctor.yearsOfExperience}+</strong> Years Practice</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#C89968]" />
            <span><strong>{doctor.proceduresPerformed.toLocaleString()}+</strong> Surgeries</span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs sm:text-sm text-[#2D2A20] leading-relaxed mb-4">
            {doctor.shortBio}
          </p>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold text-[#8B7355] uppercase tracking-wider">
              Primary Clinical Focus
            </h4>
            <ul className="space-y-1.5 text-xs text-[#2D2A20]">
              {doctor.specialties.slice(0, 4).map((spec, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B7F5F] flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#6B7F5F]/15 flex items-center justify-between gap-3">
          <Link
            href={`/${doctor.slug}/`}
            className="text-xs font-bold text-[#1B3A5B] hover:text-[#B8894A] flex items-center gap-1 transition"
          >
            <span>View Full Profile</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/${doctor.slug}/appointment/`}
            className="px-3.5 py-2 bg-[#E5EBDD] text-[#1B3A5B] hover:bg-[#1B3A5B] hover:text-white rounded-warm text-xs font-semibold transition shadow-warm-sm"
          >
            Book with Doctor
          </Link>
        </div>
      </div>
    </div>
  );
};
