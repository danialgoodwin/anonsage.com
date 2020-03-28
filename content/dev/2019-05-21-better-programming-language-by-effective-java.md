---
title: Better programming language by Effective Java
tags:
- Java
- Kotlin
- Language Design
---
Programming language patterns and idioms come about because of limitations and weaknesses in the programming language.

For example, the book 'Effective Java' by Joshua Bloch has 'Item 36. Consistently use the Override annotation'. I completely agree with this for Java. In fact, it should be an error without it. The Kotlin programming language requires their `override` keyword in cases of methods being overwritten. Thus, any 'Effective Kotlin' book would not have this Item 36.

So, I got to thinking... what other Effective Java items could be made obsolete with a better programming language? (I just happen to use Kotlin as an example for most of these)

#### Item 2: Consider a builder when faced with many constructor parameters
The reason the Builder pattern should be used in Java is because when we want to provide optional parameters, then the telescoping constructors become very verbose. And, the Builder pattern allows for a fluent API with an immutable class.

In Kotlin, these reasons are overcome with the constructor using keywords that define each parameter as mutable (using `var`) or immutable (using `val`). The fluent API can be done with named parameters. And, optional parameters are done by providing a default value in the constructor.

#### Item 3: Enforce the singleton pattern with a private constructor or an enum type
While Kotlin could use either of these ways for the singleton pattern, an alternative convenience keyword is `object`. This keyword replaces `class` and ensures the class is a singleton.

#### Item 4: Enforce non-instantiability with a private constructor
A Java class without any instances is likely a utility class. The Kotlin way is to replace utility classes with extension functions, and no class needed.

#### Item 6: Eliminate obsolete object references
Here's a non-Kotlin example.

In apps with a lifecycle (I'll be talking about Android specifically here), it is common to have listeners and services added in an onStart() method and removed in an onStop() method.

Android's newest way to help prevent memory leaks and handle the explicit removal of object references is their `LiveData` class. Listeners/observers will be automatically removed as appropriate in the app lifecycle (in onStop()).

#### Item 8: Obey the general contract when overriding equals
Or, for POJOs, use Kotlin's `data class` that will automatically create the correct equals(...) method.

#### Item 9: Always override hashCode when you override equals
Or, for POJOs, use Kotlin's `data class` that will automatically create the correct hashCode() method.

#### Item 14: In public classes, use accessor methods, not public fields
I like how Ceylon and Kotlin handle fields, i.e. their ability to change how the getter and setter of the field works. So, accessor methods aren't needed as much for encapsulation because the fields also provide encapsulation.

#### Item 18: Prefer interfaces to abstract classes
In Java, what's the difference between interfaces and abstract classes? Both now provide optional/default methods. So, the only thing left is that abstract classes can have non-static fields and interfaces allow for multiple inheritance. But, using an abstract class doesn't prevent multiple inheritance of interfaces. So, the real difference is just the ability for non-static fields.

I'm not sure why we need both abstract classes and interfaces. We could add the ability for interfaces (or something like it) to have non-static fields. Or, we could add the ability for multiple inheritance to classes (or something like it). We would not allow the edge case of the "diamond problem" from multiple inheritance; it would be a compile-time issue if the shared method (or field) wasn't overwritten.

Or, maybe there is a good reason to have this distinction that I don't know about.

---

And, now I'm out of time. It was fun to think about and there are plenty of other idioms and patterns that could be made obsolete with a better programming language. Question everything, and have a reason for each choice that is made.

In whatever language you create, keep all of the reasons for each choice documented so that others can easily question each of those reasons and build off of that. :p
