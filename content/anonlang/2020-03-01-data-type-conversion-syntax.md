---
title: Data Type Conversion Syntax
---
This should be a really short post. There's not many possible ways of casting data types, right? So, in no particular order:

- `str(42)`
- `42.toString()`
- `(String) 42`
- `42 as string`
- (implicit) `42`

We probably can't do much better than these ideas above. But, we _can_ think about which option is the most intuitive for new programmers, and which syntax would fit well with the rest of the language, and which syntax is open enough for many other conversion types (including custom classes)

### Re: `str(42)` 
The String type is the most commonly used data type, so it would make sense to simplify its usage. The 3-letter lower-case abbreviation is memorable enough after a few uses. Even though Python has `str()` as a built-in standard method, programmers can have the same syntax with overloaded constructors in their custom classes, i.e., `MyClass(...)`. Unfortunately, one way that the built-in syntax is different than the custom syntax is that the built-in syntaxes are all lower-case and the classes are all starting with upper-case. Also, is the 'str' abbreviation better than just having a 'text' data type instead of 'string' data type?

### Re: `42.toString()`
Languages using this syntax either can't use the same syntax to convert from built-in data types to custom data types (classes), OR they have the concept of extension methods, which I really like having. With this syntax, IDEs could easily have auto-complete and suggestion for all possible conversions by doing `.to<ctrl+space>`.

#### Re: `42.str`
This is a degenerative form of `42.toString()`.

I did consider a version of this syntax for a little bit, but when working on a few more examples later in this post, I figured this syntax wouldn't be as intuitive or obvious in some cases, for example: `day.seconds` would be ambiguous. It could mean getting the seconds out of the day rather than converting the full day to seconds. We would want to reserve this syntax for easily getting properties of an object rather than converting.

### Re: `(String) 42`
This option creates a brand new syntax just for casting. Instead of choosing this less intuitive route, let's see if we can re-use existing syntax to handle this data type conversion requirement. (Answer: Yes, we can)

### Re: `42 as string`
I kind of liked how this syntax read, including `42 to String`. But, since I just complained about creating a new syntax for casting in the previous section. I'll hold off on this one for now. 

### Re: (implicit) `42`
Personally, I prefer explicit syntax in order to avoid simple mistakes.


## Summary
Currently, my top two choices for data type casting is `.toString()` and the more 'English' version of that `to String`.

Now, let's just list a few more examples to see these two syntax in action:

```javascript
days as seconds
days to seconds
days.toSeconds()

hours as days
hours to days
hours.toDays()

km as m
km to m
km.toM()

number as integer as text
number to integer to text
number.toInteger().toText()

number to Integer to String to uppercase
number.toInteger().toString().toUpperCase()
```

From this little exercise, I realized that I like 'to' better than 'as' because a common conversion phrase in English is 'convert from _ to _'. Also, it just felt more comfortable (and faster) writing only text, compared to writing text and a period and two parentheses.

One downside to using the stand-alone 'to' may be for method chaining. The operator precedence is not immediately obvious in some cases. And, it's not immediately obvious to me which method I would have to update in order for the stand-alone 'to' syntax to work.
