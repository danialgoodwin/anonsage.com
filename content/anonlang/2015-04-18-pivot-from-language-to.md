---
title: 'Pivot: From Language to ...'
---
For this project, I wanted to focus on what I thought where could be the most improvements. So, this project was originally about spending time thinking about what I would want in a productive programming language. For the first step of this process, I did not do a global search of programming language or even how to build one because without doing that I would have more freedom to think outside the box without knowing what was "right", "wrong", "easy", or "hard".

After the first stage of coming up with wanted features, I started to look into new languages that also wanted the same things. From what I found, none fit exactly, but there were three really close ones: Haxe, Ceylon, and Groovy.

The biggest feature that I like in all three is the ability to have the main code and data models in the same language, and the syntax for the language strongly supports it. Also, these three languages could be used client-side and server-side easily. This avoids any hassles of converting code between different languages and makes the learning process easier for new developers.

Before I get to talking a little more about the main languages I liked, here's a quick shout-out for a few languages that I also liked:
- "D" language seems to be going really good as a replacement for C/C++. Retains lots of the low-level features while adding productive higher-level features. Facebook seems to be the biggest company testing it.
- "Groovy" language I thought at first was just a simple scripting language useful for building DSL and build tools, but then I saw a great tech talk into the many more features of it.
- "Malbolge" language was designed to be almost impossible to write code for. Each command is self-modifying the code and memory. It took a few years to write a "Hello World" program (and a computer had to write it).

The greatest thing about Haxe is the ability to write code in one language and have it be converted/used with many other languages. I felt this was a great feature because it allows an easier adoption without breaking legacy tools, then I also imagined that the future could involve more tools/programs that used Haxe directly without having to convert to other languages. But, that's there the language starts to break down for me. It's own language features are quite lacking, likely because of the support for the conversion to many languages. Most of the specific languages features I was looking for was not found.

Currently, I see Ceylon as the best language going forward for the next decade. The team over at Red Hat designing the language has really been re-thinking a lot for why we have to do certain things in code. I especially enjoy their language design thought process that explains why they made all the changes. And, they also agree that great tooling should be a part of the language.

So far it seems that the only main difference between the language I was designing from scratch and Ceylon is that they use the traditional curly braces `{}` to denote code blocks and scope, whereas I chose use square brackets `[]` because they are easier to type.

Designing an entirely new language with just this one feature change is not worth it at this time. My development time and thoughts can now go to more potentially useful areas that will benefit more. For example, since I currently think Ceylon is the new language we should move to, I should create some useful programs and guides for it so that more people may want to use it sooner.

The purpose of a programming language is to get the ideas of the developer into a format that the computer can understand. I believe that the languages will get closer to natural speaking/written language over time, which is something I'll probably keep in mind to randomly come up with new ideas for that. I'm sure there are other people already working on this on this "natural" language idea. Though, I hope they aren't trying to just model it after we read the currently mainstream languages.

The field of mathematics used to all be sentence, then only once they got to creating more symbols for words/things/ideas, then they were able to progress even faster, with people able to understand/read more efficiently with the symbols. So, going back to words that just replaces symbols would be backward progress. What we need is ways to organize thoughts/ideas at a higher level, which does not mean just any type of words.

For example, this is too wordy for code: "For each item in itemList, do action on item." That kind of thinking is lazy and stems from all our time reading other code. We will progress in bigger steps by thinking what would a non-developer think about this? For example, the same sentence from before could just as accurately be "Do action on each item in itemList". But, a bigger step in progress would be to think why do we want to do that action to each item? To get a sum of the values? Then, why do we want that? To compare the changes between itemParent? Then, why do we want that? To figure out if we should do A or B? When we ask "why?", we learn the real reasons for doing something. That way, we we can be at the most abstract level when using a human language with with computer.

In the future, either humans will think like computers, or computers will think like humans. (Maybe a bit of a stretch to be absolute, but an interesting idea anyways.)

So, imagine being able to type any goal/problem into the computer and the computer able to find the best strategy/algorithm to get the answer, that's 5GLs (including GGP). Currently, these are working for domain specific sets problems, but with time, we should be able to increase the size of the domains. To increase my knowledge in this area, I'm developing a GGP that will compete in some local and world tournaments against other GGP.

...all this just to make developers' lives easier, which in turn makes the entire world easier. ;)
