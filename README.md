# Anonsage.com



## Features
- Preloading: Start loading the link when the user hovers over the link, rather than waiting for the click event. Feels much faster this way.
- Static site



## Usage

Add blog posts to 'content/'

Test locally: `npm run dev`

Export static site for server: `npm run export`

To start a production version of the app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

The [static/](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

### Server Worker
In the [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).



## Technology
- Svelte
- Sapper ([issue tracker](https://github.com/sveltejs/sapper/issues))
- Rollup
    - Provides: code-splitting, dynamic imports
- [GitHub Pages](https://pages.github.com/)

### Eventually
- `npm install -D @sveltejs/svelte-virtual-list` for lazy-loading lists. Only render what is visible. 



## Production mode and deployment
The app can be deployed to any environment that supports Node 10 or above. As an example, to deploy to [ZEIT Now](https://zeit.co/now) when using `sapper export`, run these commands:

```bash
npm install -g now
now
```
