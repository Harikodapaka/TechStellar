'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import TSLogo from '/public/techstellar-logo.svg';
import { Burger, Center, Container, Flex, Group, Menu, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { links } from './links';
import classes from './HeaderMenu.module.css';

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
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <Flex align="center" gap={10}>
            <Link href="/">
              <Image width={50} height={50} alt="TechStellar Logo" src={TSLogo} />
            </Link>
            <Title component="h1" order={5} w={100} className={classes.title}>
              TechStellar Consulting
            </Title>
          </Flex>
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
    </header>
  );
}
