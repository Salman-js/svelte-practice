<script>
  import SlotParent from './SlotParent.svelte';
  import ContextParent from './ContextParent.svelte';
  import Count, { getCount } from './Count.svelte';
  import Form from './Form.svelte';
  import PropsComp from './PropsComp.svelte';
  import ReactDec from './ReactDec.svelte';
  import './styles.css';
  import OnMount from './OnMount.svelte';
  import DynamicComp from './DynamicComp.svelte';
  import StoreDisplay from './StoreDisplay.svelte';
  import StoreUpdate from './StoreUpdate.svelte';
  import StoreReset from './StoreReset.svelte';
  import StoredTimer from './StoredTimer.svelte';

  const fname = 'Salman';
  const name = {
    fname: 'Salman',
    lname: 'Mohammed',
  };
</script>

<div class="app">
  <main>
    <svelte:component this={DynamicComp} />
    <button on:click={() => alert(getCount())}>Get Module Count</button>
    <Count />
    <Count />
    <Count />
    <StoreDisplay />
    <StoreUpdate />
    <StoreReset />
    <StoredTimer />
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
