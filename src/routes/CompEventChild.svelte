<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<main>
  <div>
    <h2>This is a popup</h2>
    <button on:click={() => dispatch('hide', 'Any Data')}>Hide</button>
  </div>
</main>
