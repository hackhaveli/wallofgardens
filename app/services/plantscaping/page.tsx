import type { Metadata } from 'next';
import { getServiceContent, ServicePageContent } from '../../../lib/service-page-shared';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Corporate Plantscaping — Office Indoor Planting & Maintenance | Wall of Gardens',
  description: 'Indoor planting specified against measured light, installed and maintained on contract.',
};

export default async function ServicePage() {
  const content = await getServiceContent('plantscaping');
  return <ServicePageContent content={content} />;
}
