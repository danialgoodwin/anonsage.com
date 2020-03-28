---
title: Zero-Based Arrays vs One-Based Arrays
---
In an effort to question all assumptions about programming languages, I'm surprised that it's taken me this long to think about array numbering. How should the first index be accessed?

Those new to programming would access the first element in a list with '1', because that it the natural counting for pointing to the first 'thing'.

Those that have been programming for awhile tend to say that using '0' is most natural.

I've talked to multiple people and read through a few different forums to be sure of this case. Unfortunately, the way most of the 'pro-0-based' people talk about it, they have big holes in their 'reasons'. I'd be happy to discuss any of the specific pro-0-based reasons and their flaws. Though, at this time I'm not going to make a list of them and how the reasons are mis-guided because it doesn't seem worth my time now. And, as far as I know, the pro-1-based side only has one argument -- that it is most natural to think that way and that's how people would think before knowing implementation details of compilers.

**There is a big misconception that both sides have: They are not using the same meaning of 'index'.**

'C'-languages have an 'index' for their arrays, but what they really mean is 'offset'. It is the offset of the array reference that simplifies some array operations.

When people mention a one-based index, they are choosing to not worry about the implementation details of pointers and references.

Note: Cutting this post short due to time. I will maybe revisit later. Currently, haven't decided one way or another. Here's more topics to read before posting more:
- http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
- https://en.wikipedia.org/wiki/Zero-based_numbering

