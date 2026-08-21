import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Balcony Gardens & Compact Green Spaces — Delhi NCR | Wall of Gardens',
  description: 'Balcony garden design, modular planters, vertical greening and drainage containment across Delhi NCR. Planned around orientation and usable space.',
};

export default function BalconyGardensPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Balcony Gardens</div>
          <div className="rule-tag"><span className="tag gold">Sheet 04 — Scope of works</span></div>
          <h1 className="d1">Balcony Gardens</h1>
          <p className="lede light">
            Small spaces planned to the square foot, so the balcony still works as somewhere to sit — <em className="g">rather than somewhere to squeeze past.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + ORIENTATION */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="ov-copy rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">Which way it faces matters more than what you spend.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Two balconies in the same tower, one facing east and one facing west, are not the same brief. The east balcony gets gentle morning sun and can hold almost anything. The west balcony takes the full afternoon load — direct sun from the hottest part of the day, plus heat radiating back off the wall and any glazing nearby — and will kill most of what a nursery would sell you for it.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              So the first question on a balcony visit is never budget. It is which way the balcony faces, and how high up it sits.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 07 — Orientation &amp; exposure, Delhi</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Compass diagram showing four balcony orientations around a building, with the sun path tracking from east through south to west, and the exposure each orientation receives."
              >
                {/* compass ring */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <circle cx="170" cy="160" r="100" stroke="rgba(14,24,17,.16)" strokeWidth="1" strokeDasharray="3 4" />
                  <path d="M170 52 V72 M170 248 V268 M62 160 H82 M258 160 H278" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                </g>

                {/* sun path */}
                <g className="lyr" style={{ animationDelay: '.2s' }}>
                  <path d="M302 160 A132 132 0 0 1 38 160" stroke="#C8A55B" strokeWidth="1.2" strokeDasharray="4 5" fill="none" />
                  <circle cx="294" cy="205" r="5" fill="#C8A55B" opacity=".55" />
                  <circle cx="170" cy="292" r="6.5" fill="#C8A55B" opacity=".85" />
                  <circle cx="46" cy="205" r="6" fill="#C8A55B" />
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">
                    <text x="286" y="224">07:00</text>
                    <text x="158" y="310">13:00</text>
                    <text x="30" y="224">17:00</text>
                  </g>
                </g>

                {/* building core */}
                <g className="lyr" style={{ animationDelay: '.34s' }}>
                  <rect x="146" y="136" width="48" height="48" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(14,24,17,.05)" />
                  <path
                    d="M146 152 L162 136 M146 172 L182 136 M156 184 L194 146 M176 184 L194 166"
                    stroke="rgba(14,24,17,.14)"
                    strokeWidth="1"
                  />
                </g>

                {/* balconies */}
                <g className="lyr" style={{ animationDelay: '.5s' }}>
                  <rect x="153" y="114" width="34" height="22" stroke="rgba(14,24,17,.4)" strokeWidth="1.2" fill="rgba(127,166,92,.14)" />
                  <rect x="194" y="143" width="22" height="34" stroke="rgba(14,24,17,.4)" strokeWidth="1.2" fill="rgba(127,166,92,.3)" />
                  <rect x="153" y="184" width="34" height="22" stroke="rgba(14,24,17,.4)" strokeWidth="1.2" fill="rgba(200,165,91,.26)" />
                  <rect x="124" y="143" width="22" height="34" stroke="rgba(14,24,17,.4)" strokeWidth="1.2" fill="rgba(190,120,60,.32)" />
                </g>

                {/* compass letters + short notes */}
                <g className="lyr" style={{ animationDelay: '.64s' }} fontFamily="IBM Plex Mono, monospace" letterSpacing="1">
                  <text x="164" y="44" fontSize="11" fill="rgba(14,24,17,.6)">N</text>
                  <text x="128" y="34" fontSize="7" fill="rgba(14,24,17,.42)">SHADED · EASIEST TO KEEP</text>

                  <text x="290" y="164" fontSize="11" fill="rgba(14,24,17,.6)">E</text>
                  <text x="284" y="150" fontSize="7" fill="rgba(14,24,17,.42)">MORNING SUN</text>
                  <text x="284" y="178" fontSize="7" fill="rgba(14,24,17,.42)">WIDEST CHOICE</text>

                  <text x="164" y="278" fontSize="11" fill="rgba(14,24,17,.6)">S</text>
                  <text x="120" y="266" fontSize="7" fill="rgba(14,24,17,.42)">SUN MOST OF THE DAY</text>

                  <text x="42" y="164" fontSize="11" fill="rgba(14,24,17,.6)">W</text>
                  <text x="14" y="150" fontSize="7" fill="rgba(14,24,17,.42)">AFTERNOON HEAT</text>
                  <text x="14" y="178" fontSize="7" fill="rgba(14,24,17,.42)">HARDEST BRIEF</text>
                </g>

                <text
                  className="lyr"
                  style={{ animationDelay: '.78s' }}
                  x="14"
                  y="324"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="7.5"
                  fill="rgba(14,24,17,.38)"
                  letterSpacing=".8"
                >
                  SUN TRACKS THROUGH THE SOUTHERN SKY AT DELHI’S LATITUDE (~28°N).
                </text>
              </svg>

              <div className="callouts" id="co1">
                <div className="callout"><b>N</b><span>Bright indirect, little direct sun. Foliage and shade species do best.</span></div>
                <div className="callout"><b>E</b><span>Gentle morning sun. The easiest balcony to plant well.</span></div>
                <div className="callout"><b>S</b><span>Sun for much of the day. Hardy, heat-tolerant species.</span></div>
                <div className="callout"><b>W</b><span>Full afternoon heat plus reflected heat. Toughest species only.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREA GUIDE */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scale</span></div>
              <h2 className="d2">What actually fits.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                The most common question we get is whether a small balcony is worth doing at all. It usually is — a compact balcony transforms on a modest budget, provided the floor stays clear and the planting goes vertical.
              </p>
            </div>
          </div>

          <div className="area rv">
            <div className="area-c">
              <span className="sz">Under 40 sq ft</span>
              <h3>Compact</h3>
              <p>One usable wall, standing room only. Everything goes vertical or onto the railing so the floor stays walkable.</p>
              <ul>
                <li>Wall-mounted planters or a small living wall</li>
                <li>Railing planters on the inside face</li>
                <li>Deck tiles or pebble finish over the existing floor</li>
                <li>One compact chair, or a fold-down ledge</li>
              </ul>
            </div>
            <div className="area-c">
              <span className="sz">40–80 sq ft</span>
              <h3>Usable</h3>
              <p>Enough depth for seating and planting to coexist. This is where a balcony starts becoming a room you go out to rather than look at.</p>
              <ul>
                <li>Vertical greening on one wall</li>
                <li>Floor planters along one edge</li>
                <li>Two-seater and a small table</li>
                <li>Low-level lighting for evening use</li>
              </ul>
            </div>
            <div className="area-c">
              <span className="sz">80–150 sq ft</span>
              <h3>Outdoor room</h3>
              <p>Room for zones — a planted edge, a seating area and circulation between them that does not feel tight.</p>
              <ul>
                <li>Living wall plus layered floor planting</li>
                <li>Deck with a defined seating zone</li>
                <li>Pergola or shade sail where orientation demands it</li>
                <li>Drip irrigation on a timer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DRAINAGE DETAIL */}
      <section className="sec sheet">
        <div className="shell ov flip">
          <div className="ov-copy rv">
            <div className="rule-tag"><span className="tag">Detail</span></div>
            <h2 className="d2">The complaint is never the plants. It is the neighbour below.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Most balconies have no reliable floor drain, and the ones that do usually have it in the wrong place once planters are in. Water then finds the shortest route — over the edge, onto the balcony below, and into a conversation with your neighbour that ends the project.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              We plan the floor build-up so runoff moves inward to the existing outlet, not outward to the edge. Planters sit on trays, deck tiles sit on pedestals so water can pass underneath, and the outlet stays reachable after everything is installed.</p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 08 — Drainage containment</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Section through a balcony floor showing planters on trays, deck tiles raised on pedestals, water moving beneath the deck toward an accessible outlet, and no runoff passing over the outer parapet."
              >
                {/* room wall */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="14" y="26" width="20" height="150" stroke="rgba(14,24,17,.32)" strokeWidth="1" fill="rgba(14,24,17,.05)" />
                  <path
                    d="M14 44 L34 26 M14 74 L34 56 M14 104 L34 86 M14 134 L34 116 M14 164 L34 146"
                    stroke="rgba(14,24,17,.14)"
                    strokeWidth="1"
                  />
                </g>

                {/* slab with fall inward to outlet */}
                <g className="lyr" style={{ animationDelay: '.16s' }}>
                  <rect x="34" y="152" width="252" height="24" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.05)" />
                  <path d="M286 152 L34 146 L34 152 Z" fill="rgba(14,24,17,.08)" />
                  <path d="M240 143 h-46 m6 -4 -6 4 6 4" stroke="#C8A55B" strokeWidth="1.1" fill="none" />
                  <text x="246" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">
                    FALL INWARD
                  </text>
                </g>

                {/* outlet */}
                <g className="lyr" style={{ animationDelay: '.28s' }}>
                  <rect x="56" y="140" width="18" height="36" stroke="#C8A55B" strokeWidth="1.2" fill="rgba(200,165,91,.12)" />
                  <path d="M65 146 V172 m-4 -6 4 6 4 -6" stroke="#7FA65C" strokeWidth="1.2" fill="none" />
                </g>

                {/* deck on pedestals */}
                <g className="lyr" style={{ animationDelay: '.4s' }}>
                  <g stroke="rgba(14,24,17,.28)" strokeWidth="1">
                    <rect x="86" y="132" width="38" height="7" />
                    <rect x="128" y="132" width="38" height="7" />
                    <rect x="170" y="132" width="38" height="7" />
                    <rect x="212" y="132" width="38" height="7" />
                    <rect x="252" y="132" width="30" height="7" />
                  </g>
                  <g stroke="rgba(14,24,17,.24)" strokeWidth="1">
                    <path d="M96 139 V150 M156 139 V150 M216 139 V150 M270 139 V150" />
                  </g>
                </g>

                {/* planter with tray */}
                <g className="lyr" style={{ animationDelay: '.54s' }}>
                  <path d="M92 132 V86 H140 V132" stroke="rgba(14,24,17,.36)" strokeWidth="1.2" fill="rgba(127,166,92,.14)" />
                  <rect x="88" y="132" width="56" height="6" stroke="#C8A55B" strokeWidth="1.1" fill="rgba(200,165,91,.14)" />
                  <g id="bfol"></g>
                </g>

                {/* wall planters */}
                <g className="lyr" style={{ animationDelay: '.66s' }}>
                  <rect x="34" y="60" width="26" height="10" stroke="rgba(14,24,17,.32)" strokeWidth="1" fill="rgba(127,166,92,.18)" />
                  <rect x="34" y="98" width="26" height="10" stroke="rgba(14,24,17,.32)" strokeWidth="1" fill="rgba(127,166,92,.18)" />
                </g>

                {/* parapet + no runoff */}
                <g className="lyr" style={{ animationDelay: '.8s' }}>
                  <rect x="286" y="60" width="18" height="116" stroke="rgba(14,24,17,.32)" strokeWidth="1" fill="rgba(14,24,17,.05)" />
                  <path d="M310 72 l14 14 m0 -14 l-14 14" stroke="#B4763C" strokeWidth="1.6" />
                  <text x="252" y="50" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">
                    NO RUNOFF OVER EDGE
                  </text>
                </g>

                {/* water path arrows */}
                <g className="lyr" style={{ animationDelay: '.92s' }} stroke="#7FA65C" strokeWidth="1.2" fill="none">
                  <path d="M120 142 V148 H80 m6 -4 -6 4 6 4" />
                  <path d="M200 142 V148 H150" />
                  <path d="M262 142 V148 H210" />
                </g>

                {/* leaders */}
                <g className="lyr" style={{ animationDelay: '1.02s' }} stroke="rgba(14,24,17,.22)" strokeWidth="1">
                  <path d="M116 86 H320" />
                  <path d="M144 135 H320" />
                  <path d="M196 136 H320" />
                  <path d="M74 158 H320" />
                  <path d="M296 118 H320" />
                </g>
                <g className="lyr" style={{ animationDelay: '1.08s' }} fill="rgba(14,24,17,.55)" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" letterSpacing="1">
                  <text x="324" y="89">01</text>
                  <text x="324" y="138">02</text>
                  <text x="324" y="139">03</text>
                  <text x="324" y="161">04</text>
                  <text x="324" y="121">05</text>
                </g>
              </svg>

              <div className="callouts" id="co2">
                <div className="callout"><b>01</b><span>Planter, self-contained</span></div>
                <div className="callout"><b>02</b><span>Tray beneath every planter</span></div>
                <div className="callout"><b>03</b><span>Deck raised on pedestals</span></div>
                <div className="callout"><b>04</b><span>Outlet kept accessible</span></div>
                <div className="callout"><b>05</b><span>Parapet edge stays dry</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What a balcony project includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Layout planning</h3><p>Circulation first, then seating and planting mapped to the real dimensions — so the finished balcony is somewhere you actually go.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Vertical greening</h3><p>Wall-mounted planters or a compact living wall, to gain planting area without giving up floor.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Flooring</h3><p>Deck tiles, pebbles or artificial grass over the existing floor, laid on pedestals so water still reaches the outlet.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Planters &amp; planting</h3><p>Species chosen for the balcony’s facing and its height above ground, in planters sized so the floor does not disappear.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Seating &amp; lighting</h3><p>Compact seating and low-level lighting where the balcony is meant to be used after dark.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Irrigation</h3><p>Self-watering planters or a small drip system where you travel often and nobody is around to water.</p></div>
            <div className="ir rv"><span className="no">07</span><h3>Care handover</h3><p>A watering routine you can realistically keep, and a maintenance visit schedule if you would rather not.</p></div>
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
                A balcony is small enough that getting these wrong shows immediately.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Which way it faces</h3><p>The single biggest factor in what survives. North and west balconies in the same building need entirely different planting.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Height above ground</h3><p>Above the tenth floor or so, wind decides the planting more than sun does. Tall, thin species simply will not hold.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Drainage</h3><p>Where the outlet is, whether it works, and whether runoff can reach the balcony below. We plan the build-up so it cannot.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Society rules</h3><p>Restrictions on exterior fixings, railing changes or visible planters. Far better confirmed before design than after installation.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Fixings &amp; load</h3><p>What the parapet and walls can take, particularly for wall-mounted planters once they are wet.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>How often you travel</h3><p>An honest answer changes the specification. Frequent travel means self-watering planters or drip, not a daily watering routine.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Balcony visit</h3><p>Orientation, height, outlet position, fixings and a look at society restrictions.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Layout &amp; planting</h3><p>A plan to the real dimensions, with planter positions and species issued for sign-off.</p></div>
              <div className="st rv dl2"><span className="no">03 / Install</span><h3>Build &amp; plant</h3><p>Usually two to four days on site, working around building access rules.</p></div>
              <div className="st rv dl3"><span className="no">04 / Maintain</span><h3>Handover</h3><p>A watering routine you can keep, with optional monthly visits.</p></div>
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
              <summary>My balcony is very small. Is it worth doing?</summary>
              <p>Often more worth it than a large one, because a small balcony transforms on a modest budget. The trick is going vertical and keeping the floor clear. We have worked on balconies under fifty square feet that became the most used part of the home.</p>
            </details>
            <details>
              <summary>Will water drip down to my neighbour?</summary>
              <p>Not if the floor build-up and planter drainage are planned for it. Trays go under every planter, deck tiles sit raised so water can pass beneath, and levels are set so runoff moves inward to the existing outlet rather than out over the edge. This is the single most common complaint with DIY balcony gardens.</p>
            </details>
            <details>
              <summary>What if my balcony faces west?</summary>
              <p>Then we plan for it rather than pretend otherwise. West balconies take direct afternoon sun plus heat radiating off the wall, so we specify genuinely heat-tolerant species, use larger planters that hold moisture longer, and often add shade — a sail, a screen or taller planting on the sun side. It is a harder brief, not an impossible one.</p>
            </details>
            <details>
              <summary>How much upkeep is it?</summary>
              <p>A few minutes of watering most days, pruning every few weeks and a seasonal refresh. If you travel often, tell us at the survey — we would specify self-watering planters or a small drip system rather than hoping a neighbour remembers.</p>
            </details>
            <details>
              <summary>Can you work with the plants I already have?</summary>
              <p>Yes, where they suit the exposure and are healthy. We would rather build around what is already working than replace a balcony that has some life in it. We will be honest about anything that is in the wrong place and unlikely to recover.</p>
            </details>
            <details>
              <summary>Do I need permission from my society?</summary>
              <p>Usually not for planters and flooring laid over the existing surface. You may need it for anything fixed to the exterior face, changes to the railing, or anything visible from outside that alters the elevation. Worth a quick check before design — it is far easier than undoing an installation.</p>
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
            <Link className="rv" href="/services/terrace-garden">
              <div className="plate rvp has-img" data-n="Rooftop Terrace — Delhi NCR">
                <img src="/project_04.jpg" alt="Terrace garden" />
              </div>
              <h3>Terrace Gardens</h3>
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
        <div className="plate dk has-img" data-n="Balcony Garden — Wall of Gardens">
          <img src="/project_05.jpg" alt="Balcony garden photograph" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Send us a photo of your balcony.</h2>
            <p className="lede light">Tell us which way it faces and roughly how big it is. Site visits within Delhi NCR are free and carry no obligation.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Book a Site Visit</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp a Photo</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
