---
title: Implementation
---
Originally, I was thinking about making an adapter to convert between Anonlang to something like Java'a `LinkedHashMap`, which does seem to fix the scope of features that I'm looking for in an easy manner.

Another idea is to forgo the traditional data structure idea. I'm sure this has been subconscious in my mind for awhile. And, more of it still is. The basic idea is that the format as written would be the data structure and wouldn't need to be converted into anything else to be used directly. Though, since large paradigms are hard to break habit/thought, the old paradigm metaphor could be very roughly similar to that of a `String` (program as typed by dev) and it would be containing self-pointers/references to the other "String" parts it holds.

In this case, if Anonlang were considered more as a "markup" language, then it'd be more possible to avoid the initial pass-through and parsing of converting to the (possible) large LinkedHashMap (or similar). Things at first my be all lazy-loaded. If also doing lazy-(functional)-work, then possibly more cycles could be saved.

Sidenote: Every now and then, I may mention something that may seem to allude to "performance", but this isn't particularly the main concern for now. It might just be talked about at very high level, just noting that it wouldn't be performant (mainly when compared to a traditional language). There are many parts of this language that are ahead of its time. And, exact implementation details can be figured out latter and changed if necessary. At this time more focus is going into the overall architecture and larger goal-views.

Update: When re-visiting Google's cross-platform '[FlatBuffers](https://github.com/google/flatbuffers)', it seems that would be the similar style for 'parsing' this language also. It is some great and clever work.
