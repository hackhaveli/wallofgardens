'use client';
import { useState } from 'react';

// ==========================================
// Reusable Admin UI Components
// ==========================================

interface AdminPageWrapperProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  liveUrl?: string;
}

export function AdminPageWrapper({ title, badge, children, liveUrl }: AdminPageWrapperProps) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: '1100px' }}>
      <div style={{ marginBottom: '36px' }}>
        {badge && (
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '10px' }}>
            {badge}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#0e1811', margin: 0, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '-0.5px' }}>
            {title}
          </h1>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              style={{ fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              ↗ View Live
            </a>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

// ==========================================
// Section Card with collapsible header
// ==========================================

interface SectionCardProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SectionCard({ title, badge, children, defaultOpen = true }: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(14,24,17,0.1)',
      borderRadius: '2px',
      marginBottom: '16px',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          background: 'rgba(14,24,17,0.02)',
          border: 'none',
          borderBottom: open ? '1px solid rgba(14,24,17,0.08)' : 'none',
          cursor: 'pointer',
          fontFamily: 'IBM Plex Mono, monospace',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {badge && (
            <span style={{ fontSize: '9px', letterSpacing: '2px', color: '#C8A55B', textTransform: 'uppercase' }}>
              {badge}
            </span>
          )}
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0e1811', letterSpacing: '0.2px' }}>
            {title}
          </span>
        </div>
        <span style={{ color: 'rgba(14,24,17,0.4)', fontSize: '16px', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          ▾
        </span>
      </button>
      {open && <div style={{ padding: '20px' }}>{children}</div>}
    </div>
  );
}

// ==========================================
// Field: Text Input
// ==========================================

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
  type?: string;
}

export function TextField({ label, value, onChange, placeholder, hint, type = 'text' }: FieldProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '6px' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: '#F9F8F5',
          border: '1px solid rgba(14,24,17,0.15)',
          borderRadius: '2px',
          padding: '10px 12px',
          fontSize: '13px',
          fontFamily: 'IBM Plex Mono, monospace',
          color: '#0e1811',
          outline: 'none',
          boxSizing: 'border-box',
        }}
        onFocus={e => (e.target.style.borderColor = '#7FA65C')}
        onBlur={e => (e.target.style.borderColor = 'rgba(14,24,17,0.15)')}
      />
      {hint && (
        <div style={{ fontSize: '10px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', marginTop: '4px' }}>{hint}</div>
      )}
    </div>
  );
}

// ==========================================
// Field: Textarea
// ==========================================

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}

export function TextAreaField({ label, value, onChange, placeholder, rows = 4, hint }: TextAreaFieldProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '6px' }}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: '100%',
          background: '#F9F8F5',
          border: '1px solid rgba(14,24,17,0.15)',
          borderRadius: '2px',
          padding: '10px 12px',
          fontSize: '13px',
          fontFamily: 'IBM Plex Mono, monospace',
          color: '#0e1811',
          outline: 'none',
          boxSizing: 'border-box',
          resize: 'vertical',
          lineHeight: '1.6',
        }}
        onFocus={e => (e.target.style.borderColor = '#7FA65C')}
        onBlur={e => (e.target.style.borderColor = 'rgba(14,24,17,0.15)')}
      />
      {hint && (
        <div style={{ fontSize: '10px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace', marginTop: '4px' }}>{hint}</div>
      )}
    </div>
  );
}

// ==========================================
// Two Column Grid
// ==========================================

export function TwoCol({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      {children}
    </div>
  );
}

// ==========================================
// Save Button with state
// ==========================================

interface SaveButtonProps {
  onSave: () => Promise<void>;
  label?: string;
}

export function SaveButton({ onSave, label = 'Save Changes' }: SaveButtonProps) {
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const handleClick = async () => {
    setState('saving');
    try {
      await onSave();
      setState('saved');
      setTimeout(() => setState('idle'), 2500);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 3000);
    }
  };

  const configs = {
    idle: { bg: '#0e1811', text: '#F4F3EC', label },
    saving: { bg: 'rgba(14,24,17,0.5)', text: '#F4F3EC', label: 'Saving...' },
    saved: { bg: '#7FA65C', text: '#0e1811', label: '✓ Saved' },
    error: { bg: '#B4763C', text: '#F4F3EC', label: '✗ Error — Try Again' },
  };
  const cfg = configs[state];

  return (
    <button
      onClick={handleClick}
      disabled={state === 'saving'}
      style={{
        background: cfg.bg,
        color: cfg.text,
        border: 'none',
        borderRadius: '2px',
        padding: '12px 24px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        cursor: state === 'saving' ? 'not-allowed' : 'pointer',
        fontFamily: 'IBM Plex Mono, monospace',
        transition: 'all 0.2s',
      }}
    >
      {cfg.label}
    </button>
  );
}

