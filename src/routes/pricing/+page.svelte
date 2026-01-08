<script>
  // @ts-nocheck

  let { data } = $props();
  const { services } = data;

  const categories = ['All', ...new Set(services.map((s) => s.category))];
  let selectedCategory = $state('All');

  const filteredServices = $derived(
    selectedCategory === 'All' ? services : services.filter((s) => s.category === selectedCategory)
  );
</script>

<svelte:head>
  <title>Services & Pricing - Secure Online Payments | JET Tax Service Corp</title>
  <meta
    name="description"
    content="View our tax and business service pricing. Pay securely online with Square. Personal tax returns, business tax filing, bookkeeping, payroll, and business formation services."
  />
  <meta
    name="keywords"
    content="tax preparation pricing, tax service cost, business tax fees, bookkeeping pricing, payroll service cost, LLC formation price, online tax payment"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/pricing" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/pricing" />
  <meta
    property="og:title"
    content="Services & Pricing - Secure Online Payments | JET Tax Service Corp"
  />
  <meta
    property="og:description"
    content="Transparent pricing for tax and business services. Pay securely online with Square."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/og-image.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/pricing" />
  <meta
    name="twitter:title"
    content="Services & Pricing - Secure Online Payments | JET Tax Service Corp"
  />
  <meta
    name="twitter:description"
    content="Transparent pricing for tax and business services. Pay securely online."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/og-image.jpg" />
</svelte:head>

<!-- Hero Section -->
<section
  class="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-20"
>
  <div class="section-container">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Services & Pricing</h1>
      <p class="text-xl md:text-2xl text-blue-100 mb-8">
        Transparent pricing. Secure online payments. Professional service.
      </p>
      <div
        class="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20"
      >
        <p class="text-lg mb-4">
          Ready to get started? Pay securely online with Square for fast, convenient tax and
          business services.
        </p>
        <p class="text-blue-100">
          Not sure which service is right for you?
          <a href="/contact" class="text-white font-semibold hover:underline">
            Schedule a Free Tax Consultation
          </a>
          with our expert team.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
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

  <!-- Services Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredServices as service}
      <div class="card group hover:-translate-y-1 flex flex-col h-full">
        <!-- Category Badge -->
        <div class="text-sm text-primary-600 font-semibold mb-2">{service.category}</div>

        <!-- Service Name -->
        <h3 class="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>

        <!-- Price -->
        <div class="text-3xl font-bold text-primary-700 mb-3">{service.price}</div>

        <!-- Description -->
        <p class="text-gray-600 mb-6 flex-grow min-h-[4.5rem]">
          {service.description || 'Contact us for more details.'}
        </p>

        <!-- Pay Now Button -->
        <a
          href={service.squareLink}
          target={service.squareLink.startsWith('http') ? '_blank' : '_self'}
          rel={service.squareLink.startsWith('http') ? 'noopener noreferrer' : ''}
          class="btn bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 w-full justify-center mt-auto"
          aria-label={`Pay securely for ${service.name}`}
        >
          {service.price === 'Contact Us' ? 'Request Custom Quote' : 'Pay Securely Online'}
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    {/each}
  </div>

  <!-- Trust & Security Note -->
  <div class="mt-16 max-w-3xl mx-auto">
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
      <div class="flex justify-center mb-4">
        <svg
          class="w-12 h-12 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        Secure Online Tax & Business Service Payments
      </h3>
      <p class="text-gray-700 mb-4">
        All tax preparation and business service payments are processed securely through Square's
        encrypted payment system. Your financial information is protected with bank-level security.
        We never store your payment information.
      </p>
      <p class="text-sm text-gray-600">
        Prices shown are starting prices for standard tax and business services. Complex tax returns
        or additional services may require custom pricing. We'll always provide a detailed quote
        before proceeding with your tax preparation or business filing.
      </p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
      Questions About Tax Services or Business Pricing?
    </h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      Get expert advice on tax preparation costs, business formation fees, and bookkeeping services.
      Our tax professionals are ready to provide a detailed quote customized to your needs.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg"
        aria-label="Contact JET Tax Service for pricing quote"
      >
        Get Free Quote & Consultation
      </a>
      <a
        href="tel:7863699058"
        class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
        aria-label="Call JET Tax Service at 786-369-9058"
      >
        Call for Immediate Assistance
      </a>
    </div>
  </div>
</section>
