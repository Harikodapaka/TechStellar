import '@mantine/core/styles.css';

import React from 'react';
import type { Metadata } from 'next';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { AppLayout } from '@/components/AppLayout/AppLayout';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { theme } from '../theme';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://techstellarconsulting.ca';
export const metadata: Metadata = {
  title: 'TechStellar Consulting & Digital Transformation Services',
  description:
    'TechStellar Consulting Inc - We provide end-to-end IT consulting services in US and Canada, ensuring seamless project planning and implementation.',
  metadataBase: new URL(baseURL),
  authors: {
    name: 'TechStellar Consulting Inc.',
    url: new URL(baseURL),
  },
  keywords: [
    'TechStellar',
    'IT Consulting',
    'TechStellar Consulting Inc.',
    'Digital Transformation',
    'IT Services',
  ],
  openGraph: {
    title: 'TechStellar Consulting Inc.',
    description: 'Turning Ideas Into Impactful Solutions.',
    url: 'https://techstellarconsulting.ca',
    siteName: 'TechStellar',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechStellar Consulting Inc.',
    description: 'Turning Ideas Into Impactful Solutions.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      style={{
        scrollBehavior: 'smooth',
        scrollbarColor: 'var(--mantine-color-tsRed-filled) transparent',
      }}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <AppLayout>{children}</AppLayout>
          <ScrollToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
