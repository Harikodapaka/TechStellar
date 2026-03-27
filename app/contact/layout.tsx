import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TechStellar Consulting',
  description:
    'Get in touch with TechStellar Consulting. Reach out for IT consulting, project inquiries, or partnership opportunities. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us | TechStellar Consulting',
    description:
      'Have questions or ready to start a project? Contact TechStellar Consulting today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | TechStellar Consulting',
    description:
      'Have questions or ready to start a project? Contact TechStellar Consulting today.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
