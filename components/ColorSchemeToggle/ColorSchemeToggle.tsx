'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const icon = colorScheme === 'light' ? <IconMoonStars /> : <IconSunFilled/>
  return (
    <ActionIcon
      size="md"
      aria-label="Toggle theme icon"
      onClick={toggleColorScheme}
      variant='outline'
      color={colorScheme === 'light' ? undefined : 'white'}
    >
      {icon}
    </ActionIcon>
  );
}
