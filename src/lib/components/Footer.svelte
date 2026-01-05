<script>
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Tax Services', href: '/' },
    { label: 'Small Business', href: '/small-business' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { label: 'Personal Tax Filing', href: '/#services' },
    { label: 'Business Tax Filing', href: '/#services' },
    { label: 'Tax Planning', href: '/#services' },
    { label: 'IRS Notice Review', href: '/#services' }
  ];

  const socialMedia = [
    { name: 'Facebook', href: 'https://www.facebook.com/people/Jet-Tax-Service-Corp/61570089770520/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/askjettax/', icon: 'instagram' },
    { name: 'X', href: 'https://x.com/AskJetTax', icon: 'twitter' },
    { name: 'YouTube', href: 'https://www.youtube.com/@jettaxservicescorp', icon: 'youtube' }
  ];
</script>

<footer class="bg-gray-900 text-gray-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img
            src="/logo.webp"
            alt="JET Tax Service Corp Logo"
            class="h-12 w-auto"
          />
        </div>
        <p class="text-sm mb-4">
          Your trusted partner for virtual tax & small business solutions for over 25 years.
        </p>
        <div class="space-y-2 text-sm">
          <p>📍 4929 N University Drive<br>Lauderhill, FL 33351</p>
          <p>📞 <a href="tel:7863699058" class="hover:text-white">786-369-9058</a></p>
          <p>📧 <a href="mailto:info@jettaxservicecorp.com" class="hover:text-white">info@jettaxservicecorp.com</a></p>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-white font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-white font-semibold mb-4">Our Services</h3>
        <ul class="space-y-2 text-sm">
          {#each services as service}
            <li>
              <a href={service.href} class="hover:text-white transition-colors">
                {service.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Social & Hours -->
      <div>
        <h3 class="text-white font-semibold mb-4">Connect With Us</h3>
        <div class="flex gap-4 mb-6">
          {#each socialMedia as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              aria-label={social.name}
            >
              {#if social.icon === 'facebook'}
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              {:else if social.icon === 'instagram'}
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              {:else if social.icon === 'twitter'}
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              {:else if social.icon === 'youtube'}
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              {/if}
            </a>
          {/each}
        </div>
        <h4 class="text-white font-semibold mb-2 text-sm">Business Hours</h4>
        <p class="text-sm">
          Mon-Fri: 10am-5pm<br>
          24/7 Text Support
        </p>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
      <p>&copy; {currentYear} JET Tax Service Corp. All rights reserved.</p>
      <div class="mt-2 flex justify-center gap-4">
        <a href="/privacy" class="hover:text-white">Privacy Policy</a>
        <span>•</span>
        <a href="/terms" class="hover:text-white">Terms & Conditions</a>
      </div>
    </div>
  </div>
</footer>
