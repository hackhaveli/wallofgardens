'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../../lib/supabase';
import { DEFAULT_HOME_CONTENT } from '../../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider,
} from '../../components/AdminUI';

type HomeContent = typeof DEFAULT_HOME_CONTENT;

export default function HomePageEditor() {
  const [content, setContent] = useState<HomeContent>(DEFAULT_HOME_CONTENT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('pages_content').select('sections').eq('slug', 'home').single().then((res: { data: any }) => {
      if (res.data?.sections) setContent({ ...DEFAULT_HOME_CONTENT, ...res.data.sections });
      setLoaded(true);
    });
  }, []);

  const updateSection = <K extends keyof HomeContent>(section: K, value: HomeContent[K]) => {
    setContent(prev => ({ ...prev, [section]: value }));
  };

  const updateNested = <S extends keyof HomeContent, K extends keyof HomeContent[S]>(
    section: S, key: K, value: HomeContent[S][K]
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...(prev[section] as object), [key]: value },
    }));
  };

  const save = async () => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('pages_content').upsert({
      slug: 'home',
      title: 'Home',
      sections: content,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Home Page Editor" badge="PAGE CONTENT" liveUrl="/">
      {/* HERO */}
      <SectionCard title="Hero Section" badge="SHEET 01">
        <TextField label="Badge / Sheet Tag" value={content.hero.badge} onChange={v => updateNested('hero', 'badge', v)} />
        <TextField label="Headline (use <em>word</em> for italic highlight)" value={content.hero.heading} onChange={v => updateNested('hero', 'heading', v)} hint="HTML allowed: use <em> for the green italic word" />
        <TextAreaField label="Lead Paragraph" value={content.hero.lede} onChange={v => updateNested('hero', 'lede', v)} rows={3} />
        <Divider />
        <TwoCol>
          <TextField label="Primary CTA Label" value={content.hero.cta_primary_label} onChange={v => updateNested('hero', 'cta_primary_label', v)} />
          <TextField label="Primary CTA Link" value={content.hero.cta_primary_href} onChange={v => updateNested('hero', 'cta_primary_href', v)} />
        </TwoCol>
        <TwoCol>
          <TextField label="Secondary CTA Label" value={content.hero.cta_secondary_label} onChange={v => updateNested('hero', 'cta_secondary_label', v)} />
          <TextField label="Secondary CTA Link" value={content.hero.cta_secondary_href} onChange={v => updateNested('hero', 'cta_secondary_href', v)} />
        </TwoCol>
      </SectionCard>

      {/* SPEC STRIP */}
      <SectionCard title="Spec Strip (4 metrics below hero)" badge="STRIP" defaultOpen={false}>
        <ListEditor
          label="Strip Items"
          items={content.spec_strip as { label: string; value: string }[]}
          fields={[
            { key: 'label', label: 'Bold Label (e.g. Practice)' },
            { key: 'value', label: 'Value (e.g. Since 2019)' },
          ]}
          onChange={v => updateSection('spec_strip', v as HomeContent['spec_strip'])}
          addLabel="Add Strip Item"
        />
      </SectionCard>

      {/* CLIENTS */}
      <SectionCard title="Client Marquee" badge="SHEET — CLIENTS" defaultOpen={false}>
        <TextField label="Badge Text" value={content.clients.badge} onChange={v => updateNested('clients', 'badge', v)} />
        <Divider />
        <ListEditor
          label="Client Names (displayed in scrolling marquee)"
          items={(content.clients.items as string[]).map(name => ({ name }))}
          fields={[{ key: 'name', label: 'Client Name' }]}
          onChange={v => updateSection('clients', { ...content.clients, items: (v as { name: string }[]).map(i => i.name) })}
          addLabel="Add Client"
        />
      </SectionCard>

      {/* SERVICES */}
      <SectionCard title="Services Index (6 cards)" badge="SHEET 02">
        <TwoCol>
          <TextField label="Badge / Sheet Tag" value={content.services_section.badge} onChange={v => updateNested('services_section', 'badge', v)} />
          <TextField label="View All Link Label" value={content.services_section.view_all_label} onChange={v => updateNested('services_section', 'view_all_label', v)} />
        </TwoCol>
        <TextField label="Section Heading" value={content.services_section.heading} onChange={v => updateNested('services_section', 'heading', v)} />
        <Divider />
        <ListEditor
          label="Service Cards"
          items={content.services_section.items as { no: string; title: string; desc: string; href: string }[]}
          fields={[
            { key: 'no', label: 'Number (e.g. 01)' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
            { key: 'href', label: 'Link URL' },
          ]}
          onChange={v => updateSection('services_section', { ...content.services_section, items: v as HomeContent['services_section']['items'] })}
          addLabel="Add Service Card"
        />
      </SectionCard>

      {/* WORK */}
      <SectionCard title="Selected Work Section" badge="SHEET 03" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.work_section.badge} onChange={v => updateNested('work_section', 'badge', v)} />
          <TextField label="View All Label" value={content.work_section.view_all_label} onChange={v => updateNested('work_section', 'view_all_label', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.work_section.heading} onChange={v => updateNested('work_section', 'heading', v)} />
        <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace', padding: '10px', background: 'rgba(200,165,91,0.08)', borderRadius: '2px' }}>
          ℹ Featured projects are pulled from the Projects database. Edit them in <a href="/admin/projects" style={{ color: '#7FA65C' }}>Admin → Projects</a> and toggle "Featured" on 3 projects.
        </div>
      </SectionCard>

      {/* METHOD */}
      <SectionCard title="Method Section (6 checklist items)" badge="SHEET 04" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.method_section.badge} onChange={v => updateNested('method_section', 'badge', v)} />
        </TwoCol>
        <TextField label="Heading" value={content.method_section.heading} onChange={v => updateNested('method_section', 'heading', v)} />
        <TextAreaField label="Lead Paragraph" value={content.method_section.lede} onChange={v => updateNested('method_section', 'lede', v)} rows={2} />
        <Divider />
        <ListEditor
          label="Method Checklist Items"
          items={content.method_section.items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => updateSection('method_section', { ...content.method_section, items: v as HomeContent['method_section']['items'] })}
          addLabel="Add Item"
        />
      </SectionCard>

      {/* PROCESS */}
      <SectionCard title="Process Section (4 stages)" badge="SHEET 05" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.process_section.badge} onChange={v => updateNested('process_section', 'badge', v)} />
          <TextField label="Heading" value={content.process_section.heading} onChange={v => updateNested('process_section', 'heading', v)} />
        </TwoCol>
        <Divider />
        <ListEditor
          label="Process Stages"
          items={content.process_section.items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Stage Number (e.g. 01 / Understand)' },
            { key: 'title', label: 'Stage Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => updateSection('process_section', { ...content.process_section, items: v as HomeContent['process_section']['items'] })}
          addLabel="Add Stage"
        />
      </SectionCard>

      {/* QUOTES */}
      <SectionCard title="References / Testimonials Section" badge="SHEET 06" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.quotes_section.badge} onChange={v => updateNested('quotes_section', 'badge', v)} />
          <TextField label="Heading" value={content.quotes_section.heading} onChange={v => updateNested('quotes_section', 'heading', v)} />
        </TwoCol>
        <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace', padding: '10px', background: 'rgba(200,165,91,0.08)', borderRadius: '2px' }}>
          ℹ Testimonials are pulled from the Testimonials database. Edit them in <a href="/admin/testimonials" style={{ color: '#7FA65C' }}>Admin → Testimonials</a>.
        </div>
      </SectionCard>

      {/* CLOSING CTA */}
      <SectionCard title="Closing CTA (Sheet 07)" badge="CLOSING" defaultOpen={false}>
        <TwoCol>
          <TextField label="Badge" value={content.closing.badge} onChange={v => updateNested('closing', 'badge', v)} />
          <TextField label="Background Image Path" value={content.closing.bg_image} onChange={v => updateNested('closing', 'bg_image', v)} placeholder="/cta_bg.jpg" />
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
