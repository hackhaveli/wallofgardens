import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesExplorer from '../components/ServicesExplorer';

export const metadata: Metadata = {
  title: 'Living Architecture Services — Vertical Gardens, Plant AMC, Moss Walls | Wall of Gardens',
  description: 'Six living architecture disciplines engineered by one studio across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad. Vertical living walls, corporate plant AMC, terrace landscapes, preserved moss walls, and workplace plantscaping.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Living Architecture Services | Wall of Gardens',
    description: 'Engineered vertical gardens, corporate plant maintenance AMC, terrace gardens, and preserved moss art across India.',
    url: 'https://wallofgardens.com/services',
    images: [{ url: '/cta_bg.jpg', width: 1200, height: 630, alt: 'Wall of Gardens Living Architecture Services' }],
  },
};

const STATS = [
  { n: '06', l: 'Dedicated Disciplines', s: 'Designed & maintained in-house' },
  { n: '100%', l: 'In-House Crew', s: 'Zero sub-contracting' },
  { n: 'On-Site', l: 'Studio Site Visit', s: 'Delhi NCR · Architectural Evaluation' },
  { n: '17 Oct 2021', l: 'Company Registered', s: 'Corporate & luxury residential' },
];

const INVARIANTS = [
  {
    no: '01',
    title: 'Light & Exposure Mapping',
    p: 'Measured at the actual surface, not at the room window. Natural light levels determine whether a wall should be living, hybrid, or preserved.',
  },
  {
    no: '02',
    title: 'Structural Load Calculation',
    p: 'Wet-weight analysis accounting for saturated growing media, root systems, and peak rainwater retention. Especially critical for terraces and high walls.',
  },
  {
    no: '03',
    title: 'Waterproofing Integrity First',
    p: 'We inspect, certify, or re-engineer substrate waterproofing before a single planter or bracket is mounted. Prevention costs a fraction of remediation.',
  },
  {
    no: '04',
    title: 'Sub-surface Automated Irrigation',
    p: 'Pressure-compensating drip systems with timed solenoid valves and dedicated runoff drain channels. No messy overspray or manual hose watering.',
  },
  {
    no: '05',
    title: 'Single-Team Responsibility',
    p: 'The same landscape architects and horticulturists who draft your drawings supervise installation and handle ongoing scheduled maintenance.',
  },
  {
    no: '06',
    title: 'Transparent Itemized Scope',
    p: 'Every bracket grade, substrate formulation, drainage layer, and plant cultivar is specified in line-item quotes with clear lead times.',
  },
];

