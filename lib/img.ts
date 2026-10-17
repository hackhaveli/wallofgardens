// Hosts next/image is allowed to optimise (mirrors images.remotePatterns in next.config.ts).
// Anything else (e.g. a pasted third-party URL from the admin) is rendered unoptimised
// rather than throwing at runtime.
export function canOptimize(src: string): boolean {
  if (!src) return false;
  if (src.startsWith('/')) return true;
  try {
    const { protocol, hostname } = new URL(src);
    return protocol === 'https:' && (hostname.endsWith('.supabase.co') || hostname === 'images.unsplash.com');
  } catch {
    return false;
  }
}
