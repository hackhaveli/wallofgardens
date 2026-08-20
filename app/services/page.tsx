import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { createServerClient } from '../../lib/supabase';
import { DEFAULT_SERVICES_CONTENT, DEFAULT_SITE_SETTINGS } from '../../lib/content-defaults';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Services — Landscaping, Living Walls & Green Spaces | Wall of Gardens',
  description: 'Six disciplines from one Delhi NCR studio: corporate landscaping, vertical gardens, terrace gardens, balcony gardens, preserved moss walls and corporate plantscaping.',
};

async function getServicesData() {
  try {
    const supabase = createServerClient();
    const [pageRes, settingsRes] = await Promise.all([
      supabase.from('pages_content').select('sections').eq('slug', 'services').single(),
      supabase.from('site_settings').select('data').eq('id', 'global').single(),
    ]);

    const content = pageRes.data?.sections ? { ...DEFAULT_SERVICES_CONTENT, ...(pageRes.data.sections as typeof DEFAULT_SERVICES_CONTENT) } : DEFAULT_SERVICES_CONTENT;
    const settings = settingsRes.data?.data ? { ...DEFAULT_SITE_SETTINGS, ...(settingsRes.data.data as typeof DEFAULT_SITE_SETTINGS) } : DEFAULT_SITE_SETTINGS;

    return { content, settings };
  } catch {
    return { content: DEFAULT_SERVICES_CONTENT, settings: DEFAULT_SITE_SETTINGS };
  }
}

