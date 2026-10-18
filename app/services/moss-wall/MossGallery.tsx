'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import mossProjectsData from '../../../lib/moss-projects-data.json';

interface MossProject {
  id: string;
  title: string;
  client: string;
  category: string;
  angle: string;
  technique: string;
  imageJpg: string;
  imageWebp: string;
  thumbWebp: string;
}

const CATEGORIES = [
  { key: 'all', label: 'All Studio Projects' },
  { key: 'Brand Logo Inlay', label: 'Brand Logos & Inlays' },
  { key: 'Enterprise Reception', label: 'Corporate Atriums & Lounges' },
  { key: 'Corporate Boardroom', label: 'Executive Boardrooms' },
  { key: '3D Art & Sculpture', label: '3D Maps & Cartography' },
  { key: 'Architectural Feature', label: 'Timber & Acoustic Insets' },
  { key: 'Multi-Texture Living Facade', label: 'Multi-Texture Facades' },
];

export default function MossGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<MossProject | null>(null);

  const projects: MossProject[] = mossProjectsData;

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (!selectedProject) return;
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
      if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % filteredProjects.length;
        setSelectedProject(filteredProjects[next]);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setSelectedProject(filteredProjects[prev]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects]);

  return (
    <section className="moss-portfolio-section" id="portfolio">
      <div className="shell">
        <header className="moss-portfolio-head rv">
          <div className="rule-tag">
            <span className="tag gold">Studio Masterpieces</span>
          </div>
          <h2 className="d2" style={{ color: '#0E1811' }}>
            Spaces Transformed by Our Studio.
          </h2>
          <p className="lede" style={{ marginTop: '14px', maxWidth: '64ch' }}>
            A curated photographic retrospective of executive boardrooms, corporate headquarters, and high-profile brand logos engineered in 100% natural preserved Scandinavian moss across Delhi NCR &amp; pan-India.
          </p>

          {/* FILTER PILLS */}
          <div className="moss-filter-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                type="button"
                className={`moss-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span>{cat.label}</span>
                <span className="moss-cat-count">
                  {cat.key === 'all' ? projects.length : projects.filter(p => p.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>
        </header>

        {/* HERO SPOTLIGHT: FEDERAL BANK & UNILEVER */}
        {activeCategory === 'all' && (
          <div className="moss-spotlight-card rv dl1">
            <div className="moss-spotlight-media" onClick={() => setSelectedProject(projects[0])}>
              <Image
                src={projects[0].imageWebp}
                alt={projects[0].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="moss-spotlight-img"
              />
              <div className="moss-spotlight-badge">
                <span>Featured Masterpiece · Executive Suite</span>
              </div>
              <div className="moss-zoom-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Expand 4K Studio View</span>
              </div>
            </div>
            <div className="moss-spotlight-info">
              <div className="moss-meta-client">
                <span className="moss-client-tag">{projects[0].client}</span>
                <span className="moss-angle-tag">{projects[0].angle}</span>
              </div>
              <h3 className="moss-spotlight-title">{projects[0].title}</h3>
              <p className="moss-spotlight-desc">
                {projects[0].technique}
              </p>
              <div className="moss-specs-grid">
                <div className="moss-spec-item">
                  <span className="spec-k">Species</span>
                  <span className="spec-v">Imported Reindeer &amp; Bun Moss</span>
                </div>
                <div className="moss-spec-item">
                  <span className="spec-k">Acoustics</span>
                  <span className="spec-v">0.75 NRC Noise Dampening</span>
                </div>
                <div className="moss-spec-item">
                  <span className="spec-k">Illumination</span>
                  <span className="spec-v">Warm LED Linear Grazing</span>
                </div>
                <div className="moss-spec-item">
                  <span className="spec-k">Upkeep</span>
                  <span className="spec-v">Zero Irrigation Plumbing</span>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-d"
                onClick={() => setSelectedProject(projects[0])}
                style={{ alignSelf: 'flex-start', marginTop: '14px', fontSize: '11px' }}
              >
                <span>View Full Studio Inspection &rarr;</span>
              </button>
            </div>
          </div>
        )}

        {/* CURATED MOSS GALLERY GRID */}
        <div className="moss-gallery-grid rv dl2">
          {filteredProjects.map((p, idx) => (
            <div
              key={p.id}
              className="moss-card"
              onClick={() => setSelectedProject(p)}
              tabIndex={0}
              role="button"
              aria-label={`Open ${p.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedProject(p);
              }}
            >
              <div className="moss-card-media">
                <Image
                  src={p.thumbWebp}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="moss-card-img"
                  loading={idx < 6 ? 'eager' : 'lazy'}
                />
                <div className="moss-card-overlay">
                  <span className="moss-overlay-btn">View High-Res Photo &rarr;</span>
                </div>
                <div className="moss-angle-badge">
                  <span>{p.angle}</span>
                </div>
              </div>
              <div className="moss-card-body">
                <div className="moss-card-client-row">
                  <span className="moss-card-client">{p.client}</span>
                  <span className="moss-card-cat">{p.category}</span>
                </div>
                <h3 className="moss-card-title">{p.title}</h3>
                <p className="moss-card-technique">{p.technique}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CRAFTSMANSHIP SPOTLIGHT: HAND-TUFTING ON-SITE */}
        <div className="moss-craft-banner rv dl3">
          <div className="moss-craft-left">
            <div className="rule-tag"><span className="tag gold">Studio Craftsmanship</span></div>
            <h3 className="moss-craft-h">Every tuft placed by hand. Engineered for acoustic perfection.</h3>
            <p className="moss-craft-p">
              Unlike mass-manufactured plastic green panels, our Scandinavian reindeer and cushion moss installations are sculpted by dedicated in-house botanical artisans. Each contour is hand-pinned and layered to ensure structural depth, acoustic NRC ratings, and zero glue odor.
            </p>
            <div className="moss-craft-badges">
              <span>✓ Certified Non-Toxic Organic Dyes</span>
              <span>✓ 5-10 Year Architectural Longevity</span>
              <span>✓ Bespoke Corporate Logo Integration</span>
            </div>
          </div>
          <div className="moss-craft-media" onClick={() => setSelectedProject(projects.find(p => p.id === 'exl-world-map-craftsmanship') || projects[0])}>
            <Image
              src="/projects/moss-walls/exl-world-map-craftsmanship.webp"
              alt="Artisan hand-tufting moss wall"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="moss-craft-img"
            />
            <div className="moss-craft-tag">
              <span>On-Site Hand-Tufting · EXL World Map</span>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedProject && (
        <div className="moss-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="moss-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="moss-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close photo preview"
            >
              &times;
            </button>

            <div className="moss-modal-media-wrap">
              <Image
                src={selectedProject.imageWebp}
                alt={selectedProject.title}
                fill
                priority
                sizes="95vw"
                className="moss-modal-img"
              />
            </div>

            <div className="moss-modal-bar">
              <div className="moss-modal-info">
                <div className="moss-modal-meta">
                  <span className="moss-modal-client">{selectedProject.client}</span>
                  <span className="moss-modal-sep">&bull;</span>
                  <span className="moss-modal-angle">{selectedProject.angle}</span>
                  <span className="moss-modal-sep">&bull;</span>
                  <span className="moss-modal-cat">{selectedProject.category}</span>
                </div>
                <h4 className="moss-modal-title">{selectedProject.title}</h4>
                <p className="moss-modal-desc">{selectedProject.technique}</p>
              </div>

              <div className="moss-modal-actions">
                <a
                  className="btn btn-g"
                  href={`https://wa.me/919990960669?text=${encodeURIComponent(`Hi Wall of Gardens, I saw the ${selectedProject.title} (${selectedProject.client}) project on your website and would like a quote for a similar preserved moss wall.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '11px' }}
                >
                  <span>Inquire on WhatsApp &rarr;</span>
                </a>
                <a
                  className="btn btn-o"
                  href="/contact"
                  style={{ fontSize: '11px' }}
                >
                  <span>Book Site Inspection</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
