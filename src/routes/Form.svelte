<script>
  const formValues = {
    name: '',
    countries: [],
    skills: [],
    remote: false,
    exp: '',
  };
  function onSubmit() {
    console.log(formValues);
  }
</script>

<main class="w-full h-screen flex justify-center items-center">
  <form on:submit|preventDefault={onSubmit}>
    <pre>{JSON.stringify(formValues, null, 2)}</pre>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={formValues.name} />
    </div>
    <div>
      <label for="countries">Countries</label>
      <select
        type="text"
        id="countries"
        bind:value={formValues.countries}
        multiple
      >
        <option value="">Select countries</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="India">India</option>
      </select>
    </div>
    <div>
      <label for="remote">Remote</label>
      <input type="checkbox" id="remote" bind:checked={formValues.remote} />
    </div>
    <div>
      <label for="">Skills</label>
      <input
        type="checkbox"
        id="remote"
        value="html"
        bind:group={formValues.skills}
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="remote"
        value="css"
        bind:group={formValues.skills}
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="remote"
        value="js"
        bind:group={formValues.skills}
      />
      <label for="js">JS</label>
    </div>
    <div>
      <label for="">Years of experience</label>
      <input type="radio" id="1" value="1" bind:group={formValues.exp} />
      <label for="1">1</label>
      <input type="radio" id="2" value="2" bind:group={formValues.exp} />
      <label for="2">2</label>
      <input type="radio" id="3" value="3" bind:group={formValues.exp} />
      <label for="3">3</label>
    </div>
  </form>
</main>

<style>
  input {
    @apply mx-3 border border-gray-300;
  }
</style>
