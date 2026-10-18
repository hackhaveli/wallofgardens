import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Projects & Living Wall Portfolio | Wall of Gardens',
  description:
    'Portfolio of living walls, vertical gardens, corporate plantscaping, and rooftop terrace gardens engineered across Delhi NCR, Gurugram, Bengaluru, and Mumbai.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Selected Projects & Living Wall Portfolio | Wall of Gardens',
    description:
      'A record of living walls and biophilic architecture engineered across Delhi NCR, Gurugram, Bengaluru, and Mumbai.',
    url: 'https://wallofgardens.com/projects',
    images: [
      {
        url: '/projects/vertical-gardens/holiday-inn-atrium.jpg',
        width: 1200,
        height: 630,
        alt: 'Wall of Gardens Selected Projects',
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
