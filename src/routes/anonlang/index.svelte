<script context="module">
  export function preload({params, query}) {
    return this.fetch(`anonlang.json`).then(r => r.json()).then(posts => {
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
&lt;h1 'Hello, World!'>
</code></pre>

Simple Temperature converter:
<pre><code>
fahrenheit = celsius * 1.8 + 32
'Fahrenheit: ' &lt;input id=fah type=number bind=solve(fahrenheit, celsius=cel)>
'Celsius: ' &lt;input id=cel type=number bind=solve(celsius, fahrenheit=fah)>
</code></pre>

Alternatively:
<pre><code>
fah = &lt;input type=number>
cel = &lt;input type=number>
fah = cel * 1.8 + 32
'Fahrenheit: ' &lt;fah>
'Celsius: ' &lt;cel>
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



<h2>Basic Syntax</h2>

- Data types and interfaces: Iterable, Text, Number, List, Set, Map, View
    - Casting: `.to*`
- Control logic: if-else, loop-in,
    Ex: `if isTrue() loop char in row in file doSomething(char) else doSomethingElse()`

<h3>Open questions</h3>
- `then` can used the same/similar to bash's pipe |
- Can calling a variable and 0-arg function be done the same way? Ceylon?
- Exact syntax for blocks.
    - A reason to not use 'end' is because it is  syntactic noise. It draws attention when it doesn't need to. Hmm, that's why Python is good, because of less syntactic noise because it uses whitespace instead.
- Allow variables to show? Probably not. From this example, we can see that it can get confusing. We would have to use capital letters for GUI classes.

        a = 'Hello'
        b = list('a', 'b', 'c')
        <a>
        <b>

- Should it have the ability to include other languages ver-batim? Maybe use the triple backtick syntax with language name.
- How to tell the difference between the Math `<` and the beginning of a view `<`? Use `lt`? Meh.
- Safari has shortcuts for 'open new email message with content of a page' (command + I), 'open new email message containing only the URL of a page' (command + shift + I). BUT, Maybe a more universal shortcut would be to first have a combination to open a 'share' screen, then perhaps another letter to choose email/text/another app. Default could be just whole page or URL, or selection or focus-click-drag, like a screenshot. Maybe rather than a shortcut to share URL, it should be a shortcut to share a selection... that way it can cover URL (command + l) and page content
- If we want commands to be 'pipeable', then maybe a regular screenshot first to clipboard, then command to share clipboard contents



<h2>Posts:</h2>
<ul>
    {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel='prefetch' href='anonlang/{post.slug}'>{post.title}</a></li>
    {/each}
</ul>
