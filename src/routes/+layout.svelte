<script>
  import ContextParent from './ContextParent.svelte';
  import Count from './Count.svelte';
  import Form from './Form.svelte';
  import PropsComp from './PropsComp.svelte';
  import ReactDec from './ReactDec.svelte';
  import './styles.css';

  const fname = 'Salman';
  const name = {
    fname: 'Salman',
    lname: 'Mohammed',
  };
</script>

<div class="app">
  <main>
    <PropsComp fname="Salman" lname="Mohammed" />
    <PropsComp {fname} />
    <PropsComp {...name} />
    <ContextParent />
  </main>
</div>

<style>
</style>
