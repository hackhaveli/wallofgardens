import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Corporate Plant Maintenance AMC — Delhi NCR, Bangalore, Mumbai | Wall of Gardens',
  description: 'India’s leading Annual Maintenance Contracts (AMC) for corporate office plants, living walls, and commercial campuses. Scheduled visits, organic nutrition, and 100% free plant replacement SLA guarantee.',
  alternates: { canonical: '/services/plant-maintenance-amc' },
  openGraph: {
    title: 'Corporate Plant Maintenance AMC — Zero Mortality SLA | Wall of Gardens',
    description: 'Scheduled horticultural care, non-toxic bio pest control, and guaranteed plant replacements across Delhi NCR, Bengaluru, Mumbai, and Pune.',
    url: 'https://wallofgardens.com/services/plant-maintenance-amc',
    images: [{ url: '/project_01.jpg', width: 1200, height: 630, alt: 'Plant Maintenance AMC by Wall of Gardens' }],
  },
};

const AMC_BENEFITS = [
  { no: '01', title: 'Dedicated Scheduled Visits', desc: 'Weekly or bi-weekly visits by trained horticultural staff and supervisors to inspect, groom, and maintain every plant on site.' },
  { no: '02', title: 'Plant Replacement Guarantee', desc: 'Any plant that shows decline or dies under our care is replaced promptly with a fresh, acclimatized specimen at zero extra cost.' },
  { no: '03', title: 'Soil Nutrition & Aeration', desc: 'Regular organic vermicompost, slow-release bio-nutrients, micronutrients, and routine soil loosening to stimulate root vitality.' },
  { no: '04', title: 'Eco-Friendly Pest & Fungus Control', desc: 'Proactive inspection and treatments using organic, non-toxic neem formulations and bio-fungicides safe for occupied indoor workspaces.' },
  { no: '05', title: 'Pruning & Foliage Grooming', desc: 'Removal of dry foliage, aesthetic hedging, leaf-shining, dust removal, and architectural shaping of living walls and plants.' },
  { no: '06', title: 'Automated Irrigation Audits', desc: 'Comprehensive checks of drip lines, pressure drippers, timers, and filters to eliminate dry zones, overflows, and water damage.' },
  { no: '07', title: 'Digital Health & Service Logs', desc: 'Transparent visit reports and health scores sent to facility teams and property managers after every service cycle.' },
];

const AMC_TIERS = [
  {
    type: 'Corporate Offices & IT Parks',
    coverage: 'Indoor plantscapes, executive desks, lobbies & cafeteria greens',
    points: ['Trained, background-verified crew', 'Strict adherence to office quiet hours', 'Zero mess or water spillage on carpets', 'Monthly audit reports for admin teams'],
  },
  {
    type: 'Living Walls & Vertical Gardens',
    coverage: 'Exterior and interior vertical installations of all heights',
    points: ['Specialized high-access pruning', 'Drip dripper descaling & fertigation refill', 'Seasonal plant balancing against sun exposure', 'Immediate replacement of distressed modules'],
  },
  {
    type: 'Terraces, Balconies & Villas',
    coverage: 'Rooftop gardens, residential balconies, and estate landscapes',
    points: ['Drain cell & waterproofing monitoring', 'Pre-monsoon and summer storm preparation', 'Lawn mowing, edging & seasonal flowering care', 'Hassle-free alternative to unreliable local malis'],
  },
];

const FAQS = [
  {
    q: 'Can you take over maintenance of plants installed by another vendor?',
    a: 'Yes, this is very common. We begin with a comprehensive site health audit to assess soil condition, light levels, irrigation functionality, and current plant health. We will nurse existing plants back to health and replace expired ones as part of your AMC onboarding.',
  },
  {
    q: 'How does the Plant Replacement Guarantee work?',
    a: 'Under our comprehensive AMC, if any plant deteriorates or dies due to pest attacks, natural senescence, or routine indoor stress, our team replaces it with a healthy, nursery-grade plant at no additional charge to ensure your space stays perpetually lush.',
  },
  {
    q: 'How often will your maintenance crew visit our premises?',
    a: 'Depending on the scale of your greenery, space type, and seasonal demands, visits are scheduled weekly (4 times a month) or bi-weekly (2 to 3 times a month). Emergency response is provided within 24–48 hours for any sudden issues.',
  },
  {
    q: 'Are your pest and fertilizing treatments safe for air-conditioned offices?',
    a: 'Absolutely. We use 100% odorless, eco-friendly, organic bio-fertilizers and botanical pest control sprays (such as cold-pressed neem formulations). They are completely safe for indoor environments, pets, and workplace personnel.',
  },
  {
    q: 'How is the Plant Maintenance AMC priced?',
    a: 'Pricing is based transparently on the total plant count, vertical wall area (sq. ft), and required visit frequency. We provide an itemized quote with no hidden overheads following our free site inspection.',
  },
];

