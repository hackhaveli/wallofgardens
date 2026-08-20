import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import HeroArt from './components/HeroArt';
import { createServerClient } from '../lib/supabase';
import { DEFAULT_HOME_CONTENT, DEFAULT_PROJECTS, DEFAULT_TESTIMONIALS, DEFAULT_SITE_SETTINGS } from '../lib/content-defaults';

export const revalidate = 60; // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Wall of Gardens — Living Architecture, Engineered | Delhi NCR',
  description: 'Vertical gardens, terraces and living walls engineered for corporate and premium residential spaces across Delhi NCR. Design, installation and maintenance under one team.',
};

async function getHomeContent() {
  try {
    const supabase = createServerClient();
    const [pageRes, projectsRes, testimonialsRes, settingsRes] = await Promise.all([
      supabase.from('pages_content').select('sections').eq('slug', 'home').single(),
      supabase.from('projects').select('*').eq('featured', true).order('order_index', { ascending: true }).limit(3),
      supabase.from('testimonials').select('*').eq('active', true).order('order_index', { ascending: true }).limit(3),
      supabase.from('site_settings').select('data').eq('id', 'global').single(),
    ]);

    const home = pageRes.data?.sections ? { ...DEFAULT_HOME_CONTENT, ...(pageRes.data.sections as typeof DEFAULT_HOME_CONTENT) } : DEFAULT_HOME_CONTENT;
    const featuredProjects = projectsRes.data?.length ? projectsRes.data : DEFAULT_PROJECTS.filter(p => p.featured).slice(0, 3);
    const testimonials = testimonialsRes.data?.length ? testimonialsRes.data : DEFAULT_TESTIMONIALS;
    const settings = settingsRes.data?.data ? { ...DEFAULT_SITE_SETTINGS, ...(settingsRes.data.data as typeof DEFAULT_SITE_SETTINGS) } : DEFAULT_SITE_SETTINGS;

    return { home, featuredProjects, testimonials, settings };
  } catch {
    return {
      home: DEFAULT_HOME_CONTENT,
      featuredProjects: DEFAULT_PROJECTS.filter(p => p.featured).slice(0, 3),
      testimonials: DEFAULT_TESTIMONIALS,
      settings: DEFAULT_SITE_SETTINGS,
    };
  }
}

export default async function Home() {
  const { home, featuredProjects, testimonials } = await getHomeContent();
  const h = home;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero sheet on-dark" id="top">
        <div className="shell hero-in">
          <div className="hero-copy">
            <div className="rule-tag"><span className="tag gold">{h.hero.badge}</span></div>
            <h1 className="d1-lg" dangerouslySetInnerHTML={{ __html: h.hero.heading }} />
            <p className="lede light">{h.hero.lede}</p>
            <div className="hero-cta">
              <a className="btn btn-g" href={h.hero.cta_primary_href}><span>{h.hero.cta_primary_label}</span></a>
              <a className="btn btn-o" href={h.hero.cta_secondary_href}><span>{h.hero.cta_secondary_label}</span></a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* SPEC STRIP */}
      <div className="strip">
        <div className="shell strip-in">
          {h.spec_strip.map((item: { label: string; value: string }, i: number) => (
            <div className="strip-i" key={i}><b>{item.label}</b><span>{item.value}</span></div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <section className="cl">
        <div className="shell" style={{ marginBottom: '24px' }}><span className="tag">{h.clients.badge}</span></div>
        <div className="mq">
          <div className="mq-t">
            {(h.clients.items as string[]).map((name: string, i: number) => <span key={i}>{name}</span>)}
          </div>
          <div className="mq-t" aria-hidden="true">
            {(h.clients.items as string[]).map((name: string, i: number) => <span key={i}>{name}</span>)}
          </div>
        </div>
      </section>

      {/* SERVICES INDEX */}
      <section className="sec-lg sheet" id="services">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{h.services_section.badge}</span></div>
              <h2 className="d2-lg">{h.services_section.heading}</h2>
            </div>
            <Link className="tag gold" href="/services">{h.services_section.view_all_label}</Link>
          </Reveal>
          <div className="idx">
            {h.services_section.items.map((svc: { no: string; title: string; desc: string; href: string }, i: number) => (
              <Reveal tag="a" className="ir-svc" href={svc.href} key={i}>
                <span className="no">{svc.no}</span>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="go">View &#8594;</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec-lg sec-t sheet" id="work">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{h.work_section.badge}</span></div>
              <h2 className="d2-lg">{h.work_section.heading}</h2>
            </div>
            <Link className="tag gold" href="/projects">{h.work_section.view_all_label}</Link>
          </Reveal>

          {featuredProjects.map((project: { id: string; name: string; description?: string; location: string; type: string; img: string; alt: string }, i: number) => (
            <Reveal tag="a" className="wk" href="/projects" key={project.id}>
              <div className="wk-m">
                <span className="no">{project.id.replace('-', '—')}</span>
                <h3>{project.name}</h3>
                <p>{project.description || ''}</p>
                <div className="meta">{project.location}<br />{project.type}</div>
              </div>
              <div className="wk-f">
                <div className="plate has-img" style={{ aspectRatio: '16/6.5' }}>
                  {project.img && (
                    <Image
                      src={project.img}
                      alt={project.alt || project.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width:900px) 100vw, 1340px"
                      priority={i === 0}
                    />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="sec-lg sec-d sheet on-dark" id="method">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag gold">{h.method_section.badge}</span></div>
              <h2 className="d2-lg">{h.method_section.heading}</h2>
              <p className="lede light" style={{ marginTop: '16px', maxWidth: '56ch' }}>{h.method_section.lede}</p>
            </div>
          </Reveal>
          <div className="chk">
            {h.method_section.items.map((item: { no: string; title: string; desc: string }, i: number) => (
              <Reveal tag="div" className="chk-i" key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec-lg sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{h.process_section.badge}</span></div>
              <h2 className="d2-lg">{h.process_section.heading}</h2>
            </div>
          </Reveal>
          <div className="rail">
            <div className="rail-in">
              {h.process_section.items.map((stage: { no: string; title: string; desc: string }, i: number) => (
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

      {/* QUOTES / TESTIMONIALS */}
      <section className="sec-lg sec-t sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">{h.quotes_section.badge}</span></div>
              <h2 className="d2-lg">{h.quotes_section.heading}</h2>
            </div>
          </Reveal>
          <div className="qs">
            {testimonials.map((t: { id: string; quote: string; author: string; service?: string }, i: number) => (
              <Reveal tag="div" className="q" key={t.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <p>{t.quote}</p>
                <div className="w">{t.author} {t.service && <em>{t.service}</em>}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="close img-bg" id="contact">
        <div className="close-bg">
          <Image src={h.closing.bg_image} alt="Lush rooftop garden at dusk" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,24,17,.92) 0%, rgba(14,24,17,.65) 55%, rgba(14,24,17,.3) 100%)' }} />
        </div>
        <div className="shell close-in">
          <Reveal tag="div">
            <div className="rule-tag"><span className="tag gold">{h.closing.badge}</span></div>
            <h2 className="d2">{h.closing.heading}</h2>
            <p className="lede light">{h.closing.lede}</p>
            <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '30px' }}>
              <a className="btn btn-g" href={h.closing.cta_primary_href}><span>{h.closing.cta_primary_label}</span></a>
              <a className="btn btn-o" href={h.closing.cta_secondary_href} target="_blank" rel="noopener"><span>{h.closing.cta_secondary_label}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
