"use client";

import React, { useState } from 'react';
import { Stack, Box, Title, Text, Divider } from '@mantine/core';
import CareersHeader from '@/components/Careers/CareersHeader';
import CareersFilters from '@/components/Careers/CareersFilters';
import CareersJobList from '@/components/Careers/CareersJobList';
import jobs from '@/components/Careers/jobs';

export default function Careers() {
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const filteredJobs = jobs.filter((job) => {
        const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
        const typeMatch = !selectedType || job.type === selectedType;
        return titleMatch && typeMatch;
    });

    const jobTypes = Array.from(new Set(jobs.map((job) => job.type)));

    return (
        <Stack gap="lg">
            <CareersHeader />

            <Box my="lg">
                <hr style={{ border: 'none', margin: 0 }} />
            </Box>

            <Stack gap="md" id="current-openings">
                <Box>
                    <Title order={3} ta="center">
                        Current Openings
                    </Title>
                    <Text c="dimmed" mt="sm" ta="right">
                        * Click on each position to view full details and apply.
                    </Text>
                </Box>

                <CareersFilters
                    searchTitle={searchTitle}
                    onSearchTitleChange={setSearchTitle}
                    selectedType={selectedType}
                    onSelectedTypeChange={setSelectedType}
                    jobTypes={jobTypes}
                />

                <Divider my="lg" />

                <CareersJobList jobs={filteredJobs} />
            </Stack>
        </Stack>
    );
}
