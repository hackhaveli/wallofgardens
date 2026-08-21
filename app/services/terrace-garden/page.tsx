import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terrace Gardens — Rooftop Landscaping in Delhi NCR | Wall of Gardens',
  description: 'Terrace and rooftop garden design and installation across Delhi NCR. Build-up, load and drainage planned before planting, over your existing waterproofing.',
};

export default function TerraceGardenPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Terrace Gardens</div>
          <div className="rule-tag"><span className="tag gold">Sheet 03 — Scope of works</span></div>
          <h1 className="d1">Terrace Gardens</h1>
          <p className="lede light">
            Rooftop landscapes designed around what the slab can carry and where the water goes — <em className="g">not just what looks good on handover day.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + BUILD-UP SECTION */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">Terrace gardens do not fail as gardens. They fail as roofs.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              The complaint is almost never that the plants died. It is a damp patch on the ceiling below, an outlet that silted up in the first monsoon, or a slab carrying twice the weight anyone intended. By the time any of that shows, the garden has to come off to fix it.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              So the build-up gets designed first and the planting second. Growing medium never touches your waterproofing — a protection layer, drainage board and filter fabric sit between the two, and every outlet stays reachable for cleaning once the terrace is planted.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 05 — Terrace build-up, section</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Cross-section through a terrace garden build-up showing the RCC slab, screed laid to falls, waterproofing membrane, protection layer, drainage board, filter fabric, lightweight growing medium, planting, and a drainage outlet."
              >
                {/* RCC slab */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="26" y="238" width="252" height="30" stroke="rgba(14,24,17,.32)" strokeWidth="1" />
                  <path
                    d="M26 254 L44 238 M46 268 L76 238 M78 268 L108 238 M110 268 L140 238 M142 268 L172 238 M174 268 L204 238 M206 268 L236 238 M238 268 L268 238 M270 268 L278 260"
                    stroke="rgba(14,24,17,.15)"
                    strokeWidth="1"
                  />
                </g>

                {/* screed to falls */}
                <g className="lyr" style={{ animationDelay: '.16s' }}>
                  <path d="M26 238 H278 V232 L26 222 Z" fill="rgba(14,24,17,.07)" stroke="rgba(14,24,17,.26)" strokeWidth="1" />
                  <path d="M60 216 h34 m-6 -4 6 4 -6 4" stroke="#C8A55B" strokeWidth="1.1" fill="none" />
                  <text x="98" y="219" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">
                    FALL TO OUTLET
                  </text>
                </g>

                {/* waterproofing */}
                <g className="lyr" style={{ animationDelay: '.3s' }}>
                  <path d="M26 222 L278 232 L278 226 L26 216 Z" fill="rgba(200,165,91,.45)" stroke="#C8A55B" strokeWidth="1" />
                </g>

                {/* protection layer */}
                <g className="lyr" style={{ animationDelay: '.42s' }}>
                  <path d="M26 216 L278 226 L278 219 L26 209 Z" fill="rgba(14,24,17,.1)" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                </g>

                {/* drainage board (dimpled) */}
                <g className="lyr" style={{ animationDelay: '.54s' }}>
                  <path d="M26 209 L278 219 L278 204 L26 194 Z" fill="rgba(127,166,92,.12)" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                  <g id="dimples" fill="none" stroke="rgba(14,24,17,.24)" strokeWidth="1"></g>
                </g>

                {/* filter fabric */}
                <g className="lyr" style={{ animationDelay: '.66s' }}>
                  <path d="M26 194 L278 204" stroke="rgba(14,24,17,.4)" strokeWidth="1.4" strokeDasharray="4 3" />
                </g>

                {/* growing medium */}
                <g className="lyr" style={{ animationDelay: '.76s' }}>
                  <path d="M26 194 L278 204 L278 160 L26 150 Z" fill="rgba(127,166,92,.2)" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                  <g id="stipple" fill="rgba(14,24,17,.22)"></g>
                </g>

                {/* planting */}
                <g className="lyr" style={{ animationDelay: '.88s' }} id="foliage"></g>

                {/* outlet */}
                <g className="lyr" style={{ animationDelay: '1.0s' }}>
                  <rect x="286" y="196" width="20" height="72" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.08)" />
                  <path d="M278 204 H286" stroke="#C8A55B" strokeWidth="1.2" />
                  <path d="M292 208 V258 m-4 -6 4 6 4 -6" stroke="#7FA65C" strokeWidth="1.2" fill="none" />
                  <path d="M286 196 h20" stroke="#C8A55B" strokeWidth="1.2" strokeDasharray="3 3" />
                </g>

                {/* leaders */}
                <g className="lyr" style={{ animationDelay: '1.1s' }} stroke="rgba(14,24,17,.22)" strokeWidth="1">
                  <path d="M120 124 H316" />
                  <path d="M120 172 H316" />
                  <path d="M120 199 H316" />
                  <path d="M120 207 H316" />
                  <path d="M120 214 H316" />
                  <path d="M120 220 H316" />
                  <path d="M120 231 H316" />
                  <path d="M150 252 H282" />
                </g>
                <g className="lyr" style={{ animationDelay: '1.16s' }} fill="rgba(14,24,17,.55)" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" letterSpacing="1">
                  <text x="320" y="127">01</text>
                  <text x="320" y="175">02</text>
                  <text x="320" y="202">03</text>
                  <text x="320" y="210">04</text>
                  <text x="320" y="217">05</text>
                  <text x="320" y="223">06</text>
                  <text x="320" y="234">07</text>
                  <text x="286" y="255">08</text>
                </g>

                <text className="lyr" style={{ animationDelay: '1.24s' }} x="26" y="290" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.38)" letterSpacing=".8">
                  SCHEMATIC. LAYER DEPTHS SET BY LOAD ALLOWANCE AND PLANTING DEPTH.
                </text>
              </svg>

              <div className="callouts" id="callouts">
                <div className="callout"><b>01</b><span>Planting</span></div>
                <div className="callout"><b>02</b><span>Lightweight growing medium</span></div>
                <div className="callout"><b>03</b><span>Filter fabric</span></div>
                <div className="callout"><b>04</b><span>Drainage board</span></div>
                <div className="callout"><b>05</b><span>Protection layer</span></div>
                <div className="callout"><b>06</b><span>Waterproofing membrane</span></div>
                <div className="callout"><b>07</b><span>Screed laid to falls</span></div>
                <div className="callout"><b>08</b><span>Outlet, kept accessible</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOAD CHART */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Load</span></div>
              <h2 className="d2">What you put on the roof decides what you can plant.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                Weight is the constraint nobody thinks about until it is a problem. These are indicative saturated weights for common terrace build-ups — the difference between the lightest and the heaviest is roughly five times.
              </p>
            </div>
          </div>

          <div className="chart rv" id="chart">
            <div className="bar-row">
              <div className="lbl">Shallow planting<small>100–150 mm medium</small></div>
              <div className="track"><div className="fill" style={{ left: 0, width: '22%' }}></div><div className="val" style={{ left: 'calc(22% + 8px)' }}>80–130 kg/m²</div></div>
            </div>
            <div className="bar-row">
              <div className="lbl">Stone paving on pedestals<small>Hardscape, no planting</small></div>
              <div className="track"><div className="fill" style={{ left: 0, width: '25%' }}></div><div className="val" style={{ left: 'calc(25% + 8px)' }}>100–150 kg/m²</div></div>
            </div>
            <div className="bar-row">
              <div className="lbl">Lawn<small>200 mm medium</small></div>
              <div className="track"><div className="fill" style={{ left: 0, width: '34%' }}></div><div className="val" style={{ left: 'calc(34% + 8px)' }}>140–200 kg/m²</div></div>
            </div>
            <div className="bar-row">
              <div className="lbl">Deep beds, shrubs<small>300–400 mm medium</small></div>
              <div className="track"><div className="fill heavy" style={{ left: 0, width: '52%' }}></div><div className="val" style={{ left: 'calc(52% + 8px)' }}>220–320 kg/m²</div></div>
            </div>
            <div className="bar-row">
              <div className="lbl">Small trees, tree pits<small>450 mm+ localised</small></div>
              <div className="track"><div className="fill heavy" style={{ left: 0, width: '78%' }}></div><div className="val" style={{ left: 'calc(78% + 8px)' }}>300–500 kg/m²</div></div>
            </div>
            <div className="bar-row">
              <div className="lbl">Water feature<small>Standing water plus structure</small></div>
              <div className="track"><div className="fill heavy" style={{ left: 0, width: '95%' }}></div><div className="val" style={{ left: 'calc(95% - 96px)' }}>350–600 kg/m²</div></div>
            </div>
            <div className="axis">
              <div></div>
              <div className="ticks"><span>0</span><span>150</span><span>300</span><span>450</span><span>600 kg/m²</span></div>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '24px', maxWidth: '70ch', lineHeight: 1.8 }}>
            Indicative saturated figures for planning discussion only. What your slab can actually carry is a structural question — for older buildings, or anything above light planting, we will ask for a structural opinion before we design to it.
          </p>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What a terrace project includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Survey &amp; levels</h3><p>Existing falls, outlet positions, parapet heights and access, plus a look at the condition of the waterproofing already there.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Build-up specification</h3><p>Protection layer, drainage board, filter fabric and medium depth, specified to the load available rather than to a standard detail.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Drainage</h3><p>Outlets kept reachable, inspection points where planting would otherwise bury them, and falls confirmed before anything is laid.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Planting design</h3><p>Species grouped by sun exposure, water need and mature size — chosen for a full-sun, wind-exposed Delhi rooftop, not a sheltered garden.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Decking, seating &amp; pergola</h3><p>Where the terrace needs to be used rather than only looked at, with hardscape integrated into the build-up rather than added on top.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Irrigation &amp; lighting</h3><p>Drip or sprinkler zones on a timer, and low-voltage lighting run in the same trenching.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Handover &amp; care</h3><p>A written care schedule including pre-monsoon and post-monsoon drain clearing, and a maintenance plan where you want one.</p></div>
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
                A terrace quoted per square foot without these answers is a quote for something else.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Structural load</h3><p>Saturated weight of medium, planters, hardscape and water against what the slab was designed for. This frequently changes the whole scheme.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Existing waterproofing</h3><p>Age and condition. If it is near the end of its life, redoing it now costs a fraction of redoing it under a finished garden.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Falls &amp; outlets</h3><p>Where water currently exits, whether it actually gets there, and whether those outlets stay reachable once planted.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Sun and wind</h3><p>A Delhi rooftop is full sun and wind-exposed. Species that thrive on a balcony below will not hold here.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Water &amp; power</h3><p>Access for irrigation and lighting, and whether a point needs extending to the terrace.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Material access</h3><p>How medium, planters and hardscape reach the roof. On many buildings this decides sequencing more than the design does.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Roof assessment</h3><p>Levels, outlets, waterproofing condition, access and an honest view on load.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Build-up &amp; layout</h3><p>Section, planting plan and material spec issued for sign-off before procurement.</p></div>
              <div className="st rv dl2"><span className="no">03 / Execute</span><h3>Build then plant</h3><p>Protection, drainage and irrigation laid and tested first. Planting goes in last.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Through the seasons</h3><p>Establishment care, and drain clearing before and after monsoon.</p></div>
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
              <summary>Will a terrace garden damage my waterproofing?</summary>
              <p>Not if the build-up is right. Growing medium never sits directly on the membrane — a protection layer, drainage board and filter fabric go between them, and roots are kept away from the waterproofing entirely. Damage happens where soil is tipped straight onto a roof, which is unfortunately the most common way terrace gardens get built.</p>
            </details>
            <details>
              <summary>What if my existing waterproofing is old?</summary>
              <p>We will tell you before starting rather than build over it. Redoing waterproofing on a bare roof is a straightforward job. Redoing it under a finished terrace garden means dismantling the garden first, and that conversation is far more expensive than this one.</p>
            </details>
            <details>
              <summary>How much weight will it actually add?</summary>
              <p>It depends entirely on medium depth and hardscape — see the chart above. Light perimeter planting is a different proposition from deep beds or a water feature. We work out the saturated load during the survey and design to what the structure can take, and for anything beyond light planting on an older building we will ask for a structural opinion first.</p>
            </details>
            <details>
              <summary>Which plants survive a Delhi summer on a rooftop?</summary>
              <p>Full-sun, heat-tolerant species — ornamental grasses, bougainvillea, adenium, frangipani, succulents and hardy shrubs hold well. Shade-loving indoor foliage does not, whatever it looks like in a nursery. We select against the actual exposure of your terrace rather than a standard list.</p>
            </details>
            <details>
              <summary>What happens during monsoon?</summary>
              <p>A correctly built terrace handles it — the drainage board carries water to the outlets and the filter fabric keeps medium out of them. The one thing that matters is clearing the outlets before monsoon starts. That is in the handover schedule, and it is the first thing we do on a pre-monsoon maintenance visit.</p>
            </details>
            <details>
              <summary>Can you work on a terrace that already has a garden on it?</summary>
              <p>Yes, and it usually starts with lifting a section to see what is underneath. Sometimes the build-up is sound and only the planting needs rethinking. Sometimes there is soil sitting directly on the membrane, and we will be straight with you about what that means.</p>
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
            <Link className="rv" href="/services/vertical-gardens">
              <div className="plate rvp has-img" data-n="Living Wall — Noida">
                <img src="/project_03.jpg" alt="Vertical garden" />
              </div>
              <h3>Vertical Gardens</h3>
            </Link>
            <Link className="rv dl1" href="/services/moss-wall">
              <div className="plate rvp has-img" data-n="Preserved Moss Wall — Reception">
                <img src="/project_02.jpg" alt="Preserved moss wall" />
              </div>
              <h3>Moss Walls</h3>
            </Link>
            <Link className="rv dl2" href="/services/plantscaping">
              <div className="plate rvp has-img" data-n="Office Indoor Planting — Workspace">
                <img src="/project_06.jpg" alt="Office indoor planting" />
              </div>
              <h3>Corporate Plantscaping</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Terrace Garden — Wall of Gardens">
          <img src="/project_04.jpg" alt="Terrace garden photograph" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Have a terrace sitting empty?</h2>
            <p className="lede light">Send us photographs and the approximate area. Site visits within Delhi NCR are free and carry no obligation.</p>
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
