---
title: Basic Syntax
---
Key syntax features:
- More flexible
- Less verbose
- Smarter

Here's an example that I recently used to hold data for my resume. It is similar to the popular JSON, but with less boilerplate.

```javascript
employer [
    company Simply Advanced, LLC [
        date-from January 2013
        date-to Present
    ]
    company University of South Florida, College of Engineering [
        date-from October 2012, date-to August 2013
    ]
    company US Army National Guard [
        date-from May 2007, date-to May 2015
    ]
]
education [
    school University of South Florida [
        major Computer Engineering
        degree Bachelor of Science
    ]
]
reference [
    [name email number relationship]
    [John Doe, john.doe@email.com, 4075551234, Project manager at Startup Co.]
    name Jane Dart [janedart@email.com, 3035551234, Professor at USF]
    insert [data/my-references.csv]
]
```

Notes:
- The labels should have no spaces. But, if you do want spaces, then just put single quote around the label.
- All the text after the label will be recognized as the label's values.
- You can use a comma to have multiple label-values per line. (If you want to use comma in a value, then just put single quote around the entire value)
- Or, you can define the set's labels and only write them once, as shown in the `reference` section.
- The default data structure for all is LinkedHashMap (guarantees insertion order).
