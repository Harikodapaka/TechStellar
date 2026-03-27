import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | TechStellar Consulting',
  description:
    "Review TechStellar Consulting's Terms of Use. Understand the terms and conditions governing the use of our website and services.",
  openGraph: {
    title: 'Terms of Use | TechStellar Consulting',
    description:
      "Review the terms and conditions for using TechStellar Consulting's website and services.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | TechStellar Consulting',
    description:
      "Review the terms and conditions for using TechStellar Consulting's website and services.",
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
