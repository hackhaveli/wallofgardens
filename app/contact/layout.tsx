import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Wall of Gardens — Book Free Site Consultation | Delhi NCR, Bangalore, Mumbai',
  description:
    'Schedule a free site assessment for engineered living walls, vertical gardens, corporate plant AMC, and terrace landscapes across Delhi NCR (New Delhi, Gurugram, Noida), Bengaluru, Mumbai, Pune, and Hyderabad.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Wall of Gardens — Free Site Assessment & Quotation',
    description:
      'Book a site consultation for corporate facilities, living walls, and luxury residences across Delhi NCR, Bengaluru, Mumbai, and Pune.',
    url: 'https://wallofgardens.com/contact',
    images: [{ url: '/cta_bg.jpg', width: 1200, height: 630, alt: 'Contact Wall of Gardens' }],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'LandscapeArchitect', 'ProfessionalService'],
      '@id': 'https://wallofgardens.com/contact/#localbusiness',
      name: 'Wall of Gardens',
      legalName: 'Wall of Gardens Private Limited',
      url: 'https://wallofgardens.com',
      logo: 'https://wallofgardens.com/icon.png',
      image: 'https://wallofgardens.com/cta_bg.jpg',
      telephone: '+91-99909-60669',
      email: 'founder@wallofgardens.com',
      priceRange: '₹₹₹₹',
      hasMap: 'https://maps.google.com/?q=Wall+of+Gardens+Janakpuri+New+Delhi+110058',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6th Floor, MERI, Janakpuri',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110058',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6219,
        longitude: 77.0878,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'South Delhi' },
        { '@type': 'City', name: 'Gurugram' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Hyderabad' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-99909-60669',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
          areaServed: 'IN',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://wallofgardens.com/contact/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://wallofgardens.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: 'https://wallofgardens.com/contact',
        },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      {children}
    </>
  );
}
