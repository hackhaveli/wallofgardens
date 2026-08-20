import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Corporate Landscaping — Offices, Campuses & Commercial Sites | Wall of Gardens',
  description: 'Green space for offices, campuses and commercial sites — delivered in phases, on a live site, without shutting your entrance for six weeks.',
};

export default async function CorporateLandscapingPage() {
  const content = await getServiceContent('corporate-landscaping');
  return <ServicePageContent content={content} />;
}
