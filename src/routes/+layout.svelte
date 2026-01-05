<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
  <Navigation />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
