
# 4c-does_mdb_include_ts.md

Using `vite` to install MDB-React, and then switching over to Typescript.

**Note:** This seems like a long shot, but it would be nice if ....

# 0. Why

## 0.1. Running `npm install` Says ...

... `npm ERR! Found: typescript@5.0.4`

```
$ npm install
. . .
npm ERR! While resolving: react-scripts@5.0.1
npm ERR! Found: typescript@5.0.4
npm ERR! node_modules/typescript
npm ERR!   dev typescript@"^5.0.4" from the root project
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
. . .
```

## 0.2. Looking at `package*` Diffs ...

... looks like it just added typescript:

```
$ git diff f6b55a6b86146d3e3472df19dc93a2f0b07d1936 package.json*
diff --git a/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json b/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
index 698baa5..5859920 100644
--- a/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
+++ b/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
@@ -4,11 +4,11 @@
   "description": "template for mdb-react-ui-kit",
   "private": true,
   "dependencies": {
+    "mdb-react-ui-kit": "6.0.0",
     "react": "^18.1.0",
     "react-dom": "^18.1.0",
     "react-scripts": "5.0.1",
-    "web-vitals": "^2.1.4",
-    "mdb-react-ui-kit": "6.0.0"
+    "web-vitals": "^2.1.4"
   },
   "scripts": {
     "start": "react-scripts start",
@@ -33,5 +33,10 @@
       "last 1 firefox version",
       "last 1 safari version"
     ]
+  },
+  "devDependencies": {
+    "@types/react": "^18.2.6",
+    "@types/react-dom": "^18.2.4",
+    "typescript": "^5.0.4"
   }
 }
```

**I know it's a long shot, but I have to be sure!**

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
YOU ARE HERE
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# 1. Install MDB

Steps come from `4a-just_mdboostrap.md` in this directory.
For details, see that file.

## 1.1. Steps 1, 2, & 3

- [x] 1. Download `MDB5-REACT-UI-KIT-Free-6.0.0.zip`.
- [x] 2. Unzip download and and open in VSCode
- [x] 3. Install dependencies

```
pwd                                 # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure
mkdir 3-does_mdb_include_ts
cp 0-downloaded/MDB5-REACT-UI-KIT-Free-6.0.0.zip  3-does_mdb_include_ts
cd 3-does_mdb_include_ts
pwd                                 # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/3-does_mdb_include_ts
unzip MDB5-REACT-UI-KIT-Free-6.0.0.zip
npm install
```

**Note:** running `npm install` displays five warnings and "`6 high severity vulnerabilities`".

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

Skipping the install, because that screwed us up last time.

# 3. Configure TS

Steps come from subsection `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md` in this directory.
For details, see that file.

- Create `tsconfig.json` with contents as specified in `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md`
- Create `tsconfig.node.json` with contents as specified in `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md`

# 3.1. Checks

- VSCode looks good
- `npm run start` - App still runs ok

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



Steps come from subsection `2.3. Install Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md` in this directory.
For details, see that file.

## 2.1. Commands

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/2-mdb_and_ts
$ npm install typescript @types/react @types/react-dom --save-dev
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: mdb-react-template@6.0.0
npm WARN Found: typescript@5.0.4
npm WARN node_modules/typescript
npm WARN   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm WARN   node_modules/fork-ts-checker-webpack-plugin
npm WARN     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm WARN     node_modules/react-dev-utils
npm WARN   2 more (tsutils, the root project)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm WARN node_modules/react-scripts
npm WARN   react-scripts@"5.0.1" from the root project

up to date, audited 1436 packages in 19s

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

At first I thought maybe MDBoostrap includes TS ...

```
git diff package*  # ... but the package* files have been updated ...
```

... **and now things look to be totally broken!**

```
$ npm install
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: react-scripts@5.0.1
npm ERR! Found: typescript@5.0.4
npm ERR! node_modules/typescript
npm ERR!   dev typescript@"^5.0.4" from the root project
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
npm ERR!     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm ERR!     node_modules/react-dev-utils
npm ERR!       react-dev-utils@"^12.0.1" from react-scripts@5.0.1
npm ERR!       node_modules/react-scripts
npm ERR!         react-scripts@"5.0.1" from the root project
npm ERR!   1 more (tsutils)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm ERR! node_modules/react-scripts
npm ERR!   react-scripts@"5.0.1" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: typescript@4.9.5
npm ERR! node_modules/typescript
npm ERR!   peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm ERR!   node_modules/react-scripts
npm ERR!     react-scripts@"5.0.1" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /home/tomh/.npm/_logs/2023-05-21T20_27_23_963Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: /home/tomh/.npm/_logs/2023-05-21T20_27_23_963Z-debug-0.log
$
```

**Note:** the original procedure did *not* call for running `npm install` at this juncture, *but*
it seems to me that doing so and getting all these errors is indicative of a **serious issue.**

### 2.1.1. VSCode Check

- No TS problems, yet
- Adding `const greeting = 'Hi';` to `App.jsx` does *not* cause a lint problem in VSCode
  - Note that `npm run` does *not* include the option to run `lint`

### 2.1.2. Command-Line Check

App runs ok, but compiles with a warning:

```
$ npm run dev
Compiled with warnings.

Warning
(8:22769) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)
Module Warning (from ./node_modules/postcss-loader/dist/cjs.js):
Warning

(8:22769) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.

webpack compiled with 1 warning

$
```

# 3. Abandoning This Project

Although the app runs, **`npm install` is clearly totally broken,** so I am **abandoning this project,**
at least for now.

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Following notes saved for next time:
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

