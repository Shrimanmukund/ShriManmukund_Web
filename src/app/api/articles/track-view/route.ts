import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ success: false, message: 'Slug is required' }, { status: 400 });
    }

    const cleanSlug = slug.toLowerCase().trim();

    try {
      const supabase = createAdminClient();

      // Fetch current view count
      const { data, error } = await (supabase.from('knowledge_pieces') as any)
        .select('id, views')
        .eq('slug', cleanSlug)
        .maybeSingle();

      if (error || !data) {
        return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
      }

      const currentViews = typeof data.views === 'number' ? data.views : 0;
      const nextViews = currentViews + 1;

      // Update view count in database
      const { error: updateError } = await (supabase.from('knowledge_pieces') as any)
        .update({ views: nextViews })
        .eq('id', data.id);

      if (updateError) {
        console.error('Failed to increment views:', updateError);
        return NextResponse.json({ success: false, message: updateError.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, slug: cleanSlug, views: nextViews });
    } catch (dbErr: any) {
      console.warn('Database error in track-view:', dbErr);
      return NextResponse.json({ success: false, message: dbErr?.message || 'Database error' }, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err?.message || 'Invalid request' }, { status: 400 });
  }
}
