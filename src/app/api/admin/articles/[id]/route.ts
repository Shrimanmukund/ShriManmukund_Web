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

function normalizeCluster(raw: string = 'article'): string {
  const c = raw.toLowerCase().trim();
  if (c === 'playbooks' || c === 'playbook') return 'playbook';
  if (c === 'articles' || c === 'article') return 'article';
  if (c === 'insights' || c === 'insight') return 'insights';
  if (c === 'blogs' || c === 'blog') return 'blog';
  if (c === 'whitepapers' || c === 'whitepaper') return 'whitepaper';
  if (c === 'research') return 'research';
  if (c.includes('patient') || c.includes('resource') || c.includes('guide')) return 'patient-resources';
  return 'article';
}

function normalizeArticle(row: any, fallbackId: string) {
  const isPub =
    row.status === 'published' ||
    row.is_published === true ||
    (row.status === undefined && row.is_published !== false);

  const cluster = normalizeCluster(row.cluster || row.category);

  return {
    id: String(row.id || fallbackId),
    title: row.title || 'Untitled Article',
    slug: row.slug || fallbackId,
    cluster,
    category_tag:
      row.category_tag ||
      (Array.isArray(row.categories) && row.categories[0]) ||
      row.topic ||
      'Clinical Care',
    author:
      row.author ||
      row.authorFull ||
      (row.author_slug === 'dr-swati' || row.author === 'Dr. Swati'
        ? 'Dr. Swati Tongale'
        : 'Dr. Vipin Tongale'),
    medical_reviewer:
      row.medical_reviewer ||
      (row.medically_reviewed_by_slug === 'dr-swati'
        ? 'Dr. Swati Tongale'
        : 'Dr. Vipin Tongale'),
    cover_image_url: row.cover_image_url || row.featured_image_url || null,
    excerpt: row.excerpt || '',
    body_content: row.body_content || row.body_markdown || row.bodyMarkdown || '',
    meta_title: row.meta_title || `${row.title} | Shri Manmukund Hospital`,
    meta_description: row.meta_description || row.excerpt || '',
    status: isPub ? 'published' : 'draft',
    read_time:
      row.read_time ||
      (row.estimated_read_time_mins ? `${row.estimated_read_time_mins} min` : '5 min'),
    date_published:
      row.date_published ||
      row.published_date ||
      row.date ||
      new Date().toISOString().split('T')[0],
    date_updated:
      row.date_updated ||
      row.last_updated_date ||
      new Date().toISOString().split('T')[0],
    views: typeof row.views === 'number' ? row.views : 0,
    created_at: row.created_at || new Date().toISOString(),
    updated_at: row.updated_at || new Date().toISOString(),
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
        return NextResponse.json({ success: true, article: normalizeArticle(data, id) });
      }
    } catch (err) {
      console.warn('Supabase query error in GET [id]:', err);
    }

    // 2. Fallback to seeded items
    const seededPieces = getAllKnowledgePieces();
    const item = KNOWLEDGE_ARTICLES.find((a) => a.id === id || a.slug === id);
    const seededMatch = seededPieces.find((p) => p.slug === id || (item && p.slug === item.slug));

    if (item || seededMatch) {
      const raw = {
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

      return NextResponse.json({ success: true, article: normalizeArticle(raw, id) });
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

    const validCluster = cluster ? normalizeCluster(cluster) : undefined;
    const dbCluster = validCluster === 'patient-resources' ? 'article' : validCluster;
    const isPub = status === 'published';
    const nowDate = new Date().toISOString().split('T')[0];
    const nowIso = new Date().toISOString();

    const updatePayload: Record<string, any> = {
      date_updated: nowDate,
      last_updated_date: nowDate,
      updated_at: nowIso,
    };

    if (title !== undefined) updatePayload.title = title.trim();
    if (cleanSlug !== undefined) updatePayload.slug = cleanSlug;
    if (dbCluster !== undefined) updatePayload.cluster = dbCluster;
    if (category_tag !== undefined) {
      updatePayload.category_tag = category_tag.trim();
      updatePayload.categories = [category_tag.trim()];
    }
    if (author !== undefined) updatePayload.author = author;
    if (medical_reviewer !== undefined) updatePayload.medical_reviewer = medical_reviewer;
    if (cover_image_url !== undefined) {
      updatePayload.cover_image_url = cover_image_url;
      updatePayload.featured_image_url = cover_image_url;
    }
    if (excerpt !== undefined) updatePayload.excerpt = excerpt.trim();
    if (body_content !== undefined) {
      updatePayload.body_content = body_content.trim();
      updatePayload.body_markdown = body_content.trim();
    }
    if (meta_title !== undefined) updatePayload.meta_title = meta_title.trim();
    if (meta_description !== undefined) updatePayload.meta_description = meta_description.trim();
    if (status !== undefined) {
      updatePayload.status = status;
      updatePayload.is_published = isPub;
    }
    if (read_time !== undefined) {
      updatePayload.read_time = read_time;
      updatePayload.estimated_read_time_mins = parseInt(read_time.replace(/[^0-9]/g, ''), 10) || 5;
    }

    let updatedArticle: any = null;

    try {
      const supabase = createAdminClient();
      const { data, error } = await (supabase.from('knowledge_pieces') as any)
        .update(updatePayload)
        .or(`id.eq.${id},slug.eq.${id}`)
        .select()
        .single();

      if (!error && data) {
        updatedArticle = normalizeArticle(data, id);
      } else {
        updatedArticle = normalizeArticle({ id, ...updatePayload }, id);
      }
    } catch (err) {
      console.warn('Supabase offline update:', err);
      updatedArticle = normalizeArticle({ id, ...updatePayload }, id);
    }

    // Revalidate relevant pages
    try {
      revalidatePath('/knowledge');
      revalidatePath('/knowledge/', 'page');
      if (validCluster) revalidatePath(`/knowledge/${validCluster}/`, 'page');
      if (cleanSlug) revalidatePath(`/knowledge/${validCluster || 'articles'}/${cleanSlug}/`, 'page');
      revalidatePath('/admin/articles');
      revalidatePath('/admin/articles/', 'page');
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
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      let query = (supabase.from('knowledge_pieces') as any).delete();

      if (isUuid) {
        query = query.or(`id.eq.${id},slug.eq.${id}`);
      } else {
        query = query.eq('slug', id);
      }

      const { error } = await query;
      if (error) {
        console.warn('Supabase delete error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase delete error/offline:', err);
    }

    try {
      revalidatePath('/knowledge');
      revalidatePath('/knowledge/', 'page');
      revalidatePath('/admin/articles');
      revalidatePath('/admin/articles/', 'page');
      revalidatePath('/api/articles');
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Article deleted successfully',
      },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to delete article' },
      { status: 500 }
    );
  }
}
