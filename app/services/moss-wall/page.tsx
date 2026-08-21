import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Preserved Moss Walls — Interior Green Features | Wall of Gardens',
  description: 'Preserved moss walls, moss logos and interior green features for offices and commercial interiors across Delhi NCR. No irrigation, no sunlight, no watering schedule.',
};

export default function MossWallPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Moss Walls</div>
          <div className="rule-tag"><span className="tag gold">Sheet 05 — Scope of works</span></div>
          <h1 className="d1">Moss Walls</h1>
          <p className="lede light">
            Preserved moss for interiors. No irrigation, no sunlight, no watering schedule for anyone to forget — <em className="g">and no plastic, either.</em>
          </p>
        </div>
      </section>

      {/* OVERVIEW + ENVELOPE CHART */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Overview</span></div>
            <h2 className="d2">Real moss. It just stopped growing.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Preserved moss is harvested moss whose sap has been replaced with a glycerine-based solution. It keeps the colour, depth and texture of living moss but has no roots and no longer photosynthesises. Which means it needs nothing: no water, no light, no drainage, no maintenance visit that somebody has to remember to schedule.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              That is the trade. You give up growth, and in return you remove every failure mode a living wall has. For a reception wall or a boardroom, that is usually the right trade — as long as the conditions sit inside the envelope on the right.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 04 — Operating envelope</span></div>
            <div className="dwg-wrap">
              <svg
                className="dwg"
                viewBox="0 0 340 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Chart plotting relative humidity against light exposure, showing the safe operating envelope for preserved moss, with failure zones for excessive dryness, excessive damp and direct sunlight."
              >
                {/* plot frame */}
                <g className="lyr" style={{ animationDelay: '.05s' }}>
                  <rect x="52" y="26" width="260" height="212" stroke="rgba(14,24,17,.22)" strokeWidth="1" />
                </g>

                {/* failure zones */}
                <g className="lyr" style={{ animationDelay: '.16s' }}>
                  <rect x="52" y="26" width="72" height="212" fill="rgba(200,165,91,.13)" />
                  <rect x="256" y="26" width="56" height="212" fill="rgba(37,80,111,.14)" />
                  <rect x="52" y="26" width="260" height="76" fill="rgba(190,120,60,.13)" />
                </g>

                {/* safe envelope */}
                <g className="lyr" style={{ animationDelay: '.34s' }}>
                  <rect x="124" y="102" width="132" height="136" fill="rgba(127,166,92,.24)" stroke="#7FA65C" strokeWidth="1.5" />
                </g>

                {/* zone labels */}
                <g className="lyr" style={{ animationDelay: '.46s' }} fontFamily="IBM Plex Mono, monospace" fontSize="7.5" letterSpacing=".8">
                  <text x="58" y="176" fill="rgba(14,24,17,.5)">TOO DRY</text>
                  <text x="58" y="188" fill="rgba(14,24,17,.38)">BRITTLE</text>
                  <text x="262" y="176" fill="rgba(14,24,17,.5)">TOO DAMP</text>
                  <text x="262" y="188" fill="rgba(14,24,17,.38)">MOULD RISK</text>
                  <text x="150" y="58" fill="rgba(14,24,17,.5)">DIRECT SUNLIGHT — COLOUR FADES</text>
                  <text x="140" y="160" fill="#3E6B4A" fontSize="9">SUITABLE</text>
                </g>

                {/* plotted conditions */}
                <g className="lyr" style={{ animationDelay: '.62s' }}>
                  <circle cx="168" cy="196" r="4.5" fill="#7FA65C" />
                  <path d="M172 196 h30" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <text x="204" y="199" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.55)">OFFICE INTERIOR</text>

                  <circle cx="212" cy="128" r="4.5" fill="#7FA65C" />
                  <path d="M216 128 h18" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <text x="236" y="131" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.55)">LOBBY</text>

                  <circle cx="100" cy="150" r="4.5" fill="none" stroke="#C8A55B" strokeWidth="1.5" />
                  <path d="M96 150 h-8" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <text x="54" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">HEAVY AC</text>

                  <circle cx="286" cy="66" r="4.5" fill="none" stroke="#C8A55B" strokeWidth="1.5" />
                  <text x="256" y="86" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.45)">OUTDOOR</text>
                </g>

                {/* axes */}
                <g className="lyr" style={{ animationDelay: '.76s' }}>
                  <path d="M52 238 H312 M52 26 V238" stroke="rgba(14,24,17,.3)" strokeWidth="1" />
                  <path d="M52 238 V244 M124 238 V244 M188 238 V244 M256 238 V244 M312 238 V244" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.44)">
                    <text x="44" y="256">25%</text>
                    <text x="114" y="256">40%</text>
                    <text x="180" y="256">55%</text>
                    <text x="246" y="256">70%</text>
                    <text x="300" y="256">85%</text>
                  </g>
                  <text x="52" y="274" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="rgba(14,24,17,.4)" letterSpacing=".8">RELATIVE HUMIDITY</text>
                  <g fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.44)">
                    <text x="10" y="36">DIRECT</text>
                    <text x="10" y="110">BRIGHT</text>
                    <text x="10" y="180">AMBIENT</text>
                    <text x="10" y="238">NONE</text>
                  </g>
                </g>

                <text className="lyr" style={{ animationDelay: '.9s' }} x="52" y="300" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.38)" letterSpacing=".8">
                  INDICATIVE. WE TAKE READINGS ON SITE BEFORE SPECIFYING.
                </text>
              </svg>

              <div className="callouts" id="callouts">
                <div className="callout"><b>■</b><span>Suitable envelope</span></div>
                <div className="callout"><b>■</b><span>Too dry — moss turns brittle</span></div>
                <div className="callout"><b>■</b><span>Too damp — mould risk</span></div>
                <div className="callout"><b>■</b><span>Direct sun — colour fades</span></div>
                <div className="callout"><b>●</b><span>Typical interior conditions</span></div>
                <div className="callout"><b>○</b><span>Needs a different approach</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOSS TYPES */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Specimens</span></div>
              <h2 className="d2">Four textures, usually mixed.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>
                A single-texture wall reads flat under office lighting. Most of what we install combines two or three, so the surface holds depth from across a lobby as well as up close.
              </p>
            </div>
          </div>

          <div className="spec rv">
            <div className="sp">
              <div className="swatch"><svg viewBox="0 0 100 66" id="sw-bun"></svg></div>
              <div><span className="n">Type 01</span><h3>Bun Moss</h3></div>
              <p>Domed cushions with real depth. Reads as sculpted relief rather than a flat surface, and catches directional light well.</p>
              <div className="use">Feature walls<br />Depth &amp; relief</div>
            </div>
            <div className="sp">
              <div className="swatch"><svg viewBox="0 0 100 66" id="sw-flat"></svg></div>
              <div><span className="n">Type 02</span><h3>Flat Moss</h3></div>
              <p>Low, irregular sheets in mixed greens. The workhorse — it fills area economically and gives the other textures something to sit against.</p>
              <div className="use">Backgrounds<br />Large areas</div>
            </div>
            <div className="sp">
              <div className="swatch"><svg viewBox="0 0 100 66" id="sw-reindeer"></svg></div>
              <div><span className="n">Type 03</span><h3>Reindeer Moss</h3></div>
              <p>Fine branching lichen, soft to the touch, available in a wide colour range including near-white and deep forest.</p>
              <div className="use">Logos &amp; contrast<br />Colour work</div>
            </div>
            <div className="sp">
              <div className="swatch"><svg viewBox="0 0 100 66" id="sw-mixed"></svg></div>
              <div><span className="n">Type 04</span><h3>Mixed Composition</h3></div>
              <p>Two or three textures with preserved foliage, timber battens or stone worked in. What most corporate walls actually end up being.</p>
              <div className="use">Reception<br />Boardrooms</div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Scope</span></div>
              <h2 className="d2">What an installation includes.</h2>
            </div>
          </div>
          <div className="idx">
            <div className="ir rv"><span className="no">01</span><h3>Composition design</h3><p>Layout worked to your wall dimensions — flat field, mixed texture, shaped feature or a logo wall — issued as a drawing before fabrication.</p></div>
            <div className="ir rv"><span className="no">02</span><h3>Moss selection</h3><p>Types and colour range chosen against the interior palette and the lighting the wall will actually sit under.</p></div>
            <div className="ir rv"><span className="no">03</span><h3>Logos &amp; lettering</h3><p>Company marks cut into the moss field, mounted proud in metal or acrylic, or picked out in a contrasting moss colour.</p></div>
            <div className="ir rv"><span className="no">04</span><h3>Panel fabrication</h3><p>Built up on backing board in our studio, in panel sizes that suit your access and lift dimensions.</p></div>
            <div className="ir rv"><span className="no">05</span><h3>Fixing &amp; installation</h3><p>Mounting detail worked out for the wall construction and panel weight, with a shadow gap or frame where the edge needs resolving.</p></div>
            <div className="ir rv"><span className="no">06</span><h3>Service &amp; repair</h3><p>Periodic dusting, and repasting or replacing any section that lifts. Booked as needed rather than on a standing contract.</p></div>
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
                Moss walls are simple to live with and easy to get wrong at specification. These are the things we check.
              </p>
            </div>
          </div>
          <div className="chk">
            <div className="chk-i rv"><span className="no">01</span><h3>Direct sunlight</h3><p>Where the sun tracks across the wall through the day. Direct sun bleaches preserved moss faster than anything else.</p></div>
            <div className="chk-i rv dl1"><span className="no">02</span><h3>Humidity</h3><p>Very dry, heavily conditioned rooms make it brittle over time. Damp areas risk mould. The envelope above is what we are aiming for.</p></div>
            <div className="chk-i rv dl2"><span className="no">03</span><h3>Wall construction</h3><p>What the panels fix into, and whether services run behind the wall we are drilling.</p></div>
            <div className="chk-i rv dl3"><span className="no">04</span><h3>Hand height</h3><p>Moss at arm level in a busy corridor will get touched. Worth planning the composition, or the height, around that.</p></div>
            <div className="chk-i rv"><span className="no">05</span><h3>Lighting</h3><p>How the wall is lit changes how the texture reads. Flat overhead light kills depth; grazing light from above brings it out.</p></div>
            <div className="chk-i rv dl1"><span className="no">06</span><h3>Access &amp; panel size</h3><p>Lift dimensions and corridor turns decide how the wall is split into panels and where the joints fall.</p></div>
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
              <div className="st rv"><span className="no">01 / Survey</span><h3>Wall &amp; conditions</h3><p>Dimensions, sunlight track, humidity, lighting and access for panel delivery.</p></div>
              <div className="st rv dl1"><span className="no">02 / Design</span><h3>Composition drawing</h3><p>Layout, moss types, colour range and any logo work issued for sign-off.</p></div>
              <div className="st rv dl2"><span className="no">03 / Fabricate</span><h3>Studio build</h3><p>Panels built up off site, so installation day is fixing rather than construction.</p></div>
              <div className="st rv dl3"><span className="no">04 / Install</span><h3>Fixing &amp; handover</h3><p>Typically a single day on site, with edge and joint detailing resolved in place.</p></div>
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
              <summary>Is it real moss or artificial?</summary>
              <p>Real moss, preserved. It is harvested and then treated so it holds its texture and colour without continuing to grow. Up close it looks and feels like moss because it is moss — that is what separates it from a moulded plastic moss panel, and it is obvious the moment someone touches it.</p>
            </details>
            <details>
              <summary>Does it need water or sunlight?</summary>
              <p>Neither. It has no root system and no longer photosynthesises. That is the entire point: a green wall for a lobby that nobody has to water, light, drain or schedule maintenance visits for.</p>
            </details>
            <details>
              <summary>How long does it last?</summary>
              <p>Several years indoors within the envelope shown above. Colour softens gradually and sections can lift at the edges over time. Both are fixable — we clean and repaste rather than replacing the whole wall, which is why a moss wall usually outlives the fit-out around it.</p>
            </details>
            <details>
              <summary>Can you do our company logo in it?</summary>
              <p>Yes, and it is the most common corporate request we get. The mark can be cut out of the moss field, mounted proud of it in brushed metal or acrylic, or picked out in a contrasting moss colour. Send the artwork as a vector file along with the wall dimensions.</p>
            </details>
            <details>
              <summary>Can it go outdoors, or in a covered balcony?</summary>
              <p>No. Preserved moss is an interior product. Delhi’s humidity swings, direct sun and dust will degrade it quickly outdoors, and a covered balcony is still outdoors as far as the material is concerned. For those spaces we would propose an artificial vertical garden instead.</p>
            </details>
            <details>
              <summary>Is it safe around people with allergies?</summary>
              <p>Preserved moss does not produce pollen or spores, and it holds no soil, so it is generally better in this respect than living planting. It does collect dust like any textured surface, which is what the periodic cleaning is for.</p>
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
              <div className="plate rvp has-img" data-n="Living Wall — Lobby Feature">
                <img src="/project_03.jpg" alt="Vertical living wall" />
              </div>
              <h3>Vertical Gardens</h3>
            </Link>
            <Link className="rv dl1" href="/services/plantscaping">
              <div className="plate rvp has-img" data-n="Office Indoor Planting — Workspace">
                <img src="/project_06.jpg" alt="Office Indoor Planting" />
              </div>
              <h3>Corporate Plantscaping</h3>
            </Link>
            <Link className="rv dl2" href="/services/corporate-landscaping">
              <div className="plate rvp has-img" data-n="Corporate Landscape — Gurugram Campus">
                <img src="/project_01.jpg" alt="Corporate landscape" />
              </div>
              <h3>Corporate Landscaping</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk has-img" data-n="Preserved Moss Wall — Wall of Gardens">
          <img src="/project_02.jpg" alt="Preserved Moss Wall" />
        </div>
        <div className="shell">
          <div className="close-in rv">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Have a reception wall in mind?</h2>
            <p className="lede light">Send us the wall dimensions and your logo artwork. Site visits within Delhi NCR are free.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', alignItems: 'center' }}>
              <Link className="btn btn-g" href="/contact"><span>Request a Design</span></Link>
              <a className="btn btn-o" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer"><span>WhatsApp Us</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
