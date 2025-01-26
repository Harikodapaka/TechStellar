import Image from 'next/image';
import Link from 'next/link';
import TSLogo from '/public/techstellar-logo.png';
import { Flex, Title } from '@mantine/core';
import classes from '@/components/TsLogo/TsLogo.module.css';

export function TsLogo() {
  return (
    <Flex align="center" gap={10}>
      <Link href="/">
        <Image width={50} height={50} alt="TechStellar Logo" src={TSLogo} unoptimized />
      </Link>
      <Title component="h1" order={5} w={100} className={classes.title}>
        TechStellar Consulting
      </Title>
    </Flex>
  );
}
