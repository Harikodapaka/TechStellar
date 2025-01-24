'use client';

import { IconMoonStars, IconSunFilled } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const icon = colorScheme === 'light' ? <IconMoonStars /> : <IconSunFilled />;
  return (
    <ActionIcon
      size="md"
      aria-label="Toggle theme icon"
      onClick={toggleColorScheme}
      variant="outline"
      p={4}
      radius="md"
      color={colorScheme === 'light' ? undefined : 'white'}
    >
      {icon}
    </ActionIcon>
  );
}
