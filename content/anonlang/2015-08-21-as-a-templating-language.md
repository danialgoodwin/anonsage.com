---
title: As a templating language
---
In order for Anonlang to have more of the ability to replace anything easily, there must be some templating language aspect to it.

Currently, the only templating language that I know off that top of my head is 'Liquid', which I have used for my Jekyll/Ruby blog. So, I'll eventually have to learn more of then to see if there are already some great standards and ideas out there.

Liquid template system defines a replaceable block as `{% Do something here %}`, which allows for Ruby code within a markup language.

One proposed idea for Anonlang templates is the double bracket `[[ D something here ]]` because that doesn't seem to be used yet and can possibly clearly stand out. Something not fully thought of yet is how it will interact with brackets for non-templates, perhaps the first double will start and leave alone all the next opening ones until the double-closing-brackets. Possible fallbacks of this particular syntax include making sure that a scope within a scope aren't recognized as a template. Currently defined rules haven't ruled out the possibility of an unnamed scope as the first item in another scope. And, that means same would go for a triple-bracket syntax for Anonlang templates and unnamed-scope within unnamed-scope within scope.

Before introducing another idea, first a little tangent for other 'defined rules' for Anonlang:
- Use of [ Do something here ] for regular/any scope
- Use of [' Do something here '] for a string scope
- Use of [\` Do something here \`] for a code scope
- Use of [; Do something here ;] for a comment scope

So, would it be possible to have another 'simple' typed scope that kinda makes sense?

For a non-biased person, is there a symbol that could easily mean 'insert' or 'replace' or 'template'?

One idea based on that thought is that putting a specific letter/word right after the opening scope character to define what it is for, then another benefit would be a lot more options, and users possibly being able to define their own options also (though maybe not if it would get too confusing). For example: `[i insert mode i]`, or maybe even double bracket if necessary to distinguish easier at a glance.

As for possible symbols to use with the opening bracket to define the type, still (non-shift) available are forward-slash, back-slash, comma, dash, equals, and period. Now, just a quick visual glance for how it may look:

<pre>
[-    -]
[=    =]
[\    \]
[/    /]
[.    .]
[,    ,]
</pre>

Hmmm, one fallback of these is that they are starting to get further away from the home keys and more awkward to press. Perhaps spending some more time with Vim will provide more thoughts about staying on home row. Though, to narrow down the current options based on efficiency, the equals-sign, comma, and period seem to be the more fluid to type. Equals could be good for meaning 'replace' and 'assignment' of the scope. One fallback may be too many equals signs all around? More experiments in writing code in this regard are needed.
