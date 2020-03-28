---
title: How to create and publish a NPM package
tags:
- npm
- JavaScript
---
Assuming that you already have `npm` installed, then creating and publishing a new npm package is really easy and fast. Keep in mind that these are the minimum recommended steps, and I'll provide more resources at the bottom for more configuration options and deeper dives.

The first section show how to publish the npm package, then the second section shows how to use it in another JavaScript project.



## How to Publish
1. (Recommended, optional) Create a new remote git repo with a README.md file
    - The benefit of having the remote repo already setup is to allow the npm setup to be smarter, filling out more git-related fields automatically.
2. Create a local project directory:
    - If you have the remote repo, then run: `git clone <my-repo-url>`
    - If you don't want a remote repo, then run: `mkdir <my-project-name>`
3. Setup the npm project:
    1. Run: `cd <my-project-name> && npm init`
    2. Follow the interactive steps until the package.json file is created. At least add a name and email.
4. Create 'index.js' and add the following content as an example:

   ```javascript
    const utils = {
      isOdd (num) {
        return num % 2 === 1
      },
      sayHello () {
        console.log('Hello, World!')
      }
    }
    
    module.exports = utils
    ```

5. Create '.gitignore' and add the following content ('npm pack' in the next step uses this file):

    ```gitignore
    *.tgz
    .idea/
    node_modules/
    ```

6. (Optional) Ensure that the correct files will be uploaded for the npm package:
    1. Run: `npm pack`
    2. Check the output of the 'Tarball Contents' sections
7. Publish your new npm package: :)
    1. Run: `npm publish`
    2. Ensure that there is no error. If you have a package name that is already taken, then there will be an error and you'll have to update the 'name' in 'package.json'
8. (Optional) To see your package in the npm registry, run: `npm home <my-package-name>`



## How to Use
1. (Optional) Create a new npm project:
    1. Run: `mkdir <my-new-project-name> && cd <my-new-project-name> && npm init -y`
        - Note: The `-y` means accept all the default values
2. In your new project, install your new npm package (use the package name from the above section)
    1. Run: `npm install --save <my-npm-package-name>`
        - Sidenote: An equivalent command is 'npm i -S <my-npm-package-name>'
3. Create 'index.js' and add the following content as an example (and replace <my-npm-package-name> below):

    ```javascript
    const utils = require('<my-npm-package-name>')
    utils.sayHello()
    console.log(utils.idOdd(1))
    console.log(utils.idOdd(2))
    ```

4. Run your project: `node index.js`

    ```text
    // Output
    Hello, World!
    true
    false
    ```

Congrats on creating your new npm package! :)



## Helpful Resources
- Great: https://zellwk.com/blog/publish-to-npm/
    - https://zellwk.com/blog/publishing-npm-packages-that-can-be-used-in-browsers-and-node/
- Great: https://webpack.js.org/guides/author-libraries/
- Great: https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c
    - Includes great additions for automating the build and publish process
