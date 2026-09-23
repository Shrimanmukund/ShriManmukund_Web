'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { ArticleEditorForm } from '@/components/admin/ArticleEditorForm';

export default function NewArticlePage() {
  return <ArticleEditorForm isEditing={false} />;
}
