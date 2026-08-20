'use client';
import { useState, useEffect, useCallback } from 'react';
import { getSupabaseClient } from '../../../lib/supabase';
import { AdminPageWrapper } from '../components/AdminUI';

type Inquiry = {
  id: string;
  name: string | null;
  org: string | null;
  phone: string | null;
  email: string | null;
  service: string | null;
  location: string | null;
  message: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

const STATUS_OPTIONS = ['new', 'contacted', 'quoted', 'closed', 'spam'];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  new: { bg: 'rgba(127,166,92,0.15)', color: '#3E6B4A' },
  contacted: { bg: 'rgba(200,165,91,0.15)', color: '#A07530' },
  quoted: { bg: 'rgba(37,80,111,0.12)', color: '#25506F' },
  closed: { bg: 'rgba(14,24,17,0.08)', color: 'rgba(14,24,17,0.4)' },
  spam: { bg: 'rgba(180,118,60,0.12)', color: '#B4763C' },
};

export default function InquiriesInbox() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [notes, setNotes] = useState('');
  const [savingNotes, setSavingNotes] = useState(false);

  const load = useCallback(async () => {
    const supabase = getSupabaseClient();
    const { data } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    setInquiries(data || []);
    setLoaded(true);
  }, []);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (id: string, status: string) => {
    const supabase = getSupabaseClient();
    await supabase.from('inquiries').update({ status, updated_at: new Date().toISOString() }).eq('id', id);
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : prev);
  };

  const saveNotes = async () => {
    if (!selected) return;
    setSavingNotes(true);
    const supabase = getSupabaseClient();
    await supabase.from('inquiries').update({ admin_notes: notes, updated_at: new Date().toISOString() }).eq('id', selected.id);
    setSavingNotes(false);
    setInquiries(prev => prev.map(i => i.id === selected.id ? { ...i, admin_notes: notes } : i));
    setSelected(prev => prev ? { ...prev, admin_notes: notes } : prev);
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Delete this inquiry? This cannot be undone.')) return;
    const supabase = getSupabaseClient();
    await supabase.from('inquiries').delete().eq('id', id);
    setSelected(null);
    await load();
  };

  const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter);
  const counts = STATUS_OPTIONS.reduce((acc, s) => ({ ...acc, [s]: inquiries.filter(i => i.status === s).length }), {} as Record<string, number>);

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  return (
    <AdminPageWrapper title="Inquiries Inbox" badge={`${inquiries.filter(i => i.status === 'new').length} NEW INQUIRIES`}>
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['all', ...STATUS_OPTIONS].map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              background: filter === s ? '#0e1811' : '#fff',
              color: filter === s ? '#F4F3EC' : 'rgba(14,24,17,0.6)',
              border: `1px solid ${filter === s ? '#0e1811' : 'rgba(14,24,17,0.15)'}`,
              borderRadius: '2px',
              padding: '6px 14px',
              fontSize: '11px',
              fontFamily: 'IBM Plex Mono, monospace',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              textTransform: 'capitalize',
            }}
          >
            {s === 'all' ? `All (${inquiries.length})` : `${s} (${counts[s] || 0})`}
          </button>
        ))}
        <button
          onClick={load}
          style={{ marginLeft: 'auto', background: 'none', border: '1px solid rgba(14,24,17,0.15)', borderRadius: '2px', padding: '6px 14px', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer', color: 'rgba(14,24,17,0.5)' }}
        >
          ↻ Refresh
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 400px' : '1fr', gap: '16px' }}>
        {/* List */}
        <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
              {filter === 'all' ? 'No inquiries yet.' : `No "${filter}" inquiries.`}
            </div>
          ) : (
            filtered.map((inq, idx) => (
              <div
                key={inq.id}
                onClick={() => { setSelected(inq); setNotes(inq.admin_notes || ''); }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderBottom: idx < filtered.length - 1 ? '1px solid rgba(14,24,17,0.06)' : 'none',
                  cursor: 'pointer',
                  background: selected?.id === inq.id ? 'rgba(127,166,92,0.06)' : 'transparent',
                  borderLeft: selected?.id === inq.id ? '3px solid #7FA65C' : '3px solid transparent',
                  transition: 'all 0.1s',
                }}
                onMouseEnter={e => { if (selected?.id !== inq.id) (e.currentTarget as HTMLElement).style.background = 'rgba(14,24,17,0.02)'; }}
                onMouseLeave={e => { if (selected?.id !== inq.id) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace' }}>{inq.name || 'Unknown'}</span>
                    {inq.service && <span style={{ fontSize: '10px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>{inq.service}</span>}
                    <span style={{
                      fontSize: '9px',
                      padding: '2px 8px',
                      borderRadius: '1px',
                      fontFamily: 'IBM Plex Mono, monospace',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      ...STATUS_STYLES[inq.status] || {},
                    }}>
                      {inq.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '2px' }}>
                    {inq.phone || '—'} {inq.email ? `· ${inq.email}` : ''}
                  </div>
                  {inq.message && (
                    <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.6)', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.5', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {inq.message.substring(0, 80)}...
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(14,24,17,0.35)', fontFamily: 'IBM Plex Mono, monospace', flexShrink: 0, textAlign: 'right' }}>
                  {new Date(inq.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  <br />
                  {new Date(inq.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selected && (
          <div style={{
            background: '#fff',
            border: '1px solid rgba(14,24,17,0.1)',
            borderRadius: '2px',
            padding: '20px',
            position: 'sticky',
            top: '20px',
            height: 'fit-content',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace' }}>INQUIRY DETAIL</div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(14,24,17,0.4)', fontSize: '16px' }}>✕</button>
            </div>

            {/* Contact Info */}
            <div style={{ marginBottom: '16px' }}>
              {[
                ['Name', selected.name],
                ['Organisation', selected.org],
                ['Phone', selected.phone],
                ['Email', selected.email],
                ['Service', selected.service],
                ['Location', selected.location],
              ].filter(([, v]) => v).map(([k, v]) => (
                <div key={k} style={{ marginBottom: '8px' }}>
                  <div style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '2px' }}>{k}</div>
                  <div style={{ fontSize: '12px', color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace' }}>
                    {k === 'Phone' ? <a href={`tel:${v}`} style={{ color: '#7FA65C', textDecoration: 'none' }}>{v}</a>
                      : k === 'Email' ? <a href={`mailto:${v}`} style={{ color: '#7FA65C', textDecoration: 'none' }}>{v}</a>
                        : v}
                  </div>
                </div>
              ))}
            </div>

            {/* Message */}
            {selected.message && (
              <div style={{ marginBottom: '16px', padding: '12px', background: '#F9F8F5', borderRadius: '2px', border: '1px solid rgba(14,24,17,0.08)' }}>
                <div style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '8px' }}>Message</div>
                <div style={{ fontSize: '12px', color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{selected.message}</div>
              </div>
            )}

            {/* Status */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '8px' }}>Status</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {STATUS_OPTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => updateStatus(selected.id, s)}
                    style={{
                      background: selected.status === s ? '#0e1811' : 'rgba(14,24,17,0.05)',
                      color: selected.status === s ? '#F4F3EC' : 'rgba(14,24,17,0.6)',
                      border: `1px solid ${selected.status === s ? '#0e1811' : 'rgba(14,24,17,0.12)'}`,
                      borderRadius: '2px',
                      padding: '5px 12px',
                      fontSize: '10px',
                      fontFamily: 'IBM Plex Mono, monospace',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Admin Notes */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '8px' }}>Admin Notes</div>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Add internal notes..."
                rows={3}
                style={{ width: '100%', background: '#F9F8F5', border: '1px solid rgba(14,24,17,0.12)', borderRadius: '2px', padding: '10px', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace', color: '#0e1811', resize: 'vertical', boxSizing: 'border-box', outline: 'none' }}
              />
              <button
                onClick={saveNotes}
                disabled={savingNotes}
                style={{ marginTop: '8px', background: '#7FA65C', color: '#0e1811', border: 'none', borderRadius: '2px', padding: '8px 16px', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace' }}
              >
                {savingNotes ? 'Saving...' : 'Save Notes'}
              </button>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: '1px solid rgba(14,24,17,0.08)', paddingTop: '14px' }}>
              {selected.phone && (
                <a href={`tel:${selected.phone}`} style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none', padding: '6px 12px', border: '1px solid rgba(127,166,92,0.3)', borderRadius: '2px' }}>
                  ☏ Call
                </a>
              )}
              {selected.phone && (
                <a href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, '')}`} target="_blank" style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none', padding: '6px 12px', border: '1px solid rgba(127,166,92,0.3)', borderRadius: '2px' }}>
                  WhatsApp
                </a>
              )}
              {selected.email && (
                <a href={`mailto:${selected.email}`} style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none', padding: '6px 12px', border: '1px solid rgba(127,166,92,0.3)', borderRadius: '2px' }}>
                  Email
                </a>
              )}
              <button
                onClick={() => deleteInquiry(selected.id)}
                style={{ fontSize: '11px', color: '#B4763C', fontFamily: 'IBM Plex Mono, monospace', background: 'none', border: '1px solid rgba(180,118,60,0.3)', borderRadius: '2px', padding: '6px 12px', cursor: 'pointer', marginLeft: 'auto' }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminPageWrapper>
  );
}
