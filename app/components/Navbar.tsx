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
            <div className="brand-text-block">
              <span className="brand-n">Wall <b>of</b> Gardens</span>
              <span className="brand-sub">Living Architecture</span>
            </div>
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
            <Link className="btn btn-g nav-cta-btn" href="/contact">
              <span className="cta-full">Book Site Visit</span>
              <span className="cta-compact">Site Visit</span>
            </Link>
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
              <span>Book Site Visit &rarr;</span>
            </Link>
            <a
              href="https://wa.me/919990960669?text=Hi%20Wall%20of%20Gardens,%20I%20would%20like%20to%20inquire%20about%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="mob-wa-link"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.85 7.67C8.62 7.93 7.96 8.55 7.96 9.81C7.96 11.08 8.88 12.3 9.01 12.47C9.14 12.64 10.79 15.19 13.33 16.29C15.44 17.2 15.87 17.02 16.33 16.98C16.8 16.93 17.83 16.37 18.05 15.75C18.27 15.13 18.27 14.6 18.2 14.49C18.14 14.38 17.97 14.31 17.71 14.18C17.45 14.05 16.2 13.44 15.97 13.35C15.74 13.27 15.57 13.23 15.4 13.49C15.23 13.75 14.75 14.31 14.6 14.49C14.46 14.66 14.31 14.69 14.05 14.56C13.8 14.43 12.97 14.16 12 13.29C11.23 12.61 10.72 11.77 10.57 11.51C10.42 11.25 10.55 11.11 10.68 10.98C10.8 10.86 10.95 10.67 11.08 10.52C11.21 10.37 11.25 10.26 11.34 10.09C11.43 9.92 11.38 9.77 11.32 9.64C11.25 9.51 10.74 8.27 10.53 7.76C10.32 7.26 10.11 7.33 9.95 7.33C9.8 7.33 9.68 7.35 9.53 7.35Z"/>
              </svg>
              <span>Message on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
