'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-badge"></div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">Shri Manmukund</div>
              <div className="nav-logo-sub">Hospital · Amravati</div>
            </div>
          </Link>

          <nav className="nav-menu">
            <Link
              href="/services/"
              className={pathname === '/services/' || pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>
            <Link
              href="/dr-vipin/"
              className={pathname.startsWith('/dr-vipin') || pathname.startsWith('/dr-swati') ? 'active' : ''}
            >
              Our Doctors
            </Link>
            <Link
              href="/about/"
              className={pathname.startsWith('/about') ? 'active' : ''}
            >
              About
            </Link>
            <Link
              href="/knowledge/"
              className={pathname.startsWith('/knowledge') ? 'active' : ''}
            >
              Knowledge
            </Link>
            <Link
              href="/contact/"
              className={pathname.startsWith('/contact') ? 'active' : ''}
            >
              Visit Us
            </Link>
          </nav>

          <div className="nav-cta">
            <a href="tel:+918208927917" className="btn btn-ghost">
              Call · 8208927917
            </a>
            <Link href="/contact/#book" className="btn btn-primary">
              Book visit
            </Link>
          </div>

          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <div className={`nav-drawer ${mobileOpen ? 'nav-drawer--open' : ''}`} id="navDrawer">
        <div
          className="nav-drawer-overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
        <aside className="nav-drawer-inner">
          <div className="nav-drawer-head">
            <div className="nav-drawer-head-logo"></div>
            <div className="nav-drawer-head-text">
              <div className="nav-drawer-head-name">Shri Manmukund</div>
              <div className="nav-drawer-head-sub">Hospital · Amravati</div>
            </div>
          </div>

          <nav className="nav-drawer-menu">
            <Link href="/services/" onClick={() => setMobileOpen(false)}>
              Services &amp; Units
            </Link>
            <Link href="/dr-vipin/" onClick={() => setMobileOpen(false)}>
              Dr. Vipin Tongale
            </Link>
            <Link href="/dr-swati/" onClick={() => setMobileOpen(false)}>
              Dr. Swati Tongale
            </Link>
            <Link href="/about/" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/knowledge/" onClick={() => setMobileOpen(false)}>
              Knowledge Hub
            </Link>
            <Link href="/patients/" onClick={() => setMobileOpen(false)}>
              Patient Resources
            </Link>
            <Link href="/contact/" onClick={() => setMobileOpen(false)}>
              Visit &amp; OPD Hours
            </Link>
          </nav>

          <div className="nav-drawer-cta">
            <Link
              href="/contact/#book"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Book a consultation
            </Link>
            <a href="tel:+918208927917" className="btn btn-ghost">
              Call · 8208927917
            </a>
          </div>

          <div className="nav-drawer-contact">
            24 hour emergency
            <strong>+91 94054 04492</strong>
          </div>
        </aside>
      </div>
    </>
  );
};
