
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

## 2.2. MDB installation

### 2.2.1. Step 1 - Setup MDB, Install Font Awesome, `import` CSS files, Roboto font

#### 2.2.1.1. Setup MDB

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/1-react-getting_started-npm
$ npm i mdb-react-ui-kit

added 6 packages, and audited 1502 packages in 12s

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

#### 2.2.1.2. Install Font Awesome

```
$ npm i @fortawesome/fontawesome-free

added 1 package, and audited 1503 packages in 12s

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

#### 2.2.1.3. `import` CSS files

Adding these lines to `index.js`, before it imports `App.js`:

```
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
```

#### 2.2.1.4. Roboto font

Adding this line between the `<head>` and `</head>` tags in `public/index.html`:

```
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
```

Adding these lines to the top of `src/index.css`:

```
body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
```

### 2.2.2. Step 2 - Launch App

```
npm start
```

### 2.2.3. VSCode Check

Everything looks ok!

# 3. Assessment

- Looks like a regular React app
- Seeing eslint in `package.json` and `package-lock.json`
- Seeing typescript in `package-lock.json`

## 3.1. Relevant Files

These are files that I *might* want to change when writing my app:

- `public/index.html`
- `src/App.css`
- `src/App.js`
- `src/index.css`
- `src/index.js`

I could be wrong, but it seems like sometimes I don't see all of these....

### 3.1.1. What, No `.jsx` Files?

Why are there no `.jsx` files?

## 3.2. Sanity Checks

- [x] Edit `src/App.js` to say "Hi"
- [x] Test Linting
  - Add this line to `src/App.js`:
    -`const test_linting = 'Test Linting';`
  - [x] Check for warning in VSCode
  - [x] Check for warning in terminal running `npm start`

