'use client';
import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../../lib/supabase';
import { InitDbButton } from './components/InitDbButton';

type InquirySummary = {
  id: string;
  status: string;
  name: string;
  service: string;
  created_at: string;
};

const STATUS_COLORS: Record<string, string> = {
  new: '#7FA65C',
  contacted: '#C8A55B',
  quoted: '#25506F',
  closed: 'rgba(14,24,17,0.4)',
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<{
    inquiries: InquirySummary[];
    projectCount: number;
    testimonialCount: number;
    newInquiriesCount: number;
  }>({
    inquiries: [],
    projectCount: 0,
    testimonialCount: 0,
    newInquiriesCount: 0,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    Promise.all([
      supabase.from('inquiries').select('id, status, name, service, created_at').order('created_at', { ascending: false }).limit(10),
      supabase.from('projects').select('id').limit(100),
      supabase.from('testimonials').select('id').limit(100),
    ]).then(([inquiriesRes, projectsRes, testimonialsRes]) => {
      const inqs: InquirySummary[] = inquiriesRes.data || [];
      const pCount: number = projectsRes.data?.length || 0;
      const tCount: number = testimonialsRes.data?.length || 0;
      const newCount = inqs.filter(i => i.status === 'new').length;

      setStats({
        inquiries: inqs,
        projectCount: pCount,
        testimonialCount: tCount,
        newInquiriesCount: newCount,
      });
      setLoaded(true);
    }).catch(() => {
      setLoaded(true);
    });
  }, []);

  const cards = [
    { label: 'New Inquiries', value: stats.newInquiriesCount, note: 'Awaiting response', href: '/admin/inquiries', color: '#7FA65C' },
    { label: 'Total Projects', value: stats.projectCount, note: 'In portfolio', href: '/admin/projects', color: '#C8A55B' },
    { label: 'Testimonials', value: stats.testimonialCount, note: 'Published', href: '/admin/testimonials', color: '#25506F' },
    { label: 'Pages', value: 11, note: 'Fully editable', href: '/admin/pages/home', color: '#B4763C' },
  ];

  const quickLinks = [
    { label: 'Global Settings', href: '/admin/settings', desc: 'Phone, email, logo, footer' },
    { label: 'Home Page', href: '/admin/pages/home', desc: 'Hero, services, work, CTA' },
    { label: 'Projects', href: '/admin/projects', desc: 'Add, edit, reorder portfolio' },
    { label: 'Inquiries Inbox', href: '/admin/inquiries', desc: 'Triage & manage leads' },
    { label: 'Testimonials', href: '/admin/testimonials', desc: 'Reviews & client quotes' },
    { label: 'Services Hub', href: '/admin/pages/services', desc: 'Matrix, sheets, CTA' },
  ];

  return (
    <div style={{ padding: '40px 48px', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '10px' }}>
          ADMIN CONSOLE — WALL OF GARDENS
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0e1811', margin: 0, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '-0.5px' }}>
          Dashboard
        </h1>
        <p style={{ color: 'rgba(14,24,17,0.55)', fontSize: '13px', marginTop: '8px', fontFamily: 'IBM Plex Mono, monospace' }}>
          Full control over every page, section, project and lead.
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '48px' }}>
        {cards.map(card => (
          <a key={card.label} href={card.href} style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(14,24,17,0.1)',
                borderTop: `3px solid ${card.color}`,
                borderRadius: '2px',
                padding: '24px',
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(14,24,17,0.1)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '6px' }}>
                {card.value}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '4px', letterSpacing: '0.3px' }}>
                {card.label}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace' }}>
                {card.note}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        {/* Recent Inquiries */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', margin: 0, letterSpacing: '0.3px' }}>
              Recent Inquiries
            </h2>
            <a href="/admin/inquiries" style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none' }}>
              View all →
            </a>
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            {!loaded ? (
              <div style={{ padding: '32px', textAlign: 'center', color: 'rgba(14,24,17,0.4)', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                Loading inquiries...
              </div>
            ) : stats.inquiries.length === 0 ? (
              <div style={{ padding: '32px', textAlign: 'center', color: 'rgba(14,24,17,0.4)', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                No inquiries yet. Initialize database first →<br />
                <a href="/admin/settings" style={{ color: '#7FA65C', textDecoration: 'none' }}>Admin Settings</a>
              </div>
            ) : (
              stats.inquiries.slice(0, 8).map((inq: InquirySummary, idx: number) => (
                <a
                  key={inq.id}
                  href={`/admin/inquiries`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderBottom: idx < stats.inquiries.length - 1 ? '1px solid rgba(14,24,17,0.06)' : 'none',
                    textDecoration: 'none',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(127,166,92,0.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: STATUS_COLORS[inq.status] || '#ccc',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {inq.name || 'Unknown'}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace' }}>
                      {inq.service || 'No service specified'}
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: 'rgba(14,24,17,0.35)', fontFamily: 'IBM Plex Mono, monospace', flexShrink: 0 }}>
                    {new Date(inq.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', margin: '0 0 16px', letterSpacing: '0.3px' }}>
            Quick Access
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {quickLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid rgba(14,24,17,0.1)',
                  borderRadius: '2px',
                  padding: '18px',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#7FA65C';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(127,166,92,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,24,17,0.1)';
                  (e.currentTarget as HTMLElement).style.background = '#fff';
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '4px' }}>
                  {link.label}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>
                  {link.desc}
                </div>
              </a>
            ))}
          </div>

          {/* Init DB Button */}
          <div
            style={{
              marginTop: '20px',
              background: 'rgba(127,166,92,0.08)',
              border: '1px solid rgba(127,166,92,0.3)',
              borderRadius: '2px',
              padding: '18px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#3E6B4A', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '6px' }}>
              First Time Setup
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.6)', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '12px' }}>
              Initialize the database with all current site content. Safe to run multiple times (upsert).
            </div>
            <InitDbButton />
          </div>
        </div>
      </div>
    </div>
  );
}
