'use client';

import Link from 'next/link';
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
            <svg width="23" height="23" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" stroke="#C8A55B"/>
              <path d="M13 20V13M13 13C13 13 8 12 8 7C8 7 13 7 13 13ZM13 13C13 13 18 12 18 7C18 7 13 7 13 13Z" stroke="#7FA65C" strokeWidth="1.1" strokeLinejoin="round"/>
            </svg>
            <span className="brand-n">Wall <b>of</b> Gardens</span>
          </Link>
          <nav className="nav-l">
            <Link href="/projects" className={isProjects ? 'on' : ''}>Projects</Link>
            <Link href="/services" className={isServices ? 'on' : ''}>Services</Link>
            <Link href="/studio" className={isStudio ? 'on' : ''}>Studio</Link>
            <Link href="/contact" className={isContact ? 'on' : ''}>Contact</Link>
          </nav>
          <div className="nav-r">
            <a href="tel:+919990960669" className="tag light">+91 99909 60669</a>
            <Link className="btn btn-g" href="/contact"><span>Start a Project</span></Link>
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
          <Link href="/contact" style={{ color: 'var(--gold)' }} onClick={() => setOpen(false)}>Start a Project</Link>
        </div>
      </div>
    </header>
  );
}
