import { Document } from '@contentful/rich-text-types';
import { fetchGraphQL } from './graphql';

export interface ContentfulImage {
  title: string;
  description: string;
  url: string;
}

export interface LegalPageResponse {
  title: string;
  description: string;
  image: ContentfulImage;
  content: {
    json: Document;
  };
}

export const getLegalPage = async (
  slug: string,
  isDraftMode = false
): Promise<LegalPageResponse | null> => {
  try {
    const legalPage = await fetchGraphQL(
      `query {
      legalPageCollection(where: {slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? 'true' : 'false'}) {
        items {
          title
          description
          image {
            title
            description
            url
          },
          content{
            json
          }
        }
      }
    }`,
      isDraftMode
    );
    return (legalPage?.data?.legalPageCollection?.items?.[0] as LegalPageResponse) ?? null;
  } catch (error) {
    console.error(`Failed to fetch legal page "${slug}":`, error);
    return null;
  }
};
