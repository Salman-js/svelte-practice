<script>
  import { setContext } from 'svelte';
  import CompEventChild from './CompEventChild.svelte';
  import CompEventForward from './CompEventForward.svelte';
  import ContextChild from './ContextChild.svelte';

  const uname = 'theartist';
  setContext('uContext', uname);
  let show = false;
</script>

<main>
  <ContextChild />
  {#if show}
    <CompEventChild
      on:hide={(data) => {
        show = false;
        alert(data.detail);
      }}
    />
  {/if}
  {#if !show}
    <button on:click={() => (show = true)}>Show</button>
  {/if}
  <CompEventForward
    on:greet={(data) => {
      alert(`Hello ${data.detail}`);
    }}
  />
</main>
