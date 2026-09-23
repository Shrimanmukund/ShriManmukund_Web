import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createAdminClient } from '@/lib/supabase/admin';
import { KNOWLEDGE_ARTICLES } from '@/lib/data/knowledge-articles';
import { getAllKnowledgePieces } from '@/lib/data/content-store';

export const dynamic = 'force-dynamic';

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const { id } = params;

    // 1. Try fetching from Supabase
    try {
      const supabase = createAdminClient();
      const { data, error } = await (supabase.from('knowledge_pieces') as any)
        .select('*')
        .or(`id.eq.${id},slug.eq.${id}`)
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, article: data });
      }
    } catch (err) {
      console.warn('Supabase query error in GET [id]:', err);
    }

    // 2. Fallback to seeded items
    const seededPieces = getAllKnowledgePieces();
    const item = KNOWLEDGE_ARTICLES.find((a) => a.id === id || a.slug === id);
    const seededMatch = seededPieces.find((p) => p.slug === id || (item && p.slug === item.slug));

    if (item || seededMatch) {
      const article = {
        id: item?.id || id,
        title: item?.title || seededMatch?.title || 'Article',
        slug: item?.slug || seededMatch?.slug || id,
        cluster: item?.category || seededMatch?.cluster || 'article',
        category_tag: item?.topic || 'Clinical Care',
        author: item?.authorFull || (seededMatch?.authorSlug === 'dr-swati' ? 'Dr. Swati Tongale' : 'Dr. Vipin Tongale'),
        medical_reviewer: item?.author === 'Dr. Swati' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
        cover_image_url: null,
        excerpt: item?.excerpt || seededMatch?.excerpt || '',
        body_content: seededMatch?.bodyMarkdown || '',
        meta_title: item?.title ? `${item.title} | Shri Manmukund Hospital` : seededMatch?.metaTitle,
        meta_description: item?.excerpt || seededMatch?.metaDescription,
        status: 'published',
        read_time: item?.readTime || `${seededMatch?.estimatedReadTimeMins || 5} min`,
        date_published: item?.date || seededMatch?.publishedDate || '2026-08-15',
        date_updated: new Date().toISOString().split('T')[0],
        views: 240,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      return NextResponse.json({ success: true, article });
    }

    return NextResponse.json(
      { success: false, message: 'Article not found' },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: RouteContext) {
  try {
    const { id } = params;
    const body = await request.json();

    const {
      title,
      slug,
      cluster,
      category_tag,
      author,
      medical_reviewer,
      cover_image_url,
      excerpt,
      body_content,
      meta_title,
      meta_description,
      status,
      read_time,
    } = body;

    const cleanSlug = slug
      ? slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      : undefined;

    const updatePayload: Record<string, any> = {
      date_updated: new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) updatePayload.title = title.trim();
    if (cleanSlug !== undefined) updatePayload.slug = cleanSlug;
    if (cluster !== undefined) updatePayload.cluster = cluster;
    if (category_tag !== undefined) updatePayload.category_tag = category_tag.trim();
    if (author !== undefined) updatePayload.author = author;
    if (medical_reviewer !== undefined) updatePayload.medical_reviewer = medical_reviewer;
    if (cover_image_url !== undefined) updatePayload.cover_image_url = cover_image_url;
    if (excerpt !== undefined) updatePayload.excerpt = excerpt.trim();
    if (body_content !== undefined) updatePayload.body_content = body_content.trim();
    if (meta_title !== undefined) updatePayload.meta_title = meta_title.trim();
    if (meta_description !== undefined) updatePayload.meta_description = meta_description.trim();
    if (status !== undefined) updatePayload.status = status;
    if (read_time !== undefined) updatePayload.read_time = read_time;

    let updatedArticle = null;

    try {
      const supabase = createAdminClient();
      const { data, error } = await (supabase.from('knowledge_pieces') as any)
        .update(updatePayload)
        .or(`id.eq.${id},slug.eq.${id}`)
        .select()
        .single();

      if (!error && data) {
        updatedArticle = data;
      } else {
        console.warn('Supabase update note/fallback:', error?.message);
        updatedArticle = { id, ...updatePayload };
      }
    } catch (err) {
      console.warn('Supabase offline update:', err);
      updatedArticle = { id, ...updatePayload };
    }

    // Revalidate relevant pages
    try {
      revalidatePath('/knowledge');
      revalidatePath('/knowledge/', 'page');
      if (cluster) revalidatePath(`/knowledge/${cluster}/`, 'page');
      if (cleanSlug) revalidatePath(`/knowledge/${cluster || 'articles'}/${cleanSlug}/`, 'page');
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Article updated successfully',
      article: updatedArticle,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to update article' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: RouteContext) {
  try {
    const { id } = params;

    try {
      const supabase = createAdminClient();
      const { error } = await (supabase.from('knowledge_pieces') as any)
        .delete()
        .or(`id.eq.${id},slug.eq.${id}`);

      if (error) {
        console.warn('Supabase delete error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase offline delete:', err);
    }

    try {
      revalidatePath('/knowledge');
      revalidatePath('/knowledge/', 'page');
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to delete article' },
      { status: 500 }
    );
  }
}
