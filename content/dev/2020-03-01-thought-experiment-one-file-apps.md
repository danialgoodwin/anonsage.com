---
title: 'Thought Experiment: 1-File Apps'
tags:
- Thought Experiment
- Dev Design
---
Imagine a theoretical programming language that would allow us to create many types of apps, each in a single file (without getting too long, as simple as possible, no boilerplate code).

Platforms that should be supported by this theoretical language:
- Browser extensions
- IDE plugins
- Operating system apps
- Web apps (pages)
- Mobile apps
- Console / Terminal / Shell
- Games?

We aren't going to have something fully fleshed out today, but let's start for fun...

At a minimum, things that every app needs (we'll add more features later):
- Title
- Description
- Author (person or company)
- Contact information
- Content
    - Media (text, images, videos, audio)
    - Actions
    - Styles

A simplified 1-file app could look something like the following:

```bash
title: My App
description: Do awesome things and stuff
author: My Name
contact: myemail@example.com
---
<content here>
```

Now that we have that criteria listed, we can now simplify the list of needs...

What if the author or contact information changes? We don't want to have to manually update every single app that we have created. So, perhaps a centralized location would be nice. This could be hosted by the developer console of the platform (browser, OS, mobile, package manager, ...)

In fact, should we just remove all information that doesn't directly affect how users see and use the app? Once the app is downloaded, users need to be able to find the app by the title (at a minimum). The rest of the fields (description, author, contact) don't affect normal usage of the app. So, to simplify the overall view of our 1-file app:

```bash
title: My App
---
<content here>
```

We really shouldn't simplify the header anymore than this. Note: This thought experiment isn't taking internationalization into account, we might want to handle all of that in a different file anyways.

Now, about the app content. We need to show users **media** (text/images/video/audio) in a general **layout** with a default **color** theme defined by us developers. There's usually some **interactions** with the app, too. (Do we really have to define a color theme for users? That's a different discussion.) So, here's the basic one-file app layout now:

```bash
title: My App
---
<defined media>

<defined interactions>

<layout>

<color?>
```

We aren't going to stop here. So far, this could just be a regular HTML file, which can already be shown in just about all platforms. We are going to continue down this thought experiment to figure out what we _really_ want in a simple app definition. So, for fun and a sneak peak, let's create a simple app using pseudo code rather than HTML+JavaScript+CSS. Here's a potential idea for a simple converter app:

```bash
title: Temperature Converter
---
define:
fahrenheit = celsius * 1.8 + 32

show:
'Fahrenheit:' <input id=fah type=number bind=solve(fahrenheit, celsius=cel)>
'Celsius:' <input id=cel type=number bind=solve(celsius, fahrenheit=fah)>
```

Here's what that could look like at a minimum:

![Simple temperature converter app](2020-03-23-thought-experiment-one-file-apps--temperature-converter.png "Simple temperature converter app")

<details>
  <summary>The HTML version of the above would take about 5 times as much code to accomplish the same thing.</summary>
  <pre>
&lt;h1>Temperature Converter&lt;/h1>
&lt;form action="/do-conversion.php">
  &lt;label for="fah">Fahrenheit:&lt;/label>
  &lt;input type="text" id="fah" name="fah">
  &lt;label for="cel">Celsius:&lt;/label>
  &lt;input type="text" id="cel" name="cel">
  &lt;input type="submit" value="Submit">
&lt;/form></pre>
</details>

Next, we are going to add an API call for remote data. And, to speed things up, we are also going to add local (or remote) storage, which can be used for user preferences or cache. Let's jump right in, then explain things later. The pseduo [code should be intuitive](./2016-01-03-code-intuitiveness) enough.

```bash
title: My TODOs
theme: Material
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
set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type) then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()

show:
<checkbox text='Use remote storage?'
    on_check=set_user_storage_type(remote_storage)
    on_uncheck=set_user_storage_type(local_storage)>
<input hint='Add a task' on_key_enter=save_task(input.text) width=full>
<list bind=tasks template(task)=`<checkbox on_check=remove_task(task)> task`>
```

Here's what that could look like at a minimum:

![Simple TODO list with Material theme](2020-03-23-thought-experiment-one-file-apps--material-todo.png "Simple TODO list with Material theme")

Let's now look the above code one line (ish) at a time:
- `local_storage = platform.storage` gets the local storage type specific for that platform. `platform` is a keyword here.
- Both `local_storage` and `remote_storage` would have the same interface/API
- `otherwise` keyword is similar to JavaScript's syntactic sugar for 'otherwise', aka `x = value || defaultValue`. This is also a lot easier to read than other languages' `x = storage.get(key, 'default value')'`
- `then` keyword is similar to bash's syntactic sugar for 'then execute the following statement if the previous condition is true', aka `&&`. This is also somewhat similar to JavaScript's Promise that uses `.then(...)`.
- `tasks.update()` will recalculate the variable's value. We bind to `tasks` changes in `<list>`
- The last line with `template(task)=...` has an input value for the `template` _attribute_, which comes from the binded `tasks`. This automatically knows to iterates through `tasks` because it is in a `list` _view_.
- As I was playing around, I really liked the feel of `storage(key).add(value)` compared to my first thought of `storage.append(key, value)`. We can now keep the verbs limited and more simple and matching the style of other data structures like list and set.

I've spent more than enough time on this thought experiment for today. I will eventually return to this topic. And, if I hear feedback, then that will likely motivate me to think about this again sooner. ;) 

<!-- TODO: Fix link for analytics -->
Interested in learning more about this Anonsage language? [Click here](./dev)
