<script>
  const resources = [
    {
      slug: 'personal-tax-filing-checklist',
      title: 'Personal Tax Filing Checklist',
      description:
        'Comprehensive guide to documents and information needed for accurate tax return preparation',
      category: 'Tax Filing',
      icon: '📝',
      downloadable: true
    },
    {
      slug: 'business-tax-checklist',
      title: 'Business Tax Filing Checklist',
      description: 'Comprehensive guide to documents and information needed for accurate business tax preparation',
      category: 'Tax Filing',
      icon: '🏢',
      downloadable: true
    },
    {
      slug: 'first-year-business-checklist',
      title: 'First-Year Business Owner Checklist',
      description: 'Step-by-step guide for new entrepreneurs starting their business',
      category: 'Business Formation',
      icon: '🚀',
      downloadable: true
    },
    {
      slug: 'tax-deduction-guide',
      title: 'Tax Deduction Guide',
      description: 'Comprehensive guide to maximizing your tax deductions',
      category: 'Tax Planning',
      icon: '💰',
      downloadable: false
    },
    {
      slug: 'quarterly-tax-calendar',
      title: 'Quarterly Tax Calendar',
      description: 'Important tax deadlines and payment dates for businesses',
      category: 'Tax Planning',
      icon: '📅',
      downloadable: false
    },
    {
      slug: 'bookkeeping-best-practices',
      title: 'Bookkeeping Best Practices',
      description: 'Essential bookkeeping tips for small business owners',
      category: 'Business Operations',
      icon: '📚',
      downloadable: false
    }
  ];

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
            class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
          >
            {resource.icon}
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
