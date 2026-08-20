'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../../../lib/supabase';
import { SERVICE_PAGE_DEFAULTS } from '../../../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider,
} from '../../../components/AdminUI';

const SERVICE_LABELS: Record<string, string> = {
  'corporate-landscaping': 'Corporate Landscaping',
  'vertical-gardens': 'Vertical Gardens',
  'terrace-garden': 'Terrace Gardens',
  'balcony-gardens': 'Balcony Gardens',
  'moss-wall': 'Moss Walls',
  'plantscaping': 'Corporate Plantscaping',
};

type ServiceData = (typeof SERVICE_PAGE_DEFAULTS)[string];

export default function ServicePageEditor({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>('');
  const [content, setContent] = useState<ServiceData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    params.then(p => {
      const s = p.slug;
      setSlug(s);
      const defaults = SERVICE_PAGE_DEFAULTS[s];
      if (!defaults) { setLoaded(true); return; }

      const supabase = getSupabaseClient();
      supabase.from('pages_content').select('sections').eq('slug', s).single().then((res: { data: any }) => {
        if (res.data?.sections) setContent({ ...defaults, ...res.data.sections });
        else setContent(defaults);
        setLoaded(true);
      });
    });
  }, [params]);

  const update = (key: string, value: unknown) => {
    setContent((prev: ServiceData | null) => prev ? { ...prev, [key]: value } : prev);
  };

  const save = async () => {
    if (!content || !slug) throw new Error('No content');
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('pages_content').upsert({
      slug,
      title: SERVICE_LABELS[slug] || slug,
      sections: content,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;
  if (!content) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: '#B4763C' }}>Service page not found: {slug}</div>;

  const liveUrl = `/services/${slug}`;

  return (
    <AdminPageWrapper title={`${SERVICE_LABELS[slug] || slug} — Editor`} badge={`SERVICE PAGE — ${slug.toUpperCase()}`} liveUrl={liveUrl}>
      {/* Banner */}
      <SectionCard title="Page Banner" badge="BANNER">
        <TwoCol>
          <TextField label="Sheet Badge" value={content.sheet || ''} onChange={v => update('sheet', v)} placeholder="Sheet 01 — Scope of works" />
        </TwoCol>
        <TextField label="Page Heading (H1)" value={content.title || ''} onChange={v => update('title', v)} />
        <TextAreaField label="Lead Paragraph" value={content.lede || ''} onChange={v => update('lede', v)} rows={2} hint="Use <em class='g'> for green italic emphasis" />
        <TextField label="Breadcrumb Text" value={content.breadcrumb || ''} onChange={v => update('breadcrumb', v)} placeholder="Home / Services / ..." />
      </SectionCard>

      {/* Overview */}
      <SectionCard title="Overview Section" badge="OVERVIEW" defaultOpen={false}>
        <TextField label="Overview Heading (H2)" value={content.overview_heading || ''} onChange={v => update('overview_heading', v)} />
        <TextAreaField label="Body Paragraph 1" value={(content.overview_body as string[])?.[0] || ''} onChange={v => update('overview_body', [(v), (content.overview_body as string[])?.[1] || ''])} rows={4} />
        <TextAreaField label="Body Paragraph 2" value={(content.overview_body as string[])?.[1] || ''} onChange={v => update('overview_body', [(content.overview_body as string[])?.[0] || '', v])} rows={4} />
      </SectionCard>

      {/* Scope Items */}
      <SectionCard title="Scope Items" badge="SCOPE" defaultOpen={false}>
        <TextField label="Scope Section Heading" value={content.scope_heading || ''} onChange={v => update('scope_heading', v)} />
        <Divider />
        <ListEditor
          label="Scope Cards"
          items={(content.scope_items || []) as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number (e.g. 01)' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => update('scope_items', v)}
          addLabel="Add Scope Item"
        />
      </SectionCard>

      {/* Method Checklist */}
      <SectionCard title="Method Checklist" badge="METHOD" defaultOpen={false}>
        <TextField label="Method Heading" value={content.method_heading || ''} onChange={v => update('method_heading', v)} />
        <TextAreaField label="Method Lead Text" value={content.method_lede || ''} onChange={v => update('method_lede', v)} rows={2} />
        <Divider />
        <ListEditor
          label="Checklist Items"
          items={(content.method_items || []) as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => update('method_items', v)}
          addLabel="Add Checklist Item"
        />
      </SectionCard>

      {/* Process Stages */}
      <SectionCard title="Process Stages (4-step sequence)" badge="SEQUENCE" defaultOpen={false}>
        <ListEditor
          label="Process Stages"
          items={(content.process_items || []) as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Stage (e.g. 01 / Survey)' },
            { key: 'title', label: 'Stage Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => update('process_items', v)}
          addLabel="Add Stage"
        />
      </SectionCard>

      {/* FAQs */}
      <SectionCard title="FAQ Section" badge="FAQs" defaultOpen={false}>
        <ListEditor
          label="Frequently Asked Questions"
          items={(content.faqs || []) as { q: string; a: string }[]}
          fields={[
            { key: 'q', label: 'Question' },
            { key: 'a', label: 'Answer', type: 'textarea' },
          ]}
          onChange={v => update('faqs', v)}
          addLabel="Add FAQ"
        />
      </SectionCard>

      {/* Closing CTA */}
      <SectionCard title="Closing CTA" badge="CONTACT CTA" defaultOpen={false}>
        {content.closing && (
          <>
            <TwoCol>
              <TextField label="Badge" value={(content.closing as { badge?: string }).badge || ''} onChange={v => update('closing', { ...(content.closing as object), badge: v })} />
              <TextField label="Background Image" value={(content.closing as { bg_image?: string }).bg_image || ''} onChange={v => update('closing', { ...(content.closing as object), bg_image: v })} placeholder="/project_01.jpg" />
            </TwoCol>
            <TextField label="Heading" value={(content.closing as { heading?: string }).heading || ''} onChange={v => update('closing', { ...(content.closing as object), heading: v })} />
            <TextAreaField label="Lead Text" value={(content.closing as { lede?: string }).lede || ''} onChange={v => update('closing', { ...(content.closing as object), lede: v })} rows={2} />
            <Divider />
            <TwoCol>
              <TextField label="Primary CTA Label" value={(content.closing as { cta_primary_label?: string }).cta_primary_label || ''} onChange={v => update('closing', { ...(content.closing as object), cta_primary_label: v })} />
              <TextField label="Primary CTA Link" value={(content.closing as { cta_primary_href?: string }).cta_primary_href || ''} onChange={v => update('closing', { ...(content.closing as object), cta_primary_href: v })} />
            </TwoCol>
            <TwoCol>
              <TextField label="Secondary CTA Label" value={(content.closing as { cta_secondary_label?: string }).cta_secondary_label || ''} onChange={v => update('closing', { ...(content.closing as object), cta_secondary_label: v })} />
              <TextField label="Secondary CTA Link" value={(content.closing as { cta_secondary_href?: string }).cta_secondary_href || ''} onChange={v => update('closing', { ...(content.closing as object), cta_secondary_href: v })} />
            </TwoCol>
          </>
        )}
      </SectionCard>

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
        <SaveButton onSave={save} />
      </div>
    </AdminPageWrapper>
  );
}
