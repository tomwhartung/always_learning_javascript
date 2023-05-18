
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

## 2.6. Try Installing `@types/node`

```
npm install --save-dev @types/node
```

As suspected, this did not fix anything.

### 2.6.1. VSCode Check

- The three problems remain
- Linting still does not work

### 2.6.2. Command Line Check

- `npm run lint` - is still broken
- `npm run dev` - App still works ok

### 2.6.3. Updating Git

```
pwd    # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/package*
git commit -m 'Running "npm install --save-dev @types/node" updated the vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/package* files but did not fix any problems; nor did it create any new ones, so I guess that is a good thing.'
```

## 2.7. Fixing the Problems

### 2.7.1. Recap

We don't know how to fix the lint problems, but now we are certain it's caused by renaming the files.

We do know how to fix the three VSCode problems:

- Two "Cannot find module ..." Problems in subsection 2.5.3.1. of this document
- The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem in subsection 2.5.3.2. of this document

### 2.7.2. Solving the "Argument of type 'HTMLElement | null' is not assignable to ..." Problem in subsection 2.5.3.2. of this document

As noted in subsection *"2.3.2.1.2. VSCode Problem Solution"* of 2a-rtr-typescript_in_react-troubleshooting.md ,
it is easy to fix this problem with a cast.

#### 2.7.2.1. Cause of Problem

[This stackoverflow](https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment)
post claims this is due to the following type mismatch:

- The `document.getElementById()` method returns an `HTMLElement`
- The `createRoot` method expects an `Element | DocumentFragment` parameter

#### 2.7.2.2. Solution to Problem

- Update line 6 of `src/main.tsx` to cast the return value of `document.getElementById('root')` as an `Element`

```
$ git diff src/main.tsx
. . .
-ReactDOM.createRoot(document.getElementById('root')).render(
+ReactDOM.createRoot(document.getElementById('root') as Element).render(
. . .
```

#### 2.7.2.3. VSCode Check

- This problem is gone but the two "Cannot find module ..."  problems remain
- Linting still does not work

#### 2.7.2.4. Command Line Check

- `npm run lint` - is still broken
- `npm run dev` - App still works ok

#### 2.7.2.5. Updating Git

```
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/main.tsx
git commit -m 'Added a cast in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/main.tsx to fix the "Argument of type `HTMLElement | null` is not assignable to ..." problem.'
```

### 2.7.3. Solving the Two "Cannot find module ..." Problems in subsection 2.5.3.1. of this document

This solution is from subsection *"4.1.2.5.2. Solution B - Create a `custom.d.ts`"* in 2a-rtr-typescript_in_react-troubleshooting.md , which references
[this stackoverflow post](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript#45887328).

#### 2.7.3.1. Step 1 - Create `custom.d.ts`

Create a file named `custom.d.ts` with the following contents:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint
$ cat > src/custom.d.ts
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
```

#### 2.7.3.2. Step 2 - Update `tsconfig.json`

Update `tsconfig.json` to include `custom.d.ts`:

```
-  "include": ["src"],
+  "include": ["src", "src/custom.d.ts"],
```

#### 2.7.3.3. VSCode Check

**Note:** had to **restart VSCode.**

- At first I got 14 problems
  - The original 2 plus 12 new ones
  - VSCode prompted me to add `import React from 'react';` to `App.tsx`
  - This fixed the 12 new ones
- Thinking something was fishy, I restarted VSCode
  - As described in *"4.1.2.5.2. Solution B - Create a `custom.d.ts`"* in 2a-rtr-typescript_in_react-troubleshooting.md
    - That fixes the old problems but gives us two new problems
  - Also: these new problems look fixable

#### 2.7.3.3. Step 3 - Fix the Two New Problems

##### 2.7.3.3.1. The Two New Problems - Details

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/App.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type 'FunctionComponent<SVGAttributes<SVGElement>>' is not assignable to type 'string'.",
	"source": "ts",
	"startLineNumber": 15,
	"startColumn": 16,
	"endLineNumber": 15,
	"endColumn": 19,
	"relatedInformation": [
		{
			"startLineNumber": 2235,
			"startColumn": 9,
			"endLineNumber": 2235,
			"endColumn": 12,
			"message": "The expected type comes from property 'src' which is declared here on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'",
			"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/node_modules/@types/react/index.d.ts"
		}
	]
}]
```

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/src/App.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type 'FunctionComponent<SVGAttributes<SVGElement>>' is not assignable to type 'string'.",
	"source": "ts",
	"startLineNumber": 18,
	"startColumn": 16,
	"endLineNumber": 18,
	"endColumn": 19,
	"relatedInformation": [
		{
			"startLineNumber": 2235,
			"startColumn": 9,
			"endLineNumber": 2235,
			"endColumn": 12,
			"message": "The expected type comes from property 'src' which is declared here on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'",
			"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint/node_modules/@types/react/index.d.ts"
		}
	]
}]
```

##### 2.7.3.3.2. The Two New Problems - Solutions

#### 2.7.3.4. Command Line Check

#### 2.7.3.3. Updating Git

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
### 2.7.1. VSCode Check
### 2.7.2. Command Line Check
### 2.7.3. Updating Git

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


### 2.7.3. VSCode Check

This fixes the two *"Cannot find module ..."* problems!

### 2.7.4. Command Line Check: `npm run lint`

Lint does *not* work.

### 2.7.5. Command Line Check: `npm run dev`

The App does *not* work.

### 2.7.6. Browser Dev Tools Console Check

**Note:** this "fix" causes an *"Uncaught ReferenceError: require is not defined"* error to show in the browser dev tools' console.

