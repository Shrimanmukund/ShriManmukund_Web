import React from 'react';
import { KnowledgeHubClient } from '@/components/knowledge/KnowledgeHubClient';

export const metadata = {
  title: 'Knowledge Hub — Shri Manmukund Hospital, Amravati',
  description:
    'Because good decisions come from understanding, not from being sold. Playbooks, articles, and honest insights on proctology, Ayurveda, and integrated surgical care.',
  alternates: {
    canonical: '/knowledge/',
  },
};

export default function KnowledgeHubPage() {
  return <KnowledgeHubClient />;
}
