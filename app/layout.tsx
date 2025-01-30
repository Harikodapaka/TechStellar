import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { AppLayout } from '@/components/AppLayout/AppLayout';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { theme } from '../theme';

export const metadata = {
  title: 'TechStellar Consulting',
  description: 'TechStellar Consulting Inc.',
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
        <link rel="shortcut icon" href="/favicon.svg" />
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
