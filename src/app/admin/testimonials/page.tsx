'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { Star, Check, X, Eye, EyeOff, RefreshCw, Inbox } from 'lucide-react';
import type { TestimonialData } from '@/types/content';

interface TestimonialRow {
  id: string;
  patient_name: string;
  city?: string;
  service_category_slug?: string;
  rating: number;
  review_text: string;
  review_date?: string;
  source: string;
  display_permission_granted: boolean;
  is_approved: boolean;
  is_featured: boolean;
  created_at: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/testimonials/');
      const data = await res.json();
      if (data.success && Array.isArray(data.testimonials)) {
        setTestimonials(data.testimonials);
      }
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const toggleApproval = async (id: string, current: boolean) => {
    const nextVal = !current;
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, is_approved: nextVal } : item))
    );
    try {
      await fetch('/api/admin/testimonials/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_approved: nextVal }),
      });
    } catch (err) {
      console.error('Failed to toggle approval:', err);
    }
  };

  const togglePermission = async (id: string, current: boolean) => {
    const nextVal = !current;
    setTestimonials((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, display_permission_granted: nextVal } : item
      )
    );
    try {
      await fetch('/api/admin/testimonials/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, display_permission_granted: nextVal }),
      });
    } catch (err) {
      console.error('Failed to toggle permission:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Patient Testimonial Moderation & Consent</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time testimonials from Supabase <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">testimonials</code> table. Enforce consent before displaying publicly.
          </p>
        </div>

        <button
          onClick={fetchTestimonials}
          disabled={loading}
          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 transition flex items-center gap-1.5 text-xs font-semibold"
          title="Refresh testimonials"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase tracking-wider">
                <th className="p-4">Patient & Location</th>
                <th className="p-4">Rating & Review Copy</th>
                <th className="p-4">Source</th>
                <th className="p-4">Consent Granted</th>
                <th className="p-4">Status & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {loading && testimonials.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-500">
                    <RefreshCw className="w-6 h-6 animate-spin text-amber-600 mx-auto mb-2" />
                    <span>Connecting to Supabase...</span>
                  </td>
                </tr>
              ) : testimonials.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-400">
                    <Inbox className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-600 text-sm">No testimonials in Supabase yet.</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Patient reviews seeded in Supabase or submitted will appear here for moderation.
                    </p>
                  </td>
                </tr>
              ) : (
                testimonials.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50/80 transition">
                    <td className="p-4">
                      <strong className="text-gray-900 text-sm block">{t.patient_name}</strong>
                      <span className="text-gray-500">{t.city || 'Amravati'}</span>
                      <span className="block text-[11px] text-gray-400 mt-0.5">{t.service_category_slug || 'General Care'}</span>
                    </td>

                    <td className="p-4 max-w-md">
                      <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">
                        &ldquo;{t.review_text}&rdquo;
                      </p>
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 uppercase font-semibold text-[10px]">
                        {t.source}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => togglePermission(t.id, t.display_permission_granted)}
                        className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition ${
                          t.display_permission_granted
                            ? 'bg-green-50 text-green-700 border border-green-300'
                            : 'bg-red-50 text-red-700 border border-red-300'
                        }`}
                      >
                        {t.display_permission_granted ? (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            <span>Consent Active</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>No Consent</span>
                          </>
                        )}
                      </button>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => toggleApproval(t.id, t.is_approved)}
                        className={`px-3 py-1.5 rounded font-semibold text-xs flex items-center gap-1.5 transition ${
                          t.is_approved && t.display_permission_granted
                            ? 'bg-slate-900 text-white hover:bg-slate-800'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {t.is_approved && t.display_permission_granted ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span>Published</span>
                          </>
                        ) : (
                          <>
                            <X className="w-3.5 h-3.5 text-red-500" />
                            <span>Hidden / Draft</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
