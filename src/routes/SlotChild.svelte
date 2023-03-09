<script>
  const fname = 'Salman';
</script>

<main>
  <slot>Default slot content</slot>
  <slot name="first-named" {fname}>Default 1 slot content</slot>
  <slot name="second-named">Default 2 slot content</slot>
</main>
