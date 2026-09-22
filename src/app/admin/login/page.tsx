'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, Lock, Mail, AlertCircle, ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

function AdminLoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get('next') || '/admin/enquiries/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setStatus('error');
      setErrorMessage('Please enter both your authorized email and password.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Invalid email or password.');
      }

      setStatus('success');
      setTimeout(() => {
        router.push(nextUrl);
        router.refresh();
      }, 400);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xl relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700" />

        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md border border-slate-800">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Staff Portal Login</h2>
          <p className="text-xs text-gray-500 mt-1.5">
            Shri Manmukund Hospital Operational Admin & Medical Dashboard
          </p>
        </div>

        {/* Error Alert */}
        {status === 'error' && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success Alert */}
        {status === 'success' && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Authentication verified. Loading dashboard...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Staff Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="admin@shrimanmukundhospital.com"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Secure Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-60"
          >
            <span>
              {status === 'loading'
                ? 'Authenticating...'
                : status === 'success'
                ? 'Redirecting...'
                : 'Sign in to Dashboard'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Credentials guidance for staff */}
        <div className="mt-8 pt-5 border-t border-gray-100 text-center space-y-1.5">
          <p className="text-[11px] font-medium text-gray-600">
            Authorised for Dr. Vipin Tongale, Dr. Swati Tongale & Hospital Administration.
          </p>
          <p className="text-[10px] text-gray-400">
            Default credentials: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 font-mono">admin@shrimanmukundhospital.com</code> / <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 font-mono">Manmukund@2026</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading staff portal...</div>
        </div>
      }
    >
      <AdminLoginFormContent />
    </Suspense>
  );
}
