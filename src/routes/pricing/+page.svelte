<script>
  // @ts-nocheck

  const services = [
    {
      id: 1,
      name: 'New Small Business Owner Consultation',
      price: '$150',
      description:
        'A new small business consultation saves time and money by offering expert advice to streamline start up operations, avoid costly mistakes, and ensure compliance with legal and regulatory requirements.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/PXHPYDBFIX2SM5CDWBTPF74E'
    },
    {
      id: 2,
      name: 'Small Business Owner Consultation',
      price: '$175',
      description:
        'A small business consultation provides expert guidance tailored to your unique needs, helping you optimize operations, increase profitability, and ensure compliance with legal and financial requirements.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/G27K2ZH2RFFR4SXSUKDWUXA4'
    },
    {
      id: 3,
      name: 'New Business Entity Formation',
      price: '$210',
      description: 'LLC, LLC Partnership, SCorp, Corp',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/A5F6SJ6KVTADZKOJ5QRJUZ6N'
    },
    {
      id: 4,
      name: 'IRS EIN Filing',
      price: '$75',
      description: 'Required to open a business bank account.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/73VKJ6OGRNFXU4AZGI4BPR6I?src=sheet'
    },
    {
      id: 5,
      name: 'Annual Compliance Maintenance Package (CMP)',
      price: '$168.75',
      description: 'Receive 15% off other business services when enrolled in the CMP.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/PBJDMHBCFWBXW3KW5KZXGIHP'
    },
    {
      id: 6,
      name: 'IRS Notice Review for Small Businesses',
      price: '$125',
      description:
        'REVIEW AND CREATE PLAN A COURSE OF ACTION TO RESOLVE YOUR TAX ISSUE. PENALTY WAIVERS ARE ADDITIONAL.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/K7RSI7UN6PZJP3N2A2FLGWPX'
    },
    {
      id: 7,
      name: 'Annual Fraud Alert Package',
      price: '$75',
      description:
        'Fraud costs consumers $10B annually. Enroll now to securely upload notices or emails for review by our expert fraud team.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/F5HFGKG6BWRJZIH7VQNPM5ZE'
    },
    {
      id: 8,
      name: 'State Amendment Filing',
      price: '$50',
      description: '',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/SQU3YAXAT44FL5JO6NLUWPN4'
    },
    {
      id: 9,
      name: 'Beneficial Ownership Information Report (BOI)',
      price: '$95',
      description:
        'The Beneficial Ownership Information (BOI) program, established by the federal government, advises small businesses to disclose identifying information about individuals who directly or indirectly own or exercise control over the company.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/RPOCLR4JOYVWWITXP4EKSH3F'
    },
    {
      id: 10,
      name: 'S-Corp Election & Formation',
      price: '$500',
      description: 'S-Corporation setup and IRS Form 2553',
      category: 'Business Services',
      squareLink: 'https://square.link/u/PLACEHOLDER10'
    },
    {
      id: 11,
      name: 'State Annual Filing',
      price: '$178.75',
      description:
        'Accurate Filing with the State Business Registry to keep your business in compliance to avoid expensive penalties. State Filing Fee included. FREE OF CHARGE we will become your REGISTERED AGENT due to you being a tax client of our firm. We will keep your business in compliance saving you potentially thousands in late fees.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/MKM5PN6VZCBVD7KEGCK7SPRD'
    },
    {
      id: 12,
      name: 'Profit and Loss',
      price: '$300',
      description: '',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/AAX52MS2JODRJ73UCEJ2ZQX5'
    },
    {
      id: 13,
      name: 'State Late Filing Resolution',
      price: '$290',
      description:
        'ALL FEES INCLUDED. Unlike other companies that charge a separate filing fee. We have contacted the State on your behalf to settle for a lower for a discounted late fee instead of the $500 late fee that is normally charged for filings after May 1st.',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/CZJ5WUFJW4POYGK2N77FFIIJ'
    },
    {
      id: 14,
      name: 'Balance Sheet',
      price: '$400',
      description: '',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/HOD4QV3K36TZJRCAFNXRFJDR'
    },
    {
      id: 15,
      name: 'Custom Business Expense Tracker',
      price: '$40',
      description: '',
      category: 'Business Services',
      squareLink:
        'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/AZA3TRGEBB3ABCJYEAOWOWRZ'
    }
  ];

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
        <p class="text-lg mb-4">Already know what you need? Pay securely below with Square.</p>
        <p class="text-blue-100">
          Need help choosing the right service?
          <a href="/contact" class="text-white font-semibold hover:underline">Contact us</a>
          for a free consultation.
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
        >
          {service.price === 'Contact Us' ? 'Get Quote' : 'Pay Now'}
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
      <h3 class="text-2xl font-bold text-gray-900 mb-3">Secure Payment Processing</h3>
      <p class="text-gray-700 mb-4">
        All payments are processed securely through Square. We never store your payment information.
      </p>
      <p class="text-sm text-gray-600">
        Prices shown are starting prices. Complex returns or additional services may require
        additional fees. We'll always provide a quote before proceeding.
      </p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Have Questions About Pricing?</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      We're happy to discuss your specific needs and provide a detailed quote.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg">
        Contact Us
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
