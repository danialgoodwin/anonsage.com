---
title: Matrix Multiplication 2
---
After more review and thinking, the matrix multiplication "metaphor" isn't quite correct enough possibly.

Instead of a `[model] . [data]`, we may want to think of the [model] more as a type/alias that we can create instances of to fill the attributes.

So, it would possibly be more accurate to say `[data] :: [model]`, which indicates that the 'data' is of type 'model'.

Oh, and the main reason the matrix multiplication might not work as well as the above is because the matrix multiplication can have the different size of out.. for example a [3x2] . [2x3] would output a [3x3]?

Hmmm, actually now that I think about it a bit more while typing this, matrix multiplication could in fact be the right idea again. Well, at least require more thought before closing entirely. ;)

A list of 'model' attributes would be defined in a [1xN] and the list of data to match that would in a [Nx1] size matrix. Then, that should create a [1x1] ... hmm, nevermind for now. I need to relearn more linear algebra again.

Another thought.. perhaps a language shouldn't be based on linear algebra is it is going to be able to do more than that.
