
# 2-react-using_mdb_cli.md

Figuring out how to get vite, mdbootstrap, React and Typescript, and ideally ESLint all installed and working nicely.

# 0. Been Here, Done This

We are re-doing what we already did in `vite/notes/4d-4-mdb_go.md` and `vite/notes/4e-vite_react_mdb-for_reals.md`.
For details, see those files, especially `vite/notes/4d-4-mdb_go.md`.

# 1. Project Directory

The project directory for these notes is `mdbootstrap/projects/2-react-using_mdb_cli`.

# 2. Using `mdb init`

## 2.1. Installing `mdb5-free-react`

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
 $ mdb init
? Choose project to initialize mdb5-free-react
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/mdb5-free-react folder
Success Download completed.
$ mv mdb5-free-react 2-react-using_mdb_cli
$ cd  2-react-using_mdb_cli
$ pwd
$ npm install
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects/2-react-using_mdb_cli
 $ npm install
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

added 1445 packages, and audited 1446 packages in 1m

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

## 2.2. Sanity Checks Part 1

**VSCode Check**

Everything looks ok!

**App runs ok!**

# 3. Assessment

- Looks like a regular MDB app
  - Focus of the web page that is displayed is on MDB
- Seeing eslint in `package-lock.json` but *not* in `package.json`
- Seeing typescript in `package-lock.json` but *not* in `package.json`

## 3.1. Relevant Files

These are files that I *might* want to change when writing my app:

- `public/index.html`
- `src/App.js`
- `src/index.css`
- `src/index.js`

## 3.2. Sanity Checks Part 2

- [x] Edit `src/App.js` to say "Hi"
- [x] Test Linting
  - Add this line to `src/App.js`:
    - `const test_linting = 'Test Linting';`
  - [x] Check for warning in VSCode
    - [!] **Not** seeing this warning!
  - [x] Check for warning in terminal running `npm start`
    - [!] **Not** seeing this warning!

