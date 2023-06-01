
# 1-react-getting_started-npm.md

Try using the *"NPM"* process on
[MDB's React - Getting Started page](https://mdbootstrap.com/docs/react/getting-started/installation/#section-npm).

Figuring out how to get vite, mdbootstrap, React and Typescript, and ideally ESLint all installed and working nicely.

# 1. Project Directory

The project directory for these notes is `mdbootstrap/projects/1-react-getting_started-npm`.

# 2. Process

## 2.1. Prerequisites - Start With `create-react-app`

The process mentions that they are using [yarn](https://yarnpkg.com/).

### 2.1.1. Commands and Output

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
$ npx create-react-app 1-react-getting_started-npm

Creating a new React app in /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/1-react-getting_started-npm.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1434 packages in 1m

234 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 62 packages, and changed 1 package in 14s

234 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1496 packages in 9s

234 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created 1-react-getting_started-npm at /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/1-react-getting_started-npm
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

  cd 1-react-getting_started-npm
  npm start

Happy hacking!
$ cd 1-react-getting_started-npm
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/1-react-getting_started-npm
$ npm start
Compiled successfully!

You can now view 1-react-getting_started-npm in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.1.113:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
$
```

### 2.1.2. VSCode Check

Everything looks ok!


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You Are Here
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

## 2.2. MDB installation

### 2.2.1. Step 1 - Setup MDB, Install Font Awesome, `import` CSS files, Roboto font

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/1-react-getting_started-npm
$ mdb init
$ npm install
$
```

### 1.1.1. Step 1

**VSCode Check:** Everything looks ok!

### 1.1.1. What `mdb5-free-...` Contains 


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You Are Here
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Saving the following notes for next time:
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


### 1.1.1. VSCode Check

All files colored in Green; "No problems have been detected in the workspace"; restarted VSCode to be sure!

## 1.2. Steps 4 & 5

- [x] 4. Run the application
- [x] Explore docs

```
npm run         # we can start, test, build, or eject
npm run start   # it runs ok, but is quite slow to load...
```

**VSCode Check:** Looking good!

**Note:** Checked current version of project into github.

# 2. Install TS

Steps come from subsection `2.3. Install Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md` in this directory.
For details, see that file.

## 2.1. Commands

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/2-mdb_and_ts
$ npm install typescript @types/react @types/react-dom --save-dev
$
```

At first I thought maybe MDBoostrap includes TS ...

```
git diff package*  # ... but the package* files have been updated ...
```

... **and now things look to be totally broken!**

```
$ npm install
$
```

**Note:** the original procedure did *not* call for running `npm install` at this juncture, *but*
it seems to me that doing so and getting all these errors is indicative of a **serious issue.**

### 2.1.1. VSCode Check

- No TS problems, yet
- Adding `const greeting = 'Hi';` to `App.jsx` does *not* cause a lint problem in VSCode
  - Note that `npm run` does *not* include the option to run `lint`

### 2.1.2. Command-Line Check


## 2.2. Configure Typescript

### 2.2.1. Create `tsconfig.json` and `tsconfig.node.json`

### 2.2.2. VSCode Checks


#### 2.2.2.2. Lint Still Works

- Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem in VSCode, as expected

### 2.2.3. Command-Line Checks

- `npm run lint`
  - Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem on the command line with `npm run lint`, as expected
- `npm run dev`
  - App still runs ok


## 2.3. Rename `*.jsx` Files and Edit `index.html`

### 2.3.1. Rename `*.jsx` files to `*.tsx`

```
git mv App.jsx App.tsx
git mv main.jsx main.tsx
```

### 2.3.2. Edit `index.html`

Using VSCode to change `main.jsx` to `main.tsx` in `index.html`.

### 2.3.3. VSCode Check

- The renaming caused 4 problems in VSCode
- Editing `index.html` fixed one of these


