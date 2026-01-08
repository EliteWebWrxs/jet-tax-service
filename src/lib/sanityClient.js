import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/public';

export const sanityClient = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID,
  dataset: env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: env.PUBLIC_SANITY_API_READ_TOKEN
});

export default sanityClient;
