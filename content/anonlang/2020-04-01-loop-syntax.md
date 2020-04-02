---
title: Loop Syntax
---


For the longest time, I was just planning on renaming 'for' loops and 'while' loops to just `loop` with `in` and pretty much calling it done.

Another feature that I knew I wanted to have was to make it simple for double-loops, for example: `loop i, j in row, col`. This was easy enough to do and the syntax expanded nicely into triple-loops and more (not that it would often be used).

Today, as I was exploring more use cases, I wanted to loop the results from transforming the first loop, for example: converting CSV to double-quoted CSV. A simple typical example would be similar to:

```python
csv = ''
loop row in csv.split('\n'):
    loop element in row.split(','):
        # Do somthing
```
<small>Side idea: `split()` for multi-line could default by new line. If single line, then default to spaces. But, I suppose that could be confusing and unexpected.</small>

But, I wanted better, and I couldn't directly use the double-loop syntax, `loop i, j in a1, a2`. I thought of various ways to accomplish this goal, maybe `loop csv as line, line.split()` or `loop csv to line to split()`. None of those looked right. Though, I finally found my favorite syntax to use:

```python
csv.loop().split(',').join('","', '"', '"')
csv.split('\n').split(',').join('","', '"', '"')
```

Pros:
- Simple
- Straight to the point
- Reads in a single direction, left-to-right, without jumping around
- No unnecessary temporary (explicit) variables
- Can be procedural or generative or parallel for each step (think Python generators, Java Collections Streams, or other map-reduce)

But, unfortunately, this exact syntax can be a little ambiguous in other use cases. For example, what if we wanted to add a word to the end of each CSV line or just append a new line at the end of the list? Both of those use cases would look like `csv.loop().add('...')`. So, we need to have a keyword that means something similar to 'for-each-element'. Unfortunately, neither 'foreach()' or 'loop()' or 'iterate()' or 'elements()' sound exactly right to me, for now. Maybe 'loop()' would be used the same way as Java's 'stream()' or another language's 'map()'. So, to remove ambiguity from above, we could do a slight change to:

```python
csv.split('\n').loop().split(',').join(...).join('\n')
csv.split('\n').foreach().split(',').join(...).join('\n')
```

That's all for now until I do more background research on other languages and how they handle streaming and mapping.
