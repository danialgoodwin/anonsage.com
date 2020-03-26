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

<small><em>Caution: You will likely be disappointed going through these random words. Sometimes, I'm not even sure what I was thinking.</em></small>

<h1>Recent random posts</h1>

<ul>
    {#each posts as post}
      <li><a rel='prefetch' href='random/{post.slug}'>{post.title}</a></li>
    {/each}
</ul>
