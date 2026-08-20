import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Vertical Gardens — Natural, Hybrid & Artificial Living Walls | Wall of Gardens',
  description: 'Natural, hybrid and artificial living walls for offices, lobbies and homes. Engineered before a single plant is specified.',
};

export default async function ServicePage() {
  const content = await getServiceContent('vertical-gardens');
  return <ServicePageContent content={content} />;
}
