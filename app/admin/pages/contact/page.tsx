'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../../../lib/supabase';
import { DEFAULT_CONTACT_CONTENT } from '../../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ListEditor, Divider,
} from '../../components/AdminUI';

type ContactContent = typeof DEFAULT_CONTACT_CONTENT;

export default function ContactPageEditor() {
  const [content, setContent] = useState<ContactContent>(DEFAULT_CONTACT_CONTENT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.from('pages_content').select('sections').eq('slug', 'contact').single().then((res: { data: any }) => {
      if (res.data?.sections) setContent({ ...DEFAULT_CONTACT_CONTENT, ...(res.data.sections as ContactContent) });
      setLoaded(true);
    });
  }, []);

  const update = <K extends keyof ContactContent>(key: K, value: ContactContent[K]) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const updateNested = <S extends keyof ContactContent, K extends keyof ContactContent[S]>(
    section: S, key: K, value: ContactContent[S][K]
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...(prev[section] as object), [key]: value },
    }));
  };

  const save = async () => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('pages_content').upsert({
      slug: 'contact',
      title: 'Contact',
      sections: content,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Contact Page Editor" badge="PAGE CONTENT" liveUrl="/contact">
      {/* Banner */}
      <SectionCard title="Page Banner">
        <TwoCol>
          <TextField label="Badge" value={content.banner.badge} onChange={v => updateNested('banner', 'badge', v)} />
          <TextField label="Breadcrumb" value={content.banner.breadcrumb} onChange={v => updateNested('banner', 'breadcrumb', v)} />
        </TwoCol>
        <TextField label="H1 Heading" value={content.banner.heading} onChange={v => updateNested('banner', 'heading', v)} />
        <TextAreaField label="Lead Paragraph" value={content.banner.lede} onChange={v => updateNested('banner', 'lede', v)} rows={2} />
      </SectionCard>

      {/* Direct Channels */}
      <SectionCard title="Direct Channels (Phone, Email, WhatsApp, Studio)" badge="CHANNELS">
        <ListEditor
          label="Contact Channels"
          items={content.channels as { key: string; value: string; note: string; href: string }[]}
          fields={[
            { key: 'key', label: 'Channel Label (e.g. Phone & WhatsApp)' },
            { key: 'value', label: 'Display Value (e.g. +91 99909 60669)' },
            { key: 'note', label: 'Note / Description', type: 'textarea' },
            { key: 'href', label: 'Link URL (tel:, mailto:, https:// or empty)' },
          ]}
          onChange={v => update('channels', v as ContactContent['channels'])}
          addLabel="Add Channel"
        />
      </SectionCard>

      {/* Brief Guide */}
      <SectionCard title="What to Send Guide (4 items)" badge="BRIEF GUIDE" defaultOpen={false}>
        <ListEditor
          label="Guide Steps"
          items={content.brief_items as { no: string; title: string; desc: string }[]}
          fields={[
            { key: 'no', label: 'Number (01)' },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description', type: 'textarea' },
          ]}
          onChange={v => update('brief_items', v as ContactContent['brief_items'])}
          addLabel="Add Guide Step"
        />
      </SectionCard>

      {/* Form Settings */}
      <SectionCard title="Contact Form Settings" badge="FORM CONFIG" defaultOpen={false}>
        <TextAreaField label="Form Banner Text" value={content.form.banner_text} onChange={v => updateNested('form', 'banner_text', v)} rows={2} />
        <TwoCol>
          <TextField label="Submit Button Label" value={content.form.submit_label} onChange={v => updateNested('form', 'submit_label', v)} />
        </TwoCol>
        <Divider />
        <TextField label="Success Heading (after submit)" value={content.form.success_heading} onChange={v => updateNested('form', 'success_heading', v)} />
        <TextAreaField label="Success Body Text" value={content.form.success_body} onChange={v => updateNested('form', 'success_body', v)} rows={2} />
        <Divider />
        <TextAreaField label="Form Disclaimer (Privacy Note)" value={content.form.disclaimer} onChange={v => updateNested('form', 'disclaimer', v)} rows={2} />
      </SectionCard>

      {/* FAQs */}
      <SectionCard title="FAQ Section" badge="FAQs" defaultOpen={false}>
        <ListEditor
          label="Frequently Asked Questions"
          items={content.faqs as { q: string; a: string }[]}
          fields={[
            { key: 'q', label: 'Question' },
            { key: 'a', label: 'Answer', type: 'textarea' },
          ]}
          onChange={v => update('faqs', v as ContactContent['faqs'])}
          addLabel="Add FAQ"
        />
      </SectionCard>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', flexWrap: 'wrap', gap: '12px' }}>
        <a
          href="/admin/inquiries"
          style={{ fontSize: '12px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none' }}
        >
          ◈ View Inquiries Inbox →
        </a>
        <SaveButton onSave={save} />
      </div>
    </AdminPageWrapper>
  );
}
