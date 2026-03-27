import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | TechStellar Consulting',
  description:
    "Explore TechStellar's IT consulting services including software development, cloud solutions, cybersecurity, digital transformation, IT staffing, and strategic consulting.",
  openGraph: {
    title: 'Our Services | TechStellar Consulting',
    description:
      'From software development to cloud migration and cybersecurity — discover how TechStellar drives digital transformation.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
