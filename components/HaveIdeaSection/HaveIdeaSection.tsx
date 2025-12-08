import Link from 'next/link';
import { Box, Button, Container, Divider, Image, Text, Title } from '@mantine/core';
import classes from './HaveIdeaSection.module.css';

export function HaveIdeaSection() {
  return (
    <Container size="xl">
      <Divider my="lg" />
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title} order={2} size="h3">
            Have an Idea?
          </Title>
          <Text fz="md" mb={5} c="dimmed">
            Let us assist you! Our talented designers and agile developers can quickly transform
            your idea into reality with a fully functional proof of concept. Contact us to learn
            more.
          </Text>
          <Box mt="md">
            <Link href="/contact" passHref>
              <Button variant="outline" component='span'>
                Get in touch
              </Button>
            </Link>
          </Box>
        </div>
        <Image src='/idea.svg' alt="idea image" className={classes.image} />
      </div>
    </Container>
  );
}
