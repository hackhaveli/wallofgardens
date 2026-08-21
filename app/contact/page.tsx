'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bnr sheet on-dark">
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / Contact</div>
          <div className="rule-tag"><span className="tag gold">Sheet 08 — Contact</span></div>
          <h1 className="d1">Tell us about the space.</h1>
          <p className="lede light">
            Site visits within Delhi NCR are free and carry no obligation. <em className="g">We would rather see it than guess at it.</em>
          </p>
        </div>
      </section>

      {/* DIRECT CHANNELS */}
      <section className="sec sec-d sheet on-dark" style={{ paddingTop: 'clamp(40px,4.5vw,64px)', paddingBottom: 'clamp(40px,4.5vw,64px)' }}>
        <div className="shell">
          <div className="chan rv">
            <a className="chan-i" href="tel:+919990960669">
              <span className="k">Phone</span>
              <div className="v">+91 99909 60669</div>
              <div className="n">Studio hours, Mon–Sat</div>
            </a>
            <a className="chan-i" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
              <span className="k">WhatsApp</span>
              <div className="v">Message the studio</div>
              <div className="n">Fastest way to send photographs</div>
            </a>
            <a className="chan-i" href="mailto:founder@wallofgardens.com">
              <span className="k">Email</span>
              <div className="v">founder@wallofgardens.com</div>
              <div className="n">For drawings and formal enquiries</div>
            </a>
            <div className="chan-i">
              <span className="k">Studio</span>
              <div className="v">MERI, Janakpuri</div>
              <div className="n">6th Floor, New Delhi – 110058</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="sec sheet">
        <div className="shell ov">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Before you write</span></div>
            <h2 className="d2">What happens after you send this.</h2>
            <p className="bd" style={{ marginTop: '18px' }}>
              Nothing automated, and nobody calling you six times. An enquiry gets read by someone who can actually answer it, and you get a reply within one working day — even if that reply is that we are not the right studio for the job.
            </p>
            <p className="bd" style={{ marginTop: '16px' }}>
              If a site visit makes sense, we book one. After the visit you get a written scope with line items, and then it is entirely your decision. Plenty of enquiries end with a client deciding to wait a season or do a smaller scope, and that is a perfectly good outcome.
            </p>
          </div>

          <div className="rv dl1">
            <div className="rule-tag"><span className="tag">Fig. 13 — Enquiry to scope</span></div>
            <svg
              className="dwg"
              viewBox="0 0 340 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Timeline showing the stages from sending an enquiry, to a reply within one working day, a site visit, a written scope, and then the client's decision with no obligation."
            >
              {/* baseline */}
              <g className="lyr" style={{ animationDelay: '.05s' }}>
                <path d="M22 96 H318" stroke="rgba(14,24,17,.28)" strokeWidth="1" />
                <path d="M22 90 V102 M96 90 V102 M170 90 V102 M244 90 V102 M318 90 V102" stroke="rgba(14,24,17,.24)" strokeWidth="1" />
              </g>

              {/* nodes */}
              <g className="lyr" style={{ animationDelay: '.2s' }}>
                <circle cx="22" cy="96" r="5.5" fill="#C8A55B" />
                <circle cx="96" cy="96" r="5.5" fill="#7FA65C" />
                <circle cx="170" cy="96" r="5.5" fill="#7FA65C" />
                <circle cx="244" cy="96" r="5.5" fill="#7FA65C" />
                <circle cx="318" cy="96" r="6" fill="none" stroke="#C8A55B" strokeWidth="1.6" />
              </g>

              {/* labels above */}
              <g className="lyr" style={{ animationDelay: '.34s' }} fontFamily="IBM Plex Mono, monospace" fontSize="8">
                <path d="M22 88 V64" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                <text x="14" y="56" fill="rgba(14,24,17,.6)" letterSpacing=".6">YOU SEND</text>
                <text x="14" y="44" fill="rgba(14,24,17,.38)" fontSize="7">DAY 0</text>

                <path d="M170 88 V64" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                <text x="146" y="56" fill="rgba(14,24,17,.6)" letterSpacing=".6">SITE VISIT</text>
                <text x="146" y="44" fill="rgba(14,24,17,.38)" fontSize="7">FREE, NCR</text>

                <path d="M318 88 V64" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                <text x="268" y="56" fill="rgba(14,24,17,.6)" letterSpacing=".6">YOU DECIDE</text>
                <text x="268" y="44" fill="rgba(14,24,17,.38)" fontSize="7">NO OBLIGATION</text>
              </g>

              {/* labels below */}
              <g className="lyr" style={{ animationDelay: '.48s' }} fontFamily="IBM Plex Mono, monospace" fontSize="8">
                <path d="M96 104 V128" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                <text x="70" y="142" fill="rgba(14,24,17,.6)" letterSpacing=".6">WE REPLY</text>
                <text x="70" y="154" fill="rgba(14,24,17,.38)" fontSize="7">1 WORKING DAY</text>

                <path d="M244 104 V128" stroke="rgba(14,24,17,.2)" strokeWidth="1" />
                <text x="214" y="142" fill="rgba(14,24,17,.6)" letterSpacing=".6">WRITTEN SCOPE</text>
                <text x="214" y="154" fill="rgba(14,24,17,.38)" fontSize="7">LINE ITEMS</text>
              </g>

              {/* span dimension */}
              <g className="lyr" style={{ animationDelay: '.62s' }}>
                <path d="M22 180 H318" stroke="#C8A55B" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M22 175 V185 M318 175 V185" stroke="#C8A55B" strokeWidth="1" />
                <path d="M28 176 l-6 4 6 4 M312 176 l6 4 -6 4" stroke="#C8A55B" strokeWidth="1" fill="none" />
                <text x="128" y="174" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="rgba(14,24,17,.45)" letterSpacing=".6">
                  TYPICALLY UNDER TWO WEEKS
                </text>
              </g>

              <text className="lyr" style={{ animationDelay: '.74s' }} x="22" y="202" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="rgba(14,24,17,.36)" letterSpacing=".8">
                LARGER CAMPUS SCOPES TAKE LONGER TO PRICE.
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="sec sec-t sheet" id="enquiry">
        <div className="shell fwrap">
          <div className="rv">
            <div className="rule-tag"><span className="tag">Enquiry</span></div>
            <h2 className="d2">Start a project.</h2>
            <p className="bd" style={{ marginTop: '16px' }}>
              Everything except your name and a number is optional — but the more you can tell us, the more useful our first reply will be.
            </p>

            <div className="send" style={{ marginTop: '32px' }}>
              <div className="send-i">
                <span className="no">01</span>
                <h3>Photographs</h3>
                <p>Taken at the brightest time of day. These tell us more than measurements do.</p>
              </div>
              <div className="send-i">
                <span className="no">02</span>
                <h3>Approximate area</h3>
                <p>Square feet, or rough dimensions. A phone measurement is completely fine.</p>
              </div>
              <div className="send-i">
                <span className="no">03</span>
                <h3>Water &amp; power</h3>
                <p>Whether there is a tap and a socket near the space. This changes what is possible.</p>
              </div>
              <div className="send-i">
                <span className="no">04</span>
                <h3>Drawings, if you have them</h3>
                <p>Architect or builder drawings, particularly for terraces and campus work.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* STUDIO / MAP */}
      <section className="sec sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Visit</span></div>
              <h2 className="d2">The studio.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '56ch' }}>
                Sixth floor at MERI, Janakpuri. Design and specification happen here; if you want to see samples of moss, panel systems or planters before deciding, come by — call first so someone is in.
              </p>
            </div>
            <span className="tag">6th Floor, MERI, Janakpuri, New Delhi</span>
          </div>
          <div
            className="plate rvp has-img"
            data-n="Studio Location — MERI, Janakpuri, New Delhi 110058"
            style={{ aspectRatio: '21/8', minHeight: '260px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2471690040683!2d77.08585407632669!3d28.62234037567088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c106518177%3A0xe54d9c4fb26fa457!2sMERI%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(0.35) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Questions</span></div>
              <h2 className="d2">Before you get in touch.</h2>
            </div>
          </div>
          <div className="faq rv">
            <details>
              <summary>Do you charge for a site visit?</summary>
              <p>Not within Delhi NCR, and there is no obligation attached to it. For locations outside NCR, travel is quoted separately depending on the scope — we will tell you the number before we travel, not after.</p>
            </details>
            <details>
              <summary>How quickly will you reply?</summary>
              <p>Within one working day. If we are not the right studio for the project, you will hear that in the same reply rather than being kept warm for a fortnight.</p>
            </details>
            <details>
              <summary>Do you have a minimum project size?</summary>
              <p>No formal minimum. We have worked on balconies under fifty square feet and on full campuses. What matters is whether the scope justifies mobilising a crew to your location, and we will be straightforward about it if it does not.</p>
            </details>
            <details>
              <summary>Can you work to a fixed budget?</summary>
              <p>Yes, and it is often the more useful way to start. Tell us the number and we will tell you honestly what it does and does not cover for your space, rather than designing something you then have to cut in half.</p>
            </details>
            <details>
              <summary>Do you take on maintenance for work you did not install?</summary>
              <p>Often, once we have seen it. We survey first — irrigation, drainage and what is actually failing versus what just needs regular attention. Sometimes the answer is a maintenance regime rather than a rebuild, and we will say so even though it is the smaller job.</p>
            </details>
            <details>
              <summary>What is the fastest way to reach you?</summary>
              <p>WhatsApp, particularly if you want to send photographs. For drawings, formal enquiries and anything a procurement team needs on record, email is better.</p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    org: '',
    service: 'Not sure yet',
    location: 'Delhi',
    area: '',
    timeline: 'As soon as possible',
    budget: 'Not sure yet',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }
      setStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please call or WhatsApp us.';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form rv dl1 in" style={{ padding: '36px 32px', textAlign: 'center' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(127,166,92,0.18)', color: '#3E6B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '24px', fontWeight: 700 }}>
          ✓
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0E1811', marginBottom: '12px' }}>
          Enquiry Received
        </h3>
        <p className="bd" style={{ maxWidth: '44ch', margin: '0 auto 24px', fontSize: '13px', lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name}</strong>. Your enquiry has been received and logged in our studio queue. We will review your space details and reply within <strong>one working day</strong>.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-g" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp Photos Now</span>
          </a>
          <button
            type="button"
            className="btn btn-o"
            onClick={() => {
              setFormData({
                name: '',
                phone: '',
                email: '',
                org: '',
                service: 'Not sure yet',
                location: 'Delhi',
                area: '',
                timeline: 'As soon as possible',
                budget: 'Not sure yet',
                message: '',
              });
              setStatus('idle');
            }}
          >
            <span>Submit Another</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form rv dl1" onSubmit={handleSubmit}>
      <div className="fbanner">
        <strong>Direct Studio Inquiry.</strong> Fill out your requirements below, or contact us directly via WhatsApp or Phone for an immediate response.
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(180,118,60,0.12)', border: '1px solid rgba(180,118,60,0.3)', color: '#B4763C', padding: '12px 16px', borderRadius: '2px', fontSize: '12px', marginBottom: '16px', fontFamily: 'IBM Plex Mono, monospace' }}>
          ⚠ {errorMsg}
        </div>
      )}

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-name">Name <i>*</i></label>
          <input id="f-name" name="name" type="text" placeholder="Your name" autoComplete="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-phone">Mobile <i>*</i></label>
          <input id="f-phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" required value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-org">Company</label>
          <input id="f-org" name="org" type="text" placeholder="If this is a corporate project" autoComplete="organization" value={formData.org} onChange={handleChange} />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-type">Project type</label>
          <select id="f-type" name="service" value={formData.service} onChange={handleChange}>
            <option>Not sure yet</option>
            <option>Corporate landscaping</option>
            <option>Vertical garden / living wall</option>
            <option>Terrace garden</option>
            <option>Balcony garden</option>
            <option>Moss wall / green feature</option>
            <option>Corporate plantscaping</option>
            <option>Maintenance only</option>
          </select>
        </div>
        <div className="fld">
          <label htmlFor="f-loc">Location</label>
          <select id="f-loc" name="location" value={formData.location} onChange={handleChange}>
            <option>Delhi</option>
            <option>Gurugram</option>
            <option>Noida</option>
            <option>Ghaziabad</option>
            <option>Faridabad</option>
            <option>Elsewhere in India</option>
          </select>
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-area">Approximate area</label>
          <input id="f-area" name="area" type="text" placeholder="e.g. 400 sq ft, or 12 ft wall" value={formData.area} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-when">Timeline</label>
          <select id="f-when" name="timeline" value={formData.timeline} onChange={handleChange}>
            <option>As soon as possible</option>
            <option>Within 1–3 months</option>
            <option>3–6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="fld">
        <label htmlFor="f-budget">Indicative budget</label>
        <select id="f-budget" name="budget" value={formData.budget} onChange={handleChange}>
          <option>Not sure yet</option>
          <option>Under ₹1 lakh</option>
          <option>₹1–3 lakh</option>
          <option>₹3–5 lakh</option>
          <option>₹5–10 lakh</option>
          <option>₹10 lakh+</option>
        </select>
      </div>

      <div className="fld">
        <label htmlFor="f-msg">About the space</label>
        <textarea id="f-msg" name="message" placeholder="Indoor or outdoor, which way it faces, how much light it gets, anything else useful" value={formData.message} onChange={handleChange}></textarea>
      </div>

      <button className="btn btn-g" style={{ width: '100%', cursor: status === 'submitting' ? 'wait' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }} type="submit" disabled={status === 'submitting'}>
        <span>{status === 'submitting' ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
      </button>

      <p className="fnote">
        We reply within one working day.<br />
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}

