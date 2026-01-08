import { env } from '$env/dynamic/public';

/**
 * Generate Sanity image URL with optional transformations
 * @param {Object} image - Sanity image object
 * @param {Object} options - Image transformation options
 * @returns {string} - Image URL
 */
export function imageUrl(image, options = {}) {
  if (!image || !image.asset) return '';

  const { width, height, quality = 90, format = 'webp' } = options;

  let url = `https://cdn.sanity.io/images/${env.PUBLIC_SANITY_PROJECT_ID}/${env.PUBLIC_SANITY_DATASET}/${image.asset._ref
    .replace('image-', '')
    .replace('-jpg', '.jpg')
    .replace('-png', '.png')
    .replace('-webp', '.webp')
    .replace('-svg', '.svg')}`;

  const params = [];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (quality) params.push(`q=${quality}`);
  if (format) params.push(`fm=${format}`);

  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }

  return url;
}

/**
 * Get portable text blocks as plain text
 * @param {Array} blocks - Portable text blocks
 * @returns {string} - Plain text
 */
export function toPlainText(blocks = []) {
  return (
    blocks
      .map((block) => {
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        return block.children.map((child) => child.text).join('');
      })
      .join('\n\n') || ''
  );
}

/**
 * Format date from Sanity
 * @param {string} dateString - ISO date string
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date
 */
export function formatDate(dateString, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return new Date(dateString).toLocaleDateString('en-US', defaultOptions);
}
