'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { Mail, Calendar, CheckCircle2, UserX, Search, RefreshCw, Inbox } from 'lucide-react';

interface SubscriptionItem {
  id: string;
  email: string;
  source_page?: string;
  status: 'active' | 'unsubscribed';
  created_at: string;
}

export default function AdminSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/subscriptions/');
      const data = await res.json();
      if (data.success && Array.isArray(data.subscriptions)) {
        setSubscriptions(data.subscriptions);
      }
    } catch (err) {
      console.error('Failed to fetch subscriptions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const toggleStatus = async (id: string, currentStatus: SubscriptionItem['status']) => {
    const newStatus = currentStatus === 'active' ? 'unsubscribed' : 'active';
    setSubscriptions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    try {
      await fetch('/api/admin/subscriptions/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (err) {
      console.error('Failed to update subscription status:', err);
    }
  };

  const filtered = subscriptions.filter((sub) => {
    const matchesSearch = (sub.email || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header with Search and Refresh */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-600" />
            <span>Newsletter Subscriptions</span>
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time live subscribers from Supabase <code className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-800">newsletter_subscriptions</code> table.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Search subscriber email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2" />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs font-semibold px-3 py-1.5 border border-gray-300 rounded-lg bg-white focus:outline-none"
          >
            <option value="all">All ({subscriptions.length})</option>
            <option value="active">Active ({subscriptions.filter((s) => s.status === 'active').length})</option>
            <option value="unsubscribed">Unsubscribed ({subscriptions.filter((s) => s.status === 'unsubscribed').length})</option>
          </select>

          <button
            onClick={fetchSubscriptions}
            disabled={loading}
            className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 transition"
            title="Refresh subscriptions"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase tracking-wider">
                <th className="p-4">Subscriber Email</th>
                <th className="p-4">Source Page</th>
                <th className="p-4">Subscribed Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {loading && subscriptions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-500">
                    <RefreshCw className="w-6 h-6 animate-spin text-amber-600 mx-auto mb-2" />
                    <span>Connecting to Supabase...</span>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-400">
                    <Inbox className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-600 text-sm">No newsletter subscriptions in Supabase yet.</p>
                    <p className="text-xs text-gray-400 mt-1">
                      When users subscribe on the Knowledge Hub page, their emails will appear here live.
                    </p>
                  </td>
                </tr>
              ) : (
                filtered.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50/80 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-xs">
                          {sub.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <strong className="text-gray-900 block text-sm font-medium">
                            {sub.email}
                          </strong>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-gray-500 font-mono text-[11px]">
                      {sub.source_page || '/knowledge/'}
                    </td>

                    <td className="p-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{new Date(sub.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          sub.status === 'active'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-gray-100 text-gray-600 border border-gray-300'
                        }`}
                      >
                        {sub.status === 'active' ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <UserX className="w-3 h-3 text-gray-400" />
                            <span>Unsubscribed</span>
                          </>
                        )}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => toggleStatus(sub.id, sub.status)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                          sub.status === 'active'
                            ? 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 border border-gray-300'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300'
                        }`}
                      >
                        {sub.status === 'active' ? 'Mark Unsubscribed' : 'Reactivate'}
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
