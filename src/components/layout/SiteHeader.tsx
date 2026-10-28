'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Synchronize document body class and lock background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <Link prefetch={false} href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <div className="nav-logo-badge"></div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">Shri Manmukund</div>
              <div className="nav-logo-sub">Hospital · Amravati</div>
            </div>
          </Link>

          <nav className="nav-menu">
            <Link prefetch={false} href="/services/"
              className={pathname === '/services/' || pathname === '/services' || pathname?.startsWith('/services/') ? 'active' : ''}
            >
              Services
            </Link>
            <Link prefetch={false} href="/doctors/"
              className={pathname?.startsWith('/doctors') || pathname?.startsWith('/dr-vipin') || pathname?.startsWith('/dr-swati') ? 'active' : ''}
            >
              Our Doctors
            </Link>
            <Link prefetch={false} href="/about/"
              className={pathname?.startsWith('/about') ? 'active' : ''}
            >
              About
            </Link>
            <Link prefetch={false} href="/achievements/"
              className={pathname?.startsWith('/achievements') ? 'active' : ''}
            >
              Achievements
            </Link>
            <Link prefetch={false} href="/knowledge/"
              className={pathname?.startsWith('/knowledge') ? 'active' : ''}
            >
              Knowledge
            </Link>
            <Link prefetch={false} href="/contact/"
              className={pathname?.startsWith('/contact') ? 'active' : ''}
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
            className={`nav-hamburger ${mobileOpen ? 'is-active' : ''}`}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="navDrawer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <div
        className={`nav-drawer ${mobileOpen ? 'nav-drawer--open' : ''}`}
        id="navDrawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        <div
          className="nav-drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        ></div>
        <aside className="nav-drawer-inner">
          <div className="nav-drawer-head">
            <div className="nav-drawer-head-logo"></div>
            <div className="nav-drawer-head-text">
              <div className="nav-drawer-head-name">Shri Manmukund</div>
              <div className="nav-drawer-head-sub">Hospital · Amravati</div>
            </div>
            <button
              type="button"
              className="nav-drawer-close"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-5 h-5 text-[#1B3A5B]" />
            </button>
          </div>

          <nav className="nav-drawer-menu" aria-label="Mobile Navigation">
            <Link
              prefetch={false}
              href="/services/"
              className={pathname?.startsWith('/services') ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              prefetch={false}
              href="/doctors/"
              className={
                pathname?.startsWith('/doctors') ||
                pathname?.startsWith('/dr-vipin') ||
                pathname?.startsWith('/dr-swati')
                  ? 'active'
                  : ''
              }
              onClick={() => setMobileOpen(false)}
            >
              Our Doctors
            </Link>
            <Link
              prefetch={false}
              href="/about/"
              className={pathname?.startsWith('/about') ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              prefetch={false}
              href="/achievements/"
              className={pathname?.startsWith('/achievements') ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              Achievements
            </Link>
            <Link
              prefetch={false}
              href="/knowledge/"
              className={pathname?.startsWith('/knowledge') ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              Knowledge
            </Link>
            <Link
              prefetch={false}
              href="/contact/"
              className={pathname?.startsWith('/contact') ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              Visit Us
            </Link>
          </nav>

          <div className="nav-drawer-cta">
            <Link
              prefetch={false}
              href="/contact/#book"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Book a consultation
            </Link>
            <a
              href="tel:+918208927917"
              className="btn btn-ghost"
              onClick={() => setMobileOpen(false)}
            >
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
