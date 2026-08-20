'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { DEFAULT_SITE_SETTINGS } from '../../lib/content-defaults';
import { getSupabaseClient } from '../../lib/supabase';

type SiteSettings = typeof DEFAULT_SITE_SETTINGS;

export default function Navbar({ initialSettings }: { initialSettings?: Partial<SiteSettings> }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>({
    ...DEFAULT_SITE_SETTINGS,
    ...initialSettings,
  });
  const pathname = usePathname();

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase
      .from('site_settings')
      .select('data')
      .eq('id', 'global')
      .single()
      .then((res: { data: any }) => {
        if (res.data?.data) {
          setSettings({ ...DEFAULT_SITE_SETTINGS, ...res.data.data });
        }
      });
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className={`nav${open ? ' open' : ''}`} id="nav">
      <div className="shell">
        <div className="nav-in">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <Image
              src={settings.logo_src || '/logo.png'}
              alt={settings.logo_alt || settings.company_name}
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
            />
            <span className="brand-n">
              {settings.company_name.includes(' of ') ? (
                <>
                  {settings.company_name.split(' of ')[0]} <b>of</b> {settings.company_name.split(' of ')[1]}
                </>
              ) : (
                settings.company_name
              )}
            </span>
          </Link>
          <nav className="nav-l">
            {(settings.nav_links || DEFAULT_SITE_SETTINGS.nav_links).map((link: { label: string; href: string }) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'on' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-r">
            <span className="tag light">{settings.phone}</span>
            <Link className="btn btn-g" href={settings.nav_cta_href || '/contact'}>
              <span>{settings.nav_cta_label || 'Start a Project'}</span>
            </Link>
          </div>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <i></i><i></i>
          </button>
        </div>
        <div className="mob">
          {(settings.nav_links || DEFAULT_SITE_SETTINGS.nav_links).map((link: { label: string; href: string }) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${settings.phone_raw || settings.phone}`}
            onClick={() => setOpen(false)}
            style={{ color: 'rgba(244,243,236,.58)' }}
          >
            {settings.phone}
          </a>
          <Link
            href={settings.nav_cta_href || '/contact'}
            style={{ color: 'var(--gold)' }}
            onClick={() => setOpen(false)}
          >
            {settings.nav_cta_label || 'Start a Project'} →
          </Link>
        </div>
      </div>
    </header>
  );
}
