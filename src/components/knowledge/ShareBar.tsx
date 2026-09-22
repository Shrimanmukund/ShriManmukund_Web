'use client';

import React, { useState } from 'react';

interface ShareBarProps {
  title: string;
}

export function ShareBar({ title }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="share-bar">
      <span className="share-label">Share this article</span>
      <div className="share-buttons">
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            title + ' - Shri Manmukund Hospital'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          aria-label="Share on WhatsApp"
        >
          W
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(
            title
          )}&body=Read%20this%20article%20at%20Shri%20Manmukund%20Hospital`}
          className="share-btn"
          aria-label="Share via Email"
        >
          @
        </a>
        <button
          type="button"
          className="share-btn"
          onClick={handleCopy}
          aria-label="Copy link"
          title={copied ? 'Link copied!' : 'Copy link'}
        >
          {copied ? '✓' : '⚭'}
        </button>
      </div>
    </div>
  );
}
