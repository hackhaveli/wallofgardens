import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="shell">
        <div className="ft-g">
          <div>
            <div className="ft-b">Wall <b>of</b> Gardens</div>
            <div className="tag" style={{ marginTop: '13px' }}>Landscaping / Vertical Gardens / Green Spaces</div>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services/corporate-landscaping">Corporate Landscaping</Link>
            <Link href="/services/vertical-gardens">Vertical Gardens</Link>
            <Link href="/services/terrace-garden">Terrace Gardens</Link>
            <Link href="/services/balcony-gardens">Balcony Gardens</Link>
            <Link href="/services/moss-wall">Moss Walls</Link>
            <Link href="/services/plantscaping">Corporate Plantscaping</Link>
          </div>
          <div>
            <h4>Studio</h4>
            <Link href="/projects">Projects</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+919990960669">+91 99909 60669</a>
            <a href="mailto:founder@wallofgardens.com">founder@wallofgardens.com</a>
            <li>6th Floor, MERI, Janakpuri,<br />New Delhi – 110058</li>
          </div>
        </div>
        <div className="ft-bot">
          <span>© 2026 Wall of Gardens Private Limited · GSTIN 07AADCW0848G1ZB</span>
          <span><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link></span>
        </div>
      </div>
    </footer>
  );
}
