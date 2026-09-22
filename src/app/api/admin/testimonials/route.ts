import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createAdminClient();
    const { data, error } = await (supabase.from('testimonials') as any)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching testimonials from Supabase:', error.message);
      return NextResponse.json({ success: true, testimonials: [] });
    }

    return NextResponse.json({ success: true, testimonials: data || [] });
  } catch (err: any) {
    console.error('Failed to load testimonials:', err);
    return NextResponse.json({ success: true, testimonials: [] });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, is_approved, display_permission_granted } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
    }

    const updatePayload: Record<string, any> = {};
    if (typeof is_approved === 'boolean') updatePayload.is_approved = is_approved;
    if (typeof display_permission_granted === 'boolean') updatePayload.display_permission_granted = display_permission_granted;

    const supabase = createAdminClient();
    const { error } = await (supabase.from('testimonials') as any)
      .update(updatePayload)
      .eq('id', id);

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Testimonial updated' });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
