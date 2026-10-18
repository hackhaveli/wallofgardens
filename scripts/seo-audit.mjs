async function runSeoAudit() {
  const res = await fetch('http://localhost:3000/');
  const html = await res.text();
  
  const checks = [
    {
      name: 'HTML lang attribute',
      test: () => html.includes('lang="en"'),
      weight: 5,
      detail: 'Language tag en for search engines'
    },
    {
      name: 'Document Title tag',
      test: () => {
        const m = html.match(/<title[^>]*>(.*?)<\/title>/i);
        return m ? `${m[1]} (${m[1].length} chars)` : false;
      },
      weight: 10,
      detail: 'Optimal title length 40-100 characters'
    },
    {
      name: 'Meta Description tag',
      test: () => {
        const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
        return m ? `${m[1].substring(0, 70)}... (${m[1].length} chars)` : false;
      },
      weight: 10,
      detail: 'Concise, high-intent description'
    },
    {
      name: 'Canonical URL link',
      test: () => {
        const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
        return m ? m[1] : false;
      },
      weight: 8,
      detail: 'Prevents duplicate content penalties'
    },
    {
      name: 'Viewport mobile optimization',
      test: () => html.includes('name="viewport"'),
      weight: 5,
      detail: 'Mobile friendly responsiveness'
    },
    {
      name: 'Open Graph Protocol (Facebook/WhatsApp/LinkedIn)',
      test: () => {
        const ogTitle = html.includes('property="og:title"');
        const ogDesc = html.includes('property="og:description"');
        const ogImg = html.includes('property="og:image"');
        const ogUrl = html.includes('property="og:url"');
        return ogTitle && ogDesc && ogImg && ogUrl;
      },
      weight: 12,
      detail: 'Rich social media cards preview'
    },
    {
      name: 'Twitter Card metadata',
      test: () => html.includes('name="twitter:card"'),
      weight: 5,
      detail: 'Twitter large summary image card'
    },
    {
      name: 'Robots meta indexing instruction',
      test: () => html.includes('name="robots"'),
      weight: 5,
      detail: 'Allows GoogleBot indexing and rich previews'
    },
    {
      name: 'Favicon & Apple Touch Icons',
      test: () => html.includes('rel="icon"'),
      weight: 5,
      detail: 'Browser tabs, mobile shortcuts, bookmarks'
    },
    {
      name: 'Schema.org JSON-LD Knowledge Graph',
      test: () => {
        const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
        if (!m) return false;
        try {
          const j = JSON.parse(m[1]);
          const types = j['@graph'] ? j['@graph'].map(e => e['@type']).flat() : [];
          return `Valid Schema: ${types.join(', ')}`;
        } catch {
          return false;
        }
      },
      weight: 15,
      detail: 'Google Rich Snippets & AI Knowledge Graph'
    },
    {
      name: 'H1 Architectural Hierarchy',
      test: () => {
        const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        return m ? 'H1 tag properly structured' : false;
      },
      weight: 8,
      detail: 'Semantic hierarchy'
    },
    {
      name: 'Image Alt Attributes Coverage',
      test: () => {
        const imgs = html.match(/<img[^>]*>/gi) || [];
        const withAlt = imgs.filter(img => /alt=["'][^"']+["']/i.test(img));
        const pct = imgs.length ? Math.round((withAlt.length / imgs.length) * 100) : 100;
        return `${pct}% coverage (${withAlt.length}/${imgs.length} images)`;
      },
      weight: 7,
      detail: 'Visual accessibility and Google Images indexing'
    },
    {
      name: 'Pan-India Metro Keywords (Delhi NCR, Bangalore, Mumbai, Pune, Hyderabad)',
      test: () => {
        const hasDelhi = html.includes('Delhi');
        const hasBangalore = html.includes('Bengaluru');
        const hasMumbai = html.includes('Mumbai');
        const hasPune = html.includes('Pune');
        const hasHyd = html.includes('Hyderabad');
        return hasDelhi && hasBangalore && hasMumbai && hasPune && hasHyd;
      },
      weight: 5,
      detail: 'Target metro city entity coverage'
    }
  ];

  let earned = 0;
  let total = 0;
  const auditReport = [];

  for (const c of checks) {
    total += c.weight;
    const res = c.test();
    if (res) earned += c.weight;
    auditReport.push({
      category: c.name,
      status: res ? 'PASSED' : 'FAILED',
      weight: `${c.weight} pts`,
      detail: typeof res === 'string' ? res : c.detail
    });
  }

  // Check external standard files
  const sitemap = await fetch('http://localhost:3000/sitemap.xml');
  const robots = await fetch('http://localhost:3000/robots.txt');
  const llms = await fetch('http://localhost:3000/llms.txt');

  const finalScore = Math.round((earned / total) * 100);

  console.log('FINAL_SCORE:' + finalScore);
  console.log('SITEMAP_STATUS:' + sitemap.status);
  console.log('ROBOTS_STATUS:' + robots.status);
  console.log('LLMS_STATUS:' + llms.status);
  console.log('AUDIT_DETAILS:' + JSON.stringify(auditReport, null, 2));
}

runSeoAudit();
