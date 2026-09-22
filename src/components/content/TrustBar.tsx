import React from 'react';
import { Calendar, Award, Users, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      number: '2011',
      label: 'Serving Vidarbha Since',
      subtext: '15+ Years Continuous Practice',
    },
    {
      icon: Award,
      number: '16,000+',
      label: 'Surgical Procedures',
      subtext: 'Proctology & General Surgery',
    },
    {
      icon: Users,
      number: '2 MS',
      label: 'Ayurvedic Specialists',
      subtext: 'Fellowship-Level Expertise',
    },
    {
      icon: Clock,
      number: '24 Hours',
      label: 'Hospital & OT Care',
      subtext: 'Emergency On-Call Support',
    },
  ];

  return (
    <div className="w-full bg-[#1B3A5B] text-[#F7F3EB] py-8 sm:py-10 border-y-2 border-[#B8894A]/40 shadow-warm-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start text-center sm:text-left border-r last:border-r-0 border-white/10 pr-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#C89968]" />
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {stat.number}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#F7F3EB] leading-tight">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#A8B99E] mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
