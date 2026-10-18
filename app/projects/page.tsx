'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSupabaseClient } from '../../lib/supabase';
import { canOptimize } from '../../lib/img';

const TYPE_TO_CAT: Record<string, string> = {
  'plant maintenance amc': 'amc',
  'amc': 'amc',
  'corporate landscaping': 'amc',
  'corporate': 'amc',
  'moss wall': 'moss',
  'moss': 'moss',
  'vertical garden': 'vertical',
  'vertical': 'vertical',
  'terrace garden': 'terrace',
  'terrace': 'terrace',
  'balcony garden': 'balcony',
  'balcony': 'balcony',
  'corporate plantscaping': 'plantscaping',
  'plantscaping': 'plantscaping',
};

const DEFAULT_PROJECT_ITEMS = [
  // 8 Unique Vertical Gardens
  {
    cat: 'vertical',
    no: 'VG—01',
    name: 'Holiday Inn Multi-Story Living Wall',
    client: 'Holiday Inn Atrium',
    location: 'Hospitality Atrium, Delhi NCR',
    scope: '850 sq.ft multi-story outdoor living wall integrated with illuminated corporate logo and multi-zone drip',
    year: 'Completed & Maintained',
    image: '/projects/vertical-gardens/holiday-inn-atrium.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—02',
    name: 'Architectural Staircase Living Columns',
    client: 'Corporate Headquarters',
    location: 'CyberCity, Gurugram',
    scope: 'Double-height living wall columns alternating with black fluted architectural louvers & industrial track lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/architectural-staircase.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—03',
    name: 'Courtyard Atrium Skylight Living Wall',
    client: 'Luxury Private Residence',
    location: 'South Delhi',
    scope: 'Double-height courtyard atrium living wall flanked by carved stone cladding & skylight daylighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/courtyard-atrium-skylight.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—04',
    name: 'Resort Poolside Pergola Living Wall',
    client: 'Luxury Wellness Resort & Spa',
    location: 'NCR Resort & Spa',
    scope: '600 sq.ft expansive poolside living wall with teak cabana pergolas, purple Tradescantia, and ribbon grass',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/resort-poolside-pergola.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—05',
    name: 'Curved Wave Multi-Species Living Wall',
    client: 'Penthouse Pool Terrace',
    location: 'Greater Kailash, New Delhi',
    scope: 'Diagonal bands of golden Chlorophytum, Sedum, and purple Tradescantia with poolside timber decking',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/multi-species-wave-wall.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—06',
    name: 'Commercial Plaza LED Living Wall',
    client: 'Commercial Plaza & Lobby',
    location: 'Aerocity, New Delhi',
    scope: 'Full-length plaza living wall with polished granite flooring, drainage channel, and integrated LED ground lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/commercial-plaza-uplight.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—07',
    name: 'Teak Feature Living Wall Entryway',
    client: 'Private Architectural Villa',
    location: 'Golf Course Road, Gurugram',
    scope: 'Vertical living wall columns flanking teak timber facade with architectural sconce lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/teak-sconce-feature-wall.webp',
  },
  {
    cat: 'vertical',
    no: 'VG—08',
    name: 'Basalt Walkway Linear Living Wall',
    client: 'Contemporary Villa Walkway',
    location: 'Chhatarpur, New Delhi',
    scope: 'Linear full-height living wall along basalt walkway with river pebble inlay and fluted ceiling soffit',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/basalt-walkway-living-wall.webp',
  },

  // 10 Curated Enterprise Moss Walls
  {
    cat: 'moss',
    no: 'MW—01',
    name: 'Federal Bank Executive Boardroom Moss Wall',
    client: 'Federal Bank Regional HQ',
    location: 'Barakhamba Road, Connaught Place, New Delhi',
    scope: 'Multi-tone rolling waves of Scandinavian reindeer moss with 3D backlit lettering & slatted wood soffit',
    year: 'Completed 2024',
    image: '/projects/moss-walls/federal-bank-moss-wall.webp',
  },
  {
    cat: 'moss',
    no: 'MW—02',
    name: 'Hindustan Unilever Atrium Feature Wall',
    client: 'Hindustan Unilever Limited (HUL)',
    location: 'Corporate Headquarters Atrium, Delhi NCR',
    scope: 'Seamless reindeer moss field with embedded Unilever U-monogram & terracotta jali detailing',
    year: 'Completed 2024',
    image: '/projects/moss-walls/hul-unilever-curved-wall.webp',
  },
  {
    cat: 'moss',
    no: 'MW—03',
    name: 'Syngenta Botanical Wall & Golden Leaf',
    client: 'Syngenta India',
    location: 'Corporate Campus, Gurugram',
    scope: 'Preserved moss wall with custom gilded leaf outline and warm grazing glow behind fluted oak desk',
    year: 'Completed 2024',
    image: '/projects/moss-walls/syngenta-illuminated-crest.webp',
  },
  {
    cat: 'moss',
    no: 'MW—04',
    name: 'Wipro & Revantage Executive Lounge',
    client: 'Wipro & Revantage Campus',
    location: 'Cyber City, Gurugram',
    scope: 'High-density forest green moss acoustic wall with matte acrylic corporate logos & marble pebble planter',
    year: 'Completed 2024',
    image: '/projects/moss-walls/wipro-revantage-reception.webp',
  },
  {
    cat: 'moss',
    no: 'MW—05',
    name: 'Puma Leaping Cat Brand Silhouette',
    client: 'Puma Corporate Studio',
    location: 'South Delhi Regional Office',
    scope: 'Precision CNC-contoured reindeer moss leaping cat suspended on acoustic smoked glass partition',
    year: 'Completed 2024',
    image: '/projects/moss-walls/puma-brand-moss-icon.webp',
  },
  {
    cat: 'moss',
    no: 'MW—06',
    name: 'EXL Global Sculpted Continental World Map',
    client: 'EXL Global Facilities',
    location: 'Noida Expressway Tech Tower',
    scope: 'High-relief 3D preserved moss cartography depicting global office networks across continents',
    year: 'Completed 2024',
    image: '/projects/moss-walls/exl-global-moss-world-map.webp',
  },
  {
    cat: 'moss',
    no: 'MW—07',
    name: 'EXL Crimson Moss Inlaid Monogram',
    client: 'EXL Services Headquarters',
    location: 'CyberCity DLF, Gurugram',
    scope: 'Hand-dyed crimson Scandinavian moss monogram in emerald field with white marble pebble planter base',
    year: 'Completed 2024',
    image: '/projects/moss-walls/exl-crimson-inlaid-logo.webp',
  },
  {
    cat: 'moss',
    no: 'MW—08',
    name: 'EXL Services Panoramic Heritage Mural',
    client: 'EXL Services Chennai',
    location: 'Commercial Tech Park, Chennai',
    scope: '100% Scandinavian preserved greenery with custom architectural inlays & modern halo pendants',
    year: 'Completed 2024',
    image: '/projects/moss-walls/exl-chennai-heritage-reception.webp',
  },
  {
    cat: 'moss',
    no: 'MW—09',
    name: 'Genpact Fluted Timber & Moss Inset',
    client: 'Genpact India HQ',
    location: 'Golf Course Road, Gurugram',
    scope: 'Recessed full-height reindeer moss column interlocked with white oak acoustic battens',
    year: 'Completed 2024',
    image: '/projects/moss-walls/genpact-timber-slat-column.webp',
  },
  {
    cat: 'moss',
    no: 'MW—10',
    name: 'Executive Corridor Geometric Rhythm Wall',
    client: 'Corporate Campus Gurugram',
    location: 'Aerocity, New Delhi',
    scope: 'Alternating fluted timber mullions, glass vision panels, and preserved moss acoustic spandrels',
    year: 'Completed 2024',
    image: '/projects/moss-walls/geometric-rhythm-corridor.webp',
  },

  // Terrace Gardens
  {
    cat: 'terrace',
    no: 'TG—01',
    name: 'Rooftop Pool & Sunset Terrace Lounge',
    client: 'Penthouse Luxury Residence',
    location: 'Golf Links, New Delhi',
    scope: 'Slab load calculation, dual-layer root barrier, infinity pool perimeter planting, custom teak deck & ambient evening lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/rooftop-pool-sunset.webp',
  },
  {
    cat: 'terrace',
    no: 'TG—02',
    name: 'Engineering Terrace Drainage & Decking',
    client: 'Architectural Residence',
    location: 'Panchsheel Park, New Delhi',
    scope: 'High-flow subterranean drain cells, geotextile membrane filter, automated multi-line drip manifold and zero-ponding pavers',
    year: 'Completed 2024',
    image: '/projects/terrace_drainage.webp',
  },

  // Balcony Gardens
  {
    cat: 'balcony',
    no: 'BG—01',
    name: 'High-Rise Balcony Biophilic Sanctuary',
    client: 'Sky Penthouse Resident',
    location: 'Golf Course Road, Gurugram',
    scope: 'Zero-runoff drainage containment, custom powder-coated lightweight aluminum planters & privacy screen vertical planting',
    year: 'Completed 2024',
    image: '/projects/modular_system.webp',
  },
  {
    cat: 'balcony',
    no: 'BG—02',
    name: 'Covered Verandah Vertical Garden Portal',
    client: 'Luxury Apartment Residence',
    location: 'Vasant Vihar, New Delhi',
    scope: 'Flush-mounted architectural doorway surround with automated micro-misting and shade-tolerant Philodendron cultivars',
    year: 'Completed 2024',
    image: '/projects/portal_door.webp',
  },

  // Plant Maintenance AMC
  {
    cat: 'amc',
    no: 'AMC—01',
    name: 'Enterprise Corporate Plant AMC & Maintenance',
    client: 'Multinational Technology Campus',
    location: 'Cyber City, Gurugram',
    scope: '650+ indoor desk plants, atrium living wall, weekly scheduled inspections, organic pest control & zero-mortality replacement SLA',
    year: 'Ongoing AMC',
    image: '/projects/crew_install.webp',
  },
  {
    cat: 'amc',
    no: 'AMC—02',
    name: 'Commercial Developer Multi-Floor Plant Maintenance',
    client: 'DLF CyberPark Corporate Tower',
    location: 'Udyog Vihar, Gurugram',
    scope: 'Full facility biophilic plant maintenance across 4 office floors, soil moisture probes, pruning and regular nutrient feeding',
    year: 'Ongoing AMC',
    image: '/projects/grow_lights.webp',
  },

  // Corporate Plantscaping
  {
    cat: 'plantscaping',
    no: 'PS—01',
    name: 'Biophilic Headquarters Interior Plantscaping',
    client: 'Global Financial Services Campus',
    location: 'Barakhamba Road, New Delhi',
    scope: 'Lux-survey mapped indoor cultivars, sub-irrigation planter systems, sound-dampening acoustic greenery & executive planters',
    year: 'Completed & Maintained',
    image: '/projects/grow_lights.webp',
  },
  {
    cat: 'plantscaping',
    no: 'PS—02',
    name: 'Modern Atrium & Walkway Planter Network',
    client: 'Enterprise Tech Headquarters',
    location: 'Sector 132, Noida Expressway',
    scope: 'Large-scale specimen Ficus Lyrata, Sansevieria zeylanica clusters, architectural fiberglass planters with integrated drainage',
    year: 'Completed & Maintained',
    image: '/projects/walkway.webp',
  },
];

