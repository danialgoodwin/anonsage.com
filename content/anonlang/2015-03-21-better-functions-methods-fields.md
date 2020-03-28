---
title: Better Functions, Methods, and Fields
---
(For easier writing of this section, I will use refer to functions and methods as to just functions. (Abstraction for the win!))

Here's a thought: let's not have to write the boilerplate for every function (and method) and field that we want to create.

Here's a crazier thought: when writing code, let's not have to differentiate between whether we are writing a function or field.

We don't need to define whether something is a function or field. They both (optionally) return a value and have zero or more arguments (traditional fields are always zero arguments).

As an example, I will write the same (trivial) code in Java and "Anonlang" where the only difference is the one idea talked about in this section, meaning not the final ideal Anonlang. (And, I just threw in a "readable" modifier just so that we can experiment with that idea. Perhaps something more granular like unix file security model would be better? But, that's for a different section)

```javascript
class MyJavaClass {
    private int key;
    private String value;
    public boolean isSet;
    public MyJavaClass(int key, String value) { this.key = key; this.value = value; }
    public int getKey() { return key; }
    public String getValue() { return value; }
}

MyAnonlangClass(int key, String value) {
//MyAnonlangClass(readables) { // Random idea for no duplication.
    readable int key;
    readable String value;
    shared boolean isSet;
}
```

For this contrived example, to refactor Java to make `isSet` private, you must create a new method and change how all other objects interact with the class. The ideal refactoring would involve just changing the `shared boolean isSet` line to something like:

```javascript
shared boolean isSet {
    return key != 0 && value.isNotEmpty;
    //return key && value; // Random experimental idea because all objects have a natural "false" state that could be exploited.
}
```

Thus, not having to refactor anywhere else that was already pointing to the `isSet` field-now-method.

Pros:
- Changing implementation details without changing the public API (and without the boilerplate)
- Provide a way to encourage more lazy loading
- Write less code and more readable

Cons:
- At a quick glance in a regular text editor, you may not know if the attribute (aka function/field) should be read from or written to. Workaround: Basic tooling can prevent you from doing the wrong thing at edit-time.
- The program wouldn't know when something had to be just calculated once or every time. Fix: There could likely be a property attribute for that. Perhaps, even allow dynamic programming by default or calculating once per specified time-length. Or, maybe, even the compiler and/or runtime environment would be able to figure that out automatically and apply the proper operation (if not explicitly set by dev).

Designing the ideal language takes time and different perspectives. Feel free to input more ideas related to combining the functions and fields. What other pros and cons are there?

<small>ps - The "Anonlang" syntax shown is not the final one. For purposes of this section, it was just kept similar to the compared language so that more people would quickly understand it. These other syntax changes will be discussed in other sections.</small>
