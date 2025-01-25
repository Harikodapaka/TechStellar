'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconListDetails } from '@tabler/icons-react';
import { NavLink } from '@mantine/core';
import { links } from '@/components/HeaderMenu/links';

export function HeaderMenuMobile({ toggle }: { toggle: () => void }) {
  const pathName = usePathname();
  const closeNav = () => toggle();

  const items = links.map((link) => {
    const subMenuItems = link.links?.map((item) => (
      <NavLink
        key={item.link}
        component={Link}
        href={item.link}
        label={item.label}
        active={pathName === link.link}
        leftSection={item.icon && <item.icon size={24} stroke={1.5} />}
        onClick={closeNav}
      />
    ));
    if (subMenuItems) {
      return (
        <NavLink
          key={link.label}
          href="#"
          label="First parent link"
          leftSection={<IconListDetails size={24} stroke={1.5} />}
          childrenOffset={28}
        >
          {subMenuItems}
        </NavLink>
      );
    }
    return (
      <NavLink
        key={link.label}
        href={link.link}
        label={link.label}
        active={pathName === link.link}
        component={Link}
        leftSection={link.icon && <link.icon size={24} stroke={1.5} />}
        onClick={closeNav}
      />
    );
  });

  return <>{items}</>;
}
