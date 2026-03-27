import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TechStellar Consulting',
  description:
    "Read TechStellar Consulting's Privacy Policy. Learn how we collect, use, and protect your personal data when you use our services.",
  openGraph: {
    title: 'Privacy Policy | TechStellar Consulting',
    description:
      'Learn how TechStellar Consulting collects, uses, and protects your personal information.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | TechStellar Consulting',
    description:
      'Learn how TechStellar Consulting collects, uses, and protects your personal information.',
  },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
