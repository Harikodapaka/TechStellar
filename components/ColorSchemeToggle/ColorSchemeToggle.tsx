'use client';

import { IconMoonStars, IconSunFilled } from '@tabler/icons-react';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const icon = computedColorScheme === 'light' ? <IconMoonStars /> : <IconSunFilled />;
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ActionIcon
      size="md"
      aria-label="Toggle theme icon"
      onClick={toggleColorScheme}
      variant="outline"
      p={4}
      radius="md"
      color={computedColorScheme === 'light' ? undefined : 'white'}
      suppressHydrationWarning
    >
      {icon}
    </ActionIcon>
  );
}
