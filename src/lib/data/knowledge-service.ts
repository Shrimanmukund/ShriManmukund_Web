import { createAdminClient } from '@/lib/supabase/admin';
import { KNOWLEDGE_ARTICLES, type KnowledgeArticle } from '@/lib/data/knowledge-articles';

export function mapSupabaseToKnowledgeArticle(row: any): KnowledgeArticle {
  const rawCluster = (row.cluster || 'article').toLowerCase().trim();
  const slug = (row.slug || '').toLowerCase().trim();
  let category: 'playbooks' | 'articles' | 'insights' | 'patient-resources' = 'articles';
  let categoryLabel: 'Playbook' | 'Article' | 'Insight' | 'Patient Guide' = 'Article';
  let typeClass = '';

  if (rawCluster === 'playbook' || rawCluster === 'playbooks') {
    category = 'playbooks';
    categoryLabel = 'Playbook';
    typeClass = 'article-card-type--playbook';
  } else if (rawCluster === 'insights' || rawCluster === 'insight') {
    category = 'insights';
    categoryLabel = 'Insight';
    typeClass = 'article-card-type--insight';
  } else if (
    rawCluster.includes('patient') ||
    rawCluster.includes('resource') ||
    slug === 'your-first-visit-what-to-expect' ||
    slug === 'first-visit' ||
    slug === 'post-surgery-diet-what-to-eat-what-to-avoid' ||
    slug === 'pre-surgery' ||
    slug === 'post-surgery' ||
    slug === 'diet-and-lifestyle' ||
    slug === 'faq' ||
    slug === 'sitz-bath-guide'
  ) {
    category = 'patient-resources';
    categoryLabel = 'Patient Guide';
    typeClass = '';
  }

  const isSwati =
    row.author?.toLowerCase().includes('swati') ||
    row.author_slug === 'dr-swati' ||
    row.author === 'Dr. Swati';

  const author = isSwati ? 'Dr. Swati' : 'Dr. Vipin';
  const authorFull = isSwati ? 'Dr. Swati Tongale' : 'Dr. Vipin Tongale';
  const authorAvatar = isSwati ? 'S' : 'V';
  const authorAvatarClass = isSwati ? 'article-card-author-avatar--swati' : '';

  const readTimeStr =
    row.read_time ||
    (row.estimated_read_time_mins ? `${row.estimated_read_time_mins} min` : '5 min');
  const readTimeMins = parseInt(readTimeStr.replace(/[^0-9]/g, ''), 10) || 5;

  const date =
    row.date_published ||
    row.published_date ||
    row.date ||
    new Date().toISOString().split('T')[0];
  const href =
    category === 'patient-resources'
      ? `/patients/${row.slug}/`
      : `/knowledge/${category}/${row.slug}/`;

  let devanagari = 'ज्ञान संग्रह';
  if (category === 'playbooks' || row.slug.includes('ksharsutra')) devanagari = 'क्षारसूत्र';
  else if (row.slug.includes('piles')) devanagari = 'अर्श';
  else if (row.slug.includes('fissure')) devanagari = 'परिकर्तिका';
  else if (row.slug.includes('fistula')) devanagari = 'भगन्दर';
  else if (row.slug.includes('garbh') || isSwati) devanagari = 'स्त्री रोग';

  return {
    id: String(row.id || `kb-${row.slug}`),
    slug: row.slug,
    title: row.title,
    category,
    categoryLabel,
    typeClass,
    topic:
      row.category_tag ||
      (Array.isArray(row.categories) && row.categories[0]) ||
      row.topic ||
      'Clinical Care',
    excerpt: row.excerpt || '',
    author,
    authorFull,
    authorAvatar,
    authorAvatarClass,
    readTime: readTimeStr,
    readTimeMins,
    date,
    href,
    devanagari,
    imageClass: '',
    isFeatured: row.is_featured || false,
  };
}

export interface LiveArticleData {
  slug: string;
  title: string;
  cluster: string;
  authorSlug: 'dr-vipin' | 'dr-swati';
  authorFull: string;
  medicallyReviewedBySlug: 'dr-vipin' | 'dr-swati';
  publishedDate: string;
  lastUpdatedDate: string;
  estimatedReadTimeMins: number;
  excerpt: string;
  bodyMarkdown: string;
  metaTitle: string;
  metaDescription: string;
  categoryTag: string;
  isDraft?: boolean;
}

