'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Eye,
  Search,
  RefreshCw,
  Plus,
  Edit3,
  ExternalLink,
  Trash2,
  FileText,
  Filter,
} from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  cluster: string;
  category_tag: string;
  author: string;
  medical_reviewer?: string;
  cover_image_url?: string | null;
  excerpt: string;
  body_content?: string;
  meta_title?: string;
  meta_description?: string;
  status: 'draft' | 'published';
  read_time: string;
  date_published: string;
  date_updated: string;
  views: number;
  created_at: string;
}

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCluster, setFilterCluster] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/articles/');
      const data = await res.json();
      if (data.success && Array.isArray(data.articles)) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error('Failed to fetch articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }
    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/articles/${id}/`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
      } else {
        alert(data.message || 'Failed to delete article');
      }
    } catch (err) {
      console.error('Error deleting article:', err);
      alert('Error deleting article');
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: 'draft' | 'published') => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/articles/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setArticles((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        );
      }
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setActionLoading(null);
    }
  };

  // Filtered list
  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      (a.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.slug || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.category_tag || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.author || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.excerpt || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCluster = filterCluster === 'all' || a.cluster === filterCluster;
    const matchesStatus = filterStatus === 'all' || a.status === filterStatus;

    return matchesSearch && matchesCluster && matchesStatus;
  });

  // Calculate statistics
  const totalCount = articles.length;
  const publishedCount = articles.filter((a) => a.status === 'published').length;
  const draftCount = articles.filter((a) => a.status === 'draft').length;
  const totalViews = articles.reduce((acc, curr) => acc + (curr.views || 0), 0);

  return (
    <div className="space-y-6">
      {/* Metric Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 font-medium">Total Articles</span>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">{totalCount}</div>
          </div>
          <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-emerald-700 font-medium">Published</span>
            <div className="text-2xl font-bold text-emerald-900 mt-0.5">{publishedCount}</div>
          </div>
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-amber-700 font-medium">Drafts</span>
            <div className="text-2xl font-bold text-amber-900 mt-0.5">{draftCount}</div>
          </div>
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-blue-700 font-medium">Total Views</span>
            <div className="text-2xl font-bold text-blue-900 mt-0.5">{totalViews.toLocaleString()}</div>
          </div>
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <Eye className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Section Header with Title, Controls & Primary Green New Button */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Hospital Knowledge &amp; Blog Articles</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Live Content Management System for clinical playbooks, doctor insights, articles, and guides.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <input
                type="text"
                placeholder="Search articles, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2" />
            </div>

            {/* Cluster Filter Dropdown */}
            <select
              value={filterCluster}
              onChange={(e) => setFilterCluster(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="all">All Types ({totalCount})</option>
              <option value="playbooks">Playbooks</option>
              <option value="articles">Articles</option>
              <option value="insights">Insights</option>
              <option value="blog">Blog Posts</option>
              <option value="patient-resources">Patient Guides</option>
            </select>

            {/* Status Filter Dropdown */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="all">All Status</option>
              <option value="published">Published ({publishedCount})</option>
              <option value="draft">Drafts ({draftCount})</option>
            </select>

            {/* Refresh Button */}
            <button
              onClick={fetchArticles}
              disabled={loading}
              className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg border border-gray-300 transition"
              title="Refresh articles"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>

            {/* Prominent "+ Write New Article" Button in Primary Green */}
            <Link
              href="/admin/articles/new/"
              className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white px-4 py-2 rounded-lg font-medium text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition ml-auto sm:ml-0"
            >
              <Plus className="w-4 h-4" />
              <span>Write New Article</span>
            </Link>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
              <tr>
                <th className="py-3.5 px-4">Title &amp; Topic</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Views</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-amber-600" />
                    <span>Loading articles...</span>
                  </td>
                </tr>
              ) : filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="font-medium text-gray-600">No articles found matching criteria</p>
                    <p className="text-gray-400 text-[11px] mt-1">
                      Try clearing your search or write a new article.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredArticles.map((article) => {
                  const isPublished = article.status === 'published';
                  const clusterSlug = article.cluster.endsWith('s') ? article.cluster : `${article.cluster}s`;
                  const publicUrl =
                    article.cluster === 'patient-resources'
                      ? `/patients/${article.slug}/`
                      : `/knowledge/${clusterSlug}/${article.slug}/`;

                  return (
                    <tr key={article.id} className="hover:bg-gray-50/80 transition">
                      {/* Title & Excerpt */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="font-medium text-gray-900 leading-snug truncate">
                          {article.title}
                        </div>
                        <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                          {article.excerpt}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          slug: {article.slug}
                        </div>
                      </td>

                      {/* Cluster / Tag */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1 items-start">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700">
                            {article.cluster}
                          </span>
                          {article.category_tag && (
                            <span className="text-[10px] text-amber-700 font-medium">
                              #{article.category_tag}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Author */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-medium text-gray-800">{article.author}</div>
                        {article.medical_reviewer && (
                          <div className="text-[10px] text-gray-400">
                            Rev: {article.medical_reviewer}
                          </div>
                        )}
                      </td>

                      {/* Status Toggle Badge */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleStatus(article.id, article.status)}
                          disabled={actionLoading === article.id}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1.5 transition ${
                            isPublished
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                          }`}
                          title="Click to toggle Draft / Published"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isPublished ? 'bg-emerald-600' : 'bg-amber-600'
                            }`}
                          />
                          <span>{isPublished ? 'Published' : 'Draft'}</span>
                        </button>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-gray-500 text-[11px]">
                        <div>{article.date_published || 'Recent'}</div>
                        <div className="text-gray-400">{article.read_time}</div>
                      </td>

                      {/* Views */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-gray-700 font-medium">
                        {(article.views || 0).toLocaleString()}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <Link
                            href={`/admin/articles/${article.id}/edit/`}
                            className="p-1.5 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition"
                            title="Edit article"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Link>

                          <Link
                            href={publicUrl}
                            target="_blank"
                            className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="View live on website"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>

                          <button
                            onClick={() => handleDelete(article.id, article.title)}
                            disabled={actionLoading === article.id}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
