<script>
  import SlotParent from './SlotParent.svelte';
  import ContextParent from './ContextParent.svelte';
  import Count from './Count.svelte';
  import Form from './Form.svelte';
  import PropsComp from './PropsComp.svelte';
  import ReactDec from './ReactDec.svelte';
  import './styles.css';
  import OnMount from './OnMount.svelte';
  import DynamicComp from './DynamicComp.svelte';

  const fname = 'Salman';
  const name = {
    fname: 'Salman',
    lname: 'Mohammed',
  };
</script>

<div class="app">
  <main>
    <svelte:component this={DynamicComp} />
    <PropsComp fname="Salman" lname="Mohammed" />
    <PropsComp {fname} />
    <PropsComp {...name} />
    <ContextParent />
    <SlotParent />
    <OnMount />
  </main>
</div>

<style>
  :global(h3) {
    @apply text-red-500;
  }
</style>
