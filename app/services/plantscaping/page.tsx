import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Corporate Plantscaping & Office Indoor Planting — Delhi NCR | Wall of Gardens',
  description: 'Indoor plant hire and purchase with scheduled maintenance for offices and workplaces across Delhi NCR. Specified against measured daylight zones.',
};

export default function PlantscapingPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Corporate Plantscaping</div>
          <div className="rule-tag"><span className="tag gold">Sheet 06 — Scope of works</span></div>
          <h1 className="d1">Corporate Plantscaping</h1>
          <p className="lede light">
            Indoor planting for offices and workplaces. We specify it against the light your floor actually gets, install it, and keep it alive on a scheduled contract. <em className="g">The plants are yours; the upkeep is ours.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + LIGHT ZONING DRAWING */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">Office planting fails at eight metres from the glass.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Almost every office planting scheme that dies does so for one reason: species chosen for a catalogue photograph, placed at a position that gets a fraction of the light the plant needs. A ficus two metres from a window and the same ficus beside a lift lobby are two entirely different propositions.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              So we zone the floor before we specify anything. Light is measured at the planter position, not at the window, and each zone gets planting that will hold there — or a different solution where nothing natural will.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 02 — Light zoning, typical floor plate</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 320 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Plan diagram of an office floor plate showing four daylight zones falling off from the glazed facade, a service core, and planting positions matched to each zone"
              >
                <defs>
                  <linearGradient id="fall" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C8A55B" stopOpacity=".30" />
                    <stop offset="30%" stopColor="#C8A55B" stopOpacity=".16" />
                    <stop offset="62%" stopColor="#7FA65C" stopOpacity=".10" />
                    <stop offset="100%" stopColor="#7FA65C" stopOpacity=".02" />
                  </linearGradient>
                </defs>

                {/* floor plate outline */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="30" y="26" width="250" height="240" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                </g>

                {/* daylight falloff */}
                <g className="lyr" style={{ animationDelay: '.16s' }}>
                  <rect x="31" y="27" width="248" height="238" fill="url(#fall)" />
                </g>

                {/* glazed facade */}
                <g className="lyr" style={{ animationDelay: '.28s' }}>
                  <path d="M30 26 V266" stroke="#C8A55B" strokeWidth="2.4" />
                  <path d="M25 26 V266" stroke="#C8A55B" strokeWidth="1" />
                  <path
                    d="M25 40 H30 M25 62 H30 M25 84 H30 M25 106 H30 M25 128 H30 M25 150 H30 M25 172 H30 M25 194 H30 M25 216 H30 M25 238 H30 M25 260 H30"
                    stroke="rgba(200,165,91,.5)"
                    strokeWidth="1"
                  />
                </g>

                {/* zone divisions */}
                <g className="lyr" style={{ animationDelay: '.4s' }} stroke="rgba(14,24,17,.2)" strokeWidth="1" strokeDasharray="3 4">
                  <path d="M92 26 V266" />
                  <path d="M154 26 V266" />
                  <path d="M216 26 V266" />
                </g>

                {/* service core */}
                <g className="lyr" style={{ animationDelay: '.52s' }}>
                  <rect x="224" y="96" width="48" height="100" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(14,24,17,.05)" />
                  <path
                    d="M224 110 L272 96 M224 128 L272 114 M224 146 L272 132 M224 164 L272 150 M224 182 L272 168 M224 196 L272 186"
                    stroke="rgba(14,24,17,.14)"
                    strokeWidth="1"
                  />
                </g>

                {/* planter positions */}
                <g className="lyr" style={{ animationDelay: '.66s' }}>
                  <circle cx="55" cy="58" r="6" fill="#7FA65C" opacity=".85" />
                  <circle cx="62" cy="150" r="7.5" fill="#7FA65C" opacity=".85" />
                  <circle cx="52" cy="236" r="6" fill="#7FA65C" opacity=".85" />
                  <circle cx="118" cy="82" r="5.5" fill="#7FA65C" opacity=".65" />
                  <circle cx="128" cy="196" r="6" fill="#7FA65C" opacity=".65" />
                  <circle cx="176" cy="60" r="5" fill="#A8C48C" opacity=".6" />
                  <circle cx="182" cy="228" r="5" fill="#A8C48C" opacity=".6" />
                  <circle cx="248" cy="52" r="4.5" fill="none" stroke="#C8A55B" strokeWidth="1.4" />
                  <circle cx="248" cy="240" r="4.5" fill="none" stroke="#C8A55B" strokeWidth="1.4" />
                </g>

                {/* zone labels */}
                <g className="lyr" style={{ animationDelay: '.78s' }} fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="rgba(14,24,17,.5)" letterSpacing="1">
                  <text x="46" y="20">ZONE A</text>
                  <text x="108" y="20">ZONE B</text>
                  <text x="170" y="20">ZONE C</text>
                  <text x="232" y="20">ZONE D</text>
                </g>

                {/* dimension line */}
                <g className="lyr" style={{ animationDelay: '.9s' }}>
                  <path d="M30 284 H280" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <path d="M30 280 V288 M92 280 V288 M154 280 V288 M216 280 V288 M280 280 V288" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="rgba(14,24,17,.45)" letterSpacing="1">
                    <text x="26" y="302">0m</text>
                    <text x="86" y="302">2m</text>
                    <text x="148" y="302">5m</text>
                    <text x="210" y="302">8m</text>
                    <text x="264" y="302">core</text>
                  </g>
                  <text x="30" y="320" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.38)" letterSpacing="1">
                    DISTANCE FROM GLAZING
                  </text>
                </g>
              </svg>

              <div className="callouts" id="callouts">
                <div className="callout"><b>A</b><span>0–2 m · high light · specimen planting</span></div>
                <div className="callout"><b>B</b><span>2–5 m · moderate · most foliage holds</span></div>
                <div className="callout"><b>C</b><span>5–8 m · low · low-light species only</span></div>
                <div className="callout"><b>D</b><span>Core · no daylight · preserved or lit</span></div>
                <div className="callout"><b>●</b><span>Natural planting position</span></div>
                <div className="callout"><b>○</b><span>Preserved / supplemented position</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE VS RENTAL */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">The commercial model</span></div>
              <h2 className="d2">We do not rent plants.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                Most office planting in India is sold as rental, where the vendor keeps ownership and you pay indefinitely for something you never own. We work the other way round, and it changes what gets specified.
              </p>
            </div>
          </div>

          <div className="cmp rv">
            <div className="cmp-c them">
              <span className="lbl">Model A — Rental</span>
              <h3>The vendor owns the plants</h3>
              <ul>
                <li>You pay a monthly fee indefinitely and own nothing at the end</li>
                <li>Specification favours what rotates easily, not what lasts</li>
                <li>Struggling plants get swapped out rather than diagnosed</li>
                <li>Ending the contract means the planting leaves with the vendor</li>
              </ul>
            </div>
            <div className="cmp-c ours">
              <span className="lbl">Model B — How we work</span>
              <h3>You own the plants. We hold the upkeep.</h3>
              <ul>
                <li>One purchase, then a maintenance contract you can stop any time</li>
                <li>Specification favours what will actually hold at that position</li>
                <li>Anything that fails under contract is replaced by us, at our cost</li>
                <li>End the contract and the planting stays exactly where it is</li>
              </ul>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '22px' }}>
            Replacement cover puts the risk of a bad specification on us, not on your facilities budget
          </p>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What an engagement includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Light survey &amp; zoning</h3><p>Readings taken at each intended planter position across the floor plate, mapped to the zones shown above.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Specification</h3><p>Species selected per zone, sized for the position and the ceiling height, with a stated expectation of how each will behave.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Planters</h3><p>Finish, size and material chosen to sit with the interior scheme rather than fight it. Self-watering reservoirs where visit frequency makes them worthwhile.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Supply &amp; installation</h3><p>Sourcing, acclimatisation and placement handled by our team, scheduled around your working hours and building access rules.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Scheduled maintenance</h3><p>Watering, pruning, leaf cleaning, feeding and pest checks on a fixed visit cycle agreed at the outset.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Replacement cover</h3><p>Any planting that fails while under the maintenance contract is replaced by us at no additional cost.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Visit reporting</h3><p>A simple written record of each visit for facilities teams who need one for their own reporting.</p></div>
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
                A per-planter rate quoted over email is a guess. These are the things that actually change the specification.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Light at each position</h3><p>Measured where the planter will stand. This is the single biggest determinant of what survives.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Air conditioning</h3><p>Heavily conditioned floors run dry and draughty. Several popular species will not hold in those conditions.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Footfall</h3><p>Corridors and lift lobbies need planting that tolerates being brushed past. Open floor positions do not.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Water point per floor</h3><p>Where our team draws water on each floor, and whether that is practical during working hours.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Building access</h3><p>Entry procedure, permitted timings and whether maintenance must be scheduled outside office hours.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Interior scheme</h3><p>Finishes and palette, so planters read as part of the fit-out rather than something added afterwards.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Floor walk</h3><p>Light readings, access, water points and a look at how each area is actually used.</p></div>
              <div className="st rv dl1"><span className="no">02 / Specify</span><h3>Zoned proposal</h3><p>Species, planters and positions issued as a line-item scope for sign-off.</p></div>
              <div className="st rv dl2"><span className="no">03 / Install</span><h3>Placement</h3><p>Sourcing, acclimatisation and installation around your working hours.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Visit cycle</h3><p>Scheduled maintenance with replacement cover and a written visit record.</p></div>
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
              <summary>Do we own the plants, or is this a rental?</summary>
              <p>You own them. This is a purchase plus a maintenance contract, not a rental. If you ever end the maintenance contract, the planting stays with you.</p>
            </details>
            <details>
              <summary>What does a maintenance visit actually cover?</summary>
              <p>Watering, pruning, leaf cleaning, feeding, pest checks, and rotating anything struggling into a better position. Visit frequency is agreed at the outset based on the size of the installation and how demanding the positions are.</p>
            </details>
            <details>
              <summary>What happens if a plant dies?</summary>
              <p>We replace it under the maintenance contract at no extra cost. That is deliberate — it puts the risk of a bad specification on us rather than on your facilities budget, which is also why we insist on surveying light before quoting.</p>
            </details>
            <details>
              <summary>Is there a minimum contract period?</summary>
              <p>We would normally suggest twelve months, because planting needs a full seasonal cycle to establish and the value of a maintenance contract shows over time rather than in the first quarter. It is a suggestion, not a lock-in.</p>
            </details>
            <details>
              <summary>Can you work in areas with no natural light at all?</summary>
              <p>Yes, but not with ordinary planting. Core areas, internal meeting rooms and windowless corridors get preserved moss, preserved foliage, or planting supported by dedicated grow lighting. We would rather propose one of those than install something that quietly declines over six months.</p>
            </details>
            <details>
              <summary>Can you take over planting another vendor installed?</summary>
              <p>Often, once we have seen it. We would survey the floor first and tell you honestly which existing planting is worth keeping and which is in a position it was never going to survive.</p>
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
            <Link className="rv dl2" href="/services/corporate-landscaping">
              <div className="plate rvp has-img" data-n="Corporate Landscape — Gurugram">
                <img src="/project_01.jpg" alt="Corporate landscape" />
              </div>
              <h3>Corporate Landscaping</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Corporate Plantscaping — Wall of Gardens">
          <img src="/project_06.jpg" alt="Office indoor planting" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Planning planting for a new fit-out?</h2>
            <p className="lede light">Send us a floor plan and we will come and take light readings. Surveys within Delhi NCR are free.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Request a Survey</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
