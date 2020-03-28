---
title: 'Pattern: MVC'
---
One possibly important aspect will be to easily support the MVC (Model-View-Controller). In this post, I don't need to talk about MVP and MVVM because they are similar enough to be supported the same way.

The question I have is.. is it possible to set up everything so that the final binding of code could look like the following?

```javascript
[controller] * [view] * [model]
```

For some trivial examples with simple data and labels, something very similar to this is already being worked on. It definitely brings a way to have source-data brought to function, in the manner of `[function] * [data]`. Hmm, that does seem oddly familiar to a "traditional" function call like `function (data) {}`, where the data being passed in is abstracted from the function.

So, separation of concerns between model and data seems easy enough. First define a model, `[car]`, then create some data, `[car-data]`. Then, to "add"/"load" the data into the model, it could be like `[car] * [car-data]`, just kinda like linear algebra. Another, possibly easier, way to think about this as the [car] model to be just attribute name (maybe even column names for a table), and each [car-data] data to be assigning a value for each of the attributes (like adding a row of data to a column).

Then, similarly might be done with binding a model to a view.. perhaps (the syntax made up on-the-stop), `[view] <=> [model]`. Would that be smart enough to have binding both ways without circular dependency? Certainly, naive code could create circular dependencies. Though, we would want to minimize the accidental chance of that happening.

Hmm, a thought.. a "controller" really is just an "adapter".. It allows "models" to be "coerced" into "views"...

Is it just so that the model and view don't have a dependency on each other?

Yes. The MVC pattern isn't just three files that talk directly to each other. Proper abstraction/encapsulation between different codes requires interfaces/adapters so that implementation details can be changed without affecting the API (internal or external), thus simplifying refactorings.

(Sidenote: That's only because it's more work to edit same/similar in multiple files. To fight that issue directly, would it be possible to have all the code in the same place instead, thus eliminating the need for extra layers of abstraction? The 'view' can be the 'model'?)

So, back on track, for a solid MVC pattern, the Controller is like the abstraction layer between Model and View for simple projects. As a project grows and needs different views for the same models, an abstraction layer would be added between C and V. Then, as more Models are needed, an abstraction layer would be added between M and C. This is all in an effort to have more (and easier) code reuse. As each part of a M or V get more complicated, more (smaller scope) abstractions are added within the M or V or C. Turtles all the way down.

So, again, a really important point to consider and think through more is... how can we simplify code architecture to not need the many layers of abstraction. I believe it is possible, and it will require a paradigm shift in the way or our thinking.

More later.
