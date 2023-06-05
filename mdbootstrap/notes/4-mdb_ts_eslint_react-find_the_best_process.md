
# 4-mdb_ts_eslint_react-find_the_best_process.md

The process suggested by support, as noted in `3-suggested_by_support.md`, looks like the best so far.

How can I be sure?

# 0. Review

## 0.1. Commands and Output

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
$ mkdir tmp
$ cd  tmp
$ npm init vite@latest -- --template react-ts      # picking the default Project name: "vite-project" and will rename it later
✔ Project name: … vite-project

Scaffolding project in /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/tmp/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev

$ cd ..
$ mv tmp/vite-project .
$ mv vite-project 4-mdb_ts_eslint_react-find_the_best_process
$ cd  4-mdb_ts_eslint_react-find_the_best_process
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/4-mdb_ts_eslint_react-find_the_best_process
$ npm i mdb-react-ui-kit

added 215 packages, and audited 216 packages in 16s

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

$ npm install

up to date, audited 216 packages in 2s

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run dev

> vite-project@0.0.0 dev
> vite


  VITE v4.3.9  ready in 1115 ms

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

## 0.2. Sanity Checks

- [x] Load into VSCode
  - [x] Confirm there are no issues
- [x] Run `npm run lint`
  - [x] 1. Confirm there are no other issues
  - [x] 2. Flags version of TypeScript as being too recent
- [x] Test linting
  - [x] 1. Add `const test_linting = 'Test Linting';` to `App.tsx`
  - [x] 2. Confirm lint errors show up in VSCode
  - [x] 3. Confirm lint errors show up when running `npm run lint`
  - [x] 4. Delete or comment out the line added so we no longer see these errors
- [x] Test saying "Hi"
  - [x] 1. Add `<h2>Hi!  Bonjour!  Hola!</h2>` to value returned in `function App()` `App.tsx`
  - [x] 2. Confirm this shows up in browser


# 1. Advantages of the `3-suggested_by_support.md` Process

- File extensions are correct
  - No need to rename files, which can cause error messages
- Includes a `.gitignore`
  - Not sure why the other bundles installed by running `mdb init` don't include this
- `vite` beats `npm`
- Linting works, "out of the box"
- `index.html` is in the top-level directory, making it clear that it is where everything starts

# 2. Disadvantages of the `3-suggested_by_support.md` Process

- Takes two steps instead of just the one
  - Yeah that is a bfd, *not!*
- Almost seems to be too easy
  - ;-)
- Installs an unsupported version of TypeScript
  - It is unsupported because it is too new
  - I see no need to worry about this at this time

