'use client';
import { useState, useEffect, useCallback } from 'react';
import { getSupabaseClient } from '../../../lib/supabase';
import { DEFAULT_PROJECTS } from '../../../lib/content-defaults';
import {
  AdminPageWrapper, SectionCard, TextField, TextAreaField, TwoCol,
  SaveButton, ToggleField, Divider,
} from '../components/AdminUI';

type Project = typeof DEFAULT_PROJECTS[0];

const STATUS_OPTIONS = ['Completed', 'Ongoing maintenance', 'In progress', 'On hold'];
const TYPE_OPTIONS = ['Corporate Landscaping', 'Vertical Garden', 'Terrace Garden', 'Balcony Garden', 'Moss Wall', 'Corporate Plantscaping'];

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const load = useCallback(async () => {
    const supabase = getSupabaseClient();
    const { data } = await supabase.from('projects').select('*').order('order_index', { ascending: true });
    setProjects(data || DEFAULT_PROJECTS);
    setLoaded(true);
  }, []);

  useEffect(() => { load(); }, [load]);

  const startNew = () => {
    const maxOrder = Math.max(0, ...projects.map(p => p.order_index));
    setEditing({
      id: `P-${String(projects.length + 1).padStart(2, '0')}`,
      name: '',
      location: '',
      type: 'Vertical Garden',
      area: '',
      status: 'Completed',
      img: '',
      alt: '',
      order_index: maxOrder + 1,
      featured: false,
      description: '',
    });
    setIsNew(true);
  };

  const saveProject = async () => {
    if (!editing) return;
    setSaving(true);
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('projects').upsert({ ...editing, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) { alert('Error saving: ' + error.message); return; }
    setEditing(null);
    setIsNew(false);
    await load();
  };

  const deleteProject = async (id: string) => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) { alert('Error deleting: ' + error.message); return; }
    setDeleteConfirm(null);
    await load();
  };

  const moveProject = async (idx: number, dir: -1 | 1) => {
    const next = [...projects];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[idx].order_index;
    next[idx] = { ...next[idx], order_index: next[target].order_index };
    next[target] = { ...next[target], order_index: tmp };
    setProjects(next);
    const supabase = getSupabaseClient();
    await Promise.all([
      supabase.from('projects').update({ order_index: next[idx].order_index }).eq('id', next[idx].id),
      supabase.from('projects').update({ order_index: next[target].order_index }).eq('id', next[target].id),
    ]);
  };

  if (!loaded) return <div style={{ padding: 40, fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(14,24,17,0.4)' }}>Loading...</div>;

  if (editing) {
    return (
      <AdminPageWrapper title={isNew ? 'New Project' : `Edit: ${editing.name}`} badge="PROJECT EDITOR" liveUrl="/projects">
        <SectionCard title="Project Details">
          <TwoCol>
            <TextField label="Project ID (e.g. P-01)" value={editing.id} onChange={v => setEditing(e => e && { ...e, id: v })} />
            <TextField label="Project Name" value={editing.name} onChange={v => setEditing(e => e && { ...e, name: v })} />
          </TwoCol>
          <TwoCol>
            <TextField label="Location" value={editing.location} onChange={v => setEditing(e => e && { ...e, location: v })} placeholder="Gurugram, Haryana" />
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '6px' }}>Project Type</label>
              <select value={editing.type} onChange={e => setEditing(ed => ed && { ...ed, type: e.target.value })}
                style={{ width: '100%', background: '#F9F8F5', border: '1px solid rgba(14,24,17,0.15)', borderRadius: '2px', padding: '10px 12px', fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace', color: '#0e1811', outline: 'none', boxSizing: 'border-box' }}>
                {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </TwoCol>
          <TwoCol>
            <TextField label="Scale / Area" value={editing.area} onChange={v => setEditing(e => e && { ...e, area: v })} placeholder="4,200 sq ft" />
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '6px' }}>Status</label>
              <select value={editing.status} onChange={e => setEditing(ed => ed && { ...ed, status: e.target.value })}
                style={{ width: '100%', background: '#F9F8F5', border: '1px solid rgba(14,24,17,0.15)', borderRadius: '2px', padding: '10px 12px', fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace', color: '#0e1811', outline: 'none', boxSizing: 'border-box' }}>
                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </TwoCol>
          <TextAreaField label="Short Description" value={editing.description || ''} onChange={v => setEditing(e => e && { ...e, description: v })} rows={2} />
        </SectionCard>

        <SectionCard title="Image & Display">
          <TextField label="Image URL / Path" value={editing.img} onChange={v => setEditing(e => e && { ...e, img: v })} placeholder="/project_01.jpg" hint="Use /filename.jpg for images in /public folder" />
          <TextField label="Image Alt Text" value={editing.alt} onChange={v => setEditing(e => e && { ...e, alt: v })} />
          {editing.img && (
            <div style={{ width: '100%', height: 160, background: '#F0EFE9', borderRadius: '2px', overflow: 'hidden', marginBottom: '16px', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={editing.img} alt={editing.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
            </div>
          )}
          <Divider />
          <TwoCol>
            <TextField label="Display Order" value={String(editing.order_index)} onChange={v => setEditing(e => e && { ...e, order_index: parseInt(v) || 0 })} type="number" />
          </TwoCol>
          <ToggleField
            label="Featured on Home Page"
            value={editing.featured}
            onChange={v => setEditing(e => e && { ...e, featured: v })}
            hint="Featured projects appear in the Home Page Selected Work section"
          />
        </SectionCard>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={() => { setEditing(null); setIsNew(false); }}
            style={{ background: 'none', border: '1px solid rgba(14,24,17,0.2)', borderRadius: '2px', padding: '10px 20px', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(14,24,17,0.6)' }}
          >
            ← Back
          </button>
          <SaveButton onSave={saveProject} label={saving ? 'Saving...' : 'Save Project'} />
        </div>
      </AdminPageWrapper>
    );
  }

  return (
    <AdminPageWrapper title="Projects Manager" badge="PORTFOLIO" liveUrl="/projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: 'rgba(14,24,17,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>
          {projects.length} projects total · {projects.filter(p => p.featured).length} featured
        </div>
        <button
          onClick={startNew}
          style={{ background: '#0e1811', color: '#F4F3EC', border: 'none', borderRadius: '2px', padding: '10px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace' }}
        >
          + New Project
        </button>
      </div>

      <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
        {projects.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
            No projects yet. Click &ldquo;New Project&rdquo; or Initialize Database from the Dashboard.
          </div>
        ) : (
          projects.map((project, idx) => (
            <div key={project.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 16px',
              borderBottom: idx < projects.length - 1 ? '1px solid rgba(14,24,17,0.06)' : 'none',
              transition: 'background 0.1s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(127,166,92,0.04)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              {/* Thumbnail */}
              <div style={{ width: '56px', height: '40px', background: '#F0EFE9', borderRadius: '2px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                {project.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.img} alt={project.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
                )}
              </div>
              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', minWidth: '40px' }}>{project.id}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.name}</span>
                  {project.featured && <span style={{ fontSize: '9px', background: '#7FA65C', color: '#0e1811', padding: '2px 6px', borderRadius: '1px', letterSpacing: '1px', fontFamily: 'IBM Plex Mono, monospace' }}>FEATURED</span>}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.45)', fontFamily: 'IBM Plex Mono, monospace', marginTop: '2px' }}>
                  {project.type} · {project.location} · {project.area}
                </div>
              </div>
              {/* Status */}
              <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', minWidth: '120px', textAlign: 'right' }}>
                {project.status}
              </div>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <button onClick={() => moveProject(idx, -1)} disabled={idx === 0} style={actionBtnStyle} title="Move up">↑</button>
                <button onClick={() => moveProject(idx, 1)} disabled={idx === projects.length - 1} style={actionBtnStyle} title="Move down">↓</button>
                <button onClick={() => { setEditing(project); setIsNew(false); }} style={actionBtnStyle} title="Edit">✎</button>
                {deleteConfirm === project.id ? (
                  <>
                    <button onClick={() => deleteProject(project.id)} style={{ ...actionBtnStyle, background: 'rgba(180,118,60,0.15)', color: '#B4763C', borderColor: 'rgba(180,118,60,0.4)' }}>✓ Delete</button>
                    <button onClick={() => setDeleteConfirm(null)} style={actionBtnStyle}>✕</button>
                  </>
                ) : (
                  <button onClick={() => setDeleteConfirm(project.id)} style={{ ...actionBtnStyle, color: 'rgba(180,118,60,0.7)' }} title="Delete">🗑</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </AdminPageWrapper>
  );
}

const actionBtnStyle: React.CSSProperties = {
  background: 'rgba(14,24,17,0.04)',
  border: '1px solid rgba(14,24,17,0.12)',
  borderRadius: '2px',
  padding: '6px 10px',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'rgba(14,24,17,0.6)',
  fontFamily: 'IBM Plex Mono, monospace',
};
