---
title: Exploring Possible Visibility Modifier for the Ideal Language to the Extreme
---
The current popular visibility modifiers are `private`, `private-package`, `protected`, and `public`.

What's wrong? What's right? What can be done better? Are there better names to use that would help the understanding of new programmers? Why do they all start with "p"? What's the right default?

One thing to note is that when you are reading or working with others' code, you want to know for sure if the developer meant to create that public API or was it just because it was the system default (and may be removed in the future). So, the default visibility should be as limiting as possible.

The use-cases for the current popular visibility modifiers seem to be good, right? It seemed to worked for the past few decades. But, before getting to that, let's quickly mention the extremes for the visibility modifiers.

Everything "private" or not shared from a Class? Probably not good for large projects. This means only one class would ever be available because two different classes wouldn't be able to communicate with each other. And, classes are nice to have to organize code into more manageable abstractions.

Everything "public" or globally accessible in a Class? This would complicate refactoring. A common reason to "hide" certain code from public API is so that the implementation details can change without the API user having to worry about it.

What if we had to individually define the visibility for every single other class in our project? If not that, then what about for all packages? Perhaps define the visibility for all users or API implementers? Maybe at a level for "end-dev-user" and "framework-dev"?

Still more to write...

This is mainly a deep dive into even the most "trivial" things. We have time to make sure we understand everything, the reasons for them, and to explore new possibilities.
