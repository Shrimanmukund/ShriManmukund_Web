import React from 'react';
import { Metadata } from 'next';
import { AchievementsClient } from './AchievementsClient';

export const metadata: Metadata = {
  title: 'Achievements and Recognition | Shri Manmukund Hospital, Amravati',
  description:
    'Fifteen years of milestones, honours, academic work and community service at Shri Manmukund Hospital, Amravati. Advanced Proctology and Integrated Care.',
  alternates: {
    canonical: '/achievements/',
  },
  openGraph: {
    title: 'Achievements and Recognition | Shri Manmukund Hospital, Amravati',
    description:
      'Fifteen years of milestones, honours, academic work and community service at Shri Manmukund Hospital, Amravati. Advanced Proctology and Integrated Care.',
    url: 'https://shrimanmukundhospital.com/achievements/',
    siteName: 'Shri Manmukund Hospital',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/achievements/0C0A6891-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Achievements and Recognition | Shri Manmukund Hospital, Amravati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements and Recognition | Shri Manmukund Hospital, Amravati',
    description:
      'Fifteen years of milestones, honours, academic work and community service at Shri Manmukund Hospital, Amravati. Advanced Proctology and Integrated Care.',
    images: ['/images/achievements/0C0A6891-1.jpg'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Hospital',
      '@id': 'https://shrimanmukundhospital.com/#hospital',
      name: 'Shri Manmukund Hospital',
      url: 'https://shrimanmukundhospital.com/',
      telephone: '+91-8208927917',
      foundingDate: '2011',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 7, Bapatwadi, Vivekanand Colony to Radient Hospital Road',
        addressLocality: 'Amravati',
        addressRegion: 'Maharashtra',
        postalCode: '444604',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Vipin Tongale',
      worksFor: { '@id': 'https://shrimanmukundhospital.com/#hospital' },
      hasCredential: ['MS Ayurveda (Shalya Tantra)', 'PhD in Ayurveda (2024)'],
      award: [
        'Sakal Idols of Maharashtra, 2022',
        'Felicitation for research paper, 6th World Ayurveda Congress, New Delhi, 2014',
        'Award for surgical work under AYUSH',
      ],
    },
    {
      '@type': 'Physician',
      name: 'Dr. Swati Tongale',
      worksFor: { '@id': 'https://shrimanmukundhospital.com/#hospital' },
      hasCredential: ['MS Ayurveda (Shalya Tantra), 2017'],
      award: [
        'Prabhavshali Ayurvedacharya of Vidarbha, Sakal Gauravagatha 2025, Nagpur',
        'Felicitation by JCI Amravati Golden',
      ],
    },
  ],
};

export default function AchievementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <AchievementsClient />
    </>
  );
}
