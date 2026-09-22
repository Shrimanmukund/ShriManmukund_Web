import React from 'react';
import { AlertOctagon, PhoneCall } from 'lucide-react';

interface EmergencyCalloutProps {
  title?: string;
  message?: string;
}

export const EmergencyCallout: React.FC<EmergencyCalloutProps> = ({
  title = 'When to Seek Immediate Medical Attention',
  message = 'If you experience heavy, continuous anal bleeding, severe intractable pain, high fever with chills, or sudden inability to pass urine, do not wait for a routine OPD appointment. Contact our 24-hour emergency surgical line or visit the hospital immediately.',
}) => {
  return (
    <div className="bg-[#FEE2E2] border-2 border-[#B91C1C] p-5 sm:p-6 rounded-warm my-6 shadow-warm-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2 rounded-full bg-[#B91C1C] text-white flex-shrink-0 mt-0.5">
            <AlertOctagon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#B91C1C] mb-1">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-[#2D2A20] leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <a
          href="tel:9405404492"
          className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-[#B91C1C] text-white rounded-warm font-semibold text-xs hover:bg-[#991B1B] transition shadow-warm-sm"
        >
          <PhoneCall className="w-4 h-4" />
          <span>24h Emergency: 9405404492</span>
        </a>
      </div>
    </div>
  );
};
