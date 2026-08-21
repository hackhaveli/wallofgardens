import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Vertical Gardens & Living Walls — Delhi NCR | Wall of Gardens',
  description: 'Natural, hybrid and artificial vertical gardens for offices, lobbies, facades and homes across Delhi NCR. Structure, zoned irrigation and drainage engineered before planting.',
};

export default function VerticalGardensPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Vertical Gardens</div>
          <div className="rule-tag"><span className="tag gold">Sheet 02 — Scope of works</span></div>
          <h1 className="d1">Vertical Gardens</h1>
          <p className="lede light">
            Natural, hybrid and artificial living walls for offices, lobbies, façades and homes. <em className="g">The structure, irrigation and drainage are designed before a single plant is specified.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + IRRIGATION ZONING */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">Water falls. That is what kills most living walls.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Run a single irrigation line down a three-metre wall and gravity does the rest. The top band dries out because water passes through before it saturates. The bottom band waterlogs because everything above drains into it. Within a season you get the classic failed-wall signature: brown at the top, root rot at the base, and a healthy strip in the middle that nobody planned.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              The fix is not more water. It is zoning — independent lines by height, each on its own timer, each set to what that band actually needs. It costs a little more at installation and it is the difference between a wall that lasts and a wall that gets replaced.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 03 — Irrigation zoning, elevation</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Two wall elevations compared. Wall A on a single irrigation line shows a dry band at the top and a saturated band at the base. Wall B on three zoned valves shows even moisture across the full height."
              >
                <defs>
                  <linearGradient id="unzoned" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C8A55B" stopOpacity=".34" />
                    <stop offset="26%" stopColor="#C8A55B" stopOpacity=".16" />
                    <stop offset="52%" stopColor="#7FA65C" stopOpacity=".22" />
                    <stop offset="78%" stopColor="#3E6B4A" stopOpacity=".32" />
                    <stop offset="100%" stopColor="#25506F" stopOpacity=".42" />
                  </linearGradient>
                  <linearGradient id="zoned" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7FA65C" stopOpacity=".24" />
                    <stop offset="100%" stopColor="#7FA65C" stopOpacity=".24" />
                  </linearGradient>
                </defs>

                {/* WALL A */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="40" y="46" width="96" height="212" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <rect x="41" y="47" width="94" height="210" fill="url(#unzoned)" />
                </g>
                <g className="lyr" style={{ animationDelay: '.2s' }}>
                  <path d="M40 38 H136" stroke="#C8A55B" strokeWidth="1.6" />
                  <rect x="83" y="30" width="10" height="8" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.16)" />
                  <path d="M88 46 V250" stroke="#7FA65C" strokeWidth="1.3" strokeDasharray="3 5" />
                </g>
                <g className="lyr" style={{ animationDelay: '.34s' }}>
                  <path d="M136 66 h16" stroke="rgba(14,24,17,.28)" strokeWidth="1" />
                  <path d="M136 240 h16" stroke="rgba(14,24,17,.28)" strokeWidth="1" />
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.5)" letterSpacing=".8">
                    <text x="154" y="63">DRIES</text>
                    <text x="154" y="243">SATURATES</text>
                  </g>
                </g>
                <g className="lyr" style={{ animationDelay: '.44s' }}>
                  <path
                    d="M32 46 V258 M28 46 H36 M28 117 H36 M28 188 H36 M28 258 H36"
                    stroke="rgba(14,24,17,.24)"
                    strokeWidth="1"
                  />
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.4)">
                    <text x="6" y="49">3.0m</text>
                    <text x="6" y="120">2.0m</text>
                    <text x="6" y="191">1.0m</text>
                    <text x="10" y="261">0m</text>
                  </g>
                </g>
                <g
                  className="lyr"
                  style={{ animationDelay: '.5s' }}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="8"
                  fill="rgba(14,24,17,.55)"
                  letterSpacing="1"
                >
                  <text x="40" y="22">A — SINGLE LINE</text>
                  <text x="40" y="278">UNEVEN MOISTURE</text>
                </g>

                {/* WALL B */}
                <g className="lyr" style={{ animationDelay: '.62s' }}>
                  <rect x="216" y="46" width="96" height="212" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <rect x="217" y="47" width="94" height="210" fill="url(#zoned)" />
                  <path d="M216 117 H312 M216 188 H312" stroke="rgba(14,24,17,.2)" strokeWidth="1" strokeDasharray="3 4" />
                </g>
                <g className="lyr" style={{ animationDelay: '.76s' }}>
                  <path d="M200 38 H312" stroke="#C8A55B" strokeWidth="1.6" />
                  <path d="M200 38 V250" stroke="#C8A55B" strokeWidth="1.6" />
                  <rect x="194" y="60" width="12" height="9" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.2)" />
                  <rect x="194" y="131" width="12" height="9" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.2)" />
                  <rect x="194" y="202" width="12" height="9" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.2)" />
                  <path d="M206 64 H300 M206 135 H300 M206 206 H300" stroke="#7FA65C" strokeWidth="1.3" />
                  <g fill="#7FA65C">
                    <circle cx="240" cy="64" r="2.2" /><circle cx="270" cy="64" r="2.2" /><circle cx="298" cy="64" r="2.2" />
                    <circle cx="240" cy="135" r="2.2" /><circle cx="270" cy="135" r="2.2" /><circle cx="298" cy="135" r="2.2" />
                    <circle cx="240" cy="206" r="2.2" /><circle cx="270" cy="206" r="2.2" /><circle cx="298" cy="206" r="2.2" />
                  </g>
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.42)">
                    <text x="176" y="68">Z1</text><text x="176" y="139">Z2</text><text x="176" y="210">Z3</text>
                  </g>
                </g>
                <g
                  className="lyr"
                  style={{ animationDelay: '.9s' }}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="8"
                  fill="rgba(14,24,17,.55)"
                  letterSpacing="1"
                >
                  <text x="216" y="22">B — ZONED, 3 VALVES</text>
                  <text x="216" y="278">EVEN MOISTURE</text>
                </g>

                {/* collection channels */}
                <g className="lyr" style={{ animationDelay: '1.0s' }}>
                  <path d="M40 258 H136 L136 268 L40 272 Z" stroke="#C8A55B" strokeWidth="1.1" fill="rgba(200,165,91,.1)" />
                  <path d="M216 258 H312 L312 268 L216 272 Z" stroke="#C8A55B" strokeWidth="1.1" fill="rgba(200,165,91,.1)" />
                </g>

                <text
                  className="lyr"
                  style={{ animationDelay: '1.06s' }}
                  x="40"
                  y="308"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="7.5"
                  fill="rgba(14,24,17,.38)"
                  letterSpacing=".8"
                >
                  SAME WALL. SAME PLANTS. DIFFERENT IRRIGATION DESIGN.
                </text>
              </svg>

              <div className="callouts" id="callouts">
                <div className="callout"><b>01</b><span>Supply header</span></div>
                <div className="callout"><b>02</b><span>Zone valve on its own timer</span></div>
                <div className="callout"><b>03</b><span>Drip line per band</span></div>
                <div className="callout"><b>04</b><span>Dry band — unzoned failure</span></div>
                <div className="callout"><b>05</b><span>Saturated base — root rot</span></div>
                <div className="callout"><b>06</b><span>Collection channel to drain</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION MATRIX */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Selection</span></div>
              <h2 className="d2">Three ways to build a green wall.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                Which one suits you is decided by light, water access and who will maintain it — not by budget alone. We will tell you on the site visit which of these your wall can actually support.
              </p>
            </div>
          </div>

          <div className="mx rv">
            <div className="mx-c">
              <span className="lbl">Option 01</span>
              <h3>Natural</h3>
              <p className="sub">Living planting on a zoned irrigation system. The real thing, with the real requirements.</p>
              <dl>
                <div className="row"><dt>Light needed</dt><dd>Good or supplemented</dd></div>
                <div className="row"><dt>Water &amp; drain</dt><dd>Required</dd></div>
                <div className="row"><dt>Upkeep</dt><dd>Monthly, minimum</dd></div>
                <div className="row"><dt>Install cost</dt><dd>Lower</dd></div>
                <div className="row"><dt>Running cost</dt><dd>Ongoing</dd></div>
              </dl>
            </div>

            <div className="mx-c pick">
              <span className="lbl">Option 02</span>
              <h3>Hybrid</h3>
              <p className="sub">Live planting where light allows, artificial where it does not. Reads natural across the whole wall.</p>
              <dl>
                <div className="row"><dt>Light needed</dt><dd>Partial</dd></div>
                <div className="row"><dt>Water &amp; drain</dt><dd>Reduced</dd></div>
                <div className="row"><dt>Upkeep</dt><dd>Quarterly</dd></div>
                <div className="row"><dt>Install cost</dt><dd>Middle</dd></div>
                <div className="row"><dt>Running cost</dt><dd>Low</dd></div>
              </dl>
            </div>

            <div className="mx-c">
              <span className="lbl">Option 03</span>
              <h3>Artificial</h3>
              <p className="sub">No irrigation at all. For basements, cores and any wall where a natural system would slowly fail.</p>
              <dl>
                <div className="row"><dt>Light needed</dt><dd>None</dd></div>
                <div className="row"><dt>Water &amp; drain</dt><dd>Not required</dd></div>
                <div className="row"><dt>Upkeep</dt><dd>Cleaning only</dd></div>
                <div className="row"><dt>Install cost</dt><dd>Higher</dd></div>
                <div className="row"><dt>Running cost</dt><dd>Near zero</dd></div>
              </dl>
            </div>
          </div>

          <p className="tag rv" style={{ marginTop: '22px' }}>
            Over three to five years, natural and artificial often land close on total cost — so decide on light and access, not on the install quote alone
          </p>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What a wall includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>MS frame, stood off</h3><p>Steel framing fixed clear of your wall, treated and finished, sized to the panel system and the substrate we are fixing into.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Waterproof backing</h3><p>A backing sheet between frame and wall so your wall never sits wet. This is the detail most cheap walls leave out.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Panel or pocket system</h3><p>Felt pockets, modular trays or planter channels, chosen for the species and the orientation rather than for whatever is in stock.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Zoned irrigation</h3><p>Independent drip lines by height, each on its own valve and timer, with a filter and pressure regulation on the supply.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Collection channel &amp; drain</h3><p>A channel at the base with a fall to an actual drain point — not a tray that someone has to empty.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Planting</h3><p>Species selected for the measured light at that wall, and arranged so growth patterns hold the design rather than blur it.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Maintenance access</h3><p>Planned at design stage — how the top of the wall gets reached in year two, before it becomes somebody else's problem.</p></div>
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
                Per-square-foot rates quoted over the phone are how walls end up failing. These are the things that actually decide the design.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Light, at the wall</h3><p>Measured at the wall face, not at the window. Most interior walls in India get far less usable light than they appear to.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Water and drain access</h3><p>A supply point and somewhere for the channel to discharge. Without both, a natural wall becomes a manual watering job.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Wall condition</h3><p>What we are fixing into, and whether there is existing damp or seepage. A wall with damp needs fixing before anything goes on it.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Power</h3><p>For the timer and pump, and for grow lighting where light levels need supplementing.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Maintenance access</h3><p>How the upper zones will be reached. A wall nobody can service is a wall that dies quietly.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Exposure</h3><p>For façades — wind, direct sun and reflected heat off adjacent glazing, all of which narrow the species list considerably.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Wall assessment</h3><p>Light readings, wall condition, water, drain and power, plus how the wall will be serviced later.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Drawing &amp; spec</h3><p>Section, panel layout, irrigation zoning and planting schedule issued for sign-off before procurement.</p></div>
              <div className="st rv dl2"><span className="no">03 / Install</span><h3>Build &amp; plant</h3><p>Frame, backing, panels and irrigation commissioned first. Planting goes in last, onto a tested system.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Establishment</h3><p>Close attention through the first season, then a regular visit cycle once the wall has settled.</p></div>
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
              <summary>Will it damage the wall behind it?</summary>
              <p>Not when it is built correctly. The frame stands clear of your wall, a waterproof backing sits between the two, irrigation is metered rather than flooded, and the base channel takes runoff to a drain. Damage happens on walls built directly against masonry with no backing and no channel — which is unfortunately common.</p>
            </details>
            <details>
              <summary>Can a natural wall work indoors with low light?</summary>
              <p>Sometimes, with the right species and often with supplementary lighting. But we would rather tell you a wall gets too little light than install a natural system that thins out over six months. In those cases a hybrid or artificial wall gives you the same look without the slow disappointment.</p>
            </details>
            <details>
              <summary>How often does a living wall need maintenance?</summary>
              <p>A natural wall needs monthly attention at minimum — running each zone and checking emitters, pruning to the design, replacing failures and clearing the base channel. Hybrid walls need roughly quarterly attention. Artificial walls need periodic cleaning and repasting only.</p>
            </details>
            <details>
              <summary>What happens when there is a power cut?</summary>
              <p>Short outages are absorbed by the growing medium. For longer or frequent outages we specify a controller with battery backup so the schedule is not lost, and size the medium so the wall can carry a day or two without irrigation.</p>
            </details>
            <details>
              <summary>Can you do a wall on an exterior façade?</summary>
              <p>Yes, and it is a different design problem — wind loading on the frame, direct sun, reflected heat off adjacent glazing and a much narrower species list. Exterior walls also need a genuine fixing and load assessment, not just a mounting detail.</p>
            </details>
            <details>
              <summary>Can you take over a wall someone else installed?</summary>
              <p>Often, once we have seen it. We would survey the irrigation, the backing and the channel first. Sometimes the fix is straightforward zoning; sometimes the wall was built without a backing or a drain, and we will tell you honestly if that is the case.</p>
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
            <Link className="rv" href="/services/moss-wall">
              <div className="plate rvp has-img" data-n="Preserved Moss Wall — Reception">
                <img src="/project_02.jpg" alt="Preserved Moss Wall" />
              </div>
              <h3>Moss Walls</h3>
            </Link>
            <Link className="rv dl1" href="/services/plantscaping">
              <div className="plate rvp has-img" data-n="Office Indoor Planting — Workspace">
                <img src="/project_06.jpg" alt="Office Indoor Planting" />
              </div>
              <h3>Corporate Plantscaping</h3>
            </Link>
            <Link className="rv dl2" href="/services/terrace-garden">
              <div className="plate rvp has-img" data-n="Rooftop Terrace Garden — Penthouse">
                <img src="/project_04.jpg" alt="Terrace Garden" />
              </div>
              <h3>Terrace Gardens</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Living Wall Installation — Wall of Gardens">
          <img src="/project_03.jpg" alt="Vertical living wall" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Have a wall in mind?</h2>
            <p className="lede light">Send us dimensions and a photograph. Site visits within Delhi NCR are free and carry no obligation.</p>
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
