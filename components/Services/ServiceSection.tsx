'use client';

import React from 'react';
import Image from 'next/image';
import { IconTargetArrow } from '@tabler/icons-react';
import { List, Text, ThemeIcon, Title } from '@mantine/core';
import styles from './ServiceSection.module.css';

export interface ServiceSectionProps {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string | null;
  reverseOnDesktop?: boolean;
}

export default function ServiceSection({
  title,
  paragraphs = [],
  bullets = [],
  image = null,
  reverseOnDesktop = false,
}: ServiceSectionProps) {
  return (
    <section className={`${styles.row} ${reverseOnDesktop ? styles.rowReverse : ''}`}>
      <div className={styles.text}>
        <Title order={3} size="h4">
          {title}
        </Title>
        {paragraphs.map((p, idx) => (
          <Text c="dimmed" key={idx} style={{ marginTop: idx === 0 ? 8 : 12 }}>
            {p}
          </Text>
        ))}

        {bullets.length > 0 && (
          <List spacing="sm" style={{ marginTop: 12 }}>
            {bullets.map((b) => (
              <List.Item
                key={b}
                icon={
                  <ThemeIcon variant="light" size="sm" radius="xl">
                    <IconTargetArrow size={16} />
                  </ThemeIcon>
                }
              >
                {b}
              </List.Item>
            ))}
          </List>
        )}
      </div>

      <div className={styles.visual}>
        {image ? (
          <Image
            src={image}
            alt={`${title} illustration`}
            width={425}
            height={425}
            style={{ objectFit: 'fill', borderRadius: 8, padding: '8px' }}
          />
        ) : (
          <div className={styles.visualPlaceholder} />
        )}
      </div>
    </section>
  );
}
