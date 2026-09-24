import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AppointmentEnquiryForm } from '@/components/forms/AppointmentEnquiryForm';

export const metadata = {
  title: 'Book Consultation with Dr. Swati Tongale | Shri Manmukund Hospital',
  description: 'Schedule a private consultation with Dr. Swati Tongale (MS Ayurveda Shalya Tantra) for female proctology, piles, fissure, fistula, or Uttarbasti for infertility in Amravati.',
  alternates: {
    canonical: '/dr-swati/appointment/',
  },
};

export default function DrSwatiAppointmentPage() {
  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Dr. Swati Tongale', url: '/dr-swati/' },
            { name: 'Book Consultation', url: '/dr-swati/appointment/' },
          ]}
        />

        <div className="my-8">
          <AppointmentEnquiryForm
            initialDoctorSlug="dr-swati"
            title="Book a Consultation with Dr. Swati Tongale"
            titleLevel="h1"
          />
        </div>
      </div>
    </div>
  );
}