const ENTERPRISE_CLIENTS = [
  {
    name: 'S&P Global',
    city: 'Cyber City, Gurugram',
    category: 'Fortune 500 Financial',
    scope: 'Indoor Corporate Plantscaping & Executive Lounge Living Foliage',
  },
  {
    name: 'DLF Limited',
    city: 'CyberCity & Golf Course Rd',
    category: 'Commercial Developer',
    scope: 'Living Facades, Plant Maintenance AMC & Terrace Fit-Outs',
  },
  {
    name: 'Holiday Inn',
    city: 'New Delhi Hospitality',
    category: 'Luxury Hotel & Resort',
    scope: '32-Foot Multi-Tier Atrium Living Wall with Automated Irrigation',
  },
  {
    name: 'Godrej Properties',
    city: 'Delhi NCR & Pan-India',
    category: 'Premium Real Estate',
    scope: 'Rooftop Lounge Landscapes & Luxury Balcony Sanctuaries',
  },
  {
    name: 'Shangri-La',
    city: 'Central New Delhi',
    category: '5-Star Hospitality Suite',
    scope: 'Preserved Moss Wall Art Installations & Biophilic Interiors',
  },
  {
    name: 'Federal Bank',
    city: 'Regional Headquarters',
    category: 'Banking & Financial',
    scope: 'Executive Undulating Preserved Moss Wave Wall & 3D Backlit Lettering',
  },
  {
    name: 'Hindustan Unilever Limited',
    city: 'Corporate Atrium',
    category: 'Enterprise FMCG',
    scope: 'Curved Scandinavian Moss Wall with Embedded U-Monogram & Jali Detailing',
  },
  {
    name: 'Wipro & Revantage',
    city: 'Technology Campus',
    category: 'Global Enterprise IT',
    scope: 'High-Density Acoustic Moss Wall with Precision Acrylic Typography',
  },
  {
    name: 'Hira Group',
    city: 'Industrial Campus',
    category: 'Enterprise Infrastructure',
    scope: 'Campus Landscape Architecture & Year-Round Horticultural Care',
  },
];

