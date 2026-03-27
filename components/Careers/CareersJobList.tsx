'use client';

import React from 'react';
import { Accordion, Badge, Button, Group, Stack, Text, Title } from '@mantine/core';
import styles from '@/components/Careers/Careers.module.css';

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  posted: string;
}

interface CareersJobListProps {
  jobs: Job[];
}

export default function CareersJobList({ jobs }: CareersJobListProps) {
  return (
    <Accordion chevronPosition="right" variant="separated">
      {jobs.map((job) => (
        <Accordion.Item value={job.id} key={job.id}>
          <Accordion.Control>
            <Group align="center" style={{ width: '100%' }}>
              <div>
                <Title order={4} className={styles.jobTitle}>
                  {job.title}
                </Title>
                <Text size="sm" c="dimmed">
                  {job.summary}
                </Text>
              </div>
              <div style={{ alignSelf: 'flex-start' }}>
                <Badge color="red" variant="filled" mr={6}>
                  {job.type}
                </Badge>
                <Badge c="gray" variant="outline">
                  {job.location}
                </Badge>
              </div>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <div>
                <Text fw={600}>Responsibilities</Text>
                <ul>
                  {job.responsibilities.map((r) => (
                    <li key={r}>
                      <Text component="span">{r}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Text fw={600}>Qualifications</Text>
                <ul>
                  {job.qualifications.map((q) => (
                    <li key={q}>
                      <Text component="span">{q}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.applyRow}>
                <Button
                  component="a"
                  href={`mailto:careers@techstellarconsulting.ca?subject=Application: ${encodeURIComponent(
                    job.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </Button>
                <Text size="xs" c="dimmed">
                  Posted: {job.posted}
                </Text>
              </div>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
