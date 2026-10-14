'use client';

import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';

interface ArticleHeroImageProps {
  coverImageUrl?: string | null;
  title: string;
  devanagariWatermark: string;
}

export function ArticleHeroImage({
  coverImageUrl,
  title,
  devanagariWatermark,
}: ArticleHeroImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="article-hero-visual">
        <div
          className={`article-hero-visual-inner ${
            coverImageUrl ? 'has-image' : ''
          }`}
        >
          {coverImageUrl ? (
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-zoom-in group select-none"
              title="Click to view full image"
            >
              {/* Subtle ambient blurred backdrop matching image colors */}
              <img
                src={coverImageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-125 pointer-events-none"
              />

              {/* Main uncropped foreground image */}
              <img
                src={coverImageUrl}
                alt={title}
                className="relative z-10 max-h-[560px] w-auto max-w-full h-full object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />

              {/* Zoom hint badge */}
              <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-md pointer-events-none">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full Image</span>
              </div>
            </div>
          ) : (
            <div className="article-hero-visual-devanagari">
              {devanagariWatermark}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && coverImageUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
        >
          {/* Top Bar with Title and Close Button */}
          <div
            className="w-full max-w-5xl flex items-center justify-between pb-3 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm font-medium text-gray-200 truncate pr-4">
              {title}
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center flex-shrink-0"
              title="Close (Esc)"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full uncropped image container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={coverImageUrl}
              alt={title}
              className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
