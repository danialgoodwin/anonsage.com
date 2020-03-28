---
title: 'Thought Experiment: 1-File Apps (Part 3)'
draft: true
tags:
- Thought Experiment
- Language Design
---
_You should read [Thought Experiment: One-File Apps (Part 1)](./dev/2020-03-01-thought-experiment-one-file-apps--part-1) so that you know what this article is about._



## Example: Hacker News

```javascript
title = My News Feed
---
define:
api = url('')
posts = api('posts')

post_title(post, i) = '{i}. ' <link text=post.title url=post.url>
comments_link(post) = <link text=f'{post.comments.size} comments' url=post.comments.url>
author_link(post) = <link text=post.author url=post.author.url>

list_item(post, i) = <column
  post_title(post, i)
  comments_link(post) ' by ' author_link(post) ' on {post.date}'
>

show:
<list bind=posts template(post, i)=list_item >


<list(posts) template(post, i)=  # Use `list(posts)` instead of `list bind=posts` because bind is done so often with list that we can save text
  <column(width=full)
    '{i}. ' <link text=post.title url=post.url>
    comments_link(post) ' by ' author_link(post) ' on {post.date}'
  >
>

<link text='Top' url=#top>
```


<!-- TODO: Fix link for analytics -->
Interested in learning more about this Anonsage language? [Click here](./dev)