// ==========================================
// List Item Editor (for repeating items)
// ==========================================

interface ListItem {
  [key: string]: string;
}

interface ListEditorProps {
  label: string;
  items: ListItem[];
  fields: { key: string; label: string; type?: 'text' | 'textarea' }[];
  onChange: (items: ListItem[]) => void;
  addLabel?: string;
  canReorder?: boolean;
}

export function ListEditor({ label, items, fields, onChange, addLabel = 'Add Item', canReorder = true }: ListEditorProps) {
  const addItem = () => {
    const newItem: ListItem = {};
    fields.forEach(f => { newItem[f.key] = ''; });
    onChange([...items, newItem]);
  };

  const removeItem = (idx: number) => {
    onChange(items.filter((_, i) => i !== idx));
  };

  const updateItem = (idx: number, key: string, value: string) => {
    const next = [...items];
    next[idx] = { ...next[idx], [key]: value };
    onChange(next);
  };

  const moveItem = (idx: number, dir: -1 | 1) => {
    const next = [...items];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  };

  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(14,24,17,0.55)', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '12px' }}>
        {label}
      </div>
      {items.map((item, idx) => (
        <div key={idx} style={{
          background: '#F9F8F5',
          border: '1px solid rgba(14,24,17,0.1)',
          borderRadius: '2px',
          padding: '16px',
          marginBottom: '10px',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace' }}>
              ITEM {idx + 1}
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {canReorder && (
                <>
                  <button onClick={() => moveItem(idx, -1)} disabled={idx === 0} style={smallBtnStyle}>↑</button>
                  <button onClick={() => moveItem(idx, 1)} disabled={idx === items.length - 1} style={smallBtnStyle}>↓</button>
                </>
              )}
              <button onClick={() => removeItem(idx)} style={{ ...smallBtnStyle, color: '#B4763C' }}>✕</button>
            </div>
          </div>
          {fields.map(f => (
            f.type === 'textarea' ? (
              <TextAreaField
                key={f.key}
                label={f.label}
                value={item[f.key] || ''}
                onChange={v => updateItem(idx, f.key, v)}
                rows={3}
              />
            ) : (
              <TextField
                key={f.key}
                label={f.label}
                value={item[f.key] || ''}
                onChange={v => updateItem(idx, f.key, v)}
              />
            )
          ))}
        </div>
      ))}
      <button
        onClick={addItem}
        style={{
          background: 'none',
          border: '1px dashed rgba(127,166,92,0.5)',
          borderRadius: '2px',
          padding: '10px 16px',
          fontSize: '11px',
          color: '#7FA65C',
          cursor: 'pointer',
          fontFamily: 'IBM Plex Mono, monospace',
          width: '100%',
          textAlign: 'center',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        + {addLabel}
      </button>
    </div>
  );
}

const smallBtnStyle: React.CSSProperties = {
  background: 'rgba(14,24,17,0.05)',
  border: '1px solid rgba(14,24,17,0.12)',
  borderRadius: '2px',
  width: '26px',
  height: '26px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'rgba(14,24,17,0.6)',
  fontFamily: 'IBM Plex Mono, monospace',
};

// ==========================================
// Divider
// ==========================================

export function Divider() {
  return <div style={{ height: '1px', background: 'rgba(14,24,17,0.08)', margin: '20px 0' }} />;
}

// ==========================================
// Section label
// ==========================================

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '9px', letterSpacing: '2.5px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', marginBottom: '16px', marginTop: '4px' }}>
      {children}
    </div>
  );
}

// ==========================================
// Toggle / Checkbox Field
// ==========================================

interface ToggleFieldProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
}

export function ToggleField({ label, value, onChange, hint }: ToggleFieldProps) {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <button
        onClick={() => onChange(!value)}
        style={{
          width: '44px',
          height: '24px',
          borderRadius: '12px',
          border: 'none',
          background: value ? '#7FA65C' : 'rgba(14,24,17,0.15)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
      >
        <div style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#fff',
          position: 'absolute',
          top: '3px',
          left: value ? '23px' : '3px',
          transition: 'left 0.2s',
        }} />
      </button>
      <div>
        <div style={{ fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace', color: '#0e1811' }}>{label}</div>
        {hint && <div style={{ fontSize: '10px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace' }}>{hint}</div>}
      </div>
    </div>
  );
}
