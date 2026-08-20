'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { DEFAULT_CONTACT_CONTENT } from '../../lib/content-defaults';
import { getSupabaseClient } from '../../lib/supabase';

type ContactContent = typeof DEFAULT_CONTACT_CONTENT;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [content, setContent] = useState<ContactContent>(DEFAULT_CONTACT_CONTENT);
  const [form, setForm] = useState({ name: '', org: '', phone: '', email: '', service: '', location: '', message: '' });

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('pages_content').select('sections').eq('slug', 'contact').single().then((res: { data: any }) => {
      if (res.data?.sections) setContent({ ...DEFAULT_CONTACT_CONTENT, ...(res.data.sections as ContactContent) });
    });
  }, []);

  const updateForm = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Network error. Please call or WhatsApp us directly at +91 99909 60669.');
    } finally {
      setSubmitting(false);
    }
  };

  const c = content;

  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Contact</div>
          <div className="rule-tag"><span className="tag gold">{c.banner.badge}</span></div>
          <h1 className="d1">{c.banner.heading}</h1>
          <p className="lede light">{c.banner.lede}</p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="sec sheet">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">Channels</span></div>
              <h2 className="d2">Reach us directly.</h2>
            </div>
          </Reveal>
          <Reveal tag="div" className="chan">
            {c.channels.map((ch: { key: string; value: string; note: string; href: string }, i: number) => (
              ch.href ? (
                <a
                  className="chan-i"
                  key={i}
                  href={ch.href}
                  {...(ch.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                >
                  <span className="k">{ch.key}</span>
                  <div className="v">{ch.value}</div>
                  <div className="n">{ch.note}</div>
                </a>
              ) : (
                <div className="chan-i" key={i}>
                  <span className="k">{ch.key}</span>
                  <div className="v">{ch.value}</div>
                  <div className="n">{ch.note}</div>
                </div>
              )
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHAT TO SEND */}
      <section className="sec-lg sec-d sheet on-dark">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag gold">What to include</span></div>
              <h2 className="d2">We will need four things to give you a useful answer.</h2>
            </div>
          </Reveal>
          <div className="chk">
            {c.brief_items.map((item: { no: string; title: string; desc: string }, i: number) => (
              <Reveal tag="div" className="chk-i" key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="sec-lg sheet" id="form">
        <div className="shell">
          <Reveal tag="div" className="hd">
            <div>
              <div className="rule-tag"><span className="tag">Enquiry form</span></div>
              <h2 className="d2">Tell us about the project.</h2>
            </div>
          </Reveal>
          <Reveal tag="div" className="frm-w">
            <div className="frm-note">{c.form.banner_text}</div>
            {submitted ? (
              <div className="frm-ok">
                <h3>{c.form.success_heading}</h3>
                <p>{c.form.success_body}</p>
              </div>
            ) : (
              <form className="frm" onSubmit={handleSubmit}>
                <div className="frm-row">
                  <div className="frm-f">
                    <label>Name *</label>
                    <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={e => updateForm('name', e.target.value)} />
                  </div>
                  <div className="frm-f">
                    <label>Organisation</label>
                    <input type="text" name="org" placeholder="Company or building" value={form.org} onChange={e => updateForm('org', e.target.value)} />
                  </div>
                </div>
                <div className="frm-row">
                  <div className="frm-f">
                    <label>Phone *</label>
                    <input type="tel" name="phone" required placeholder="+91 _____ _____" value={form.phone} onChange={e => updateForm('phone', e.target.value)} />
                  </div>
                  <div className="frm-f">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={e => updateForm('email', e.target.value)} />
                  </div>
                </div>
                <div className="frm-row">
                  <div className="frm-f">
                    <label>Service</label>
                    <select name="service" value={form.service} onChange={e => updateForm('service', e.target.value)}>
                      <option value="">— Select a service</option>
                      <option>Corporate Landscaping</option>
                      <option>Vertical Gardens</option>
                      <option>Terrace Gardens</option>
                      <option>Balcony Gardens</option>
                      <option>Moss Walls</option>
                      <option>Corporate Plantscaping</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="frm-f">
                    <label>Location</label>
                    <input type="text" name="location" placeholder="Delhi, Gurugram, Noida…" value={form.location} onChange={e => updateForm('location', e.target.value)} />
                  </div>
                </div>
                <div className="frm-f">
                  <label>Tell us about the space *</label>
                  <textarea name="message" required rows={5} placeholder="Space type, dimensions, current status, what you are trying to achieve, timeline if you have one." value={form.message} onChange={e => updateForm('message', e.target.value)} />
                </div>
                {error && (
                  <div style={{ color: '#B4763C', fontSize: '13px', fontFamily: 'inherit', marginBottom: '12px' }}>{error}</div>
                )}
                <div className="frm-foot">
                  <button type="submit" className="btn btn-g" disabled={submitting}>
                    <span>{submitting ? 'Sending...' : c.form.submit_label}</span>
                  </button>
                  <p className="frm-dis">{c.form.disclaimer}</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      {c.faqs.length > 0 && (
        <section className="sec-lg sec-t sheet">
          <div className="shell">
            <Reveal tag="div" className="hd">
              <div>
                <div className="rule-tag"><span className="tag">FAQ</span></div>
                <h2 className="d2">Common questions.</h2>
              </div>
            </Reveal>
            <div className="faq">
              {c.faqs.map((faq: { q: string; a: string }, i: number) => (
                <Reveal tag="div" className="faq-i" key={i}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
