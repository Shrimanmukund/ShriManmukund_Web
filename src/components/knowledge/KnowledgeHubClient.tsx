'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { KNOWLEDGE_ARTICLES, type KnowledgeArticle } from '@/lib/data/knowledge-articles';

type CategoryFilter = 'all' | 'playbooks' | 'articles' | 'insights' | 'patient-resources';
type SortOrder = 'latest' | 'oldest' | 'read-time';

const PAGE_SIZE = 9;

export function KnowledgeHubClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOrder>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Dynamic counts for each filter pill
  const countAll = KNOWLEDGE_ARTICLES.length;
  const countPlaybooks = useMemo(
    () => KNOWLEDGE_ARTICLES.filter((a) => a.category === 'playbooks').length,
    []
  );
  const countArticles = useMemo(
    () => KNOWLEDGE_ARTICLES.filter((a) => a.category === 'articles').length,
    []
  );
  const countInsights = useMemo(
    () => KNOWLEDGE_ARTICLES.filter((a) => a.category === 'insights').length,
    []
  );
  const countPatientResources = useMemo(
    () => KNOWLEDGE_ARTICLES.filter((a) => a.category === 'patient-resources').length,
    []
  );

  // Filter and sort items
  const filteredArticles = useMemo(() => {
    let result = [...KNOWLEDGE_ARTICLES];

    // 1. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter((a) => a.category === selectedCategory);
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.topic.toLowerCase().includes(q) ||
          a.authorFull.toLowerCase().includes(q) ||
          a.devanagari.includes(q)
      );
    }

    // 3. Sorting
    if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === 'read-time') {
      result.sort((a, b) => b.readTimeMins - a.readTimeMins);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const validPage = Math.min(Math.max(1, currentPage), totalPages);
  
  const paginatedArticles = useMemo(() => {
    const start = (validPage - 1) * PAGE_SIZE;
    return filteredArticles.slice(start, start + PAGE_SIZE);
  }, [filteredArticles, validPage]);

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    const element = document.getElementById('all-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById('all-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSort = () => {
    setSortBy((prev) => {
      if (prev === 'latest') return 'oldest';
      if (prev === 'oldest') return 'read-time';
      return 'latest';
    });
  };

  const sortLabel = {
    latest: 'Latest ↓',
    oldest: 'Oldest ↑',
    'read-time': 'Read Time ↓',
  }[sortBy];

  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterError('');

    try {
      const res = await fetch('/api/newsletter/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, sourcePage: '/knowledge/' }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to subscribe. Please try again.');
      }

      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    } catch (err: any) {
      setNewsletterError(err.message || 'Failed to subscribe. Please try again later.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <main>
      {/* 1. HUB HERO */}
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <span>Knowledge Hub</span>
          </div>

          <div className="hub-hero-devanagari">ज्ञान संग्रह</div>
          <h1 className="hub-hero-title">
            Understand before <em>you decide.</em>
          </h1>
          <p className="hub-hero-lede">
            Because good decisions come from understanding, not from being sold. Playbooks, articles, and honest insights on proctology, Ayurveda, and integrated surgical care.
          </p>

          <div className="hub-search">
            <span className="hub-search-icon">श</span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search articles, conditions, treatments..."
              aria-label="Search knowledge base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--mute)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '0 0.5rem',
                }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <div className="filters">
        <button
          className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
          type="button"
          onClick={() => handleCategoryChange('all')}
        >
          All
          <span className="filter-count">{countAll}</span>
        </button>
        <button
          className={`filter-pill ${selectedCategory === 'playbooks' ? 'active' : ''}`}
          type="button"
          onClick={() => handleCategoryChange('playbooks')}
        >
          Playbooks
          <span className="filter-count">{countPlaybooks}</span>
        </button>
        <button
          className={`filter-pill ${selectedCategory === 'articles' ? 'active' : ''}`}
          type="button"
          onClick={() => handleCategoryChange('articles')}
        >
          Articles
          <span className="filter-count">{countArticles}</span>
        </button>
        <button
          className={`filter-pill ${selectedCategory === 'insights' ? 'active' : ''}`}
          type="button"
          onClick={() => handleCategoryChange('insights')}
        >
          Insights
          <span className="filter-count">{countInsights}</span>
        </button>
        <button
          className={`filter-pill ${selectedCategory === 'patient-resources' ? 'active' : ''}`}
          type="button"
          onClick={() => handleCategoryChange('patient-resources')}
        >
          Patient Resources
          <span className="filter-count">{countPatientResources}</span>
        </button>
      </div>

      {/* 3. FEATURED CONTENT (Shown when on 'all' filter and no active search query) */}
      {selectedCategory === 'all' && !searchQuery.trim() && (
        <section className="featured">
          <div className="section-header section-header--split">
            <div className="section-header-text">
              <div className="section-tag">Editor&apos;s Picks</div>
              <h2 className="section-title">
                Featured this <em>month.</em>
              </h2>
            </div>
            <a
              href="#all-content"
              className="section-header-cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('all-content')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View all featured →
            </a>
          </div>

          <div className="featured-grid">
            <article className="featured-main">
              <div className="featured-main-image">
                <div className="featured-main-image-devanagari">क्षारसूत्र</div>
              </div>
              <div className="featured-main-body">
                <div className="featured-badges">
                  <span className="featured-badge featured-badge--sage">Playbook</span>
                  <span className="featured-badge">Ksharsutra</span>
                </div>
                <h3 className="featured-main-title">
                  <Link href="/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/">
                    Ksharsutra treatment, week by week: what to actually expect
                  </Link>
                </h3>
                <p className="featured-main-excerpt">
                  A practical, day-by-day guide for patients considering or currently undergoing Ksharsutra. From the first application through complete healing, with honest expectations about pain, discharge, healing time, and follow-up.
                </p>
                <div className="article-meta">
                  <div className="author-avatar">V</div>
                  <div className="article-meta-text">
                    <div className="article-author">Dr. Vipin Tongale</div>
                    <div className="article-meta-details">
                      Reviewed by Dr. Swati Tongale · Updated Sep 2026
                    </div>
                  </div>
                  <span className="article-read-time">12 min read</span>
                </div>
              </div>
            </article>

            <div className="featured-side">
              <article className="featured-side-card">
                <div className="featured-badges">
                  <span className="featured-badge">Article</span>
                </div>
                <h3 className="featured-side-title">
                  <Link href="/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/">
                    Piles vs fissure vs fistula: how to tell them apart
                  </Link>
                </h3>
                <p className="featured-side-excerpt">
                  The three most common anorectal conditions, often confused. A clear comparison of symptoms, causes, and treatments.
                </p>
                <div className="article-meta">
                  <div className="author-avatar">V</div>
                  <div className="article-meta-text">
                    <div className="article-author">Dr. Vipin Tongale</div>
                  </div>
                  <span className="article-read-time">8 min</span>
                </div>
              </article>

              <article className="featured-side-card">
                <div className="featured-badges">
                  <span className="featured-badge featured-badge--rose">Insight</span>
                </div>
                <h3 className="featured-side-title">
                  <Link href="/knowledge/insights/why-i-chose-to-lead-a-female-care-unit/">
                    Why patient dignity matters most in anorectal care
                  </Link>
                </h3>
                <p className="featured-side-excerpt">
                  Especially for women, and especially for those who have been dismissed elsewhere. A personal reflection.
                </p>
                <div className="article-meta">
                  <div className="author-avatar author-avatar--swati">S</div>
                  <div className="article-meta-text">
                    <div className="article-author">Dr. Swati Tongale</div>
                  </div>
                  <span className="article-read-time">6 min</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* 4. ARTICLE GRID */}
      <section className="articles" id="all-content">
        <div className="section-header section-header--split">
          <div className="section-header-text">
            <div className="section-tag">
              {searchQuery.trim()
                ? `Search Results`
                : selectedCategory === 'all'
                ? `All Content`
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ')}`}
            </div>
            <h2 className="section-title">
              Written by the doctors, <em>reviewed by the doctors.</em>
            </h2>
          </div>
          <button
            type="button"
            className="section-header-cta"
            onClick={toggleSort}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '2px solid var(--sage)',
            }}
          >
            Sort: {sortLabel}
          </button>
        </div>

        {paginatedArticles.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--white)',
              borderRadius: '24px',
              marginTop: '2rem',
              border: '1px solid var(--leaf-line)',
            }}
          >
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--indigo)', marginBottom: '1rem' }}>
              No articles found matching your criteria.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9375rem', color: 'var(--brown)', marginBottom: '1.5rem' }}>
              Try searching with different keywords or switch to another category filter.
            </p>
            <button
              type="button"
              className="filter-pill active"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
            >
              Reset Filters &amp; View All
            </button>
          </div>
        ) : (
          <div className="articles-grid">
            {paginatedArticles.map((article) => (
              <Link key={article.id} href={article.href} className="article-card">
                <div className={`article-card-image ${article.imageClass}`}>
                  <div className="article-card-devanagari">{article.devanagari}</div>
                </div>
                <div className="article-card-body">
                  <div className="article-card-badges">
                    <span className={`article-card-type ${article.typeClass}`}>
                      {article.categoryLabel}
                    </span>
                    <span className="article-card-topic">{article.topic}</span>
                  </div>
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                  
                  <div className="article-card-readmore-wrapper">
                    <span className="article-card-readmore">
                      Read more <span className="article-card-arrow">→</span>
                    </span>
                  </div>

                  <div className="article-card-footer">
                    <div className="article-card-author">
                      <div className={`article-card-author-avatar ${article.authorAvatarClass}`}>
                        {article.authorAvatar}
                      </div>
                      <span className="article-card-author-name">{article.author}</span>
                    </div>
                    <span className="article-card-time">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 5. PAGINATION */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn pagination-btn--nav"
              type="button"
              onClick={() => handlePageChange(validPage - 1)}
              disabled={validPage === 1}
              style={{ opacity: validPage === 1 ? 0.4 : 1, cursor: validPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                className={`pagination-btn ${pageNum === validPage ? 'active' : ''}`}
                type="button"
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            ))}

            <button
              className="pagination-btn pagination-btn--nav"
              type="button"
              onClick={() => handlePageChange(validPage + 1)}
              disabled={validPage === totalPages}
              style={{ opacity: validPage === totalPages ? 0.4 : 1, cursor: validPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              Next →
            </button>
          </div>
        )}
      </section>

      {/* 6. NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-content">
            <div className="newsletter-devanagari">विचार पत्र</div>
            <h2 className="newsletter-title">
              Get thoughtful writing, <em>once a month.</em>
            </h2>
            <p className="newsletter-desc">
              A monthly note from our doctors. Latest articles, seasonal Ayurvedic guidance, and honest reflections on proctology and integrated care. No promotions, no spam.
            </p>
          </div>
          <div className="newsletter-form">
            {newsletterSubscribed ? (
              <div
                style={{
                  background: '#E8F5E9',
                  border: '2px solid #2E7D32',
                  borderRadius: '100px',
                  padding: '1rem 2rem',
                  color: '#1B5E20',
                  fontWeight: 700,
                  textAlign: 'center',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.9375rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2E7D32' }}>✓</span>
                <span>Thank you for subscribing to our monthly note!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form-inner">
                {newsletterError && (
                  <div style={{ color: '#F87171', fontSize: '0.8125rem', marginBottom: '0.5rem', width: '100%', textAlign: 'left' }}>
                    {newsletterError}
                  </div>
                )}
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  className="newsletter-submit"
                  type="submit"
                  disabled={newsletterSubmitting}
                >
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            <p className="newsletter-note">Unsubscribe anytime. We respect your privacy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
