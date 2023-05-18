
# 3b-ts_eslint_react-2-react_ts_no_eslint.md

This is the second experiment our quest to *find the best process* to use for building *"the whole shebang."*

# 1. Questions

- Can I learn to live *without* ESLint?
  - 
- We can run `npm run lint` *before* installing TS
  - Will `npm run lint` work *after* installing TS, even without installing ESLint??
    - **NO**
- Could installing `@types/node` fix the *"Cannot find module ... or its corresponding type declarations"* problems
  - **NO**

# 2. Process

These commands come from `3a-ts_eslint_react-1-react_eslint_ts.md`.

- This time I am *not* installing ESLint

## 2.1. Start With React

```
pwd   # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process
npm create vite@latest ts_eslint_react-2-react_ts_no_eslint -- --template react
cd ts_eslint_react-2-react_ts_no_eslint
npm install
npm run dev
npm run lint
```

**Note:** running lint at this point works ok:

## 2.2. Add the New Project to VSCode

- No problems so far.

### 2.2.1. VSCode Check

- The two lint problems now show up in VSCode and on the command line with `npm run lint`
- Fix them by adding the `rel="noreferrer` attribute to the two `<a ...` tags in `App.jsx`

## 2.3. Install Typescript

```
npm install typescript @types/react @types/react-dom --save-dev    # Claims: "added 1 package, and audited 242 packages in 10s"
git diff package*                                                  # ... package* files now include typescript ....
git add package*
git commit -m 'Adding the package* files in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint because they now reference TS.'
```

### 2.3.1. VSCode Check

- No TS problems, yet
- Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem in VSCode

### 2.3.2. Command-Line Checks

- Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem on the command line with `npm run lint`

- `npm run dev`: App runs ok

## 2.4. Configure Typescript

Create the two TS config files `tsconfig.json` and `tsconfig.node.json` with the following contents:

```
pwd         # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint
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
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/tsconfig.*
git commit -m 'Adding config files for TS: vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/tsconfig.* .'
```

### 2.4.1. VSCode Checks

#### 2.4.1.1. Fixable TS Problem

Get the following TS problem:

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/tsconfig.node.json",
	"owner": "typescript",
	"severity": 8,
	"message": "No inputs were found in config file '/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/tsconfig.node.json'. Specified 'include' paths were '[\"vite.config.ts\"]' and 'exclude' paths were '[]'.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]
```

**Note:** this will be fixed in the next step, when we rename the files and edit `index.html`

#### 2.4.1.2. Lint Still Works

- Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem in VSCode, as expected

### 2.4.2. Command-Line Checks

- `npm run lint`
  - Adding `const greeting = 'Hi';` to `App.jsx` causes a lint problem on the command line with `npm run lint`, as expected
- `npm run dev`
  - App still runs ok

## 2.5. Rename `*.jsx` Files and Edit `index.html`

### 2.5.1. Rename `*.jsx` files to `*.tsx`

```
git mv App.jsx App.tsx
git mv main.jsx main.tsx
```

### 2.5.2. Edit `index.html`

Using VSCode to change `main.jsx` to `main.tsx` in `index.html`.

### 2.5.3. VSCode Check

- The renaming caused 4 problems in VSCode
- Editing `index.html` fixed one of these

#### 2.5.3.1. Two "Cannot find module ..." Problems

We can use *"4.1.2.5.2. Solution B - Create a `custom.d.ts`"* in `2a-rtr-typescript_in_react-troubleshooting.md` to fix these:

- "Cannot find module './assets/react.svg' or its corresponding type declarations.",
- "Cannot find module '/vite.svg' or its corresponding type declarations.",

#### 2.5.3.2. The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem

We can use *"2.3.2.1.2. VSCode Problem Solution"* in `2a-rtr-typescript_in_react-troubleshooting.md` to fix this:

- "Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'."
  - "Type 'null' is not assignable to type 'Element | DocumentFragment'.",

#### 2.5.3.3. Lint *Not* Working in VSCode

- Adding `const greeting = 'Hi';` to `App.jsx` has no effect

### 2.5.4. Command-Line Checks

- `npm run lint`
  - Adding `const greeting = 'Hi';` to `App.jsx` has no effect
  - Getting this error:
    - No files matching the pattern "src" were found.
    - Please check for typing mistakes in the pattern.
- `npm run dev`
  - App still runs ok

### 2.5.5. Commit Changes

**Note:** the following commit includes the two `git mv ...` commands in *"2.5.1. Rename `*.jsx` files to `*.tsx`"* above.

```
git diff vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/index.html
git add  vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/index.html
git commit -m 'Renamed vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/*.jsx to vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/*.tsx , and changed "main.jsx" to "main.tsx" in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/index.html .'
```

## 2.7. Try Installing `@types/node`

```
npm install --save-dev @types/node
```

As suspected, this did not fix anything.

### 2.7.1. VSCode Check

- The three problems remain
- Linting still does not work

### 2.7.2. Command Line Check

- `npm run lint` - is still broken
- `npm run dev` - App still works ok

### 2.7.3. Updating Git

```
pwd    # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/package*
git commit -m 'Running "npm install --save-dev @types/node" updated the vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/package* files but did not fix any problems; nor did it create any new ones, so I guess that is a good thing.'
```


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

#### 2.8.2. Saved Copies of Original `*.jsx` Files as `*.jsx-before_renaming`

```
git checkout App.jsx                     # Get old copy before VSCode "deleted" it
diff App.jsx App.tsx                     # Sanity check: no differences
git mv App.jsx App.jsx-before_renaming
git checkout main.jsx                    # Get old copy before VSCode "deleted" it
diff main.jsx main.tsx                   # Sanity check: no differences
git mv main.jsx main.jsx-before_renaming
git commit ....                          # Inadvertently checked in with other changes
```

#### 2.8.3. No Going Back

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

- 2.5.1.1. Two "Cannot find module ..." Problems
  - Have two ways to fix this
  - Finding the best way is our goal now
  - See below
- 2.5.1.2. The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem
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

