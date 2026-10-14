import { NextResponse } from 'next/server';
import { getPublishedArticles, mapSupabaseToKnowledgeArticle } from '@/lib/data/knowledge-service';
import type { KnowledgeArticle } from '@/lib/data/knowledge-articles';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cluster = searchParams.get('cluster');
    const search = searchParams.get('search')?.toLowerCase();
    const slug = searchParams.get('slug');

    // 1. Fetch only published articles (drafts are strictly excluded)
    let results: KnowledgeArticle[] = await getPublishedArticles();

    // 2. Filter by cluster/category if requested
    if (cluster && cluster !== 'all') {
      const targetCategory = cluster.endsWith('s') ? cluster : `${cluster}s`;
      results = results.filter(
        (a) => a.category === cluster || a.category === targetCategory
      );
    }

    // 3. Filter by slug if requested
    if (slug) {
      results = results.filter((p) => p.slug === slug);
    }

    // 4. Filter by search query if requested
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
