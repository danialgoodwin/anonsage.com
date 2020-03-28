---
title: 'Syntax: Scope'
---
Anonlang scopes (also called blocks) are identified by square brackets. Scopes can be named by putting a label in front of the scope.

Originally, the idea was that the scope could just be labelled by doing something like `my-label [ [;my scope code here;] ]` in order to not have to write an equal sign or colon. But, this could get ambiguous and confusing with scopes being "applied" to another named scope. So, to make it easier to read for users and easier to write the language an equal sign will be required to label a scope:

```javascript
my-label=[
    [; my scope code here;]
]
```

This frees up more opportunities for scopes to be "applied" to each other, for example `code-scope convert-scope` would convert the code-scope as defined by the convert-scope.

Sidenote: Is it possible to have no "variables".. and to only have "labels" in their place that don't change? This seems to be like pure functional languages, like Haskell. I do like the idea how Haskell code is executed lazily. Haskell doesn't have loops that need a variable to change values, instead it depends on recursion and changing scope. Something to think about more is what the easiest way to make recursion look like a familiar loop..

Sidenote: Officially, "variables"/"labels" might be called "aliases".

Next, need to come up with a differentiating syntax for "assignment" and "copy-assignment" (maybe). In the above example using a single equals sign is the classic assignment operator. As far as I know, languages that allow cascading assignment operators (e.g., `label-a=label-b=label-c=100`) will assign the same pointer/reference so that all the variables would be pointing to the same single object. But, what if you would want to create three copies of the same object? You would have to do a copy or clone method? Immutable languages wouldn't have to worry about this problem because object don't change. Mutable languages copy information a lot to help simplify concurrency, basically trying to emulate a immutable language where the object doesn't change.

Oh, and I subconsciously named my labels with a dash.. which I actually do pretty much everywhere, like file naming and GitHub repo name. So, my bias is to allow dashes in variable names, but before that happens, need to think more about the consequences of the minus sign not being able to go next to a label without a space. And, Anonlang is trying to make sure that whitespace doesn't matter at all.
