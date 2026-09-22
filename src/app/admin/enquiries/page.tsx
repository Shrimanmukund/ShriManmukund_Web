'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, Clock, Filter, CheckCircle, Clock3, Archive, User } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface EnquiryItem {
  id: string;
  patient_name: string;
  phone: string;
  email?: string;
  age?: string;
  preferred_date?: string;
  preferred_time_slot?: string;
  doctor_slug?: string;
  service_category_slug?: string;
  condition_slug?: string;
  reason_for_visit?: string;
  message?: string;
  status: 'new' | 'contacted' | 'scheduled' | 'archived';
  created_at: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([
    {
      id: 'demo-1',
      patient_name: 'Gajanan Deshmukh',
      age: '48',
      phone: '9822334455',
      email: 'gajanan@example.com',
      preferred_date: '2026-09-20',
      preferred_time_slot: 'afternoon',
      doctor_slug: 'dr-vipin',
      service_category_slug: 'anorectal-care',
      condition_slug: 'anal-fistula',
      reason_for_visit: 'Anal Fistula',
      message: 'Looking for Ksharsutra treatment consultation for recurrent fistula.',
      status: 'new',
      created_at: '2026-09-18T09:30:00Z',
    },
    {
      id: 'demo-2',
      patient_name: 'Pooja Kulkarni',
      age: '32',
      phone: '9423112233',
      email: 'pooja@example.com',
      preferred_date: '2026-09-21',
      preferred_time_slot: 'evening',
      doctor_slug: 'dr-swati',
      service_category_slug: 'female-care',
      condition_slug: 'female-proctology',
      reason_for_visit: 'Female Care Concern',
      message: 'Need consultation for postpartum piles pain with Dr. Swati.',
      status: 'contacted',
      created_at: '2026-09-17T14:15:00Z',
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    async function fetchEnquiries() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (data && data.length > 0 && !error) {
          setEnquiries(data as EnquiryItem[]);
        }
      } catch (err) {
        // Fallback to initial mock if Supabase is offline
      } finally {
        setLoading(false);
      }
    }
    fetchEnquiries();
  }, []);

  const updateStatus = async (id: string, newStatus: EnquiryItem['status']) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    try {
      const supabase = createClient();
      await (supabase.from('enquiries') as any).update({ status: newStatus }).eq('id', id);
    } catch {
      // Quietly ignore if offline demo
    }
  };

  const filteredEnquiries =
    filterStatus === 'all'
      ? enquiries
      : enquiries.filter((e) => e.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Patient Enquiries & Appointment Requests</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Operational dashboard to track and update patient consultation submissions.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            className="text-xs font-semibold px-3 py-1.5 border border-gray-300 rounded bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Enquiries ({enquiries.length})</option>
            <option value="new">New ({enquiries.filter((e) => e.status === 'new').length})</option>
            <option value="contacted">Contacted ({enquiries.filter((e) => e.status === 'contacted').length})</option>
            <option value="scheduled">Scheduled ({enquiries.filter((e) => e.status === 'scheduled').length})</option>
            <option value="archived">Archived ({enquiries.filter((e) => e.status === 'archived').length})</option>
          </select>
        </div>
      </div>

      {/* Enquiries List */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase tracking-wider">
                <th className="p-4">Patient Info</th>
                <th className="p-4">Doctor & Department</th>
                <th className="p-4">Preferred Slot</th>
                <th className="p-4">Symptoms / Note</th>
                <th className="p-4">Status & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {filteredEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-gray-50/80 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <strong className="text-gray-900 text-sm block">{enq.patient_name}</strong>
                      {enq.age && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200">
                          {enq.age} yrs
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                      <Phone className="w-3.5 h-3.5 text-green-600" />
                      <a href={`tel:${enq.phone}`} className="hover:underline font-medium text-gray-900">
                        {enq.phone}
                      </a>
                    </div>
                    {enq.email && (
                      <div className="flex items-center gap-1 text-gray-400 mt-0.5">
                        <Mail className="w-3 h-3" />
                        <span>{enq.email}</span>
                      </div>
                    )}
                  </td>

                  <td className="p-4">
                    <span className="font-semibold text-gray-900 block">
                      {enq.doctor_slug === 'dr-swati'
                        ? 'Dr. Swati Tongale'
                        : enq.doctor_slug === 'dr-vipin'
                        ? 'Dr. Vipin Tongale'
                        : 'Any Specialist'}
                    </span>
                    <span className="text-gray-500 text-[11px]">
                      {enq.service_category_slug || 'General Consultation'}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="space-y-1">
                      <span className="block font-medium">{enq.preferred_date || 'Flexible'}</span>
                      <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] capitalize">
                        {enq.preferred_time_slot || 'Afternoon'}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 max-w-xs">
                    <p className="text-gray-600 line-clamp-3 italic">
                      &ldquo;{enq.message || 'No description provided.'}&rdquo;
                    </p>
                  </td>

                  <td className="p-4">
                    <select
                      className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                        enq.status === 'new'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : enq.status === 'contacted'
                          ? 'bg-blue-50 text-blue-800 border-blue-300'
                          : enq.status === 'scheduled'
                          ? 'bg-green-50 text-green-800 border-green-300'
                          : 'bg-gray-50 text-gray-600 border-gray-300'
                      }`}
                      value={enq.status}
                      onChange={(e) => updateStatus(enq.id, e.target.value as any)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="archived">Archived</option>
                    </select>
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
