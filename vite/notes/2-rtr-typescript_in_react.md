
# 2-rtr-typescript_in_react.md

Notes from the section *Typescript in React* in the chapter *React Maintenance* in the *Road to React* e-book.

# TypeScript in React

Adding TypeScript to React has several advantages:

- Shortens the feedback loop
- Makes it easier to reorganize and refactor code
- Improves developer experience

# 1. TypeScript Setup

## 1.1. Start With React

Running the following commands, which are adapted from section *2. Install everything on your local machine*
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
