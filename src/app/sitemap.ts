import { MetadataRoute } from 'next';
import {
  getAllPages,
  SERVICE_CATEGORIES,
  getAllKnowledgePieces,
  getAllPatientResources,
} from '@/lib/data/content-store';
import { KNOWLEDGE_ARTICLES } from '@/lib/data/knowledge-articles';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shrimanmukundhospital.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  const urlMap = new Map<
    string,
    {
      priority: number;
      changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    }
  >();

  // 1. Core top-level pages
  const corePages: Array<{
    url: string;
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }> = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/about/', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contact/', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/knowledge/', priority: 0.9, changeFrequency: 'daily' },
    { url: '/knowledge/playbooks/', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/knowledge/articles/', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/knowledge/insights/', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/patients/', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/testimonials/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/achievements/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/doctors/', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/dr-vipin/', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/dr-vipin/appointment/', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/dr-vipin/journey/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/dr-vipin/publications/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/dr-swati/', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/dr-swati/appointment/', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/dr-swati/journey/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/dr-swati/publications/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/legal/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/legal/terms-of-use/', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/legal/medical-disclaimer/', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/legal/cookie-policy/', priority: 0.3, changeFrequency: 'yearly' },
  ];

  for (const cp of corePages) {
    urlMap.set(cp.url, { priority: cp.priority, changeFrequency: cp.changeFrequency });
  }

  // 2. Service categories & conditions
  for (const cat of SERVICE_CATEGORIES) {
    urlMap.set(`/services/${cat.slug}/`, { priority: 0.9, changeFrequency: 'weekly' });
    for (const cond of cat.conditions) {
      urlMap.set(`/services/${cat.slug}/${cond.slug}/`, {
        priority: 0.85,
        changeFrequency: 'weekly',
      });
    }
  }

  // 3. Knowledge pieces (content-store & knowledge-articles)
  for (const kp of getAllKnowledgePieces()) {
    urlMap.set(`/knowledge/${kp.cluster}/${kp.slug}/`, {
      priority: 0.8,
      changeFrequency: 'monthly',
    });
  }
  for (const a of KNOWLEDGE_ARTICLES) {
    if (a.category !== 'patient-resources') {
      urlMap.set(`/knowledge/${a.category}/${a.slug}/`, {
        priority: 0.8,
        changeFrequency: 'monthly',
      });
    }
  }

  // 4. Patient resources
  for (const pr of getAllPatientResources()) {
    urlMap.set(`/patients/${pr.slug}/`, { priority: 0.75, changeFrequency: 'monthly' });
  }

  // 5. Seeded content pages
  for (const p of getAllPages()) {
    const rawUrl = p.url.startsWith('/') ? p.url : `/${p.url}`;
    const cleanUrl = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`;
    if (!urlMap.has(cleanUrl)) {
      urlMap.set(cleanUrl, { priority: 0.7, changeFrequency: 'monthly' });
    }
  }

  return Array.from(urlMap.entries()).map(([route, config]) => {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    const finalUrl = `${SITE_URL}${normalizedRoute.endsWith('/') ? normalizedRoute : `${normalizedRoute}/`}`;
    return {
      url: finalUrl,
      lastModified: currentDate,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
}
