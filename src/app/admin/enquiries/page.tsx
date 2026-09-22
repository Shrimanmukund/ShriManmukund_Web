'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  Clock,
  Filter,
  CheckCircle,
  Clock3,
  Archive,
  User,
  Search,
  RefreshCw,
  Activity,
  UserCheck,
  Inbox,
} from 'lucide-react';

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
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/enquiries');
      const data = await res.json();
      if (data.success && Array.isArray(data.enquiries)) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const updateStatus = async (id: string, newStatus: EnquiryItem['status']) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    try {
      await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      (e.patient_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.phone || '').includes(searchTerm) ||
      (e.reason_for_visit && e.reason_for_visit.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filterStatus === 'all' || e.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === 'new').length;
  const contactedCount = enquiries.filter((e) => e.status === 'contacted').length;
  const scheduledCount = enquiries.filter((e) => e.status === 'scheduled').length;

  return (
    <div className="space-y-6">
      {/* Metric Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 font-medium">Total Bookings</span>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">{totalCount}</div>
          </div>
          <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl">
            <Activity className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-amber-700 font-medium">New / Pending</span>
            <div className="text-2xl font-bold text-amber-900 mt-0.5">{newCount}</div>
          </div>
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-blue-700 font-medium">Contacted</span>
            <div className="text-2xl font-bold text-blue-900 mt-0.5">{contactedCount}</div>
          </div>
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <Phone className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-emerald-700 font-medium">Scheduled</span>
            <div className="text-2xl font-bold text-emerald-900 mt-0.5">{scheduledCount}</div>
          </div>
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Patient Enquiries & Appointment Requests</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time live data directly from Supabase <code className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-800">enquiries</code> table.
          </p>
        </div>

        {/* Search, Filter & Refresh Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <input
              type="text"
              placeholder="Search patient, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2" />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              className="text-xs font-semibold px-3 py-1.5 border border-gray-300 rounded-lg bg-white focus:outline-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All ({enquiries.length})</option>
              <option value="new">New ({newCount})</option>
              <option value="contacted">Contacted ({contactedCount})</option>
              <option value="scheduled">Scheduled ({scheduledCount})</option>
              <option value="archived">Archived ({enquiries.filter((e) => e.status === 'archived').length})</option>
            </select>
          </div>

          <button
            onClick={fetchEnquiries}
            disabled={loading}
            className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 transition"
            title="Refresh from Supabase"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Enquiries List */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
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
              {loading && enquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-500">
                    <RefreshCw className="w-6 h-6 animate-spin text-amber-600 mx-auto mb-2" />
                    <span>Connecting to Supabase...</span>
                  </td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-400">
                    <Inbox className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-600 text-sm">No enquiries found in Supabase.</p>
                    <p className="text-xs text-gray-400 mt-1">
                      When a patient submits an appointment form on the website, it will appear here immediately.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((enq) => (
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
                        {enq.service_category_slug || enq.reason_for_visit || 'General Consultation'}
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
                      {enq.reason_for_visit && (
                        <span className="inline-block mb-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-medium border border-amber-200">
                          {enq.reason_for_visit}
                        </span>
                      )}
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
