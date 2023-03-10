<script>
  import { time } from './store/stores.js';
  const dateFormatter = new Intl.DateTimeFormat('en', {
    houre12: true,
    hour: 'numeric',
    minute: '2-digit',
    sceond: '2-digit',
  });
</script>

<h1>{dateFormatter.format($time)}</h1>

<style>
  h1 {
    @apply text-lg font-bold m-3;
  }
</style>
