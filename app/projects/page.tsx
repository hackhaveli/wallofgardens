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
  {
    cat: 'vertical',
    no: 'VG—01',
    name: 'Holiday Inn Multi-Story Living Wall',
    client: 'Holiday Inn Atrium (Client details pending)',
    location: 'Hospitality Atrium, Delhi NCR',
    scope: '850 sq.ft multi-story outdoor living wall integrated with illuminated corporate logo and multi-zone drip',
    year: 'Completed & Maintained',
    image: '/projects/vertical-gardens/holiday-inn-atrium.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—02',
    name: 'Architectural Staircase Living Columns',
    client: 'Corporate HQ (Client details pending)',
    location: 'CyberCity, Gurugram',
    scope: 'Double-height living wall columns alternating with black fluted architectural louvers & industrial track lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/architectural-staircase.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—03',
    name: 'Courtyard Atrium Skylight Living Wall',
    client: 'Luxury Private Residence (Client details pending)',
    location: 'South Delhi',
    scope: 'Double-height courtyard atrium living wall flanked by carved stone cladding & skylight daylighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/courtyard-atrium-skylight.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—04',
    name: 'Resort Poolside Pergola Living Wall',
    client: 'Luxury Wellness Resort (Client details pending)',
    location: 'NCR Resort & Spa',
    scope: '600 sq.ft expansive poolside living wall with teak cabana pergolas, purple Tradescantia, and ribbon grass',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/resort-poolside-pergola.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—05',
    name: 'Curved Wave Multi-Species Living Wall',
    client: 'Penthouse Pool Terrace (Client details pending)',
    location: 'Greater Kailash, New Delhi',
    scope: 'Diagonal bands of golden Chlorophytum, Sedum, and purple Tradescantia with poolside timber decking',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/multi-species-wave-wall.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—06',
    name: 'Commercial Plaza LED Living Wall',
    client: 'Commercial Plaza & Lobby (Client details pending)',
    location: 'Aerocity, New Delhi',
    scope: 'Full-length plaza living wall with polished granite flooring, drainage channel, and integrated LED ground lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/commercial-plaza-uplight.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—07',
    name: 'Teak Feature Living Wall Entryway',
    client: 'Private Architectural Villa (Client details pending)',
    location: 'Golf Course Road, Gurugram',
    scope: 'Vertical living wall columns flanking teak timber facade with architectural sconce lighting',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/teak-sconce-feature-wall.jpg',
  },
  {
    cat: 'vertical',
    no: 'VG—08',
    name: 'Basalt Walkway Linear Living Wall',
    client: 'Contemporary Villa Walkway (Client details pending)',
    location: 'Chhatarpur, New Delhi',
    scope: 'Linear full-height living wall along basalt walkway with river pebble inlay and fluted ceiling soffit',
    year: 'Completed 2024',
    image: '/projects/vertical-gardens/basalt-walkway-living-wall.jpg',
  },
  {
    cat: 'amc',
    no: 'P—01',
    name: 'Corporate Plant AMC & Maintenance',
    client: 'Multinational Tech Campus',
    location: 'Cyber City, Gurugram',
    scope: '650+ indoor desk plants, atrium living wall, weekly visits & zero-mortality replacement SLA',
    year: 'Ongoing AMC',
    image: '/project_01.jpg',
  },
  {
    cat: 'moss',
    no: 'P—02',
    name: 'Executive Boardroom Moss Wall',
    client: 'Private Equity & Advisory Firm',
    location: 'Barakhamba Road, Connaught Place, New Delhi',
    scope: 'Zero-irrigation preserved Scandinavian moss with bespoke brushed-gold brand inlay',
    year: 'Completed 2024',
    image: '/project_02.jpg',
  },
  {
    cat: 'terrace',
    no: 'P—04',
    name: 'Rooftop Terrace Garden & Lounge',
    client: 'Private Luxury Villa',
    location: 'Golf Links, New Delhi',
    scope: 'Slab load calculation, dual-layer root barrier, high-flow drain cells, custom deck & evening lighting',
    year: 'Completed 2024',
    image: '/project_04.jpg',
  },
  {
    cat: 'balcony',
    no: 'P—05',
    name: 'Bespoke Balcony Garden Sanctuary',
    client: 'High-Rise Penthouse Residence',
    location: 'Golf Course Road, Gurugram',
    scope: 'Zero-runoff drainage containment, custom lightweight planters & privacy screen vertical planting',
    year: 'Completed 2024',
    image: '/project_05.jpg',
  },
  {
    cat: 'amc',
    no: 'P—06',
    name: 'Biophilic Office Plantscaping & AMC',
    client: 'Global Consulting Headquarters',
    location: 'Sector 132, Noida Expressway',
    scope: 'Lux-survey mapped indoor cultivars, sub-irrigation planter systems & bi-weekly professional upkeep',
    year: 'Ongoing AMC',
    image: '/project_06.jpg',
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState(DEFAULT_PROJECT_ITEMS);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('projects').select('*').order('order_index', { ascending: true })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: { data: any[] | null }) => {
        if (res.data && res.data.length > 0) {
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
          <div className="notice rv" style={{ background: 'rgba(200,165,91,0.08)', borderColor: 'rgba(200,165,91,0.3)', color: 'var(--deep)' }}>
            <strong>Execution standards across Delhi NCR.</strong> Every installation below is engineered, fabricated, and maintained by our own in-house teams. Site visits for corporate facilities and private residences are free of charge.
          </div>

          <div className="filters rv" id="filters">
            <button
              data-filter="all"
              className={activeFilter === 'all' ? 'on' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              data-filter="amc"
              className={activeFilter === 'amc' ? 'on' : ''}
              onClick={() => setActiveFilter('amc')}
            >
              Plant AMC
            </button>
            <button
              data-filter="vertical"
              className={activeFilter === 'vertical' ? 'on' : ''}
              onClick={() => setActiveFilter('vertical')}
            >
              Vertical Gardens
            </button>
            <button
              data-filter="terrace"
              className={activeFilter === 'terrace' ? 'on' : ''}
              onClick={() => setActiveFilter('terrace')}
            >
              Terrace
            </button>
            <button
              data-filter="balcony"
              className={activeFilter === 'balcony' ? 'on' : ''}
              onClick={() => setActiveFilter('balcony')}
            >
              Balcony
            </button>
            <button
              data-filter="moss"
              className={activeFilter === 'moss' ? 'on' : ''}
              onClick={() => setActiveFilter('moss')}
            >
              Moss Walls
            </button>
            <button
              data-filter="plantscaping"
              className={activeFilter === 'plantscaping' ? 'on' : ''}
              onClick={() => setActiveFilter('plantscaping')}
            >
              Plantscaping
            </button>
          </div>

          <div className="prj-grid">
            {projects.map((prj, i) => {
              const isVisible = activeFilter === 'all' || activeFilter === prj.cat;
              if (!isVisible) return null;
              return (
                <a key={i} className="prj rv" data-cat={prj.cat} href="#">
                  <div className="prj-f">
                    <div
                      className="plate rvp has-img"
                      data-n={`${prj.name} — ${prj.location}`}
                      style={{ minHeight: '260px', width: '100%', position: 'relative', display: 'block' }}
                    >
                      <Image
                        src={prj.image}
                        alt={prj.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 600px"
                        unoptimized={!canOptimize(prj.image)}
                      />
                    </div>
                  </div>
                  <div className="tblock">
                    <div className="tb"><span className="k">No.</span><span className="v big">{prj.no}</span></div>
                    <div className="tb"><span className="k">Project</span><span className="v name">{prj.name}</span></div>
                    <div className="tb"><span className="k">Client</span><span className={`v ${prj.client === 'To confirm' ? 'tbd' : ''}`}>{prj.client}</span></div>
                    <div className="tb"><span className="k">Location</span><span className="v">{prj.location}</span></div>
                    <div className="tb"><span className="k">Scope</span><span className="v">{prj.scope}</span></div>
                    <div className="tb"><span className="k">Year</span><span className="v tbd">{prj.year}</span></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDY TEMPLATE */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Case study — template</span></div>
              <h2 className="d2">One project, told properly.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '60ch' }}>
                Corporate buyers do not need twenty photographs. They need one project explained end to end — what the constraint was, what we did about it, and what happened afterwards. This is the format. Two or three of these will do more than a full gallery.
              </p>
            </div>
          </div>

          <div className="cs-imgs rv">
            <div className="plate rvp has-img" data-n="Before — existing condition">
              <Image src="/project_04.jpg" alt="Before existing condition" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="plate rvp has-img" data-n="After — completed">
              <Image src="/project_01.jpg" alt="After completed" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>

          <div className="cs-grid rv">
            <div className="cs-i">
              <span className="no">01 — Brief</span>
              <h3>What the client wanted</h3>
              <p>One or two sentences on what was asked for and why. Keep it in the client’s language rather than ours — “the reception felt cold and corporate” is more useful than a specification.</p>
            </div>
            <div className="cs-i">
              <span className="no">02 — Constraint</span>
              <h3>What made it difficult</h3>
              <p>The real technical problem: too little light, no drain, a loaded slab, a live office floor, a fortnight before an audit. This is the part that proves you knew what you were doing.</p>
            </div>
            <div className="cs-i">
              <span className="no">03 — Approach</span>
              <h3>What we actually did</h3>
              <p>The decision and why it was made — hybrid instead of natural, three irrigation zones instead of one, phased so the entrance stayed open. Name the materials and the system.</p>
            </div>
            <div className="cs-i">
              <span className="no">04 — Outcome</span>
              <h3>How it held up</h3>
              <p>What it looks like now, how long it has been in, and what maintenance it takes. A line from the client here is worth more than anywhere else on the site.</p>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '24px', maxWidth: '70ch', lineHeight: 1.8 }}>
            Replace this template with a real project. The before photograph matters as much as the after one — it is what makes the result legible.
          </p>
        </div>
      </section>

      {/* WHAT TO SUPPLY */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Studio note</span></div>
              <h2 className="d2">What this page needs before it goes live.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>
                Written for whoever is filling this in. Remove this section before publishing.
              </p>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>One strong photograph per project</h3><p>Wide, level, taken in even light. A single good photograph beats six average ones, and the plate above is sized 16:7 for a reason.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Before photographs</h3><p>Even a phone photo of the empty terrace or bare wall. Without it, nobody can read what changed.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Written client permission</h3><p>Before publishing any client name. For corporate work this usually needs to come from their marketing or facilities lead in writing.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Real areas and years</h3><p>Square footage and completion year. If a figure is not certain, leave it blank rather than estimating it.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Two or three full case studies</h3><p>Using the four-part format above. These convert corporate enquiries far better than the index does.</p></div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Clients</span></div>
              <h2 className="d2">Spaces we have worked on.</h2>
            </div>
            <span className="tag">Replace with supplied logo files</span>
          </div>
          <div className="cl rv">
            <span>S&amp;P Global</span><span>DLF</span><span>Godrej</span>
            <span>Hira Group</span><span>Holiday Inn</span><span>Shangri-La</span>
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
            <p className="lede light">Send us photographs and rough dimensions. Site visits within Delhi NCR are free and carry no obligation.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Book a Site Visit</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
