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
            <a className="chan-i" href="https://www.instagram.com/wallofgarden" target="_blank" rel="noopener noreferrer">
              <span className="k">Instagram</span>
              <div className="v">@wallofgarden</div>
              <div className="n">180+ project reels &amp; live installs</div>
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
      <section className="sec sheet studio-loc-sec" id="studio-location">
        <div className="shell">
          <div className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Studio &amp; Workshop</span></div>
              <h2 className="d2">Visit the Janakpuri studio.</h2>
              <p className="lede" style={{ marginTop: '16px', maxWidth: '62ch' }}>
                Design specification, material mockups, and client walkthroughs happen on the 6th floor at MERI, Janakpuri. Touch living wall modules, preserved moss textures, and irrigation hardware in person before your project begins.
              </p>
            </div>
            <span className="tag">6th Floor, MERI, Janakpuri, New Delhi</span>
          </div>

          <div className="studio-showcase rv">
            {/* LEFT: STUDIO ACCESS CARD */}
            <div className="studio-card">
              <div className="studio-card-head">
                <span className="studio-pin-dot" aria-hidden="true"></span>
                <span className="studio-card-tag">Physical Headquarters &amp; Sample Library</span>
              </div>

              <h3 className="studio-title">Wall of Gardens Studio</h3>
              <p className="studio-addr">
                6th Floor, MERI College Campus,<br />
                Institutional Area, Janakpuri,<br />
                New Delhi – 110058
              </p>

              <div className="studio-meta-grid">
                <div className="studio-meta-item">
                  <span className="meta-k">Nearest Metro</span>
                  <strong className="meta-v">Janakpuri West Interchange</strong>
                  <span className="meta-sub">Blue &amp; Magenta Lines · 5 mins away</span>
                </div>
                <div className="studio-meta-item">
                  <span className="meta-k">Studio Hours</span>
                  <strong className="meta-v">Mon – Sat · 10:00 AM – 6:30 PM</strong>
                  <span className="meta-sub">Please call before visiting for gate entry</span>
                </div>
                <div className="studio-meta-item">
                  <span className="meta-k">Material Samples On Site</span>
                  <strong className="meta-v">Live modules, moss, planters &amp; drip systems</strong>
                  <span className="meta-sub">Review physical specimens with lead designers</span>
                </div>
                <div className="studio-meta-item">
                  <span className="meta-k">Direct Telephone</span>
                  <strong className="meta-v">
                    <a href="tel:+919990960669" className="studio-phone-link">+91 99909 60669</a>
                  </strong>
                  <span className="meta-sub">Immediate response during studio hours</span>
                </div>
              </div>

              <div className="studio-actions">
                <a
                  className="btn btn-g"
                  href="https://maps.google.com/?q=MERI+College+Janakpuri+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Open in Google Maps &rarr;</span>
                </a>
                <a
                  className="btn btn-o"
                  href="tel:+919990960669"
                >
                  <span>Call Studio</span>
                </a>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE CRISP GOOGLE MAP */}
            <div className="studio-map-frame">
              <div className="studio-map-topbar">
                <div className="map-topbar-left">
                  <span className="map-live-dot" aria-hidden="true"></span>
                  <span>MERI Campus, Janakpuri · West Delhi</span>
                </div>
                <a
                  href="https://maps.google.com/?q=MERI+College+Janakpuri+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-topbar-link"
                >
                  <span>Get Directions ↗</span>
                </a>
              </div>
              <div className="studio-map-wrap">
                <iframe
                  title="Wall of Gardens Studio Location - MERI College, Janakpuri, New Delhi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2471690040683!2d77.08585407632669!3d28.62234037567088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c106518177%3A0xe54d9c4fb26fa457!2sMERI%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
  const [clientType, setClientType] = useState<'corporate' | 'residential'>('corporate');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    org: '',
    service: 'Plant Maintenance Service (AMC)',
    location: 'Gurugram',
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

  const handleSegmentChange = (type: 'corporate' | 'residential') => {
    setClientType(type);
    setFormData(prev => ({
      ...prev,
      service: type === 'corporate' ? 'Plant Maintenance Service (AMC)' : 'Terrace Garden & Rooftop Lounge',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const payload = {
        ...formData,
        message: `[Client Type: ${clientType === 'corporate' ? 'Corporate / B2B' : 'Luxury Residential'}]\n${formData.message}`,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
                service: 'Plant Maintenance Service (AMC)',
                location: 'Gurugram',
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
      {/* 2-WAY SEGMENT SWITCHER */}
      <div className="form-segment" role="group" aria-label="Client Type">
        <button
          type="button"
          className={`form-seg-btn ${clientType === 'corporate' ? 'active' : ''}`}
          onClick={() => handleSegmentChange('corporate')}
        >
          🏢 Corporate &amp; Commercial
        </button>
        <button
          type="button"
          className={`form-seg-btn ${clientType === 'residential' ? 'active' : ''}`}
          onClick={() => handleSegmentChange('residential')}
        >
          🏡 Luxury Residence &amp; Villa
        </button>
      </div>

      <div className="fbanner">
        <strong>{clientType === 'corporate' ? 'Corporate Facility Inquiry.' : 'Private Residence Inquiry.'}</strong> Site visits across Delhi NCR are free and carry no obligation.
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(180,118,60,0.12)', border: '1px solid rgba(180,118,60,0.3)', color: '#B4763C', padding: '12px 16px', borderRadius: '2px', fontSize: '12px', marginBottom: '16px', fontFamily: 'IBM Plex Mono, monospace' }}>
          ⚠ {errorMsg}
        </div>
      )}

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-name">Your Name <i>*</i></label>
          <input id="f-name" name="name" type="text" placeholder="Full name" autoComplete="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-phone">Mobile / Phone <i>*</i></label>
          <input id="f-phone" name="phone" type="tel" placeholder="+91 99999 99999" autoComplete="tel" required value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-email">Email Address</label>
          <input id="f-email" name="email" type="email" placeholder={clientType === 'corporate' ? 'you@company.com' : 'you@email.com'} autoComplete="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-org">{clientType === 'corporate' ? 'Company / Organization' : 'Property Type'}</label>
          <input
            id="f-org"
            name="org"
            type="text"
            placeholder={clientType === 'corporate' ? 'e.g. DLF / S&P / Firm Name' : 'e.g. Villa / Penthouse / Farmhouse'}
            autoComplete="organization"
            value={formData.org}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-type">Scope of Work</label>
          <select id="f-type" name="service" value={formData.service} onChange={handleChange}>
            {clientType === 'corporate' ? (
              <>
                <option>Plant Maintenance Service (AMC)</option>
                <option>Corporate Plantscaping (Indoor Workspaces)</option>
                <option>Commercial Living Wall / Green Facade</option>
                <option>Terrace Garden / Cafeteria Deck</option>
                <option>Complete Office Green Fit-Out</option>
                <option>Not sure yet / General inquiry</option>
              </>
            ) : (
              <>
                <option>Terrace Garden &amp; Rooftop Lounge</option>
                <option>Living Wall / Vertical Garden</option>
                <option>Bespoke Balcony Garden Sanctuary</option>
                <option>Plant Maintenance Service (Home AMC)</option>
                <option>Preserved Moss Wall Feature</option>
                <option>Not sure yet / General inquiry</option>
              </>
            )}
          </select>
        </div>
        <div className="fld">
          <label htmlFor="f-loc">Location in NCR</label>
          <select id="f-loc" name="location" value={formData.location} onChange={handleChange}>
            <option>Gurugram (Cyber City, Golf Course, etc.)</option>
            <option>New Delhi (Central / South / West)</option>
            <option>Noida / Greater Noida</option>
            <option>Faridabad / Ghaziabad</option>
            <option>Elsewhere in India (Pan-India project)</option>
          </select>
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f-area">{clientType === 'corporate' ? 'Plant Count or Area' : 'Approximate Area'}</label>
          <input id="f-area" name="area" type="text" placeholder={clientType === 'corporate' ? 'e.g. 200 pots, or 500 sq.ft living wall' : 'e.g. 600 sq.ft terrace or 15 ft wall'} value={formData.area} onChange={handleChange} />
        </div>
        <div className="fld">
          <label htmlFor="f-when">Required Timeline</label>
          <select id="f-when" name="timeline" value={formData.timeline} onChange={handleChange}>
            <option>As soon as possible</option>
            <option>Within 1–2 weeks</option>
            <option>Within 1–3 months</option>
            <option>Upcoming fiscal / Just exploring</option>
          </select>
        </div>
      </div>

      <div className="fld">
        <label htmlFor="f-msg">Tell us about the space</label>
        <textarea id="f-msg" name="message" placeholder={clientType === 'corporate' ? 'Current plants on site, indoor light condition, required visit frequency, or specific facility requirements' : 'Facing direction, sunlight exposure, terrace access, water supply, or your design aesthetic'} value={formData.message} onChange={handleChange}></textarea>
      </div>

      <div style={{ marginTop: '14px', marginBottom: '18px', fontSize: '12px', color: 'rgba(14,24,17,0.7)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#56823c', fontSize: '14px' }}>🛡️</span>
        <span>Free on-site inspection across Delhi NCR with zero obligation.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }}>
        <button className="btn btn-g" style={{ width: '100%', cursor: status === 'submitting' ? 'wait' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }} type="submit" disabled={status === 'submitting'}>
          <span>{status === 'submitting' ? 'Submitting...' : 'Request Free Site Visit'}</span>
        </button>
        <a className="btn btn-o" href="https://wa.me/919990960669?text=Hi%20Wall%20of%20Gardens,%20I%20am%20inquiring%20about%20a%20project%20and%20would%20like%20to%20send%20photos." target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
          <span>WhatsApp Us &rarr;</span>
        </a>
      </div>

      <p className="fnote">
        We reply within one working day.<br />
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}

