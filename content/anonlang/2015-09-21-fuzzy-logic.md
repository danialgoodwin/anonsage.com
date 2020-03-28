---
title: Fuzzy Logic
---
Fuzzy Logic is another use-case to be good at by design. Then, a degenerate case it is also good at it boolean and ternary logic.

Perhaps some implementation detail would be something like the following:

```javascript
alias truthiness byte [
    alias always-true 0xFF
    alias always-false 0x00
    valid-value range 0x00..0xFF
    value [ default 0x00 ]
]
```

(Sidenote: 'Truthiness' is a word defined from the Stephen Colbert show. Perhaps not a final keyword for Anonlang.)

Naive person: 128 different values should be more than enough range for good-enough fuzziness.

Currently, I'm one of those naive people for this. But, I imagine the future will have more things better defined, and where safety and decimal places are very important may want to have more room to play in, like for airplanes. So, implementation would actually be a `byte-group` with default size of one byte.

One possible complication for this would be a variable 'always-true' value. So, one possible way to prevent that complication would be to have a fixed byte-group size (perhaps, per alias). Another possible idea is to not define a 'always-true' and 'always-false' because other fuzzy rules should automatically handle those cases anyways.

Sudden thought: 'Fuzzy Logic' programming languages are creations of DSL for declarative form.

Another possible way to fix the potential issue of defined fuzzy keywords is to make sure that translated values are always between '0' and '1'. This would only be for when needing to multiply against other numbers to get a result for a situation. Since backed by a byte-group, the value would have to be equivalent to regular value divided by max value with all bytes set to one. Then, definitions of 'false' and 'true' wouldn't change.
