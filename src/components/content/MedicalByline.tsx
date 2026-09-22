import React from 'react';
import Link from 'next/link';
import { UserCheck, ShieldCheck, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface MedicalBylineProps {
  authorSlug: 'dr-vipin' | 'dr-swati';
  authorName?: string;
  reviewerSlug?: 'dr-vipin' | 'dr-swati';
  reviewerName?: string;
  lastUpdatedDate: string;
  readTimeMins?: number;
}

export const MedicalByline: React.FC<MedicalBylineProps> = ({
  authorSlug,
  authorName = authorSlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
  reviewerSlug,
  reviewerName = reviewerSlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
  lastUpdatedDate,
  readTimeMins,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 py-3 px-4 bg-[#FBF7EC] border border-[#6B7F5F]/20 rounded-warm text-xs text-[#5C4F3A] my-4">
      {/* Author */}
      <div className="flex items-center gap-1.5">
        <UserCheck className="w-3.5 h-3.5 text-[#6B7F5F]" />
        <span>Written by:</span>
        <Link href={`/${authorSlug}/`} className="font-semibold text-[#1B3A5B] hover:underline">
          {authorName}
        </Link>
      </div>

      {/* Reviewer */}
      {reviewerSlug && (
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B8894A]" />
          <span>Medically reviewed by:</span>
          <Link href={`/${reviewerSlug}/`} className="font-semibold text-[#1B3A5B] hover:underline">
            {reviewerName}
          </Link>
        </div>
      )}

      {/* Last Updated */}
      <div className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-[#A69880]" />
        <span>Last updated:</span>
        <span className="font-medium text-[#2D2A20]">{formatDate(lastUpdatedDate)}</span>
      </div>

      {/* Estimated Read Time */}
      {readTimeMins && (
        <div className="text-[11px] text-[#8B7355] font-semibold bg-[#E5EBDD] px-2 py-0.5 rounded-full ml-auto">
          {readTimeMins} min read
        </div>
      )}
    </div>
  );
};
