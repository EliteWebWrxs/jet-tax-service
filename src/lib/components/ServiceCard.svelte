<script>
  let { title, description, icon, features = [], ctaText = 'Get Started', ctaHref = '#' } = $props();
</script>

<div class="card group hover:shadow-2xl hover:-translate-y-1">
  <!-- Icon -->
  <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <span class="text-3xl">{icon}</span>
  </div>

  <!-- Title -->
  <h3 class="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

  <!-- Description -->
  <p class="text-gray-600 mb-6">{description}</p>

  <!-- Features -->
  {#if features.length > 0}
    <ul class="space-y-2 mb-6">
      {#each features as feature}
        <li class="flex items-start gap-2 text-gray-700">
          <svg class="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm">{feature}</span>
        </li>
      {/each}
    </ul>
  {/if}

  <!-- CTA -->
  <a href={ctaHref} class="text-primary-600 font-semibold inline-flex items-center gap-2 group/cta">
    {ctaText}
    <svg class="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>
