import Image from 'next/image';
import Link from 'next/link';
import { Flex, Title } from '@mantine/core';
import classes from '@/components/TsLogo/TsLogo.module.css';

export function TsLogo({ isHeading = false }: { isHeading?: boolean }) {
  return (
    <Flex align="center" gap={10}>
      <Link href="/" aria-label="TechStellar Home" style={{ 'display': 'flex' }}>
        <Image width={50} height={50} alt="TechStellar Logo" src='/techstellar-logo.png' unoptimized />
      </Link>
      <Title component={isHeading ? 'h1' : 'p'} order={6} w={100} className={classes.title}>
        TechStellar Consulting
      </Title>
    </Flex>
  );
}
