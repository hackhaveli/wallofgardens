'use client';

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const SERVICES_MENU = [
  {
    href: '/services/plant-maintenance-amc',
    icon: '🪴',
    title: 'Plant Maintenance (AMC)',
    sub: 'Scheduled care, zero-mortality replacements',
    badge: 'Popular',
  },
  {
    href: '/services/vertical-gardens',
    icon: '🌿',
    title: 'Vertical Gardens',
    sub: 'Automated living walls & green facades',
    badge: 'Flagship',
  },
  {
    href: '/services/terrace-garden',
    icon: '🌺',
    title: 'Terrace Gardens',
    sub: 'Rooftop lounges, load & drainage safety',
    badge: null,
  },
  {
    href: '/services/balcony-gardens',
    icon: '🌱',
    title: 'Balcony Gardens',
    sub: 'Bespoke apartment garden sanctuaries',
    badge: null,
  },
  {
    href: '/services/moss-wall',
    icon: '🍃',
    title: 'Preserved Moss Walls',
    sub: 'Zero water, zero sunlight, 10-year life',
    badge: 'Zero-Maint',
  },
  {
    href: '/services/plantscaping',
    icon: '🏢',
    title: 'Office Plantscaping',
    sub: 'Corporate indoor fit-outs & air purification',
    badge: 'B2B Focus',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect scroll to add frosted shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesExpanded(false);
  }, [pathname]);

  const isProjects = pathname === '/projects' || pathname.startsWith('/projects');
  const isServices = pathname === '/services' || pathname.startsWith('/services');
  const isStudio = pathname === '/studio' || pathname === '/about';
  const isContact = pathname === '/contact';

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  return (
    <header className={`nav-v2 ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`} id="nav">
      <div className="shell">
        <div className="nav-v2-in">
          {/* BRAND EMBLEM & TYPOGRAPHY */}
          <Link className="brand-v2" href="/" onClick={() => setOpen(false)} aria-label="Wall of Gardens Home">
            <div className="brand-v2-logo-wrap">
              <BrandLogo size={36} />
            </div>
            <div className="brand-v2-titles">
              <span className="brand-v2-name">Wall <b>of</b> Gardens</span>
              <span className="brand-v2-sub">LIVING ARCHITECTURE · NEW DELHI</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="nav-v2-links" aria-label="Main Navigation">
            <Link
              href="/projects"
              className={`nav-v2-link ${isProjects ? 'is-active' : ''}`}
            >
              <span>Projects</span>
            </Link>

            {/* SERVICES WITH LUXURY DROPDOWN */}
            <div
              className={`nav-v2-item-dropdown ${servicesOpen ? 'is-active' : ''}`}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <Link
                href="/services"
                className={`nav-v2-link ${isServices ? 'is-active' : ''}`}
                onClick={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <svg
                  className={`nav-v2-chevron ${servicesOpen ? 'is-rotated' : ''}`}
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              {/* DROPDOWN FLYOUT CARD */}
              <div
                className={`nav-v2-flyout ${servicesOpen ? 'is-visible' : ''}`}
                role="region"
                aria-label="Services Menu"
              >
                <div className="nav-v2-flyout-head">
                  <span className="flyout-tag">Disciplines &amp; Contracts</span>
                  <span className="flyout-note">Engineered in New Delhi · Deployed Pan-India</span>
                </div>

                <div className="nav-v2-flyout-grid">
                  {SERVICES_MENU.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="nav-v2-flyout-item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flyout-item-icon">{s.icon}</span>
                      <div className="flyout-item-info">
                        <div className="flyout-item-title-row">
                          <strong className="flyout-item-title">{s.title}</strong>
                          {s.badge && <span className="flyout-item-badge">{s.badge}</span>}
                        </div>
                        <span className="flyout-item-sub">{s.sub}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="nav-v2-flyout-foot">
                  <Link
                    href="/services"
                    className="flyout-all-link"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>View all 6 services overview &rarr;</span>
                  </Link>
                  <span className="flyout-foot-tag">Free on-site consultation across Delhi NCR</span>
                </div>
              </div>
            </div>

            <Link
              href="/studio"
              className={`nav-v2-link ${isStudio ? 'is-active' : ''}`}
            >
              <span>Studio</span>
            </Link>

            <Link
              href="/contact"
              className={`nav-v2-link ${isContact ? 'is-active' : ''}`}
            >
              <span>Contact</span>
            </Link>
          </nav>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="nav-v2-actions">
            {/* CALL PILL */}
            <a
              href="tel:+919990960669"
              className="nav-v2-pill nav-v2-call"
              title="Call Wall of Gardens Studio (+91 99909 60669)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91&nbsp;99909&nbsp;60669</span>
            </a>

            {/* QUICK WHATSAPP CHAT BUTTON */}
            <a
              href="https://wa.me/919990960669?text=Hi%20Wall%20of%20Gardens,%20I%20would%20like%20to%20inquire%20about%20a%20site%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-v2-pill nav-v2-wa"
              title="Chat with Principal Designer on WhatsApp"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.85 7.67C8.62 7.93 7.96 8.55 7.96 9.81C7.96 11.08 8.88 12.3 9.01 12.47C9.14 12.64 10.79 15.19 13.33 16.29C15.44 17.2 15.87 17.02 16.33 16.98C16.8 16.93 17.83 16.37 18.05 15.75C18.27 15.13 18.27 14.6 18.2 14.49C18.14 14.38 17.97 14.31 17.71 14.18C17.45 14.05 16.2 13.44 15.97 13.35C15.74 13.27 15.57 13.23 15.4 13.49C15.23 13.75 14.75 14.31 14.6 14.49C14.46 14.66 14.31 14.69 14.05 14.56C13.8 14.43 12.97 14.16 12 13.29C11.23 12.61 10.72 11.77 10.57 11.51C10.42 11.25 10.55 11.11 10.68 10.98C10.8 10.86 10.95 10.67 11.08 10.52C11.21 10.37 11.25 10.26 11.34 10.09C11.43 9.92 11.38 9.77 11.32 9.64C11.25 9.51 10.74 8.27 10.53 7.76C10.32 7.26 10.11 7.33 9.95 7.33C9.8 7.33 9.68 7.35 9.53 7.35Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* PRIMARY LUXURY CTA BUTTON */}
            <Link className="nav-v2-cta" href="/contact">
              <span>Start a Project &rarr;</span>
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className={`nav-v2-burger ${open ? 'is-active' : ''}`}
              aria-label={open ? 'Close Menu' : 'Open Menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="burger-line burger-top"></span>
              <span className="burger-line burger-mid"></span>
              <span className="burger-line burger-bot"></span>
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <div className={`nav-v2-drawer ${open ? 'is-open' : ''}`}>
          <div className="drawer-inner">
            <div className="drawer-links">
              <Link
                href="/projects"
                className={`drawer-link ${isProjects ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span className="drawer-num">01</span>
                <span className="drawer-title">Projects</span>
                <span className="drawer-sub">Selected Living Architecture</span>
              </Link>

              {/* SERVICES ACCORDION ON MOBILE */}
              <div className="drawer-accordion">
                <div
                  className="drawer-accordion-head"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                    <span className="drawer-num">02</span>
                    <span className="drawer-title">Services</span>
                  </div>
                  <span className="drawer-accordion-toggle">
                    {mobileServicesExpanded ? '−' : '+'}
                  </span>
                </div>

                {mobileServicesExpanded && (
                  <div className="drawer-sub-grid">
                    {SERVICES_MENU.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="drawer-sub-item"
                        onClick={() => setOpen(false)}
                      >
                        <span className="drawer-sub-icon">{s.icon}</span>
                        <div>
                          <strong>{s.title}</strong>
                          <span>{s.sub}</span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="drawer-sub-all"
                      onClick={() => setOpen(false)}
                    >
                      All Services Matrix &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/studio"
                className={`drawer-link ${isStudio ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span className="drawer-num">03</span>
                <span className="drawer-title">Studio</span>
                <span className="drawer-sub">Janakpuri Workshop &amp; Method</span>
              </Link>

              <Link
                href="/contact"
                className={`drawer-link ${isContact ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span className="drawer-num">04</span>
                <span className="drawer-title">Contact</span>
                <span className="drawer-sub">Free Site Visit Across Delhi NCR</span>
              </Link>
            </div>

            {/* DRAWER ACTION BUTTONS */}
            <div className="drawer-actions">
              <Link
                className="nav-v2-cta drawer-cta"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                <span>Request Free Site Visit &rarr;</span>
              </Link>
              <div className="drawer-contact-row">
                <a href="tel:+919990960669" className="drawer-contact-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Studio</span>
                </a>
                <a
                  href="https://wa.me/919990960669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-contact-btn drawer-wa-btn"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="drawer-foot">
              <span>MERI Campus, Janakpuri, New Delhi – 110058</span>
              <span>Mon – Sat · 10:00 AM – 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
