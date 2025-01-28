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
          <Title className={classes.title} order={3} my="sm">
            The best IT solutions <span className={classes.highlight}>since 2022</span>
          </Title>
          <Text fz="md" mb={5} c="dimmed">
            Since our inception in 2022, TechStellar has been committed to delivering innovative and
            reliable IT solutions that empower businesses to succeed in a rapidly changing digital
            world. Over the years, we have partnered with organizations of all sizes, providing
            tailored services that address their unique challenges and drive measurable results.
          </Text>
          <Text fz="md" c="dimmed">
            Our journey is built on:
          </Text>
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
              <b>Expertise</b>: A team of seasoned professionals with a deep understanding of the IT
              landscape.
            </ListItem>
            <ListItem>
              <b>Innovation</b>: Leveraging the latest technologies to create cutting-edge
              solutions.
            </ListItem>
            <ListItem>
              <b>Trust</b>: Building long-lasting relationships through exceptional service and
              consistent results.
            </ListItem>
          </List>
          <Text fz="md" mb={5} c="dimmed">
            With a strong foundation of excellence and customer-centricity, we’ve established
            ourselves as a trusted name in IT consulting.
          </Text>
        </div>
      </div>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={10}>
        {values.map((value) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group>
              <ThemeIcon size={36} radius="xl" variant="light">
                <value.icon size={30} stroke={2} />
              </ThemeIcon>
              <Title order={5} my={10}>
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