export default async function ServicesPage() {
  const { content, settings } = await getServicesData();
  const c = content;

  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Services</div>
          <div className="rule-tag"><span className="tag gold">{c.banner.badge}</span></div>
          <h1 className="d1">{c.banner.heading}</h1>
          <p className="lede light">{c.banner.lede}</p>
        </div>
      </section>

      {/* SELECTOR */}
      <section className="sec sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">Selection</span></div>
              <h2 className="d2">{c.matrix.heading}</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '58ch' }}>{c.matrix.lede}</p>
            </div>
          </Reveal>

          <Reveal tag="div" className="mtx">
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
          </Reveal>

          <Reveal tag="p" className="tag" style={{ marginTop: '20px' }}>Not sure? Send a photograph. We will tell you which of these your space can actually support.</Reveal>
        </div>
      </section>

      {/* REGISTER */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{c.register.badge}</span></div>
              <h2 className="d2">{c.register.heading}</h2>
            </div>
            <span className="tag">{c.register.sub}</span>
          </Reveal>

          <div className="reg">
            {c.register.items.map((item: { no: string; title: string; subtitle: string; desc: string; href: string; sheet: string }, idx: number) => (
              <Reveal tag="a" className="rg" delay={(idx % 6) as 0 | 1 | 2 | 3 | 4 | 5} href={item.href} key={item.no}>
                <span className="no">{item.no}</span>
                <div className="thumb">
                  {idx === 0 && (
                    <svg viewBox="0 0 120 84" aria-hidden="true">
                      <rect x="6" y="6" width="108" height="72" stroke="rgba(14,24,17,.28)" strokeWidth="1" fill="none" />
                      <rect x="7" y="7" width="20" height="70" fill="rgba(127,166,92,.2)" />
                      <rect x="7" y="7" width="106" height="10" fill="rgba(127,166,92,.2)" />
                      <rect x="38" y="22" width="46" height="26" stroke="rgba(14,24,17,.34)" strokeWidth="1" fill="rgba(14,24,17,.07)" />
                      <rect x="32" y="58" width="58" height="16" fill="rgba(127,166,92,.32)" />
                      <path d="M84 54 H44 m5 -3 -5 3 5 3" stroke="#7FA65C" strokeWidth="1.1" fill="none" />
                      <path d="M30 66 H68" stroke="#C8A55B" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {idx === 1 && (
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
                      <g fill="#7FA65C"><circle cx="86" cy="24" r="1.6" /><circle cx="100" cy="24" r="1.6" /><circle cx="86" cy="43" r="1.6" /><circle cx="100" cy="43" r="1.6" /><circle cx="86" cy="62" r="1.6" /><circle cx="100" cy="62" r="1.6" /></g>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg viewBox="0 0 120 84" aria-hidden="true">
                      <rect x="10" y="60" width="100" height="14" stroke="rgba(14,24,17,.3)" strokeWidth="1" fill="rgba(14,24,17,.06)" />
                      <path d="M10 60 H110 V56 L10 52 Z" fill="rgba(14,24,17,.08)" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
                      <path d="M10 52 L110 56 L110 52 L10 48 Z" fill="rgba(200,165,91,.45)" stroke="#C8A55B" strokeWidth="1" />
                      <path d="M10 48 L110 52 L110 42 L10 38 Z" fill="rgba(127,166,92,.14)" stroke="rgba(14,24,17,.22)" strokeWidth="1" />
                      <path d="M10 38 L110 42 L110 24 L10 20 Z" fill="rgba(127,166,92,.22)" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                      <g fill="#7FA65C" opacity=".8"><circle cx="28" cy="15" r="4" /><circle cx="52" cy="12" r="5" /><circle cx="76" cy="15" r="4" /><circle cx="96" cy="13" r="4.5" /></g>
                    </svg>
                  )}
                  {idx === 3 && (
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
                  )}
                  {idx === 4 && (
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
                  )}
                  {idx === 5 && (
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
                      <g fill="#7FA65C"><circle cx="26" cy="26" r="4" /><circle cx="24" cy="56" r="3.4" /><circle cx="54" cy="38" r="3" /><circle cx="52" cy="64" r="2.6" /></g>
                      <g fill="none" stroke="#C8A55B" strokeWidth="1.2"><circle cx="78" cy="24" r="2.6" /><circle cx="78" cy="62" r="2.6" /></g>
                    </svg>
                  )}
                </div>
                <div><h3>{item.title}</h3><div className="sub">{item.subtitle}</div></div>
                <p>{item.desc}</p>
                <span className="go">{item.sheet || `Sheet 0${idx + 1}`} &#8594;</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON TO ALL */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag gold">{c.common.badge}</span></div>
              <h2 className="d2">{c.common.heading}</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>{c.common.lede}</p>
            </div>
          </Reveal>
          <div className="idx">
            {c.common.items.map((item: { no: string; title: string; desc: string }, i: number) => (
              <Reveal tag="div" className="ir" key={i}>
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{c.process.badge}</span></div>
              <h2 className="d2">{c.process.heading}</h2>
            </div>
          </Reveal>
          <div className="rail">
            <div className="rail-in">
              {c.process.items.map((stage: { no: string; title: string; desc: string }, i: number) => (
                <Reveal tag="div" className="st" key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <span className="no">{stage.no}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="close img-bg" id="contact">
        <div className="close-bg">
          <Image src={c.closing.bg_image || '/cta_bg.jpg'} alt="Lush rooftop garden at dusk" fill style={{ objectFit: 'cover' }} sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,24,17,.92) 0%, rgba(14,24,17,.65) 55%, rgba(14,24,17,.3) 100%)' }} />
        </div>
        <div className="shell close-in">
          <Reveal tag="div">
            <div className="rule-tag"><span className="tag gold">{c.closing.badge}</span></div>
            <h2 className="d2">{c.closing.heading}</h2>
            <p className="lede light">{c.closing.lede}</p>
            <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a className="btn btn-g" href={c.closing.cta_primary_href || `mailto:${settings.email}`}><span>{c.closing.cta_primary_label}</span></a>
              <a className="btn btn-o" href={c.closing.cta_secondary_href || settings.whatsapp} target="_blank" rel="noopener"><span>{c.closing.cta_secondary_label}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
