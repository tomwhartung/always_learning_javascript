
# 3a-ts_eslint_react-1-react_eslint_ts.md

This is the first experiment our quest to *find the best process* to use for building *"the whole shebang."*

# 1. Questions and Answers

- Does installing TS break ESLint?
  - **YES**
- Will the suggested `npm install ...` command fix the VSCode problems?
  - **NO,**
  - If `npm i[nstall] @types/node` is the "suggested command" then this is not demonstrated until the next project
    - See *"2.6. Try Installing `@types/node`"* in 3b-ts_eslint_react-2-react_ts_no_eslint.md in this directory
  - If `npm i[nstall] @types/node` is *not* the "suggested command" then I'm not sure what prompted this question ;-D
- Will the change the `import`s to `require`s fix work?
  - **NO,** and unfortunately it **breaks the app**

# 2. Process

These commands come from `2-rtr-typescript_in_react.md`.

- Sometimes we do things a little differently, though

## 2.1. Start With React

```
pwd                        # /var/www/always_learning/always_learning_javascript/vite/projects
mkdir 3-ts_eslint_react-find_the_best_process
cd 3-ts_eslint_react-find_the_best_process
npm create vite@latest ts_eslint_react-1-react_eslint_ts -- --template react
cd ts_eslint_react-1-react_eslint_ts
npm install
npm run dev
```

**Note:** running lint at this point works ok:

```
$ npm run lint

> ts_eslint_react-1-react_eslint_ts@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.jsx
  12:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  15:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.

$
```

## 2.2. Add the New Project to VSCode

- No problems so far.

**Note:** Lint runs in VSCode even without installing ESLint.

## 2.3. Add ESLint

```
pwd                                               # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts
npm install vite-plugin-eslint --save-dev         # From RTR: install vite-plugin-eslint
                                                  # NEW - kinda sorta...
npm install eslint --save-dev                     # From RTR but missed previously; see "4.1.1.3.2. Solutions Tried" in 2a-rtr-typescript_in_react-troubleshooting.md
                                                  # Might be an unneeded step: "up to date, audited 249 packages in 3s"
npm install eslint-config-react-app --save-dev    # From RTR: install eslint-config-react-app
npm run dev                                       # make sure it still runs ok
cat .eslintrc.cjs                                 # ensure it's there and makes sense
npm run lint                                      # make sure it still finds our two lint issues
```

Check the new project's files in to github:

```
pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/
git commit -m 'Adding new experimental project files in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/ .'
```

### 2.3.1. VSCode Check

- The two lint problems now show up in VSCode and on the command line with `npm run lint`

## 2.4. Install Typescript

```
npm install typescript @types/react @types/react-dom --save-dev    # Claims: "up to date, audited 458 packages in 5s" BUT ...
git diff package*                                                  # ... package* files now include typescript ....
git add package*
git commit -m 'Adding the package* files in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts because they now reference TS.'
```

### 2.4.1. VSCode Check

- The two lint problems continue to show up in VSCode and on the command line with `npm run lint`
- No TS problems, yet

## 2.5. Configure Typescript

Create the two TS config files `tsconfig.json` and `tsconfig.node.json` with the following contents:

```
pwd         # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts
cat > tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
cat > tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

```
pwd                      # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.*
git commit -m 'Adding config files for TS: vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.* .'
```

### 2.5.1. VSCode Check

- The two lint problems continue to show up in VSCode and on the command line with `npm run lint`
- No TS problems, yet

## 2.6. Rename `*.jsx` Files

Use `F2` to rename files in VSCode:

- `App.jsx` -> `App.tsx`
- `main.jsx` -> `main.tsx`

### 2.6.1. VSCode Check

This caused 4 problems in VSCode.

#### 2.6.1.1. Two "Cannot find module ..." Problems

We have seen these before, and have two ways to fix them:

- "Cannot find module './assets/react.svg' or its corresponding type declarations.",
- "Cannot find module '/vite.svg' or its corresponding type declarations.",

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module './assets/react.svg' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 23,
	"endLineNumber": 2,
	"endColumn": 43
},{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '/vite.svg' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 3,
	"startColumn": 22,
	"endLineNumber": 3,
	"endColumn": 33
}]
```

**Not worrying about these right now,** because we know two ways to fix them.

#### 2.6.1.2. The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem

We have seen this before, and can fix it:

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.tsx",
	"owner": "typescript",
	"code": "2345",
	"severity": 8,
	"message": "Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.\n  Type 'null' is not assignable to type 'Element | DocumentFragment'.",
	"source": "ts",
	"startLineNumber": 6,
	"startColumn": 21,
	"endLineNumber": 6,
	"endColumn": 52
}]
```

**Not worrying about this right now,** because we know how to fix this.

#### 2.6.1.3. A New "No inputs were found in config file ..." Problem

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.node.json",
	"owner": "typescript",
	"severity": 8,
	"message": "No inputs were found in config file '/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.node.json'. Specified 'include' paths were '[\"vite.config.ts\"]' and 'exclude' paths were '[]'.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]
```

**Not worrying about this error right now,** because editing `index.html` fixes it

### 2.6.2. Command Line Check: `npm run lint`

Installing TS broke lint:

