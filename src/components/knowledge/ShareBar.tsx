'use client';

import React, { useState, useEffect } from 'react';

interface ShareBarProps {
  title: string;
}

export function ShareBar({ title }: ShareBarProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const hospitalEmail = 'info@shrimanmukundhospital.com';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowEmailModal(false);
      }
    };
    if (showEmailModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEmailModal]);

  const getUrl = () => {
    if (typeof window !== 'undefined' && window.location.href) {
      return window.location.href;
    }
    return currentUrl || 'https://shrimanmukundhospital.com';
  };

  const shareText = `${title} | Shri Manmukund Hospital`;

  const handleShareWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const urlToShare = getUrl();
    const waUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${urlToShare}`)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = (e: React.MouseEvent) => {
    e.preventDefault();
    const urlToShare = getUrl();
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(fbUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareTwitter = (e: React.MouseEvent) => {
    e.preventDefault();
    const urlToShare = getUrl();
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(urlToShare)}`;
    window.open(xUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleOpenEmailModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleCopyHospitalEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(hospitalEmail);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = hospitalEmail;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleCopy = async () => {
    const urlToShare = getUrl();
    if (!urlToShare) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(urlToShare);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = urlToShare;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  const urlToShare = getUrl();
  const emailSubject = encodeURIComponent(`Inquiry regarding: ${title} | Shri Manmukund Hospital`);
  const emailBody = encodeURIComponent(
    `Hello Shri Manmukund Hospital Team,\n\nI have an inquiry regarding the clinical article:\n"${title}"\n\nArticle link:\n${urlToShare}\n\nMy Message:\n`
  );
  const mailtoHospitalUrl = `mailto:${hospitalEmail}?subject=${emailSubject}&body=${emailBody}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${hospitalEmail}&su=${emailSubject}&body=${emailBody}`;
  const shareFriendUrl = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(
    `I thought you might find this medical guide from Shri Manmukund Hospital helpful:\n\n${title}\n\nRead the complete guide here:\n${urlToShare}`
  )}`;

  return (
    <div className="share-bar" aria-label="Share article section">
      <span className="share-label">Share this article</span>
      <div className="share-buttons" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {/* WhatsApp */}
        <button
          type="button"
          onClick={handleShareWhatsApp}
          className="share-btn"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        {/* Email */}
        <button
          type="button"
          onClick={handleOpenEmailModal}
          className="share-btn"
          aria-haspopup="dialog"
          aria-expanded={showEmailModal}
          aria-label="Email hospital regarding this article"
          title={`Email Hospital (${hospitalEmail})`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </button>

        {/* Copy Link */}
        <button
          type="button"
          className="share-btn"
          onClick={handleCopy}
          aria-label={copied ? 'Link copied to clipboard' : 'Copy article link'}
          title={copied ? 'Link copied!' : 'Copy link'}
          style={copied ? { background: '#6B7F5F', color: '#FFFFFF', borderColor: '#6B7F5F' } : {}}
        >
          {copied ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          )}
        </button>

        {/* Facebook */}
        <button
          type="button"
          className="share-btn"
          onClick={handleShareFacebook}
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>

        {/* X / Twitter */}
        <button
          type="button"
          className="share-btn"
          onClick={handleShareTwitter}
          aria-label="Share on X (Twitter)"
          title="Share on X (Twitter)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>

        {/* Copied Toast Indicator */}
        {copied && (
          <div
            role="status"
            aria-live="polite"
            style={{
              position: 'absolute',
              bottom: '125%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1B3A5B',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '5px 12px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(27,58,91,0.25)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            ✓ Link copied to clipboard!
          </div>
        )}
      </div>

      {/* Hospital Email Modal Dialog */}
      {showEmailModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hospital-email-modal-title"
          onClick={() => setShowEmailModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(27, 42, 33, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '460px',
              width: '100%',
              boxShadow: '0 24px 48px -12px rgba(27, 42, 33, 0.35)',
              border: '1px solid #E8E4DA',
              overflow: 'hidden',
              position: 'relative',
              textAlign: 'left',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1B3A5B 0%, #2D6A4F 100%)',
                padding: '1.25rem 1.5rem',
                color: '#FFFFFF',
                position: 'relative',
              }}
            >
              <button
                type="button"
                onClick={() => setShowEmailModal(false)}
                aria-label="Close dialog"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.18)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  lineHeight: 1,
                  transition: 'background 0.2s',
                }}
              >
                ✕
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '7px',
                    background: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9 }}>
                  Shri Manmukund Hospital
                </span>
              </div>

              <h3
                id="hospital-email-modal-title"
                style={{
                  margin: 0,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--serif)',
                  color: '#FFFFFF',
                }}
              >
                Hospital Email &amp; Inquiry
              </h3>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.8125rem', opacity: 0.9, lineHeight: 1.4, color: '#E8E4DA' }}>
                Reach our clinical team directly with queries about this guide or treatment options.
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Article reference note */}
              <div
                style={{
                  background: '#FBF7EC',
                  border: '1px solid #E8E4DA',
                  borderRadius: '10px',
                  padding: '0.625rem 0.875rem',
                }}
              >
                <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#8A7A68', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Referenced Guide
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2D2A20', marginTop: '0.2rem' }}>
                  {title}
                </div>
              </div>

              {/* Hospital email display & copy */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#6B7F5F',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.375rem',
                  }}
                >
                  Official Hospital Email Address
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#F4F1EA',
                    border: '1px solid #DDD7C9',
                    borderRadius: '10px',
                    padding: '0.5rem 0.75rem',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1B3A5B',
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                    }}
                  >
                    {hospitalEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyHospitalEmail}
                    style={{
                      background: copiedEmail ? '#2D6A4F' : '#FFFFFF',
                      color: copiedEmail ? '#FFFFFF' : '#2D2A20',
                      border: '1px solid #D4A373',
                      borderRadius: '6px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                    }}
                  >
                    {copiedEmail ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.25rem' }}>
                <a
                  href={mailtoHospitalUrl}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: '#1B3A5B',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(27, 58, 91, 0.2)',
                    transition: 'background 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Open Email Client (To: {hospitalEmail})</span>
                </a>

                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: '#FFFFFF',
                    color: '#1B3A5B',
                    border: '1.5px solid #1B3A5B',
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  <span>Open in Gmail (Web Browser)</span>
                </a>
              </div>

              {/* Forward to friend option */}
              <div style={{ borderTop: '1px solid #E8E4DA', paddingTop: '0.75rem', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#666' }}>
                  Want to recommend this guide to someone else?{' '}
                  <a
                    href={shareFriendUrl}
                    style={{ color: '#2D6A4F', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Share via Blank Email
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
