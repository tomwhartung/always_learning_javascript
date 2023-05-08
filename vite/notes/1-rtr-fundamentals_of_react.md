
# 1-rtr-fundamentals_of_react.md

Notes from the section *Setting up a React Project* in the chapter *Fundamentals of React* in the *Road to React* e-book.

# 1. Setting up a React Project

There are two ways:

1. Choose an online [template](https://vitejs.dev/guide/#trying-vite-online)
   - Points to using vite on stackblitz [here](https://vite.new/)
   - That page includes a link to the react-ts template [here](https://vite.new/react-ts)
2. Install everything on your local machine

I am going with #2.

# 2. Setting up `vite` + `react`

Following are the comands I am running to *install everything on my local machine:*

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite
$ mkdir projects
$ mkdir projects/1-rtr-fundamentals_of_react
$ cd  projects/1-rtr-fundamentals_of_react
$ npm -v
9.5.1
$ sudo npm install -g npm@latest
[sudo] password for tomh:

removed 1 package, and changed 51 packages in 7s

18 packages are looking for funding
  run `npm fund` for details
tomh@jane: /var/www/always_learning/always_learning_javascript/vite/projects/1-rtr-fundamentals_of_react
$ npm -v
9.6.5
$ npm create vite@latest hacker-stories -- --template react
Need to install the following packages:
  create-vite@4.3.1
Ok to proceed? (y) y

Scaffolding project in /var/www/always_learning/always_learning_javascript/vite/projects/1-rtr-fundamentals_of_react/hacker-stories...

Done. Now run:

  cd hacker-stories
  npm install
  npm run dev
$ cd hacker-stories
$ npm install

added 240 packages, and audited 241 packages in 17s

81 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run dev
  VITE v4.3.3  ready in 1043 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[h]
  Shortcuts
  press r to restart the server
  press u to show server url
  press o to open in browser
  press c to clear console
  press q to quit
[q]
$
```

The installed "Hello world" version runs ok.

These are the commands I ran to check in the relevant files:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ cp ../../reactjs/projects/.gitignore .
$ git add .gitignore
$ git commit -m 'Adding a .gitignore file in the vite/projects/ directory.'
[master 3887f09] Adding a .gitignore file in the vite/projects/ directory.
 1 file changed, 38 insertions(+)
 create mode 100644 vite/projects/.gitignore
$ git add 1-rtr-fundamentals_of_react/
$ git commit -m 'Adding the relevant files created for the hacker-stories project in the Road to React book into the vite/projects/ directory.'
[master 1f48933] Adding the relevant files created for the hacker-stories project in the Road to React book into the vite/projects/ directory.
 12 files changed, 3661 insertions(+)
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/.eslintrc.cjs
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/.gitignore
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/index.html
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package-lock.json
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/public/vite.svg
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.css
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/assets/react.svg
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/index.css
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/main.jsx
 create mode 100644 vite/projects/1-rtr-fundamentals_of_react/hacker-stories/vite.config.js
$
```

The *Road to React* book discusses many of these *"source files"* in the *Project Structure* section of the *Fundamentals of React* chapter.

# 3. Project Structure

Following is an annotated list of the key files and directories in a vite + reactjs project (*):

- `package.json`: lists third-party dependencies
  - Specifies the commands you can run using `npm`
    - See subsection *"3.1. `npm` Scripts"* below
  - Determines the contents of the `node_modules/` directory
- `package-lock.json`: lists the packages used in this project, their versions and dependencies, where they reside and how to find them, etc.
  - Currently massive at 3418 lines
  - **WE WILL NOT BE EDITING THIS FILE**
- `node_modules/`: contains all the node packages used by and installed for this project
  - Currently contains 5933 files and uses 69 M of disk
  - **WE WILL NOT BE TOUCHING THIS DIRECTORY**
- `.gitignore`: identifies which files are *not* source files and should *not* be checked into github
  - E.g., because `package.json` determines what is in `node_modules/`, there is *no need* to check the files in `node_modules/` into github
- `vite.config.js`: specifies that we are using react
- `public/`: stores static assets used by the development server
- `index.html`: the base, *"driver"* file that links to where to find all the code for the page

(*) These annotations are courtesy of the *Project Structure* section of the *Fundamentals of React* chapter of *Road to React.*

## 3.1. `npm` Scripts

Following is the code defining the `scripts` property in `package.json`:

```javascript
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
},
```

The following commands show how, in the `hacker-stories` project, you can
use `npm run` to run each of these `scripts`

```
npm run dev
npm run build
npm run lint
npm run preview
```

Following is a brief explanation of each of these commands;

- `dev`: runs a development version the app so you can see it in a browser
- `lint`: identifies subtle issues with and concerns in the code for the project
  - For more information, see the subsection *"3.2. Linting with ESLint"* below
- `build`: builds an optimized version of the app intended for use in production
- `preview`: runs the version of the app built by the `build` command so you can preview it in a browser
  - Ideally this should exactly match the `dev`elopment version

# 4. Linting with ESLint

Like all JS linters, [ESLint](https://eslint.org/) identifies potential problems in JS code.

- ESLint also allows enforcement of developers` own personal set of coding standards

## 4.1. Fixing Potential Issues

Following is the output of `lint`ing the installed version of our `hacker-stories` project:

```
$ npm run lint

> hacker-stories@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


/var/www/always_learning/always_learning_javascript/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
  12:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  15:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.

$
```

After looking up [`rel="noreferrer"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noreferrer)
and learning that adding it to each of the referenced anchor `<a ...>` tags is totally reasonable,
fixing these issues in `App.jsx` is easy enough:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ git diff 1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
diff --git a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
index b8b8473..b46dfcf 100644
--- a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
+++ b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/src/App.jsx
@@ -9,10 +9,10 @@ function App() {
   return (
     <>
       <div>
-        <a href="https://vitejs.dev" target="_blank">
+        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
-        <a href="https://react.dev" target="_blank">
+        <a href="https://react.dev" target="_blank" rel="noreferrer">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
$
```

Following is the output from running `lint` on the updated version of the code:

```
$ npm run lint

> hacker-stories@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0

$
```

## 4.2. Working With ESLint

Our use of the `lint` command was productive, but the *Road to React* book offers more on this subject.

### 4.2.1. Installing the ESLint Plugin

Per the book's suggestion, I ran this command:

```
$ npm install vite-plugin-eslint --save-dev

added 8 packages, and audited 249 packages in 5s

82 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$
```

This updated the project's `package.json` and `package-lock.json` files, but did not change the output of the linter.

Following are the changes the command made to `package.json`:

```
$ git diff vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json
diff --git a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json
index 3b21c41..8ecbad7 100644
--- a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json
+++ b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/package.json
@@ -21,6 +21,7 @@
     "eslint-plugin-react": "^7.32.2",
     "eslint-plugin-react-hooks": "^4.6.0",
     "eslint-plugin-react-refresh": "^0.3.4",
-    "vite": "^4.3.2"
+    "vite": "^4.3.2",
+    "vite-plugin-eslint": "^1.8.1"
   }
 }
$
```

### 4.2.2. Integrating the ESLint Plugin

Next we add the plugin to `vite.config.js` to integrate it into the project:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/1-rtr-fundamentals_of_react/hacker-stories
$ git diff vite.config.js
diff --git a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/vite.config.js b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/vite.config.js
index 5a33944..373cba9 100644
--- a/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/vite.config.js
+++ b/vite/projects/1-rtr-fundamentals_of_react/hacker-stories/vite.config.js
@@ -1,7 +1,8 @@
 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'
+import eslint from 'vite-plugin-eslint'

 // https://vitejs.dev/config/
 export default defineConfig({
-  plugins: [react()],
+  plugins: [react(), eslint()],
 })
```

### 4.2.3. Installing a Standard ESLint Configuration File

Next we add a standard ESLint configuration file for a React project:

```
$ npm install eslint-config-react-app --save-dev

added 209 packages, and audited 458 packages in 28s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$
```

Unsurprisingly I suppose, this updated the project's `package.json` and `package-lock.json` files again.

The *"Road to React"* book also recommends installing a .eslintrc file with the following contents:

```
{
  "extends": [
    "react-app"
  ]
}
```

On the other hand, the ESLint documentation for
[ESLint configuration files](https://eslint.org/docs/latest/use/configure/configuration-files#using-configuration-files)
recommends using a `.eslintrc.json` (or `.eslintrc.cjs` or `.eslintrc.yaml` etc.) file,

And looking in the directory, I can see there is already a `.eslintrc.cjs` file:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/1-rtr-fundamentals_of_react/hacker-stories
$ cat .eslintrc.cjs
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
$
```

This looks to be more complete than the `.eslintrc` file recommended by the book, so I am going to just stick with that.


# 5. Other Important Files in the `hacker-stories` directory

Following are some other important *source* files discussed in this section:

- `src/App.jsx`: Contains React components
  - May want to split this up later
- `src/main.jsx`: Entry point for React
  - Connects the base file, `index.html`, with the main source of React components, `src/App.jsx`
    - Referenced in `index.html`
    - References `src/App.jsx`
- `src/index.css`: Styles for the overall application
- `src/App.css`: Styles for the React components


# 6. `hacker-stories` and `.gitignore` files

Noting that the `hacker-stories` directory has its own `.gitignore` file, I wondered how different it might be from the one I copied into
the `projects` directory from `../../reactjs/projects`.

- It turns out they are quite different indeed:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ diff .gitignore 1-rtr-fundamentals_of_react/hacker-stories/.gitignore
1c1,9
< .DS_STORE
---
> # Logs
> logs
> *.log
> npm-debug.log*
> yarn-debug.log*
> yarn-error.log*
> pnpm-debug.log*
> lerna-debug.log*
>
3,25c11,13
< scripts/flow/*/.flowconfig
< .flowconfig
< *~
< *.pyc
< .grunt
< _SpecRunner.html
< __benchmarks__
< build/
< remote-repo/
< coverage/
< .module-cache
< fixtures/dom/public/react-dom.js
< fixtures/dom/public/react.js
< test/the-files-to-test.generated.js
< *.log*
< chrome-user-data
< *.sublime-project
< *.sublime-workspace
< .idea
< *.iml
< .vscode
< *.swp
< *.swo
---
> dist
> dist-ssr
> *.local
27,38c15,24
< packages/react-devtools-core/dist
< packages/react-devtools-extensions/chrome/build
< packages/react-devtools-extensions/chrome/*.crx
< packages/react-devtools-extensions/chrome/*.pem
< packages/react-devtools-extensions/firefox/build
< packages/react-devtools-extensions/firefox/*.xpi
< packages/react-devtools-extensions/firefox/*.pem
< packages/react-devtools-extensions/shared/build
< packages/react-devtools-extensions/.tempUserDataDir
< packages/react-devtools-inline/dist
< packages/react-devtools-shell/dist
< packages/react-devtools-timeline/dist
---
> # Editor directories and files
> .vscode/*
> !.vscode/extensions.json
> .idea
> .DS_Store
> *.suo
> *.ntvs*
> *.njsproj
> *.sln
> *.sw?
$
```

Not really studying these, I am thinking that the idea of a *"source file"* might be a little different
in vite....

