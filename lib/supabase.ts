import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nwhjrgpdneuprnwasbeg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_eILSop06-zrxBUut2GHyEg_02JsxGg-';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let clientInstance: any = null;

// Client-side Supabase client (singleton)
export function getSupabaseClient() {
  if (!clientInstance) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clientInstance = createSupabaseClient<any>(supabaseUrl, supabaseKey);
  }
  return clientInstance;
}

// Server-side Supabase client (new instance per request)
export function createServerClient() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createSupabaseClient<any>(supabaseUrl, supabaseKey);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = createSupabaseClient<any>(supabaseUrl, supabaseKey);
