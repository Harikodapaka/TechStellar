'use client';

import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  List,
  ListItem,
  Text,
  ThemeIcon,
  useComputedColorScheme,
} from '@mantine/core';
import classes from '@/components/IntroSection/IntroSection.module.css';

export function IntroSection() {
  const colorScheme = useComputedColorScheme();
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <p className={classes.title}>
            Welcome to{' '}
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              TechStellar
            </Text>
          </p>
          <Text c="dimmed" mt="md">
            We provide end-to-end IT consulting services in US and Canada, ensuring seamless project
            planning and implementation. Our consultants work with developers, network specialists,
            and vendors to meet your functional and budgetary needs.
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={14} stroke={2} />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>Result-Oriented</b> – Delivering measurable outcomes that drive growth.
            </ListItem>
            <ListItem>
              <b>Innovative Solutions</b> – Using advanced tools to foster innovation.
            </ListItem>
            <ListItem>
              <b>Cost-Effective Services</b> – Maximizing value within your budget.
            </ListItem>
          </List>
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              component="a"
              href="#services"
            >
              Get started
            </Button>
            <Link href="/contact" passHref>
              <Button
                component="span"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Contact us
              </Button>
            </Link>
          </Group>
        </div>
        <Box>
          <Image
            src={colorScheme === 'light' ? '/teamwork.svg' : '/teamwork-dark.svg'}
            className={classes.image}
            alt="teamwork"
          />
        </Box>
      </div>
    </Container>
  );
}
