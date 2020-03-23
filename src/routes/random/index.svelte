<script context="module">
  export function preload({params, query}) {
    return this.fetch(`random.json`).then(r => r.json()).then(posts => {
      return {posts}
    })
  }
</script>

<script>
  export let posts
</script>

<style>
  ul {
    font-size: 1.5rem;
    line-height: 1.6;
  }
</style>

<svelte:head>
  <title>Random Blog - Anonsage</title>
</svelte:head>

<h1>Recent random posts</h1>

<ul>
    {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel='prefetch' href='random/{post.slug}'>{post.title}</a></li>
    {/each}
</ul>
