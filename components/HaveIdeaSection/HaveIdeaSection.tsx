import Idea from '/public/idea.svg';
import { Button, Container, Divider, Image, Text, Title } from '@mantine/core';
import classes from './HaveIdeaSection.module.css';

export function HaveIdeaSection() {
  return (
    <Container size="xl">
      <Divider my="lg" />
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title} component="p" size="h1">
            Have an Idea?
          </Title>
          <Text fw={500} fz="md" mb={5}>
            Let us assist you! Our talented designers and agile developers can quickly transform
            your idea into reality with a fully functional proof of concept. Contact us to learn
            more.
          </Text>
          <div className={classes.controls}>
            <Button className={classes.control} variant="outline">
              Get in touch
            </Button>
          </div>
        </div>
        <Image src={Idea.src} className={classes.image} />
      </div>
    </Container>
  );
}
