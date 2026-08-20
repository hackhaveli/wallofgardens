import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Moss Walls — Preserved Moss Installations | Wall of Gardens',
  description: 'Preserved moss for interiors. No irrigation, no sunlight, no maintenance schedule to forget.',
};

export default async function ServicePage() {
  const content = await getServiceContent('moss-wall');
  return <ServicePageContent content={content} />;
}
