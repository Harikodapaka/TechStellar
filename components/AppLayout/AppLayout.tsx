'use client';

import { ReactNode } from 'react';
import { AppShell, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { HeaderMenuMobile } from '../HeaderMenu/HeaderMenuMobile';

export function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
      transitionTimingFunction="ease-in"
    >
      <AppShell.Header>
        <HeaderMenu opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <HeaderMenuMobile toggle={toggle}/>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
