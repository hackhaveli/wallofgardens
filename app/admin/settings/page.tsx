'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../lib/supabase';
import { DEFAULT_SITE_SETTINGS } from '../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider, SectionLabel,
} from '../components/AdminUI';

type Settings = typeof DEFAULT_SITE_SETTINGS;

export default function GlobalSettingsPage() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SITE_SETTINGS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('site_settings').select('data').eq('id', 'global').single().then((res: { data: any }) => {
      if (res.data?.data) setSettings({ ...DEFAULT_SITE_SETTINGS, ...res.data.data });
      setLoaded(true);
    });
  }, []);

  const update = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('site_settings').upsert({
      id: 'global',
      data: settings,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Global Settings" badge="SITE-WIDE CONFIGURATION" liveUrl="/">
      {/* Branding */}
      <SectionCard title="Branding">
        <TwoCol>
          <TextField label="Company Name" value={settings.company_name} onChange={v => update('company_name', v)} />
          <TextField label="Tagline" value={settings.tagline} onChange={v => update('tagline', v)} />
        </TwoCol>
        <TwoCol>
          <TextField label="Logo Image Path" value={settings.logo_src} onChange={v => update('logo_src', v)} placeholder="/logo.png" />
          <TextField label="Logo Alt Text" value={settings.logo_alt} onChange={v => update('logo_alt', v)} />
        </TwoCol>
      </SectionCard>

      {/* Contact */}
      <SectionCard title="Contact Information">
        <TwoCol>
          <TextField label="Phone Number (Display)" value={settings.phone} onChange={v => update('phone', v)} placeholder="+91 99909 60669" />
          <TextField label="Phone (Raw, for tel: links)" value={settings.phone_raw} onChange={v => update('phone_raw', v)} placeholder="+919990960669" />
        </TwoCol>
        <TwoCol>
          <TextField label="Email Address" value={settings.email} onChange={v => update('email', v)} type="email" />
          <TextField label="WhatsApp URL" value={settings.whatsapp} onChange={v => update('whatsapp', v)} placeholder="https://wa.me/919990960669" />
        </TwoCol>
        <TwoCol>
          <TextField label="Address Line 1" value={settings.address_line1} onChange={v => update('address_line1', v)} />
          <TextField label="Address Line 2" value={settings.address_line2} onChange={v => update('address_line2', v)} />
        </TwoCol>
        <TwoCol>
          <TextField label="GSTIN" value={settings.gstin} onChange={v => update('gstin', v)} />
          <TextField label="Copyright Text" value={settings.copyright} onChange={v => update('copyright', v)} />
        </TwoCol>
      </SectionCard>

      {/* Header Navigation */}
      <SectionCard title="Header Navigation">
        <TwoCol>
          <TextField label="CTA Button Label" value={settings.nav_cta_label} onChange={v => update('nav_cta_label', v)} />
          <TextField label="CTA Button Link" value={settings.nav_cta_href} onChange={v => update('nav_cta_href', v)} />
        </TwoCol>
        <Divider />
        <ListEditor
          label="Navigation Links"
          items={settings.nav_links as { label: string; href: string }[]}
          fields={[
            { key: 'label', label: 'Link Label' },
            { key: 'href', label: 'Link URL' },
          ]}
          onChange={v => update('nav_links', v as Settings['nav_links'])}
          addLabel="Add Nav Link"
        />
      </SectionCard>

      {/* Footer */}
      <SectionCard title="Footer" defaultOpen={false}>
        <TextField label="Footer Tagline" value={settings.footer_tagline} onChange={v => update('footer_tagline', v)} />
        <Divider />
        <SectionLabel>Services Column</SectionLabel>
        <ListEditor
          label="Footer Service Links"
          items={settings.footer_services as { label: string; href: string }[]}
          fields={[
            { key: 'label', label: 'Label' },
            { key: 'href', label: 'URL' },
          ]}
          onChange={v => update('footer_services', v as Settings['footer_services'])}
          addLabel="Add Service Link"
        />
        <Divider />
        <SectionLabel>Studio Column</SectionLabel>
        <ListEditor
          label="Footer Studio Links"
          items={settings.footer_studio_links as { label: string; href: string }[]}
          fields={[
            { key: 'label', label: 'Label' },
            { key: 'href', label: 'URL' },
          ]}
          onChange={v => update('footer_studio_links', v as Settings['footer_studio_links'])}
          addLabel="Add Studio Link"
        />
      </SectionCard>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '8px' }}>
        <SaveButton onSave={save} />
      </div>
    </AdminPageWrapper>
  );
}
