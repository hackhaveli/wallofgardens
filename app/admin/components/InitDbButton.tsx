'use client';
export function InitDbButton() {
  const handleInit = async () => {
    const btn = document.getElementById('init-db-btn') as HTMLButtonElement;
    if (btn) { btn.textContent = 'INITIALIZING...'; btn.disabled = true; }
    try {
      const res = await fetch('/api/admin/init-db', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        const errors = Object.entries(data.results).filter(([, v]) => String(v).startsWith('ERROR'));
        if (errors.length > 0) {
          alert(`Partially initialized. Some errors:\n${errors.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nPlease run the SQL schema in Supabase first.`);
        } else {
          alert('✅ Database initialized successfully! All content seeded from defaults.\n\nRefresh the page to see the stats.');
        }
      } else {
        alert('Error initializing database. Make sure you have run the SQL schema in Supabase.\n\nError: ' + data.error);
      }
    } catch (e) {
      alert('Network error: ' + e);
    } finally {
      if (btn) { btn.textContent = 'INITIALIZE DATABASE'; btn.disabled = false; }
    }
  };

  return (
    <button
      onClick={handleInit}
      id="init-db-btn"
      style={{
        background: '#7FA65C',
        color: '#0e1811',
        border: 'none',
        borderRadius: '2px',
        padding: '10px 18px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontFamily: 'IBM Plex Mono, monospace',
      }}
    >
      INITIALIZE DATABASE
    </button>
  );
}
