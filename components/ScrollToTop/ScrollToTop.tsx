'use client';

import { IconArrowUp } from '@tabler/icons-react';
import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 30, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <ActionIcon
            size={32}
            variant="filled"
            aria-label="Scroll to top"
            style={transitionStyles}
            component="a"
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp size={16} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}
