import type React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroFilm from './components/HeroFilm';
import { supabase } from '../lib/supabase';
import { DEFAULT_PROJECTS, DEFAULT_TESTIMONIALS } from '../lib/content-defaults';
import { canOptimize } from '../lib/img';

const FACTS = [
  { k: 'Registered', v: '17 Oct 2021', s: 'Incorporated & active, Delhi NCR' },
  { k: 'Studio', v: 'Janakpuri', s: 'New Delhi' },
  { k: 'Coverage', v: 'Delhi NCR', s: '& pan-India projects' },
  { k: 'Scope', v: 'One team', s: 'Design → Install → Maintain' },
];

const SERVICES = [
  { no: '01', href: '/services/plant-maintenance-amc', title: 'Plant Maintenance (AMC)', text: 'Annual Maintenance Contracts for offices, living walls and gardens. Scheduled visits, pest control and free plant replacements.', img: '/project_01.jpg', alt: 'Plant Maintenance AMC by Wall of Gardens' },
  { no: '02', href: '/services/vertical-gardens', title: 'Vertical Gardens', text: 'Natural, artificial and hybrid living walls, engineered before they are planted.', img: '/projects/vertical-gardens/holiday-inn-atrium.jpg', alt: 'Holiday Inn Multi-Story Living Wall by Wall of Gardens' },
  { no: '03', href: '/services/terrace-garden', title: 'Terrace Gardens', text: 'Rooftop landscapes designed around load, waterproofing and where the water actually goes.', img: '/project_04.jpg', alt: 'Rooftop terrace garden at dusk' },
  { no: '04', href: '/services/balcony-gardens', title: 'Balcony Gardens', text: 'Compact spaces planned to the square foot so the balcony stays usable.', img: '/project_05.jpg', alt: 'Luxury apartment balcony garden with living wall' },
  { no: '05', href: '/services/moss-wall', title: 'Moss Walls', text: 'Preserved moss installations. No irrigation, no sunlight, no watering schedule.', img: '/project_02.jpg', alt: 'Preserved moss wall in executive boardroom' },
  { no: '06', href: '/services/plantscaping', title: 'Office Plantation & Plantscaping', text: 'Indoor office plantation, installed and maintained under scheduled contract. The plants are yours; the upkeep is ours.', img: '/project_01.jpg', alt: 'Indoor corporate office plantation by Wall of Gardens' },
];

const METHOD = [
  { t: 'Light, measured at the wall', p: 'Not at the window. Most interior positions get far less usable light than they appear to — this alone decides natural, hybrid or artificial.' },
  { t: 'Water and drain access', p: 'A supply point, and somewhere for the collection channel to discharge. Without both, a living wall becomes a manual watering job.' },
  { t: 'Structural load', p: 'Wet weight of medium, planters, hardscape and water. On terraces this frequently changes the whole design.' },
  { t: 'Existing waterproofing', p: 'Its age and condition. Redoing it before landscaping costs a fraction of redoing it after.' },
  { t: 'Maintenance access', p: 'How the top of a wall gets reached in year two. A wall nobody can service is a wall that dies quietly.' },
  { t: 'Who maintains it', p: 'What upkeep you will realistically fund. We would rather specify to that than to an ideal nobody sustains.' },
];

const STEPS = [
  { k: 'Understand', t: 'Site assessment', p: 'We establish the constraints above, on site, before anything is priced.' },
  { k: 'Design', t: 'Drawing & spec', p: 'Layout and material specification issued for sign-off before procurement begins.' },
  { k: 'Execute', t: 'Installation', p: 'Our own crew, to an agreed timeline, working around your site hours.' },
  { k: 'Maintain', t: 'Handover & care', p: 'Written care schedule, and a maintenance contract where you want one.' },
];

export const metadata: Metadata = {
  title: 'Wall of Gardens — Living Architecture, Vertical Gardens & Plant AMC | Delhi NCR & Pan-India',
  description: 'India’s premier studio for living walls, vertical gardens, corporate plant AMC, preserved moss walls, and terrace gardens across Delhi NCR, Gurugram, Bengaluru, Mumbai, Pune, and Hyderabad.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Wall of Gardens — Living Architecture & Engineered Vertical Gardens',
    description: 'Engineered vertical gardens, corporate plant maintenance AMC, and luxury biophilic spaces across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad.',
    url: 'https://wallofgardens.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Wall of Gardens Living Architecture & Engineered Vertical Gardens' }],
  },
};

