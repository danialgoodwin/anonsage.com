---
title: 'Syntax: Comments 2'
---
This is an extension of the previous post "Syntax: Comments". In that previous post the final thought was using `;;;` to mark the beginning and end of a multi-line comment.

The major drawback of that is not being able to tell by looking at one in which direction the comment is.

So, to alleviate that issue, here's another proposed idea: use `[;` to begin a multi-line comment and us `;]` to end a multi-line comment.

The reasoning to use the square brackets is because they are already being used to define blocks/scopes of code, this is just another "special" block of code.

Let's try a few examples:

**Before:**

```javascript
;;; This data holds the keys to the
multi-line universe. ;;;
myData [
    ;;; First, Last, Address, Job ;;;
    John, Smith, 123 Main, Programmer
    Jane, Doe, 456 East, Engineer
]
```

**Now:**

```javascript
[; This data holds the keys to the
multi-line universe. ;]
myData [
    [; First, Last, Address, Job ;]
    John, Smith, 123 Main, Programmer
    Jane, Doe, 456 East, Engineer
]
```

The triple-semi-colon does seem easier to type, but that might not be worth the price of needed more tooling to see where the comment really is without checking the entire file.
