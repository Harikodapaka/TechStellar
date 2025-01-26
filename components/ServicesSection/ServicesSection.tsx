'use client';

import {
  IconBug,
  IconCloudNetwork,
  IconCode,
  IconRouteSquare,
  IconSpeakerphone,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Badge, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './ServicesSection.module.css';

const mockdata = [
  {
    title: 'Software Development',
    description:
      'We design and build bespoke software solutions that streamline your business operations. Whether you need a custom application, enterprise software, or web solutions, our team creates scalable products tailored to your requirements.',
    icon: IconCode,
  },
  {
    title: 'Cloud Solutions & Migration',
    description:
      'Move your business to the cloud with confidence. Our team offers secure and scalable cloud solutions tailored to your needs, ensuring a smooth transition and seamless integration into your existing systems.',
    icon: IconCloudNetwork,
  },
  {
    title: 'Cybersecurity Services',
    description:
      'Protect your business from evolving cyber threats with our comprehensive cybersecurity services. We help secure your data, networks, and systems, ensuring compliance and peace of mind.',
    icon: IconBug,
  },
  {
    title: 'Digital Transformation',
    description:
      'Embrace the future of technology with our digital transformation services. We help businesses optimize their processes, improve customer experience, and enhance operational efficiency through the strategic use of technology.',
    icon: IconSpeakerphone,
  },
  {
    title: 'IT Staffing',
    description:
      'Finding the right talent is essential to driving technology success. Our IT staffing services connect you with highly skilled professionals, whether for short-term projects or long-term roles, to strengthen your team and fill skill gaps.',
    icon: IconUsersGroup,
  },
  {
    title: 'IT Strategy & Planning',
    description:
      'We help businesses align their IT strategies with their overall goals, ensuring seamless integration and long-term success. From assessing your current infrastructure to developing a roadmap for future growth, we ensure your IT investments deliver maximum value.',
    icon: IconRouteSquare,
  },
];

export function ServicesSection() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} className={classes.cardIcon} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Our Services
        </Badge>
      </Group>

      <Title order={3} className={classes.title} ta="center" mt="sm">
        What We're Offering?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We offer a comprehensive range of IT consulting services designed to meet the unique needs
        of businesses across various industries. At TechStellar, we are committed to helping your
        business leverage technology to achieve strategic objectives. Whether you're looking to
        optimize, our team is here to guide you every step of the way.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
