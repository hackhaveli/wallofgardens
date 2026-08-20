// ============================================================
// Default content for all pages — used as fallback when
// Supabase tables are empty or unreachable
// ============================================================

export const DEFAULT_SITE_SETTINGS = {
  company_name: 'Wall of Gardens',
  tagline: 'Living Architecture, Engineered',
  phone: '+91 99909 60669',
  phone_raw: '+919990960669',
  email: 'founder@wallofgardens.com',
  whatsapp: 'https://wa.me/919990960669',
  address_line1: '6th Floor, MERI, Janakpuri',
  address_line2: 'New Delhi – 110058',
  gstin: '07AADCW0848G1ZB',
  copyright: '© 2026 Wall of Gardens Private Limited · GSTIN 07AADCW0848G1ZB',
  nav_links: [
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Studio', href: '/studio' },
    { label: 'Contact', href: '/contact' },
  ],
  nav_cta_label: 'Start a Project',
  nav_cta_href: '/contact',
  footer_tagline: 'Landscaping / Vertical Gardens / Green Spaces',
  footer_services: [
    { label: 'Corporate Landscaping', href: '/services/corporate-landscaping' },
    { label: 'Vertical Gardens', href: '/services/vertical-gardens' },
    { label: 'Terrace Gardens', href: '/services/terrace-garden' },
    { label: 'Balcony Gardens', href: '/services/balcony-gardens' },
    { label: 'Moss Walls', href: '/services/moss-wall' },
    { label: 'Corporate Plantscaping', href: '/services/plantscaping' },
  ],
  footer_studio_links: [
    { label: 'About', href: '/studio' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  logo_src: '/logo.png',
  logo_alt: 'Wall of Gardens',
};

export const DEFAULT_HOME_CONTENT = {
  hero: {
    badge: 'Sheet 01 — Delhi NCR — Est. 2019',
    heading: 'Living walls are <em>built,</em> not planted.',
    lede: 'We design, engineer and install vertical gardens, terraces and living walls for corporate campuses and premium residences — then maintain them. One team from the first drawing to the third year.',
    cta_primary_label: 'Selected Work',
    cta_primary_href: '#work',
    cta_secondary_label: 'Book a Site Visit',
    cta_secondary_href: '#contact',
  },
  spec_strip: [
    { label: 'Practice', value: 'Since 2019' },
    { label: 'Studio', value: 'Janakpuri, New Delhi' },
    { label: 'Coverage', value: 'Delhi NCR & pan-India' },
    { label: 'Scope', value: 'Design → Install → Maintain' },
  ],
  clients: {
    badge: 'Spaces we have worked on',
    items: ['S&P Global', 'DLF', 'Godrej', 'Hira Group', 'Holiday Inn', 'Shangri-La'],
  },
  services_section: {
    badge: 'Sheet 02 — Scope of works',
    heading: 'Six disciplines, one studio.',
    view_all_label: 'All services →',
    items: [
      { no: '01', title: 'Corporate Landscaping', desc: 'Green spaces for offices, campuses and commercial environments, coordinated with facilities teams.', href: '/services/corporate-landscaping' },
      { no: '02', title: 'Vertical Gardens', desc: 'Natural, artificial and hybrid living walls, engineered before they are planted.', href: '/services/vertical-gardens' },
      { no: '03', title: 'Terrace Gardens', desc: 'Rooftop landscapes designed around load, waterproofing and where the water actually goes.', href: '/services/terrace-garden' },
      { no: '04', title: 'Balcony Gardens', desc: 'Compact spaces planned to the square foot so the balcony stays usable.', href: '/services/balcony-gardens' },
      { no: '05', title: 'Moss Walls', desc: 'Preserved moss installations. No irrigation, no sunlight, no watering schedule.', href: '/services/moss-wall' },
      { no: '06', title: 'Corporate Plantscaping', desc: 'Office indoor planting, installed and then maintained. The plants are yours; the upkeep is ours.', href: '/services/plantscaping' },
    ],
  },
  work_section: {
    badge: 'Sheet 03 — Project index',
    heading: 'Selected Work',
    view_all_label: 'All projects →',
  },
  method_section: {
    badge: 'Sheet 04 — Method',
    heading: 'A quote written without these answers is a guess.',
    lede: 'This is what we establish on site before we price anything. It is also why our scopes read as line items rather than one lump-sum number.',
    items: [
      { no: '01', title: 'Light, measured at the wall', desc: 'Not at the window. Most interior positions get far less usable light than they appear to — this alone decides natural, hybrid or artificial.' },
      { no: '02', title: 'Water and drain access', desc: 'A supply point, and somewhere for the collection channel to discharge. Without both, a living wall becomes a manual watering job.' },
      { no: '03', title: 'Structural load', desc: 'Wet weight of medium, planters, hardscape and water. On terraces this frequently changes the whole design.' },
      { no: '04', title: 'Existing waterproofing', desc: 'Its age and condition. Redoing it before landscaping costs a fraction of redoing it after.' },
      { no: '05', title: 'Maintenance access', desc: 'How the top of a wall gets reached in year two. A wall nobody can service is a wall that dies quietly.' },
      { no: '06', title: 'Who maintains it', desc: 'What upkeep you will realistically fund. We would rather specify to that than to an ideal nobody sustains.' },
    ],
  },
  process_section: {
    badge: 'Sheet 05 — Sequence',
    heading: 'Four stages, one point of contact.',
    items: [
      { no: '01 / Understand', title: 'Site assessment', desc: 'We establish the constraints above, on site, before anything is priced.' },
      { no: '02 / Design', title: 'Drawing & spec', desc: 'Layout and material specification issued for sign-off before procurement begins.' },
      { no: '03 / Execute', title: 'Installation', desc: 'Our own crew, to an agreed timeline, working around your site hours.' },
      { no: '04 / Maintain', title: 'Handover & care', desc: 'Written care schedule, and a maintenance contract where you want one.' },
    ],
  },
  quotes_section: {
    badge: 'Sheet 06 — References',
    heading: 'What clients say.',
  },
  closing: {
    badge: 'Sheet 07 — Contact',
    heading: 'Have a space that needs a greener direction?',
    lede: 'Site visits within Delhi NCR are free and carry no obligation. Tell us about the space and we will come and look at it.',
    cta_primary_label: 'Start a Project',
    cta_primary_href: 'mailto:founder@wallofgardens.com',
    cta_secondary_label: 'WhatsApp Us',
    cta_secondary_href: 'https://wa.me/919990960669',
    bg_image: '/cta_bg.jpg',
  },
};

export const DEFAULT_PROJECTS = [
  { id: 'P-01', name: 'Corporate Campus Landscape', location: 'Gurugram, Haryana', type: 'Corporate Landscaping', area: '4,200 sq ft', status: 'Completed', img: '/project_01.jpg', alt: 'Corporate campus landscape garden, Gurugram', order_index: 1, featured: true, description: 'Planted zones and a green feature wall developed around an existing office floor plate.' },
  { id: 'P-02', name: 'Preserved Moss Feature Wall', location: 'Connaught Place, Delhi', type: 'Moss Wall', area: '380 sq ft', status: 'Completed', img: '/project_02.jpg', alt: 'Preserved moss wall installation, office interior', order_index: 2, featured: true, description: 'An interior moss installation designed for zero irrigation and minimal upkeep.' },
  { id: 'P-03', name: 'Hybrid Living Wall — Lobby', location: 'Noida, Uttar Pradesh', type: 'Vertical Garden', area: '210 sq ft', status: 'Completed', img: '/project_03.jpg', alt: 'Hybrid living wall in hotel lobby', order_index: 3, featured: true, description: 'A combined natural and artificial wall built for a low-light interior elevation.' },
  { id: 'P-04', name: 'Rooftop Terrace — Residence', location: 'Greater Kailash, Delhi', type: 'Terrace Garden', area: '1,100 sq ft', status: 'Completed', img: '/project_04.jpg', alt: 'Rooftop terrace garden, residential Delhi', order_index: 4, featured: false, description: 'Full-sun terrace designed around load, waterproofing and drainage.' },
  { id: 'P-05', name: 'Office Plantscaping Programme', location: 'Cyber City, Gurugram', type: 'Corporate Plantscaping', area: '3 floors', status: 'Ongoing maintenance', img: '/project_05.jpg', alt: 'Corporate office plantscaping, multiple floors', order_index: 5, featured: false, description: 'Indoor planting across three floors, specified against measured light readings.' },
  { id: 'P-06', name: 'Natural Living Wall — Exterior', location: 'Faridabad, Haryana', type: 'Vertical Garden', area: '480 sq ft', status: 'Completed', img: '/project_06.jpg', alt: 'Natural living wall on building exterior facade', order_index: 6, featured: false, description: 'Natural exterior wall with zoned irrigation and wind-tolerant species.' },
];

export const DEFAULT_TESTIMONIALS = [
  { id: 'T-01', quote: 'Totally impressed with how Wall of Gardens transformed my terrace into a tranquil retreat. Their expertise in plant selection and layout design is exceptional.', author: 'Amit Gupta', service: 'Terrace Garden', order_index: 1, active: true },
  { id: 'T-02', quote: 'Wall of Gardens consistently delivers exceptional results, from balcony garden designs to office plant maintenance. Their creativity and reliability are unmatched.', author: 'Sneha Joshi', service: 'Balcony & Plant Care', order_index: 2, active: true },
  { id: 'T-03', quote: 'Thrilled with the vertical garden installed by Wall of Gardens. It is beautiful and adds a refreshing touch to our space. The attention to technical detail is evident.', author: 'Neha Sharma', service: 'Vertical Garden', order_index: 3, active: true },
];

export const DEFAULT_SERVICES_CONTENT = {
  banner: {
    badge: 'Sheet 00 — Register',
    heading: 'Six disciplines, one studio.',
    lede: 'Every one of them is designed, installed and maintained by the same team. Which one you need is usually decided by the space, not the budget.',
    breadcrumb: 'Home / Services',
  },
  matrix: {
    heading: 'Start with where the space is.',
    lede: 'Two questions get most enquiries to the right place: is the space indoors or outdoors, and are we working on a wall, a floor or a roof.',
  },
  register: {
    badge: 'Register',
    heading: 'The six sheets.',
    sub: 'Each sheet carries its own technical detail',
    items: [
      { no: '01', title: 'Corporate Landscaping', subtitle: 'Offices · Campuses · Commercial', desc: 'Ground-level landscape delivered in phases so the site keeps running. Levels and drainage set before hardscape or planting.', href: '/services/corporate-landscaping', sheet: 'Sheet 01' },
      { no: '02', title: 'Vertical Gardens', subtitle: 'Natural · Hybrid · Artificial', desc: 'Living walls where structure, zoned irrigation and drainage are engineered before a single plant is specified.', href: '/services/vertical-gardens', sheet: 'Sheet 02' },
      { no: '03', title: 'Terrace Gardens', subtitle: 'Rooftop · Load · Drainage', desc: 'Rooftop landscapes built over your waterproofing, not onto it. Load worked out before the planting is chosen.', href: '/services/terrace-garden', sheet: 'Sheet 03' },
      { no: '04', title: 'Balcony Gardens', subtitle: 'Compact · Residential', desc: 'Small spaces planned to the square foot, with drainage contained so nothing reaches the balcony below.', href: '/services/balcony-gardens', sheet: 'Sheet 04' },
      { no: '05', title: 'Moss Walls', subtitle: 'Preserved · Interiors only', desc: 'Real moss, preserved rather than growing. No irrigation, no sunlight, no maintenance schedule to forget.', href: '/services/moss-wall', sheet: 'Sheet 05' },
      { no: '06', title: 'Corporate Plantscaping', subtitle: 'Office planting · Maintained', desc: 'Indoor planting specified against measured light, installed by us, maintained on contract. You own the plants.', href: '/services/plantscaping', sheet: 'Sheet 06' },
    ],
  },
  common: {
    badge: 'Common to all six',
    heading: 'Whatever the sheet, these do not change.',
    lede: 'Different disciplines, same working method. This is what you get on any project we take on.',
    items: [
      { no: '01', title: 'A site visit before a price', desc: 'We establish light, water, drainage, load and access on site. Within Delhi NCR the visit is free and carries no obligation.' },
      { no: '02', title: 'A line-item scope, not a lump sum', desc: 'Materials, quantities and timeline written out, so you can compare our quote against anyone else\'s properly.' },
      { no: '03', title: 'Our own crew on site', desc: 'Design, procurement and installation stay with the same team, so the person who drew it answers for it.' },
      { no: '04', title: 'An honest answer about what will not work', desc: 'If a wall is too dark, a slab too loaded or a species wrong for the exposure, you hear it before the quote rather than after the install.' },
      { no: '05', title: 'A written care schedule at handover', desc: 'What needs doing and when, so the work can be maintained by us, by your team, or by anyone competent.' },
    ],
  },
  process: {
    badge: 'Sequence',
    heading: 'Four stages, one point of contact.',
    items: [
      { no: '01 / Understand', title: 'Site assessment', desc: 'Constraints established on site, before anything is priced.' },
      { no: '02 / Design', title: 'Drawing & spec', desc: 'Layout and material specification issued for sign-off.' },
      { no: '03 / Execute', title: 'Installation', desc: 'Our crew, to an agreed timeline, around your site hours.' },
      { no: '04 / Maintain', title: 'Handover & care', desc: 'Written schedule, and a maintenance contract where you want one.' },
    ],
  },
  closing: {
    badge: 'Contact',
    heading: 'Still not sure which one you need?',
    lede: 'Send a photograph and rough dimensions. We will tell you what the space can support before you commit to anything.',
    cta_primary_label: 'Book a Site Visit',
    cta_primary_href: 'mailto:founder@wallofgardens.com',
    cta_secondary_label: 'WhatsApp Us',
    cta_secondary_href: 'https://wa.me/919990960669',
    bg_image: '/cta_bg.jpg',
  },
};

export const SERVICE_PAGE_DEFAULTS: Record<string, {
  slug: string;
  sheet: string;
  title: string;
  lede: string;
  breadcrumb: string;
  overview_heading: string;
  overview_body: string[];
  scope_heading: string;
  scope_items: { no: string; title: string; desc: string }[];
  method_heading: string;
  method_lede: string;
  method_items: { no: string; title: string; desc: string }[];
  process_items: { no: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  closing: { badge: string; heading: string; lede: string; cta_primary_label: string; cta_primary_href: string; cta_secondary_label: string; cta_secondary_href: string; bg_image: string };
}> = {
  'corporate-landscaping': {
    slug: 'corporate-landscaping',
    sheet: 'Sheet 01 — Scope of works',
    title: 'Corporate Landscaping',
    lede: 'Green space for offices, campuses and commercial sites — delivered in phases, on a live site, without shutting your entrance for six weeks.',
    breadcrumb: 'Home / Services / Corporate Landscaping',
    overview_heading: 'At ground level, water decides the design.',
    overview_body: [
      'On a terrace the constraint is load. On the ground it is drainage — where water collects, where it runs, and what the subsoil does with it once it arrives. On newer campuses the answer is often unhelpful: compacted subsoil and construction debris under a thin layer of topsoil, which holds water rather than taking it away.',
      'So levels come first, hardscape second, planting third. Reversing that order is how a site ends up with a beautiful lawn that stands under water for three days after every monsoon shower — and a facilities team that has to explain it.',
    ],
    scope_heading: 'What working on an occupied site actually involves.',
    scope_items: [
      { no: '01', title: 'Crew documentation', desc: 'Names, ID and police verification submitted in advance, so your security desk is not improvising on the first morning.' },
      { no: '02', title: 'Working hours', desc: 'Noisy work scheduled outside core hours or over a weekend where the area is occupied. Agreed before we mobilise, not negotiated on site.' },
      { no: '03', title: 'Material staging', desc: 'A defined lay-down area and delivery slots, so soil and planters are not sitting across your visitor parking for a fortnight.' },
      { no: '04', title: 'Dust & debris control', desc: 'Screening, daily clearing and a defined route for waste out of the site. Cutting and mixing kept away from air intakes and entrances.' },
      { no: '05', title: 'Single point of contact', desc: 'One person your facilities lead calls, for the whole project. Not a different number for planting, hardscape and irrigation.' },
      { no: '06', title: 'Documentation on handover', desc: 'As-installed planting schedule, irrigation zoning and a written care calendar — the things your team needs for its own reporting.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: 'On a campus, most of the cost sits in things you cannot see from a photograph.',
    method_items: [
      { no: '01', title: 'Soil & subsoil', desc: 'What is actually under the surface. Compacted subsoil and construction debris are common on newer sites and change the entire approach.' },
      { no: '02', title: 'Levels & drainage', desc: 'Where water currently collects, and whether the ground will take it or needs a collection route built.' },
      { no: '03', title: 'Buried services', desc: 'Cable, drainage and fire main routes before anything is excavated or planted with deep-rooting species.' },
      { no: '04', title: 'Water source', desc: 'Supply, pressure and whether treated or recycled water is available for irrigation at campus scale.' },
      { no: '05', title: 'Access & sequencing', desc: 'How material reaches each area. On campuses this decides the programme more than the design does.' },
      { no: '06', title: 'Maintenance budget', desc: 'What you will fund annually. We would rather specify to a real number than to an ideal nobody sustains.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Site assessment', desc: 'Levels, soil, services, water and access, plus your operational constraints.' },
      { no: '02 / Design', title: 'Drawings & programme', desc: 'Layout, planting schedule and a phased programme issued together for sign-off.' },
      { no: '03 / Execute', title: 'Phased delivery', desc: 'Each area completed and handed back before the next one opens.' },
      { no: '04 / Maintain', title: 'Scheduled visits', desc: 'A maintenance contract with a written calendar and visit records.' },
    ],
    faqs: [
      { q: 'Can you work while the campus stays open?', a: 'Yes — that is the normal case rather than the exception. Work is phased, barriers and diversions keep people away from active zones, and anything noisy or dusty is scheduled around occupied hours.' },
      { q: 'Do you work from an architect\'s or consultant\'s drawings?', a: 'Regularly. We can execute a supplied landscape design, or develop the green scope ourselves and coordinate with the architect, PMC and MEP teams.' },
      { q: 'How do you handle procurement and lead times?', a: 'Specific trees, stone and planters are usually the longest items. We identify those at design stage and order against the phased programme.' },
      { q: 'Do you provide documentation for our records?', a: 'Yes. On handover you get an as-installed planting schedule, irrigation zoning drawings and a written care calendar.' },
      { q: 'Is maintenance necessary, or can our housekeeping team manage?', a: 'Housekeeping teams can handle watering and litter well. Pruning cycles, pest management, feeding and seasonal replanting are a different skill.' },
    ],
    closing: { badge: 'Contact', heading: 'Have a campus or commercial site in mind?', lede: 'Site visits within Delhi NCR are free and carry no obligation.', cta_primary_label: 'Book a Site Visit', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/project_01.jpg' },
  },
  'vertical-gardens': {
    slug: 'vertical-gardens',
    sheet: 'Sheet 02 — Scope of works',
    title: 'Vertical Gardens',
    lede: 'Natural, hybrid and artificial living walls for offices, lobbies, façades and homes. The structure, irrigation and drainage are designed before a single plant is specified.',
    breadcrumb: 'Home / Services / Vertical Gardens',
    overview_heading: 'Water falls. That is what kills most living walls.',
    overview_body: [
      'Run a single irrigation line down a three-metre wall and gravity does the rest. The top band dries out because water passes through before it saturates. The bottom band waterlogs because everything above drains into it. Within a season you get the classic failed-wall signature: brown at the top, root rot at the base, and a healthy strip in the middle that nobody planned.',
      'The fix is not more water. It is zoning — independent lines by height, each on its own timer, each set to what that band actually needs. It costs a little more at installation and it is the difference between a wall that lasts and a wall that gets replaced.',
    ],
    scope_heading: 'What a wall includes.',
    scope_items: [
      { no: '01', title: 'MS frame, stood off', desc: 'Steel framing fixed clear of your wall, treated and finished, sized to the panel system and the substrate we are fixing into.' },
      { no: '02', title: 'Waterproof backing', desc: 'A backing sheet between frame and wall so your wall never sits wet. This is the detail most cheap walls leave out.' },
      { no: '03', title: 'Panel or pocket system', desc: 'Felt pockets, modular trays or planter channels, chosen for the species and the orientation rather than for whatever is in stock.' },
      { no: '04', title: 'Zoned irrigation', desc: 'Independent drip lines by height, each on its own valve and timer, with a filter and pressure regulation on the supply.' },
      { no: '05', title: 'Collection channel & drain', desc: 'A channel at the base with a fall to an actual drain point — not a tray that someone has to empty.' },
      { no: '06', title: 'Planting', desc: 'Species selected for the measured light at that wall, and arranged so growth patterns hold the design rather than blur it.' },
      { no: '07', title: 'Maintenance access', desc: 'Planned at design stage — how the top of the wall gets reached in year two, before it becomes somebody else\'s problem.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: 'Per-square-foot rates quoted over the phone are how walls end up failing. These are the things that actually decide the design.',
    method_items: [
      { no: '01', title: 'Light, at the wall', desc: 'Measured at the wall face, not at the window. Most interior walls in India get far less usable light than they appear to.' },
      { no: '02', title: 'Water and drain access', desc: 'A supply point and somewhere for the channel to discharge. Without both, a natural wall becomes a manual watering job.' },
      { no: '03', title: 'Wall condition', desc: 'What we are fixing into, and whether there is existing damp or seepage. A wall with damp needs fixing before anything goes on it.' },
      { no: '04', title: 'Power', desc: 'For the timer and pump, and for grow lighting where light levels need supplementing.' },
      { no: '05', title: 'Maintenance access', desc: 'How the upper zones will be reached. A wall nobody can service is a wall that dies quietly.' },
      { no: '06', title: 'Exposure', desc: 'For façades — wind, direct sun and reflected heat off adjacent glazing, all of which narrow the species list considerably.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Wall assessment', desc: 'Light readings, wall condition, water, drain and power, plus how the wall will be serviced later.' },
      { no: '02 / Design', title: 'Drawing & spec', desc: 'Section, panel layout, irrigation zoning and planting schedule issued for sign-off before procurement.' },
      { no: '03 / Install', title: 'Build & plant', desc: 'Frame, backing, panels and irrigation commissioned first. Planting goes in last, onto a tested system.' },
      { no: '04 / Maintain', title: 'Establishment', desc: 'Close attention through the first season, then a regular visit cycle once the wall has settled.' },
    ],
    faqs: [
      { q: 'Will it damage the wall behind it?', a: 'Not when it is built correctly. The frame stands clear of your wall, a waterproof backing sits between the two, irrigation is metered rather than flooded, and the base channel takes runoff to a drain.' },
      { q: 'Can a natural wall work indoors with low light?', a: 'Sometimes, with the right species and often with supplementary lighting. But we would rather tell you a wall gets too little light than install a natural system that thins out over six months.' },
      { q: 'How often does a living wall need maintenance?', a: 'A natural wall needs monthly attention at minimum — running each zone and checking emitters, pruning to the design, replacing failures and clearing the base channel.' },
      { q: 'What happens when there is a power cut?', a: 'Short outages are absorbed by the growing medium. For longer or frequent outages we specify a controller with battery backup so the schedule is not lost.' },
      { q: 'Can you do a wall on an exterior façade?', a: 'Yes, and it is a different design problem — wind loading on the frame, direct sun, reflected heat off adjacent glazing and a much narrower species list.' },
      { q: 'Can you take over a wall someone else installed?', a: 'Often, once we have seen it. We would survey the irrigation, the backing and the channel first.' },
    ],
    closing: { badge: 'Contact', heading: 'Have a wall in mind?', lede: 'Send us dimensions and a photograph. Site visits within Delhi NCR are free and carry no obligation.', cta_primary_label: 'Book a Site Visit', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/project_03.jpg' },
  },
  'terrace-garden': {
    slug: 'terrace-garden',
    sheet: 'Sheet 03 — Scope of works',
    title: 'Terrace Gardens',
    lede: 'Rooftop landscapes designed around what the slab can carry and where the water goes — not just what looks good on handover day.',
    breadcrumb: 'Home / Services / Terrace Gardens',
    overview_heading: 'Terrace gardens do not fail as gardens. They fail as roofs.',
    overview_body: [
      'The complaint is almost never that the plants died. It is a damp patch on the ceiling below, an outlet that silted up in the first monsoon, or a slab carrying twice the weight anyone intended. By the time any of that shows, the garden has to come off to fix it.',
      'So the build-up gets designed first and the planting second. Growing medium never touches your waterproofing — a protection layer, drainage board and filter fabric sit between the two, and every outlet stays reachable for cleaning once the terrace is planted.',
    ],
    scope_heading: 'What a terrace project includes.',
    scope_items: [
      { no: '01', title: 'Survey & levels', desc: 'Existing falls, outlet positions, parapet heights and access, plus a look at the condition of the waterproofing already there.' },
      { no: '02', title: 'Build-up specification', desc: 'Protection layer, drainage board, filter fabric and medium depth, specified to the load available rather than to a standard detail.' },
      { no: '03', title: 'Drainage', desc: 'Outlets kept reachable, inspection points where planting would otherwise bury them, and falls confirmed before anything is laid.' },
      { no: '04', title: 'Planting design', desc: 'Species grouped by sun exposure, water need and mature size — chosen for a full-sun, wind-exposed Delhi rooftop, not a sheltered garden.' },
      { no: '05', title: 'Decking, seating & pergola', desc: 'Where the terrace needs to be used rather than only looked at, with hardscape integrated into the build-up rather than added on top.' },
      { no: '06', title: 'Irrigation & lighting', desc: 'Drip or sprinkler zones on a timer, and low-voltage lighting run in the same trenching.' },
      { no: '07', title: 'Handover & care', desc: 'A written care schedule including pre-monsoon and post-monsoon drain clearing, and a maintenance plan where you want one.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: 'A terrace quoted per square foot without these answers is a quote for something else.',
    method_items: [
      { no: '01', title: 'Structural load', desc: 'Saturated weight of medium, planters, hardscape and water against what the slab was designed for. This frequently changes the whole scheme.' },
      { no: '02', title: 'Existing waterproofing', desc: 'Age and condition. If it is near the end of its life, redoing it now costs a fraction of redoing it under a finished garden.' },
      { no: '03', title: 'Falls & outlets', desc: 'Where water currently exits, whether it actually gets there, and whether those outlets stay reachable once planted.' },
      { no: '04', title: 'Sun and wind', desc: 'A Delhi rooftop is full sun and wind-exposed. Species that thrive on a balcony below will not hold here.' },
      { no: '05', title: 'Water & power', desc: 'Access for irrigation and lighting, and whether a point needs extending to the terrace.' },
      { no: '06', title: 'Material access', desc: 'How medium, planters and hardscape reach the roof. On many buildings this decides sequencing more than the design does.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Roof assessment', desc: 'Levels, outlets, waterproofing condition, access and an honest view on load.' },
      { no: '02 / Design', title: 'Build-up & layout', desc: 'Section, planting plan and material spec issued for sign-off before procurement.' },
      { no: '03 / Execute', title: 'Build then plant', desc: 'Protection, drainage and irrigation laid and tested first. Planting goes in last.' },
      { no: '04 / Maintain', title: 'Through the seasons', desc: 'Establishment care, and drain clearing before and after monsoon.' },
    ],
    faqs: [
      { q: 'Will a terrace garden damage my waterproofing?', a: 'Not if the build-up is right. Growing medium never sits directly on the membrane — a protection layer, drainage board and filter fabric go between them.' },
      { q: 'What if my existing waterproofing is old?', a: 'We will tell you before starting rather than build over it. Redoing waterproofing on a bare roof is a straightforward job.' },
      { q: 'How much weight will it actually add?', a: 'It depends entirely on medium depth and hardscape. We work out the saturated load during the survey and design to what the structure can take.' },
      { q: 'Which plants survive a Delhi summer on a rooftop?', a: 'Full-sun, heat-tolerant species — ornamental grasses, bougainvillea, adenium, frangipani, succulents and hardy shrubs hold well.' },
      { q: 'What happens during monsoon?', a: 'A correctly built terrace handles it — the drainage board carries water to the outlets and the filter fabric keeps medium out of them.' },
    ],
    closing: { badge: 'Contact', heading: 'Have a terrace to talk about?', lede: 'Site visits within Delhi NCR are free and carry no obligation. We would rather see it than quote a number that only works on paper.', cta_primary_label: 'Book a Site Visit', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/project_04.jpg' },
  },
  'balcony-gardens': {
    slug: 'balcony-gardens',
    sheet: 'Sheet 04 — Scope of works',
    title: 'Balcony Gardens',
    lede: 'Compact spaces planned to the square foot. The balcony stays usable, and nothing drains onto the balcony below.',
    breadcrumb: 'Home / Services / Balcony Gardens',
    overview_heading: 'A balcony garden fails in one of two ways. Both are avoidable.',
    overview_body: [
      'The first is drainage: pots, planters and beds without a thought for where water goes. In a monsoon shower, it goes to the balcony below — which is a neighbour complaint waiting to happen. The second is overcrowding: a balcony filled with plants that make it unusable rather than pleasant.',
      'Both start at design. We plan around your floor area and what you want to do with the space — sit, grow herbs, have a wall of green. Drainage is contained within the balcony before a single planter is chosen.',
    ],
    scope_heading: 'What a balcony project includes.',
    scope_items: [
      { no: '01', title: 'Space plan', desc: 'Dimensions, sun orientation and how you want to use the balcony. This decides whether the priority is planting, seating or a mix of the two.' },
      { no: '02', title: 'Drainage containment', desc: 'Saucers, drip trays, integrated drainage beds and waterproof matting, so water stays on your balcony rather than the one below.' },
      { no: '03', title: 'Planter selection', desc: 'Sizes, materials and layouts chosen around your weight tolerance, sun exposure and the species you want to grow.' },
      { no: '04', title: 'Planting design', desc: 'Species suited to a balcony exposure — direct sun, partial shade, or the specific orientation of your building.' },
      { no: '05', title: 'Vertical elements', desc: 'Trellis, railing planters and wall-fixed systems where the floor is too small but the walls and railings are not.' },
      { no: '06', title: 'Irrigation', desc: 'A drip or self-watering system where watering schedules are not reliably kept — which is most of the time.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: 'Balconies vary more than they look. These are the things that actually decide the specification.',
    method_items: [
      { no: '01', title: 'Orientation & sun', desc: 'A south-facing balcony and a north-facing one are completely different growing environments. Species, shade and watering frequency all change.' },
      { no: '02', title: 'Floor load', desc: 'Planters, medium and water add up. On upper floors, this is worth understanding before planters are specified.' },
      { no: '03', title: 'Drainage', desc: 'Where water currently exits the balcony, and whether that is adequate for what we are adding.' },
      { no: '04', title: 'Wind', desc: 'Balconies above the 5th or 6th floor are exposed. Species selection narrows and staking requirements increase.' },
      { no: '05', title: 'Water access', desc: 'A tap on the balcony makes irrigation straightforward. Without one, the system design changes.' },
      { no: '06', title: 'Maintenance intent', desc: 'How much you will realistically water and tend. The specification changes significantly between weekly attention and monthly.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Site visit', desc: 'Dimensions, orientation, sun, drainage and how you use the space.' },
      { no: '02 / Design', title: 'Layout & spec', desc: 'Space plan, planter spec and planting list issued for sign-off.' },
      { no: '03 / Install', title: 'Delivery & planting', desc: 'Planters, medium, plants and irrigation installed in a single session where the balcony allows it.' },
      { no: '04 / Maintain', title: 'Care schedule', desc: 'Written schedule handed over, with a maintenance contract available where you want it.' },
    ],
    faqs: [],
    closing: { badge: 'Contact', heading: 'Tell us about the balcony.', lede: 'A photograph, rough dimensions and which direction it faces is enough to start. Site visits within Delhi NCR are free.', cta_primary_label: 'Start a Project', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/cta_bg.jpg' },
  },
  'moss-wall': {
    slug: 'moss-wall',
    sheet: 'Sheet 05 — Scope of works',
    title: 'Moss Walls',
    lede: 'Preserved moss for interiors. No irrigation, no sunlight, no watering schedule for anyone to forget — and no plastic, either.',
    breadcrumb: 'Home / Services / Moss Walls',
    overview_heading: 'Real moss. It just stopped growing.',
    overview_body: [
      'Preserved moss is harvested moss whose sap has been replaced with a glycerine-based solution. It keeps the colour, depth and texture of living moss but has no roots and no longer photosynthesises. Which means it needs nothing: no water, no light, no drainage, no maintenance visit that somebody has to remember to schedule.',
      'That is the trade. You give up growth, and in return you remove every failure mode a living wall has. For a reception wall or a boardroom, that is usually the right trade — as long as the conditions sit inside a suitable operating envelope.',
    ],
    scope_heading: 'What an installation includes.',
    scope_items: [
      { no: '01', title: 'Composition design', desc: 'Layout worked to your wall dimensions — flat field, mixed texture, shaped feature or a logo wall — issued as a drawing before fabrication.' },
      { no: '02', title: 'Moss selection', desc: 'Types and colour range chosen against the interior palette and the lighting the wall will actually sit under.' },
      { no: '03', title: 'Logos & lettering', desc: 'Company marks cut into the moss field, mounted proud in metal or acrylic, or picked out in a contrasting moss colour.' },
      { no: '04', title: 'Panel fabrication', desc: 'Built up on backing board in our studio, in panel sizes that suit your access and lift dimensions.' },
      { no: '05', title: 'Fixing & installation', desc: 'Mounting detail worked out for the wall construction and panel weight, with a shadow gap or frame where the edge needs resolving.' },
      { no: '06', title: 'Service & repair', desc: 'Periodic dusting, and repasting or replacing any section that lifts. Booked as needed rather than on a standing contract.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: 'Moss walls are simple to live with and easy to get wrong at specification. These are the things we check.',
    method_items: [
      { no: '01', title: 'Direct sunlight', desc: 'Where the sun tracks across the wall through the day. Direct sun bleaches preserved moss faster than anything else.' },
      { no: '02', title: 'Humidity', desc: 'Very dry, heavily conditioned rooms make it brittle over time. Damp areas risk mould. The envelope is what we are aiming for.' },
      { no: '03', title: 'Wall construction', desc: 'What the panels fix into, and whether services run behind the wall we are drilling.' },
      { no: '04', title: 'Hand height', desc: 'Moss at arm level in a busy corridor will get touched. Worth planning the composition, or the height, around that.' },
      { no: '05', title: 'Lighting', desc: 'How the wall is lit changes how the texture reads. Flat overhead light kills depth; grazing light from above brings it out.' },
      { no: '06', title: 'Access & panel size', desc: 'Lift dimensions and corridor turns decide how the wall is split into panels and where the joints fall.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Wall & conditions', desc: 'Dimensions, sunlight track, humidity, lighting and access for panel delivery.' },
      { no: '02 / Design', title: 'Composition drawing', desc: 'Layout, moss types, colour range and any logo work issued for sign-off.' },
      { no: '03 / Fabricate', title: 'Studio build', desc: 'Panels built up off site, so installation day is fixing rather than construction.' },
      { no: '04 / Install', title: 'Fixing & handover', desc: 'Typically a single day on site, with edge and joint detailing resolved in place.' },
    ],
    faqs: [
      { q: 'Is it real moss or artificial?', a: 'Real moss, preserved. It is harvested and then treated so it holds its texture and colour without continuing to grow.' },
      { q: 'Does it need water or sunlight?', a: 'Neither. It has no root system and no longer photosynthesises. That is the entire point.' },
      { q: 'How long does it last?', a: 'Typically five to ten years in the right conditions. The main threats are direct sunlight and very dry air from heavy air conditioning.' },
      { q: 'Can it go outside?', a: 'No — and this applies to covered balconies and semi-outdoor spaces as well. Delhi conditions will degrade it faster than the interior guarantee covers.' },
      { q: 'Does it need any maintenance?', a: 'Periodic dusting, and we will repaste or replace any section that lifts over time.' },
    ],
    closing: { badge: 'Contact', heading: 'Have a wall in mind?', lede: 'Send us dimensions and a photograph of the space. Specification is quick once we have seen it.', cta_primary_label: 'Start a Project', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/project_02.jpg' },
  },
  'plantscaping': {
    slug: 'plantscaping',
    sheet: 'Sheet 06 — Scope of works',
    title: 'Corporate Plantscaping',
    lede: 'Indoor planting specified against measured light, installed by us, maintained on contract. The plants are yours. The upkeep is ours.',
    breadcrumb: 'Home / Services / Corporate Plantscaping',
    overview_heading: 'Office plants fail because they were specified for the wrong light.',
    overview_body: [
      'A lush tropical in a nursery gets two or three hours of direct sun a day. Put it four metres from a window on an office floor and it gets a fraction of that — too little to sustain it, enough to make it look fine for six months before it gradually declines. By the time anyone notices, the plant has been failing for a year.',
      'We take light readings at each proposed position before anything is specified. Not at the window, but at the desk or the reception counter or the meeting room corner where the plant will actually live. That reading decides the species, the pot size and the watering frequency — not a standard catalogue.',
    ],
    scope_heading: 'What a plantscaping project includes.',
    scope_items: [
      { no: '01', title: 'Light survey', desc: 'Readings at each proposed position on the floor, not estimates from the window or the plan. This decides the species list before anything else.' },
      { no: '02', title: 'Specification', desc: 'Species, pot size, pot finish and placement mapped to the floor plan, with alternatives for each position where the light is borderline.' },
      { no: '03', title: 'Procurement', desc: 'Plants sourced at the specified size, conditioned before delivery so they are not arriving from a nursery directly onto a stressed floor.' },
      { no: '04', title: 'Installation', desc: 'Delivered and placed by our team, in the agreed positions, with pots dressed and any trays or reservoirs installed.' },
      { no: '05', title: 'Maintenance contract', desc: 'A visit schedule matched to the species — watering, feeding, dusting, rotating and replacing failures. Billed monthly, cancelled with notice.' },
      { no: '06', title: 'You own the plants', desc: 'The planting is a single purchase. If you end the maintenance contract, the plants stay with you and we hand over a care schedule.' },
    ],
    method_heading: 'What we establish before pricing.',
    method_lede: '',
    method_items: [
      { no: '01', title: 'Light at each position', desc: 'Foot-candle readings at the desk, corner or reception counter — not at the window. This is the one thing that changes the specification completely.' },
      { no: '02', title: 'Air conditioning', desc: 'Direct AC discharge dries out foliage and soil faster than anything else. Positions near vents need a different species or a buffer.' },
      { no: '03', title: 'Access for maintenance', desc: 'Which areas are accessible during working hours and which need after-hours visits, so the maintenance contract is priced correctly.' },
      { no: '04', title: 'Water access', desc: 'Where watering water comes from on each floor. Remote floors without a nearby water source need a different watering approach.' },
      { no: '05', title: 'Footfall and handling', desc: 'High-traffic positions need robust species. A delicate fern at a reception counter will not hold the way one in a quiet meeting room will.' },
      { no: '06', title: 'Your maintenance intent', desc: 'Whether your facilities team will supplement between visits or leave it entirely to us changes the visit frequency in the contract.' },
    ],
    process_items: [
      { no: '01 / Survey', title: 'Light readings', desc: 'At each proposed position on site, before any species are discussed.' },
      { no: '02 / Specify', title: 'Floor plan & spec', desc: 'Species, sizes and pot finishes mapped to the plan, issued for sign-off.' },
      { no: '03 / Install', title: 'Delivery & placement', desc: 'Plants delivered conditioned, placed by our team to the agreed plan.' },
      { no: '04 / Maintain', title: 'Visit cycle', desc: 'Regular visits on a schedule that suits your access, with failure replacement included.' },
    ],
    faqs: [
      { q: 'Do we own the plants, or are they rented?', a: 'You own them, purchased once. We do not rent plants — the maintenance contract covers care, not tenancy. If you end the contract, the plants stay with you.' },
      { q: 'What happens if a plant dies?', a: 'Replacement is included in the maintenance contract. If a plant fails, we replace it with the same species or a suitable alternative.' },
      { q: 'How often do you visit?', a: 'It depends on the species and the conditions. Low-light foliage in a stable office environment typically needs a visit every two to three weeks.' },
      { q: 'Can you work around our office hours?', a: 'Usually yes. Most maintenance is quiet work that can happen during a normal working day.' },
      { q: 'We have existing plants. Can you take over the care?', a: 'Yes. We would survey the existing planting, assess condition and light, and propose a care plan.' },
    ],
    closing: { badge: 'Contact', heading: 'Tell us about your office and what you are trying to achieve.', lede: 'We will visit, take light readings and come back with a specification and a maintenance quote.', cta_primary_label: 'Book a Survey', cta_primary_href: 'mailto:founder@wallofgardens.com', cta_secondary_label: 'WhatsApp Us', cta_secondary_href: 'https://wa.me/919990960669', bg_image: '/project_05.jpg' },
  },
};

export const DEFAULT_STUDIO_CONTENT = {
  banner: {
    badge: 'Sheet 07 — Practice',
    heading: 'A landscape studio that stays on site.',
    lede: 'Working across Delhi NCR since 2019, on corporate, hospitality and residential projects. Design and execution held by the same team, deliberately.',
    breadcrumb: 'Home / Studio',
  },
  delivery_model: {
    badge: 'The practice',
    heading: 'Most landscaping fails between the drawing and the wall.',
    body: [
      'The usual chain has four handoffs in it. A designer draws something, a contractor prices it, a subcontractor builds it, and maintenance is somebody else\'s problem entirely. Every joint in that chain is a place where a detail gets dropped — a drainage layer value-engineered out, a species swapped for whatever was available, a wall built with no way to service it.',
      'We built Wall of Gardens the other way round. Design, procurement, installation and aftercare sit with the same team, so the person who drew the detail is the person who answers for it two years later. That is not a marketing position. It is why the technical detail on this site exists at all.',
    ],
  },
  coverage: {
    badge: 'Where we work',
    heading: 'Studio in Janakpuri. Crews across NCR.',
    body: [
      'Design and specification happen at our studio on the sixth floor at MERI, Janakpuri. Installation crews work across Delhi, Gurugram, Noida, Ghaziabad and Faridabad — close enough that a maintenance visit is a routine thing rather than an expedition.',
      'We take project work elsewhere in India where the scope justifies mobilising a crew. If it does not, we will say so rather than quote a number that only works on paper.',
    ],
  },
  approach: {
    badge: 'Approach',
    heading: 'How we work, put plainly.',
    items: [
      { no: '01', title: 'Design-led, site-first', desc: 'Every project develops around the architecture, the exposure and the intended use. We do not fit sites to a standard package.' },
      { no: '02', title: 'Specified to what you will maintain', desc: 'An honest answer about upkeep changes the specification. We would rather design to the care you will actually fund than to an ideal nobody sustains.' },
      { no: '03', title: 'Line items, not lump sums', desc: 'Scopes are written out with materials, quantities and timeline, so you can compare them properly against anyone else\'s.' },
      { no: '04', title: 'Our own crew', desc: 'The people on your site are our people. That is what makes accountability possible rather than theoretical.' },
      { no: '05', title: 'Accountable past handover', desc: 'Aftercare is part of the scope, not a separate conversation with a separate vendor once something starts failing.' },
    ],
  },
  constraints: {
    badge: 'Constraints',
    heading: 'What we will not do.',
    lede: 'A short list, and the most useful thing on this page. Each of these has cost us work, and each one exists because the alternative fails within a year or two.',
    items: [
      { title: 'Quote without seeing the site', desc: 'Light, water, drainage, load and access decide the specification. A number given over the phone is a number for a different project.' },
      { title: 'Install a natural wall in the dark', desc: 'If a wall gets too little light, we will propose hybrid or artificial. We will not sell a living wall that quietly thins out over six months.' },
      { title: 'Build over failing waterproofing', desc: 'On a terrace this is the one thing that cannot be fixed later without dismantling everything above it. We will tell you before starting.' },
      { title: 'Rent you plants you never own', desc: 'Office planting is sold once and maintained on contract. If you end the contract, the planting stays with you.' },
      { title: 'Put preserved moss outdoors', desc: 'Including covered balconies. It is an interior material, and Delhi conditions will degrade it fast whatever anyone tells you.' },
      { title: 'Build something nobody can service', desc: 'If the top of a wall cannot be reached in year two, the design changes. A wall nobody can maintain is a wall that dies quietly.' },
    ],
  },
  clients: {
    badge: 'Clients',
    heading: 'Spaces we have worked on.',
    items: ['S&P Global', 'DLF', 'Godrej', 'Hira Group', 'Holiday Inn', 'Shangri-La'],
  },
  closing: {
    badge: 'Contact',
    heading: 'Come and see the studio, or let us come and see the space.',
    lede: 'Site visits within Delhi NCR are free and carry no obligation.',
    cta_primary_label: 'Book a Site Visit',
    cta_primary_href: 'mailto:founder@wallofgardens.com',
    cta_secondary_label: 'WhatsApp Us',
    cta_secondary_href: 'https://wa.me/919990960669',
  },
};

export const DEFAULT_CONTACT_CONTENT = {
  banner: {
    badge: 'Sheet 08 — Contact',
    heading: 'Start a conversation.',
    lede: 'Site visits within Delhi NCR are free and carry no obligation. The fastest way to get an accurate quote is to let us see the space.',
    breadcrumb: 'Home / Contact',
  },
  channels: [
    { key: 'Phone & WhatsApp', value: '+91 99909 60669', note: 'Available 9am–7pm, Monday–Saturday. WhatsApp preferred outside those hours.', href: 'tel:+919990960669' },
    { key: 'Email', value: 'founder@wallofgardens.com', note: 'For project enquiries, scopes and follow-ups. We respond within one business day.', href: 'mailto:founder@wallofgardens.com' },
    { key: 'WhatsApp', value: 'Send a photograph of the space', note: 'Quickest way to get a first read on whether a wall or terrace will work.', href: 'https://wa.me/919990960669' },
    { key: 'Studio', value: 'Janakpuri, New Delhi', note: '6th Floor, MERI, Janakpuri, New Delhi – 110058. By appointment only.', href: '' },
  ],
  brief_items: [
    { no: '01', title: 'What is the space?', desc: 'Indoors or outdoors, floor area, whether it is a wall, a floor or a roof, and what you want to do with it.' },
    { no: '02', title: 'Where is it?', desc: 'Location within Delhi NCR, or a note if you are outside NCR. Coverage and site visit logistics differ for projects outside the city.' },
    { no: '03', title: 'What are the constraints?', desc: 'Anything you already know: light, existing waterproofing, load, maintenance budget, timeline. Even rough answers help.' },
    { no: '04', title: 'A photograph, if you have one', desc: 'The single most useful thing to send. Send it by WhatsApp if the form does not suit — a phone photograph is sufficient.' },
  ],
  form: {
    banner_text: 'Site visits are free within Delhi NCR and carry no obligation. The fastest way to get an accurate scope is to let us see the space.',
    submit_label: 'Send Enquiry',
    success_heading: 'Thank you — we will be in touch shortly.',
    success_body: 'We aim to respond within one working day. For anything urgent, call or WhatsApp +91 99909 60669.',
    disclaimer: 'By submitting you agree to be contacted about your project enquiry. We do not share your details or send marketing messages.',
  },
  faqs: [
    { q: 'How quickly can you visit?', a: 'For projects in central Delhi, Gurugram and Noida, usually within a week of enquiry. For peripheral locations or busy periods, allow ten days to two weeks.' },
    { q: 'Is the site visit really free?', a: 'Yes. Within Delhi NCR, site visits carry no charge and no obligation. We do not tie a visit to a quote acceptance.' },
    { q: 'How long does a quote take?', a: 'Simple enquiries typically get a scope within three to five working days of the visit. More complex projects take a week to ten days.' },
    { q: 'Do you have a minimum project size?', a: 'Not a formal one. Some of the most interesting spaces we have worked on were small.' },
    { q: 'Can you work with our interior designer or architect?', a: 'Yes. We work from supplied drawings, or we develop the green scope and coordinate with the design team.' },
  ],
};
