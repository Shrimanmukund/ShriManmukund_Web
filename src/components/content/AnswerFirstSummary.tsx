import React from 'react';
import { HelpCircle, CheckCircle } from 'lucide-react';

interface AnswerFirstSummaryProps {
  summary: string;
  question?: string;
  type?: 'general' | 'procedure' | 'condition';
}

export const AnswerFirstSummary: React.FC<AnswerFirstSummaryProps> = ({
  summary,
  question,
  type = 'condition',
}) => {
  return (
    <div className="bg-[#FBF7EC] border-l-4 border-[#B8894A] p-5 sm:p-6 rounded-r-warm shadow-warm-sm my-6 border-y border-r border-[#6B7F5F]/15">
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-full bg-[#F5EDD5] text-[#B8894A] flex-shrink-0 mt-0.5">
          {question ? <HelpCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
        </div>
        <div>
          {question && (
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B3A5B] mb-2">
              {question}
            </h3>
          )}
          <p className="text-sm sm:text-base text-[#2D2A20] leading-relaxed font-normal">
            {summary}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-[#8B7355] font-semibold uppercase tracking-wider">
            <span>Direct Clinical Summary</span>
            <span>&bull;</span>
            <span>Medically Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
