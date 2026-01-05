<script>
  let { question, answer } = $props();
  let isOpen = $state(false);
</script>

<div class="border-b border-gray-200">
  <button
    class="w-full py-6 flex justify-between items-center text-left hover:text-primary-600 transition-colors"
    onclick={() => (isOpen = !isOpen)}
    aria-expanded={isOpen}
  >
    <span class="text-lg font-semibold pr-8">{question}</span>
    <svg
      class="w-6 h-6 flex-shrink-0 transition-transform {isOpen ? 'rotate-180' : ''}"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div class="pb-6 pr-8 text-gray-600 leading-relaxed">
      {answer}
    </div>
  {/if}
</div>
