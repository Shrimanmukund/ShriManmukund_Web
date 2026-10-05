import React from 'react';
import { KnowledgeHubClient } from '@/components/knowledge/KnowledgeHubClient';

export const metadata = {
  title: 'Knowledge Hub',
  description:
    'Because good decisions come from understanding, not from being sold. Playbooks, articles, and honest insights on proctology, Ayurveda, and integrated surgical care.',
  authors: [{ name: 'Shri Manmukund Hospital' }],
  alternates: {
    canonical: '/knowledge/',
  },
  openGraph: {
    title: 'Knowledge Hub | Shri Manmukund Hospital',
    description:
      'Playbooks, articles, and honest clinical insights on proctology, Ayurveda, and integrated surgical care by Dr. Vipin & Dr. Swati Tongale.',
    url: 'https://shrimanmukundhospital.com/knowledge/',
    siteName: 'Shri Manmukund Hospital',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function KnowledgeHubPage() {
  return <KnowledgeHubClient />;
}
