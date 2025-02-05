import { IconCircleCheckFilled } from '@tabler/icons-react';
import Team from '/public/team.svg';
import {
  Badge,
  Card,
  Container,
  Group,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from '@/components/AboutUs/AboutUs.module.css';
import { values } from './values';

export function AboutUs() {
  return (
    <Container size="xl" py="xl" id="services">
      <div className={classes.wrapper}>
        <Image src={Team.src} className={classes.image} alt="team image" />
        <div className={classes.body}>
          <Badge variant="light" size="lg">
            About us
          </Badge>
          <Title className={classes.title} order={2} my="sm">
            The best IT solutions <span className={classes.highlight}>since 2022</span>
          </Title>
          <Text fz="md" mb={5} c="dimmed">
            Since 2022, TechStellar has been a leading provider of innovative IT solutions, helping
            businesses thrive in a fast-evolving digital landscape. We specialize in custom IT
            consulting, cloud solutions, and digital transformation to drive measurable business
            growth.
          </Text>
          <Title fz="md" order={3} size="h5" mt={6}>
            Why Businesses Trust TechStellar?
          </Title>
          <List
            my={20}
            spacing="sm"
            size="sm"
            c="dimmed"
            icon={
              <ThemeIcon size={20} radius="xl" variant="light">
                <IconCircleCheckFilled size={14} stroke={2} />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>Expert IT Professionals</b>: Decades of experience in cutting-edge technology.
            </ListItem>
            <ListItem>
              <b>Innovative Solutions</b>: Leveraging AI, cloud computing, and automation.
            </ListItem>
            <ListItem>
              <b>Reliable & Scalable</b>: ailored strategies for startups and enterprises alike.
            </ListItem>
          </List>
          <Text fz="md" mb={5} c="dimmed">
            With a reputation for excellence, trust, and customer success, TechStellar is your go-to
            IT consulting partner for future-proof technology solutions.
          </Text>
        </div>
      </div>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={10}>
        {values.map((value) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={value.title}>
            <Group>
              <ThemeIcon size={36} radius="xl" variant="light">
                <value.icon size={30} stroke={2} />
              </ThemeIcon>
              <Title order={3} size="h5" my={10}>
                {value.title}
              </Title>
            </Group>
            <Text fz="sm" mb={5} c="dimmed">
              {value.text}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
