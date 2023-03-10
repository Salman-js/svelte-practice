<script>
  import { count } from './store/stores';

  function reset() {
    count.set(0);
  }
</script>

<button on:click={reset}>Reset Stored value</button>

<style>
</style>
