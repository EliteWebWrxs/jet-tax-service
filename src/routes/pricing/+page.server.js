import { sanityClient } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load({ setHeaders }) {
  try {
    // Fetch services from Sanity (CDN is already enabled in sanityClient config)
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

    // Set cache headers for CDN and browser caching (20 minutes = 1200 seconds)
    setHeaders({
      'Cache-Control': 'public, max-age=0, s-maxage=1200, stale-while-revalidate=600'
    });

    return {
      services
    };
  } catch (err) {
    console.error('Error fetching services from Sanity:', err);
    throw error(500, 'Failed to load services. Please try again later.');
  }
}
