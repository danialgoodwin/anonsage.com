---
title: 'Thought Experiment: 1-File Apps (Part 2)'
tags:
- Thought Experiment
- Language Design
---
_You should read [Thought Experiment: One-File Apps (Part 1)](./dev/2020-03-01-thought-experiment-one-file-apps--part-1) so that you know what this article is about._

But, here's a quick summary of Part 1 anyways: We're imagining a theoretical programming language that simplifies as much boilerplate code as possible so that we can easily create apps in a single file, or page, or screen.

We are now going to continue from Part 1, where we just said that we are going to implement an API call and local (and remote) storage. It will be explained line-by-line (ish) after the code, which [should be intuitive](./dev/2016-01-03-code-intuitiveness) enough. Basically, the user here has the ability to use either local storage or remote storage for their TODO list.

```bash
title = My TODOs
theme = Material
---
define:
storage_key = 'tasks'
pref_key = 'user_storage_type_pref'
local_storage = platform.storage
remote_storage = url(https://example.com/api/storage)
user_storage = local_storage(pref_key) otherwise remote_storage(pref_key) otherwise local_storage
get_tasks() = user_storage(storage_key) otherwise mutable_list()
tasks = get_tasks()
save_task(value) = tasks.add(value) then user_storage(storage_key).add(value)
remove_task(value) = tasks.remove(value) then user_storage(storage_key).remove(value)
set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type)
        then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()

show:
<checkbox text='Use remote storage?'
    on_check=set_user_storage_type(remote_storage)
    on_uncheck=set_user_storage_type(local_storage)>
<input hint='Add a task' on_key_enter=save_task(input.text) width=full>
<list bind=tasks template(task)=`<checkbox text=task on_check=remove_task(task)`>
```

Here's what that could look like at a minimum:

![Simple TODO list with Material theme](../2020-03-23-thought-experiment-one-file-apps--material-todo.png "Simple TODO list with Material theme")

Let's now look the above code one line (ish) at a time:
- `theme: Material` is styling referencing a set of style handled by the platform. We could probably do something like `Material(orange, black)` to set the primary and secondary colors for our app. Or, we would just accept the defaults provided by the platform or user.
- `local_storage = platform.storage` gets the local storage type specific for that platform. `platform` is a keyword here.
- Both `local_storage` and `remote_storage` would have the same interface/API
- The `otherwise` keyword is similar to JavaScript's syntactic sugar for 'otherwise', aka `x = value || defaultValue`. This is also a lot easier to read than other languages' `x = storage.get(key, 'default value')'`
- The `then` keyword is similar to bash's syntactic sugar for 'then execute the following statement if the previous condition returns true', aka `&&`. This is also somewhat similar to JavaScript's Promise that uses `.then(...)`.
- `tasks.update()` will recalculate the variable's value. We bind to `tasks` changes in `<list>`
- The last line with `template(task)=...` has an input value for the `template` _attribute_, which comes from the binded `tasks`. This automatically knows to iterates through `tasks` because it is in a `list` _view_.
- As I was playing around, I really liked the feel of `storage(key).add(value)` compared to my first thought of `storage.append(key, value)`. We can now keep the verbs limited and more simple and matching the style of other data structures like list and set.

There is plenty more that we would want in an app like this, and I would expect the platform to handle most of it.

For example, **permissions** for accessing the internet can easily be handled by the platform. So, I didn't have to explicitly code anything related to that.

The platform could easily handle **themes** too, like light and dark mode, or whatever custom colors that the user chooses.

Future thought experiments about this Anonsage language include:
- Multi-page
- Further integration of logic and UI. We don't actually need `define:` and `show:` in the above code. I just put those labels there to potentially help understand the code faster.

I've spent enough time on this thought experiment yesterday and today. I will eventually return to this topic. And, if I hear feedback, then that will likely motivate me to think about this again sooner. Let me know if there are any other app examples that you would like to see in the Anonsage language. ;) 

<!-- TODO: Fix link for analytics -->
Interested in learning more about this Anonsage language? [Click here](./dev)
