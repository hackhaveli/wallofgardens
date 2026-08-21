'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSupabaseClient } from '../../lib/supabase';

const TYPE_TO_CAT: Record<string, string> = {
  'corporate landscaping': 'corporate',
  'corporate': 'corporate',
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
    cat: 'corporate',
    no: 'P—01',
    name: 'Corporate Office Landscape',
    client: 'To confirm',
    location: 'Gurugram',
    scope: 'Planted zones, green feature wall',
    year: '—',
    image: '/project_01.jpg',
  },
  {
    cat: 'moss',
    no: 'P—02',
    name: 'Preserved Moss Wall',
    client: 'To confirm',
    location: 'Delhi NCR',
    scope: 'Interior moss field, logo panel',
    year: '—',
    image: '/project_02.jpg',
  },
  {
    cat: 'vertical',
    no: 'P—03',
    name: 'Hybrid Living Wall',
    client: 'To confirm',
    location: 'Noida',
    scope: 'MS frame, zoned drip, mixed planting',
    year: '—',
    image: '/project_03.jpg',
  },
  {
    cat: 'terrace',
    no: 'P—04',
    name: 'Rooftop Garden Terrace',
    client: 'To confirm',
    location: 'New Delhi',
    scope: 'Build-up, drainage, deck & planting',
    year: '—',
    image: '/project_04.jpg',
  },
  {
    cat: 'balcony',
    no: 'P—05',
    name: 'Premium Balcony Garden',
    client: 'Private residence',
    location: 'Delhi NCR',
    scope: 'Vertical greening, deck, seating',
    year: '—',
    image: '/project_05.jpg',
  },
  {
    cat: 'plantscaping',
    no: 'P—06',
    name: 'Office Floor Plantscaping',
    client: 'To confirm',
    location: 'Gurugram',
    scope: 'Light survey, planting, maintenance',
    year: '—',
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
            cat: TYPE_TO_CAT[String(p.type || '').toLowerCase()] || 'corporate',
            no: p.id ? String(p.id).replace('-', '—') : 'P—01',
            name: p.name || 'Landscape Project',
            client: 'To confirm',
            location: p.location || 'Delhi NCR',
            scope: p.description || p.area || p.type || 'Custom landscaping',
            year: p.status || '—',
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
          <div className="rule-tag"><span className="tag gold">Sheet 09 — Project index</span></div>
          <h1 className="d1">Selected Work</h1>
          <p className="lede light">
            A record of spaces designed and executed by the studio. <em className="g">Each entry carries what it was, where it was, and what we actually built.</em>
          </p>
        </div>
      </section>

      {/* INDEX */}
      <section className="sec sheet">
        <div className="shell">
          <div className="notice rv">
            <strong>Placeholder index.</strong> Every entry below is a template. Replace the photographs, project names, locations, areas and years with real completed work before this page goes live — and confirm with each client whether their name can be published.
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
              data-filter="corporate"
              className={activeFilter === 'corporate' ? 'on' : ''}
              onClick={() => setActiveFilter('corporate')}
            >
              Corporate
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
                    <img
                      src={prj.image}
                      alt={prj.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
              <img src="/project_04.jpg" alt="Before existing condition" />
            </div>
            <div className="plate rvp has-img" data-n="After — completed">
              <img src="/project_01.jpg" alt="After completed" />
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
          <img src="/cta_bg.jpg" alt="Wall of Gardens Projects" />
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
