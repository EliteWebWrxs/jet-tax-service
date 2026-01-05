<script>
  import { Picture } from '@sveltejs/enhanced-img';

  let {
    src,
    alt,
    class: className = '',
    sizes = '100vw',
    loading = 'lazy',
    ...props
  } = $props();
</script>

<Picture
  {src}
  {alt}
  {sizes}
  {loading}
  class={className}
  {...props}
/>
