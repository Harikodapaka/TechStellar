import { ActionIcon } from '@mantine/core';
import { socialLinks } from '@/components/SocialLinks/links';

export function SocialLinks({
  variant = 'transparent',
  className,
}: {
  variant?: string;
  className?: string;
}) {
  const icons = socialLinks.map((brand) => (
    <ActionIcon
      component="a"
      key={brand.name}
      size={28}
      className={className}
      variant={variant}
      href={brand.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit TechStellar on ${brand.name}`}
    >
      <brand.icon size={22} stroke={1.5} />
    </ActionIcon>
  ));
  return icons;
}
