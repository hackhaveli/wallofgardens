import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="shell">
        <div className="ft-g">
          <div>
            <div className="ft-brand-row">
              <div className="brand-logo-wrap">
                <BrandLogo size={36} />
              </div>
              <div className="ft-b">Wall <b>of</b> Gardens</div>
            </div>
            <div className="tag" style={{ marginTop: '13px' }}>Landscaping / Vertical Gardens / Green Spaces</div>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services/plant-maintenance-amc">Plant Maintenance (AMC)</Link>
            <Link href="/services/vertical-gardens">Vertical Gardens</Link>
            <Link href="/services/terrace-garden">Terrace Gardens</Link>
            <Link href="/services/balcony-gardens">Balcony Gardens</Link>
            <Link href="/services/moss-wall">Moss Walls</Link>
            <Link href="/services/plantscaping">Corporate Plantscaping</Link>
          </div>
          <div>
            <h4>Studio</h4>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+919990960669" className="ft-phone-link">
              <strong>+91 99909 60669</strong>
            </a>
            <a href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer">
              WhatsApp Studio &rarr;
            </a>
            <a href="https://www.instagram.com/wallofgarden" target="_blank" rel="noopener noreferrer">
              Instagram @wallofgarden &rarr;
            </a>
            <a href="mailto:founder@wallofgardens.com">founder@wallofgardens.com</a>
            <li>6th Floor, MERI, Janakpuri,<br />New Delhi – 110058</li>
          </div>
        </div>
        {/* METRO SERVICE HUBS & COVERAGE */}
        <div className="ft-metro-band">
          <div className="ft-metro-title">
            <span className="dot" />
            <span>Pan-India Metro Execution &amp; Service Hubs</span>
          </div>
          <div className="ft-metro-grid">
            <div className="ft-metro-col">
              <strong>Delhi NCR</strong>
              <span>New Delhi · South Delhi · Gurugram (DLF CyberCity · Golf Course Rd) · Noida Expressway · Aerocity</span>
            </div>
            <div className="ft-metro-col">
              <strong>Bengaluru</strong>
              <span>Whitefield · Indiranagar · Koramangala · Outer Ring Road · Electronic City Tech Parks</span>
            </div>
            <div className="ft-metro-col">
              <strong>Mumbai</strong>
              <span>Bandra Kurla Complex (BKC) · Lower Parel · Worli · Powai · South Mumbai Penthouses</span>
            </div>
            <div className="ft-metro-col">
              <strong>Pune &amp; Hyderabad</strong>
              <span>Hinjewadi · Kharadi · Baner · HITEC City · Gachibowli · Financial District</span>
            </div>
          </div>
        </div>

        <div className="ft-bot">
          <span>© 2026 Wall of Gardens Private Limited · Registered 17 Oct 2021 · GSTIN 07AADCW0848G1ZB</span>
          <span><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link></span>
        </div>
      </div>
    </footer>
  );
}
