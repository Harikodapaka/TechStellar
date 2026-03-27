'use client';

import { useState } from 'react';
import { IconCheck, IconExclamationCircle } from '@tabler/icons-react';
import { Alert, Button, Group, SimpleGrid, Text, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

export function ContactUs() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : null),
      phone: (value) =>
        /^[+]?[\d\s()-]{7,15}$/.test(value.trim()) ? null : 'Please enter a valid phone number',
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Please enter a valid email'),
      message: (value) =>
        value.trim().length < 10 ? 'Message must be at least 10 characters' : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      setSubmitStatus('success');
      form.reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title} order={2} size="h1">
            Contact us
          </Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <ContactIconsList />
          <Group mt="xl">
            <SocialLinks variant="transparent" className={classes.social} />
          </Group>
        </div>
        <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Your Name"
            mt="md"
            required
            aria-label="Your name"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Phone Number"
            placeholder="Your Phone Number"
            mt="md"
            required
            aria-label="Your phone number"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('phone')}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            aria-label="Your email address"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('email')}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Anything on your mind? We'll be glad to assist you!"
            minRows={6}
            mt="md"
            aria-label="Your message"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('message')}
          />

          {submitStatus === 'success' && (
            <Alert icon={<IconCheck size={16} />} color="green" mt="md">
              Your message has been sent successfully! We&apos;ll get back to you soon.
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert icon={<IconExclamationCircle size={16} />} color="red" mt="md">
              Failed to send your message. Please try again or email us directly.
            </Alert>
          )}

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={submitStatus === 'loading'}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
