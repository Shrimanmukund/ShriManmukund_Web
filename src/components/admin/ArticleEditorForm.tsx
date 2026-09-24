'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Globe,
  Save,
  Eye,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  HelpCircle,
  FileText,
  AlertCircle,
  Trash2,
} from 'lucide-react';
import { MarkdownRenderer } from '@/components/content/MarkdownRenderer';

export interface ArticleFormData {
  id?: string;
  title: string;
  slug: string;
  cluster: string;
  category_tag: string;
  author: string;
  medical_reviewer: string;
  cover_image_url: string;
  excerpt: string;
  body_content: string;
  meta_title: string;
  meta_description: string;
  status: 'draft' | 'published';
  read_time: string;
}

interface ArticleEditorProps {
  initialData?: Partial<ArticleFormData>;
  isEditing?: boolean;
}

export function ArticleEditorForm({ initialData = {}, isEditing = false }: ArticleEditorProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<ArticleFormData>({
    id: initialData.id || '',
    title: initialData.title || '',
    slug: initialData.slug || '',
    cluster: initialData.cluster || 'article',
    category_tag: initialData.category_tag || 'Anorectal Care',
    author: initialData.author || 'Dr. Vipin Tongale',
    medical_reviewer: initialData.medical_reviewer || 'Dr. Swati Tongale',
    cover_image_url: initialData.cover_image_url || '',
    excerpt: initialData.excerpt || '',
    body_content: initialData.body_content || '',
    meta_title: initialData.meta_title || '',
    meta_description: initialData.meta_description || '',
    status: initialData.status || 'published',
    read_time: initialData.read_time || '6 min',
  });

  const [isSlugCustomized, setIsSlugCustomized] = useState(isEditing);
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    const updated = { ...formData, title: val };
    if (!isSlugCustomized) {
      updated.slug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }
    if (!formData.meta_title) {
      updated.meta_title = val ? `${val} | Shri Manmukund Hospital` : '';
    }
    setFormData(updated);
  };

  // Markdown formatting shortcuts
  const insertFormatting = (prefix: string, suffix: string = '') => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = el.value.substring(start, end);
    const replacement = `${prefix}${selected || 'text'}${suffix}`;

    const newContent =
      el.value.substring(0, start) + replacement + el.value.substring(end);

    setFormData((prev) => ({ ...prev, body_content: newContent }));

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selected ? selected.length : 4)
      );
    }, 50);
  };

  const insertFAQBlock = () => {
    const faqTemplate = `\n\n### Frequently Asked Questions\n\n**Q: How soon can normal activities resume?**\nMost patients return to light desk work within 2 to 3 days.\n\n**Q: Is hospitalization required?**\nProcedures are typically daycare or require only 24 hours of clinical observation.\n`;
    setFormData((prev) => ({
      ...prev,
      body_content: prev.body_content + faqTemplate,
    }));
  };

  // Handle Cover Image Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('file', file);

      const res = await fetch('/api/admin/upload/', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (result.success && result.url) {
        setFormData((prev) => ({ ...prev, cover_image_url: result.url }));
      } else {
        throw new Error(result.message || 'Image upload failed');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  // Submit Form
  const handleSubmit = async (publishStatus?: 'draft' | 'published') => {
    if (!formData.title.trim()) {
      setErrorMessage('Please enter an article title');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const targetStatus = publishStatus || formData.status;

    try {
      const payload = {
        ...formData,
        status: targetStatus,
      };

      const url = isEditing
        ? `/api/admin/articles/${formData.id || formData.slug}/`
        : '/api/admin/articles/';

      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to save article');
      }

      setSuccessMessage(
        isEditing
          ? 'Article updated successfully! Redirecting...'
          : 'Article created successfully! Redirecting...'
      );

      setTimeout(() => {
        router.push('/admin/articles/');
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error saving article');
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewCluster = formData.cluster.endsWith('s')
    ? formData.cluster
    : `${formData.cluster}s`;
  const liveUrlPreview =
    formData.cluster === 'patient-resources'
      ? `/patients/${formData.slug || 'slug'}/`
      : `/knowledge/${previewCluster}/${formData.slug || 'slug'}/`;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Top Bar Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles/"
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
            title="Back to articles list"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
              {isEditing ? 'Edit Knowledge Article' : 'Write New Knowledge Article'}
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
              Live URL: <span className="text-amber-700">{liveUrlPreview}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleSubmit('draft')}
            disabled={isSubmitting}
            className="px-3.5 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={() => handleSubmit('published')}
            disabled={isSubmitting}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] rounded-lg shadow-sm transition flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Saving...' : isEditing ? 'Update & Publish' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {/* Alerts */}
      {errorMessage && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Main Content */}
        <div className="lg:col-span-2 space-y-5">
          {/* Article Title */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Modern Laser Treatment for Complex Fistula"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
                required
              />
            </div>

            {/* URL Slug */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  URL Slug
                </label>
                <button
                  type="button"
                  onClick={() => setIsSlugCustomized(!isSlugCustomized)}
                  className="text-[11px] text-amber-700 hover:underline"
                >
                  {isSlugCustomized ? 'Auto-generate from title' : 'Customize manually'}
                </button>
              </div>
              <input
                type="text"
                value={formData.slug}
                disabled={!isSlugCustomized}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)+/g, ''),
                  })
                }
                className={`w-full px-3.5 py-2 border rounded-lg text-xs font-mono ${
                  !isSlugCustomized
                    ? 'bg-gray-50 text-gray-500 border-gray-200'
                    : 'bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-slate-900 focus:outline-none'
                }`}
              />
            </div>

            {/* Short Excerpt */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Short Excerpt / Clinical Summary
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                rows={3}
                placeholder="A concise clinical summary explaining what this article covers and what patients will learn..."
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs leading-relaxed focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Body Content Editor & Markdown Toolbar */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('write')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                    activeTab === 'write'
                      ? 'bg-slate-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Write Content
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
                    activeTab === 'preview'
                      ? 'bg-slate-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </button>
              </div>

              <span className="text-[11px] text-gray-400">
                Markdown &amp; Rich Formatting Supported
              </span>
            </div>

            {/* Markdown Quick Toolbar (Visible when Writing) */}
            {activeTab === 'write' && (
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700">
                <button
                  type="button"
                  onClick={() => insertFormatting('**', '**')}
                  className="p-1.5 hover:bg-white rounded hover:shadow-xs"
                  title="Bold"
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => insertFormatting('*', '*')}
                  className="p-1.5 hover:bg-white rounded hover:shadow-xs"
                  title="Italic"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={() => insertFormatting('\n## ', '\n')}
                  className="px-2 py-1 hover:bg-white rounded hover:shadow-xs text-[11px] font-bold"
                  title="Heading 2"
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => insertFormatting('\n### ', '\n')}
                  className="px-2 py-1 hover:bg-white rounded hover:shadow-xs text-[11px] font-bold"
                  title="Heading 3"
                >
                  H3
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={() => insertFormatting('\n- ', '')}
                  className="p-1.5 hover:bg-white rounded hover:shadow-xs"
                  title="Bullet List"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => insertFormatting('\n1. ', '')}
                  className="p-1.5 hover:bg-white rounded hover:shadow-xs"
                  title="Numbered List"
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => insertFormatting('\n> ', '')}
                  className="p-1.5 hover:bg-white rounded hover:shadow-xs"
                  title="Quote / Medical Note"
                >
                  <Quote className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={insertFAQBlock}
                  className="px-2 py-1 text-[11px] font-medium bg-amber-100 text-amber-900 hover:bg-amber-200 rounded flex items-center gap-1 transition"
                  title="Insert FAQ Accordion Template"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>+ FAQ Section</span>
                </button>
              </div>
            )}

            {/* Write Textarea or Live Markdown Preview */}
            {activeTab === 'write' ? (
              <textarea
                ref={textareaRef}
                value={formData.body_content}
                onChange={(e) =>
                  setFormData({ ...formData, body_content: e.target.value })
                }
                rows={16}
                placeholder="Write your article body here in markdown... Use headings (##), bullet points, and clinical notes to structure advice clearly for patients."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-xs sm:text-sm font-mono leading-relaxed focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            ) : (
              <div className="p-6 bg-[#FBF7EC] border border-amber-200 rounded-lg min-h-[380px] prose prose-sm max-w-none text-[#2C2416]">
                <MarkdownRenderer
                  content={
                    formData.body_content ||
                    '*No article content written yet. Switch back to Write to add paragraphs.*'
                  }
                />
              </div>
            )}
          </div>

          {/* SEO Metadata Box */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-amber-600" />
              <span>Search Engine Optimization (SEO &amp; AEO)</span>
            </h3>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-gray-700">Meta Title</label>
                <span className="text-[10px] text-gray-400">
                  {formData.meta_title.length}/60 recommended
                </span>
              </div>
              <input
                type="text"
                value={formData.meta_title}
                onChange={(e) =>
                  setFormData({ ...formData, meta_title: e.target.value })
                }
                placeholder="Title as it appears on Google Search"
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-gray-700">
                  Meta Description
                </label>
                <span className="text-[10px] text-gray-400">
                  {formData.meta_description.length}/155 recommended
                </span>
              </div>
              <textarea
                value={formData.meta_description}
                onChange={(e) =>
                  setFormData({ ...formData, meta_description: e.target.value })
                }
                rows={2}
                placeholder="Google search summary snippet..."
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Settings, Metadata & Image */}
        <div className="space-y-5">
          {/* Publication Status Box */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Publishing Settings
            </h3>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Visibility Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as 'draft' | 'published',
                  })
                }
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-800 focus:ring-2 focus:ring-slate-900 focus:outline-none font-medium"
              >
                <option value="published">🟢 Published (Live for patients)</option>
                <option value="draft">🟡 Draft (Hidden from public site)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Content Cluster / Type
              </label>
              <select
                value={formData.cluster}
                onChange={(e) =>
                  setFormData({ ...formData, cluster: e.target.value })
                }
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-800 focus:ring-2 focus:ring-slate-900 focus:outline-none font-medium capitalize"
              >
                <option value="article">Article (Clinical Guide)</option>
                <option value="playbook">Playbook (Step-by-Step Care)</option>
                <option value="insights">Insight (Doctor Perspective)</option>
                <option value="blog">Blog Post</option>
                <option value="patient-resources">Patient Guide / Checklist</option>
                <option value="whitepaper">Whitepaper</option>
                <option value="research">Clinical Research</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Topic Tag
              </label>
              <input
                type="text"
                value={formData.category_tag}
                onChange={(e) =>
                  setFormData({ ...formData, category_tag: e.target.value })
                }
                placeholder="e.g. Ksharsutra, Piles, Uttarbasti, PCOD"
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Estimated Read Time
              </label>
              <input
                type="text"
                value={formData.read_time}
                onChange={(e) =>
                  setFormData({ ...formData, read_time: e.target.value })
                }
                placeholder="e.g. 6 min"
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Author Attribution Box */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Doctor Attribution (E-E-A-T)
            </h3>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Author
              </label>
              <select
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-800 focus:ring-2 focus:ring-slate-900 focus:outline-none font-medium"
              >
                <option value="Dr. Vipin Tongale">Dr. Vipin Tongale (MS Shalya Tantra)</option>
                <option value="Dr. Swati Tongale">Dr. Swati Tongale (MS Shalya Tantra)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Medically Reviewed By
              </label>
              <select
                value={formData.medical_reviewer}
                onChange={(e) =>
                  setFormData({ ...formData, medical_reviewer: e.target.value })
                }
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-800 focus:ring-2 focus:ring-slate-900 focus:outline-none font-medium"
              >
                <option value="Dr. Swati Tongale">Dr. Swati Tongale</option>
                <option value="Dr. Vipin Tongale">Dr. Vipin Tongale</option>
              </select>
            </div>
          </div>

          {/* Cover Image Upload Box */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Cover Image
            </h3>

            {formData.cover_image_url ? (
              <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center">
                <img
                  src={formData.cover_image_url}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, cover_image_url: '' })}
                  className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-sm transition"
                  title="Remove image"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 hover:border-slate-800 rounded-lg p-6 text-center cursor-pointer transition bg-gray-50/50 hover:bg-gray-50"
              >
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-700">
                  {uploadingImage ? 'Uploading image...' : 'Click or drag image to upload'}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  PNG, JPG or WebP up to 5MB (saves to blog-images)
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
