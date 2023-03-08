<script>
    const text = 'Italic'
    const italy = false
    const countries = ['Spain', 'France', 'Italy']
</script>


<div class='App'>
   <h1 class:italy>Is {text}</h1>  <!-- class:italy={italy} -->
   {#if italy}
   <h1 class:italy>Is {text}</h1> 
   {:else}
   <h1 class:italy>Not {text}</h1> 
   {/if}
   {#each countries as country, index (index)}
   <h1 class:italy>{country + ' '} </h1> 
   {/each}
</div>
 
<style>
    .App {
        @apply w-full h-screen flex justify-center items-center bg-gradient-to-b from-gray-300 to-slate-400;
    }
    h1 {
        @apply text-slate-700 font-extralight text-[4em] tracking-widest;
    }
    .italy {
        @apply italic;
    }
</style>
