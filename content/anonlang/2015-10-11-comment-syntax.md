---
title: Comment Syntax
---
The current leading syntax for Anonlang comments is the use of `;;` for single-line comments and for multi-line comments to use `[;` and `;]`.

The semi-colon is in a highly prime location on the keyboard to be used for something that is used very often. 

Comments may not be something that is or should be used very often. Especially considering that the dash could still be used instead like in Haskell, which uses `--` for single-line comments and for multi-line comments use `[-` and `-]`. Still not really considering using slashes because those two different styles are still being saved for other language features.

One potential issue with the double-dash is that it looks like a decrement operator. Haskell doesn't don't have to worry about that issue because the functional language doesn't support that operation. Anonlang currently also doesn't support it, but it hasn't been ruled off the table. Though having both would be more tough to parse for compiler and perhaps for human readability.
