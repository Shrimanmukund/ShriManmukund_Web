import React from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';

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
      {/* Admin Top Navigation Header (hidden on login page) */}
      <AdminHeader />

      {/* Main Admin Content */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">{children}</main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-500 text-center">
        Shri Manmukund Hospital Operational Admin &bull; Restricted Medical Portal
      </footer>
    </div>
  );
}
