import Link from 'next/link';
import { createServerClient } from '../../lib/supabase';
import { DEFAULT_SITE_SETTINGS } from '../../lib/content-defaults';

type SiteSettings = typeof DEFAULT_SITE_SETTINGS;

async function getFooterSettings(): Promise<SiteSettings> {
  try {
    const supabase = createServerClient();
    const { data } = await supabase.from('site_settings').select('data').eq('id', 'global').single();
    if (data?.data) {
      return { ...DEFAULT_SITE_SETTINGS, ...data.data };
    }
  } catch {
    // fallback
  }
  return DEFAULT_SITE_SETTINGS;
}

export default async function Footer({ initialSettings }: { initialSettings?: Partial<SiteSettings> }) {
  const settings = initialSettings ? { ...DEFAULT_SITE_SETTINGS, ...initialSettings } : await getFooterSettings();

  return (
    <footer className="ft">
      <div className="shell">
        <div className="ft-g">
          <div>
            <div className="ft-b">
              {settings.company_name.includes(' of ') ? (
                <>
                  {settings.company_name.split(' of ')[0]} <b>of</b> {settings.company_name.split(' of ')[1]}
                </>
              ) : (
                settings.company_name
              )}
            </div>
            <div className="tag" style={{ marginTop: '13px' }}>
              {settings.footer_tagline}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            {(settings.footer_services || DEFAULT_SITE_SETTINGS.footer_services).map((svc: { label: string; href: string }) => (
              <Link key={svc.href} href={svc.href}>
                {svc.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Studio</h4>
            {(settings.footer_studio_links || DEFAULT_SITE_SETTINGS.footer_studio_links).map((link: { label: string; href: string }) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${settings.phone_raw || settings.phone}`}>{settings.phone}</a>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
            <a href={settings.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
            <p style={{ fontSize: '14px', color: 'rgba(244,243,236,.56)', marginBottom: '10px', lineHeight: '1.55' }}>
              {settings.address_line1},<br />
              {settings.address_line2}
            </p>
          </div>
        </div>
        <div className="ft-bot">
          <span>{settings.copyright}</span>
          <span><a href="#">Privacy</a><a href="#">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}
