'use client';
import { useState, useEffect, useCallback } from 'react';
import { getSupabaseClient } from '../../../lib/supabase';
import { DEFAULT_TESTIMONIALS } from '../../../lib/content-defaults';
import {
  AdminPageWrapper, TextField, TextAreaField, TwoCol,
  ToggleField, Divider,
} from '../components/AdminUI';

type Testimonial = typeof DEFAULT_TESTIMONIALS[0];

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const load = useCallback(async () => {
    const supabase = getSupabaseClient();
    const { data } = await supabase.from('testimonials').select('*').order('order_index', { ascending: true });
    setTestimonials(data || DEFAULT_TESTIMONIALS);
    setLoaded(true);
  }, []);

  useEffect(() => { load(); }, [load]);

  const startNew = () => {
    const maxOrder = Math.max(0, ...testimonials.map(t => t.order_index));
    setEditing({ id: `T-${String(testimonials.length + 1).padStart(2, '0')}`, quote: '', author: '', service: '', order_index: maxOrder + 1, active: true });
    setIsNew(true);
  };

  const saveTestimonial = async () => {
    if (!editing) return;
    setSaving(true);
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('testimonials').upsert({ ...editing, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) { alert('Error: ' + error.message); return; }
    setEditing(null);
    setIsNew(false);
    await load();
  };

  const deleteTestimonial = async (id: string) => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (error) { alert('Error: ' + error.message); return; }
    setDeleteConfirm(null);
    await load();
  };

  const moveItem = async (idx: number, dir: -1 | 1) => {
    const next = [...testimonials];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[idx].order_index;
    next[idx] = { ...next[idx], order_index: next[target].order_index };
    next[target] = { ...next[target], order_index: tmp };
    setTestimonials(next);
    const supabase = getSupabaseClient();
    await Promise.all([
      supabase.from('testimonials').update({ order_index: next[idx].order_index }).eq('id', next[idx].id),
      supabase.from('testimonials').update({ order_index: next[target].order_index }).eq('id', next[target].id),
    ]);
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  if (editing) {
    return (
      <div style={{ padding: '40px 48px', maxWidth: '800px' }}>
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '10px' }}>TESTIMONIAL EDITOR</div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0e1811', margin: 0, fontFamily: 'IBM Plex Mono, monospace' }}>
            {isNew ? 'New Testimonial' : `Edit: ${editing.author}`}
          </h1>
        </div>

        <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', padding: '24px', marginBottom: '16px' }}>
          <TwoCol>
            <TextField label="ID" value={editing.id} onChange={v => setEditing(e => e && { ...e, id: v })} placeholder="T-01" />
            <TextField label="Author Name" value={editing.author} onChange={v => setEditing(e => e && { ...e, author: v })} />
          </TwoCol>
          <TextField label="Service / Context (e.g. Terrace Garden)" value={editing.service || ''} onChange={v => setEditing(e => e && { ...e, service: v })} />
          <TextAreaField label="Quote (the testimonial text)" value={editing.quote} onChange={v => setEditing(e => e && { ...e, quote: v })} rows={4} />
          <Divider />
          <TwoCol>
            <TextField label="Display Order" value={String(editing.order_index)} onChange={v => setEditing(e => e && { ...e, order_index: parseInt(v) || 0 })} type="number" />
          </TwoCol>
          <ToggleField
            label="Active (show on site)"
            value={editing.active}
            onChange={v => setEditing(e => e && { ...e, active: v })}
          />

          {/* Preview */}
          <Divider />
          <div style={{ fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '12px' }}>Preview</div>
          <div style={{ background: '#F9F8F5', border: '1px solid rgba(14,24,17,0.08)', borderRadius: '2px', padding: '20px 24px' }}>
            {editing.quote && (
              <div style={{ fontSize: '14px', color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.7', marginBottom: '12px', fontStyle: 'italic' }}>
                &ldquo;{editing.quote}&rdquo;
              </div>
            )}
            {editing.author && (
              <div style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600 }}>
                — {editing.author}{editing.service ? `, ${editing.service}` : ''}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={() => { setEditing(null); setIsNew(false); }}
            style={{ background: 'none', border: '1px solid rgba(14,24,17,0.2)', borderRadius: '2px', padding: '10px 20px', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(14,24,17,0.6)' }}
          >
            ← Back
          </button>
          <button
            onClick={saveTestimonial}
            disabled={saving}
            style={{ background: '#0e1811', color: '#F4F3EC', border: 'none', borderRadius: '2px', padding: '12px 24px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace' }}
          >
            {saving ? 'Saving...' : 'Save Testimonial'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <AdminPageWrapper title="Testimonials Manager" badge="REFERENCES" liveUrl="/#references">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>
          {testimonials.length} total · {testimonials.filter(t => t.active).length} active
        </div>
        <button
          onClick={startNew}
          style={{ background: '#0e1811', color: '#F4F3EC', border: 'none', borderRadius: '2px', padding: '10px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace' }}
        >
          + New Testimonial
        </button>
      </div>

      <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
        {testimonials.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
            No testimonials yet. Initialize Database from Dashboard first.
          </div>
        ) : (
          testimonials.map((t, idx) => (
            <div key={t.id} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '16px',
              borderBottom: idx < testimonials.length - 1 ? '1px solid rgba(14,24,17,0.06)' : 'none',
              transition: 'background 0.1s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(127,166,92,0.04)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace' }}>{t.author}</span>
                  {t.service && <span style={{ fontSize: '10px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace' }}>{t.service}</span>}
                  {!t.active && <span style={{ fontSize: '9px', background: 'rgba(180,118,60,0.15)', color: '#B4763C', padding: '2px 6px', borderRadius: '1px', letterSpacing: '1px', fontFamily: 'IBM Plex Mono, monospace' }}>HIDDEN</span>}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(14,24,17,0.7)', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.6', fontStyle: 'italic' }}>
                  &ldquo;{t.quote.substring(0, 120)}{t.quote.length > 120 ? '...' : ''}&rdquo;
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <button onClick={() => moveItem(idx, -1)} disabled={idx === 0} style={btnStyle} title="Move up">↑</button>
                <button onClick={() => moveItem(idx, 1)} disabled={idx === testimonials.length - 1} style={btnStyle} title="Move down">↓</button>
                <button onClick={() => { setEditing(t); setIsNew(false); }} style={btnStyle}>✎</button>
                {deleteConfirm === t.id ? (
                  <>
                    <button onClick={() => deleteTestimonial(t.id)} style={{ ...btnStyle, background: 'rgba(180,118,60,0.15)', color: '#B4763C', borderColor: 'rgba(180,118,60,0.4)' }}>✓ Del</button>
                    <button onClick={() => setDeleteConfirm(null)} style={btnStyle}>✕</button>
                  </>
                ) : (
                  <button onClick={() => setDeleteConfirm(t.id)} style={{ ...btnStyle, color: 'rgba(180,118,60,0.7)' }}>🗑</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </AdminPageWrapper>
  );
}

const btnStyle: React.CSSProperties = {
  background: 'rgba(14,24,17,0.04)',
  border: '1px solid rgba(14,24,17,0.12)',
  borderRadius: '2px',
  padding: '6px 10px',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'rgba(14,24,17,0.6)',
  fontFamily: 'IBM Plex Mono, monospace',
};
