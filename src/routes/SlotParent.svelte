<script>
  import SlotChild from './SlotChild.svelte';
</script>

<main>
  <SlotChild>
    <h2>This is a slot from the parent component</h2>
  </SlotChild>
  <SlotChild>
    <h2 slot="first-named">
      This is the first named slot from the parent component
    </h2>
  </SlotChild>
  <SlotChild>
    <h2 slot="second-named">
      This is the second slot from the parent component
    </h2>
  </SlotChild>
  <SlotChild />
</main>
