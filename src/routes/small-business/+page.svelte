<script>
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import Testimonial from '$lib/components/Testimonial.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';
</script>

<svelte:head>
  <title
    >Small Business Solutions | Formation, Bookkeeping & Compliance | JET Tax Service Corp</title
  >
  <meta
    name="description"
    content="Comprehensive small business services including LLC formation, bookkeeping, payroll, and compliance. Expert guidance for entrepreneurs in Florida and nationwide. 15% discount on annual packages."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/small-business" />
  <meta property="og:title" content="Small Business Solutions | JET Tax Service Corp" />
  <meta
    property="og:description"
    content="Comprehensive small business services including formation, bookkeeping, payroll, and compliance. Expert guidance for entrepreneurs and business owners."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/small-business" />
  <meta name="twitter:title" content="Small Business Solutions | JET Tax Service Corp" />
  <meta
    name="twitter:description"
    content="LLC formation, bookkeeping, payroll, and compliance services for entrepreneurs. 15% discount on annual packages."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Additional SEO -->
  <meta
    name="keywords"
    content="LLC formation, business formation, S-corp, C-corp, bookkeeping services, payroll services, business compliance, BOI reporting, small business consulting, business tax filing"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/small-business" />

  <!-- Structured Data -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Small Business Formation and Support Services",
      "provider": {
        "@type": "ProfessionalService",
        "name": "JET Tax Service Corp",
        "telephone": "+1-786-369-9058",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4929 N University Drive",
          "addressLocality": "Lauderhill",
          "addressRegion": "FL",
          "postalCode": "33351",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "150"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Small Business Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LLC Formation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bookkeeping Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payroll Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Compliance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BOI Reporting"
            }
          }
        ]
      }
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should I form an LLC, S-Corp, or C-Corp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best entity type depends on your business goals, tax situation, and growth plans. LLCs offer flexibility and simplicity, S-Corps provide tax savings for profitable businesses, and C-Corps are ideal for raising capital. We offer free consultations to help you choose the right structure for your specific situation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to form a business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our business formation packages start at competitive rates and include state filing fees, EIN acquisition, operating agreement or bylaws, and initial compliance setup. Exact pricing depends on your entity type and state. Contact us for a personalized quote. Annual Compliance Package clients receive 15% off all services."
          }
        },
        {
          "@type": "Question",
          "name": "What is BOI reporting and do I need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Beneficial Ownership Information (BOI) reporting is a new federal requirement for most businesses formed after 2024, and existing businesses must file by January 1, 2025. You must report ownership information to FinCEN. We handle all BOI reporting, updates, and compliance monitoring to ensure you meet deadlines and avoid penalties."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide bookkeeping for all accounting software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We primarily work with QuickBooks Online and QuickBooks Desktop, which we can set up for you. We also support Xero and other popular platforms. If you're already using different software, contact us to discuss compatibility and potential migration options."
          }
        },
        {
          "@type": "Question",
          "name": "How does your payroll service work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle complete payroll processing including calculating wages, withholding taxes, filing quarterly Form 941, preparing W-2s and 1099s, and can set up direct deposit. You simply send us employee hours or salary information, and we take care of everything else, ensuring tax compliance and on-time filings."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the Annual Compliance Package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Annual Compliance Package includes state annual reports, registered agent service, document filing assistance, compliance deadline reminders, and a 15% discount on all our other services. It's designed to keep your business in good standing while saving you money on bookkeeping, payroll, and tax services."
          }
        },
        {
          "@type": "Question",
          "name": "How long does business formation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LLC formation typically takes 1-2 weeks including state processing time. S-Corp and C-Corp formations take 2-4 weeks. Expedited filing is available in most states for faster processing. We'll keep you updated throughout the process and ensure everything is completed correctly."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help convert my sole proprietorship to an LLC or S-Corp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We handle business entity conversions and can guide you through the process of converting from a sole proprietorship to an LLC or S-Corp. We'll help you understand the tax implications, handle the paperwork, and ensure a smooth transition with minimal disruption to your business."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer services for businesses outside Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide virtual business formation, bookkeeping, payroll, and tax services for businesses nationwide. We're licensed to form businesses and provide services in all 50 states. Our secure client portal makes it easy to work with us regardless of your location."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I miss a compliance deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Missing compliance deadlines can result in penalties, late fees, or even dissolution of your business entity. If you've missed a deadline, contact us immediately. We can help you file late returns, reinstate dissolved entities, and set up our Annual Compliance Package to prevent future issues with automated deadline reminders."
          }
        }
      ]
    }
    </script>
  `}
</svelte:head>

<!-- Hero Section -->
<Hero
  title="Small Business Solutions for Entrepreneurs"
  subtitle="From startup to scale-up, we provide the financial foundation for your business success"
  primaryCta="Start Your Business"
  secondaryCta="View Services"
  primaryHref="/contact"
  secondaryHref="#services"
/>

<!-- Business Formation Section -->
<section id="services" class="section-container">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Business Formation Services</h2>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Start your business on the right foot with professional formation and registration services.
    </p>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    <ServiceCard
      icon="🏛️"
      title="LLC Formation"
      description="Limited Liability Company setup with full compliance and documentation."
      features={[
        'State registration',
        'Operating agreement',
        'EIN acquisition',
        'Bank account setup'
      ]}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="🤝"
      title="Partnership Setup"
      description="Partnership agreements and registration for multi-owner businesses."
      features={['Partnership agreement', 'State filings', 'Tax ID setup', 'Member documents']}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="📈"
      title="S-Corporation"
      description="S-Corp election and setup for tax-advantaged business structure."
      features={['S-Corp election', 'Bylaws preparation', 'Stock certificates', 'IRS Form 2553']}
      ctaHref="/contact"
    />

    <ServiceCard
      icon="🏢"
      title="C-Corporation"
      description="Full corporation formation for businesses planning to scale."
      features={[
        'Articles of incorporation',
        'Corporate bylaws',
        'Board resolutions',
        'Stock issuance'
      ]}
      ctaHref="/contact"
    />
  </div>
</section>

<!-- Ongoing Business Support -->
<section class="bg-gradient-to-br from-secondary-50 to-primary-50 py-20">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Ongoing Business Support</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Keep your business compliant and financially healthy with our comprehensive support
        services.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        icon="📚"
        title="Bookkeeping Services"
        description="Professional bookkeeping to keep your financial records accurate and up-to-date."
        features={[
          'Monthly reconciliation',
          'Expense tracking',
          'Financial statements',
          'QuickBooks setup'
        ]}
        ctaHref="/contact"
      />

      <ServiceCard
        icon="💰"
        title="Payroll Solutions"
        description="Complete payroll processing including tax filings and employee documentation."
        features={[
          'Payroll processing',
          'Form 941 filing',
          'W-2 preparation',
          'Direct deposit setup'
        ]}
        ctaHref="/contact"
      />

      <ServiceCard
        icon="📋"
        title="1099 & W-9 Management"
        description="Contractor documentation and year-end 1099 filing services."
        features={['1099-NEC filing', 'W-9 collection', 'Vendor tracking', 'IRS compliance']}
        ctaHref="/contact"
      />

      <ServiceCard
        icon="📊"
        title="Financial Statements"
        description="Professional P&L and balance sheets to track your business performance."
        features={[
          'Profit & loss statements',
          'Balance sheets',
          'Cash flow analysis',
          'Custom reports'
        ]}
        ctaHref="/contact"
      />

      <ServiceCard
        icon="✅"
        title="Compliance Package"
        description="Annual compliance maintenance with 15% discount on other services."
        features={[
          'State annual reports',
          'Registered agent service',
          'Document filing',
          'Deadline reminders'
        ]}
        ctaHref="/contact"
      />

      <ServiceCard
        icon="🛡️"
        title="BOI Reporting"
        description="Beneficial Ownership Information reporting for FinCEN compliance."
        features={[
          'BOI form preparation',
          'FinCEN filing',
          'Update tracking',
          'Compliance monitoring'
        ]}
        ctaHref="/contact"
      />
    </div>
  </div>
</section>

<!-- Consultation Services -->
<section class="section-container">
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="text-4xl font-bold mb-6">Business Consultation Services</h2>
      <p class="text-xl text-gray-600 mb-8">
        Get expert guidance tailored to your business stage, whether you're just starting out or
        looking to optimize operations.
      </p>

      <div class="space-y-6">
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">🚀 New Business Owners</h3>
          <p class="text-gray-600 mb-4">
            Starting a business? We'll guide you through entity selection, registration, and initial
            setup to ensure you start on the right foot.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Entity structure consultation</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Tax planning strategy</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Bookkeeping system setup</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h3 class="text-2xl font-bold mb-3">💼 Established Businesses</h3>
          <p class="text-gray-600 mb-4">
            Optimize your operations, improve financial efficiency, and plan for growth with
            strategic consultation.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Financial analysis & optimization</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Growth strategy planning</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Process improvement consulting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-8">
      <h3 class="text-3xl font-bold mb-6">Annual Compliance Package</h3>
      <div class="text-5xl font-bold mb-2">15%</div>
      <div class="text-2xl mb-6">Discount on All Services</div>
      <p class="mb-8 text-blue-100">
        Stay compliant and save money with our comprehensive annual maintenance package. Includes
        state filings, registered agent service, and priority support.
      </p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-2">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Annual state filings</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Document amendments</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Deadline reminders</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>15% off all other services</span>
        </li>
      </ul>
      <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100 w-full">
        Get Started Today
      </a>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="bg-gray-50 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Success Stories from Business Owners</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Hear from entrepreneurs who've built successful businesses with our support and guidance.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Testimonial
        name="Carlos Mendez"
        location="Miami, FL"
        rating={5}
        service="LLC Formation & Bookkeeping"
        text="JET Tax Service made forming my LLC incredibly easy. They handled everything from registration to setting up QuickBooks. Now they manage my monthly bookkeeping and I can focus on growing my business!"
      />

      <Testimonial
        name="Amanda Foster"
        location="Tampa, FL"
        rating={5}
        service="S-Corp Formation & Tax Planning"
        text="Switching to an S-Corp saved me thousands in taxes! JET Tax Service guided me through the entire process and continues to provide excellent tax planning advice. Best business decision I made!"
      />

      <Testimonial
        name="James Wilson"
        location="Orlando, FL"
        rating={5}
        service="Payroll & Compliance"
        text="Running payroll was a nightmare until I hired JET Tax Service. They handle everything - payroll processing, tax filings, W-2s, and 1099s. The Annual Compliance Package is worth every penny!"
      />

      <Testimonial
        name="Lisa Park"
        location="Fort Lauderdale, FL"
        rating={5}
        service="Business Formation & BOI Reporting"
        text="As a new business owner, I was overwhelmed with compliance requirements. JET Tax Service not only formed my LLC but also handles my BOI reporting and keeps me compliant with all deadlines."
      />

      <Testimonial
        name="Marcus Johnson"
        location="Jacksonville, FL"
        rating={5}
        service="Business Tax & Financial Statements"
        text="The monthly financial statements and tax planning from JET Tax Service have been game-changers for my business. I finally understand my numbers and can make informed decisions!"
      />

      <Testimonial
        name="Nina Patel"
        location="Coral Springs, FL"
        rating={5}
        service="Multi-Business Management"
        text="I own three businesses and JET Tax Service manages all of them flawlessly. Their bookkeeping, payroll, and tax services are top-notch. The 15% discount saves me significant money annually!"
      />
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section-container">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Small Business FAQs</h2>
      <p class="text-xl text-gray-600">
        Common questions about starting and managing your business
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-8">
      <FAQItem
        question="Should I form an LLC, S-Corp, or C-Corp?"
        answer="The best entity type depends on your business goals, tax situation, and growth plans. LLCs offer flexibility and simplicity, S-Corps provide tax savings for profitable businesses, and C-Corps are ideal for raising capital. We offer free consultations to help you choose the right structure for your specific situation."
      />

      <FAQItem
        question="How much does it cost to form a business?"
        answer="Our business formation packages start at competitive rates and include state filing fees, EIN acquisition, operating agreement or bylaws, and initial compliance setup. Exact pricing depends on your entity type and state. Contact us for a personalized quote. Annual Compliance Package clients receive 15% off all services."
      />

      <FAQItem
        question="What is BOI reporting and do I need it?"
        answer="Beneficial Ownership Information (BOI) reporting is a new federal requirement for most businesses formed after 2024, and existing businesses must file by January 1, 2025. You must report ownership information to FinCEN. We handle all BOI reporting, updates, and compliance monitoring to ensure you meet deadlines and avoid penalties."
      />

      <FAQItem
        question="Do you provide bookkeeping for all accounting software?"
        answer="We primarily work with QuickBooks Online and QuickBooks Desktop, which we can set up for you. We also support Xero and other popular platforms. If you're already using different software, contact us to discuss compatibility and potential migration options."
      />

      <FAQItem
        question="How does your payroll service work?"
        answer="We handle complete payroll processing including calculating wages, withholding taxes, filing quarterly Form 941, preparing W-2s and 1099s, and can set up direct deposit. You simply send us employee hours or salary information, and we take care of everything else, ensuring tax compliance and on-time filings."
      />

      <FAQItem
        question="What's included in the Annual Compliance Package?"
        answer="Our Annual Compliance Package includes state annual reports, registered agent service, document filing assistance, compliance deadline reminders, and a 15% discount on all our other services. It's designed to keep your business in good standing while saving you money on bookkeeping, payroll, and tax services."
      />

      <FAQItem
        question="How long does business formation take?"
        answer="LLC formation typically takes 1-2 weeks including state processing time. S-Corp and C-Corp formations take 2-4 weeks. Expedited filing is available in most states for faster processing. We'll keep you updated throughout the process and ensure everything is completed correctly."
      />

      <FAQItem
        question="Can you help convert my sole proprietorship to an LLC or S-Corp?"
        answer="Absolutely! We handle business entity conversions and can guide you through the process of converting from a sole proprietorship to an LLC or S-Corp. We'll help you understand the tax implications, handle the paperwork, and ensure a smooth transition with minimal disruption to your business."
      />

      <FAQItem
        question="Do you offer services for businesses outside Florida?"
        answer="Yes! We provide virtual business formation, bookkeeping, payroll, and tax services for businesses nationwide. We're licensed to form businesses and provide services in all 50 states. Our secure client portal makes it easy to work with us regardless of your location."
      />

      <FAQItem
        question="What happens if I miss a compliance deadline?"
        answer="Missing compliance deadlines can result in penalties, late fees, or even dissolution of your business entity. If you've missed a deadline, contact us immediately. We can help you file late returns, reinstate dissolved entities, and set up our Annual Compliance Package to prevent future issues with automated deadline reminders."
      />
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-secondary-600 to-primary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start or Grow Your Business?</h2>
    <p class="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
      Let us handle the paperwork and compliance so you can focus on what you do best.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg">
        Get Started Today
      </a>
      <a
        href="/resources"
        class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
      >
        Download Checklist
      </a>
    </div>
  </div>
</section>
