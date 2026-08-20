'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../../lib/supabase';
import { DEFAULT_STUDIO_CONTENT } from '../../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider,
} from '../../components/AdminUI';

type StudioContent = typeof DEFAULT_STUDIO_CONTENT;

export default function StudioPageEditor() {
  const [content, setContent] = useState<StudioContent>(DEFAULT_STUDIO_CONTENT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('pages_content').select('sections').eq('slug', 'studio').single().then((res: { data: any }) => {
      if (res.data?.sections) setContent({ ...DEFAULT_STUDIO_CONTENT, ...(res.data.sections as StudioContent) });
      setLoaded(true);
    });
  }, []);

  const update = <K extends keyof StudioContent>(key: K, value: StudioContent[K]) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const updateNested = <S extends keyof StudioContent, K extends keyof StudioContent[S]>(
    section: S, key: K, value: StudioContent[S][K]
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...(prev[section] as object), [key]: value },
    }));
  };

  const save = async () => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('pages_content').upsert({
      slug: 'studio',
      title: 'Studio / About',
      sections: content,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Studio / About Editor" badge="PAGE CONTENT" liveUrl="/studio">
      {/* Banner */}
      <SectionCard title="Page Banner">
        <TwoCol>
          <TextField label="Badge" value={content.banner.badge} onChange={v => updateNested('banner', 'badge', v)} />
          <TextField label="Breadcrumb" value={content.banner.breadcrumb} onChange={v => updateNested('banner', 'breadcrumb', v)} />
        </TwoCol>
        <TextField label="H1 Heading" value={content.banner.heading} onChange={v => updateNested('banner', 'heading', v)} />
        <TextAreaField label="Lead Paragraph" value={content.banner.lede} onChange={v => updateNested('banner', 'lede', v)} rows={2} />
      </SectionCard>

      {/* Delivery Model */}
      <SectionCard title="Delivery Model Section" badge="THE PRACTICE" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.delivery_model.badge} onChange={v => updateNested('delivery_model', 'badge', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.delivery_model.heading} onChange={v => updateNested('delivery_model', 'heading', v)} />
        <TextAreaField label="Body Paragraph 1" value={(content.delivery_model.body as string[])?.[0] || ''} onChange={v => update('delivery_model', { ...content.delivery_model, body: [v, (content.delivery_model.body as string[])?.[1] || ''] })} rows={4} />
        <TextAreaField label="Body Paragraph 2" value={(content.delivery_model.body as string[])?.[1] || ''} onChange={v => update('delivery_model', { ...content.delivery_model, body: [(content.delivery_model.body as string[])?.[0] || '', v] })} rows={4} />
      </SectionCard>

      {/* Coverage */}
      <SectionCard title="Coverage Section (Studio in Janakpuri)" badge="WHERE WE WORK" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.coverage.badge} onChange={v => updateNested('coverage', 'badge', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.coverage.heading} onChange={v => updateNested('coverage', 'heading', v)} />
        <TextAreaField label="Body Paragraph 1" value={(content.coverage.body as string[])?.[0] || ''} onChange={v => update('coverage', { ...content.coverage, body: [v, (content.coverage.body as string[])?.[1] || ''] })} rows={3} />
        <TextAreaField label="Body Paragraph 2" value={(content.coverage.body as string[])?.[1] || ''} onChange={v => update('coverage', { ...content.coverage, body: [(content.coverage.body as string[])?.[0] || '', v] })} rows={3} />
      </SectionCard>

      {/* Approach */}
      <SectionCard title="Approach Principles" badge="HOW WE WORK" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.approach.badge} onChange={v => updateNested('approach', 'badge', v)} />
          <TextField label="Heading" value={content.approach.heading} onChange={v => updateNested('approach', 'heading', v)} />
        </TwoCol>
        <Divider />
        <ListEditor
          label="Approach Principles"
          items={content.approach.items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => update('approach', { ...content.approach, items: v as StudioContent['approach']['items'] })}
          addLabel="Add Principle"
        />
      </SectionCard>

      {/* What We Won't Do */}
      <SectionCard title="What We Will Not Do (constraints)" badge="CONSTRAINTS" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.constraints.badge} onChange={v => updateNested('constraints', 'badge', v)} />
          <TextField label="Heading" value={content.constraints.heading} onChange={v => updateNested('constraints', 'heading', v)} />
        </TwoCol>
        <TextAreaField label="Lead Text" value={content.constraints.lede} onChange={v => updateNested('constraints', 'lede', v)} rows={2} />
        <Divider />
        <ListEditor
          label="Constraint Items (X marks)"
          items={content.constraints.items as { title: string; desc: string }[]}
          fields={[
            { key: 'title', label: 'Statement Title' },
            { key: 'desc', label: 'Explanation', type: 'textarea' },
          ]}
          onChange={v => update('constraints', { ...content.constraints, items: v as StudioContent['constraints']['items'] })}
          addLabel="Add Constraint"
        />
      </SectionCard>

      {/* Clients */}
      <SectionCard title="Client Logos Section" badge="CLIENTS" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.clients.badge} onChange={v => updateNested('clients', 'badge', v)} />
          <TextField label="Heading" value={content.clients.heading} onChange={v => updateNested('clients', 'heading', v)} />
        </TwoCol>
        <Divider />
        <ListEditor
          label="Client Names"
          items={(content.clients.items as string[]).map(name => ({ name }))}
          fields={[{ key: 'name', label: 'Client / Organisation Name' }]}
          onChange={v => update('clients', { ...content.clients, items: (v as { name: string }[]).map(i => i.name) })}
          addLabel="Add Client"
        />
      </SectionCard>

      {/* Closing CTA */}
      <SectionCard title="Closing CTA" badge="CONTACT CTA" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.closing.badge} onChange={v => updateNested('closing', 'badge', v)} />
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

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
        <SaveButton onSave={save} />
      </div>
    </AdminPageWrapper>
  );
}
