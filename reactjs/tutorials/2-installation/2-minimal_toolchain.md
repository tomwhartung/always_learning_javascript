
# 2-minimal_toolchain.md

How to get started by installing a minimal toolchain.

# References

- React docs [Start a New React Project](https://beta.reactjs.org/learn/start-a-new-react-project)
  - Choosing the *Getting started with a minimal toolchain* adventure
    - This shows how to use `create-react-app`
- My new *Road to React* e-book
  - The book shows how to use `create-react-app`
  - The book also uses vite, which I don't want to get into right now

# Actual Steps Taken

## Using `create-react-app`

### Caveat

Quote from [Start a New React Project](https://beta.reactjs.org/learn/start-a-new-react-project):

> Because Create React App can’t take advantage of the server, it doesn’t provide the best performance.
> If you’re looking for faster loading times and built-in features like routing and server-side logic,
> we recommend using a framework instead.

### Commands run

Seeing commands similar to these over and over again, so let's go:

```
$ npx create-react-app my-first-app
npx: installed 67 in 12.394s
You are running Node 10.19.0.
Create React App requires Node 14 or higher.
Please update your version of Node.
$
```

Ooops, trouble right away!
Yikes, the current version of node is 19.7.0, and I'm running 10.19.0 !!

### Updating Node.js

For steps taken, see the file `2a-minimal_toolchain-update_node_to_lts_version.md` in this directory.

### Trying `create-react` Again

```
$ npx create-react-app my-first-app
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in /var/www/always_learning/always_learning_javascript/reactjs/projects/my-first-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1416 packages in 1m

231 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 62 packages in 11s

231 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1478 packages in 7s

231 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created my-first-app at /var/www/always_learning/always_learning_javascript/reactjs/projects/my-first-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-first-app
  npm start

Happy hacking!
npm notice
npm notice New patch version of npm available! 9.5.0 -> 9.5.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.5.1
npm notice Run npm install -g npm@9.5.1 to update!
npm notice
$
```

Ok, that looks more like success!

**Note:** check out those warnings etc. someday.
Right now we're literally just getting started!

```
$ cd my-first-app
$ npm start
Compiled successfully!

You can now view my-first-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.1.113:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

$
```

It magically opened `http://localhost:3000/` in a new tab in chrome automatically!
Wow!  ;-)

Edited `src/App.js` and added ye olde "Hello World!", so we are good to go!!

