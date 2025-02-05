import MeetingSvg from '/public/meeting.svg';
import { Box, Container, Flex, Image, Text, Title } from '@mantine/core';
import { ContactUs } from '@/components/ContactUs/ContactUs';

export default function ContactPage() {
  return (
    <Container size="xl">
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
      >
        <Box maw="800px">
          <Title component="p">Let's chat</Title>
          <Text c="dimmed">
            Have questions or ready to bring your ideas to life? We're here to help! Connect with us
            today and let's start creating something extraordinary together. Whether you’re seeking
            innovative solutions, expert advice, or just want to learn more about what we do, we’re
            just a message away.
          </Text>
        </Box>
        <Image
          h={{ base: 350, md: 500 }}
          w={{ base: 350, md: 'auto' }}
          src={MeetingSvg.src}
          alt="contact image"
        />
      </Flex>
      <ContactUs />
    </Container>
  );
}
