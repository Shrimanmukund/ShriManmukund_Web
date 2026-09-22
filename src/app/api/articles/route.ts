import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getAllKnowledgePieces } from '@/lib/data/content-store';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cluster = searchParams.get('cluster');
    const search = searchParams.get('search')?.toLowerCase();
    const slug = searchParams.get('slug');

    // Attempt to query live articles from Supabase
    try {
      const supabase = createAdminClient();
      let query = supabase
        .from('knowledge_pieces')
        .select('*')
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (cluster && cluster !== 'all') {
        query = query.eq('cluster', cluster as any);
      }

      if (slug) {
        query = query.eq('slug', slug);
      }

      const { data, error } = await query;

      if (!error && data && data.length > 0) {
        let results: any[] = data;
        if (search) {
          results = results.filter(
            (p: any) =>
              (p.title && p.title.toLowerCase().includes(search)) ||
              (p.excerpt && p.excerpt.toLowerCase().includes(search)) ||
              (p.body_markdown && p.body_markdown.toLowerCase().includes(search))
          );
        }

        return NextResponse.json({
          success: true,
          source: 'supabase',
          count: results.length,
          data: results,
        });
      }
    } catch (supabaseErr) {
      console.warn('Supabase query error or offline, using fallback store:', supabaseErr);
    }

    // Fallback to static content store
    let fallbackPieces = getAllKnowledgePieces();
    if (cluster && cluster !== 'all') {
      fallbackPieces = fallbackPieces.filter((p) => p.cluster === cluster);
    }
    if (slug) {
      fallbackPieces = fallbackPieces.filter((p) => p.slug === slug);
    }
    if (search) {
      fallbackPieces = fallbackPieces.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.excerpt.toLowerCase().includes(search) ||
          p.bodyMarkdown.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({
      success: true,
      source: 'static_fallback',
      count: fallbackPieces.length,
      data: fallbackPieces,
    });
  } catch (err: any) {
    console.error('Error fetching articles:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error fetching articles.' },
      { status: 500 }
    );
  }
}
