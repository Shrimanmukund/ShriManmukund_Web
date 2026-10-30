import { MetadataRoute } from 'next';
import {
  getAllPages,
  SERVICE_CATEGORIES,
  getAllKnowledgePieces,
  getAllPatientResources,
} from '@/lib/data/content-store';
import { KNOWLEDGE_ARTICLES } from '@/lib/data/knowledge-articles';
import { createAdminClient } from '@/lib/supabase/admin';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shrimanmukundhospital.com';

function normalizeKnowledgeCluster(
  rawCluster: string = '',
  slug: string = ''
): 'playbooks' | 'articles' | 'insights' | 'patient-resources' {
  const c = (rawCluster || 'articles').toLowerCase().trim();
  const s = (slug || '').toLowerCase().trim();

  if (c === 'playbook' || c === 'playbooks') return 'playbooks';
  if (c === 'insight' || c === 'insights') return 'insights';
  if (
    c.includes('patient') ||
    c.includes('resource') ||
    [
      'your-first-visit-what-to-expect',
      'first-visit',
      'post-surgery-diet-what-to-eat-what-to-avoid',
      'pre-surgery',
      'post-surgery',
      'diet-and-lifestyle',
      'faq',
      'sitz-bath-guide',
    ].includes(s)
  ) {
    return 'patient-resources';
  }
  return 'articles';
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  const urlMap = new Map<
    string,
    {
      priority: number;
      changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
      lastModified?: string;
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
    { url: '/doctors/dr-vipin/', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/doctors/dr-vipin/appointment/', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/doctors/dr-vipin/journey/', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/doctors/dr-vipin/publications/', priority: 0.7, changeFrequency: 'monthly' },
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

  // 6. Dynamic database articles from Supabase (published only)
  try {
    const supabase = createAdminClient();
    const { data: dbArticles } = await (supabase.from('knowledge_pieces') as any)
      .select('slug, cluster, updated_at, status, is_published');

    if (dbArticles && Array.isArray(dbArticles)) {
      for (const item of dbArticles) {
        if (!item.slug) continue;
        const isPublished = item.status === 'published' && item.is_published !== false;
        const cluster = normalizeKnowledgeCluster(item.cluster, item.slug);
        const canonicalRoute =
          cluster === 'patient-resources'
            ? `/patients/${item.slug}/`
            : `/knowledge/${cluster}/${item.slug}/`;

        if (isPublished) {
          urlMap.set(canonicalRoute, {
            priority: cluster === 'patient-resources' ? 0.75 : 0.8,
            changeFrequency: 'weekly',
            lastModified: item.updated_at || currentDate,
          });
        } else {
          // If marked as draft, remove from sitemap
          urlMap.delete(canonicalRoute);
          urlMap.delete(`/knowledge/articles/${item.slug}/`);
          urlMap.delete(`/knowledge/playbooks/${item.slug}/`);
          urlMap.delete(`/knowledge/insights/${item.slug}/`);
          if (item.cluster) {
            urlMap.delete(`/knowledge/${item.cluster}/${item.slug}/`);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error fetching Supabase articles for sitemap:', err);
  }

  return Array.from(urlMap.entries()).map(([route, config]) => {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    const finalUrl = `${SITE_URL}${normalizedRoute.endsWith('/') ? normalizedRoute : `${normalizedRoute}/`}`;
    return {
      url: finalUrl,
      lastModified: config.lastModified || currentDate,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
}
