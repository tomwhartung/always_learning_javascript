
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

### 0.3.1. Things to Do Differently This Time

- (1) Add project to VSCode as soon as it's been created
- (2) Install TS **before** ESLint

### 0.3.2. Resources and References

**Resources:**

- (1) The steps in the next section, "3. Restarting the Process", come from `2-rtr-typescript_in_react.md`
- (2) [A post on medium](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)
  - *"Setting [sic] ESLint on a React Typescript project (2022)"* has some good config pointers but uses `create-react-app`
- (3) 

**References:**


# 1. Start With React

Taking the same steps as those in section *"1. Start With React"* in `2-rtr-typescript_in_react.md`.

```
pwd   # /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react

npm create vite@latest ts_in_react-2-troubleshooting -- --template react
cd ts_in_react-2-troubleshooting
npm install
npm install
```

## 1.1. Add Project to VSCode

**This is the first item in subsection *"0.3.1. Things to Do Differently This Time"* above.**

- [x] (1) Add project to VSCode as soon as it's been created

**Note:** the code does not have any problems.

## 1.2. Commit Project to Github

```
pwd   # /var/www/always_learning/always_learning_javascript

ga vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/
git commit -m 'Adding new, just-npm-install-ed project in vite/projects/2-rtr-typescript_in_react/ts_in_react-2-troubleshooting/ .  For details, see vite/notes/2a-rtr-typescript_in_react-troubleshooting.md .'
```


# 2. Add and Setup TypeScript

Taking the same steps as those in section *"3. Add and Setup TypeScript"* in `2-rtr-typescript_in_react.md`.

This is the first item in subsection *"0.3.1. Things to Do Differently This Time"* above.

- [x] (2) Install TS **before** ESLint


**Note:** subsequent sections contain more details - e.g. output from commands - because we have not yet performed these steps, and
actually running these is *the main point of this project.*

## 2.1. Install TypeScript

Running the following commands, which are from the subsection *"TypeScript in React"* in chapter *"React Mantenance"* of the book *"The Road to React"*.

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1
$ npm install typescript @types/react @types/react-dom --save-dev

changed 2 packages, and audited 458 packages in 5s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$
```

Update git with changes made to the `package*` files:

```
pwd              # /var/www/always_learning/always_learning_javascript
git diff vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package-lock.json
git add  vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package-lock.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package-lock.json with changes made by installing typescript.'
git diff vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package.json
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package.json with changes made by installing typescript.'
```

## 2.2. Configure TypeScript

Running the following commands, which are from the subsection *"TypeScript in React"* in chapter *"React Mantenance"* of the book *"The Road to React"*.

**Note:** exit `cat` by pressing `Ctrl-D` on a new line.

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1
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

Update git with the new `tsconfig*` files:

```
pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.json
git commit -m 'Adding vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.json copied from Road to React book.'
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.node.json
git commit -m 'Adding vite/projects/2-rtr-typescript_in_react/ts_in_react-1/tsconfig.node.json copied from Road to React book.'
```

## 2.3. Rename and Edit Source Files, and Ensure App Builds and Runs Ok

These steps are from the subsection *"TypeScript in React"* in chapter *"React Mantenance"* of the
book *"The Road to React"*.

### 2.3.1. Rename and Edit `src/*.jsx` Source Files

Run the following commands to **rename the `*.jsx` files to `*.tsx:**

```
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx
gc 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx .'
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.tsx
gc 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.tsx .'
```

### 2.3.2. Edit `index.html`

Now edit `index.html`, changing `main.jsx` on line 11 to `main.tsx`:

```
$ vi index.html         # change "main.jsx" on line 11 to "main.tsx"
$ git diff vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html
diff --git a/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html b/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html
index 79c4701..22365a1 100644
--- a/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html
+++ b/vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html
@@ -8,6 +8,6 @@
   </head>
   <body>
     <div id="root"></div>
-    <script type="module" src="/src/main.jsx"></script>
+    <script type="module" src="/src/main.tsx"></script>
   </body>
 </html>
$ git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html
$ git commit -m 'Changed "main.jsx" to "main.tsx" on line 11 of vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html .'
[master 5855ba4] Changed "main.jsx" to "main.tsx" on line 11 of vite/projects/2-rtr-typescript_in_react/ts_in_react-1/index.html .
 1 file changed, 1 insertion(+), 1 deletion(-)
$
```

### 2.3.3. Ensure App Builds and Runs Ok

Run these commands in the `vite/projects/2-rtr-typescript_in_react/ts_in_react-1/'` directory:

```
$ npm run
Scripts available in ts_in_react-1@0.0.0 via `npm run-script`:
  dev
    vite
  build
    vite build
  lint
    eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0
  preview
    vite preview
$ npm run build

> ts_in_react-1@0.0.0 build
> vite build

vite v4.3.3 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-d526a0c5.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-e92ae01e.js   143.41 kB │ gzip: 46.10 kB
✓ built in 3.85s
$ npm run dev

> ts_in_react-1@0.0.0 build
> vite build
[Screen clears]

  VITE v4.3.3  ready in 1331 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[q]
$
```

**Note:** be sure to check out app in browser at [localhost:5173/](http://localhost:5173/) before quitting out of `npm run dev`!

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


# 3. Add ESLint

Taking the same steps as those in section *"2. Add ESLint"* in `2-rtr-typescript_in_react.md`.

Running the following commands, which are adapted from section *"4. Linting with ESLint"*
in `./1-rtr-fundamentals_of_react.md`:

```
pwd                                               # var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1
npm install vite-plugin-eslint --save-dev         # install vite-plugin-eslint
npm install eslint-config-react-app --save-dev    # install eslint-config-react-app
npm run dev                                       # make sure it still runs ok
cat .eslintrc.cjs                                 # ensure it's there and makes sense
git diff package-lock.json                        # wow that is a lot of changes
git diff package.json                             # just a few changes
```

Check the `vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package*` files in to github:

```
pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package-lock.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package-lock.json with changes made automatically by installing vite-plugin-eslint and eslint-config-react-app .'
git add package.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package.json with changes made automatically by installing vite-plugin-eslint and eslint-config-react-app .'
```

### 3.3.4. Ensure ESLint and TS Work Ok

I had some issues the first time I went through all this:

- 
- 

Had to take a little detour.
For details, see `` in this directory.

#### 3.3.4.1. Generate and fix an ESLint error

#### 3.3.4.2. Generate and fix a TS error


