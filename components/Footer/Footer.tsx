import Link from 'next/link';
import {
  Anchor,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from '@/components/Footer/Footer.module.css';
import { officeAddresses } from '@/components/Footer/offices';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { TsLogo } from '@/components/TsLogo/TsLogo';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xl">
        <Stack>
          <div className={classes.logo}>
            <TsLogo />
            <Text size="xs" fs="italic" className={classes.description}>
              Turning Ideas Into Impactful Solutions.
            </Text>
          </div>
          <Flex gap={10} direction="column" align={{ base: 'center', sm: 'start' }}>
            <Text size="xs" fw="bold" className={classes.description}>
              Follow us on
            </Text>
            <Box>
              <SocialLinks variant="subtle" />
            </Box>
          </Flex>
        </Stack>
        <Stack display={{ base: 'none', sm: 'flex' }} gap={15}>
          <Title order={2} size='h6'>📍 Our Offices</Title>
          <Group gap={10}>
            {officeAddresses.map((office) => (
              <Card padding="sm" radius="md" bg="none" maw="15rem" withBorder key={office.country}>
                <Stack gap={10}>
                  <Text fw="bold" component='h3'>{office.country}</Text>
                  <Text fz="sm">{office.address}</Text>
                </Stack>
              </Card>
            ))}
          </Group>
        </Stack>
      </Container>
      <Divider size="xs" m="md" />
      <Container className={classes.afterFooter} size="xl">
        <Flex align="center" justify="space-between" direction={{ base: 'column', sm: 'row' }}>
          <Text size="sm">
            © {new Date().getFullYear()} TechStellar Consulting Inc. All rights reserved.
          </Text>
          <Group pr={{ base: 'none', sm: '40' }}>
            <Anchor size="sm" component={Link} href="/">
              Terms of use
            </Anchor>
            <Text c="dimmed">|</Text>
            <Anchor size="sm" component={Link} href="/">
              Privacy Policy
            </Anchor>
          </Group>
        </Flex>
      </Container>
    </footer>
  );
}
