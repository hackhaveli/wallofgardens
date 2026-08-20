import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';
import {
  DEFAULT_SITE_SETTINGS,
  DEFAULT_HOME_CONTENT,
  DEFAULT_PROJECTS,
  DEFAULT_TESTIMONIALS,
  DEFAULT_SERVICES_CONTENT,
  SERVICE_PAGE_DEFAULTS,
  DEFAULT_STUDIO_CONTENT,
  DEFAULT_CONTACT_CONTENT,
} from '../../../../lib/content-defaults';

export async function POST() {
  try {
    const results: Record<string, unknown> = {};

    // 1. Initialize site_settings
    const { error: sErr } = await supabase
      .from('site_settings')
      .upsert({ id: 'global', data: DEFAULT_SITE_SETTINGS, updated_at: new Date().toISOString() });
    results.site_settings = sErr ? `ERROR: ${sErr.message}` : 'OK';

    // 2. Initialize pages_content for each page
    const pages = [
      { slug: 'home', title: 'Home', sections: DEFAULT_HOME_CONTENT },
      { slug: 'services', title: 'Services', sections: DEFAULT_SERVICES_CONTENT },
      { slug: 'studio', title: 'Studio / About', sections: DEFAULT_STUDIO_CONTENT },
      { slug: 'contact', title: 'Contact', sections: DEFAULT_CONTACT_CONTENT },
      ...Object.values(SERVICE_PAGE_DEFAULTS).map(s => ({
        slug: s.slug,
        title: s.title,
        sections: s,
      })),
    ];
    for (const page of pages) {
      const { error } = await supabase
        .from('pages_content')
        .upsert({ slug: page.slug, title: page.title, sections: page.sections, updated_at: new Date().toISOString() });
      results[`page_${page.slug}`] = error ? `ERROR: ${error.message}` : 'OK';
    }

    // 3. Initialize projects
    for (const p of DEFAULT_PROJECTS) {
      const { error } = await supabase.from('projects').upsert({ ...p, updated_at: new Date().toISOString() });
      results[`project_${p.id}`] = error ? `ERROR: ${error.message}` : 'OK';
    }

    // 4. Initialize testimonials
    for (const t of DEFAULT_TESTIMONIALS) {
      const { error } = await supabase.from('testimonials').upsert({ ...t, updated_at: new Date().toISOString() });
      results[`testimonial_${t.id}`] = error ? `ERROR: ${error.message}` : 'OK';
    }

    return NextResponse.json({ success: true, results });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to initialize the database' });
}
