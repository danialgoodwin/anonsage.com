<script context="module">
  export function preload({params, query}) {
    return this.fetch(`api/tags.json`).then(r => r.json()).then(tags => {
      return {tags}
    })
  }
</script>

<script>
  export let tags
</script>

<style>
  ul {
    font-size: 1.5rem;
    line-height: 1.6;
  }
</style>

<svelte:head>
  <title>Tags</title>
</svelte:head>

<h1>Tags</h1>

<ul>
    {#each tags as tag}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel='prefetch' href='topic/{tag}'>{tag}</a></li>
    {/each}
</ul>
