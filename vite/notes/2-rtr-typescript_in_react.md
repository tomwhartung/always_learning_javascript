
# 2-rtr-typescript_in_react.md

Notes from the section *Typescript in React* in the chapter *React Maintenance* in the *Road to React* e-book.

# TypeScript in React

Adding TypeScript to React has several advantages:

- Shortens the feedback loop
- Makes it easier to reorganize and refactor code
- Improves developer experience


# 1. Start With React

Running the following commands, which are adapted from section *"2. Setting up `vite` + `react`"*
in `./1-rtr-fundamentals_of_react.md`:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ mkdir 2-rtr-typescript_in_react
$ l
total 12
-rw-r--r-- 1 tomh tomh  881 Apr 25 13:05 .gitignore
drwxr-xr-x 3 tomh tomh 4096 Apr 26 13:16 1-rtr-fundamentals_of_react
drwxr-xr-x 2 tomh tomh 4096 Apr 30 17:05 2-rtr-typescript_in_react
$ cd 2-rtr-typescript_in_react/
$ l
total 0
$ npm create vite@latest ts_in_react-1 -- --template react

Scaffolding project in /var/www/always_learning/always_learning_javascript/vite/projects/2-rtr-typescript_in_react/ts_in_react-1...

Done. Now run:

  cd ts_in_react-1
  npm install
  npm run dev

$ l
$ total 4
drwxr-xr-x 4 tomh tomh 4096 Apr 30 17:10 ts_in_react-1
$ cd ts_in_react-1
$ npm install

added 240 packages, and audited 241 packages in 20s

81 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$
```

# 2. Add ESLint

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

# 3. Add and Setup TypeScript

**Note:** subsequent sections contain more details - e.g. output from commands - because we have not yet performed these steps, and
actually running these is *the main point of this project.*

## 3.1. Install TypeScript

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

## 3.2. Configure TypeScript

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

## 3.3. Rename and Edit Source Files, and Ensure App Builds and Runs Ok

These steps are from the subsection *"TypeScript in React"* in chapter *"React Mantenance"* of the
book *"The Road to React"*.

### 3.3.1. Rename and Edit `src/*.jsx` Source Files

Run the following commands to **rename the `*.jsx` files to `*.tsx:**

```
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx
gc 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/App.tsx .'
git mv vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.jsx vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.tsx
gc 'Renaming vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.jsx to vite/projects/2-rtr-typescript_in_react/ts_in_react-1/src/main.tsx .'
```

### 3.3.2. Edit `index.html`

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

### 3.3.3. Ensure App Builds and Runs Ok

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


