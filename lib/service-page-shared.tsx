import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../app/components/Reveal';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import { createServerClient } from './supabase';
import { SERVICE_PAGE_DEFAULTS } from './content-defaults';

type ServiceData = typeof SERVICE_PAGE_DEFAULTS[string];

export async function getServiceContent(slug: string): Promise<ServiceData> {
  try {
    const supabase = createServerClient();
    const { data } = await supabase.from('pages_content').select('sections').eq('slug', slug).single();
    if (data?.sections) {
      return { ...SERVICE_PAGE_DEFAULTS[slug], ...(data.sections as ServiceData) };
    }
  } catch {
    // fallback to defaults
  }
  return SERVICE_PAGE_DEFAULTS[slug];
}

interface ServicePageProps {
  content: ServiceData;
}

export function ServicePageContent({ content }: ServicePageProps) {
  const c = content;
  return (
    <>
      <Navbar />

      {/* BANNER */}
      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {c.title}</div>
          <div className="rule-tag"><span className="tag gold">{c.sheet}</span></div>
          <h1 className="d1">{c.title}</h1>
          <p className="lede light" dangerouslySetInnerHTML={{ __html: c.lede }} />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sec sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">Overview</span></div>
              <h2 className="d2">{c.overview_heading}</h2>
            </div>
          </Reveal>
          <Reveal tag="div" className="two-col prose">
            {(c.overview_body as string[]).filter(Boolean).map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SCOPE */}
      {c.scope_items?.length > 0 && (
        <section className="sec-lg sec-d sheet on-dark">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag gold">Scope</span></div>
                <h2 className="d2">{c.scope_heading}</h2>
              </div>
            </Reveal>
            <div className="chk">
              {(c.scope_items as { no: string; title: string; desc: string }[]).map((item, i) => (
                <Reveal tag="div" className="chk-i" key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <span className="no">{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* METHOD */}
      {c.method_items?.length > 0 && (
        <section className="sec-lg sheet">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag">Method</span></div>
                <h2 className="d2">{c.method_heading}</h2>
                {c.method_lede && <p className="lede" style={{ marginTop: '16px', maxWidth: '56ch' }}>{c.method_lede}</p>}
              </div>
            </Reveal>
            <div className="chk">
              {(c.method_items as { no: string; title: string; desc: string }[]).map((item, i) => (
                <Reveal tag="div" className="chk-i" key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <span className="no">{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      {c.process_items?.length > 0 && (
        <section className="sec-lg sec-t sheet">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag">Sequence</span></div>
                <h2 className="d2">Four stages, one point of contact.</h2>
              </div>
            </Reveal>
            <div className="rail">
              <div className="rail-in">
                {(c.process_items as { no: string; title: string; desc: string }[]).map((stage, i) => (
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
      )}

      {/* FAQS */}
      {c.faqs?.length > 0 && (
        <section className="sec-lg sheet">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag">FAQ</span></div>
                <h2 className="d2">Common questions.</h2>
              </div>
            </Reveal>
            <div className="faq">
              {(c.faqs as { q: string; a: string }[]).map((faq, i) => (
                <Reveal tag="div" className="faq-i" key={i}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      {c.closing && (
        <section className="close img-bg">
          <div className="close-bg">
            <Image
              src={(c.closing as { bg_image: string }).bg_image || '/cta_bg.jpg'}
              alt="Wall of Gardens project"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,24,17,.92) 0%, rgba(14,24,17,.65) 55%, rgba(14,24,17,.3) 100%)' }} />
          </div>
          <div className="shell close-in">
            <Reveal tag="div">
              <div className="rule-tag"><span className="tag gold">{(c.closing as { badge: string }).badge}</span></div>
              <h2 className="d2">{(c.closing as { heading: string }).heading}</h2>
              <p className="lede light">{(c.closing as { lede: string }).lede}</p>
              <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '30px' }}>
                <a className="btn btn-g" href={(c.closing as { cta_primary_href: string }).cta_primary_href}>
                  <span>{(c.closing as { cta_primary_label: string }).cta_primary_label}</span>
                </a>
                <a className="btn btn-o" href={(c.closing as { cta_secondary_href: string }).cta_secondary_href} target="_blank" rel="noopener">
                  <span>{(c.closing as { cta_secondary_label: string }).cta_secondary_label}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