export default function PlantMaintenanceAMCPage() {
  return (
    <>
      <Navbar />

      {/* LUXURY BANNER */}
      <section className="sv-hero on-dark">
        <div className="sv-hero-bg" aria-hidden="true">
          <Image
            src="/project_01.jpg"
            alt="Wall of Gardens Plant Maintenance AMC"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="shell">
          <div className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / Plant Maintenance (AMC)</div>
          <div className="sv-trust">
            <span>Delhi NCR</span><i aria-hidden="true" />
            <span>Sheet 01 — AMC</span><i aria-hidden="true" />
            <span>Horticultural SLA</span>
          </div>
          <h1 className="sv-hero-title">
            Plant Maintenance Service &amp; <em className="g">AMC</em>.
          </h1>
          <p className="sv-hero-lede">
            Professional horticultural care for corporate offices, living walls, terrace gardens, and premium residences across Delhi NCR. Scheduled expert visits, organic nutrition, pest management, and guaranteed plant replacements under contract.
          </p>
          <div className="sv-hero-actions">
            <Link className="hx-cta" href="/contact">
              Get an AMC Quote <span aria-hidden="true">&rarr;</span>
            </Link>
            <a className="hx-link" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
              WhatsApp for AMC details <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM & THE SOLUTION */}
      <section className="sec sheet">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">The AMC Model</span></div>
              <h2 className="d2">Why greenery declines without a scientific AMC.</h2>
            </div>
          </header>
          <div className="two-col prose rv">
            <p>
              Most plants in corporate offices and private terraces do not die from lack of water — they die from overwatering, poor drainage, root suffocation, or pests that go unnoticed until the foliage drops. Relying on casual local gardeners without horticultural supervision almost always leads to periodic, expensive replanting cycles every six months.
            </p>
            <p>
              Wall of Gardens changes this with an <strong>Annual Maintenance Contract (AMC)</strong>. Our trained horticulturists treat greenery like living architecture: measuring soil moisture, feeding balanced organic nutrients, auditing automated irrigation timers, and preemptively eradicating pests. Best of all, our AMC includes a <strong>Free Plant Replacement Guarantee</strong> so your premises always look pristine.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPE OF AMC */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">What Is Included</span></div>
              <h2 className="d2">Everything covered under your Plant AMC.</h2>
              <p className="lede" style={{ marginTop: '14px', maxWidth: '58ch' }}>
                Complete horticultural accountability under a single service contract.
              </p>
            </div>
          </header>

          <div className="idx">
            {AMC_BENEFITS.map((b) => (
              <div key={b.no} className="ir rv">
                <span className="no">{b.no}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE CATER TO */}
      <section className="sec sec-d sheet on-dark">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag gold">Contract Types</span></div>
              <h2 className="d2">Customized AMC plans for every environment.</h2>
            </div>
          </header>

          <div className="sv-cards-grid" style={{ marginTop: '30px' }}>
            {AMC_TIERS.map((tier, idx) => (
              <div key={idx} className="sv-card" style={{ background: '#131e16', borderColor: 'rgba(200,165,91,0.25)', color: '#fff' }}>
                <div className="sv-card-body">
                  <span className="sv-card-subtitle" style={{ color: 'var(--gold)' }}>Tier 0{idx + 1}</span>
                  <h3 className="sv-card-title" style={{ color: '#fff', fontSize: '20px' }}>{tier.type}</h3>
                  <p className="sv-card-desc" style={{ color: 'rgba(244,243,236,0.75)', fontSize: '13.5px' }}>{tier.coverage}</p>
                  <ul className="sv-card-bullets" style={{ borderColor: 'rgba(244,243,236,0.1)' }}>
                    {tier.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ color: 'rgba(244,243,236,0.85)' }}>{pt}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="sv-card-link" style={{ borderColor: 'rgba(244,243,236,0.12)', color: 'var(--gold)' }}>
                    <span>Request Custom Proposal</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEQUENCE */}
      <section className="sec sheet">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Onboarding Process</span></div>
              <h2 className="d2">How our AMC works in 4 simple steps.</h2>
            </div>
          </header>
          <div className="rail">
            <div className="rail-in">
              <div className="st rv"><span className="no">01 / Audit</span><h3>Site Health Check</h3><p>We inspect all existing plants, light levels, pots, and irrigation lines free of cost.</p></div>
              <div className="st rv dl1"><span className="no">02 / Plan</span><h3>Custom AMC Proposal</h3><p>Transparent schedule and visit frequency based on your exact plant count and requirements.</p></div>
              <div className="st rv dl2"><span className="no">03 / Care</span><h3>Scheduled In-House Visits</h3><p>Our background-checked horticulturalists arrive on designated days with all necessary supplies.</p></div>
              <div className="st rv dl3"><span className="no">04 / Guarantee</span><h3>Perpetual Replacements</h3><p>Any declining plant is immediately renewed so your facility never looks distressed.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-t sheet">
        <div className="shell">
          <header className="hd rv">
            <div>
              <div className="rule-tag"><span className="tag">Questions &amp; Answers</span></div>
              <h2 className="d2">Frequently asked about Plant AMC.</h2>
            </div>
          </header>
          <div className="faq rv">
            {FAQS.map((faq, i) => (
              <details key={i}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="hcta on-dark" id="contact">
        <div className="hcta-bg rv" aria-hidden="true">
          <Image src="/cta_bg.jpg" alt="Plant Maintenance AMC Wall of Gardens" fill sizes="100vw" />
        </div>
        <div className="shell hcta-in">
          <div className="hcta-copy rv">
            <div className="rule-tag"><span className="tag gold">Sheet 01 — Plant Maintenance AMC</span></div>
            <h2 className="d2">Ready to hand over your plant maintenance to experts?</h2>
            <p>
              Book a free site audit across Delhi NCR. Our horticulturists will inspect your existing setup and share a customized AMC proposal with no obligation.
            </p>
            <div className="hcta-act">
              <Link className="hx-cta" href="/contact">
                Book Free AMC Audit <span aria-hidden="true">&rarr;</span>
              </Link>
              <a className="hx-link" href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
                WhatsApp Us (+91 99909 60669) <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <ul className="hcta-card rv" style={{ '--d': 1 } as React.CSSProperties}>
            <li><span>Direct Call</span><a href="tel:+919990960669">+91 99909 60669</a></li>
            <li><span>WhatsApp</span><a href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">Instant AMC enquiry</a></li>
            <li><span>Studio</span><b>Janakpuri, New Delhi</b></li>
            <li><span>Coverage</span><b>Delhi NCR (Gurugram, Noida, Delhi)</b></li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
