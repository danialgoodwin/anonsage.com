---
title: Syntax Update
---
In a programming language, is it possible to get away with having no keywords?

There are two main syntax ideas that I'm thinking about. One way would involve implicit strings in many places and the other would require the single-quote surrounding strings. The other question for this syntax design is.. should the equals sign be made more explicit?

From a previous post about syntax, it was clear to see where the strings were because it is easy to make a requirement that variable names must not have spaces in them. 

One of the likely requirements may likely be that all white-space can be removed and the program will still be valid, thus the reason for explicit semi-colons instead of using new-line as a token-break. 

Maybe all equals signs can be optional also? But, I'd rather not have both options available so that more code will look similar. So, no equals signs anywhere!?!? But, that rule would contradict with the white-space-not-needed rule.. so, always require equals sign where it would change program if white-space were removed. Hmm, sounds good for now.

With the above questions still out in the open, here's an explicit example for how to have fewer characters in a data structure markup in Anonlang:

```javascript
labelCategory [
    label1(id, name, food) [
        1, A Name, fish;
        2, Another, pizza;
        3, Boise, watermelon;
    ]
    label2(id, name, ingredientA, ingredientB, ingredientC=none) [
        1, popsicle, water, heat extractor;
        2, popcorn, unpopcorn, heat;
        3, pop, water, sugar, bubbles;
    ]
]
```

The above certainly fits in the aforementioned potential rules/requirements, but one drawback is that it doesn't allow the direct support for CSV because of the semi-colon. One idea could be to have a "meta-params" option:

```javascript
label1(id, name, food)(format=csv) [
    1, A Name, fish
    2, Another, pizza
    3, Boise, watermelon
]
```

Hmmm, then that requires a keyword. So, another idea could be to have a `.format[csv]` after the map, but developers don't read the bottom first. So, the keyword idea is still a better choice so far.

It seems great to be able to back-support other formats neat in code. And, adapters for each type can be built easily enough. Maybe we could also allow the tooling to automatically code-generate between formats to put there also.

Hmm, meta programming constructs could quickly get messy also. May be best to have automatic converters built-in. Though, a nice meta feature would be being able to specify the tradeoffs wanted in an algorithm -- less space or less time.

If no meta, then maybe a format could be like:

```javascript
label1 = csv[
    id, name, food
    1, A Name, fish
    2, Another, pizza
    3, Boise, watermelon
]
```

Hmm, many considerations. I've got time.
