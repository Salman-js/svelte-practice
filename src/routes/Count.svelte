<script>
    let count = 0
    function add() {
       count += 1
    }
</script>


<div class='App'>
    <button on:click={add}>Count: {count}</button>
</div>
 
<style>
    button {
        @apply p-3 border border-gray-300 bg-blue-500 text-white rounded-lg;
    }
    .App {
        @apply w-full h-screen flex justify-center items-center;
    }
</style>
