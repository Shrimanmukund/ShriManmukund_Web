'use client';

import React, { useState, useEffect } from 'react';

interface ShareBarProps {
  title: string;
}

export function ShareBar({ title }: ShareBarProps) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const shareText = `${title} — Shri Manmukund Hospital`;

  const handleCopy = async () => {
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    if (!currentUrl) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
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
      console.error('Failed to copy: ', err);
    }
  };

  const openSharePopup = (shareUrl: string) => {
    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${shareText}\n${url}`
  )}`;

  const emailUrl = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(
    `I thought you might find this article from Shri Manmukund Hospital helpful:\n\n${title}\n\nRead the complete article here:\n${url}`
  )}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(url)}`;

  return (
    <div className="share-bar">
      <span className="share-label">Share this article</span>
      <div className="share-buttons" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.057-1.127-.08-.276-.088-.63-.207-1.077-.4-1.895-.818-3.128-2.736-3.223-2.863-.095-.127-.768-1.021-.768-1.948 0-.927.487-1.382.66-1.571.173-.189.378-.236.504-.236.126 0 .252.002.362.007.116.006.271-.044.425.326.158.378.536 1.309.583 1.404.047.095.079.205.016.331-.063.126-.095.205-.189.315-.095.11-.199.246-.284.331-.095.095-.194.198-.083.388.11.19.49 1.135 1.05 1.634.721.642 1.328.84 1.517.935.19.095.3.079.41-.047.11-.126.473-.551.6-.74.126-.19.252-.158.425-.095.173.063 1.103.52 1.292.615.19.095.315.142.362.221.047.079.047.457-.097.862zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.175L2 22l4.966-1.398A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href={emailUrl}
          className="share-btn"
          aria-label="Share via Email"
          title="Share via Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          className="share-btn"
          onClick={handleCopy}
          aria-label="Copy link"
          title={copied ? 'Link copied!' : 'Copy link'}
          style={copied ? { background: 'var(--sage)', color: 'var(--white)', borderColor: 'var(--sage)' } : {}}
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
          onClick={() => openSharePopup(facebookUrl)}
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
          onClick={() => openSharePopup(twitterUrl)}
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
            style={{
              position: 'absolute',
              bottom: '120%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1B3A5B',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              pointerEvents: 'none',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            ✓ Link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}