interface ProjectItem {
  cat: string;
  no: string;
  name: string;
  client: string;
  location: string;
  scope: string;
  year: string;
  image: string;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECT_ITEMS);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('projects').select('*').order('order_index', { ascending: true })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: { data: any[] | null }) => {
        if (res.data && res.data.length >= 6) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setProjects(res.data.map((p: any) => ({
            cat: TYPE_TO_CAT[String(p.type || '').toLowerCase()] || 'amc',
            no: p.id ? String(p.id).replace('-', '—') : 'P—01',
            name: p.name || 'Landscape Project',
            client: p.location || 'Corporate / Private Client',
            location: p.location || 'Delhi NCR',
            scope: p.description || p.area || p.type || 'Custom landscaping',
            year: p.status || 'Completed',
            image: p.img || '/project_01.jpg',
          })));
        }
      })
      .catch(() => {});
  }, []);

  const CATEGORIES = [
    { id: 'all', label: 'All Projects' },
    { id: 'vertical', label: 'Vertical Gardens' },
    { id: 'amc', label: 'Plant AMC' },
    { id: 'terrace', label: 'Terrace' },
    { id: 'balcony', label: 'Balcony' },
    { id: 'moss', label: 'Moss Walls' },
    { id: 'plantscaping', label: 'Plantscaping' },
  ];

  const getCount = (catId: string) => {
    if (catId === 'all') return projects.length;
    return projects.filter((p) => p.cat === catId).length;
  };

  const filteredProjects = projects.filter(
    (prj) => activeFilter === 'all' || activeFilter === prj.cat
  );

  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Projects</div>
          <div className="rule-tag"><span className="tag gold">Sheet 09 — Project Index</span></div>
          <h1 className="d1">Selected Work</h1>
          <p className="lede light">
            A record of spaces designed, engineered and maintained by the studio across Delhi NCR. <em className="g">Each entry carries what it was, where it was, and what we actually built.</em>
          </p>
        </div>
      </section>

      {/* INDEX */}
      <section className="sec sheet">
        <div className="shell">
          <div className="notice" style={{ background: 'rgba(200,165,91,0.08)', borderColor: 'rgba(200,165,91,0.3)', color: 'var(--deep)' }}>
            <strong>Execution standards across Delhi NCR.</strong> Every installation below is engineered, fabricated, and maintained by our own in-house teams. Site visits and architectural consultations are arranged on request with studio evaluation.
          </div>

          <div className="filters" id="filters">
            {CATEGORIES.map((cat) => {
              const count = getCount(cat.id);
              if (count === 0 && cat.id !== 'all') return null;
              return (
                <button
                  key={cat.id}
                  data-filter={cat.id}
                  className={activeFilter === cat.id ? 'on' : ''}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="lux-gallery">
            {filteredProjects.map((prj, idx) => (
              <div
                key={`${activeFilter}-${prj.no}-${idx}`}
                className="lux-gallery-item"
                style={{ animationDelay: `${Math.min(idx * 0.04, 0.32)}s` }}
                onClick={() => setSelectedProject(prj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(prj); }}
              >
                <div className="lux-img-box">
                  <div className="lux-top-badges">
                    <span className="lux-cat-pill">
                      {prj.cat === 'vertical' ? 'Vertical Garden' : prj.cat === 'terrace' ? 'Terrace Garden' : prj.cat === 'balcony' ? 'Balcony Garden' : prj.cat === 'moss' ? 'Moss Wall' : prj.cat === 'plantscaping' ? 'Plantscaping' : 'Plant AMC'}
                    </span>
                    <span className="lux-num-tag">{prj.no}</span>
                  </div>
                  <Image
                    src={prj.image}
                    alt={prj.name}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 420px"
                    priority={idx < 4}
                    loading={idx < 4 ? undefined : 'lazy'}
                    unoptimized={!canOptimize(prj.image)}
                    className="lux-img"
                  />
                  <div className="lux-img-gradient" />
                </div>
                <div className="lux-card-body">
                  <div className="lux-title-row">
                    <h2 className="lux-proj-title">{prj.name}</h2>
                  </div>
                  <div className="lux-loc-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{prj.location}</span>
                  </div>
                  <p className="lux-scope-text">{prj.scope}</p>
                  <div className="lux-card-foot">
                    <span className="lux-foot-status">Status: <b>{prj.year}</b></span>
                    <span className="lux-foot-btn">View Specs &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Case Study 01 — Architectural Execution</span></div>
              <h2 className="d2">Holiday Inn Atrium — Multi-Story Living Wall.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '64ch' }}>
                How we engineered a 32-foot natural vertical living wall in a high-traffic hospitality atrium with zero floor droplet tolerance and multi-zone automated drip fertigation.
              </p>
            </div>
          </div>

          <div className="cs-imgs rv">
            <div className="plate rvp has-img" data-n="Pre-installation bare structural wall">
              <Image src="/project_04.jpg" alt="Pre-installation structural atrium wall" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="plate rvp has-img" data-n="Completed living architecture installation">
              <Image src="/projects/vertical-gardens/holiday-inn-atrium.jpg" alt="Completed Holiday Inn Living Wall by Wall of Gardens" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>

          <div className="cs-grid rv">
            <div className="cs-i">
              <span className="no">01 — Brief</span>
              <h3>What the client required</h3>
              <p>A signature living green landmark in the multi-story hotel atrium to establish immediate biophilic luxury for incoming international guests and delegates.</p>
            </div>
            <div className="cs-i">
              <span className="no">02 — Constraint</span>
              <h3>What made it technically challenging</h3>
              <p>Continuous high ambient sunlight through skylight glass, multi-story height access restrictions during operational hours, and strict zero-leakage tolerances near premium lounge seating.</p>
            </div>
            <div className="cs-i">
              <span className="no">03 — Approach</span>
              <h3>What we engineered</h3>
              <p>Lightweight powder-coated structural aluminium framework, closed-loop pressure-balanced drip irrigation with moisture monitoring, and acclimatized shade-tolerant tropical species.</p>
            </div>
            <div className="cs-i">
              <span className="no">04 — Outcome</span>
              <h3>How it performs</h3>
              <p>Vibrant, dense, uniform foliar density with 100% root health, managed under our comprehensive Wall of Gardens Annual Maintenance Contract with guaranteed zero downtime.</p>
            </div>
          </div>

          <div style={{ marginTop: '28px', padding: '18px 24px', background: 'rgba(200,165,91,0.08)', borderLeft: '3px solid #C8A55B', borderRadius: '2px' }} className="rv">
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '14.5px', color: '#0E1811', lineHeight: 1.6 }}>
              &ldquo;The living atrium has become the single most photographed architectural feature of our property, maintained flawlessly by Wall of Gardens without disturbing our hotel guests.&rdquo;
            </p>
            <span style={{ display: 'block', marginTop: '8px', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.6)', letterSpacing: '0.5px' }}>
              — Hospitality Partner, Holiday Inn Atrium Project
            </span>
          </div>
        </div>
      </section>

      {/* ENGINEERING STANDARDS */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Studio Methodology</span></div>
              <h2 className="d2">Why engineered living walls thrive where amateur gardens fail.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '60ch' }}>
                Every living wall, terrace, and corporate plantscape follows an exacting architectural discipline from on-site lux mapping to closed-loop irrigation.
              </p>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Precise Lux Mapping</h3><p>Light levels measured directly at the wall surface across morning and evening hours before plant species are finalized.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Closed-Loop Irrigation</h3><p>Independent multi-height drip zones with digital timers preventing root suffocation and dry top bands.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Structural Load Safety</h3><p>Engineered wet-weight media ratings certified to protect terrace slabs and cantilevered balconies from excess dead load.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Sub-Slab Waterproofing</h3><p>Dual-layer geotextile membranes and high-flow drainage cells guaranteeing zero water penetration into living spaces.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Certified Horticultural Care</h3><p>In-house certified botanists, odorless organic feeding, and 100% free plant replacements under scheduled AMC contracts.</p></div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CLIENTS SHOWCASE */}
      <section className="sec sheet" id="clients">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Enterprise Portfolio</span></div>
              <h2 className="d2">Spaces we have worked on.</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '64ch' }}>
                From Fortune 500 corporate facilities in Gurugram to 5-star international hotel atriums and luxury residential developments across Delhi NCR, we engineer living greenery to rigorous corporate standards.
              </p>
            </div>
            <span className="tag">Corporate &amp; Hospitality Partnerships</span>
          </div>

          <div className="client-showcase-grid rv">
            {ENTERPRISE_CLIENTS.map((c, i) => (
              <div key={c.name} className="client-card">
                <div className="client-card-head">
                  <span className="client-badge">{c.category}</span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'rgba(14,24,17,0.35)' }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 className="client-card-title">{c.name}</h3>
                <div className="client-card-loc">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{c.city}</span>
                </div>
                <div className="client-card-project">
                  <strong>Delivered Scope</strong>
                  <span>{c.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close">
        <div className="plate dk has-img" data-n="Wall of Gardens Projects">
          <Image src="/cta_bg.jpg" alt="Wall of Gardens Projects" fill sizes="100vw" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Want something like one of these?</h2>
            <p className="lede light">Send us photographs and rough dimensions. Site visits and technical evaluations within Delhi NCR are arranged on request.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Book a Site Visit</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY PROJECT MODAL */}
      {selectedProject && (
        <div
          className="lux-modal-overlay open"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lux-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="lux-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              &times;
            </button>
            <div className="lux-modal-hero">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                unoptimized={!canOptimize(selectedProject.image)}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="lux-modal-body">
              <div className="lux-modal-no">
                <span>{selectedProject.no}</span> &bull; <span>{selectedProject.year}</span>
              </div>
              <h2 className="lux-modal-title">{selectedProject.name}</h2>
              <div className="lux-modal-loc">📍 {selectedProject.location}</div>
              <p className="lux-modal-desc">{selectedProject.scope}</p>

              <div className="lux-modal-meta-grid">
                <div className="lux-meta-item">
                  <span className="k">Client / Facility</span>
                  <span className="v">{selectedProject.client}</span>
                </div>
                <div className="lux-meta-item">
                  <span className="k">Category</span>
                  <span className="v">{selectedProject.cat.toUpperCase()}</span>
                </div>
                <div className="lux-meta-item">
                  <span className="k">Location</span>
                  <span className="v">{selectedProject.location}</span>
                </div>
                <div className="lux-meta-item">
                  <span className="k">Engineering Status</span>
                  <span className="v">{selectedProject.year}</span>
                </div>
              </div>

              <div className="lux-modal-actions">
                <a
                  className="lux-btn-wa"
                  href={`https://wa.me/919990960669?text=${encodeURIComponent(`Hi Wall of Gardens, I saw the project "${selectedProject.name}" (${selectedProject.no}) and would like to enquire about something similar for my space.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.85 7.67C8.62 7.93 7.96 8.55 7.96 9.81C7.96 11.08 8.88 12.3 9.01 12.47C9.14 12.64 10.79 15.19 13.33 16.29C15.44 17.2 15.87 17.02 16.33 16.98C16.8 16.93 17.83 16.37 18.05 15.75C18.27 15.13 18.27 14.6 18.2 14.49C18.14 14.38 17.97 14.31 17.71 14.18C17.45 14.05 16.2 13.44 15.97 13.35C15.74 13.27 15.57 13.23 15.4 13.49C15.23 13.75 14.75 14.31 14.6 14.49C14.46 14.66 14.31 14.69 14.05 14.56C13.8 14.43 12.97 14.16 12 13.29C11.23 12.61 10.72 11.77 10.57 11.51C10.42 11.25 10.55 11.11 10.68 10.98C10.8 10.86 10.95 10.67 11.08 10.52C11.21 10.37 11.25 10.26 11.34 10.09C11.43 9.92 11.38 9.77 11.32 9.64C11.25 9.51 10.74 8.27 10.53 7.76C10.32 7.26 10.11 7.33 9.95 7.33C9.8 7.33 9.68 7.35 9.53 7.35Z" />
                  </svg>
                  <span>WhatsApp Enquiry</span>
                </a>
                <Link className="lux-btn-gold" href="/contact">
                  <span>Book Site Consultation &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
