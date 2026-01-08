import { createClient } from '@sanity/client';
import { env as publicEnv } from '$env/dynamic/public';
import { env as privateEnv } from '$env/dynamic/private';

export const sanityWriteClient = createClient({
  projectId: publicEnv.PUBLIC_SANITY_PROJECT_ID,
  dataset: publicEnv.PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: privateEnv.SANITY_WRITE_TOKEN
});

export default sanityWriteClient;
