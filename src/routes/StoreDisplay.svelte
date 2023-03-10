<script>
  import { count } from './store/stores';

  //   let counter;
  //   count.subscribe((value) => {
  //     counter = value;
  //   });
</script>

<!-- <h1>Stored count = {counter}</h1> -->
<h1>Stored count = {$count}</h1>

<style>
  h1 {
    @apply text-lg font-bold m-3;
  }
</style>
