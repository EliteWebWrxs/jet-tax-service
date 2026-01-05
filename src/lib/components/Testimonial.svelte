<script>
  let { name, location, rating = 5, text, service } = $props();
</script>

<div class="card bg-white">
  <!-- Stars -->
  <div class="flex gap-1 mb-4">
    {#each Array(5) as _, i}
      <svg
        class="w-5 h-5 {i < rating ? 'text-yellow-400' : 'text-gray-300'}"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    {/each}
  </div>

  <!-- Review Text -->
  <p class="text-gray-700 mb-6 italic leading-relaxed">"{text}"</p>

  <!-- Author Info -->
  <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
    <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <div>
      <div class="font-semibold text-gray-900">{name}</div>
      <div class="text-sm text-gray-600">{location}</div>
      {#if service}
        <div class="text-xs text-primary-600 mt-1">{service}</div>
      {/if}
    </div>
  </div>
</div>
