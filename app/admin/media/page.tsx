'use client';

export default function MediaLibraryPage() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: '900px' }}>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C8A55B', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '10px' }}>
          ASSETS
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#0e1811', margin: 0, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '-0.5px' }}>
          Media Library
        </h1>
      </div>

      <div style={{ background: '#fff', border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', padding: '32px' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '12px' }}>
          Image Management
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(14,24,17,0.6)', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.8', marginBottom: '24px' }}>
          Images for projects, service pages and CTA sections are served from the <code style={{ background: '#F0EFE9', padding: '2px 6px', borderRadius: '2px' }}>/public</code> folder of the Next.js project.
          <br /><br />
          To add or replace an image:
          <ol style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '8px' }}>
            <li>Place the image file in <code style={{ background: '#F0EFE9', padding: '2px 6px', borderRadius: '2px' }}>wallofgardens/public/</code></li>
            <li>Reference it in admin as <code style={{ background: '#F0EFE9', padding: '2px 6px', borderRadius: '2px' }}>/filename.jpg</code></li>
            <li>The Project editor shows a live preview once the path is saved</li>
          </ol>
        </div>

        <div style={{ fontSize: '12px', fontWeight: 600, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '10px' }}>
          Current Image Paths (referenced in content)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            ['/logo.png', 'Site Logo'],
            ['/cta_bg.jpg', 'CTA Background'],
            ['/project_01.jpg', 'Project 01'],
            ['/project_02.jpg', 'Project 02'],
            ['/project_03.jpg', 'Project 03'],
            ['/project_04.jpg', 'Project 04'],
            ['/project_05.jpg', 'Project 05'],
            ['/project_06.jpg', 'Project 06'],
          ].map(([path, label]) => (
            <div key={path} style={{ border: '1px solid rgba(14,24,17,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '80px', background: '#F0EFE9', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={path} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.1'; }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px', opacity: 0.2 }}>⊞</span>
                </div>
              </div>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#0e1811', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '2px' }}>{label}</div>
                <div style={{ fontSize: '9px', color: 'rgba(14,24,17,0.4)', fontFamily: 'IBM Plex Mono, monospace' }}>{path}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supabase Storage Note */}
      <div style={{
        marginTop: '16px',
        background: 'rgba(127,166,92,0.06)',
        border: '1px solid rgba(127,166,92,0.2)',
        borderRadius: '2px',
        padding: '20px',
      }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#3E6B4A', fontFamily: 'IBM Plex Mono, monospace', marginBottom: '8px' }}>
          Supabase Storage (Optional Upgrade)
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(14,24,17,0.6)', fontFamily: 'IBM Plex Mono, monospace', lineHeight: '1.7' }}>
          To enable cloud image uploads from the admin panel, activate Supabase Storage in your project dashboard and create a public bucket named &quot;media&quot;.
          Images will then be served from Supabase CDN and referenced with their full URL.
        </div>
        <a
          href="https://supabase.com/docs/guides/storage"
          target="_blank"
          style={{ display: 'inline-block', marginTop: '12px', fontSize: '11px', color: '#7FA65C', fontFamily: 'IBM Plex Mono, monospace', textDecoration: 'none' }}
        >
          Supabase Storage docs →
        </a>
      </div>
    </div>
  );
}
