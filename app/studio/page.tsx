import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About the Studio — Living Architecture Practice | Wall of Gardens',
  description: 'Wall of Gardens is India’s premier living architecture and vertical garden engineering practice registered on 17 October 2021. In-house design, procurement, fabrication, and maintenance across Delhi NCR, Bengaluru, and Mumbai.',
  alternates: { canonical: '/studio' },
  openGraph: {
    title: 'About Wall of Gardens — Living Architecture Practice',
    description: 'In-house landscape architects and horticulturists engineering living walls and corporate landscapes across India.',
    url: 'https://wallofgardens.com/studio',
    images: [{ url: '/cta_bg.jpg', width: 1200, height: 630, alt: 'Wall of Gardens Studio' }],
  },
};

const ENTERPRISE_CLIENTS = [
  {
    name: 'S&P Global',
    city: 'Cyber City, Gurugram',
    category: 'Fortune 500 Financial',
    scope: 'Indoor Corporate Plantscaping & Executive Lounge Living Foliage',
  },
  {
    name: 'DLF Limited',
    city: 'Delhi NCR',
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
    city: 'Pan-India',
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

export default function StudioPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Studio</div>
          <div className="rule-tag"><span className="tag gold">Sheet 07 — Practice</span></div>
          <h1 className="d1">A landscape studio that stays on site.</h1>
          <p className="lede light">
            Working across Delhi NCR since registration on 17 October 2021, on corporate, hospitality and residential projects. <em className="g">Design and execution held by the same team, deliberately.</em>
          </p>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="ov-copy rv">
            <div className="rule-tag"><span className="tag">The practice</span></div>
            <h2 className="d2">Most landscaping fails between the drawing and the wall.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              The usual chain has four handoffs in it. A designer draws something, a contractor prices it, a subcontractor builds it, and maintenance is somebody else’s problem entirely. Every joint in that chain is a place where a detail gets dropped — a drainage layer value-engineered out, a species swapped for whatever was available, a wall built with no way to service it.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              We built Wall of Gardens the other way round. Design, procurement, installation and aftercare sit with the same team, so the person who drew the detail is the person who answers for it two years later. That is not a marketing position. It is why the technical detail on this site exists at all.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 11 — Delivery model</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Two delivery chains compared. The typical chain has separate designer, contractor and subcontractor stages with handoff gaps and unowned maintenance. The studio model holds design, procurement, installation and maintenance in one continuous team."
              >
                {/* LABEL A */}
                <text className="lyr" style={{ animationDelay: '.05s' }} x="14" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.5)" letterSpacing="1">
                  A — TYPICAL CHAIN
                </text>

                {/* chain A boxes */}
                <g className="lyr" style={{ animationDelay: '.16s' }} fontFamily="IBM Plex Mono, monospace" fontSize="7">
                  <rect x="14" y="34" width="56" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <text x="26" y="53" fill="rgba(14,24,17,.55)">CLIENT</text>

                  <rect x="86" y="34" width="62" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <text x="96" y="53" fill="rgba(14,24,17,.55)">DESIGNER</text>

                  <rect x="164" y="34" width="70" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <text x="172" y="53" fill="rgba(14,24,17,.55)">CONTRACTOR</text>

                  <rect x="250" y="34" width="76" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <text x="256" y="53" fill="rgba(14,24,17,.55)">SUBCONTRACTOR</text>
                </g>

                {/* handoff gaps */}
                <g className="lyr" style={{ animationDelay: '.34s' }} stroke="#B4763C" strokeWidth="1.4">
                  <path d="M74 44 l8 10 m0 -10 l-8 10" />
                  <path d="M152 44 l8 10 m0 -10 l-8 10" />
                  <path d="M238 44 l8 10 m0 -10 l-8 10" />
                </g>
                <text className="lyr" style={{ animationDelay: '.42s' }} x="14" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(180,118,60,.85)" letterSpacing=".6">
                  THREE HANDOFFS — DETAIL DROPS AT EACH
                </text>

                {/* unowned maintenance */}
                <g className="lyr" style={{ animationDelay: '.52s' }}>
                  <rect x="164" y="96" width="162" height="26" stroke="rgba(14,24,17,.22)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                  <text x="176" y="113" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.35)" letterSpacing="1">
                    MAINTENANCE — UNOWNED
                  </text>
                  <path d="M288 64 V96" stroke="rgba(14,24,17,.2)" strokeWidth="1" strokeDasharray="3 3" />
                </g>

                {/* divider */}
                <path className="lyr" style={{ animationDelay: '.62s' }} d="M14 142 H326" stroke="rgba(14,24,17,.14)" strokeWidth="1" />

                {/* LABEL B */}
                <text className="lyr" style={{ animationDelay: '.7s' }} x="14" y="168" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.6)" letterSpacing="1">
                  B — WALL OF GARDENS
                </text>

                {/* chain B */}
                <g className="lyr" style={{ animationDelay: '.82s' }} fontFamily="IBM Plex Mono, monospace" fontSize="7">
                  <rect x="14" y="182" width="56" height="34" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <text x="26" y="203" fill="rgba(14,24,17,.55)">CLIENT</text>

                  <rect x="78" y="182" width="248" height="34" stroke="#7FA65C" strokeWidth="1.4" fill="rgba(127,166,92,.16)" />
                  <path d="M140 182 V216 M202 182 V216 M264 182 V216" stroke="rgba(127,166,92,.6)" strokeWidth="1" />
                  <text x="88" y="203" fill="rgba(14,24,17,.62)">DESIGN</text>
                  <text x="148" y="203" fill="rgba(14,24,17,.62)">PROCURE</text>
                  <text x="212" y="203" fill="rgba(14,24,17,.62)">INSTALL</text>
                  <text x="272" y="203" fill="rgba(14,24,17,.62)">MAINTAIN</text>
                </g>
                <g className="lyr" style={{ animationDelay: '.94s' }}>
                  <path d="M70 199 h8 m-4 -4 4 4 -4 4" stroke="#7FA65C" strokeWidth="1.3" fill="none" />
                </g>
                <text className="lyr" style={{ animationDelay: '1.0s' }} x="14" y="234" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(94,132,66,.9)" letterSpacing=".6">
                  ONE TEAM — ONE POINT OF ACCOUNTABILITY
                </text>
              </svg>

              <div className="callouts" id="co1">
                <div className="callout"><b>✕</b><span>Handoff — where detail gets dropped</span></div>
                <div className="callout"><b>□</b><span>Dashed: nobody owns it</span></div>
                <div className="callout"><b>■</b><span>Continuous: same team throughout</span></div>
                <div className="callout"><b>→</b><span>One contact, start to aftercare</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="sec sec-t sheet">
        <div className="shell ov flip">
          <div className="ov-copy rv">
            <div className="rule-tag"><span className="tag">Where we work</span></div>
            <h2 className="d2">Studio in Janakpuri. Crews across NCR.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Design and specification happen at our studio on the sixth floor at MERI, Janakpuri. Installation crews work across Delhi, Gurugram, Noida, Ghaziabad and Faridabad — close enough that a maintenance visit is a routine thing rather than an expedition.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              We take project work elsewhere in India where the scope justifies mobilising a crew. If it does not, we will say so rather than quote a number that only works on paper.
            </p>
            <div className="tag" style={{ marginTop: '26px', lineHeight: 2 }}>
              6th Floor, MERI, Janakpuri, New Delhi – 110058<br />
              GSTIN 07AADCW0848G1ZB
            </div>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 12 — Coverage</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Schematic coverage diagram showing the studio in west Delhi with crews working across Delhi, Gurugram, Noida, Ghaziabad and Faridabad."
              >
                {/* rings from studio */}
                <g className="lyr" style={{ animationDelay: '.05s' }} stroke="rgba(200,165,91,.34)" strokeWidth="1" strokeDasharray="3 5" fill="none">
                  <circle cx="118" cy="128" r="46" />
                  <circle cx="118" cy="128" r="86" />
                  <circle cx="118" cy="128" r="126" />
                </g>

                {/* delhi mass */}
                <g className="lyr" style={{ animationDelay: '.18s' }}>
                  <path
                    d="M96 54 L168 46 L204 76 L212 130 L188 176 L134 194 L86 172 L64 124 L70 78 Z"
                    fill="rgba(127,166,92,.2)"
                    stroke="rgba(14,24,17,.26)"
                    strokeWidth="1"
                  />
                  <text x="140" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.5)" letterSpacing="1">
                    DELHI
                  </text>
                </g>

                {/* studio marker */}
                <g className="lyr" style={{ animationDelay: '.34s' }}>
                  <circle cx="118" cy="128" r="7" fill="#C8A55B" />
                  <circle cx="118" cy="128" r="12" stroke="#C8A55B" strokeWidth="1" />
                  <path d="M111 128 H60" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <text x="10" y="124" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.55)" letterSpacing=".6">
                    STUDIO
                  </text>
                  <text x="10" y="134" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.4)">
                    JANAKPURI
                  </text>
                </g>

                {/* satellite nodes */}
                <g className="lyr" style={{ animationDelay: '.5s' }} fontFamily="IBM Plex Mono, monospace" fontSize="7.5">
                  <g stroke="rgba(14,24,17,.24)" strokeWidth="1" strokeDasharray="2 3">
                    <path d="M118 128 L62 208" />
                    <path d="M118 128 L232 178" />
                    <path d="M118 128 L250 92" />
                    <path d="M118 128 L152 236" />
                  </g>
                  <g fill="#7FA65C">
                    <circle cx="62" cy="208" r="5" />
                    <circle cx="232" cy="178" r="5" />
                    <circle cx="250" cy="92" r="5" />
                    <circle cx="152" cy="236" r="5" />
                  </g>
                  <g fill="rgba(14,24,17,.55)">
                    <text x="14" y="224">GURUGRAM</text>
                    <text x="242" y="182">NOIDA</text>
                    <text x="260" y="96">GHAZIABAD</text>
                    <text x="162" y="248">FARIDABAD</text>
                  </g>
                </g>

                {/* ring labels */}
                <g className="lyr" style={{ animationDelay: '.66s' }} fontFamily="IBM Plex Mono, monospace" fontSize="6.5" fill="rgba(200,165,91,.85)" letterSpacing=".6">
                  <text x="124" y="86">CORE</text>
                  <text x="124" y="46">NCR</text>
                  <text x="124" y="8">PROJECT WORK</text>
                </g>

                <text className="lyr" style={{ animationDelay: '.78s' }} x="10" y="272" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.36)" letterSpacing=".8">
                  SCHEMATIC. NOT TO SCALE.
                </text>
              </svg>

              <div className="callouts" id="co2">
                <div className="callout"><b>●</b><span>Studio — design &amp; specification</span></div>
                <div className="callout"><b>●</b><span>Regular crew coverage</span></div>
                <div className="callout"><b>○</b><span>Routine maintenance radius</span></div>
                <div className="callout"><b>○</b><span>Project work by arrangement</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Approach</span></div>
              <h2 className="d2">How we work, put plainly.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv tri">
              <span className="no">01</span>
              <h3>Design-led, site-first</h3>
              <p>Every project develops around the architecture, the exposure and the intended use. We do not fit sites to a standard package.</p>
            </div>
            <div className="ir rv tri">
              <span className="no">02</span>
              <h3>Specified to what you will maintain</h3>
              <p>An honest answer about upkeep changes the specification. We would rather design to the care you will actually fund than to an ideal nobody sustains.</p>
            </div>
            <div className="ir rv tri">
              <span className="no">03</span>
              <h3>Line items, not lump sums</h3>
              <p>Scopes are written out with materials, quantities and timeline, so you can compare them properly against anyone else’s.</p>
            </div>
            <div className="ir rv tri">
              <span className="no">04</span>
              <h3>Our own crew</h3>
              <p>The people on your site are our people. That is what makes accountability possible rather than theoretical.</p>
            </div>
            <div className="ir rv tri">
              <span className="no">05</span>
              <h3>Accountable past handover</h3>
              <p>Aftercare is part of the scope, not a separate conversation with a separate vendor once something starts failing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE WON'T DO */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Constraints</span></div>
              <h2 className="d2">What we will not do.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                A short list, and the most useful thing on this page. Each of these has cost us work, and each one exists because the alternative fails within a year or two.
              </p>
            </div>
          </div>

          <div className="wont rv">
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Quote without seeing the site</h3>
                <p>Light, water, drainage, load and access decide the specification. A number given over the phone is a number for a different project.</p>
              </div>
            </div>
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Install a natural wall in the dark</h3>
                <p>If a wall gets too little light, we will propose hybrid or artificial. We will not sell a living wall that quietly thins out over six months.</p>
              </div>
            </div>
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Build over failing waterproofing</h3>
                <p>On a terrace this is the one thing that cannot be fixed later without dismantling everything above it. We will tell you before starting.</p>
              </div>
            </div>
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Rent you plants you never own</h3>
                <p>Office planting is sold once and maintained on contract. If you end the contract, the planting stays with you.</p>
              </div>
            </div>
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Put preserved moss outdoors</h3>
                <p>Including covered balconies. It is an interior material, and Delhi conditions will degrade it fast whatever anyone tells you.</p>
              </div>
            </div>
            <div className="wont-i">
              <svg className="mark" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" />
              </svg>
              <div>
                <h3>Build something nobody can service</h3>
                <p>If the top of a wall cannot be reached in year two, the design changes. A wall nobody can maintain is a wall that dies quietly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS + TEAM */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Enterprise Clients</span></div>
              <h2 className="d2">Spaces we have worked on.</h2>
              <p className="lede light" style={{ marginTop: '14px', maxWidth: '64ch' }}>
                Trusted by leading hospitality brands, developers, and corporate enterprises across Delhi NCR and pan-India.
              </p>
            </div>
            <span className="tag light">Selected Corporate &amp; Hospitality Partnerships</span>
          </div>

          <div className="client-showcase-grid rv" style={{ marginBottom: 'clamp(44px,5vw,72px)' }}>
            {ENTERPRISE_CLIENTS.map((c, i) => (
              <div key={c.name} className="client-card">
                <div className="client-card-head">
                  <span className="client-badge">{c.category}</span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'rgba(244,243,236,0.35)' }}>
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
          <div className="plate dk rvp has-img" data-n="Studio / Team — Wall of Gardens" style={{ aspectRatio: '21/8', minHeight: '220px' }}>
            <Image src="/project_01.jpg" alt="Wall of Gardens Studio and Team" fill sizes="(max-width: 1340px) 100vw, 1220px" />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Studio Janakpuri — Wall of Gardens">
          <Image src="/cta_bg.jpg" alt="Wall of Gardens Studio" fill sizes="100vw" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Come and see the studio, or let us come and see the space.</h2>
            <p className="lede light">Site visits within Delhi NCR are free and carry no obligation.</p>
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
