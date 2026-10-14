'use client';

import { useEffect } from 'react';

interface ArticleViewTrackerProps {
  slug: string;
}

export function ArticleViewTracker({ slug }: ArticleViewTrackerProps) {
  useEffect(() => {
    if (!slug || typeof window === 'undefined') return;

    // Prevent duplicate counting within the same browser session
    const storageKey = `smh_article_view_${slug}`;
    try {
      const alreadyViewed = sessionStorage.getItem(storageKey);
      if (alreadyViewed) {
        return;
      }
      sessionStorage.setItem(storageKey, Date.now().toString());
    } catch {
      // In private browsing or storage disabled environments, continue
    }

    // Fire view increment
    try {
      fetch('/api/articles/track-view/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
        keepalive: true,
      }).catch((err) => {
        // Silently catch tracking errors to never interrupt page reading
        console.debug('View tracking notice:', err);
      });
    } catch {
      // Ignore network errors
    }
  }, [slug]);

  return null;
}
