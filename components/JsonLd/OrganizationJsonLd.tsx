const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://techstellarconsulting.ca';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechStellar Consulting Inc.',
  url: BASE_URL,
  logo: `${BASE_URL}/techstellar-logo.png`,
  description:
    'TechStellar Consulting Inc provides end-to-end IT consulting services in the US and Canada, ensuring seamless project planning and implementation.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  foundingDate: '2022',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  serviceType: [
    'IT Consulting',
    'Software Development',
    'Cloud Solutions & Migration',
    'Cybersecurity Services',
    'Digital Transformation',
    'IT Staffing',
    'IT Strategy & Planning',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TechStellar Consulting',
  url: BASE_URL,
  description: 'Turning Ideas Into Impactful Solutions.',
};

export function OrganizationJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
