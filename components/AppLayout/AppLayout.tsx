'use client';

import { ReactNode } from 'react';
import { Anchor, AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { HeaderMenuMobile } from '@/components/HeaderMenu/HeaderMenuMobile';
import { Footer } from '../Footer/Footer';

export function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
      transitionTimingFunction="ease-in"
    >
      <Anchor
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          e.currentTarget.style.position = 'fixed';
          e.currentTarget.style.top = '10px';
          e.currentTarget.style.left = '10px';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
          e.currentTarget.style.overflow = 'visible';
          e.currentTarget.style.zIndex = '9999';
        }}
        onBlur={(e) => {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.left = '-9999px';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
          e.currentTarget.style.overflow = 'hidden';
        }}
      >
        Skip to main content
      </Anchor>

      <AppShell.Header>
        <HeaderMenu opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <HeaderMenuMobile toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main id="main-content">{children}</AppShell.Main>
      <Footer />
    </AppShell>
  );
}
