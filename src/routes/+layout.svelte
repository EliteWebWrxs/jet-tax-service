<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <!-- Global Organization Schema - Single source of truth -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://jettaxservicecorp.com/#organization",
      "name": "JET Tax Service Corp",
      "legalName": "JET Tax Service Corp",
      "url": "https://jettaxservicecorp.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jettaxservicecorp.com/logo.png",
        "width": 250,
        "height": 250
      },
      "image": "https://jettaxservicecorp.com/logo.png",
      "description": "Professional tax filing, planning, and small business services in Florida and nationwide. Over 25 years of experience.",
      "telephone": "+1-786-369-9058",
      "email": "info@jettaxservicecorp.com",
      "foundingDate": "1999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4929 N University Drive",
        "addressLocality": "Lauderhill",
        "addressRegion": "FL",
        "postalCode": "33351",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.1403,
        "longitude": -80.2434
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Florida"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "17:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-786-369-9058",
          "contactType": "Customer Service",
          "areaServed": "US",
          "availableLanguage": ["English", "Spanish"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/people/Jet-Tax-Service-Corp/61570089770520/",
        "https://www.instagram.com/askjettax/",
        "https://x.com/AskJetTax",
        "https://www.youtube.com/@jettaxservicescorp"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tax and Business Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Tax Filing",
              "description": "Comprehensive personal tax preparation and filing services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Tax Filing",
              "description": "Expert business tax preparation for all entity types"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tax Planning & Advisory",
              "description": "Strategic tax planning to minimize liability"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Formation",
              "description": "LLC, S-Corp, and C-Corp formation services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bookkeeping Services",
              "description": "Professional bookkeeping and accounting services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payroll Services",
              "description": "Complete payroll management and compliance"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "250"
      }
    }
    </script>
  `}
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navigation />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
