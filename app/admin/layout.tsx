'use client';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Auth is handled by middleware.ts - no need to check here

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'IBM Plex Mono', monospace" }}>
      <AdminSidebar />
      <main style={{
        flex: 1,
        marginLeft: '260px',
        background: '#F4F3EC',
        minHeight: '100vh',
        overflow: 'auto',
      }}>
        {children}
      </main>
    </div>
  );
}

function AdminSidebar() {
  const navSections = [
    {
      label: 'OVERVIEW',
      items: [
        { href: '/admin', icon: '⬛', label: 'Dashboard' },
        { href: '/admin/inquiries', icon: '◈', label: 'Inquiries' },
      ],
    },
    {
      label: 'CONTENT',
      items: [
        { href: '/admin/settings', icon: '◎', label: 'Global Settings' },
        { href: '/admin/pages/home', icon: '⬡', label: 'Home Page' },
        { href: '/admin/pages/services', icon: '⬢', label: 'Services Hub' },
        { href: '/admin/pages/studio', icon: '◇', label: 'Studio / About' },
        { href: '/admin/pages/contact', icon: '◉', label: 'Contact Page' },
      ],
    },
    {
      label: 'SERVICE PAGES',
      items: [
        { href: '/admin/pages/services/corporate-landscaping', icon: '01', label: 'Corporate Landscaping' },
        { href: '/admin/pages/services/vertical-gardens', icon: '02', label: 'Vertical Gardens' },
        { href: '/admin/pages/services/terrace-garden', icon: '03', label: 'Terrace Gardens' },
        { href: '/admin/pages/services/balcony-gardens', icon: '04', label: 'Balcony Gardens' },
        { href: '/admin/pages/services/moss-wall', icon: '05', label: 'Moss Walls' },
        { href: '/admin/pages/services/plantscaping', icon: '06', label: 'Plantscaping' },
      ],
    },
    {
      label: 'PROJECTS & MEDIA',
      items: [
        { href: '/admin/projects', icon: '▣', label: 'Projects' },
        { href: '/admin/testimonials', icon: '❝', label: 'Testimonials' },
        { href: '/admin/media', icon: '⊞', label: 'Media Library' },
      ],
    },
  ];

  return (
    <aside style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '260px',
      background: '#0e1811',
      borderRight: '1px solid rgba(127,166,92,0.15)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100,
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{
        padding: '24px 20px',
        borderBottom: '1px solid rgba(127,166,92,0.12)',
        flexShrink: 0,
      }}>
        <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C8A55B', textTransform: 'uppercase', marginBottom: '6px' }}>
          Wall of Gardens
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#F4F3EC', letterSpacing: '0.5px' }}>
          Admin Console
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
        {navSections.map(section => (
          <div key={section.label} style={{ marginBottom: '8px' }}>
            <div style={{
              fontSize: '9px',
              letterSpacing: '2.5px',
              color: 'rgba(244,243,236,0.3)',
              padding: '8px 20px 6px',
              textTransform: 'uppercase',
            }}>
              {section.label}
            </div>
            {section.items.map(item => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '9px 20px',
                  color: 'rgba(244,243,236,0.7)',
                  textDecoration: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.3px',
                  transition: 'all 0.15s',
                  borderLeft: '2px solid transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#F4F3EC';
                  (e.currentTarget as HTMLElement).style.borderLeftColor = '#7FA65C';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(127,166,92,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(244,243,236,0.7)';
                  (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: '11px', opacity: 0.6, minWidth: '16px', fontStyle: 'normal' }}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        ))}
      </nav>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(127,166,92,0.12)',
        padding: '16px 20px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <a
          href="/"
          target="_blank"
          style={{ fontSize: '11px', color: '#7FA65C', textDecoration: 'none', letterSpacing: '0.5px' }}
        >
          ↗ View Live Site
        </a>
        <AdminLogoutButton />
      </div>
    </aside>
  );
}

function AdminLogoutButton() {
  return (
    <form action="/api/admin/auth" method="POST" style={{ margin: 0 }}
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch('/api/admin/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'logout' }),
        });
        window.location.href = '/admin/login';
      }}
    >
      <button
        type="submit"
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(244,243,236,0.35)',
          fontSize: '11px',
          cursor: 'pointer',
          padding: 0,
          fontFamily: 'IBM Plex Mono, monospace',
          letterSpacing: '0.5px',
        }}
      >
        ← Logout
      </button>
    </form>
  );
}