/**
 * Fetch all published articles from Supabase merged with static articles.
 * Strictly excludes any article marked with status 'draft' or is_published false.
 */
export async function getPublishedArticles(): Promise<KnowledgeArticle[]> {
  const draftSlugs = new Set<string>();
  const publishedDbArticles: KnowledgeArticle[] = [];

  try {
    const supabase = createAdminClient();
    const { data: dbRows, error } = await (supabase.from('knowledge_pieces') as any)
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && dbRows && dbRows.length > 0) {
      for (const row of dbRows) {
        const isPub = row.status === 'published' && row.is_published !== false;
        if (isPub) {
          publishedDbArticles.push(mapSupabaseToKnowledgeArticle(row));
        } else {
          draftSlugs.add(row.slug);
        }
      }
    }
  } catch (err) {
    console.warn('Supabase fetch error in getPublishedArticles:', err);
  }

  const combinedMap = new Map<string, KnowledgeArticle>();

  // 1. Static articles as base, BUT excluding any that are in draftSlugs
  for (const item of KNOWLEDGE_ARTICLES) {
    if (!draftSlugs.has(item.slug)) {
      combinedMap.set(item.slug, item);
    }
  }

  // 2. Published DB articles take precedence
  for (const item of publishedDbArticles) {
    if (!draftSlugs.has(item.slug)) {
      combinedMap.set(item.slug, item);
    }
  }

  const results = Array.from(combinedMap.values());
  results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return results;
}

/**
 * Check if an article is in draft status in Supabase.
 */
export async function isArticleDraft(slug: string): Promise<boolean> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await (supabase.from('knowledge_pieces') as any)
      .select('status, is_published')
      .eq('slug', slug)
      .maybeSingle();

    if (!error && data) {
      return data.status === 'draft' || data.is_published === false;
    }
  } catch (err) {
    console.warn('Supabase isArticleDraft error:', err);
  }
  return false;
}

/**
 * Get single article by slug from Supabase.
 * Returns { isDraft: true } if article exists but is in draft status.
 * Returns null if not found in database.
 */
export async function getLiveArticleBySlug(
  slug: string
): Promise<LiveArticleData | { isDraft: true } | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await (supabase.from('knowledge_pieces') as any)
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (!error && data) {
      const isDraft = data.status === 'draft' || data.is_published === false;
      if (isDraft) {
        return { isDraft: true };
      }

      const isSwati =
        data.author?.toLowerCase().includes('swati') ||
        data.author_slug === 'dr-swati' ||
        data.author === 'Dr. Swati';
      const authorSlug: 'dr-vipin' | 'dr-swati' = isSwati ? 'dr-swati' : 'dr-vipin';
      const readTimeStr =
        data.read_time ||
        (data.estimated_read_time_mins ? `${data.estimated_read_time_mins} min` : '5 min');
      const readTimeMins = parseInt(readTimeStr.replace(/[^0-9]/g, ''), 10) || 5;

      return {
        slug: data.slug,
        title: data.title,
        cluster: data.cluster || 'article',
        authorSlug,
        authorFull: isSwati ? 'Dr. Swati Tongale' : 'Dr. Vipin Tongale',
        medicallyReviewedBySlug: isSwati ? 'dr-vipin' : 'dr-swati',
        publishedDate: data.date_published || data.published_date || data.date || '2026-08-15',
        lastUpdatedDate: data.date_updated || data.last_updated_date || data.date || '2026-09-10',
        estimatedReadTimeMins: readTimeMins,
        excerpt: data.excerpt || '',
        bodyMarkdown: data.body_content || data.body_markdown || '',
        metaTitle: data.meta_title || `${data.title} | Shri Manmukund Hospital`,
        metaDescription: data.meta_description || data.excerpt || '',
        categoryTag: data.category_tag || 'Clinical Care',
      };
    }
  } catch (err) {
    console.warn('Supabase getLiveArticleBySlug error:', err);
  }
  return null;
}
