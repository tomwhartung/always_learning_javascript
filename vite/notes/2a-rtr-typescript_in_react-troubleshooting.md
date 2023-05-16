
# 2a-rtr-typescript_in_react-troubleshooting.md

Had some issues with code installed based on commands gleaned from the section *Typescript in React* in the
chapter *React Maintenance* in the *Road to React* e-book.

**The goal of this file is to:**

- Start the process described in `2-rtr-typescript_in_react.md` from scratch
- Identify which step in the process causes these issues to arise
- Fix the issues

# 0. TypeScript in React - Issues

When I got to the subsection *"3.3.4. Ensure ESLint and TS Work Ok"* in `2-rtr-typescript_in_react.md`,
I discovered I had some issues:

- ESLint doesn't work
- VSCode flags two problems in `App.tsx`

Some initial efforts to fix these issues have proven to be unfruitful.

## 0.1. ESLint doesn't work - Details

Following is what `npm` displays when I try to run `lint` on the command line:

```
$ npm run lint

> ts_in_react-1@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


Oops! Something went wrong! :(

ESLint: 8.39.0

No files matching the pattern "src" were found.
Please check for typing mistakes in the pattern.

$
```

A couple of initial comments:

- This could be a configuration issue
  - An initial search for fixes leads me to believe that
- Ultimately I want to be able to see lint issues in VSCode

## 0.2. VSCode flags two problems in `App.tsx` - Details

The following subsections show the `.json` VSCode generates for the two problems it identifies.

- It's apparent the two problems are related

### 0.2.1. `Cannot find module './assets/react.svg' or its corresponding type declarations.`

