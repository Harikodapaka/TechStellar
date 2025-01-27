import { ActionIcon } from '@mantine/core';
import { socialLinks } from '@/components/SocialLinks/links';

export function SocialLinks({
  variant = 'transparent',
  className,
}: {
  variant?: string;
  className?: string;
}) {
  const icons = socialLinks.map((brand, index) => (
    <ActionIcon
      component="a"
      key={index}
      size={28}
      className={className}
      variant={variant}
      href={brand.link}
      target="_blank"
    >
      <brand.icon size={22} stroke={1.5} />
    </ActionIcon>
  ));
  return icons;
}
