'use client';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from '@/components/Footer/Footer.module.css';
import { TsLogo } from '@/components/TsLogo/TsLogo';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xl">
        <div className={classes.logo}>
          <TsLogo />
          <Text size="xs" c="dimmed" className={classes.description}>
            Turning Ideas Into Impactful Solutions.
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter} size="xl">
        <Text c="dimmed" size="sm">
          © 2025 TechStellar Consulting Inc. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