const STEPS = [
  { no: '01', phase: 'Understand', title: 'Site Assessment', desc: 'We inspect orientation, lux levels, water supply, drainage routes, and slab load on site. Free across Delhi NCR.' },
  { no: '02', phase: 'Design', title: 'Drawings & Spec', desc: 'Architectural shop drawings, plant species palettes, and plumbing schematics issued for review before procurement.' },
  { no: '03', phase: 'Execute', title: 'In-House Installation', desc: 'Our trained crew fabricates sub-frames, installs irrigation, and plants out to an agreed project schedule.' },
  { no: '04', phase: 'Maintain', title: 'Handover & Upkeep', desc: 'Full care documentation plus scheduled maintenance contracts to keep your landscape thriving year-round.' },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* LUXURY HERO HEADER */}
      <section className="sv-hero on-dark" id="top">
        <div className="sv-hero-bg" aria-hidden="true">
          <Image
            src="/project_03.jpg"
            alt="Wall of Gardens living architecture"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Services</div>
          <div className="sv-trust">
            <span>Delhi NCR</span><i aria-hidden="true" />
            <span>Scope of Works</span><i aria-hidden="true" />
            <span>Living Architecture</span>
          </div>
          <h1 className="sv-hero-title">
            Six disciplines, <em className="g">engineered</em> under one studio.
          </h1>
          <p className="sv-hero-lede">
            Every living wall, corporate terrace, and indoor botanical installation is executed end-to-end by our own in-house architects and horticulturists. Which discipline you need is decided by your space’s light, load, and water access.
          </p>
          <div className="sv-hero-actions">
            <Link className="hx-cta" href="/contact">
              Book a Site Visit <span aria-hidden="true">&rarr;</span>
            </Link>
            <a className="hx-link" href="tel:+919990960669">
              Call studio: +91 99909 60669 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* KEY STATS BAR */}
          <div className="sv-stats">
            {STATS.map((s, i) => (
              <div key={i} className="sv-stat-item">
                <span className="sv-stat-num">{s.n}</span>
                <span className="sv-stat-lbl">{s.l}</span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,236,0.5)', marginTop: '4px', display: 'block' }}>{s.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICES SHOWCASE */}
      <section className="sec sheet" id="disciplines">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sheet 02 — Disciplines</span></div>
              <h2 className="d2">The six core disciplines.</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '60ch' }}>
                Filter by installation type or explore individual technical specifications below.
              </p>
            </div>
          </header>

          <ServicesExplorer />
        </div>
      </section>

      {/* SPACE DECISION MATRIX */}
      <section className="sec sec-t sheet" id="selector">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Selection Guide</span></div>
              <h2 className="d2">Where is your space?</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '58ch' }}>
                Two physical constraints decide 90% of specifications: whether the location is indoor or outdoor, and if it rests on a wall, floor, or roof slab.
              </p>
            </div>
          </header>

          <div className="sv-space-grid">
            <div className="sv-space-col">
              <div className="sv-space-header">
                <h3>On a Wall</h3>
                <span>Vertical Surfaces</span>
              </div>
              <Link href="/services/vertical-gardens" className="sv-space-item">
                <strong>Natural Living Walls</strong>
                <span>Outdoor or high-light interior walls with zoned automated drip irrigation.</span>
              </Link>
              <Link href="/services/moss-wall" className="sv-space-item">
                <strong>Preserved Moss Walls</strong>
                <span>Zero water, zero sunlight, zero plumbing. 100% natural acoustic greenery.</span>
              </Link>
              <Link href="/services/vertical-gardens" className="sv-space-item">
                <strong>Hybrid / Artificial Green Walls</strong>
                <span>For deep interior spaces where plumbing or natural daylight is impossible.</span>
              </Link>
            </div>

            <div className="sv-space-col">
              <div className="sv-space-header">
                <h3>On the Floor &amp; Grounds</h3>
                <span>Ground &amp; Interior</span>
              </div>
              <Link href="/services/plant-maintenance-amc" className="sv-space-item">
                <strong>Plant Maintenance Service (AMC)</strong>
                <span>Regular scheduled visits, organic feeding, pest control &amp; replacement guarantee for offices &amp; residences.</span>
              </Link>
              <Link href="/services/plantscaping" className="sv-space-item">
                <strong>Office Plantation &amp; Corporate Plantscaping</strong>
                <span>Indoor office plants installed and routinely serviced under SLA maintenance.</span>
              </Link>
              <Link href="/services/balcony-gardens" className="sv-space-item">
                <strong>Balcony Gardens</strong>
                <span>Compact residential spaces planned with concealed, zero-runoff drainage.</span>
              </Link>
            </div>

            <div className="sv-space-col">
              <div className="sv-space-header">
                <h3>On a Roof</h3>
                <span>High-Altitude</span>
              </div>
              <Link href="/services/terrace-garden" className="sv-space-item">
                <strong>Terrace Gardens</strong>
                <span>Structural load safety, waterproofing barrier, and high-flow drain cells first.</span>
              </Link>
              <Link href="/services/vertical-gardens" className="sv-space-item">
                <strong>Terrace Boundary Living Walls</strong>
                <span>Wind-rated modular vertical planters providing lush privacy screens.</span>
              </Link>
              <Link href="/contact" className="sv-space-item">
                <strong>Need custom feasibility?</strong>
                <span>Our structural engineers inspect roof slabs across Delhi NCR free of cost.</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE SIX INVARIANTS / ENGINEERING METHOD */}
      <section className="sec sec-d sheet on-dark" id="invariants">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">The Engineering Standard</span></div>
              <h2 className="d2">Whatever the project, these six rules never change.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                Every discipline shares the same strict methodology. This is how we ensure installations remain lush years after handover.
              </p>
            </div>
          </header>

          <div className="sv-invariants-grid">
            {INVARIANTS.map((inv) => (
              <div key={inv.no} className="sv-invariant-card">
                <span className="sv-invariant-num">RULE {inv.no}</span>
                <h3>{inv.title}</h3>
                <p>{inv.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEQUENCE: 4-STAGE EXECUTION */}
      <section className="sec sheet" id="process">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Project Sequence</span></div>
              <h2 className="d2">Four stages, one point of contact.</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '56ch' }}>
                From initial lux survey to ongoing routine care, you work with a unified team.
              </p>
            </div>
          </header>

          <div className="rail">
            <div className="rail-in">
              {STEPS.map((st) => (
                <div key={st.no} className="st rv">
                  <span className="no">{st.no} / {st.phase}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT CLOSING SECTION */}
      <section className="hcta on-dark" id="contact">
        <div className="hcta-bg rv" aria-hidden="true">
          <Image src="/cta_bg.jpg" alt="Wall of Gardens living architecture" fill sizes="100vw" />
        </div>
        <div className="shell hcta-in">
          <div className="hcta-copy rv">
            <div className="rule-tag"><span className="tag gold">Sheet 07 — Project Consultation</span></div>
            <h2 className="d2">Have a space that needs a greener direction?</h2>
            <p>
              Site visits within Delhi NCR are free and carry no obligation. Tell us about your space and our engineers will visit to measure light, water, and load constraints.
            </p>
            <div className="hcta-act">
              <Link className="hx-cta" href="/contact">
                Start a Project <span aria-hidden="true">&rarr;</span>
              </Link>
              <a className="hx-link" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
                WhatsApp the Studio <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <ul className="hcta-card rv" style={{ '--d': 1 } as React.CSSProperties}>
            <li>
              <span>Direct Call</span>
              <a href="tel:+919990960669">+91 99909 60669</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">Message our team</a>
            </li>
            <li>
              <span>Studio</span>
              <b>Janakpuri, New Delhi</b>
            </li>
            <li>
              <span>Coverage</span>
              <b>Delhi NCR &amp; pan-India</b>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
