# Sitemap Guide

## ✅ Sitemap Created Successfully!

Your sitemap is now live and accessible at:
**https://jettaxservicecorp.com/sitemap.xml**

## What's Included

Your sitemap currently includes all static pages:

- **Homepage** (/) - Priority: 1.0
- **/contact** - Priority: 0.9
- **/small-business** - Priority: 0.9
- **/pricing** - Priority: 0.8
- **/resources** - Priority: 0.7
- **/privacy** - Priority: 0.3
- **/terms** - Priority: 0.3

## Files Created/Modified

1. **`/src/routes/sitemap.xml/+server.js`** - Dynamic sitemap generator
2. **`/static/robots.txt`** - Updated to include sitemap reference

## Testing Your Sitemap

### Local Testing:
```bash
# Start your dev server
pnpm dev

# Visit the sitemap
open http://localhost:5173/sitemap.xml
```

### Production Testing:
Once deployed, visit:
```
https://jettaxservicecorp.com/sitemap.xml
```

## Submit to Search Engines

### Google Search Console:
1. Go to https://search.google.com/search-console
2. Add your property (if not already added)
3. Go to "Sitemaps" in the left sidebar
4. Enter: `sitemap.xml`
5. Click "Submit"

### Bing Webmaster Tools:
1. Go to https://www.bing.com/webmasters
2. Add your site (if not already added)
3. Go to "Sitemaps"
4. Enter: `https://jettaxservicecorp.com/sitemap.xml`
5. Click "Submit"

## Adding Dynamic Pages from Sanity

If you want to include dynamic pages (like blog posts or resources from Sanity), update the sitemap endpoint:

### Example: Adding Blog Posts

**Edit:** `/src/routes/sitemap.xml/+server.js`

```javascript
import sanityClient from '$lib/sanityClient';

export async function GET() {
  const baseUrl = 'https://jettaxservicecorp.com';

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    // ... other static pages
  ];

  // Fetch dynamic pages from Sanity
  const blogPosts = await sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const dynamicPages = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: post._updatedAt.split('T')[0] // Use actual last modified date
  }));

  // Combine all pages
  const pages = [...staticPages, ...dynamicPages];

  // Generate sitemap XML (rest of the code stays the same)
  // ...
}
```

### Example: Adding Resources

```javascript
// Fetch resources from Sanity
const resources = await sanityClient.fetch(`
  *[_type == "resource" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }
`);

const resourcePages = resources.map(resource => ({
  url: `/resources/${resource.slug}`,
  priority: '0.6',
  changefreq: 'monthly',
  lastmod: resource._updatedAt.split('T')[0]
}));

const pages = [...staticPages, ...resourcePages];
```

## Sitemap Best Practices

### Priority Values:
- **1.0** - Homepage (most important)
- **0.8-0.9** - Main service/product pages
- **0.6-0.7** - Secondary pages, blog posts
- **0.3-0.5** - Tertiary pages, archives
- **0.1-0.3** - Legal pages (privacy, terms)

### Change Frequency:
- **daily** - News, frequently updated content
- **weekly** - Blog, regularly updated pages
- **monthly** - Service pages, moderate updates
- **yearly** - Legal pages, rarely change
- **never** - Archived content

### Important Notes:
- Priority is relative to YOUR site (not across the web)
- Change frequency is a hint, not a command
- Search engines may ignore these values
- Keep sitemap under 50,000 URLs
- Keep file size under 50MB

## Cache Settings

Your sitemap is cached for 1 hour (3600 seconds) to improve performance. Adjust in the sitemap endpoint:

```javascript
return new Response(sitemap, {
  headers: {
    'Content-Type': 'application/xml',
    'Cache-Control': 'max-age=3600, s-maxage=3600' // Change this value
  }
});
```

## Monitoring

Once submitted to search engines, monitor:
- **Coverage** - How many pages are indexed
- **Errors** - Any crawling issues
- **Last crawled** - When Google last checked your sitemap

## Troubleshooting

### Sitemap not loading?
- Check that the file exists at `/src/routes/sitemap.xml/+server.js`
- Verify your dev server is running
- Check for any errors in the console

### Search engines not finding sitemap?
- Verify robots.txt includes the sitemap URL
- Manually submit sitemap in Search Console
- Check for any syntax errors in the XML

### Need multiple sitemaps?
If you have >50,000 URLs, create a sitemap index:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://jettaxservicecorp.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://jettaxservicecorp.com/sitemap-posts.xml</loc>
  </sitemap>
</sitemapindex>
```

## Resources

- [Google Search Central - Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Sitemaps.org Protocol](https://www.sitemaps.org/protocol.html)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
