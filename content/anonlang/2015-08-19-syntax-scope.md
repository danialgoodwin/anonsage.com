---
title: 'Syntax: Scope'
---
Challenge: Make simpler scoping rules that are still both human and computer parse-able.

I'm not saying that the current 'traditional' style is bad or hard. I'm quite used to it. But, we can at least try to think of possible alternatives.

Though experiment: Is it possible to only use square brackets in a language and not have to use either the curly brace or parenthesis?

Here's just a few possible ideas for the above thought experiment:

'traditional':

```javascript
function myFunctionName (int aInt, String aString) { /* Do something in scope with arguments */ }

while (i < length) { /* Do something */ }
```

Semantically same (for theoretical language):

```javascript
[`int aInt, String aString` [; Do something in scope with argument;] ]

[`i < length` [; Do something ;] :]
```

Hmm, this challenge may have been too easy. We may just have to look at Lisp to see everything being done with parenthesis. It seems that I may have stumbled upon some same ideas that original Lisp creators had. On that note, same with functional elements, like in Haskell. And, this is all still being attempted to have ideas from scratch with reasons for each step of the way other than 'other languages do it, so I should too'.

One difference with Lisp for this theoretical language is that Lisp has the function name inside the 'scope'. For Anonlang, items declared within scopes would only be available within that scope, so the function name would have to be on the outside. Also, 'function name' would just be an 'alias' for the 'named' scope.. to use terms that might be more 'technical' in the language.



Random thought now: Every scope is a for-loop in disguise? Ex: [`int i = 0; i < length; i++` [; Do something ;] ]

Then, parts of the 'for-loop' could just be left out when wanting to do other things. Leaving out last two 'for-loop-argument` seems like it could create the function being called one with an (optional) parameter. It seems that there are no differences between a regular no-arg function and for-loop that is only ran through once... This could quite possibly simplify Anonlang code...
