<script>
  import { count } from './store/stores';

  function increment() {
    count.update((value) => {
      return value + 1;
    });
  }
</script>

<button on:click={increment}>Increment Stored value</button>

<style>
</style>
