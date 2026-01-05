<script>
  import ContactForm from '$lib/components/ContactForm.svelte';

  const faqs = [
    {
      question: 'What are your business hours?',
      answer:
        'Our office is open Monday-Friday, 10am-5pm. However, we are available 24/7 by phone or text at 786-369-9058 for your convenience.'
    },
    {
      question: 'Do you offer virtual consultations?',
      answer:
        'Yes! We offer virtual consultations and services nationwide. You can meet with us via video call, phone, or in person at our Lauderhill, FL office.'
    },
    {
      question: 'How quickly will you respond to my inquiry?',
      answer:
        'We typically respond to all inquiries within 24 hours. For urgent matters, please call or text us directly at 786-369-9058.'
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes, we offer free initial consultations to discuss your tax and business needs and determine how we can best assist you.'
    },
    {
      question: 'What information should I prepare before contacting you?',
      answer:
        'For tax services, have your previous tax returns and any relevant financial documents ready. For business services, prepare information about your business structure and goals. We\'ll guide you through everything else!'
    }
  ];
</script>

<svelte:head>
  <title>Contact JET Tax Service Corp | Tax Experts in Lauderhill, FL | Free Consultation</title>
  <meta
    name="description"
    content="Contact JET Tax Service Corp for expert tax and business services. Available 24/7 at 786-369-9058. Free consultation, virtual services nationwide. Located in Lauderhill, FL."
  />
  <meta
    name="keywords"
    content="contact tax professional, tax consultation Lauderhill FL, tax expert Florida, business tax help, free tax consultation, tax advisor near me, 24/7 tax help, virtual tax services, tax accountant Florida"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/contact" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/contact" />
  <meta
    property="og:title"
    content="Contact JET Tax Service Corp | Tax Experts in Lauderhill, FL"
  />
  <meta
    property="og:description"
    content="Expert tax and business services available 24/7. Free consultation, virtual services nationwide. Call 786-369-9058 or visit us in Lauderhill, FL."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/og-image.jpg" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="JET Tax Service Corp" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/contact" />
  <meta
    name="twitter:title"
    content="Contact JET Tax Service Corp | Tax Experts in Lauderhill, FL"
  />
  <meta
    name="twitter:description"
    content="Expert tax and business services available 24/7. Free consultation, virtual services nationwide. Call 786-369-9058."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/og-image.jpg" />

  <!-- Additional SEO -->
  <meta name="author" content="JET Tax Service Corp" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="geo.region" content="US-FL" />
  <meta name="geo.placename" content="Lauderhill" />
  <meta name="geo.position" content="26.1403;-80.2434" />
  <meta name="ICBM" content="26.1403, -80.2434" />

  <!-- JSON-LD Structured Data - Contact Page & Breadcrumb -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact JET Tax Service Corp",
      "description": "Get in touch with our tax and business professionals for expert assistance",
      "url": "https://jettaxservicecorp.com/contact",
      "mainEntity": {
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
            "name": "Contact",
            "item": "https://jettaxservicecorp.com/contact"
          }
        ]
      }
    }
    </script>
  `}

  <!-- JSON-LD Structured Data - Contact FAQ -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are your business hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday, 10am-5pm. However, we are available 24/7 by phone or text at 786-369-9058 for your convenience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer virtual consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer virtual consultations and services nationwide. You can meet with us via video call, phone, or in person at our Lauderhill, FL office."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will you respond to my inquiry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We typically respond to all inquiries within 24 hours. For urgent matters, please call or text us directly at 786-369-9058."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer free initial consultations to discuss your tax and business needs and determine how we can best assist you."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I prepare before contacting you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For tax services, have your previous tax returns and any relevant financial documents ready. For business services, prepare information about your business structure and goals. We'll guide you through everything else!"
          }
        }
      ]
    }
    </script>
  `}

</svelte:head>

<!-- Hero Section -->
<section
  class="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-20"
>
  <div class="section-container">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Let's Get Started</h1>
      <p class="text-xl md:text-2xl text-blue-100 mb-8">
        Ready to simplify your taxes and grow your business? We're here to help.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:7863699058" class="btn bg-white text-primary-700 hover:bg-gray-100">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call 786-369-9058
        </a>
        <a
          href="mailto:info@jettaxservicecorp.com"
          class="btn border-2 border-white text-white hover:bg-white/10"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email Us
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Quick Contact Stats -->
<section class="section-container">
  <div class="grid md:grid-cols-3 gap-8 -mt-12">
    <div class="card text-center">
      <div
        class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4"
      >
        ⚡
      </div>
      <h3 class="text-xl font-bold mb-2">24/7 Availability</h3>
      <p class="text-gray-600">Call or text anytime, we're always ready to help</p>
    </div>
    <div class="card text-center">
      <div
        class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4"
      >
        🌐
      </div>
      <h3 class="text-xl font-bold mb-2">Virtual Services</h3>
      <p class="text-gray-600">Serving clients nationwide with online consultations</p>
    </div>
    <div class="card text-center">
      <div
        class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4"
      >
        💬
      </div>
      <h3 class="text-xl font-bold mb-2">Fast Response</h3>
      <p class="text-gray-600">We respond to all inquiries within 24 hours</p>
    </div>
  </div>
</section>

<!-- Contact Form Section -->
<ContactForm />

<!-- FAQ Section -->
<section class="section-container bg-gradient-to-br from-gray-50 to-blue-50">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
      <p class="text-xl text-gray-600">Quick answers to common questions about contacting us</p>
    </div>

    <div class="space-y-4">
      {#each faqs as faq}
        <div class="card">
          <h3 class="text-xl font-bold mb-3 text-primary-700">{faq.question}</h3>
          <p class="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Location & Hours -->
<section class="section-container">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Visit Our Office</h2>
      <p class="text-xl text-gray-600">Conveniently located in Lauderhill, Florida</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Map/Location Info -->
      <div class="card">
        <h3 class="text-2xl font-bold mb-4">Office Location</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <p class="font-semibold">Address</p>
              <p class="text-gray-600">
                4929 N University Drive<br />
                Lauderhill, FL 33351
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p class="font-semibold">Parking</p>
              <p class="text-gray-600">Free parking available on-site</p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=4929+N+University+Drive+Lauderhill+FL+33351"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline w-full"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </a>
        </div>
      </div>

      <!-- Office Hours -->
      <div class="card">
        <h3 class="text-2xl font-bold mb-4">Office Hours</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center py-2 border-b border-gray-200">
            <span class="font-semibold">Monday - Friday</span>
            <span class="text-gray-600">10:00 AM - 5:00 PM</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-gray-200">
            <span class="font-semibold">Saturday</span>
            <span class="text-gray-600">By Appointment</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-gray-200">
            <span class="font-semibold">Sunday</span>
            <span class="text-gray-600">Closed</span>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-primary-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p class="font-semibold text-sm mb-1">After Hours Support</p>
              <p class="text-sm text-gray-600">
                Available 24/7 by phone or text at
                <a href="tel:7863699058" class="text-primary-600 font-semibold hover:underline"
                  >786-369-9058</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="section-container">
  <div
    class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 md:p-16 text-center text-white"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      Don't let tax complexity hold you back. Contact us today for a free consultation.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="tel:7863699058" class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg">
        Call Now
      </a>
      <a href="/services" class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
        View Services
      </a>
    </div>
  </div>
</section>
