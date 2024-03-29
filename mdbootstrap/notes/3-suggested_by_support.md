
# 3-suggested_by_support.md

Asked MDB Support how to get vite, mdbootstrap, React and Typescript, and ideally ESLint all installed and working nicely,
and got a suggestion!

This file is all about trying out that suggestion.

# 1. Project Directory

The project directory for these notes is `mdbootstrap/projects/3-suggested_by_support`.

# 2. Process

## 2.1. Commands and Output

This is a little screwy because I had never done this before and did not know it would create a new directory for me.

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
$ mkdir 3-suggested_by_support
 $ cd  3-suggested_by_support
 $ npm init vite@latest -- --template react-ts
Need to install the following packages:
  create-vite@4.3.2
Ok to proceed? (y) y
✔ Project name: … vite-project

Scaffolding project in /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/3-suggested_by_support/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev

$ l
total 4
drwxr-xr-x 4 tomh tomh 4096 Jun  2 18:02 vite-project
$ l vite-project/
total 36
-rw-r--r-- 1 tomh tomh  391 Jun  2 18:02 .eslintrc.cjs
-rw-r--r-- 1 tomh tomh  253 Jun  2 18:02 .gitignore
-rw-r--r-- 1 tomh tomh  366 Jun  2 18:02 index.html
-rw-r--r-- 1 tomh tomh  751 Jun  2 18:02 package.json
drwxr-xr-x 2 tomh tomh 4096 Jun  2 18:02 public
drwxr-xr-x 3 tomh tomh 4096 Jun  2 18:02 src
-rw-r--r-- 1 tomh tomh  605 Jun  2 18:02 tsconfig.json
-rw-r--r-- 1 tomh tomh  213 Jun  2 18:02 tsconfig.node.json
-rw-r--r-- 1 tomh tomh  163 Jun  2 18:02 vite.config.ts
$ cd ..
$ mv 3-suggested_by_support tmp
$ mv  tmp/vite-project  tmp/3-suggested_by_support
$ mv  tmp/3-suggested_by_support .
$ rmdir tmp/
$ cd 3-suggested_by_support/
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/3-suggested_by_support
$ npm i mdb-react-ui-kit

added 215 packages, and audited 216 packages in 29s

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm install

up to date, audited 216 packages in 2s

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run
Scripts available in vite-project@0.0.0 via `npm run-script`:
  dev
    vite
  build
    tsc && vite build
  lint
    eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0
  preview
    vite preview
$ npm run dev

  VITE v4.3.9  ready in 1222 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[q]
$
```

## 2.2. Sanity Checks Part 1

**VSCode Check**

Everything looks ok!

**App runs ok!**

# 3. Assessment

- Looks like the Vite + React App from "long ago", before I started messing with MDB
  - Focus of the web page that is displayed is on Vite + React
- Seeing eslint in *both* `package-lock.json` *and* in `package.json`
- Seeing typescript in *both* `package-lock.json` *and* in `package.json`

## 3.1. Relevant Files

These are files that I *might* want to change when writing my app:

- `.gitignore` - *YES!!*
- `src/App.css`
- `src/App.tsx
- `src/index.css
- `src/main.tsx`

**YES!** Finally seeing `.tsx` files, that btw feature the TS and JSX I have been studying about for the past few weeks!!

## 3.2. Sanity Checks Part 2

- [x] Edit `src/App.tsx` to say "Hi"
- [x] Test Linting
  - Add this line to `src/App.js`:
    - `const test_linting = 'Test Linting';`
  - [x] Check for warning in VSCode
  - [x] Check for warning in terminal when running `npm lint`
    - This flags the error *and* displays another interesting message as well - see code box below

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/3-suggested_by_support
$ npm run lint

> vite-project@0.0.0 lint
> eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0

=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.1.0

YOUR TYPESCRIPT VERSION: 5.1.3

Please only submit bug reports when using the officially supported version.

=============

/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/3-suggested_by_support/src/App.tsx
  6:7  warning  'test_linting' is assigned a value but never used  @typescript-eslint/no-unused-vars

✖ 1 problem (0 errors, 1 warning)

ESLint found too many warnings (maximum: 0).
$
```

