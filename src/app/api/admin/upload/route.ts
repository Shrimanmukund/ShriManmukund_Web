import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    const ALLOWED_MIME_TYPES = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/avif',
    ];
    const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'avif'];

    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
    const mimeType = (file.type || '').toLowerCase();

    // Strictly disallow PDFs and any non-image files
    if (
      fileExt === 'pdf' ||
      mimeType.includes('pdf') ||
      !ALLOWED_EXTENSIONS.includes(fileExt) ||
      !mimeType.startsWith('image/') ||
      !ALLOWED_MIME_TYPES.includes(mimeType)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Invalid file format. Only images (PNG, JPG, JPEG, WebP, AVIF) are allowed for cover images. PDFs and documents are not permitted.',
        },
        { status: 400 }
      );
    }

    // Limit file size to 5MB
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: 'File size exceeds 5MB limit. Please upload an image under 5MB.',
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const cleanFileName = file.name
      .replace(/\.[^/.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-');
    const fileName = `${Date.now()}-${cleanFileName}.${fileExt}`;

    // 1. Try uploading to Supabase Storage bucket blog-images
    try {
      const supabase = createAdminClient();
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(fileName, buffer, {
          contentType: file.type || 'image/jpeg',
          upsert: true,
        });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName);

        return NextResponse.json({
          success: true,
          url: publicUrlData.publicUrl,
          fileName,
        });
      }
    } catch (storageErr) {
      console.warn('Supabase storage upload error:', storageErr);
    }

    // 2. Base64 / Local URL Fallback for preview
    const base64Data = `data:${file.type || 'image/jpeg'};base64,${buffer.toString('base64')}`;

    return NextResponse.json({
      success: true,
      url: base64Data,
      fileName,
      note: 'Rendered via local data stream',
    });
  } catch (error: any) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to upload image' },
      { status: 500 }
    );
  }
}
