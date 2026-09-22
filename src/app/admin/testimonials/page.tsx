'use client';

import React, { useState } from 'react';
import { Star, ShieldCheck, Check, X, Eye, EyeOff } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data/content-store';
import type { TestimonialData } from '@/types/content';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>(TESTIMONIALS);

  const toggleApproval = (index: number) => {
    setTestimonials((prev) =>
      prev.map((item, i) => (i === index ? { ...item, isApproved: !item.isApproved } : item))
    );
  };

  const togglePermission = (index: number) => {
    setTestimonials((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, displayPermissionGranted: !item.displayPermissionGranted } : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Patient Testimonial Moderation & Consent</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Moderate submitted patient feedback and enforce the <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">display_permission_granted</code> consent compliance rule before rendering on public pages.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
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
              {testimonials.map((t, idx) => (
                <tr key={idx} className="hover:bg-gray-50/80 transition">
                  <td className="p-4">
                    <strong className="text-gray-900 text-sm block">{t.patientName}</strong>
                    <span className="text-gray-500">{t.city}</span>
                    <span className="block text-[11px] text-gray-400 mt-0.5">{t.serviceName}</span>
                  </td>

                  <td className="p-4 max-w-md">
                    <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      &ldquo;{t.reviewText}&rdquo;
                    </p>
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 uppercase font-semibold text-[10px]">
                      {t.source}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => togglePermission(idx)}
                      className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition ${
                        t.displayPermissionGranted
                          ? 'bg-green-50 text-green-700 border border-green-300'
                          : 'bg-red-50 text-red-700 border border-red-300'
                      }`}
                    >
                      {t.displayPermissionGranted ? (
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
                      onClick={() => toggleApproval(idx)}
                      className={`px-3 py-1.5 rounded font-semibold text-xs flex items-center gap-1.5 transition ${
                        t.isApproved && t.displayPermissionGranted
                          ? 'bg-slate-900 text-white hover:bg-slate-800'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t.isApproved && t.displayPermissionGranted ? (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
