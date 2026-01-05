<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact Us | Tax & Business Consultation | JET Tax Service Corp</title>
  <meta
    name="description"
    content="Get in touch with JET Tax Service Corp for professional tax and business solutions. Available 24/7 by phone or text. Serving Florida and nationwide with virtual services."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jettaxservicecorp.com/contact" />
  <meta property="og:title" content="Contact Us | JET Tax Service Corp" />
  <meta
    property="og:description"
    content="Get in touch with JET Tax Service Corp for professional tax and business solutions. Available 24/7 in Florida and nationwide."
  />
  <meta property="og:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jettaxservicecorp.com/contact" />
  <meta name="twitter:title" content="Contact Us | JET Tax Service Corp" />
  <meta
    name="twitter:description"
    content="Get in touch for professional tax and business solutions. Available 24/7 by phone or text."
  />
  <meta name="twitter:image" content="https://jettaxservicecorp.com/logo.webp" />

  <!-- Additional SEO -->
  <meta
    name="keywords"
    content="tax consultation, tax help, tax expert Florida, business consultation, tax advisor, contact tax professional"
  />
  <link rel="canonical" href="https://jettaxservicecorp.com/contact" />

  <!-- Structured Data -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact JET Tax Service Corp",
      "description": "Get in touch with our tax and business professionals",
      "url": "https://jettaxservicecorp.com/contact",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "JET Tax Service Corp",
        "telephone": "+1-786-369-9058",
        "email": "info@jettaxservicecorp.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4929 N University Drive",
          "addressLocality": "Lauderhill",
          "addressRegion": "FL",
          "postalCode": "33351",
          "addressCountry": "US"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "17:00"
        }
      }
    }
    </script>
  `}
</svelte:head>

<ContactForm />
