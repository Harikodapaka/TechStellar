"use client";

import React from 'react';
import { Title, Text, Button, Flex, Box, Image } from '@mantine/core';

export default function CareersHeader() {
    return (
        <Flex
            align="center"
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'sm', sm: 'lg' }}
        >
            <Box maw="800px" mt={{ base: 0, md: 'lg' }}>
                <Title component="p" order={2} size="h3">
                    Join the Team at <strong>TechStellar</strong>
                </Title>
                <Text c="dimmed" mt="md">
                    At <strong>TechStellar</strong>, we're always on the lookout for talented, forward-thinking
                    individuals who can bring fresh ideas and strong expertise to our growing team. We believe that
                    great people drive great results—so we take the time to get to know every candidate and ensure
                    each person is the right fit for both the role and our culture.
                </Text>

                <Title order={3} mt="lg" size="h5">
                    Our Recruitment Approach
                </Title>
                <Text c="dimmed" mt="sm">
                    Our recruitment process is thorough and transparent, aiming to match your skills and ambitions with the right opportunity at <strong>TechStellar</strong>. If we find your strengths fit another role, we'll discuss alternative options with you.
                </Text>

                <Title order={3} mt="lg" size="h5">
                    Grow With Us
                </Title>
                <Text c="dimmed" mt="sm">
                    We're growing fast! Explore our openings and apply to join <strong>TechStellar</strong>. If you're a match, we'll contact you about next steps.
                </Text>
                <Text c="dimmed" mt="sm">
                    We look forward to learning more about you—and hopefully welcoming you to the{' '}
                    <strong>TechStellar</strong> family for many exciting years ahead.
                </Text>
                <Button
                    component="a"
                    href="#current-openings"
                    mt="lg"
                    size="md"
                    radius="xl"
                >
                    View Open Positions
                </Button>
            </Box>
            <Image
                h={{ base: 350, md: 500 }}
                w={{ base: 350, md: 'auto' }}
                src='/joinUs.svg'
                alt="careers image"
                display={{ base: 'none', md: 'block' }}
            />
        </Flex>
    );
}
