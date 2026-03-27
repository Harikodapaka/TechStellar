import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | TechStellar Consulting',
  description:
    'Join TechStellar Consulting! Explore open positions in software development, cloud engineering, data science, and more. Build your career with us.',
  openGraph: {
    title: 'Careers | TechStellar Consulting',
    description:
      'Explore career opportunities at TechStellar Consulting. We are hiring talented professionals across multiple technology domains.',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
