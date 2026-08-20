-- ============================================================
-- Wall of Gardens — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- 1. site_settings (global branding, header, footer, contact)
CREATE TABLE IF NOT EXISTS site_settings (
  id TEXT PRIMARY KEY DEFAULT 'global',
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. pages_content (all page sections as JSONB)
CREATE TABLE IF NOT EXISTS pages_content (
  slug TEXT PRIMARY KEY,
  title TEXT,
  sections JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. projects
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  type TEXT,
  area TEXT,
  status TEXT DEFAULT 'Completed',
  img TEXT,
  alt TEXT,
  order_index INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY,
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  service TEXT,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. inquiries (contact form leads)
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  org TEXT,
  phone TEXT,
  email TEXT,
  service TEXT,
  location TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- RLS Policies (Row Level Security)
-- ============================================================

-- Allow public read on site_settings, pages_content, projects, testimonials
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read pages_content" ON pages_content FOR SELECT USING (true);
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);

-- Allow all operations with publishable key (for our app)
CREATE POLICY "Allow all site_settings" ON site_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all pages_content" ON pages_content FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all projects" ON projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all testimonials" ON testimonials FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all inquiries" ON inquiries FOR ALL USING (true) WITH CHECK (true);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(order_index);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
