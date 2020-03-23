---
title: New static blog site
---
Today, I feel really good on what I have accomplished.

After hearing about [Svelte](https://svelte.dev/) last week and reading more about it, I really like it's direction and UX. And, today I implemented my newest blog tech stack, which includes:

- Svelte
- Sapper: App framework, router, static (or dynamic) site, pre-fetching
- Markdown: Text-based content
- Rollup: Code-splitting, dynamic imports
- GitHub Pages: Hosting

I would describe Svelte as the next generation of Vue. They have similar styles in that components are all-inclusive: HTML, JavaScript, and CSS in one file for each component.

Here's a great overview of Svelte, including pros and cons: [github.com/feltcoop/why-svelte](https://github.com/feltcoop/why-svelte)

This is probably my 5th ish complete overhaul of my blog and wiki website. Over the years, I have slowly been getting more control of the site, and understanding more of the code that generates the site. So, no more 'magic' now.

Also, just to make sure I didn't want to do it all from scratch, I made a quick minimal static blog generator in Python. Just provide posts in markdown, and the script provides a nice static blog: [github.com/danialgoodwin/minimal--static-blog-generator](https://github.com/danialgoodwin/minimal--static-blog-generator)
