<script>
  // @ts-nocheck

  const resources = [
    {
      slug: 'personal-tax-filing-checklist',
      title: 'Personal Tax Filing Checklist',
      description:
        'Comprehensive guide to documents and information needed for accurate tax return preparation',
      category: 'Tax Filing',
      icon: 'document',
      downloadable: true
    },
    {
      slug: 'business-tax-checklist',
      title: 'Business Tax Filing Checklist',
      description:
        'Comprehensive guide to documents and information needed for accurate business tax preparation',
      category: 'Tax Filing',
      icon: 'briefcase',
      downloadable: true
    },
    {
      slug: 'first-year-business-checklist',
      title: 'First-Year Business Owner Checklist',
      description: 'Step-by-step guide for new entrepreneurs starting their business',
      category: 'Business Formation',
      icon: 'rocket',
      downloadable: true
    },
    {
      slug: 'tax-deduction-guide',
      title: 'Tax Deduction Guide',
      description: 'Comprehensive guide to maximizing your tax deductions',
      category: 'Tax Planning',
      icon: 'currency',
      downloadable: false
    },
    {
      slug: 'quarterly-tax-calendar',
      title: 'Quarterly Tax Calendar',
      description: 'Important tax deadlines and payment dates for businesses',
      category: 'Tax Planning',
      icon: 'calendar',
      downloadable: false
    },
    {
      slug: 'bookkeeping-best-practices',
      title: 'Bookkeeping Best Practices',
      description: 'Essential bookkeeping tips for small business owners',
      category: 'Business Operations',
      icon: 'book',
      downloadable: false
    }
  ];

  // Professional SVG icon library
  const icons = {
    document:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    briefcase:
      'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
    currency:
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    calendar:
      'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  };

  const categories = ['All', ...new Set(resources.map((r) => r.category))];
  let selectedCategory = $state('All');

  const filteredResources = $derived(
    selectedCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === selectedCategory)
  );
</script>

<svelte:head>
  <title>Tax & Business Resources - Free Guides & Checklists | JET Tax Service Corp</title>
  <meta
    name="description"
    content="Free tax and business resources including checklists, guides, and calendars. Download personal tax filing checklists, business tax documents, bookkeeping guides, and tax planning tools."
  />
  <meta
    name="keywords"
    content="tax resources, business tax checklist, personal tax filing, bookkeeping guide, tax deduction guide, quarterly tax calendar, tax planning, business formation checklist"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/resources" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/resources" />
  <meta
    property="og:title"
    content="Tax & Business Resources - Free Guides & Checklists | JET Tax Service Corp"
  />
  <meta
    property="og:description"
    content="Free tax and business resources including checklists, guides, and calendars. Download personal tax filing checklists, business tax documents, bookkeeping guides, and tax planning tools."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/og-image.jpg" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="JET Tax Service Corp" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/resources" />
  <meta
    name="twitter:title"
    content="Tax & Business Resources - Free Guides & Checklists | JET Tax Service Corp"
  />
  <meta
    name="twitter:description"
    content="Free tax and business resources including checklists, guides, and calendars. Download personal tax filing checklists, business tax documents, bookkeeping guides, and tax planning tools."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/og-image.jpg" />

  <!-- Additional SEO -->
  <meta name="author" content="JET Tax Service Corp" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />

  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tax & Business Resources",
    "description": "Free tax and business resources including checklists, guides, and calendars to help you stay organized and compliant.",
    "url": "https://jettaxservicecorp.com/resources",
    "publisher": {
      "@id": "https://jettaxservicecorp.com/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jettaxservicecorp.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://jettaxservicecorp.com/resources"
        }
      ]
    }
  }
  </script>`}
</svelte:head>

<!-- Hero Section -->
<section
  class="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-20"
>
  <div class="section-container">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Resources & Downloads</h1>
      <p class="text-xl md:text-2xl text-blue-100">
        Free tools, checklists, and guides to help you manage your taxes and business effectively.
      </p>
    </div>
  </div>
</section>

<!-- Resources Section -->
<section class="section-container">
  <!-- Category Filter -->
  <div class="flex flex-wrap gap-3 justify-center mb-12">
    {#each categories as category}
      <button
        onclick={() => (selectedCategory = category)}
        class="px-6 py-2 rounded-full font-medium transition-all"
        class:bg-primary-600={selectedCategory === category}
        class:text-white={selectedCategory === category}
        class:bg-gray-200={selectedCategory !== category}
        class:text-gray-700={selectedCategory !== category}
        class:hover:bg-primary-100={selectedCategory !== category}
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Resources Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredResources as resource}
      <a
        href="/resources/{resource.slug}"
        class="card group hover:-translate-y-1 cursor-pointer block"
      >
        <!-- Icon & Badge -->
        <div class="flex justify-between items-start mb-4">
          <div
            class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d={icons[resource.icon]} />
            </svg>
          </div>
          {#if resource.downloadable}
            <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              Downloadable
            </span>
          {/if}
        </div>

        <!-- Category -->
        <div class="text-sm text-primary-600 font-semibold mb-2">{resource.category}</div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>

        <!-- Description -->
        <p class="text-gray-600 mb-6">{resource.description}</p>

        <!-- CTA -->
        <div class="text-primary-600 font-semibold inline-flex items-center gap-2">
          Read More
          <svg
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>
    {/each}
  </div>

  <!-- Empty State -->
  {#if filteredResources.length === 0}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">📭</div>
      <h3 class="text-2xl font-bold mb-2">No resources found</h3>
      <p class="text-gray-600">Try selecting a different category.</p>
    </div>
  {/if}
</section>

<!-- CTA Section -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Personalized Guidance?</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      Our experts are ready to help you with your specific tax and business needs.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg">
        Schedule Consultation
      </a>
      <a
        href="tel:7863699058"
        class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
      >
        Call 786-369-9058
      </a>
    </div>
  </div>
</section>
