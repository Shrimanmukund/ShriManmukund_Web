import React from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, Shield, LogOut, Home } from 'lucide-react';

export const metadata = {
  title: 'Hospital Admin Portal | Shri Manmukund Hospital',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col font-sans">
      {/* Admin Top Header */}
      <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-amber-600 rounded text-white">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight">Shri Manmukund Hospital — Operations Admin</h1>
            <span className="text-xs text-gray-400">Restricted to Authorized Doctors & Hospital Staff</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/admin/enquiries/"
            className="px-3 py-1.5 rounded hover:bg-slate-800 transition flex items-center gap-1.5 text-gray-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquiries & Appointments</span>
          </Link>
          <Link
            href="/admin/testimonials/"
            className="px-3 py-1.5 rounded hover:bg-slate-800 transition flex items-center gap-1.5 text-gray-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Testimonial Moderation</span>
          </Link>
          <Link
            href="/"
            className="px-3 py-1.5 bg-slate-800 text-gray-300 hover:text-white rounded transition flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>View Live Site</span>
          </Link>
        </nav>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">{children}</main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-500 text-center">
        Shri Manmukund Hospital Operational Admin &bull; Powered by Supabase Backend
      </footer>
    </div>
  );
}
