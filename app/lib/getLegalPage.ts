import { fetchGraphQL } from './graphql';

interface legalPageResponse {
  title: string;
  description: any;
  image: any;
  content: any;
}

export const getLegalPage = async (slug: string, isDraftMode = false) => {
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
  return legalPage?.data?.legalPageCollection?.items?.[0] as legalPageResponse;
};
