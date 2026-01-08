import { sanityClient } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const services = await sanityClient.fetch(
      `*[_type == "service"] | order(displayOrder asc) {
        _id,
        name,
        price,
        description,
        category,
        squareLink,
        displayOrder
      }`
    );

    return {
      services
    };
  } catch (err) {
    console.error('Error fetching services from Sanity:', err);
    throw error(500, 'Failed to load services. Please try again later.');
  }
}
