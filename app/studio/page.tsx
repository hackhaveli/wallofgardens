import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { createServerClient } from '../../lib/supabase';
import { DEFAULT_STUDIO_CONTENT, DEFAULT_SITE_SETTINGS } from '../../lib/content-defaults';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About — Landscape & Living Wall Studio, Delhi NCR | Wall of Gardens',
  description: 'Wall of Gardens is a Delhi NCR landscape and living wall studio working since 2019. Design, procurement, installation and maintenance held by one team.',
};

async function getStudioContent() {
  try {
    const supabase = createServerClient();
    const [studioRes, settingsRes] = await Promise.all([
      supabase.from('pages_content').select('sections').eq('slug', 'studio').single(),
      supabase.from('site_settings').select('data').eq('id', 'global').single(),
    ]);
    const studio = studioRes.data?.sections ? { ...DEFAULT_STUDIO_CONTENT, ...(studioRes.data.sections as typeof DEFAULT_STUDIO_CONTENT) } : DEFAULT_STUDIO_CONTENT;
    const settings = settingsRes.data?.data ? { ...DEFAULT_SITE_SETTINGS, ...(settingsRes.data.data as typeof DEFAULT_SITE_SETTINGS) } : DEFAULT_SITE_SETTINGS;
    return { studio, settings };
  } catch {
    return { studio: DEFAULT_STUDIO_CONTENT, settings: DEFAULT_SITE_SETTINGS };
  }
}

