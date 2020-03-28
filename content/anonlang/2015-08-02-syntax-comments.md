---
title: 'Syntax: Comments'
---
Originally, I was thinking to just reuse the typical `//` and `/*` with `*/` that are already used by many languages. It would have been a mistake to not at least take an attempt to analyze why and come up with reasons. Of course there are other comment syntax options available and some are already in use like `#` and `;` and `@`.

For the purposes of this language, it is not an acceptable reason to just say 'because other languages do it'.

First of all, to make Anonlang a simple language to type I want to not use `#` and `/**/` and such because they require the use of the shift-key. I will try to design as much of the language as possible without requiring the use of shift for the language syntax.

So, that still leaves the popular `//` as a choice and the pinky finger is pretty much already there. Are there any other keys that are closer and also a potential suit?

The closet available non-letter keys [without using shift] are `/` and `, ` and `.` and `;` and `'`.

Of these, the semi-colon seems make the most probable sense to visually separate code from comments, as it is already being considered in the language to be ending code already.

Current thoughts on how comments will be in Anonlang:

- Use double semi-colon `;;` for  a single line comment.
- Use triple semi-colon `;;;` for multi-line comment. One `;;;` to start and another `;;;` to end. (This ignores `;;`)
- Using just one semi-colon for comment would mean that multiple code statements couldn't go on the same line, and I'm not ready for that kind of code limitation yet, even though some languages do work like that.
- Eventually allow quadruple semi-colon `;;;;` to mark larger code comments that ignore `;;;`? Likely not in v1. Oh, but maybe it can be used to define a markup language for documentation? Hmm, maybe. Another idea is still to only have one language that does that code, comments, layouts, data, and markup.. so that less has to be learned overall. Then, again, people have different preferences and don't always want to limit them.

Example usage:

```javascript
;;; This is line one of a comment
line two
line three. Whitespace doesn't really matter here.
;;;

;; This is a comment.
print Hello, World;; Doubled semi-colon makes this a comment.
```

Hmm, now that I actually see the double-semi-colon in action, it could sometimes possibly be seen as an accident. Another question to consider.. is that enough of a visual cue without syntax highlighting?

--

<small>Insightful readers will notice that I didn't include the square brackets as possible comment syntax. My main thought originally was they are already being used. But, as I thought about it more, that same reason could be why they might possibly be reused. Hmmm, perhaps for the time when adding meta-data should be included in the code, then a different comment syntax for when comments should be hidden from anybody outside? That could possibly get complex and hard to remember in the beginning. And, if "meta-data" should be included with the code, then it probably actually isn't a comment. Since the square brackets are being used for "real" code, at this time I'm leaning towards having the different syntax for "non-code".</small>
