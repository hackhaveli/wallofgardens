import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Services — Landscaping, Living Walls & Green Spaces | Wall of Gardens',
  description: 'Six disciplines from one Delhi NCR studio: corporate landscaping, vertical gardens, terrace gardens, balcony gardens, preserved moss walls and corporate plantscaping.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Services</div>
          <div className="rule-tag"><span className="tag gold">Sheet 00 — Register</span></div>
          <h1 className="d1">Six disciplines, one studio.</h1>
          <p className="lede light">
            Every one of them is designed, installed and maintained by the same team. <em className="g">Which one you need is usually decided by the space, not the budget.</em>
          </p>
        </div>
      </section>

      {/* SELECTOR */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Selection</span></div>
              <h2 className="d2">Start with where the space is.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                Two questions get most enquiries to the right place: is the space indoors or outdoors, and are we working on a wall, a floor or a roof.
              </p>
            </div>
          </div>

          <div className="mtx rv">
            <div className="mtx-r mtx-h">
              <div className="mtx-c"><span>Space</span></div>
              <div className="mtx-c"><span>On a wall</span></div>
              <div className="mtx-c"><span>On the floor</span></div>
              <div className="mtx-c"><span>On a roof</span></div>
            </div>

            <div className="mtx-r">
              <div className="mtx-c"><span>Indoors</span></div>
              <div className="mtx-c">
                <Link href="/services/moss-wall">Moss Walls<small>No water, no light</small></Link>
                <Link href="/services/vertical-gardens">Vertical Gardens<small>Hybrid or artificial</small></Link>
              </div>
              <div className="mtx-c">
                <Link href="/services/plantscaping">Corporate Plantscaping<small>Installed &amp; maintained</small></Link>
              </div>
              <div className="mtx-c"><span className="none">&mdash;</span></div>
            </div>

            <div className="mtx-r">
              <div className="mtx-c"><span>Outdoors</span></div>
              <div className="mtx-c">
                <Link href="/services/vertical-gardens">Vertical Gardens<small>Natural, zoned irrigation</small></Link>
              </div>
              <div className="mtx-c">
                <Link href="/services/corporate-landscaping">Corporate Landscaping<small>Campuses &amp; commercial</small></Link>
                <Link href="/services/balcony-gardens">Balcony Gardens<small>Compact residential</small></Link>
              </div>
              <div className="mtx-c">
                <Link href="/services/terrace-garden">Terrace Gardens<small>Load &amp; drainage first</small></Link>
              </div>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '20px' }}>
            Not sure? Send a photograph. We will tell you which of these your space can actually support.
          </p>
        </div>
      </section>

      {/* REGISTER */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Register</span></div>
              <h2 className="d2">The six sheets.</h2>
            </div>
            <span className="tag">Each sheet carries its own technical detail</span>
          </div>

          <div className="reg">
            <Link className="rg rv" href="/services/corporate-landscaping">
              <span className="no">01</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <rect x="6" y="6" width="108" height="72" stroke="rgba(14,24,17,.28)" strokeWidth="1" fill="none" />
                  <rect x="7" y="7" width="20" height="70" fill="rgba(127,166,92,.2)" />
                  <rect x="7" y="7" width="106" height="10" fill="rgba(127,166,92,.2)" />
                  <rect x="38" y="22" width="46" height="26" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(14,24,17,.07)" />
                  <rect x="32" y="58" width="58" height="16" fill="rgba(127,166,92,.32)" />
                  <path d="M84 54 H44 m5 -3 -5 3 5 3" stroke="#7FA65C" strokeWidth="1.1" fill="none" />
                  <path d="M30 66 H68" stroke="#C8A55B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>Corporate Landscaping</h3>
                <div className="sub">Offices · Campuses · Commercial</div>
              </div>
              <p>Ground-level landscape delivered in phases so the site keeps running. Levels and drainage set before hardscape or planting.</p>
              <span className="go">Sheet 01 &rarr;</span>
            </Link>

            <Link className="rg rv dl1" href="/services/vertical-gardens">
              <span className="no">02</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <defs>
                    <linearGradient id="t1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C8A55B" stopOpacity=".4" />
                      <stop offset="55%" stopColor="#7FA65C" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#25506F" stopOpacity=".42" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="12" width="38" height="62" stroke="rgba(14,24,17,.28)" strokeWidth="1" fill="url(#t1)" />
                  <path d="M29 12 V70" stroke="#7FA65C" strokeWidth="1" strokeDasharray="2 4" />
                  <rect x="70" y="12" width="38" height="62" stroke="rgba(14,24,17,.28)" strokeWidth="1" fill="rgba(127,166,92,.24)" />
                  <path d="M64 12 V70 M64 24 H104 M64 43 H104 M64 62 H104" stroke="#C8A55B" strokeWidth="1" />
                  <g fill="#7FA65C">
                    <circle cx="86" cy="24" r="1.6" />
                    <circle cx="100" cy="24" r="1.6" />
                    <circle cx="86" cy="43" r="1.6" />
                    <circle cx="100" cy="43" r="1.6" />
                    <circle cx="86" cy="62" r="1.6" />
                    <circle cx="100" cy="62" r="1.6" />
                  </g>
                </svg>
              </div>
              <div>
                <h3>Vertical Gardens</h3>
                <div className="sub">Natural · Hybrid · Artificial</div>
              </div>
              <p>Living walls where structure, zoned irrigation and drainage are engineered before a single plant is specified.</p>
              <span className="go">Sheet 02 &rarr;</span>
            </Link>

            <Link className="rg rv dl2" href="/services/terrace-garden">
              <span className="no">03</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <rect x="10" y="60" width="100" height="14" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.06)" />
                  <path d="M10 60 H110 V56 L10 52 Z" fill="rgba(14,24,17,.08)" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                  <path d="M10 52 L110 56 L110 52 L10 48 Z" fill="rgba(200,165,91,.45)" stroke="#C8A55B" strokeWidth="1" />
                  <path d="M10 48 L110 52 L110 42 L10 38 Z" fill="rgba(127,166,92,.14)" stroke="rgba(14,24,17,.22)" strokeWidth="1" />
                  <path d="M10 38 L110 42" stroke="rgba(14,24,17,.36)" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M10 38 L110 42 L110 24 L10 20 Z" fill="rgba(127,166,92,.22)" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                  <g fill="#7FA65C" opacity=".8">
                    <circle cx="28" cy="15" r="4" />
                    <circle cx="52" cy="12" r="5" />
                    <circle cx="76" cy="15" r="4" />
                    <circle cx="96" cy="13" r="4.5" />
                  </g>
                </svg>
              </div>
              <div>
                <h3>Terrace Gardens</h3>
                <div className="sub">Rooftop · Load · Drainage</div>
              </div>
              <p>Rooftop landscapes built over your waterproofing, not onto it. Load worked out before the planting is chosen.</p>
              <span className="go">Sheet 03 &rarr;</span>
            </Link>

            <Link className="rg rv dl3" href="/services/balcony-gardens">
              <span className="no">04</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <circle cx="60" cy="40" r="30" stroke="rgba(14,24,17,.18)" strokeWidth="1" strokeDasharray="2 3" fill="none" />
                  <path d="M92 40 A32 32 0 0 1 28 40" stroke="#C8A55B" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  <rect x="50" y="30" width="20" height="20" stroke="rgba(14,24,17,.32)" strokeWidth="1" fill="rgba(14,24,17,.06)" />
                  <rect x="53" y="20" width="14" height="9" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(127,166,92,.16)" />
                  <rect x="71" y="33" width="9" height="14" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(127,166,92,.34)" />
                  <rect x="53" y="51" width="14" height="9" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(200,165,91,.3)" />
                  <rect x="40" y="33" width="9" height="14" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(190,120,60,.34)" />
                  <circle cx="60" cy="72" r="3" fill="#C8A55B" />
                </svg>
              </div>
              <div>
                <h3>Balcony Gardens</h3>
                <div className="sub">Compact · Residential</div>
              </div>
              <p>Small spaces planned to the square foot, with drainage contained so nothing reaches the balcony below.</p>
              <span className="go">Sheet 04 &rarr;</span>
            </Link>

            <Link className="rg rv dl4" href="/services/moss-wall">
              <span className="no">05</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <rect x="14" y="10" width="94" height="58" stroke="rgba(14,24,17,.2)" strokeWidth="1" fill="none" />
                  <rect x="14" y="10" width="26" height="58" fill="rgba(200,165,91,.16)" />
                  <rect x="88" y="10" width="20" height="58" fill="rgba(37,80,111,.16)" />
                  <rect x="14" y="10" width="94" height="18" fill="rgba(190,120,60,.16)" />
                  <rect x="40" y="28" width="48" height="40" fill="rgba(127,166,92,.3)" stroke="#7FA65C" strokeWidth="1.2" />
                  <circle cx="58" cy="52" r="3" fill="#7FA65C" />
                  <circle cx="74" cy="40" r="3" fill="#7FA65C" />
                  <path d="M14 74 H108" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <h3>Moss Walls</h3>
                <div className="sub">Preserved · Interiors only</div>
              </div>
              <p>Real moss, preserved rather than growing. No irrigation, no sunlight, no maintenance schedule to forget.</p>
              <span className="go">Sheet 05 &rarr;</span>
            </Link>

            <Link className="rg rv dl5" href="/services/plantscaping">
              <span className="no">06</span>
              <div className="thumb">
                <svg viewBox="0 0 120 84" aria-hidden="true">
                  <defs>
                    <linearGradient id="t2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C8A55B" stopOpacity=".34" />
                      <stop offset="45%" stopColor="#7FA65C" stopOpacity=".16" />
                      <stop offset="100%" stopColor="#7FA65C" stopOpacity=".03" />
                    </linearGradient>
                  </defs>
                  <rect x="14" y="12" width="94" height="60" stroke="rgba(14,24,17,.28)" strokeWidth="1" fill="url(#t2)" />
                  <path d="M12 12 V72" stroke="#C8A55B" strokeWidth="2" />
                  <path d="M42 12 V72 M66 12 V72 M90 12 V72" stroke="rgba(14,24,17,.16)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="90" y="30" width="18" height="26" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.07)" />
                  <g fill="#7FA65C">
                    <circle cx="26" cy="26" r="4" />
                    <circle cx="24" cy="56" r="3.4" />
                    <circle cx="54" cy="38" r="3" />
                    <circle cx="52" cy="64" r="2.6" />
                  </g>
                  <g fill="none" stroke="#C8A55B" strokeWidth="1.2">
                    <circle cx="78" cy="24" r="2.6" />
                    <circle cx="78" cy="62" r="2.6" />
                  </g>
                </svg>
              </div>
              <div>
                <h3>Corporate Plantscaping</h3>
                <div className="sub">Office planting · Maintained</div>
              </div>
              <p>Indoor planting specified against measured light, installed by us, maintained on contract. You own the plants.</p>
              <span className="go">Sheet 06 &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMMON TO ALL */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Common to all six</span></div>
              <h2 className="d2">Whatever the sheet, these do not change.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>
                Different disciplines, same working method. This is what you get on any project we take on.
              </p>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv tri"><span className="no">01</span><h3>A site visit before a price</h3><p>We establish light, water, drainage, load and access on site. Within Delhi NCR the visit is free and carries no obligation.</p></div>
            <div className="ir rv tri"><span className="no">02</span><h3>A line-item scope, not a lump sum</h3><p>Materials, quantities and timeline written out, so you can compare our quote against anyone else’s properly.</p></div>
            <div className="ir rv tri"><span className="no">03</span><h3>Our own crew on site</h3><p>Design, procurement and installation stay with the same team, so the person who drew it answers for it.</p></div>
            <div className="ir rv tri"><span className="no">04</span><h3>An honest answer about what will not work</h3><p>If a wall is too dark, a slab too loaded or a species wrong for the exposure, you hear it before the quote rather than after the install.</p></div>
            <div className="ir rv tri"><span className="no">05</span><h3>A written care schedule at handover</h3><p>What needs doing and when, so the work can be maintained by us, by your team, or by anyone competent.</p></div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Sequence</span></div>
              <h2 className="d2">Four stages, one point of contact.</h2>
            </div>
          </div>
          <div className="rail">
            <div className="rail-in">
              <div className="st rv"><span className="no">01 / Understand</span><h3>Site assessment</h3><p>Constraints established on site, before anything is priced.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Drawing &amp; spec</h3><p>Layout and material specification issued for sign-off.</p></div>
              <div className="st rv dl2"><span className="no">03 / Execute</span><h3>Installation</h3><p>Our crew, to an agreed timeline, around your site hours.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Handover &amp; care</h3><p>Written schedule, and a maintenance contract where you want one.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Wall of Gardens Services — Delhi NCR">
          <img src="/cta_bg.jpg" alt="Wall of Gardens Services" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Still not sure which one you need?</h2>
            <p className="lede light">Send a photograph and rough dimensions. We will tell you what the space can support before you commit to anything.</p>
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
