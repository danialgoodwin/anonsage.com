<script context="module">
  export async function preload({params, query}) {
    // the `slug` parameter is available because this file is called [slug].svelte
    const res = await this.fetch(`random/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return {post: data}
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import {onMount} from 'svelte'
  onMount(async () => {
    window.goatcounter.count()
  })

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<small>{post.date || ''}</small>

<div class='content'>
    {@html post.html}
</div>
