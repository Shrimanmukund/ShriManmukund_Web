'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Calendar, MessageSquare, Shield, LogOut, Home, UserCheck, Mail, BookOpen } from 'lucide-react';

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  // If on login page, don't show the admin header bar
  if (pathname.startsWith('/admin/login')) {
    return null;
  }

  const handleLogout = async () => {
    if (confirm('Are you sure you want to sign out of the Admin Portal?')) {
      setLoggingOut(true);
      try {
        await fetch('/api/admin/auth/logout', { method: 'POST' });
        router.push('/admin/login/');
        router.refresh();
      } catch (err) {
        window.location.href = '/admin/login/';
      } finally {
        setLoggingOut(false);
      }
    }
  };

  const isEnquiries = pathname.startsWith('/admin/enquiries') || pathname === '/admin' || pathname === '/admin/';
  const isTestimonials = pathname.startsWith('/admin/testimonials');
  const isSubscriptions = pathname.startsWith('/admin/subscriptions');
  const isArticles = pathname.startsWith('/admin/articles');

  return (
    <header className="bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 shadow-md">
      {/* Left Branding */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-600 rounded-xl text-white shadow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base leading-tight">Shri Manmukund Hospital</h1>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 text-[10px] font-semibold tracking-wider uppercase border border-slate-700">
                Staff Admin
              </span>
            </div>
            <span className="text-[11px] text-gray-400">Operations & Patient Consultation Portal</span>
          </div>
        </div>

        {/* Mobile Logout */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="md:hidden p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition"
          title="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Center & Right Navigation */}
      <nav className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm w-full md:w-auto justify-center md:justify-end">
        <Link
          href="/admin/enquiries/"
          className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
            isEnquiries
              ? 'bg-amber-600 text-white shadow-sm font-semibold'
              : 'text-gray-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Enquiries & Appointments</span>
        </Link>

        <Link
          href="/admin/testimonials/"
          className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
            isTestimonials
              ? 'bg-amber-600 text-white shadow-sm font-semibold'
              : 'text-gray-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Testimonial Moderation</span>
        </Link>

        <Link
          href="/admin/subscriptions/"
          className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
            isSubscriptions
              ? 'bg-amber-600 text-white shadow-sm font-semibold'
              : 'text-gray-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span>Newsletter Subscriptions</span>
        </Link>

        <Link
          href="/admin/articles/"
          className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
            isArticles
              ? 'bg-amber-600 text-white shadow-sm font-semibold'
              : 'text-gray-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Articles & Blogs</span>
        </Link>

        <Link
          href="/"
          target="_blank"
          className="px-3 py-1.5 bg-slate-800 text-gray-300 hover:text-white rounded-lg transition flex items-center gap-1.5 border border-slate-700"
        >
          <Home className="w-4 h-4" />
          <span>Live Site</span>
        </Link>

        {/* Desktop Logout Button */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-red-300 hover:text-white hover:bg-red-900/40 rounded-lg transition font-medium border border-red-900/30 ml-2"
        >
          <LogOut className="w-4 h-4" />
          <span>{loggingOut ? 'Signing out...' : 'Sign out'}</span>
        </button>
      </nav>
    </header>
  );
}
