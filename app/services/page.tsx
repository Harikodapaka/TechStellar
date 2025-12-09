'use client';

import React from 'react';
import { Container, Stack, Text, Title } from '@mantine/core';
import classes from '@/components/AboutUs/AboutUs.module.css';
import services from '@/components/Services/servicesData';
import ServiceSection from '@/components/Services/ServiceSection';

export default function ServicesPage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <Title order={1}>
          <span className={classes.highlight}>Services</span> We Offer
        </Title>
        <Text size="md" c="dimmed">
          Explore what we do — from offshore development and product engineering to data science,
          DevOps and emerging technologies Artificial Intelligence & Machine Learning.
        </Text>

        {services.map((s) => (
          <ServiceSection
            key={s.title}
            title={s.title}
            paragraphs={s.paragraphs}
            bullets={s.bullets}
            image={s.image}
            reverseOnDesktop={!!s.reverseOnDesktop}
          />
        ))}
      </Stack>
    </Container>
  );
}
