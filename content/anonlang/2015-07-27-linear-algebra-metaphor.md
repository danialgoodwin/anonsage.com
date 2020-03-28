---
title: 'Thought: Linear Algebra Metaphor'
---
Randomly thinking about the possibility of if-conditions having square brackets and the block after it having square brackets, it seems like there could be some sort of transform or mapping going on.

I remember way back in my Linear Algebra days of matrices having square brackets and applying one to another. Also, when finding determinants, parts of the process can be parallel.

So, what if we could think over everything in Anonlang as a "matrix" and "transforms". For example,

```javascript
if [isEnable] [
    feature
]
```

would be like an multiplication identity matrix [1]*[something].

Though after writing this and further thought, matrix transforms seems like something more possibly fit for methods and each of them could return the regular matrix of zero or more items. For example,

```javascript
doSomething[x=3, y=5][
    x+y
    x-y
    x*y
    x/y
]
```

In this manner, it isn't exactly like matrices because the fields are labelled and applied wherever called.

...more thought needed
