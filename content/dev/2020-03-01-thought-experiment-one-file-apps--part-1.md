---
title: 'Thought Experiment: 1-File Apps (Part 1)'
tags:
- Thought Experiment
- Dev Design
---
Imagine a theoretical programming language that would allow us to easily create many different types of apps, each in a single file (without getting too long, as simple as possible, and no boilerplate code).

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
title = My App
description = Do awesome things and stuff
author = My Name
contact = myemail@example.com
---
<content here or 'Hello, World!'>
```

Now that we have that criteria listed, we can now simplify the list of needs...

What if the author or contact information changes? We don't want to have to manually update every single app that we have created. So, perhaps a centralized location would be nice. This could be hosted by the developer console of the platform (browser, OS, mobile, package manager, ...)

In fact, should we just remove all information that doesn't directly affect how users see and use the app? Once the app is downloaded, users need to be able to find the app by the title (at a minimum). The rest of the fields (description, author, contact) don't affect normal usage of the app. So, to simplify the overall view of our 1-file app:

```bash
title = My App
---
<content here>
```

We really shouldn't simplify the header anymore than this. Note: This thought experiment isn't taking internationalization into account, we might want to handle all of that in a different file anyways.

Now, about the app content. We need to show users **media** (text/images/video/audio) in a general **layout** with a default **color** theme defined by us developers. There's usually some **interactions** with the app, too. (Do we really have to define a color theme for users? That's a different discussion.) So, here's the basic one-file app layout now:

```bash
title = My App
---
<defined media>

<defined interactions>

<layout>

<color?>
```

We aren't going to stop here. So far, this could just be a regular HTML file, which can already be shown in just about all platforms. We are going to continue down this thought experiment to figure out what we _really_ want in a simple app definition. So, for fun and a sneak peak, let's create a simple app using pseudo code rather than HTML+JavaScript+CSS. Here's a potential idea for a simple converter app:

```bash
title = Temperature Converter
---
define:
fahrenheit = celsius * 1.8 + 32

show:
'Fahrenheit:' <input id=fah type=number bind=solve(fahrenheit, celsius=cel)>
'Celsius:' <input id=cel type=number bind=solve(celsius, fahrenheit=fah)>
```

Here's what that could look like at a minimum:

![Simple temperature converter app](../dev/2020-03-01-thought-experiment-one-file-apps--temperature-converter.png "Simple temperature converter app")

Note: We don't need to explicitly define `celsius` because computers can easily do that algebra for us. For the 'Simply Advanced Unit Converter' Android app I made a long time ago, it had the ability to solve equations. And, there are plenty of open source libraries that solve simple (and advanced) algebra equations.

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

Next, we are going to add an API call for remote data. And, to speed things up, we are also going to add local (or remote) storage, which can be used for user preferences or cache. Let's jump right in, then explain things later. The pseudo [code should be intuitive](./dev/2016-01-03-code-intuitiveness) enough.

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
set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type) then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()

show:
<checkbox text='Use remote storage?'
    on_check=set_user_storage_type(remote_storage)
    on_uncheck=set_user_storage_type(local_storage)>
<input hint='Add a task' on_key_enter=save_task(input.text) width=full>
<list bind=tasks template(task)=`<checkbox on_check=remove_task(task)> task`>
```

Here's what that could look like at a minimum:

![Simple TODO list with Material theme](../dev/2020-03-02-thought-experiment-one-file-apps--material-todo.png "Simple TODO list with Material theme")

We'll go line-by-line in Part 2. This article is getting long, and there are still a lot of thoughts in my head: [Thought Experiment: One-File Apps (Part 2)](./dev/2020-03-02-thought-experiment-one-file-apps--part-2) (Available now!)

<small>Update: I originally had the app's 'front matter' in the format of `title: My Title`, like how it is in YAML and for my blog's front matter. But, in order to have more consistency in the language, I decided to change the format to `title = My Title`. At least the pseudo code is consistent now. I just thought about turning all the `=` into `:`, but I'm not sure yet. Thoughts? Hmmm, maybe we keep using `=` for assignment, then `:` can be used for type declarations, if needed (it might be better without `:`).</small>
