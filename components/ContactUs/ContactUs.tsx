import { Button, Group, SimpleGrid, Text, Textarea, TextInput, Title } from '@mantine/core';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

export function ContactUs() {
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">
            <SocialLinks variant="transparent" className={classes.social} />
          </Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Name"
            placeholder="Your Name"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Phone Number"
            placeholder="Your Phone Number"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Anything On your Mind. We’ll Be Glad To Assist You!"
            minRows={6}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
