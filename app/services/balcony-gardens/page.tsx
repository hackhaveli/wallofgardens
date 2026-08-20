import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Balcony Gardens — Compact Residential Green Spaces | Wall of Gardens',
  description: 'Compact spaces planned to the square foot. The balcony stays usable and nothing drains onto the balcony below.',
};

export default async function ServicePage() {
  const content = await getServiceContent('balcony-gardens');
  return <ServicePageContent content={content} />;
}
