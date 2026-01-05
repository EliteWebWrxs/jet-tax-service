<script>
  let {
    title,
    subtitle,
    primaryCta = 'Get Started',
    secondaryCta = 'View Services',
    primaryHref = '/contact',
    secondaryHref = '#services'
  } = $props();
</script>

<section class="relative bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
    </div>
  </div>

  <div class="relative section-container">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span class="text-sm font-medium">Trusted for Over 25 Years</span>
      </div>

      <!-- Title -->
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        {title}
      </h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
        {subtitle}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-md sm:max-w-none mx-auto">
        <a href={primaryHref} class="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto">
          {primaryCta}
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a href={secondaryHref} class="btn border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
          {secondaryCta}
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
