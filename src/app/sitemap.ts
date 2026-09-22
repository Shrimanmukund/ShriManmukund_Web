import { MetadataRoute } from 'next';
import { getAllPages } from '@/lib/data/content-store';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shrimanmukundhospital.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const currentDate = new Date().toISOString();

  // Map all 93 pages to sitemap format
  return pages.map((page) => {
    const isHome = page.url === '/';
    const isServiceOrDoctor =
      page.url.startsWith('/services/') ||
      page.url.startsWith('/dr-vipin/') ||
      page.url.startsWith('/dr-swati/');
    const isKnowledge = page.url.startsWith('/knowledge/');

    let priority = 0.7;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';

    if (isHome) {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (isServiceOrDoctor) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (isKnowledge) {
      priority = 0.8;
      changeFrequency = 'monthly';
    } else if (page.url.startsWith('/legal/')) {
      priority = 0.3;
      changeFrequency = 'yearly';
    }

    const cleanUrl = page.url.startsWith('/') ? page.url : `/${page.url}`;
    const url = `${SITE_URL}${cleanUrl.endsWith('/') ? cleanUrl : `${cleanUrl}/`}`;

    return {
      url,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
