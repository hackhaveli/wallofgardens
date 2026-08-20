import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Terrace Gardens — Rooftop Landscape, Delhi NCR | Wall of Gardens',
  description: 'Rooftop landscapes designed around what the slab can carry and where the water goes.',
};

export default async function ServicePage() {
  const content = await getServiceContent('terrace-garden');
  return <ServicePageContent content={content} />;
}
