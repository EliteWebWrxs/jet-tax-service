<script>
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import Testimonial from '$lib/components/Testimonial.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';
</script>

<svelte:head>
  <title>JET Tax Service Corp | Trusted Tax & Business Solutions for Over 25 Years</title>
  <meta
    name="description"
    content="Professional tax filing, planning, and small business services in Florida and nationwide. Over 25 years of experience with concierge-level care."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/" />
  <meta
    property="og:title"
    content="JET Tax Service Corp | Trusted Tax & Business Solutions for Over 25 Years"
  />
  <meta
    property="og:description"
    content="Professional tax filing, planning, and small business services in Florida and nationwide. Over 25 years of experience with concierge-level care."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/" />
  <meta name="twitter:title" content="JET Tax Service Corp | Trusted Tax & Business Solutions" />
  <meta
    name="twitter:description"
    content="Professional tax filing, planning, and small business services in Florida and nationwide. Over 25 years of experience."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Additional SEO -->
  <meta
    name="keywords"
    content="tax preparation, tax filing, business tax, personal tax, tax planning, Florida tax services, small business formation, bookkeeping, payroll services"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/" />

  <!-- Preload Hero Image -->
  <link rel="preload" as="image" href="/tax-service-2.webp" type="image/webp" />

  <!-- Structured Data - Home Page FAQ -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What tax services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive tax services including personal tax filing, business tax preparation, tax planning and advisory, IRS notice review, tax amendments, and our Fraud Alert Package. We serve individuals, families, and businesses of all sizes across Florida and nationwide."
          }
        },
        {
          "@type": "Question",
          "name": "How much does tax preparation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pricing varies based on the complexity of your return and specific services needed. We offer competitive rates and transparent pricing with no hidden fees. Contact us for a free consultation and personalized quote. We also offer a 15% discount for clients enrolled in our Annual Compliance Package."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer virtual tax services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide full-service virtual tax preparation and support nationwide. You can securely upload documents through our encrypted client portal, communicate with us via phone, text, or email, and receive your completed returns electronically. We've been serving clients virtually for years with the same quality and care as in-person service."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for tax preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common documents include W-2s, 1099s, receipts for deductions, mortgage interest statements, and previous year tax returns. We'll provide you with a personalized checklist based on your situation. You can download our comprehensive tax document checklist from our Resources page."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with IRS notices and audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We have extensive experience reviewing IRS notices, preparing responses, and representing clients in audit situations. If you receive an IRS notice, contact us immediately. We'll review the notice, explain your options, and handle all communication with the IRS on your behalf."
          }
        },
        {
          "@type": "Question",
          "name": "How long does tax preparation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most personal tax returns are completed within 3-5 business days once we receive all necessary documents. Business returns may take 5-10 business days depending on complexity. We offer expedited service for urgent situations and can file extensions if needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can you file taxes for previous years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can prepare and file tax returns for previous years. Whether you missed a filing deadline or need to amend a prior return, we'll help you get caught up with the IRS. We can also help negotiate payment plans if you owe back taxes."
          }
        },
        {
          "@type": "Question",
          "name": "Are you available year-round or just during tax season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're available year-round, 24/7 by phone or text. While many people think of us during tax season, we provide tax planning, business services, and support throughout the entire year. Our office hours are Monday-Friday 10am-5pm, but you can reach us anytime for urgent matters."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept all major credit cards, debit cards, ACH bank transfers, and checks. Payment is typically due when your return is completed and ready for filing. We also offer flexible payment arrangements for larger projects."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is easy! Click the 'Get Started' button to fill out our contact form, call us at 786-369-9058 or 954-667-0855 during business hours (Mon-Fri 10am-5pm), or text 786-369-9058 anytime 24/7. We'll schedule a free consultation to discuss your needs, provide a quote, and get you set up in our secure client portal."
          }
        }
      ]
    }
    </script>
  `}
</svelte:head>

<!-- Hero Section -->
<section
  class="relative bg-cover bg-center md:bg-top text-white overflow-hidden pt-10"
  style="background-image: url('/tax-service-2.webp');"
>
  <!-- Gradient Overlay -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-secondary-900/90"
  ></div>

  <div class="relative section-container">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in"
      >
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span class="text-sm font-medium">Trusted for Over 25 Years</span>
      </div>

      <!-- Title -->
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Your Trusted Partner for Virtual Tax & Small Business Solutions
      </h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
        Serving Florida and nationwide with concierge-level service for over 25 years
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-md sm:max-w-none mx-auto"
      >
        <a
          href="/contact"
          class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto"
        >
          Get Started
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
        <a
          href="#services"
          class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto"
        >
          View Services
        </a>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">25+</div>
          <div class="text-blue-100">Years of Experience</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">10K+</div>
          <div class="text-blue-100">Clients Served</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">24/7</div>
          <div class="text-blue-100">Support Available</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="section-container">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Tax Services</h2>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Comprehensive tax solutions tailored to your needs with expert guidance every step of the way.
    </p>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ServiceCard
      icon="document"
      title="Personal Tax Filing"
      description="Expert individual tax preparation with a focus on accuracy and compliance. Maximize your refunds while staying compliant with IRS regulations."
      features={[
        'Individual tax returns',
        'Tax deduction optimization',
        'IRS compliance review',
        'Amendment services'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="briefcase"
      title="Business Tax Filing"
      description="Professional business tax services for companies of all sizes. Minimize tax liability and optimize your business finances."
      features={[
        'Corporate tax returns',
        'Partnership & LLC filings',
        'S-Corporation tax prep',
        'Quarterly estimates'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="chart"
      title="Tax Planning & Advisory"
      description="Strategic tax planning to minimize your tax obligations and optimize your financial health throughout the year."
      features={[
        'Year-round tax strategy',
        'Retirement planning',
        'Investment tax advice',
        'Estate planning support'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="clipboard"
      title="IRS Notice Review"
      description="Professional assistance with IRS correspondence. We'll help you understand and respond to any IRS notices or audits."
      features={[
        'Notice interpretation',
        'Response preparation',
        'Audit representation',
        'Payment plan negotiation'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="document"
      title="Tax Amendments"
      description="Need to amend a previous return? We handle all types of tax amendments with accuracy and efficiency."
      features={[
        'Prior year corrections',
        'Additional deduction claims',
        'Error corrections',
        'Refund recovery'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="shield"
      title="Fraud Alert Package"
      description="Annual enrollment program to protect your identity and tax information from fraudulent activity."
      features={[
        'Identity theft protection',
        'IRS PIN service',
        'Credit monitoring',
        'Alert notifications'
      ]}
      ctaHref="/contact"
    />
  </div>
</section>

<!-- Parallax Section 1 -->
<section
  class="relative py-32 bg-cover bg-center md:bg-fixed md:bg-top"
  style="background-image: url('/taxes.webp');"
>
  <!-- Dark overlay for text readability -->
  <div class="absolute inset-0 bg-gray-900/70"></div>

  <!-- Content -->
  <div class="relative section-container text-center text-white">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">Maximize Your Tax Savings</h2>
    <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
      Strategic tax planning and expert preparation to keep more money in your pocket
    </p>
    <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100">
      Get Your Free Consultation
    </a>
  </div>
</section>

<!-- Client Portal Access Section -->
<section class="section-container">
  <div class="max-w-5xl mx-auto">
    <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-lg">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
            <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-primary-700 font-semibold text-sm">Secure Access</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Existing Client Portal
          </h2>
          <p class="text-lg text-gray-700 mb-6">
            Access your tax documents, upload files, and communicate with our team securely through our encrypted client portal. Available 24/7 from anywhere.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Download completed tax returns</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Securely upload tax documents</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Track your return status</span>
            </li>
          </ul>
        </div>
        <div class="text-center md:text-right">
          <a
            href="https://jettaxdocs.securefilepro.com/portal/#/login"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Login to Client Portal
          </a>
          <p class="text-sm text-gray-600 mt-4">
            New client? <a href="/contact" class="text-primary-600 font-semibold hover:underline">Get started here</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
  <div class="section-container">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold mb-6">Why Choose JET Tax Service?</h2>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div
              class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">25+ Years of Expertise</h3>
              <p class="text-gray-600">
                Trusted experience helping individuals and businesses navigate complex tax
                situations.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p class="text-gray-600">
                Call 786-369-9058 or 954-667-0855 during business hours. Text 786-369-9058 anytime, 24/7. We're here when you need us with flexible scheduling.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Nationwide Service</h3>
              <p class="text-gray-600">
                Virtual services available across all 50 states with the same quality and care.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Secure Client Portal</h3>
              <p class="text-gray-600">
                Upload, view, and download documents safely through our encrypted portal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div class="text-4xl mb-2">📊</div>
          <div class="text-3xl font-bold mb-1">10K+</div>
          <div class="text-primary-100">Returns Filed</div>
        </div>
        <div class="card bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
          <div class="text-4xl mb-2">⭐</div>
          <div class="text-3xl font-bold mb-1">4.9/5</div>
          <div class="text-secondary-100">Client Rating</div>
        </div>
        <div class="card bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
          <div class="text-4xl mb-2">💼</div>
          <div class="text-3xl font-bold mb-1">500+</div>
          <div class="text-secondary-100">Businesses Served</div>
        </div>
        <div class="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div class="text-4xl mb-2">🎯</div>
          <div class="text-3xl font-bold mb-1">Secure</div>
          <div class="text-primary-100">Portal Access</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="bg-gray-50 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Don't just take our word for it. Here's what our satisfied clients have to say about working
        with JET Tax Service Corp.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Testimonial
        name="Maria Rodriguez"
        location="Miami, FL"
        rating={5}
        service="Personal Tax Filing"
        text="JET Tax Service has been handling my taxes for over 5 years. They're professional, responsive, and always find ways to maximize my refund. I wouldn't trust anyone else with my taxes!"
      />

      <Testimonial
        name="David Chen"
        location="Orlando, FL"
        rating={5}
        service="Business Tax & Bookkeeping"
        text="As a small business owner, I was overwhelmed with bookkeeping and tax compliance. JET Tax Service took care of everything and helped me save thousands. Their expertise is unmatched!"
      />

      <Testimonial
        name="Jennifer Williams"
        location="Tampa, FL"
        rating={5}
        service="LLC Formation & Tax Planning"
        text="From forming my LLC to ongoing tax planning, JET Tax Service has been with me every step of the way. Their 24/7 availability and personalized service is exactly what I needed."
      />

      <Testimonial
        name="Robert Martinez"
        location="Jacksonville, FL"
        rating={5}
        service="IRS Notice Review"
        text="When I received an IRS notice, I was terrified. JET Tax Service handled everything professionally and resolved the issue quickly. I'm so grateful for their expertise and support!"
      />

      <Testimonial
        name="Sarah Thompson"
        location="Fort Lauderdale, FL"
        rating={5}
        service="Tax Planning & Advisory"
        text="The tax planning strategies they implemented saved my family significant money. Their proactive approach and attention to detail is outstanding. Highly recommend!"
      />

      <Testimonial
        name="Michael Brown"
        location="Pembroke Pines, FL"
        rating={5}
        service="Business Formation & Compliance"
        text="Starting my S-Corp was seamless thanks to JET Tax Service. They handled all the paperwork, compliance, and even set up my bookkeeping system. Professional service from start to finish!"
      />
    </div>

    <!-- Trust Badges -->
    <div class="mt-16 text-center">
      <div
        class="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg"
      >
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-semibold text-gray-900">BBB Accredited</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-semibold text-gray-900">Secure & Confidential</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="font-semibold text-gray-900">4.9/5 Rating</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-semibold text-gray-900">25+ Years Experience</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Google Review CTA Section -->
<section class="section-container">
  <div class="max-w-4xl mx-auto">
    <div class="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 border-4 border-primary-400 rounded-2xl p-12 md:p-16 text-center shadow-2xl overflow-hidden">
      <!-- Decorative corner accents -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-primary-300/20 rounded-bl-full"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-secondary-300/20 rounded-tr-full"></div>

      <div class="relative z-10">
        <!-- Star rating with badge -->
        <div class="flex justify-center mb-6">
          <div class="inline-flex flex-col items-center bg-white rounded-2xl px-8 py-4 shadow-lg border-2 border-primary-300">
            <div class="flex gap-1 mb-2">
              {#each Array(5) as _}
                <svg class="w-8 h-8 text-yellow-500 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
            </div>
            <span class="text-sm font-bold text-gray-700">4.9 out of 5 stars</span>
          </div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Love Our Service? Share Your Experience!
        </h2>
        <p class="text-xl mb-8 text-gray-800 max-w-2xl mx-auto">
          Your feedback helps us improve and helps others find the trusted tax service they deserve. Leave a review on Google and let others know about your experience with JET Tax Service Corp.
        </p>
        <a
          href="https://g.page/r/CSTL5SPTKq9bEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-primary-700"
        >
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Leave a Google Review
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p class="text-sm text-gray-700 font-medium mt-6 bg-white/60 rounded-full px-6 py-2 inline-block">
          Takes less than 2 minutes • Helps future clients make informed decisions
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Parallax Section 2 -->
<section
  class="relative py-32 bg-cover bg-center md:bg-fixed md:bg-top"
  style="background-image: url('/taxes-1.webp');"
>
  <!-- Dark overlay for text readability -->
  <div class="absolute inset-0 bg-primary-900/80"></div>

  <!-- Content -->
  <div class="relative section-container text-center text-white">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">Grow Your Business with Confidence</h2>
    <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
      From formation to compliance, we provide the financial foundation your business needs to
      thrive
    </p>
    <a href="/small-business" class="btn bg-white text-primary-700 hover:bg-gray-100">
      Explore Business Services
    </a>
  </div>
</section>

<!-- FAQ Section -->
<section class="section-container">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
      <p class="text-xl text-gray-600">Get answers to common questions about our tax services</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-8">
      <FAQItem
        question="What tax services do you offer?"
        answer="We offer comprehensive tax services including personal tax filing, business tax preparation, tax planning and advisory, IRS notice review, tax amendments, and our Fraud Alert Package. We serve individuals, families, and businesses of all sizes across Florida and nationwide."
      />

      <FAQItem
        question="How much does tax preparation cost?"
        answer="Our pricing varies based on the complexity of your return and specific services needed. We offer competitive rates and transparent pricing with no hidden fees. Contact us for a free consultation and personalized quote. We also offer a 15% discount for clients enrolled in our Annual Compliance Package."
      />

      <FAQItem
        question="Do you offer virtual tax services?"
        answer="Yes! We provide full-service virtual tax preparation and support nationwide. You can securely upload documents through our encrypted client portal, communicate with us via phone, text, or email, and receive your completed returns electronically. We've been serving clients virtually for years with the same quality and care as in-person service."
      />

      <FAQItem
        question="What documents do I need for tax preparation?"
        answer="Common documents include W-2s, 1099s, receipts for deductions, mortgage interest statements, and previous year tax returns. We'll provide you with a personalized checklist based on your situation. You can download our comprehensive tax document checklist from our Resources page."
      />

      <FAQItem
        question="Can you help with IRS notices and audits?"
        answer="Absolutely. We have extensive experience reviewing IRS notices, preparing responses, and representing clients in audit situations. If you receive an IRS notice, contact us immediately. We'll review the notice, explain your options, and handle all communication with the IRS on your behalf."
      />

      <FAQItem
        question="How long does tax preparation take?"
        answer="Most personal tax returns are completed within 3-5 business days once we receive all necessary documents. Business returns may take 5-10 business days depending on complexity. We offer expedited service for urgent situations and can file extensions if needed."
      />

      <FAQItem
        question="Can you file taxes for previous years?"
        answer="Yes, we can prepare and file tax returns for previous years. Whether you missed a filing deadline or need to amend a prior return, we'll help you get caught up with the IRS. We can also help negotiate payment plans if you owe back taxes."
      />

      <FAQItem
        question="Are you available year-round or just during tax season?"
        answer="We're available year-round, 24/7 by phone or text. While many people think of us during tax season, we provide tax planning, business services, and support throughout the entire year. Our office hours are Monday-Friday 10am-5pm, but you can reach us anytime for urgent matters."
      />

      <FAQItem
        question="What payment methods do you accept?"
        answer="We accept all major credit cards, debit cards, ACH bank transfers, and checks. Payment is typically due when your return is completed and ready for filing. We also offer flexible payment arrangements for larger projects."
      />

      <FAQItem
        question="How do I get started?"
        answer="Getting started is easy! Click the 'Get Started' button to fill out our contact form, text us at 786-369-9058, or text us anytime. We'll schedule a free consultation to discuss your needs, provide a quote, and get you set up in our secure client portal."
      />
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      Join thousands of satisfied clients who trust us with their tax and business needs.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg">
        Contact Us Now
      </a>
      <a
        href="/resources"
        class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
      >
        Download Resources
      </a>
    </div>
  </div>
</section>
