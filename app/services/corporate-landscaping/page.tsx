import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Corporate Landscaping & Commercial Grounds — Delhi NCR | Wall of Gardens',
  description: 'Corporate landscaping, commercial ground-level planting and phased site development across Delhi NCR. Levels and drainage engineered before hardscape or planting.',
};

export default function CorporateLandscapingPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Corporate Landscaping</div>
          <div className="rule-tag"><span className="tag gold">Sheet 01 — Scope of works</span></div>
          <h1 className="d1">Corporate Landscaping</h1>
          <p className="lede light">
            Green space for offices, campuses and commercial sites — delivered in phases, on a live site, <em className="g">without shutting your entrance for six weeks.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + SITE DRAINAGE PLAN */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="ov-copy rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">At ground level, water decides the design.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              On a terrace the constraint is load. On the ground it is drainage — where water collects, where it runs, and what the subsoil does with it once it arrives. On newer campuses the answer is often unhelpful: compacted subsoil and construction debris under a thin layer of topsoil, which holds water rather than taking it away.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              So levels come first, hardscape second, planting third. Reversing that order is how a site ends up with a beautiful lawn that stands under water for three days after every monsoon shower — and a facilities team that has to explain it.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 09 — Site levels &amp; water movement</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Site plan showing a building footprint, entrance forecourt, planted zones and lawn, with spot levels and arrows indicating how surface water moves across the site toward a collection swale."
              >
                {/* site boundary */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="20" y="24" width="296" height="228" stroke="rgba(14,24,17,.32)" strokeWidth="1" />
                </g>

                {/* planted zones */}
                <g className="lyr" style={{ animationDelay: '.16s' }}>
                  <rect x="21" y="25" width="52" height="226" fill="rgba(127,166,92,.16)" />
                  <rect x="21" y="25" width="294" height="26" fill="rgba(127,166,92,.16)" />
                  <rect x="256" y="25" width="59" height="226" fill="rgba(127,166,92,.16)" />
                </g>

                {/* lawn */}
                <g className="lyr" style={{ animationDelay: '.26s' }}>
                  <rect x="80" y="176" width="168" height="66" fill="rgba(127,166,92,.3)" stroke="rgba(14,24,17,.16)" strokeWidth="1" />
                  <text x="140" y="214" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.45)" letterSpacing="1">
                    LAWN
                  </text>
                </g>

                {/* building */}
                <g className="lyr" style={{ animationDelay: '.36s' }}>
                  <rect x="102" y="60" width="124" height="82" stroke="rgba(14,24,17,.4)" strokeWidth="1.2" fill="rgba(14,24,17,.06)" />
                  <path
                    d="M102 78 L120 60 M102 100 L142 60 M102 122 L164 60 M108 142 L186 64 M130 142 L208 64 M152 142 L226 68 M174 142 L226 90 M196 142 L226 112 M218 142 L226 134"
                    stroke="rgba(14,24,17,.13)"
                    strokeWidth="1"
                  />
                  <text x="128" y="106" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.5)" letterSpacing="1">
                    BUILDING
                  </text>
                </g>

                {/* forecourt paving */}
                <g className="lyr" style={{ animationDelay: '.46s' }}>
                  <rect x="102" y="146" width="124" height="26" stroke="rgba(14,24,17,.24)" strokeWidth="1" fill="rgba(14,24,17,.04)" />
                  <path d="M133 146 V172 M164 146 V172 M195 146 V172" stroke="rgba(14,24,17,.14)" strokeWidth="1" />
                  <text x="112" y="163" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.42)" letterSpacing="1">
                    FORECOURT
                  </text>
                </g>

                {/* spot levels */}
                <g className="lyr" style={{ animationDelay: '.6s' }} fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.5)">
                  <g stroke="rgba(14,24,17,.35)" strokeWidth="1">
                    <path d="M240 60 l4 4 -4 4 -4 -4 Z" />
                    <path d="M240 172 l4 4 -4 4 -4 -4 Z" />
                    <path d="M96 236 l4 4 -4 4 -4 -4 Z" />
                  </g>
                  <text x="248" y="67">+0.00</text>
                  <text x="248" y="179">&#8722;0.15</text>
                  <text x="104" y="243">&#8722;0.32</text>
                </g>

                {/* flow arrows */}
                <g className="lyr" style={{ animationDelay: '.74s' }} stroke="#7FA65C" strokeWidth="1.3" fill="none">
                  <path d="M226 158 H120 m6 -4 -6 4 6 4" />
                  <path d="M196 186 L128 232 m8 -1 -8 1 3 -7" />
                  <path d="M244 200 L152 240 m8 0 -8 0 2 -7" />
                  <path d="M88 120 V226 m-4 -6 4 6 4 -6" />
                </g>

                {/* swale / collection */}
                <g className="lyr" style={{ animationDelay: '.88s' }}>
                  <path d="M74 244 H176" stroke="#C8A55B" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="74" cy="244" r="6" stroke="#C8A55B" strokeWidth="1.4" fill="rgba(200,165,91,.18)" />
                  <text x="60" y="264" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)" letterSpacing="1">
                    COLLECTION &amp; SOAKAWAY
                  </text>
                </g>

                {/* north arrow */}
                <g className="lyr" style={{ animationDelay: '.98s' }}>
                  <path d="M300 268 V286 m0 -18 l-4 6 m4 -6 l4 6" stroke="rgba(14,24,17,.4)" strokeWidth="1.1" />
                  <text x="294" y="298" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.45)">
                    N
                  </text>
                </g>

                <text className="lyr" style={{ animationDelay: '1.04s' }} x="20" y="290" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.38)" letterSpacing=".8">
                  INDICATIVE. LEVELS SET FROM A SITE SURVEY.
                </text>
              </svg>

              <div className="callouts" id="co1">
                <div className="callout"><b>◆</b><span>Spot levels, falls set from these</span></div>
                <div className="callout"><b>→</b><span>Surface water movement</span></div>
                <div className="callout"><b>■</b><span>Planted zones &amp; boundary</span></div>
                <div className="callout"><b>■</b><span>Lawn, on free-draining build-up</span></div>
                <div className="callout"><b>●</b><span>Collection swale &amp; soakaway</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASING */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Programme</span></div>
              <h2 className="d2">Your site keeps running while we work on it.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '60ch' }}>
                A campus cannot close its entrance for six weeks, and a facilities team should not have to field complaints about an open site for a month. So corporate work is phased: each area is completed and handed back before the next one opens, and the entrance is done first because it is what everyone sees.
              </p>
            </div>
          </div>

          <div className="prog rv" id="prog">
            <div className="row">
              <div className="lbl">Survey &amp; setting out<small>Levels, services, access</small></div>
              <div className="track"><div className="bar" style={{ left: '0%', width: '10%' }}></div></div>
            </div>
            <div className="row">
              <div className="lbl">Phase 1 — Entrance &amp; forecourt<small>Highest visibility, done first</small></div>
              <div className="track">
                <div className="bar" style={{ left: '10%', width: '22%' }}></div>
                <div className="flag" style={{ left: 'calc(32% - 5px)' }}></div>
              </div>
            </div>
            <div className="row">
              <div className="lbl">Phase 2 — Boundary planting<small>Perimeter, no through access</small></div>
              <div className="track">
                <div className="bar" style={{ left: '30%', width: '24%' }}></div>
                <div className="flag" style={{ left: 'calc(54% - 5px)' }}></div>
              </div>
            </div>
            <div className="row">
              <div className="lbl">Phase 3 — Courtyard &amp; lawn<small>Drainage build-up, then planting</small></div>
              <div className="track">
                <div className="bar" style={{ left: '52%', width: '28%' }}></div>
                <div className="flag" style={{ left: 'calc(80% - 5px)' }}></div>
              </div>
            </div>
            <div className="row">
              <div className="lbl">Phase 4 — Irrigation &amp; lighting<small>Commissioned across all zones</small></div>
              <div className="track"><div className="bar" style={{ left: '70%', width: '18%' }}></div></div>
            </div>
            <div className="row">
              <div className="lbl">Snagging &amp; handover<small>Written care schedule issued</small></div>
              <div className="track">
                <div className="bar snag" style={{ left: '86%', width: '14%' }}></div>
                <div className="flag" style={{ left: 'calc(100% - 6px)' }}></div>
              </div>
            </div>
            <div className="axis">
              <div></div>
              <div className="ticks"><span>Week 0</span><span>3</span><span>6</span><span>9</span><span>12</span></div>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '24px', maxWidth: '70ch', lineHeight: 1.8 }}>
            Illustrative programme for a mid-size campus. Diamonds mark phase handovers — each area is returned to use before the next opens. Actual durations are set against your access rules and material lead times.
          </p>
        </div>
      </section>

      {/* WORKING ON A LIVE SITE */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Live sites</span></div>
              <h2 className="d2">What working on an occupied site actually involves.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                This is the part that separates a landscaping contractor from a vendor a facilities team will call back. None of it is glamorous, and all of it is what makes a project painless.
              </p>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Crew documentation</h3><p>Names, ID and police verification submitted in advance, so your security desk is not improvising on the first morning.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Working hours</h3><p>Noisy work scheduled outside core hours or over a weekend where the area is occupied. Agreed before we mobilise, not negotiated on site.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Material staging</h3><p>A defined lay-down area and delivery slots, so soil and planters are not sitting across your visitor parking for a fortnight.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Dust &amp; debris control</h3><p>Screening, daily clearing and a defined route for waste out of the site. Cutting and mixing kept away from air intakes and entrances.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Safe circulation</h3><p>Barriers and signed diversions around the active area, so people walking to their desks are never routed through a working zone.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Single point of contact</h3><p>One person your facilities lead calls, for the whole project. Not a different number for planting, hardscape and irrigation.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Documentation on handover</h3><p>As-installed planting schedule, irrigation zoning and a written care calendar — the things your team needs for its own reporting.</p></div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What a corporate project includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Site survey &amp; levels</h3><p>Existing falls, drainage points, services routes and soil condition established before anything is designed.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Grading &amp; drainage</h3><p>Falls set so water moves where you want it, with collection and soakaway where the subsoil will not take it.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Hardscape</h3><p>Paths, paving, kerbs, edging and seating areas, integrated with planting rather than added over it.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Planting design</h3><p>Trees, shrubs, groundcover and lawn chosen for soil, exposure and the maintenance budget you actually intend to fund.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Irrigation</h3><p>Sprinkler and drip zones on a controller, sized to planting groups rather than to the shape of the lawn.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Lighting</h3><p>Pathway, feature and facade lighting run in the same trenching as irrigation, before surfaces are finished.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Scheduled maintenance</h3><p>A visit cycle that keeps the site presentable year-round — considerably cheaper than replanting a campus every second year.</p></div>
          </div>
        </div>
      </section>

      {/* BEFORE WE QUOTE */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Method</span></div>
              <h2 className="d2">What we establish before pricing.</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>
                On a campus, most of the cost sits in things you cannot see from a photograph.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Soil &amp; subsoil</h3><p>What is actually under the surface. Compacted subsoil and construction debris are common on newer sites and change the entire approach.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Levels &amp; drainage</h3><p>Where water currently collects, and whether the ground will take it or needs a collection route built.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Buried services</h3><p>Cable, drainage and fire main routes before anything is excavated or planted with deep-rooting species.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Water source</h3><p>Supply, pressure and whether treated or recycled water is available for irrigation at campus scale.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Access &amp; sequencing</h3><p>How material reaches each area. On campuses this decides the programme more than the design does.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Maintenance budget</h3><p>What you will fund annually. We would rather specify to a real number than to an ideal nobody sustains.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Site assessment</h3><p>Levels, soil, services, water and access, plus your operational constraints.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Drawings &amp; programme</h3><p>Layout, planting schedule and a phased programme issued together for sign-off.</p></div>
              <div className="st rv dl2"><span className="no">03 / Execute</span><h3>Phased delivery</h3><p>Each area completed and handed back before the next one opens.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Scheduled visits</h3><p>A maintenance contract with a written calendar and visit records.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Questions</span></div>
              <h2 className="d2">Frequently asked.</h2>
            </div>
          </div>
          <div className="faq rv">
            <details>
              <summary>Can you work while the campus stays open?</summary>
              <p>Yes — that is the normal case rather than the exception. Work is phased, barriers and diversions keep people away from active zones, and anything noisy or dusty is scheduled around occupied hours. The entrance is usually done first and handed back quickly, because it is the area everyone forms an opinion about.</p>
            </details>
            <details>
              <summary>Do you work from an architect’s or consultant’s drawings?</summary>
              <p>Regularly. We can execute a supplied landscape design, or develop the green scope ourselves and coordinate with the architect, PMC and MEP teams. Where a supplied design has a drainage or soil issue we will raise it before we start rather than build it and let it fail.</p>
            </details>
            <details>
              <summary>How do you handle procurement and lead times?</summary>
              <p>Specific trees, stone and planters are usually the longest items — considerably longer than the installation itself. We identify those at design stage and order against the phased programme, so procurement is not what holds the site open.</p>
            </details>
            <details>
              <summary>Do you provide documentation for our records?</summary>
              <p>Yes. On handover you get an as-installed planting schedule, irrigation zoning drawings and a written care calendar. Facilities teams generally need these for their own asset records and audits, and they make it possible for any competent team to maintain the site later.</p>
            </details>
            <details>
              <summary>Is maintenance necessary, or can our housekeeping team manage?</summary>
              <p>Housekeeping teams can handle watering and litter well. Pruning cycles, pest management, feeding and seasonal replanting are a different skill, and that is where campus landscapes usually decline. A scheduled contract is far cheaper than replanting, and we are happy to train your team on the parts they can own.</p>
            </details>
            <details>
              <summary>Can you take over a site another contractor landscaped?</summary>
              <p>Often. We would survey first — drainage, soil condition and what is actually failing versus what just needs pruning. Sometimes the fix is a maintenance regime rather than a redesign, and we will tell you if that is the case even though it is the smaller job.</p>
            </details>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Also from the studio</span></div>
              <h2 className="d2">Other services.</h2>
            </div>
            <Link className="tag gold" href="/services">All services &rarr;</Link>
          </div>
          <div className="oth">
            <Link className="rv" href="/services/plantscaping">
              <div className="plate rvp has-img" data-n="Office Indoor Planting — Workspace">
                <img src="/project_06.jpg" alt="Office indoor planting" />
              </div>
              <h3>Corporate Plantscaping</h3>
            </Link>
            <Link className="rv dl1" href="/services/vertical-gardens">
              <div className="plate rvp has-img" data-n="Living Wall — Noida">
                <img src="/project_03.jpg" alt="Vertical garden" />
              </div>
              <h3>Vertical Gardens</h3>
            </Link>
            <Link className="rv dl2" href="/services/moss-wall">
              <div className="plate rvp has-img" data-n="Preserved Moss Wall — Reception">
                <img src="/project_02.jpg" alt="Preserved moss wall" />
              </div>
              <h3>Moss Walls</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Corporate Landscaping — Wall of Gardens">
          <img src="/project_01.jpg" alt="Corporate landscape photograph" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Planning a campus or fit-out landscape?</h2>
            <p className="lede light">Send us a site plan and your operational constraints. Site visits within Delhi NCR are free.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Discuss a Corporate Project</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
