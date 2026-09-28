import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { KNOWLEDGE_ARTICLES, type KnowledgeArticle } from '@/lib/data/knowledge-articles';
import { getAllKnowledgePieces } from '@/lib/data/content-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

function mapSupabaseToKnowledgeArticle(row: any): KnowledgeArticle {
  const rawCluster = (row.cluster || 'article').toLowerCase().trim();
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
    rawCluster.includes('guide') ||
    rawCluster.includes('resource')
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cluster = searchParams.get('cluster');
    const search = searchParams.get('search')?.toLowerCase();
    const slug = searchParams.get('slug');

    let dbArticles: KnowledgeArticle[] = [];

    // 1. Attempt to query live published articles from Supabase
    try {
      const supabase = createAdminClient();
      let query = (supabase.from('knowledge_pieces') as any)
        .select('*')
        .or('status.eq.published,is_published.eq.true')
        .order('created_at', { ascending: false });

      if (slug) {
        query = query.eq('slug', slug);
      }

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        dbArticles = data.map((row: any) => mapSupabaseToKnowledgeArticle(row));
      }
    } catch (supabaseErr) {
      console.warn('Supabase query error or offline, using fallback store:', supabaseErr);
    }

    // 2. Merge with static knowledge articles (avoiding duplicates by slug)
    const combinedMap = new Map<string, KnowledgeArticle>();

    // Put static articles first as base
    for (const item of KNOWLEDGE_ARTICLES) {
      combinedMap.set(item.slug, item);
    }

    // Overlay/insert live DB articles (takes precedence and adds new articles)
    for (const item of dbArticles) {
      combinedMap.set(item.slug, item);
    }

    let results = Array.from(combinedMap.values());

    // Sort newest first by date
    results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 3. Filter by cluster/category if requested
    if (cluster && cluster !== 'all') {
      const targetCategory = cluster.endsWith('s') ? cluster : `${cluster}s`;
      results = results.filter(
        (a) => a.category === cluster || a.category === targetCategory
      );
    }

    // 4. Filter by slug if requested
    if (slug) {
      results = results.filter((p) => p.slug === slug);
    }

    // 5. Filter by search query if requested
    if (search) {
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.excerpt.toLowerCase().includes(search) ||
          p.topic.toLowerCase().includes(search) ||
          p.authorFull.toLowerCase().includes(search) ||
          p.devanagari.includes(search)
      );
    }

    return NextResponse.json(
      {
        success: true,
        count: results.length,
        data: results,
        dbCount: dbArticles.length,
      },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );
  } catch (err: any) {
    console.error('Error fetching articles:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error fetching articles.' },
      { status: 500 }
    );
  }
}
