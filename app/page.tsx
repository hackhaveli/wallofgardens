import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { supabase } from '../lib/supabase';
import { DEFAULT_PROJECTS, DEFAULT_TESTIMONIALS } from '../lib/content-defaults';

export const metadata: Metadata = {
  title: 'Wall of Gardens — Living Architecture, Engineered | Delhi NCR',
  description: 'Vertical gardens, terraces and living walls engineered for corporate and premium residential spaces across Delhi NCR. Design, installation and maintenance under one team.',
};

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
      <section className="hero sheet on-dark" id="top">
        <div className="shell hero-in">
          <div className="hero-copy">
            <div className="rule-tag"><span className="tag gold">Sheet 01 — Delhi NCR — Est. 2019</span></div>
            <h1 className="d1">Living walls are <em className="g">built,</em> not planted.</h1>
            <p className="lede light">We design, engineer and install vertical gardens, terraces and living walls for corporate campuses and premium residences — then maintain them. One team from the first drawing to the third year.</p>
            <div className="hero-cta">
              <a className="btn btn-g" href="#work"><span>Selected Work</span></a>
              <Link className="btn btn-o" href="/contact"><span>Book a Site Visit</span></Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="rule-tag"><span className="tag light">Fig. 01 — Living wall section</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 300 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Technical cross-section of a living wall showing existing wall, steel frame, waterproof backing, panel system, growing medium, irrigation line and drainage channel"
              >
                {/* 01 existing wall (hatched) */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="16" y="20" width="34" height="330" stroke="rgba(244,243,236,.34)" strokeWidth="1" />
                  <path
                    d="M16 40 L50 20 M16 70 L50 50 M16 100 L50 80 M16 130 L50 110 M16 160 L50 140 M16 190 L50 170 M16 220 L50 200 M16 250 L50 230 M16 280 L50 260 M16 310 L50 290 M16 340 L50 320"
                    stroke="rgba(244,243,236,.16)"
                    strokeWidth="1"
                  />
                </g>

                {/* 02 MS frame standoff */}
                <g className="lyr" style={{ animationDelay: '.18s' }}>
                  <rect x="58" y="24" width="9" height="322" stroke="#C8A55B" strokeWidth="1.2" />
                  <path d="M50 60 H58 M50 150 H58 M50 240 H58 M50 330 H58" stroke="#C8A55B" strokeWidth="1.2" />
                </g>

                {/* 03 waterproof backing */}
                <g className="lyr" style={{ animationDelay: '.3s' }}>
                  <rect x="67" y="24" width="7" height="322" fill="rgba(200,165,91,.16)" stroke="#C8A55B" strokeWidth="1" />
                </g>

                {/* 04 panel / pocket system */}
                <g className="lyr" style={{ animationDelay: '.42s' }}>
                  <rect x="74" y="24" width="30" height="322" stroke="rgba(244,243,236,.3)" strokeWidth="1" />
                  <path
                    d="M74 70 H104 M74 116 H104 M74 162 H104 M74 208 H104 M74 254 H104 M74 300 H104"
                    stroke="rgba(244,243,236,.22)"
                    strokeWidth="1"
                  />
                </g>

                {/* 05 growing medium */}
                <g className="lyr" style={{ animationDelay: '.54s' }}>
                  <rect x="78" y="30" width="22" height="310" fill="rgba(127,166,92,.2)" />
                </g>

                {/* 06 planting */}
                <g className="lyr" style={{ animationDelay: '.66s' }} id="folia"></g>

                {/* 07 drip line */}
                <g className="lyr" style={{ animationDelay: '.8s' }}>
                  <path d="M89 18 V330" stroke="#7FA65C" strokeWidth="1.4" strokeDasharray="3 5" />
                  <circle cx="89" cy="70" r="2.4" fill="#7FA65C" />
                  <circle cx="89" cy="150" r="2.4" fill="#7FA65C" />
                  <circle cx="89" cy="230" r="2.4" fill="#7FA65C" />
                  <circle cx="89" cy="310" r="2.4" fill="#7FA65C" />
                </g>

                {/* 08 collection channel + fall */}
                <g className="lyr" style={{ animationDelay: '.92s' }}>
                  <path d="M58 350 H150 L150 366 L58 372 Z" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.1)" />
                  <path d="M150 358 h22" stroke="#C8A55B" strokeWidth="1.2" />
                  <path d="M166 354 l8 4 -8 4" stroke="#C8A55B" strokeWidth="1.2" fill="none" />
                </g>

                {/* leader lines */}
                <g className="lyr" style={{ animationDelay: '1.02s' }} stroke="rgba(244,243,236,.22)" strokeWidth="1">
                  <path d="M33 20 V10 H210" />
                  <path d="M62 24 V44 H210" />
                  <path d="M70 90 H210" />
                  <path d="M104 132 H210" />
                  <path d="M100 186 H210" />
                  <path d="M126 240 H210" />
                  <path d="M89 292 H210" />
                  <path d="M172 358 H210" />
                </g>
                <g
                  className="lyr"
                  style={{ animationDelay: '1.08s' }}
                  fill="rgba(244,243,236,.62)"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9"
                  letterSpacing="1"
                >
                  <text x="216" y="13">01</text>
                  <text x="216" y="47">02</text>
                  <text x="216" y="93">03</text>
                  <text x="216" y="135">04</text>
                  <text x="216" y="189">05</text>
                  <text x="216" y="243">06</text>
                  <text x="216" y="295">07</text>
                  <text x="216" y="361">08</text>
                </g>
              </svg>

              <div className="callouts" id="callouts">
                <div className="callout"><b>01</b><span>Existing wall</span></div>
                <div className="callout"><b>02</b><span>MS frame, stood off</span></div>
                <div className="callout"><b>03</b><span>Waterproof backing</span></div>
                <div className="callout"><b>04</b><span>Panel system</span></div>
                <div className="callout"><b>05</b><span>Growing medium</span></div>
                <div className="callout"><b>06</b><span>Planting</span></div>
                <div className="callout"><b>07</b><span>Drip line, zoned</span></div>
                <div className="callout"><b>08</b><span>Collection channel to drain</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEC STRIP */}
      <div className="strip">
        <div className="shell strip-in">
          <div className="strip-i"><b>Practice</b><span>Since 2019</span></div>
          <div className="strip-i"><b>Studio</b><span>Janakpuri, New Delhi</span></div>
          <div className="strip-i"><b>Coverage</b><span>Delhi NCR &amp; pan-India</span></div>
          <div className="strip-i"><b>Scope</b><span>Design &rarr; Install &rarr; Maintain</span></div>
        </div>
      </div>

      {/* CLIENTS */}
      <section className="cl">
        <div className="shell" style={{ marginBottom: '24px' }}><span className="tag">Spaces we have worked on</span></div>
        <div className="mq">
          <div className="mq-t">
            <span>S&amp;P Global</span><span>DLF</span><span>Godrej</span><span>Hira Group</span><span>Holiday Inn</span><span>Shangri-La</span>
          </div>
          <div className="mq-t" aria-hidden="true">
            <span>S&amp;P Global</span><span>DLF</span><span>Godrej</span><span>Hira Group</span><span>Holiday Inn</span><span>Shangri-La</span>
          </div>
        </div>
      </section>

      {/* SERVICES INDEX */}
      <section className="sec sheet" id="services">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 02 — Scope of works</span></div>
              <h2 className="d2">Six disciplines, one studio.</h2>
            </div>
            <Link className="tag gold" href="/services">All services &rarr;</Link>
          </div>

          <div className="idx">
            <Link className="ir rv" href="/services/corporate-landscaping">
              <span className="no">01</span>
              <h3>Corporate Landscaping</h3>
              <p>Green spaces for offices, campuses and commercial environments, coordinated with facilities teams.</p>
              <span className="go">View &rarr;</span>
            </Link>
            <Link className="ir rv" href="/services/vertical-gardens">
              <span className="no">02</span>
              <h3>Vertical Gardens</h3>
              <p>Natural, artificial and hybrid living walls, engineered before they are planted.</p>
              <span className="go">View &rarr;</span>
            </Link>
            <Link className="ir rv" href="/services/terrace-garden">
              <span className="no">03</span>
              <h3>Terrace Gardens</h3>
              <p>Rooftop landscapes designed around load, waterproofing and where the water actually goes.</p>
              <span className="go">View &rarr;</span>
            </Link>
            <Link className="ir rv" href="/services/balcony-gardens">
              <span className="no">04</span>
              <h3>Balcony Gardens</h3>
              <p>Compact spaces planned to the square foot so the balcony stays usable.</p>
              <span className="go">View &rarr;</span>
            </Link>
            <Link className="ir rv" href="/services/moss-wall">
              <span className="no">05</span>
              <h3>Moss Walls</h3>
              <p>Preserved moss installations. No irrigation, no sunlight, no watering schedule.</p>
              <span className="go">View &rarr;</span>
            </Link>
            <Link className="ir rv" href="/services/plantscaping">
              <span className="no">06</span>
              <h3>Corporate Plantscaping</h3>
              <p>Office indoor planting, installed and then maintained. The plants are yours; the upkeep is ours.</p>
              <span className="go">View &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec sec-t sheet" id="work">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 03 — Project index</span></div>
              <h2 className="d2">Selected Work</h2>
            </div>
            <Link href="/projects" className="tag">Placeholder entries — replace with real projects</Link>
          </div>

          {featuredProjects.map((p, idx) => (
            <Link key={p.id || idx} className="wk rv in" href="/projects">
              <div className="wk-m">
                <span className="no">{p.id ? p.id.replace('-', '—') : `P—0${idx + 1}`}</span>
                <h3>{p.name}</h3>
                <p>{p.description || p.area || p.type}</p>
                <div className="meta">{p.location || 'Delhi NCR'}<br />{p.type || 'Landscaping'}</div>
              </div>
              <div className="wk-f">
                <div
                  className="plate rvp has-img"
                  data-n={`${p.name} — ${p.location || 'Delhi NCR'}`}
                  style={{ minHeight: '280px', width: '100%', position: 'relative', display: 'block' }}
                >
                  <img
                    src={p.img || `/project_0${idx + 1}.jpg`}
                    alt={p.alt || p.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="sec sec-d sheet on-dark" id="method">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Sheet 04 — Method</span></div>
              <h2 className="d2">A quote written without these answers is a guess.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>
                This is what we establish on site before we price anything. It is also why our scopes read as line items rather than one lump-sum number.
              </p>
            </div>
          </div>

          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Light, measured at the wall</h3><p>Not at the window. Most interior positions get far less usable light than they appear to — this alone decides natural, hybrid or artificial.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Water and drain access</h3><p>A supply point, and somewhere for the collection channel to discharge. Without both, a living wall becomes a manual watering job.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Structural load</h3><p>Wet weight of medium, planters, hardscape and water. On terraces this frequently changes the whole design.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Existing waterproofing</h3><p>Its age and condition. Redoing it before landscaping costs a fraction of redoing it after.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Maintenance access</h3><p>How the top of a wall gets reached in year two. A wall nobody can service is a wall that dies quietly.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Who maintains it</h3><p>What upkeep you will realistically fund. We would rather specify to that than to an ideal nobody sustains.</p></div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 05 — Sequence</span></div>
              <h2 className="d2">Four stages, one point of contact.</h2>
            </div>
          </div>
          <div className="rail">
            <div className="rail-in">
              <div className="st rv"><span className="no">01 / Understand</span><h3>Site assessment</h3><p>We establish the constraints above, on site, before anything is priced.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Drawing &amp; spec</h3><p>Layout and material specification issued for sign-off before procurement begins.</p></div>
              <div className="st rv dl2"><span className="no">03 / Execute</span><h3>Installation</h3><p>Our own crew, to an agreed timeline, working around your site hours.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Handover &amp; care</h3><p>Written care schedule, and a maintenance contract where you want one.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 06 — References</span></div>
              <h2 className="d2">What clients say.</h2>
            </div>
            <span className="tag">Confirm consent before publishing</span>
          </div>
          <div className="qs">
            {testimonials.map((t, idx) => (
              <div key={t.id || idx} className={`q rv ${idx === 1 ? 'dl1' : idx === 2 ? 'dl2' : ''}`}>
                <p>{t.quote}</p>
                <div className="w">{t.author} <em>{t.service}</em></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Living Wall Installation — Wall of Gardens">
          <img src="/cta_bg.jpg" alt="Living Wall Installation" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Sheet 07 — Contact</span></div>
            <h2 className="d2">Have a space that needs a greener direction?</h2>
            <p className="lede light">Site visits within Delhi NCR are free and carry no obligation. Tell us about the space and we will come and look at it.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '30px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Start a Project</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
