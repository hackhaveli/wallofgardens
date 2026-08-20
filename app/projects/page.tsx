import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { createServerClient } from '../../lib/supabase';
import { DEFAULT_PROJECTS, DEFAULT_TESTIMONIALS, DEFAULT_SITE_SETTINGS } from '../../lib/content-defaults';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Projects — Selected Work | Wall of Gardens',
  description: 'Selected landscape and living wall projects from the Wall of Gardens studio, across corporate, hospitality and residential clients in Delhi NCR.',
};

async function getProjectsData() {
  try {
    const supabase = createServerClient();
    const [projectsRes, testimonialsRes, settingsRes] = await Promise.all([
      supabase.from('projects').select('*').order('order_index', { ascending: true }),
      supabase.from('testimonials').select('*').eq('active', true).order('order_index', { ascending: true }).limit(3),
      supabase.from('site_settings').select('data').eq('id', 'global').single(),
    ]);

    return {
      projects: projectsRes.data?.length ? projectsRes.data : DEFAULT_PROJECTS,
      testimonials: testimonialsRes.data?.length ? testimonialsRes.data : DEFAULT_TESTIMONIALS,
      settings: settingsRes.data?.data ? { ...DEFAULT_SITE_SETTINGS, ...settingsRes.data.data } : DEFAULT_SITE_SETTINGS,
    };
  } catch {
    return {
      projects: DEFAULT_PROJECTS,
      testimonials: DEFAULT_TESTIMONIALS,
      settings: DEFAULT_SITE_SETTINGS,
    };
  }
}

export default async function ProjectsPage() {
  const { projects, testimonials, settings } = await getProjectsData();

  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Projects</div>
          <div className="rule-tag"><span className="tag gold">Sheet 03 — Project index</span></div>
          <h1 className="d1">Selected Work</h1>
          <p className="lede light">An indexed record of completed and ongoing projects — corporate, hospitality and residential, across Delhi NCR. <em className="g">Project photographs are published with client permission.</em></p>
        </div>
      </section>

      <section className="sec sheet">
        <div className="shell">
          {projects.map((p: { id: string; name: string; location: string; type: string; area: string; status: string; img: string; alt: string; description?: string }) => (
            <Reveal key={p.id} tag="div" className="prj">
              <div className="prj-f">
                <div className="plate has-img" style={{ aspectRatio: '16/7' }}>
                  {p.img && (
                    <Image
                      src={p.img}
                      alt={p.alt || p.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width:900px) 100vw, 1340px"
                    />
                  )}
                </div>
              </div>
              <div className="tblock">
                <div className="tb">
                  <span className="k">No.</span>
                  <span className="v big">{p.id}</span>
                </div>
                <div className="tb">
                  <span className="k">Project</span>
                  <span className="v name">{p.name}</span>
                </div>
                <div className="tb">
                  <span className="k">Location</span>
                  <span className="v">{p.location}</span>
                </div>
                <div className="tb">
                  <span className="k">Type</span>
                  <span className="v">{p.type}</span>
                </div>
                <div className="tb">
                  <span className="k">Scale</span>
                  <span className="v">{p.area}</span>
                </div>
                <div className="tb">
                  <span className="k">Status</span>
                  <span className="v">{p.status}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUOTES */}
      {testimonials.length > 0 && (
        <section className="sec sec-t sheet">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag">References</span></div>
                <h2 className="d2">What clients say.</h2>
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
      )}

      {/* CLOSING */}
      <section className="close img-bg" id="contact">
        <div className="close-bg">
          <Image src="/cta_bg.jpg" alt="Lush rooftop garden at dusk" fill style={{ objectFit: 'cover' }} sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,24,17,.92) 0%, rgba(14,24,17,.65) 55%, rgba(14,24,17,.3) 100%)' }} />
        </div>
        <div className="shell close-in">
          <Reveal tag="div">
            <div className="rule-tag"><span className="tag gold">Contact</span></div>
            <h2 className="d2">Have a space in mind?</h2>
            <p className="lede light">Site visits within Delhi NCR are free and carry no obligation.</p>
            <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a className="btn btn-g" href={`mailto:${settings.email}`}><span>Start a Project</span></a>
              <Link className="btn btn-o" href="/services"><span>View Services</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
