---
title: String Concatenation with String Variables
---
Here's some current different styles of string interpolation in a few mainstream languages, in no particular order:

```javascript
String string1 = "Hello, " + name + "!";
String string2 = printf("Hello, %s!", name);
string3 = "Hello, #{name}!"
$string4 = "Hello, " . $name . "!";
```

So, what would it look like if we removed all boilerplate? Maybe something like:

```javascript
my_string Hello name!
```

Now, let's add things back in that help code readability and maintainability. Starting with possibly the least objectionable addition:

```javascript
string20 = Hello name!
```

Now we can see a clear delineation between group(s). The equals sign adds a little redundancy, which would help tools know exactly what's supposed to be equivalent, and would find the error if you accidentally put a space in the variable name.

There should be some way for the reader of the code to know what part of that line is a variable and what's constant. In addition to what the other shown languages do, here's a few more ideas:
- Use an IDE to color/highlight the variables. There would otherwise be no change from above.
- Provide an uncommon symbol to mark a variable. Ex: string21 = Hello ;name;!
- Separate the variable part from constant part. Ex: string22 = Hello ;;!, name
- Just a slightly less verbose of a mainstream language. Ex: string23 = "Hello, " name "!"
- Here's a slightly more verbose idea to replace equivalent words with the variable. Ex: string24 = "Hello, name!" replaceFor name
- more?

The ideal choice, of course, could just be personal preference, especially for those that have a bias for their favorite language. So, one possible way to get around that bias is to have some non-programmers come up with ways to distinguish between constants and variables and putting them together.

Another note about readability. We should be able to agree that reading a single line once (linearly) is faster than reading a single line twice or having to jump around. Though, `printf()` (and `string22` and `string24`) does have it's uses when it's needed.

Also, if multiple versions are just as readable, then we could focus on the ease of writing. One thing to possibly strive for is to minimize how often the shift key has to be used, thus minimizing overall keystrokes by quite a bit.

As much as `string20` would be nice, unfortunately, an IDE may not always be available. (Though, in the future, proper syntax highlighting could be available everywhere). And, instead of marking something as a variable, we would eventually run into having to mark something as not a variable. So, that adds back in the keystrokes and other issues.

So, what's left now is a class of common concatenation that looks like string31 = Hello ;name;! or string32 = 'Hello, ' name '!'.

For each additional variable added, both require a minimum two more keystokes. Here's a more complicated example to see how both would look with more variables.

```javascript
string41 = First name: ;firstname;\nLast name: ;lastname;\nEmail: ;email;\nNumber: ;number;
string42 = 'First name: `firstname`\nLast name: `lastname`\nEmail: `email`\nNumber: `number
```

My conclusion from just typing those two lines is that the first was actually a pleasure to write. For the second one, I had to keep double-checking the spacing to make sure the proper part was quoted. Go ahead in any text editor and try typing those lines in any language. It'll take less than minute, so quickly try it now before continuing.

Another benefit of `string41` is that the semi-colon is at a natural finger position (at least for standard English keyboards).


Before stating that `string41` is the best style of all. We also have to consider what if the developer want to show the symbols as literals. Meaning, what if we need to show a semi-colon or quote-mark in the string. The two standard ways are either escaping with a backslash (\; and \') or doubling of the character (;; and ''). Choosing either would affect every language in mostly the same way, so that discussion will be saved for another time.

The next time you have to concatenate strings with string variables, for the sake of a quick experiment try using the semi-colon method as shown for `string41`. That's not the only nice syntax you're missing out on.

Let's see about another use case that might come for concatenating multiple string variables back-to-back. So, here's a few quick examples of how that could look:

```javascript
string51 = Email: ;firstname;;middleinitial;;lastname;@;domain;;tld;
string52 = 'Email: ' firstname middleinitial lastname '@' domain tld
string53 = 'Email: ' + firstname + middleinitial + lastname + '@' + domain + tld
string54 = Email: ;firstname middleinitial lastname;@;domain tld;
```

Another common use case for long strings is how should the line wrap-around be handled. Some languages take everything literally, some try to take a smart guess at what the developer means, and some will put an entire line wrap-around to mean one space, regardless of the number of spaces. This is perhaps where the slightly more verbose way of marking the string is better than marking the variable. For example, in `string51`, if we wanted to put a random space before "Email", then just putting an extra space may not be clear. We would probably have to do something like `string51 = ;; Email: ...` to make sure to the reader that a space was wanted. The same could go for line wraps:

```javascript
// Letters and spaces between pairs of semi-colon are only translated to variables. The rest are string.
string61 = Lorem ipsum dolor sit amet, consectetur;
                 ; adipiscing elit. Pellentesque vestibulum,;
                 ; lectus vel accumsan aliquam.
// Only letters between pair of single-quotes are recognized for the string.
string62 = 'Lorem ipsum dolor sit amet, consectetur'
                 ' adipiscing elit. Pellentesque vestibulum,'
                 ' lectus vel accumsan aliquam.'
```

Those two above show literal translations. It would also be nice if we didn't have to add any markup for a particularly long section of text. Some languages allow this, though there is typically a beginning marker and an ending marker, or using common formatting indent for all of the string.

```javascript
// For this, since string is interpreted by default, may not need the triple semicolon. Everything would be a string until another statement starting the same place as the initial variable.
string63 = ;;;Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Pellentesque vestibulum,
                 lectus vel accumsan aliquam.;;;
string64 = '''Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Pellentesque vestibulum,
                 lectus vel accumsan aliquam.'''
```

To end this section, note that all the symbols on a standard keyboard were considered. Those that required an extra shift keystroke were then unconsidered. Also, symbols that were used more often were dis-considered. Then, it came to a matter of which was the easiest to type. ;) The follow-ups were the colon, backtick, single-quote, dash, slash, square bracket. (Sidenote: If semi-colons were used to end statements, then maybe a different variable symbol would be considered.)

More related things to discuss in depth would be:
- string concatenation with non-string variables
- how to show symbols as literals in strings
- how to format strings
- should statement endings be signified or not
