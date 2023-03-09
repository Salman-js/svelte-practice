<script>
  import SlotChild from './SlotChild.svelte';
</script>

<main>
  <SlotChild>
    <h2>This is a slot from the parent component</h2>
  </SlotChild>
  <SlotChild />
</main>