```
$ npm run lint

> ts_eslint_react-1-react_eslint_ts@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


Oops! Something went wrong! :(

ESLint: 8.40.0

No files matching the pattern "src" were found.
Please check for typing mistakes in the pattern.

$
```

**Not worrying about these right now,** because editing `index.html` is a big part of this step, and it just might change things.

## 2.7. Edit `index.html`

Using VSCode to edit `index.html`.

- Changed `main.jsx` to `main.tsx`

### 2.7.1. VSCode Check

- This fixed the *"2.6.1.3. A New "No inputs were found in config file ..."* problem
- The other three problems remain

### 2.7.2. Command Line Check: `npm run lint`

Running `npm run lint` is still broken.

## 2.8. Updating Git

Renaming the files in VSCode kind of messed up my github!

```
$ git status
. . .
        deleted:    vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.jsx
        deleted:    vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.jsx
. . .
Untracked files:
. . .
        vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx
        vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.tsx
. . .
$
```

### 2.8.1. Saved Copies of Original `*.jsx` Files as `*.jsx-before_renaming`

```
git checkout App.jsx                     # Get old copy before VSCode "deleted" it
diff App.jsx App.tsx                     # Sanity check: no differences
git mv App.jsx App.jsx-before_renaming
git checkout main.jsx                    # Get old copy before VSCode "deleted" it
diff main.jsx main.tsx                   # Sanity check: no differences
git mv main.jsx main.jsx-before_renaming
git commit ....                          # Inadvertently checked in with other changes
```

#### 2.8.1.1. No Going Back!

Using the `*.jsx-before_renaming` files to recreate the `*.jsx` files, like so:

```
cp main.jsx-before_renaming  main.jsx
cp App.jsx-before_renaming App.jsx
```

Doesn't help to fix the problems.  **There's no going back!**

## 2.9. Fixing the Problems

We don't know how to fix the lint error, but now we are certain it's caused by renaming the files.

### 2.9.1. Recap

We do know how to fix the three VSCode problems:

- 2.6.1.1. Two "Cannot find module ..." Problems
  - Have two ways to fix this
  - Finding the best way is our goal now
  - See below
- 2.6.1.2. The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem
  - Easy to fix with a cast

### 2.9.2. The `require` Fix - Fixes the Problem, Breaks the App

Trying *"4.1.2.5.1. Solution A - Change `import` to `require`"* from `2a-rtr-typescript_in_react-troubleshooting.md`, in an
effort to answer these questions:

- 1. Will this fix the problem or just let me use `require`?
  - Fixes the problem but breaks the App
- 2. If we do this, do we need still need to convert the `import` to a `require`?
  - Yes
- 3. If we do this, and it doesn't fix the problem, will we be able to eventually get rid of it?
  - Not seeing a way out at this time

**Note:** this "fix" causes an *"Uncaught ReferenceError: require is not defined"* error to show in the browser dev tools' console.

#### 2.9.2.1. The `require` Fix - Step 1

Install `@types/node`:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts
$ npm i --save-dev @types/node
added 1 package, and audited 459 packages in 5s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ git diff package*
diff --git a/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package-lock.json b/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package-lock.json
index bf70ceb..33873f4 100644
--- a/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package-lock.json
+++ b/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package-lock.json
@@ -12,6 +12,7 @@
         "react-dom": "^18.2.0"
       },
       "devDependencies": {
+        "@types/node": "^20.1.7",
         "@types/react": "^18.2.6",
         "@types/react-dom": "^18.2.4",
         "@vitejs/plugin-react": "^4.0.0",
@@ -2554,6 +2555,12 @@
       "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
       "dev": true
     },
+    "node_modules/@types/node": {
+      "version": "20.1.7",
+      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.1.7.tgz",
+      "integrity": "sha512-WCuw/o4GSwDGMoonES8rcvwsig77dGCMbZDrZr2x4ZZiNW4P/gcoZXe/0twgtobcTkmg9TuKflxYL/DuwDyJzg==",
+      "dev": true
+    },
     "node_modules/@types/parse-json": {
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
diff --git a/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package.json b/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package.json
index 42bb4b9..c14311b 100644
--- a/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package.json
+++ b/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/package.json
@@ -14,6 +14,7 @@
     "react-dom": "^18.2.0"
   },
   "devDependencies": {
+    "@types/node": "^20.1.7",
     "@types/react": "^18.2.6",
     "@types/react-dom": "^18.2.4",
     "@vitejs/plugin-react": "^4.0.0",
$
```

#### 2.9.2.2. The `require` Fix - Step 2

Edit `App.tsx` as follows:

- Change `import reactLogo from './assets/react.svg'` to `const reactLogo = require("./assets/react.svg");`
- Change `import viteLogo from '/vite.svg'` to `const viteLogo = require("/vite.svg");`

### 2.9.3. VSCode Check

This fixes the two *"Cannot find module ..."* problems!

### 2.9.4. Command Line Check: `npm run lint`

Lint does *not* work.

### 2.9.5. Command Line Check: `npm run dev`

The App does *not* work.

### 2.9.6. Browser Dev Tools Console Check

**Note:** this "fix" causes an *"Uncaught ReferenceError: require is not defined"* error to show in the browser dev tools' console.

