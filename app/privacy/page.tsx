// revalidate once per day

import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, TypographyStylesProvider } from '@mantine/core';
import { getLegalPage } from '@/app/lib/getLegalPage';
import { LegalPageHeader } from '@/components/LegalPageHeader/LegalPageHeader';

export const revalidate = 86400;

export default async function PrivacyPage() {
  const pageData = await getLegalPage('privacy-policy');

  if (!pageData) {
    notFound();
  }

  return (
    <TypographyStylesProvider>
      <LegalPageHeader
        title={pageData.title}
        image={pageData.image}
        description={pageData.description}
      />
      <Container size="xl" fz="sm">
        {documentToReactComponents(pageData.content.json)}
      </Container>
    </TypographyStylesProvider>
  );
}
