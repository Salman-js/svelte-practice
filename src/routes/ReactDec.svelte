<script>
  const fname = 'Salman';
  const lname = 'Mohammed';
  $: fullname = `${fname} ${lname}`;
  $: console.log(`${fname} ${lname}`);
</script>

<main class="w-full h-screen flex justify-center items-center">
  {fullname}
</main>

<style>
</style>
