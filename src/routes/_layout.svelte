<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 1em;
    margin: 0 auto;
    box-sizing: border-box;
    line-height: 1.6;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
  <script data-goatcounter="https://anonsage.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
</main>
