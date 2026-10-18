'use client';

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isProjects = pathname === '/projects' || pathname.startsWith('/projects');
  const isServices = pathname === '/services' || pathname.startsWith('/services');
  const isStudio = pathname === '/studio' || pathname === '/about';
  const isContact = pathname === '/contact';

  return (
    <header className={`nav${open ? ' open' : ''}`} id="nav">
      <div className="shell">
        <div className="nav-in">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <div className="brand-logo-wrap">
              <BrandLogo size={38} />
            </div>
            <span className="brand-n">Wall <b>of</b> Gardens</span>
          </Link>
          <nav className="nav-l">
            <Link href="/projects" className={isProjects ? 'on' : ''}>Projects</Link>
            <Link href="/services" className={isServices ? 'on' : ''}>Services</Link>
            <Link href="/studio" className={isStudio ? 'on' : ''}>Studio</Link>
            <Link href="/contact" className={isContact ? 'on' : ''}>Contact</Link>
          </nav>
          <div className="nav-r">
            <a href="tel:+919990960669" className="nav-phone" title="Call Wall of Gardens (+91 99909 60669)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91&nbsp;99909&nbsp;60669</span>
            </a>
            <Link className="btn btn-g nav-cta-btn" href="/contact"><span>Start a Project</span></Link>
          </div>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <i></i><i></i>
          </button>
        </div>
        <div className="mob">
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/studio" onClick={() => setOpen(false)}>Studio</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <div className="mob-cta-box">
            <Link className="btn btn-g" href="/contact" onClick={() => setOpen(false)}>
              <span>Start a Project &rarr;</span>
            </Link>
            <a href="tel:+919990960669" className="mob-phone-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 99909 60669</span>
            </a>
            <a href="https://wa.me/919990960669" target="_blank" rel="noopener noreferrer" className="mob-wa-link">
              <span>Message on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
