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

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <Link prefetch={false} href="/" className="nav-logo">
            <div className="nav-logo-badge"></div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">Shri Manmukund</div>
              <div className="nav-logo-sub">Hospital · Amravati</div>
            </div>
          </Link>

          <nav className="nav-menu">
            <Link prefetch={false} href="/services/"
              className={pathname === '/services/' || pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>
            <Link prefetch={false} href="/doctors/"
              className={pathname.startsWith('/doctors') || pathname.startsWith('/dr-vipin') || pathname.startsWith('/dr-swati') ? 'active' : ''}
            >
              Our Doctors
            </Link>
            <Link prefetch={false} href="/about/"
              className={pathname.startsWith('/about') ? 'active' : ''}
            >
              About
            </Link>
            <Link prefetch={false} href="/achievements/"
              className={pathname.startsWith('/achievements') ? 'active' : ''}
            >
              Achievements
            </Link>
            <Link prefetch={false} href="/knowledge/"
              className={pathname.startsWith('/knowledge') ? 'active' : ''}
            >
              Knowledge
            </Link>
            <Link prefetch={false} href="/contact/"
              className={pathname.startsWith('/contact') ? 'active' : ''}
            >
              Visit Us
            </Link>
          </nav>

          <div className="nav-cta">
            <a href="tel:+918208927917" className="btn btn-ghost">
              Call · 8208927917
            </a>
            <Link prefetch={false} href="/contact/#book" className="btn btn-primary">
              Book visit
            </Link>
          </div>

          <button
            type="button"
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
            <Link prefetch={false} href="/services/" onClick={() => setMobileOpen(false)}>
              Services &amp; Units
            </Link>
            <Link prefetch={false} href="/doctors/" onClick={() => setMobileOpen(false)}>
              Our Doctors
            </Link>
            <Link prefetch={false} href="/dr-vipin/" onClick={() => setMobileOpen(false)} style={{ paddingLeft: '2rem', fontSize: '0.875rem' }}>
              ↳ Dr. Vipin Tongale
            </Link>
            <Link prefetch={false} href="/dr-swati/" onClick={() => setMobileOpen(false)} style={{ paddingLeft: '2rem', fontSize: '0.875rem' }}>
              ↳ Dr. Swati Tongale
            </Link>
            <Link prefetch={false} href="/about/" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link prefetch={false} href="/achievements/" onClick={() => setMobileOpen(false)}>
              Achievements &amp; Recognition
            </Link>
            <Link prefetch={false} href="/knowledge/" onClick={() => setMobileOpen(false)}>
              Knowledge Hub
            </Link>
            <Link prefetch={false} href="/patients/" onClick={() => setMobileOpen(false)}>
              Patient Resources
            </Link>
            <Link prefetch={false} href="/contact/" onClick={() => setMobileOpen(false)}>
              Visit &amp; OPD Hours
            </Link>
          </nav>

          <div className="nav-drawer-cta">
            <Link prefetch={false} href="/contact/#book"
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
