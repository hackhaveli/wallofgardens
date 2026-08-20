'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../../lib/supabase';
import { DEFAULT_SERVICES_CONTENT } from '../../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider,
} from '../../components/AdminUI';

type ServicesContent = typeof DEFAULT_SERVICES_CONTENT;

export default function ServicesHubEditor() {
  const [content, setContent] = useState<ServicesContent>(DEFAULT_SERVICES_CONTENT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('pages_content').select('sections').eq('slug', 'services').single().then((res: { data: any }) => {
      if (res.data?.sections) setContent({ ...DEFAULT_SERVICES_CONTENT, ...(res.data.sections as ServicesContent) });
      setLoaded(true);
    });
  }, []);

  const updateSection = <K extends keyof ServicesContent>(section: K, value: ServicesContent[K]) => {
    setContent(prev => ({ ...prev, [section]: value }));
  };

  const updateNested = <S extends keyof ServicesContent, K extends keyof ServicesContent[S]>(
    section: S, key: K, value: ServicesContent[S][K]
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...(prev[section] as object), [key]: value },
    }));
  };

  const save = async () => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('pages_content').upsert({
      slug: 'services',
      title: 'Services',
      sections: content,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Services Hub Editor" badge="PAGE CONTENT" liveUrl="/services">
      {/* Banner */}
      <SectionCard title="Page Banner" badge="BANNER">
        <TwoCol>
          <TextField label="Badge / Sheet Tag" value={content.banner.badge} onChange={v => updateNested('banner', 'badge', v)} />
          <TextField label="Breadcrumb" value={content.banner.breadcrumb} onChange={v => updateNested('banner', 'breadcrumb', v)} />
        </TwoCol>
        <TextField label="H1 Heading" value={content.banner.heading} onChange={v => updateNested('banner', 'heading', v)} />
        <TextAreaField label="Lead Paragraph" value={content.banner.lede} onChange={v => updateNested('banner', 'lede', v)} rows={2} hint="Use <em class='g'> for green italic" />
      </SectionCard>

      {/* Sheet Register — 6 service cards */}
      <SectionCard title="Sheet Register (6 service cards)" badge="REGISTER">
        <TwoCol>
          <TextField label="Badge" value={content.register.badge} onChange={v => updateNested('register', 'badge', v)} />
          <TextField label="Sub-heading" value={content.register.sub} onChange={v => updateNested('register', 'sub', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.register.heading} onChange={v => updateNested('register', 'heading', v)} />
        <Divider />
        <ListEditor
          label="Service Sheet Cards"
          items={content.register.items as { no: string; title: string; subtitle: string; desc: string; href: string; sheet: string }[]}
          fields={[
            { key: 'no', label: 'Number (01)' },
            { key: 'sheet', label: 'Sheet Label (Sheet 01 →)' },
            { key: 'title', label: 'Title' },
            { key: 'subtitle', label: 'Subtitle' },
            { key: 'desc', label: 'Description', type: 'textarea' },
            { key: 'href', label: 'Link URL' },
          ]}
          onChange={v => updateSection('register', { ...content.register, items: v as ServicesContent['register']['items'] })}
          addLabel="Add Sheet Card"
        />
      </SectionCard>

      {/* Common to All */}
      <SectionCard title="Common to All Six (principles)" badge="COMMON" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.common.badge} onChange={v => updateNested('common', 'badge', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.common.heading} onChange={v => updateNested('common', 'heading', v)} />
        <TextAreaField label="Lead" value={content.common.lede} onChange={v => updateNested('common', 'lede', v)} rows={2} />
        <Divider />
        <ListEditor
          label="Common Principles"
          items={content.common.items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => updateSection('common', { ...content.common, items: v as ServicesContent['common']['items'] })}
          addLabel="Add Principle"
        />
      </SectionCard>

      {/* Process */}
      <SectionCard title="Process Sequence" badge="SEQUENCE" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.process.badge} onChange={v => updateNested('process', 'badge', v)} />
          <TextField label="Heading" value={content.process.heading} onChange={v => updateNested('process', 'heading', v)} />
        </TwoCol>
        <Divider />
        <ListEditor
          label="Process Stages"
          items={content.process.items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Stage (01 / Understand)' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => updateSection('process', { ...content.process, items: v as ServicesContent['process']['items'] })}
          addLabel="Add Stage"
        />
      </SectionCard>

      {/* Closing CTA */}
      <SectionCard title="Closing CTA" badge="CONTACT CTA" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.closing.badge} onChange={v => updateNested('closing', 'badge', v)} />
          <TextField label="Background Image" value={content.closing.bg_image} onChange={v => updateNested('closing', 'bg_image', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.closing.heading} onChange={v => updateNested('closing', 'heading', v)} />
        <TextAreaField label="Lead Text" value={content.closing.lede} onChange={v => updateNested('closing', 'lede', v)} rows={2} />
        <Divider />
        <TwoCol>
          <TextField label="Primary CTA Label" value={content.closing.cta_primary_label} onChange={v => updateNested('closing', 'cta_primary_label', v)} />
          <TextField label="Primary CTA Link" value={content.closing.cta_primary_href} onChange={v => updateNested('closing', 'cta_primary_href', v)} />
        </TwoCol>
        <TwoCol>
          <TextField label="Secondary CTA Label" value={content.closing.cta_secondary_label} onChange={v => updateNested('closing', 'cta_secondary_label', v)} />
          <TextField label="Secondary CTA Link" value={content.closing.cta_secondary_href} onChange={v => updateNested('closing', 'cta_secondary_href', v)} />
        </TwoCol>
      </SectionCard>

      {/* Individual service links */}
      <SectionCard title="Individual Service Page Editors" defaultOpen={false}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            ['corporate-landscaping', 'Corporate Landscaping', '/services/corporate-landscaping'],
            ['vertical-gardens', 'Vertical Gardens', '/services/vertical-gardens'],
            ['terrace-garden', 'Terrace Gardens', '/services/terrace-garden'],
            ['balcony-gardens', 'Balcony Gardens', '/services/balcony-gardens'],
            ['moss-wall', 'Moss Walls', '/services/moss-wall'],
            ['plantscaping', 'Plantscaping', '/services/plantscaping'],
          ].map(([slug, label]) => (
            <a
              key={slug}
              href={`/admin/pages/services/${slug}`}
              style={{
                display: 'block',
                background: '#F9F8F5',
                border: '1px solid rgba(14,24,17,0.1)',
                borderRadius: '2px',
                padding: '14px',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#7FA65C'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,24,17,0.1)'; }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '3px' }}>{label}</div>
              <div style={{ fontSize: '10px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace' }}>Edit page →</div>
            </a>
          ))}
        </div>
      </SectionCard>

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
        <SaveButton onSave={save} />
      </div>
    </AdminPageWrapper>
  );
}
