export async function GET() {
  const baseUrl = 'https://jettaxservicecorp.com';

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/small-business', priority: '0.9', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];

  // Resource pages
  const resourcePages = [
    { url: '/resources/personal-tax-filing-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/business-tax-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/first-year-business-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/tax-deduction-guide', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/quarterly-tax-calendar', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/bookkeeping-best-practices', priority: '0.6', changefreq: 'monthly' }
  ];

  const pages = [...staticPages, ...resourcePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600, s-maxage=3600'
    }
  });
}
