"use client";

import React from 'react';
import { TextInput, Select, SimpleGrid } from '@mantine/core';

interface CareersFiltersProps {
    searchTitle: string;
    onSearchTitleChange: (value: string) => void;
    selectedType: string | null;
    onSelectedTypeChange: (value: string | null) => void;
    jobTypes: string[];
}

export default function CareersFilters({
    searchTitle,
    onSearchTitleChange,
    selectedType,
    onSelectedTypeChange,
    jobTypes,
}: CareersFiltersProps) {
    return (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ maxWidth: '500px' }}>
            <TextInput
                placeholder="Search by job title"
                label="Job Title"
                value={searchTitle}
                onChange={(e) => onSearchTitleChange(e.currentTarget.value)}
            />
            <Select
                label="Job Type"
                placeholder="All Types"
                data={jobTypes.map((type) => ({ value: type, label: type }))}
                value={selectedType}
                onChange={onSelectedTypeChange}
                clearable
            />
        </SimpleGrid>
    );
}
