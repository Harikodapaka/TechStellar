import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, TypographyStylesProvider } from '@mantine/core';
import { getLegalPage } from '@/app/lib/getLegalPage';
import { LegalPageHeader } from '@/components/LegalPageHeader/LegalPageHeader';

export default async function TermsPage() {
  const pageData = await getLegalPage('terms-of-use');
  return (
    <TypographyStylesProvider>
      <LegalPageHeader
        title={pageData.title}
        image={pageData.image}
        description={pageData.description}
      />
      <Container size="xl" fz="sm" pb={20}>
        {documentToReactComponents(pageData.content.json)}
      </Container>
    </TypographyStylesProvider>
  );
}
