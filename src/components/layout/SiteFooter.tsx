import React from 'react';
import Link from 'next/link';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-mark">
              <div className="footer-logo"></div>
              <div className="footer-brand-text">
                <div className="footer-brand-name">Shri Manmukund</div>
                <div className="footer-brand-sub">HOSPITAL · AMRAVATI</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              A hospital where classical Ayurvedic surgical practice meets modern medicine, without either being second. In Amravati since 2011.
            </p>
          </div>

          <div className="footer-col">
            <h4>PRACTICE</h4>
            <ul>
              <li>
                <Link href="/services/anorectal-care/">Anorectal Care</Link>
              </li>
              <li>
                <Link href="/services/general-surgery/">General Surgery</Link>
              </li>
              <li>
                <Link href="/services/ksharsutra/">Ksharsutra</Link>
              </li>
              <li>
                <Link href="/services/ayurveda-panchakarma/">Ayurveda</Link>
              </li>
              <li>
                <Link href="/services/female-care/">Female Care</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>KNOWLEDGE</h4>
            <ul>
              <li>
                <Link href="/knowledge/playbooks/">Playbooks</Link>
              </li>
              <li>
                <Link href="/knowledge/articles/">Articles</Link>
              </li>
              <li>
                <Link href="/achievements/">Research</Link>
              </li>
              <li>
                <Link href="/knowledge/insights/">Insights</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>VISIT US</h4>
            <ul>
              <li>
                <a href="tel:+918208927917">Appt · 8208927917</a>
              </li>
              <li>
                <a href="tel:+919405404492">Emergency · 9405404492</a>
              </li>
              <li>
                <Link href="/contact/">Bapatwadi, Amravati</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-tagline">
          <div className="footer-tagline-devanagari">श्री मनमुकुंद रुग्णालय</div>
          <div className="footer-tagline-text">
            ADVANCED PROCTOLOGY &amp; INTEGRATED CARE
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Shri Manmukund Hospital</span>
          <span>
            <Link href="/legal/privacy-policy/">Privacy</Link> ·{' '}
            <Link href="/legal/terms-of-use/">Terms</Link> ·{' '}
            <Link href="/legal/medical-disclaimer/">Medical Disclaimer</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

