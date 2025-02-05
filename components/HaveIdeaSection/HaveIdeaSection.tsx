import Link from 'next/link';
import Idea from '/public/idea.svg';
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
            <Button variant="outline" component={Link} href="/contact">
              Get in touch
            </Button>
          </Box>
        </div>
        <Image src={Idea.src} alt="idea image" className={classes.image} />
      </div>
    </Container>
  );
}
