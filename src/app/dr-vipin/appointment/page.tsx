import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AppointmentEnquiryForm } from '@/components/forms/AppointmentEnquiryForm';

export const metadata = {
  title: 'Book Consultation with Dr. Vipin Tongale | Shri Manmukund Hospital',
  description: 'Schedule an in-person consultation with Dr. Vipin Tongale (MS Ayurveda Shalya Tantra, PhD) for piles, fissure, fistula, Ksharsutra, laser, or general surgery in Amravati.',
  alternates: {
    canonical: '/dr-vipin/appointment/',
  },
};

export default function DrVipinAppointmentPage() {
  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Dr. Vipin Tongale', url: '/dr-vipin/' },
            { name: 'Book Consultation', url: '/dr-vipin/appointment/' },
          ]}
        />

        <div className="my-8">
          <AppointmentEnquiryForm
            initialDoctorSlug="dr-vipin"
            title="Book Consultation with Dr. Vipin Tongale"
            titleLevel="h1"
          />
        </div>
      </div>
    </div>
  );
}
