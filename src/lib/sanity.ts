import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '7aynmatb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want real-time updates while developing
});
