'use client';

import { Button, Container, Text, Title } from '@mantine/core';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container size="sm" py={80} style={{ textAlign: 'center' }}>
      <Title order={1} mb="md">
        Something went wrong
      </Title>
      <Text c="dimmed" mb="xl">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </Text>
      <Button onClick={reset}>Try again</Button>
    </Container>
  );
}
