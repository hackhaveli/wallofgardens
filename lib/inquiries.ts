import fs from 'fs';
import path from 'path';
import { supabase } from './supabase';

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  org?: string | null;
  service?: string | null;
  location?: string | null;
  area?: string | null;
  timeline?: string | null;
  budget?: string | null;
  message?: string | null;
  status: 'new' | 'contacted' | 'quoted' | 'closed' | 'spam';
  admin_notes?: string | null;
  source?: string;
  created_at: string;
  updated_at: string;
}

// In-memory cache for ultra-fast response and serverless fallback
let inMemoryInquiries: Inquiry[] = [];

function getStoragePath(): string {
  try {
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return path.join(dir, 'inquiries.json');
  } catch {
    return path.join('/tmp', 'wog_inquiries.json');
  }
}

function readLocalInquiries(): Inquiry[] {
  try {
    const filePath = getStoragePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        inMemoryInquiries = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Could not read local inquiries file, using memory cache:', err);
  }
  return inMemoryInquiries;
}

function writeLocalInquiries(items: Inquiry[]): boolean {
  inMemoryInquiries = items;
  try {
    const filePath = getStoragePath();
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('Could not write local inquiries file, saved in memory:', err);
    return false;
  }
}

/**
 * Format inquiry into a clean, human-readable WhatsApp message
 */
export function buildWhatsAppLink(inq: Partial<Inquiry>): string {
  const parts = [
    `*🌿 NEW INQUIRY — Wall of Gardens Website*`,
    `--------------------------------`,
    `*Client:* ${inq.name || 'Anonymous'}`,
    `*Phone:* ${inq.phone || 'Not provided'}`,
  ];

  if (inq.email) parts.push(`*Email:* ${inq.email}`);
  if (inq.org) parts.push(`*Company / Property:* ${inq.org}`);
  if (inq.service) parts.push(`*Service:* ${inq.service}`);
  if (inq.location) parts.push(`*Location:* ${inq.location}`);
  if (inq.area) parts.push(`*Area / Size:* ${inq.area}`);
  if (inq.timeline) parts.push(`*Timeline:* ${inq.timeline}`);
  if (inq.budget) parts.push(`*Indicative Budget:* ${inq.budget}`);
  if (inq.message) parts.push(`\n*Notes / Details:*\n${inq.message}`);

  parts.push(`--------------------------------`);
  parts.push(`*Action:* Please reply to client or schedule site visit.`);

  const text = parts.join('\n');
  return `https://wa.me/919990960669?text=${encodeURIComponent(text)}`;
}

/**
 * Save new inquiry with double redundancy:
 * 1. Immediate local persistent file / memory store
 * 2. Supabase (if reachable, with timeout)
 */
export async function saveInquiry(input: {
  name: string;
  phone: string;
  email?: string | null;
  org?: string | null;
  service?: string | null;
  location?: string | null;
  area?: string | null;
  timeline?: string | null;
  budget?: string | null;
  message?: string | null;
}): Promise<{ inquiry: Inquiry; whatsappUrl: string }> {
  const now = new Date().toISOString();
  const id = `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  const inquiry: Inquiry = {
    id,
    name: input.name.trim(),
    phone: input.phone.trim(),
    email: input.email ? input.email.trim() : null,
    org: input.org ? input.org.trim() : null,
    service: input.service || null,
    location: input.location || null,
    area: input.area || null,
    timeline: input.timeline || null,
    budget: input.budget || null,
    message: input.message || null,
    status: 'new',
    admin_notes: null,
    source: 'website_contact_form',
    created_at: now,
    updated_at: now,
  };

  // 1. Save to local storage
  const current = readLocalInquiries();
  const updated = [inquiry, ...current.filter(i => i.id !== inquiry.id)];
  writeLocalInquiries(updated);

  // 2. Try Supabase with timeout (fails gracefully if DB paused or offline)
  try {
    const formattedMessage = [
      input.message ? `Notes: ${input.message}` : null,
      input.area ? `Approx Area: ${input.area}` : null,
      input.timeline ? `Timeline: ${input.timeline}` : null,
      input.budget ? `Indicative Budget: ${input.budget}` : null,
    ].filter(Boolean).join('\n') || 'Direct website inquiry';

    const insertPromise = supabase.from('inquiries').insert({
      id: inquiry.id,
      name: inquiry.name,
      org: inquiry.org,
      phone: inquiry.phone,
      email: inquiry.email,
      service: inquiry.service,
      location: inquiry.location,
      message: formattedMessage,
      status: 'new',
      created_at: now,
    });

    // 2.5s timeout for Supabase
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Supabase insert timed out')), 2500)
    );

    await Promise.race([insertPromise, timeoutPromise]);
  } catch (dbErr) {
    console.warn('Notice: Supabase sync skipped or failed (inquiry safely saved locally):', dbErr);
  }

  const whatsappUrl = buildWhatsAppLink(inquiry);
  return { inquiry, whatsappUrl };
}

/**
 * Get all inquiries (merged from local store and Supabase if available)
 */
export async function getAllInquiries(): Promise<Inquiry[]> {
  const localItems = readLocalInquiries();

  try {
    const fetchPromise = supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    const timeoutPromise = new Promise<{ data: Inquiry[] | null }>((_, reject) =>
      setTimeout(() => reject(new Error('Supabase fetch timed out')), 2500)
    );

    const result = await Promise.race([fetchPromise, timeoutPromise]);
    const remoteData = (result && 'data' in result ? result.data : null) as Inquiry[] | null;

    if (remoteData && Array.isArray(remoteData)) {
      // Merge unique by id
      const map = new Map<string, Inquiry>();
      localItems.forEach(i => map.set(i.id, i));
      remoteData.forEach(i => {
        if (!map.has(i.id)) {
          map.set(i.id, {
            ...i,
            name: i.name || 'Anonymous',
            phone: i.phone || '',
            status: i.status || 'new',
            created_at: i.created_at || new Date().toISOString(),
            updated_at: i.updated_at || i.created_at || new Date().toISOString(),
          });
        }
      });
      return Array.from(map.values()).sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
  } catch (err) {
    console.warn('Notice: Reading from local inquiries fallback (remote unavailable):', err);
  }

  return localItems.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/**
 * Update inquiry status or notes
 */
export async function updateInquiry(
  id: string,
  patch: { status?: Inquiry['status']; admin_notes?: string }
): Promise<boolean> {
  const localItems = readLocalInquiries();
  const idx = localItems.findIndex(i => i.id === id);

  if (idx !== -1) {
    localItems[idx] = {
      ...localItems[idx],
      ...patch,
      updated_at: new Date().toISOString(),
    };
    writeLocalInquiries(localItems);
  }

  try {
    await supabase.from('inquiries').update({ ...patch, updated_at: new Date().toISOString() }).eq('id', id);
  } catch (err) {
    console.warn('Notice: Supabase update skipped (local updated):', err);
  }

  return true;
}

/**
 * Delete inquiry
 */
export async function deleteInquiry(id: string): Promise<boolean> {
  const localItems = readLocalInquiries();
  const filtered = localItems.filter(i => i.id !== id);
  writeLocalInquiries(filtered);

  try {
    await supabase.from('inquiries').delete().eq('id', id);
  } catch (err) {
    console.warn('Notice: Supabase delete skipped (local deleted):', err);
  }

  return true;
}
