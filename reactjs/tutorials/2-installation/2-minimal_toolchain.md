
# 2-minimal_toolchain.md

How to get started by installing a minimal toolchain.

# References

- React docs [Start a New React Project](https://beta.reactjs.org/learn/start-a-new-react-project)
  - Choosing the *Getting started with a minimal toolchain* adventure
    - This shows how to use `create-react-app`
- My new *Road to React* e-book
  - The book shows how to use `create-react-app`
  - The book also uses vite, which I don't want to get into right now

## More About `create-react-app`

References to maybe check out later:

- [`create-react-app` home page](https://create-react-app.dev/)
- [`create-react-app` Getting Started page](https://create-react-app.dev/docs/getting-started/)

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

## Extra Credit: `README.md` file

The idea to take a closer look at the `my-first-app` directory comes from my *Road to React* book.

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/my-first-app
$ ls -l
-rw-r--r--   1 tomh tomh   3359 Feb 22 16:51 README.md
drwxr-xr-x 823 tomh tomh  32768 Feb 22 17:04 node_modules
-rw-r--r--   1 tomh tomh 671802 Feb 22 16:52 package-lock.json
-rw-r--r--   1 tomh tomh    815 Feb 22 16:52 package.json
drwxr-xr-x   2 tomh tomh   4096 Feb 22 16:51 public
drwxr-xr-x   2 tomh tomh   4096 Feb 22 17:07 src
$
```

Note that running `npm create-react-app my-first-app` added a `README.md` file.

I repeat: **I did not add this file,** npm did!

It contains some notes about various `npm` commands that I can run.

## Extra Credit: `npm` commands

The idea to run these "extra credit" `npm` commands comes from my *Road to React* book.

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/my-first-app
$ ls -l
-rw-r--r--   1 tomh tomh   3359 Feb 22 16:51 README.md
drwxr-xr-x 823 tomh tomh  32768 Feb 22 17:04 node_modules
-rw-r--r--   1 tomh tomh 671802 Feb 22 16:52 package-lock.json
-rw-r--r--   1 tomh tomh    815 Feb 22 16:52 package.json
drwxr-xr-x   2 tomh tomh   4096 Feb 22 16:51 public
drwxr-xr-x   2 tomh tomh   4096 Feb 22 17:07 src
$
```

Note that the *"before"* listing above *does not* contain a `build` directory.

```
$ npm run build

> my-first-app@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  46.65 kB  build/static/js/main.021ecfac.js
  1.78 kB   build/static/js/787.b0e29ad6.chunk.js
  541 B     build/static/css/main.073c9b0a.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

 $ ls -l
total 716
-rw-r--r--   1 tomh tomh   3359 Feb 22 16:51 README.md
drwxr-xr-x   3 tomh tomh   4096 Feb 23 15:14 build               # Newly created
drwxr-xr-x 823 tomh tomh  32768 Feb 22 17:04 node_modules
-rw-r--r--   1 tomh tomh 671802 Feb 22 16:52 package-lock.json
-rw-r--r--   1 tomh tomh    815 Feb 22 16:52 package.json
drwxr-xr-x   2 tomh tomh   4096 Feb 22 16:51 public
drwxr-xr-x   2 tomh tomh   4096 Feb 22 17:07 src
$
```

Note that the *"after"* listing above *does* contain a `build` directory.

And btw, the book claims this command creates a "*dist/* folder".
No doubt these things change quickly!

## Extra Credit: Previewing the Production-Ready Build???

The `README.md` file, and the output of `npm build` above, mention that this command
creates a production-ready build in the `build` directory

I'm not ready to deploy it yet, but will give previewing it a try:

```
$ npm run preview
npm ERR! Missing script: "preview"
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/tomh/.npm/_logs/2023-02-23T22_41_49_530Z-debug-0.log
 $ npm run dev
npm ERR! Missing script: "dev"
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/tomh/.npm/_logs/2023-02-23T22_54_19_315Z-debug-0.log
$
```

Yikes!  These two commands, which I got from the book, don't work!!
Maybe they are a Vite thing??

```
$ npm start
$
```

At least `npm start` works, so that's cool.

