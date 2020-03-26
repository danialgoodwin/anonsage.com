<script>
  import {onMount} from 'svelte'

  let tags = []
  let utilTags = []

  onMount(async () => {
    console.log('=========onMount()')
    const response = await fetch(`api/tags.json`)
    tags = await response.json()
    const response2 = await fetch(`_utils/utilTags.json`)
    utilTags = await response2.json()
  })
</script>

<svelte:head>
  <title>Anonsage. Think. Do. Learn</title>
</svelte:head>

<h1>GREAT SUCCESS!</h1>

<figure>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3565.94 1149.78">
    <defs>
      <style>.cls-1 {
        fill: none;
        stroke: #ff5722;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 70px;
      }</style>
    </defs>
    <title>Anonsage Infinity Code</title>
    <polyline class="cls-1" points="653.44 35 35 574.89 653.44 1114.78"/>
    <polyline class="cls-1"
              points="1526.44 297.55 1247.44 36.55 650.03 574.89 1247.44 1114.78 2390.43 35 2981.44 574.89 2390.44 1114.78 2120.44 864.55"/>
    <polyline class="cls-1" points="3026.77 35 3530.94 574.89 3026.77 1114.78"/>
  </svg>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>What software development topics are you interested in?</strong></p>

<ul>
  {#each tags as tag}
  <!--TODO: Create a topics/ route-->
    <li><a href="dev">{tag}</a></li>
  {/each}
</ul>
<ul>
  {#each utilTags as tag}
  <!--TODO: Create a topics/ route-->
    <li><a href="dev">{tag}</a></li>
  {/each}
</ul>



<style>
  h1, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
