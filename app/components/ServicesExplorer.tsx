'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  no: string;
  title: string;
  category: 'amc' | 'walls' | 'rooftops' | 'indoor';
  subtitle: string;
  desc: string;
  bullets: string[];
  img: string;
  alt: string;
  href: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'plant-maintenance-amc',
    no: '01',
    category: 'amc',
    title: 'Plant Maintenance Service (AMC)',
    subtitle: 'Annual Contracts · Offices, Living Walls & Gardens',
    desc: 'Comprehensive horticultural maintenance for corporate offices, commercial campuses, living walls, and residences. Scheduled expert visits, soil nutrition, pest management, irrigation audits, and free plant replacements.',
    bullets: [
      'Weekly / bi-weekly scheduled visits by trained gardeners',
      'Organic fertilization, pest management & pruning',
      'Immediate plant replacement guarantee under AMC',
    ],
    img: '/project_01.jpg',
    alt: 'Plant Maintenance AMC Service in Delhi NCR',
    href: '/services/plant-maintenance-amc',
  },
  {
    id: 'vertical-gardens',
    no: '02',
    category: 'walls',
    title: 'Vertical Gardens',
    subtitle: 'Natural · Hybrid · Artificial Living Walls',
    desc: 'Engineered vertical green infrastructure with custom modular sub-frames, sub-surface drip irrigation, and microclimate-specific plant palettes for hotels, offices and residences.',
    bullets: [
      'Structural sub-frame & weight calculation',
      'Multi-zone automated drip & fertigation',
      'Cultivars mapped to measured Lux & UV levels',
    ],
    img: '/projects/vertical-gardens/holiday-inn-atrium.jpg',
    alt: 'Holiday Inn Multi-Story Living Wall by Wall of Gardens',
    href: '/services/vertical-gardens',
  },
  {
    id: 'terrace-garden',
    no: '03',
    category: 'rooftops',
    title: 'Terrace Gardens',
    subtitle: 'Rooftops · Load Engineering · Drainage',
    desc: 'High-altitude green spaces designed around wet weight distribution and waterproofing integrity. Engineered with high-flow drain cells so no stagnant water ever sits on your roof slab.',
    bullets: [
      'Wet-weight load calculated per square foot',
      'Dual-layer root barrier & high-flow drain cells',
      'Wind-resistant and heat-tolerant canopy architecture',
    ],
    img: '/project_04.jpg',
    alt: 'Rooftop terrace garden at twilight',
    href: '/services/terrace-garden',
  },
  {
    id: 'balcony-gardens',
    no: '04',
    category: 'rooftops',
    title: 'Balcony Gardens',
    subtitle: 'Compact Spaces · Residential Luxury',
    desc: 'Precision-planned residential balconies tailored to the square foot. Drainage contained with zero runoff so the balcony remains clean, usable, and comfortable.',
    bullets: [
      'Zero-runoff containment & concealed drainage',
      'Custom modular planter joinery & lightweight media',
      'Low-maintenance ambient lighting & drip lines',
    ],
    img: '/project_05.jpg',
    alt: 'Luxury apartment balcony garden with living wall',
    href: '/services/balcony-gardens',
  },
  {
    id: 'moss-wall',
    no: '05',
    category: 'indoor',
    title: 'Moss Walls',
    subtitle: 'Preserved Botanicals · Interiors Only',
    desc: 'Real Scandinavian moss and ferns preserved with natural glycerin to retain perpetual softness and vibrant colour without requiring a single drop of water, plumbing, or sunlight.',
    bullets: [
      '100% zero irrigation or drainage needed',
      'Natural acoustic absorption (NRC certified)',
      'Dust-repellent, hypoallergenic & fire-rated',
    ],
    img: '/project_02.jpg',
    alt: 'Preserved botanical moss wall in executive boardroom',
    href: '/services/moss-wall',
  },
  {
    id: 'plantscaping',
    no: '06',
    category: 'indoor',
    title: 'Corporate Plantscaping',
    subtitle: 'Workplace Planting · Maintained Under SLA',
    desc: 'Strategic indoor plant installations mapped to measured lux levels across office workstations and executive suites. You own the greenery; our specialists handle ongoing upkeep.',
    bullets: [
      'Lux-verified botanical placement & species selection',
      'Bi-weekly professional servicing & hydration checks',
      'Immediate replacement guarantee for distressed plants',
    ],
    img: '/project_01.jpg',
    alt: 'Indoor corporate plantscaping for executive workspace',
    href: '/services/plantscaping',
  },
];

type FilterKey = 'all' | 'amc' | 'walls' | 'rooftops' | 'indoor';

export default function ServicesExplorer() {
  const [filter, setFilter] = useState<FilterKey>('all');

  const filtered = filter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === filter);

  return (
    <div className="sv-explorer">
      {/* Category Filter Pills */}
      <div className="sv-pills" role="tablist" aria-label="Service Categories">
        <button
          className={`sv-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          role="tab"
          aria-selected={filter === 'all'}
        >
          All 06 Disciplines
        </button>
        <button
          className={`sv-pill ${filter === 'amc' ? 'active' : ''}`}
          onClick={() => setFilter('amc')}
          role="tab"
          aria-selected={filter === 'amc'}
        >
          Plant AMC &amp; Maintenance
        </button>
        <button
          className={`sv-pill ${filter === 'walls' ? 'active' : ''}`}
          onClick={() => setFilter('walls')}
          role="tab"
          aria-selected={filter === 'walls'}
        >
          Living Walls &amp; Facades
        </button>
        <button
          className={`sv-pill ${filter === 'rooftops' ? 'active' : ''}`}
          onClick={() => setFilter('rooftops')}
          role="tab"
          aria-selected={filter === 'rooftops'}
        >
          Terraces &amp; Balconies
        </button>
        <button
          className={`sv-pill ${filter === 'indoor' ? 'active' : ''}`}
          onClick={() => setFilter('indoor')}
          role="tab"
          aria-selected={filter === 'indoor'}
        >
          Interiors &amp; Moss
        </button>
      </div>

      {/* Cards Grid */}
      <div className="sv-cards-grid">
        {filtered.map((s) => (
          <Link key={s.id} href={s.href} className="sv-card group">
            <div className="sv-card-media">
              <span className="sv-card-badge">Sheet {s.no}</span>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
            <div className="sv-card-body">
              <span className="sv-card-subtitle">{s.subtitle}</span>
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-desc">{s.desc}</p>
              <ul className="sv-card-bullets">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <span className="sv-card-link">
                <span>View Technical Sheet {s.no}</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