```
[{
        "resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx",
        "owner": "typescript",
        "code": "2307",
        "severity": 8,
        "message": "Cannot find module './assets/react.svg' or its corresponding type declarations.",
        "source": "ts",
        "startLineNumber": 2,
        "startColumn": 23,
        "endLineNumber": 2,
        "endColumn": 43
}]

### 0.2.2. `Cannot find module '/vite.svg' or its corresponding type declarations.`

```
[{
        "resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx",
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

I am thinking that these problems could also be due to a configuration issue.

## 0.3. Restarting the Process

### 0.3.1. Things Done Differently This Time

- [x] (1) Add project to VSCode as soon as it's been created
- [x] (2) Install TS **before** ESLint

### 0.3.2. Resources and References

**Resources:**

- (1) The steps in the next section, "3. Restarting the Process", come from `2-rtr-typescript_in_react.md`
- (2) [A post on medium](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)
  - *"Setting [sic] ESLint on a React Typescript project (2022)"* has some good config pointers but uses `create-react-app`

**References:**

These are listed in the order in which they appear in this file.

- (1) [This stackoverflow post](https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file#41211721)
  - claims this is due to not having any `*.tsx` files in the project
- (2) [This stackoverflow post](https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment)
  - claims this is due to the following type mismatch ...
- (3) [This stackoverflow post ](https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment)
  - claims this is due to the following type mismatch ...
- (4) [This slackoverflow post](https://stackoverflow.com/questions/64732623/typescript-cannot-find-module-or-its-corresponding-type-declarations)
  - has some interesting ideas
- (5) **[This stackoverflow post](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript#45887328)**
  - has inspired a couple of *actual solutions* to the problems in VSCode


# 1. Start With React

Taking the same steps as those in section *"1. Start With React"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

Commands:

```
pwd   # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react

npm create vite@latest ts_in_react-2-troubleshooting -- --template react
cd ts_in_react-2-troubleshooting
npm install
npm install
```

## 1.1. Add Project to VSCode

**This is the first item in subsection *"0.3.1. Things Done Differently This Time"* above.**

- [x] (1) Add project to VSCode as soon as it's been created

VSCode does *not* show any problems in the project.

## 1.2. Commit Project to Github

```
pwd   # /var/www/always_learning/always_learning_javascript

ga vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/
git commit -m 'Adding new, just-npm-install-ed project in vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/ .  For details, see vite/notes/2a-rtr-typescript_in_react-troubleshooting.md .'
```


# 2. Add and Setup TypeScript

Taking the same steps as those in section *"3. Add and Setup TypeScript"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

**This is the second item in subsection *"0.3.1. Things Done Differently This Time"* above.**

- [x] (2) Install TS **before** ESLint

## 2.1. Install TypeScript

Taking the same steps as those in subsection *"3.1. Install TypeScript"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

```
pwd     # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
npm install typescript @types/react @types/react-dom --save-dev
```

### 2.1.1. VSCode Check

VSCode does *not* show any problems in the project.

### 2.1.2. Commit Changes to Github

```
pwd              # /var/www/always_learning/always_learning_javascript
git add  vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package-lock.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package-lock.json with changes made by installing typescript.'
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package.json with changes made by installing typescript.'
```

## 2.2. Configure TypeScript

Taking the same steps as those in subsection *"3.2. Configure TypeScript"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

```
pwd   # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$ cat > tsconfig.json
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
$ cat > tsconfig.node.json
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

### 2.2.1. VSCode Check

**Note:** VSCode is now showing a problem with `tsconfig.node.json`:

#### 2.2.1.1. VSCode Problem Details

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/tsconfig.node.json",
	"owner": "typescript",
	"severity": 8,
	"message": "No inputs were found in config file '/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/tsconfig.node.json'. Specified 'include' paths were '[\"vite.config.ts\"]' and 'exclude' paths were '[]'.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]
```

#### 2.2.1.2. VSCode Problem Solution

[This stackoverflow](https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file#41211721)
post claims this is due to not having any `*.tsx` files in the project.

- The top answer recommended `touch`ing a `test.tsx` or `test.ts` file
  - This did not work
- I tried renaming `App.jsx` to `App.tsx`
  - This did not work
- Another answer recommended restarting your editor
  - A comment to this answer said that "works for VSC~
  - **I tried it and it worked, yay!**

### 2.2.2. Commit Changes to Github

#### 2.2.2.1. Commit Changes to `package*` Files

```
pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package*
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package* files with changes made by installing typescript.'

#### 2.2.2.2. Commit New `tsconfig*` Files

```
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/tsconfig.*
git commit -m 'Adding vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/tsconfig.* files copied from Road to React book.'
```

## 2.3. Rename and Edit Source Files, and Ensure App Builds and Runs Ok

Taking the same steps as those in subsection *"3.3. Rename and Edit Source Files, and Ensure App Builds and Runs Ok"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

### 2.3.1. Rename `src/App.jsx` to `src/App.tsx`

```
pwd              # /var/www/always_learning/always_learning_javascript
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx

#### 2.3.1.1. VSCode Check

VSCode does *not* show any problems in the project.

#### 2.3.1.2. Commit Change to Github

```
pwd              # /var/www/always_learning/always_learning_javascript
git commit -m 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx .'
```

### 2.3.2. Rename `src/main.jsx` to `src/main.tsx`

```
pwd              # /var/www/always_learning/always_learning_javascript
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx
git commit -m 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx .'
```

#### 2.3.2.1. VSCode Check

**Note:** VSCode is now showing a problem with `main.jsx`:

##### 2.3.2.1.1. VSCode Problem Details

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx",
	"owner": "typescript",
	"code": "2345",
	"severity": 8,
	"message": "Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.\n  Type 'null' is not assignable to type 'Element | DocumentFragment'.",
	"source": "ts",
	"startLineNumber": 6,
	"startColumn": 21,
	"endLineNumber": 6,
	"endColumn": 52
}]```

##### 2.3.2.1.2. VSCode Problem Solution

[This stackoverflow](https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment)
post claims this is due to the following type mismatch:

- The `document.getElementById()` method returns an `HTMLElement`
- The `createRoot` method expects an `Element | DocumentFragment` parameter

The top-most and only answer suggests using an `as` cast, which indeed **fixes the problem.**

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$ git diff src/main.tsx
diff --git a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx
index 54b39dd..e0c87d1 100644
--- a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx
+++ b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/main.tsx
@@ -3,7 +3,7 @@ import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'

-ReactDOM.createRoot(document.getElementById('root')).render(
+ReactDOM.createRoot(document.getElementById('root') as Element).render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
$
```

##### 2.3.2.1.3. Commit Change to Github

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$
$ git add src/main.tsx
$ git commit -m 'Added an "as" cast to src/main.tsx to fix a type mismatch.'
[master a2d0a8b] Added an "as" cast to src/main.tsx to fix a type mismatch.
 1 file changed, 1 insertion(+), 1 deletion(-)
$
```

### 2.3.3. Edit `index.html`

Change `main.jsx` to `main.tsx` on line 11 of `index.html`:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$
$ vi index.html         # change "main.jsx" on line 11 to "main.tsx"
$
$ git diff vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html
diff --git a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html
index 79c4701..22365a1 100644
--- a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html
+++ b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html
@@ -8,6 +8,6 @@
   </head>
   <body>
     <div id="root"></div>
-    <script type="module" src="/src/main.jsx"></script>
+    <script type="module" src="/src/main.tsx"></script>
   </body>
 </html>
$
```

#### 2.3.3.1. VSCode Check

VSCode does *not* show any problems in the project.

### 2.3.4. Ensure App Builds and Runs Ok

```
pwd             # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
npm run         # Check my options
npm run build   # No apparent build errors
npm run dev     # Runs and reloads ok
```

Checked app in browser and every thing seems to be ok!

### 2.3.5. Commit Change to Github

```
$ pwd
/var/www/always_learning/always_learning_javascript
$
$ git add vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html
$ git commit -m 'Changed "main.jsx" to "main.tsx" on line 11 of vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html .'
[master 5855ba4] Changed "main.jsx" to "main.tsx" on line 11 of vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/index.html .
 1 file changed, 1 insertion(+), 1 deletion(-)
$
```


# 3. Add ESLint

Taking the same steps as those in section *"2. Add ESLint"* in `2-rtr-typescript_in_react.md`.

- For more information, see those notes

```
pwd                                               # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
npm install vite-plugin-eslint --save-dev         # install vite-plugin-eslint
npm install eslint --save-dev                     # install eslint dependencies **MAY HAVE MISSED THIS IN PREVIOUS EFFORTS**
npm install eslint-config-react-app --save-dev    # install eslint-config-react-app
cat .eslintrc.cjs                                 # ensure it's there and makes sense
npm run dev                                       # make sure it still runs ok
```

## 3.1. VSCode Check

- VSCode does *not* show any problems in the project
- VSCode now shows that `package-lock.json` and `package.json` have changed

## 3.2. Ensure App Builds and Runs Ok

```
pwd             # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
npm run         # Check my options
npm run build   # No apparent build errors
npm run dev     # Runs and reloads ok
```

Checked app in browser and every thing seems to be ok!

## 3.3. Commit Change to Github

Check the `vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package*` files in to github:

```
pwd                                               # /var/www/always_learning/always_learning_javascript
git diff package-lock.json                        # wow that is a lot of changes
git diff package.json                             # just a few changes
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package*.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/package* with changes made while installing vite-plugin-eslint and eslint-config-react-app .'
```


# 4. Ensure ESLint and TS Work Ok

**Note:** I did not get to taking these steps in section *"2. Add ESLint"* in `2-rtr-typescript_in_react.md`.

- So we are in fresh territory!

## 4.1. Generate and fix an ESLint error

Added `const greeting = 'Hi';` to after the `import` statements in `App.tsx`:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src
$ git diff App.tsx
diff --git a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx
index b8b8473..da09417 100644
--- a/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx
+++ b/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx
@@ -3,6 +3,8 @@ import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

+const greeting = 'Hi';
+
 function App() {
   const [count, setCount] = useState(0)

$
```

### 4.1.1. VSCode Check

**Note:** VSCode is now showing two problems with `App.tsx`:

#### 4.1.1.1. VSCode Problem Details

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx",
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
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx",
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

**Note:** for both of these, `"source": "ts",` so apparently they are TS errors?

#### 4.1.1.2. VSCode Problem Analysis

The errors are similar:

-	"message": "Cannot find module './assets/react.svg' or its corresponding type declarations.",
  - Note: starts with a `.`
    - That is how it appears in `App.tsx`
-	"message": "Cannot find module '/vite.svg' or its corresponding type declarations.",
  - Note: does *not* start with a `.` - hmm...
    - That is how it appears in `App.tsx`

The files are there, it's just that TS (or VSCode??) can't find them:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$
$ l public/vite.svg  src/assets/react.svg
-rw-r--r-- 1 tomh tomh 1497 May 11 13:38 public/vite.svg
-rw-r--r-- 1 tomh tomh 4126 May 11 13:38 src/assets/react.svg
```

#### 4.1.1.3. VSCode Problem Investigation - VSCode Tips

##### 4.1.1.3.1. Interesting Asides

[This slackoverload post](https://stackoverflow.com/questions/64732623/typescript-cannot-find-module-or-its-corresponding-type-declarations)
has some interesting ideas.

- I already ran `npm install typescript @types/react @types/react-dom --save-dev`, so I don't think that's it
- **Note:** to restart the typescript server in VSCode:
  - Ctrl-Shift-P -> Typescript: Reload Project
  - ??? OR ???
  - View -> Command Palette [Ctrl-Shift-P] -> Typescript: Restart TS Server
    - Good to know!

##### 4.1.1.3.2. Solutions Tried

**Editing paths in the `import` statements in `App.tsx`**

- Tried adding `./`, no `.` or `/`, using `public/vite.svg`, using `../`, etc.
  - Paths also changed in error messages
  - Nothing really helped

**Running `npm install eslint --save-dev`:**

- I apparently did *not* run `npm install eslint --save-dev`
  - A few search results recommend it
  - It is actually also in the *"Road to React"* book, but not in my lists of the commands I ran
    - I was surprised to see I apparently did not run it??
  - This actually updated `"eslint":` in the package* files from version `"^8.38.0"` to `"^8.40.0"`
- **This is apparently a non-issue**
  - See the referenc to this command in subsection *"2.3. Add ESLint"* in `3a-ts_eslint_react-1-react_eslint_ts.md`

**Run `tsc` instead of depending on VSCode**

- Get the same errors

**RTFM: [What is a `tsconfig.json`?(https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)**

- Not finding much that is helpful, but a whole lot that is not relevant

**[This stackoverflow post](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript#45887328)**
has inspired a couple of actual solutions to the problems in VSCode.

**First try:** tried this, based on the second answer and a comment to the original post:

```
// import reactLogo from './assets/react.svg'
const reactLogo = require("./assets/react.svg");
```

Now **when hovering** it says it wants to convert the require to an import.

Also, now have this new problem:

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx",
	"owner": "typescript",
	"code": "2580",
	"severity": 8,
	"message": "Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.",
	"source": "ts",
	"startLineNumber": 4,
	"startColumn": 19,
	"endLineNumber": 4,
	"endColumn": 26
}]
```

Not sure I want to install this package **when hovering** VSCode wants me to not use the `require`.

**Second try:**

From the main answer, which says this works for webpack, which is why I didn't try it at first, but...:

- 1. Create a file named `custom.d.ts` with the following contents:

```
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
```

- 2. Update `tsconfig.js` to include it:

```
-  "include": ["src"],
+  "include": ["src", "src/custom.d.ts"],
```

This fixes the old problems but gives us two new problems:

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx",
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
			"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/node_modules/@types/react/index.d.ts"
		}
	]
}]
```

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/src/App.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type 'FunctionComponent<SVGAttributes<SVGElement>>' is not assignable to type 'string'.",
	"source": "ts",
	"startLineNumber": 21,
	"startColumn": 16,
	"endLineNumber": 21,
	"endColumn": 19,
	"relatedInformation": [
		{
			"startLineNumber": 2235,
			"startColumn": 9,
			"endLineNumber": 2235,
			"endColumn": 12,
			"message": "The expected type comes from property 'src' which is declared here on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'",
			"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/node_modules/@types/react/index.d.ts"
		}
	]
}]
```


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Things to look into trying:

- If these are TS errors, why do they appear only after adding `eslint`?
  - Or do they?
  - Maybe try a new project: `ts_in_react-3-fresh_start`
    - Be sure to **reload TS** (Ctrl+Shift+P) and *make sure* it is `eslint` that "causes" the errors


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**From last time:**
- Without some sort of config, it seems obvious it doesn't know where to look
- This makes me think these problems are due to configuration
  - ??? let's create those two files before trying to solve the problems
  - **what two files???**
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

#### 4.1.1.4. VSCode Problem Solution

#### 4.1.1.5. Commit Change(s) to Github

**See commands below!!!**

```
```

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

### 4.1.2. Ensure We Can Run Lint

Running `npm run lint` now gives us the following error:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
$ npm run lint

> ts_in_react-2-troubleshooting@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


Oops! Something went wrong! :(

ESLint: 8.40.0

No files matching the pattern "src" were found.
Please check for typing mistakes in the pattern.

$
```

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

## 4.1.3. Ensure App Builds and Runs Ok

```
pwd             # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting
npm run         # Check my options
npm run build   # No apparent build errors
npm run dev     # Runs and reloads ok
```

Checked app in browser and every thing seems to be ok!

### 4.1.4. Commit Change(s) to Github

**See commands below!!!**

```
```


## 4.2. Generate and fix a TS error
## 4.2.1. VSCode Check
## 4.2.2. 
## 4.2.3. Ensure App Builds and Runs Ok
## 4.2.4. Commit Change to Github


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Saving this markup in case adding ESLint causes these problems
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

## 2.1.1. VSCode Still Showing Two Problems


**Let's see if we can fix those problems *NOW*!**


## 2.1.1. Commit Changes to Github

```
Update git with changes made to the `package*` files:


pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.json
git commit -m 'Adding vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.json copied from Road to React book.'
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.node.json
git commit -m 'Adding vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.node.json copied from Road to React book.'
```

