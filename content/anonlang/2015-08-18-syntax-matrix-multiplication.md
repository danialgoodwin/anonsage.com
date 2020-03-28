---
title: 'Syntax: Matrix Multiplication'
---
In previous posts, when I mentioned "linear algebra" and "applying" one scope to another, I always should the syntax as `[one-thing] * [another]`. While that particular 'multiplication sign' may have some inherent meaning, another idea occurred that should at least be considered.

What about the 'dot operator'?

In linear algebra and other higher-ish level of mathematics, the dot operator is used to show multiplication (when a symbol is needed to disambiguate). So, would it be possible to use the syntax of '[one-thing] . [another]`?

That reason, and because it doesn't require the shift-key are the two main reasons that brought me here to think about it more...

What is the 'dot operator' currently used for?

In some languages, it is a (numerical) decimal separator (or grouping separator). More importantly it is typically used to access member attributes of an object or class. And, in some languages, it is used as a String append (as opposed to a plus sign). In mathematics, it could be multiplication or "dot product" or sometimes projections and sets.

(Sidenote: I'm really curious why that is (the different append operator). So, looks like [some great](https://stackoverflow.com/questions/1866098/why-a-full-stop-and-not-a-plus-symbol-for-string-concatenation-in-php) [SO answers](https://stackoverflow.com/questions/4266799/why-is-the-php-string-concatenation-operator-a-dot). I will do a non-bias breakdown comparison later. It seems many people have been biases and pre-conditioned towards how "+" works from first languages. Feel free to remind me that I haven't done this non-bias multi-perspective report yet. Update: Here's a quick idea: we can get rid of the problem entirely with String concats.)

Continuing past the specific operator implementation detail, basically, we can try to think of a way to blur the lines more between code and data, placeholders and values, and more. This will likely tie in more with the 
["Pattern: MVP" article](./anonlang/2015-08-18-pattern-mvc).