const CLIENT_PARTNERS = [
  {
    name: 'Godrej Properties',
    category: 'Luxury Real Estate',
    location: 'Delhi NCR & Pan-India',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="rgba(200,165,91,0.12)" stroke="rgba(200,165,91,0.4)" strokeWidth="1.2" />
        <path d="M15.5 8.5A5.5 5.5 0 1 0 16 14.5H12" stroke="#8A6D2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8.5" r="1" fill="#8A6D2B" />
      </svg>
    ),
  },
  {
    name: 'Shangri-La',
    category: '5-Star Hospitality',
    location: 'Central New Delhi',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#C8A55B" strokeWidth="1.3" fill="rgba(200,165,91,0.08)" />
        <path d="M8 8.5C8 7.1 9.8 6 12 6c2.2 0 4 1.1 4 2.5 0 2-3 2.5-4 3.5s0 2.5 0 2.5" stroke="#C8A55B" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17.5" r="1" fill="#C8A55B" />
      </svg>
    ),
  },
  {
    name: 'Holiday Inn',
    category: 'Luxury Hotel & Suites',
    location: 'Aerocity & New Delhi',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="rgba(31,61,43,0.08)" stroke="rgba(31,61,43,0.3)" strokeWidth="1.2" />
        <path d="M7 6v12M17 6v12M7 12h10" stroke="#1F3D2B" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="12" cy="6.5" r="1.5" fill="#C8A55B" />
      </svg>
    ),
  },
  {
    name: 'S&P Global',
    category: 'Fortune 500 Campus',
    location: 'CyberCity Gurugram',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#1F3D2B" strokeWidth="1.4" fill="rgba(31,61,43,0.06)" />
        <polyline points="3,7 12,12 21,7" stroke="#C8A55B" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="12" y2="22" stroke="#1F3D2B" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: 'DLF CyberCity',
    category: 'Commercial Developer',
    location: 'Golf Course Road',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="9" width="5" height="12" rx="1" fill="#1F3D2B" opacity="0.8" />
        <rect x="9.5" y="3" width="5" height="18" rx="1" fill="#C8A55B" />
        <rect x="16" y="11" width="5" height="10" rx="1" fill="#1F3D2B" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Hira Group',
    category: 'Enterprise Infrastructure',
    location: 'Industrial Campus',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,3 21,12 12,21 3,12" stroke="#C8A55B" strokeWidth="1.6" fill="rgba(200,165,91,0.08)" />
        <polygon points="12,7 17,12 12,17 7,12" fill="#1F3D2B" opacity="0.8" />
      </svg>
    ),
  },
];

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let featuredProjects: any[] = DEFAULT_PROJECTS.filter(p => p.featured);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testimonials: any[] = DEFAULT_TESTIMONIALS.filter(t => t.active);

  try {
    const [pRes, tRes] = await Promise.all([
      supabase.from('projects').select('*').eq('featured', true).order('order_index', { ascending: true }).limit(3),
      supabase.from('testimonials').select('*').eq('active', true).order('order_index', { ascending: true }).limit(3),
    ]);
    if (pRes.data && pRes.data.length > 0) {
      featuredProjects = pRes.data;
    }
    if (tRes.data && tRes.data.length > 0) {
      testimonials = tRes.data;
    }
  } catch {
    // Fall back to defaults seamlessly
  }
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hx hf on-dark" id="top" aria-labelledby="hx-title">
        <HeroFilm />
        <div className="shell hx-in">
          <div className="hx-copy">
            <p className="hx-trust">
              <span>Delhi NCR</span><i aria-hidden="true" /><span>Est. 17 Oct 2021</span><i aria-hidden="true" /><span>Corporate &amp; premium residential</span>
            </p>
            <h1 className="hx-h" id="hx-title">Living walls &amp; gardens, <em className="g">engineered</em> to last.</h1>
            <p className="hx-sub">Designed, installed and maintained by one studio — for corporate campuses and premium homes.</p>
            <div className="hx-actions">
              <Link className="hx-cta" href="/contact">Book a Site Visit<span aria-hidden="true">&rarr;</span></Link>
              <a className="hx-link" href="#work">View selected work<span aria-hidden="true">&rarr;</span></a>
            </div>
            <p className="hx-note">Architectural site inspection across Delhi NCR · Studio consultation</p>
          </div>
        </div>
      </section>

      {/* CLIENTS / SPACES WORKED ON */}
      <section className="cl" aria-label="Spaces we have worked on">
        <div className="shell">
          <div className="cl-head">
            <div className="rule-tag"><span className="tag">Spaces We Have Worked On</span></div>
            <p className="cl-trust-sub">
              Trusted by Fortune 500 campuses, 5-star hotels &amp; premier residential estates across Delhi NCR
            </p>
          </div>
        </div>
        <div className="mq">
          <div className="mq-t">
            {CLIENT_PARTNERS.map((c, i) => (
              <div key={`c1-${i}`} className="client-badge-card">
                <div className="cbc-icon">{c.icon}</div>
                <div className="cbc-info">
                  <span className="cbc-name">{c.name}</span>
                  <span className="cbc-cat">{c.category} · {c.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mq-t" aria-hidden="true">
            {CLIENT_PARTNERS.map((c, i) => (
              <div key={`c2-${i}`} className="client-badge-card">
                <div className="cbc-icon">{c.icon}</div>
                <div className="cbc-info">
                  <span className="cbc-name">{c.name}</span>
                  <span className="cbc-cat">{c.category} · {c.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL-TRACK VALUE PROPOSITION: CORPORATE AMC vs LUXURY RESIDENCES */}
      <section className="dual-funnel" id="solutions">
        <div className="shell">
          <header className="hhd rv">
            <div>
              <div className="rule-tag"><span className="tag">Client Focus</span></div>
              <h2 className="d2">Two sectors, tailored execution.</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '60ch' }}>
                Whether you manage a 50,000 sq.ft corporate facility or an exclusive private penthouse, we engineer living greenery around your exact operational standards.
              </p>
            </div>
          </header>

          <div className="dual-grid">
            {/* TRACK 1: CORPORATE */}
            <div className="dual-card corporate rv">
              <div className="dual-media">
                <span className="dual-badge">Corporate &amp; Commercial</span>
                <Image
                  src="/project_01.jpg"
                  alt="Corporate Plant Maintenance AMC & Greenery"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="dual-content">
                <span className="dual-tag">Sector 01 — B2B &amp; Facilities</span>
                <h3 className="dual-title">Offices, IT Campuses &amp; Living Facades</h3>
                <p className="dual-desc">
                  Structured Annual Maintenance Contracts (AMC), air-purifying indoor plantscaping, and architectural green facades coordinated smoothly around facility hours.
                </p>
                <ul className="dual-checklist">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Free Plant Replacement SLA:</strong> Declining plants replaced with zero paperwork.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Security &amp; Quiet Hours:</strong> Background-verified, uniformed staff respecting office hours.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Carpet-Safe Indoor Servicing:</strong> Sub-irrigation &amp; moisture-monitored watering with zero leaks.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Corporate Compliance:</strong> GST invoicing, formal SLAs &amp; monthly digital service logs.</span>
                  </li>
                </ul>
                <div className="dual-actions">
                  <Link className="hx-cta" href="/services/plant-maintenance-amc">
                    Corporate AMC Details &rarr;
                  </Link>
                  <Link className="hx-link" href="/contact">
                    Request AMC Proposal &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* TRACK 2: LUXURY RESIDENTIAL */}
            <div className="dual-card residential rv dl1">
              <div className="dual-media">
                <span className="dual-badge" style={{ borderColor: 'rgba(127,166,92,0.5)', color: '#7fa65c' }}>Luxury Residential</span>
                <Image
                  src="/project_04.jpg"
                  alt="Luxury Terrace & Balcony Gardens"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="dual-content">
                <span className="dual-tag" style={{ color: '#56823c' }}>Sector 02 — High-End Homes</span>
                <h3 className="dual-title">Villas, Penthouses &amp; Terrace Sanctuaries</h3>
                <p className="dual-desc">
                  Bespoke rooftop terrace landscapes, lush living walls, and compact balcony retreats designed for privacy, structural safety, and year-round leisure.
                </p>
                <ul className="dual-checklist">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Zero-Leakage Drainage Guarantee:</strong> Dual-layer root barriers &amp; high-flow drain cells.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Structural Load Safety:</strong> Wet-weight media engineered to protect your roof slab.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Smart Micro-Drip Irrigation:</strong> Automated timer-controlled watering with zero manual hassle.</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span><strong>Turnkey Handover &amp; Care:</strong> Custom joinery, atmospheric lighting &amp; optional home AMC.</span>
                  </li>
                </ul>
                <div className="dual-actions">
                  <Link className="hx-cta" href="/services/terrace-garden">
                    Terrace &amp; Villa Gardens &rarr;
                  </Link>
                  <a className="hx-link" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
                    WhatsApp Floor Plan &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE SLA & TRUST STRIP */}
      <section className="shell">
        <div className="sla-strip rv">
          <div className="rule-tag"><span className="tag gold">The Wall of Gardens SLA Commitment</span></div>
          <div className="sla-grid">
            <div className="sla-item">
              <span className="sla-num">01 / REPLACEMENT</span>
              <h4>100% Plant Replacement</h4>
              <p>Any plant showing distress or mortality under our AMC is promptly renewed at zero extra billing.</p>
            </div>
            <div className="sla-item">
              <span className="sla-num">02 / COMPLIANCE</span>
              <h4>Background-Verified Staff</h4>
              <p>Police-verified, ID-badged, and trained horticulturists adhering strictly to corporate security protocols.</p>
            </div>
            <div className="sla-item">
              <span className="sla-num">03 / ECO-FRIENDLY</span>
              <h4>Odorless &amp; Safe Care</h4>
              <p>Certified organic bio-fertilizers and non-toxic neem treatments completely safe for indoor AC environments.</p>
            </div>
            <div className="sla-item">
              <span className="sla-num">04 / BILLING</span>
              <h4>GST &amp; Monthly Reports</h4>
              <p>Clear line-item quotes, formal service agreements, and digital health logs for administrative audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="hfacts on-dark" aria-label="Studio at a glance">
        <div className="shell hfacts-in">
          {FACTS.map((f, i) => (
            <div key={f.k} className="hfact rv" style={{ '--d': i } as React.CSSProperties}>
              <span className="hfact-k">{f.k}</span>
              <strong className="hfact-v">{f.v}</strong>
              <span className="hfact-s">{f.s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="hsec sheet" id="services">
        <div className="shell">
          <header className="hhd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 02 — Scope of works</span></div>
              <h2 className="d2">Six disciplines, one studio.</h2>
            </div>
            <Link className="hhd-link" href="/services">All services <span aria-hidden="true">&rarr;</span></Link>
          </header>

          <div className="hsvc">
            {SERVICES.map((s, i) => (
              <Link key={s.href} href={s.href} className="hsvc-c rv rv-up" style={{ '--d': i % 3 } as React.CSSProperties}>
                <div className="hsvc-m">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 420px" />
                </div>
                <div className="hsvc-b">
                  <span className="hsvc-no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="hsvc-go">Explore <span aria-hidden="true">&rarr;</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="hsec hsec-alt sheet" id="work">
        <div className="shell">
          <header className="hhd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 03 — Project index</span></div>
              <h2 className="d2">Selected work.</h2>
            </div>
            <Link className="hhd-link" href="/projects">All projects <span aria-hidden="true">&rarr;</span></Link>
          </header>

          <div className={`hwork n${Math.min(featuredProjects.length, 3)}`}>
            {featuredProjects.slice(0, 3).map((p, idx) => {
              const src = p.img || `/project_0${idx + 1}.jpg`;
              return (
                <Link key={p.id || idx} href="/projects" className="hwork-c rv rv-img" style={{ '--d': idx } as React.CSSProperties}>
                  <div className="hwork-m">
                    <Image
                      src={src}
                      alt={p.alt || p.name}
                      fill
                      sizes={idx === 0 ? '(max-width: 1000px) 100vw, 60vw' : '(max-width: 1000px) 100vw, 40vw'}
                      unoptimized={!canOptimize(src)}
                    />
                  </div>
                  <div className="hwork-b">
                    <span className="hwork-no">{p.id ? String(p.id).replace('-', '—') : `P—0${idx + 1}`}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description || p.area || p.type}</p>
                    <span className="hwork-meta">{p.location || 'Delhi NCR'} · {p.type || 'Landscaping'}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="hsec hmeth sheet on-dark" id="method">
        <div className="shell hmeth-in">
          <div className="hmeth-l">
            <div className="hmeth-stick">
              <div className="rule-tag rv"><span className="tag gold">Sheet 04 — Method</span></div>
              <h2 className="d2 rv">A quote written without these answers is a guess.</h2>
              <p className="hmeth-lede rv">
                This is what we establish on site before we price anything. It is also why our scopes read as line items rather than one lump-sum number.
              </p>
              <div className="hmeth-ph rv rv-img">
                <div className="hmeth-ph-m">
                  <Image src="/project_05.jpg" alt="Office plantscaping across an open-plan floor" fill sizes="(max-width: 1000px) 100vw, 40vw" />
                </div>
                <span className="hmeth-tag">Site assessment · before pricing</span>
              </div>
            </div>
          </div>
          <ol className="hmeth-list">
            {METHOD.map((m, i) => (
              <li key={m.t} className="hmeth-i rv" style={{ '--d': i % 2 } as React.CSSProperties}>
                <span className="hmeth-no">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{m.t}</h3>
                  <p>{m.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROCESS */}
      <section className="hsec sheet">
        <div className="shell">
          <header className="hhd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 05 — Sequence</span></div>
              <h2 className="d2">Four stages, one point of contact.</h2>
            </div>
          </header>
          <ol className="hsteps rv">
            {STEPS.map((s, i) => (
              <li key={s.t} className="hstep" style={{ '--d': i } as React.CSSProperties}>
                <span className="hstep-dot" aria-hidden="true"><b>{String(i + 1).padStart(2, '0')}</b></span>
                <span className="hstep-k">{s.k}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUOTES */}
      {testimonials.length > 0 && (
        <section className="hsec hsec-alt sheet">
          <div className="shell">
            <header className="hhd rv">
              <div>
                <div className="rule-tag"><span className="tag">Sheet 06 — References</span></div>
                <h2 className="d2">What clients say.</h2>
              </div>
            </header>
            <div className="hq">
              {testimonials.map((t, idx) => (
                <figure key={t.id || idx} className={`hq-c rv${idx === 0 ? ' is-lead' : ''}`} style={{ '--d': idx } as React.CSSProperties}>
                  <span className="hq-mark" aria-hidden="true">&ldquo;</span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="hq-av" aria-hidden="true">{String(t.author || '').trim().charAt(0)}</span>
                    <span><b>{t.author}</b><em>{t.service}</em></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLOSING */}
      <section className="hcta on-dark" id="contact">
        <div className="hcta-bg rv" aria-hidden="true">
          <Image src="/cta_bg.jpg" alt="Wall of Gardens living architecture consultation background" fill sizes="100vw" />
        </div>
        <div className="shell hcta-in">
          <div className="hcta-copy rv">
            <div className="rule-tag"><span className="tag gold">Sheet 07 — Contact</span></div>
            <h2 className="d2">Have a space that needs a greener direction?</h2>
            <p>Site visits within Delhi NCR are free and carry no obligation. Tell us about the space and we will come and look at it.</p>
            <div className="hcta-act">
              <Link className="hx-cta" href="/contact">Start a Project<span aria-hidden="true">&rarr;</span></Link>
              <a className="hx-link" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">WhatsApp us<span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <ul className="hcta-card rv" style={{ '--d': 1 } as React.CSSProperties}>
            <li><span>Call</span><a href="tel:+919990960669">+91 99909 60669</a></li>
            <li><span>WhatsApp</span><a href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">Message the studio</a></li>
            <li><span>Instagram</span><a href="https://www.instagram.com/wallofgarden" target="_blank" rel="noopener noreferrer">@wallofgarden &rarr;</a></li>
            <li><span>Studio</span><b>Janakpuri, New Delhi</b></li>
            <li><span>Coverage</span><b>Delhi NCR &amp; pan-India</b></li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
