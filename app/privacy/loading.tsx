import { Box, Skeleton } from '@mantine/core';

export default function Loading() {
  return (
    <>
      <Skeleton height={200} mb="xl" />
      {Array.from(Array(10), (_, i) => i + 1).map((i) => (
        <Box key={i} my="lg">
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Box>
      ))}
    </>
  );
}
