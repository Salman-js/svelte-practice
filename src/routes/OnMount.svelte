<script>
  import { onMount } from 'svelte';

  let posts = [];
  onMount(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    posts = data;
    input.focus();
  });
  let input;
</script>

<main>
  <input type="text" bind:this={input} />
  {#each posts as post, index (index)}
    <h2 key={index}>{post.title}</h2>
  {:else}
    <p>Loading...</p>
  {/each}
</main>
