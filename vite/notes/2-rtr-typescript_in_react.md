
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



# 3. TypeScript Setup

