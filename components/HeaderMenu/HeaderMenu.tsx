'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Flex, Group, Menu } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import classes from '@/components/HeaderMenu/HeaderMenu.module.css';
import { links } from '@/components/HeaderMenu/links';
import { TsLogo } from '@/components/TsLogo/TsLogo';

export function HeaderMenu({ opened, toggle }: { opened: boolean; toggle: () => void }) {
  const pathName = usePathname();

  const items = links.map((link) => {
    const subMenuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (subMenuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{subMenuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={pathName === link.link ? true : undefined}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <TsLogo isHeading/>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Flex gap={10} align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              hiddenFrom="sm"
              aria-label="Toggle Menu"
            />
            <ColorSchemeToggle />
          </Flex>
        </div>
      </Container>
    </div>
  );
}
