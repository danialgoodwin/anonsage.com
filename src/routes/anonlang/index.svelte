<script context="module">
  export function preload({params, query}) {
    return this.fetch(`dev.json`).then(r => r.json()).then(posts => {
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
  <title>Anonlang - Anonsage Language</title>
</svelte:head>

<h1>Anonlang - Anonsage Language</h1>

<p>I like thinking about programming language design. So, here's a few thoughts and sample syntax of the latest iteration I'm working on:</p>

Output 'Hello, World!':
<pre><code>
'Hello, World!'
</code></pre>

Simple Temperature converter:
<pre><code>
fahrenheit = celsius * 1.8 + 32
'Fahrenheit: ' &lt;input id=fah type=number bind=solve(fahrenheit, celsius=cel)>
'Celsius: ' &lt;input id=cel type=number bind=solve(celsius, fahrenheit=fah)>
</code></pre>

Simple TODO list with local and remote storage:
<pre><code>
storage_key = 'tasks'
pref_key = 'user_storage_type_pref'
local_storage = platform.storage
remote_storage = url(https://example.com/api/storage)
user_storage = local_storage(pref_key) otherwise remote_storage(pref_key) otherwise local_storage
get_tasks() = user_storage(storage_key) otherwise mutable_list()
tasks = get_tasks()
save_task(value) = tasks.add(value) then user_storage(storage_key).add(value)
remove_task(value) = tasks.remove(value) then user_storage(storage_key).remove(value)
set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type) then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()

&lt;checkbox text='Use remote storage?'
          on_check=set_user_storage_type(remote_storage)
          on_uncheck=set_user_storage_type(local_storage)>
&lt;input hint='Add a task' on_key_enter=save_task(input.text)>
&lt;list bind=tasks template(task)=`&lt;checkbox on_check=remove_task(task)> task`>
</code></pre>


<ul>
    {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel='prefetch' href='dev/{post.slug}'>{post.title}</a></li>
    {/each}
</ul>
