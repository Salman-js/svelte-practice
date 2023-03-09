<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function greet() {
    dispatch('greet', 'Salman');
  }
</script>

<button on:click={greet}>Greet</button>
