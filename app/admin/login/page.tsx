'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Invalid password. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0e1811 0%, #1a2e1a 50%, #0e1811 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'IBM Plex Mono', monospace",
      padding: '20px',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(127,166,92,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(127,166,92,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{
        background: 'rgba(244,243,236,0.03)',
        border: '1px solid rgba(127,166,92,0.2)',
        borderRadius: '2px',
        padding: '52px 48px',
        width: '100%',
        maxWidth: '420px',
        position: 'relative',
      }}>
        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '2px solid #C8A55B', borderLeft: '2px solid #C8A55B' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: '2px solid #C8A55B', borderRight: '2px solid #C8A55B' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: '2px solid #C8A55B', borderLeft: '2px solid #C8A55B' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: '2px solid #C8A55B', borderRight: '2px solid #C8A55B' }} />

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C8A55B', textTransform: 'uppercase', marginBottom: '16px' }}>
            Wall of Gardens
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#F4F3EC', letterSpacing: '-0.5px', fontFamily: 'inherit' }}>
            Admin Console
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(244,243,236,0.4)', marginTop: '8px', letterSpacing: '1px' }}>
            RESTRICTED ACCESS
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '2px', color: 'rgba(244,243,236,0.55)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoFocus
              style={{
                width: '100%',
                background: 'rgba(127,166,92,0.06)',
                border: '1px solid rgba(127,166,92,0.25)',
                borderRadius: '2px',
                padding: '14px 16px',
                color: '#F4F3EC',
                fontSize: '14px',
                fontFamily: 'IBM Plex Mono, monospace',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = '#7FA65C')}
              onBlur={e => (e.target.style.borderColor = 'rgba(127,166,92,0.25)')}
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(180,118,60,0.12)',
              border: '1px solid rgba(180,118,60,0.4)',
              borderRadius: '2px',
              padding: '10px 14px',
              marginBottom: '20px',
              fontSize: '12px',
              color: '#C8A55B',
              letterSpacing: '0.3px',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'rgba(127,166,92,0.3)' : '#7FA65C',
              color: '#0e1811',
              border: 'none',
              borderRadius: '2px',
              padding: '14px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'IBM Plex Mono, monospace',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'VERIFYING...' : 'ACCESS CONSOLE →'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '10px', color: 'rgba(244,243,236,0.25)', letterSpacing: '0.5px' }}>
          Wall of Gardens · Private Limited · 2026
        </div>
      </div>
    </div>
  );
}