export default async function StudioPage() {
  const { studio, settings } = await getStudioContent();
  const s = studio;
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Studio</div>
          <div className="rule-tag"><span className="tag gold">{s.banner.badge}</span></div>
          <h1 className="d1">{s.banner.heading}</h1>
          <p className="lede light">{s.banner.lede}</p>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="sec sheet">
        <div className="shell ov">
          <Reveal tag="div" className="ov-copy">
            <div className="rule-tag"><span className="tag">{s.delivery_model.badge}</span></div>
            <h2 className="d2">{s.delivery_model.heading}</h2>
            {(s.delivery_model.body as string[]).map((para: string, i: number) => (
              <p className="bd" style={{ marginTop: i === 0 ? '18px' : '16px' }} key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal tag="div" delay={1}>
            <div className="rule-tag"><span className="tag">Fig. 11 — Delivery model</span></div>
            <div className="dwg-wrap">
              <svg className="dwg" viewBox="0 0 340 250" fill="none" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Two delivery chains compared. The typical chain has separate designer, contractor and subcontractor stages with handoff gaps and unowned maintenance. The studio model holds design, procurement, installation and maintenance in one continuous team.">

                <text className="lyr" style={{animationDelay:'.05s'}} x="14" y="20"
                  fontFamily="IBM Plex Mono, monospace" fontSize="8"
                  fill="rgba(14,24,17,.5)" letterSpacing="1">A — TYPICAL CHAIN</text>

                <g className="lyr" style={{animationDelay:'.16s'}} fontFamily="IBM Plex Mono, monospace" fontSize="7">
                  <rect x="14" y="34" width="56" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)"/>
                  <text x="26" y="53" fill="rgba(14,24,17,.55)">CLIENT</text>
                  <rect x="86" y="34" width="62" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)"/>
                  <text x="96" y="53" fill="rgba(14,24,17,.55)">DESIGNER</text>
                  <rect x="164" y="34" width="70" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)"/>
                  <text x="172" y="53" fill="rgba(14,24,17,.55)">CONTRACTOR</text>
                  <rect x="250" y="34" width="76" height="30" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)"/>
                  <text x="256" y="53" fill="rgba(14,24,17,.55)">SUBCONTRACTOR</text>
                </g>

                <g className="lyr" style={{animationDelay:'.34s'}} stroke="#B4763C" strokeWidth="1.4">
                  <path d="M74 44 l8 10 m0 -10 l-8 10"/>
                  <path d="M152 44 l8 10 m0 -10 l-8 10"/>
                  <path d="M238 44 l8 10 m0 -10 l-8 10"/>
                </g>
                <text className="lyr" style={{animationDelay:'.42s'}} x="14" y="80"
                  fontFamily="IBM Plex Mono, monospace" fontSize="7"
                  fill="rgba(180,118,60,.85)" letterSpacing=".6">THREE HANDOFFS — DETAIL DROPS AT EACH</text>

                <g className="lyr" style={{animationDelay:'.52s'}}>
                  <rect x="164" y="96" width="162" height="26" stroke="rgba(14,24,17,.22)" strokeWidth="1"
                    strokeDasharray="4 4" fill="none"/>
                  <text x="176" y="113" fontFamily="IBM Plex Mono, monospace" fontSize="7"
                    fill="rgba(14,24,17,.35)" letterSpacing="1">MAINTENANCE — UNOWNED</text>
                  <path d="M288 64 V96" stroke="rgba(14,24,17,.2)" strokeWidth="1" strokeDasharray="3 3"/>
                </g>

                <path className="lyr" style={{animationDelay:'.62s'}} d="M14 142 H326"
                  stroke="rgba(14,24,17,.14)" strokeWidth="1"/>

                <text className="lyr" style={{animationDelay:'.7s'}} x="14" y="168"
                  fontFamily="IBM Plex Mono, monospace" fontSize="8"
                  fill="rgba(14,24,17,.6)" letterSpacing="1">B — WALL OF GARDENS</text>

                <g className="lyr" style={{animationDelay:'.82s'}} fontFamily="IBM Plex Mono, monospace" fontSize="7">
                  <rect x="14" y="182" width="56" height="34" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.04)"/>
                  <text x="26" y="203" fill="rgba(14,24,17,.55)">CLIENT</text>
                  <rect x="78" y="182" width="248" height="34" stroke="#7FA65C" strokeWidth="1.4" fill="rgba(127,166,92,.16)"/>
                  <path d="M140 182 V216 M202 182 V216 M264 182 V216" stroke="rgba(127,166,92,.6)" strokeWidth="1"/>
                  <text x="88" y="203" fill="rgba(14,24,17,.62)">DESIGN</text>
                  <text x="148" y="203" fill="rgba(14,24,17,.62)">PROCURE</text>
                  <text x="212" y="203" fill="rgba(14,24,17,.62)">INSTALL</text>
                  <text x="272" y="203" fill="rgba(14,24,17,.62)">MAINTAIN</text>
                </g>
                <g className="lyr" style={{animationDelay:'.94s'}}>
                  <path d="M70 199 h8 m-4 -4 4 4 -4 4" stroke="#7FA65C" strokeWidth="1.3" fill="none"/>
                </g>
                <text className="lyr" style={{animationDelay:'1.0s'}} x="14" y="234"
                  fontFamily="IBM Plex Mono, monospace" fontSize="7"
                  fill="rgba(94,132,66,.9)" letterSpacing=".6">ONE TEAM — ONE POINT OF ACCOUNTABILITY</text>
              </svg>

              <div className="callouts" id="co1">
                <div className="callout" style={{animationDelay:'1.05s'}}><b>&#10005;</b><span>Handoff — where detail gets dropped</span></div>
                <div className="callout" style={{animationDelay:'1.12s'}}><b>&#9633;</b><span>Dashed: nobody owns it</span></div>
                <div className="callout" style={{animationDelay:'1.19s'}}><b>&#9632;</b><span>Continuous: same team throughout</span></div>
                <div className="callout" style={{animationDelay:'1.26s'}}><b>&#8594;</b><span>One contact, start to aftercare</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="sec sec-t sheet">
        <div className="shell ov flip">
          <Reveal tag="div" className="ov-copy">
            <div className="rule-tag"><span className="tag">{s.coverage.badge}</span></div>
            <h2 className="d2">{s.coverage.heading}</h2>
            {(s.coverage.body as string[]).map((para: string, i: number) => (
              <p className="bd" style={{ marginTop: i === 0 ? '18px' : '16px' }} key={i}>{para}</p>
            ))}
            <div className="tag" style={{ marginTop: '26px', lineHeight: '2' }}>
              {settings.address_line1}, {settings.address_line2}<br />
              GSTIN {settings.gstin}
            </div>
          </Reveal>

          <Reveal tag="div" delay={1}>
            <div className="rule-tag"><span className="tag">Fig. 12 — Coverage</span></div>
            <div className="dwg-wrap">
              <svg className="dwg" viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Schematic coverage diagram showing the studio in west Delhi with crews working across Delhi, Gurugram, Noida, Ghaziabad and Faridabad.">

                <g className="lyr" style={{animationDelay:'.05s'}} stroke="rgba(200,165,91,.34)" strokeWidth="1" strokeDasharray="3 5" fill="none">
                  <circle cx="118" cy="128" r="46"/>
                  <circle cx="118" cy="128" r="86"/>
                  <circle cx="118" cy="128" r="126"/>
                </g>

                <g className="lyr" style={{animationDelay:'.18s'}}>
                  <path d="M96 54 L168 46 L204 76 L212 130 L188 176 L134 194 L86 172 L64 124 L70 78 Z"
                    fill="rgba(127,166,92,.2)" stroke="rgba(14,24,17,.26)" strokeWidth="1"/>
                  <text x="140" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="8"
                    fill="rgba(14,24,17,.5)" letterSpacing="1">DELHI</text>
                </g>

                <g className="lyr" style={{animationDelay:'.34s'}}>
                  <circle cx="118" cy="128" r="7" fill="#C8A55B"/>
                  <circle cx="118" cy="128" r="12" stroke="#C8A55B" strokeWidth="1"/>
                  <path d="M111 128 H60" stroke="rgba(14,24,17,.3)" strokeWidth="1"/>
                  <text x="10" y="124" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.55)" letterSpacing=".6">STUDIO</text>
                  <text x="10" y="134" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.4)">JANAKPURI</text>
                </g>

                <g className="lyr" style={{animationDelay:'.5s'}} fontFamily="IBM Plex Mono, monospace" fontSize="7.5">
                  <g stroke="rgba(14,24,17,.24)" strokeWidth="1" strokeDasharray="2 3">
                    <path d="M118 128 L62 208"/>
                    <path d="M118 128 L232 178"/>
                    <path d="M118 128 L250 92"/>
                    <path d="M118 128 L152 236"/>
                  </g>
                  <g fill="#7FA65C">
                    <circle cx="62" cy="208" r="5"/>
                    <circle cx="232" cy="178" r="5"/>
                    <circle cx="250" cy="92" r="5"/>
                    <circle cx="152" cy="236" r="5"/>
                  </g>
                  <g fill="rgba(14,24,17,.55)">
                    <text x="14" y="224">GURUGRAM</text>
                    <text x="242" y="182">NOIDA</text>
                    <text x="260" y="96">GHAZIABAD</text>
                    <text x="162" y="248">FARIDABAD</text>
                  </g>
                </g>

                <g className="lyr" style={{animationDelay:'.66s'}} fontFamily="IBM Plex Mono, monospace"
                  fontSize="6.5" fill="rgba(200,165,91,.85)" letterSpacing=".6">
                  <text x="124" y="86">CORE</text>
                  <text x="124" y="46">NCR</text>
                  <text x="124" y="8">PROJECT WORK</text>
                </g>

                <text className="lyr" style={{animationDelay:'.78s'}} x="10" y="272"
                  fontFamily="IBM Plex Mono, monospace" fontSize="7"
                  fill="rgba(14,24,17,.36)" letterSpacing=".8">SCHEMATIC. NOT TO SCALE.</text>
              </svg>

              <div className="callouts" id="co2">
                <div className="callout" style={{animationDelay:'1.05s'}}><b>&#9679;</b><span>Studio — design &amp; specification</span></div>
                <div className="callout" style={{animationDelay:'1.12s'}}><b>&#9679;</b><span>Regular crew coverage</span></div>
                <div className="callout" style={{animationDelay:'1.19s'}}><b>&#9711;</b><span>Routine maintenance radius</span></div>
                <div className="callout" style={{animationDelay:'1.26s'}}><b>&#9711;</b><span>Project work by arrangement</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="sec sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">Approach</span></div>
              <h2 className="d2">How we work, put plainly.</h2>
            </div>
          </Reveal>
          <div className="idx">
            {(s.approach.items as { no: string; title: string; desc: string }[]).map((item, i) => (
              <Reveal tag="div" className="ir" key={i}>
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WON'T DO */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{s.constraints.badge}</span></div>
              <h2 className="d2">{s.constraints.heading}</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>{s.constraints.lede}</p>
            </div>
          </Reveal>
          <Reveal tag="div" className="wont">
            {(s.constraints.items as { title: string; desc: string }[]).map((item, i) => (
              <div key={i} className="wont-i">
                <svg className="mark" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4 L16 16 M16 4 L4 16" stroke="#B4763C" strokeWidth="1.6" /></svg>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CLIENTS + TEAM */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag gold">Clients</span></div>
              <h2 className="d2">Spaces we have worked on.</h2>
            </div>
            <span className="tag light">Replace with supplied logo files</span>
          </Reveal>
          <Reveal tag="div" className="cl-about" style={{ marginBottom: 'clamp(44px,5vw,72px)' }}>
            {(s.clients.items as string[]).map((name: string, i: number) => (
              <span key={i}>{name}</span>
            ))}
          </Reveal>
          <Reveal type="rvp" tag="div" className="plate dk" data-n="Studio / team photograph — replace" style={{aspectRatio:'21/8',minHeight:'220px'}}></Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close" id="contact">
        <div className="plate dk" data-n="Full-width image — replace with project photograph"></div>
        <div className="shell close-in">
          <Reveal tag="div">
            <div className="rule-tag"><span className="tag gold">{s.closing.badge}</span></div>
            <h2 className="d2">{s.closing.heading}</h2>
            <p className="lede light">{s.closing.lede}</p>
            <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a className="btn btn-g" href={s.closing.cta_primary_href}><span>{s.closing.cta_primary_label}</span></a>
              <a className="btn btn-o" href={s.closing.cta_secondary_href} target="_blank" rel="noopener"><span>{s.closing.cta_secondary_label}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
