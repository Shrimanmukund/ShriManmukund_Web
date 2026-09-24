'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArticleEditorForm, type ArticleFormData } from '@/components/admin/ArticleEditorForm';
import { RefreshCw, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function EditArticlePage() {
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [articleData, setArticleData] = useState<Partial<ArticleFormData> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`/api/admin/articles/${id}/`);
        const data = await res.json();
        if (data.success && data.article) {
          setArticleData(data.article);
        } else {
          setError(data.message || 'Article not found');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-500">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-amber-600" />
        <p className="text-sm font-medium text-gray-700">Loading article editor...</p>
      </div>
    );
  }

  if (error || !articleData) {
    return (
      <div className="p-8 bg-white border border-gray-200 rounded-xl text-center max-w-lg mx-auto my-12">
        <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
        <h2 className="text-lg font-bold text-gray-900 mb-1">Unable to load article</h2>
        <p className="text-xs text-gray-500 mb-4">{error || 'Article not found'}</p>
        <Link
          href="/admin/articles/"
          className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  return <ArticleEditorForm initialData={articleData} isEditing={true} />;
}
