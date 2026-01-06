<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';

  let mobileMenuOpen = $state(false);

  const navItems = [
    { label: 'Tax Services', href: '/' },
    { label: 'Small Business', href: '/small-business' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' }
  ];
</script>

<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-3 group">
          <img
            src="/logo.webp"
            alt="JET Tax Service Corp Logo"
            class="h-16 w-auto group-hover:scale-105 transition-transform"
            loading="eager"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
            class:text-primary-600={$page.url.pathname === item.href}
          >
            {item.label}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        {/each}
        <a href="/contact" class="btn btn-primary"> Get Started </a>

        <!-- Divider -->
        <div class="h-8 w-px bg-gray-300"></div>

        <a
          href="https://jettaxdocs.securefilepro.com/portal/#/login"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Login
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="text-gray-700 hover:text-primary-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Overlay -->
  {#if mobileMenuOpen}
    <!-- Backdrop -->
    <button
      class="fixed inset-0 bg-black/50 z-40 md:hidden cursor-default"
      onclick={() => (mobileMenuOpen = false)}
      onkeydown={(e) => e.key === 'Escape' && (mobileMenuOpen = false)}
      aria-label="Close menu"
      transition:fade={{ duration: 200 }}
    ></button>

    <!-- Slide-in Menu -->
    <div
      class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
      transition:fly={{ x: 320, duration: 300 }}
    >
      <!-- Menu Header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <div class="text-lg font-bold text-gray-900">Menu</div>
        <button
          onclick={() => (mobileMenuOpen = false)}
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Content -->
      <div class="p-6 space-y-4 overflow-y-auto h-full pb-24">
        {#each navItems as item}
          <a
            href={item.href}
            class="block py-3 text-gray-700 hover:text-primary-600 font-medium text-lg transition-colors"
            class:text-primary-600={$page.url.pathname === item.href}
            onclick={() => (mobileMenuOpen = false)}
          >
            {item.label}
          </a>
        {/each}

        <a href="/contact" class="btn btn-primary w-full mt-6" onclick={() => (mobileMenuOpen = false)}>
          Get Started
        </a>

        <!-- Divider -->
        <div class="border-t border-gray-300 my-6"></div>

        <a
          href="https://jettaxdocs.securefilepro.com/portal/#/login"
          target="_blank"
          rel="noopener noreferrer"
          class="block py-3 text-gray-700 hover:text-primary-600 font-medium text-lg flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Client Portal Login
        </a>
      </div>
    </div>
  {/if}
</nav>
