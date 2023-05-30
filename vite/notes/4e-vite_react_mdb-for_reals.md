
# 4e-vite_react_mdb-for_reals.md

Figuring out how to get vite, mdbootstrap, React and Typescript, and ideally ESLint all installed and working nicely.

# 0. Project Directory

The project directories for these notes is `vite/projects/4-my_mdb_adventure/5-vite_react_mdb-for_reals`.

# 1. Try Starting With `mdb5-free-standard-vite`

Possibly the closest option.  Start with it, then try adding what I need.

**Spoiler Alert:** this did not work!  Details follow....

## 1.1. Installing `mdb5-free-standard-vite`

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure
$ mdb init
? Choose project to initialize mdb5-free-standard-vite
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/mdb5-free-standard-vite folder
Success Download completed.
$ mv mdb5-free-standard-vite 5-vite_react_mdb-for_reals
$ cd  5-vite_react_mdb-for_reals
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/5-vite_react_mdb-for_reals
$ npm install

added 673 packages, and audited 674 packages in 1m

84 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$
```

**VSCode Check:** Everything looks ok!

### 1.1.1. What `mdb5-free-standard-vite` Contains

MDB's [Vite Integration page](https://mdbootstrap.com/docs/standard/getting-started/vite-integration/)
lists the following features in this package:

- Bundling via Vite v3.1.0
- ES6+ Support via babel-cli v7.18.10
- SASS Support via sass v1.54.8
- Linting via eslint-webpack-plugin v3.2.0
- Unit Testing via Jest v29.0.2
- Code Formatting via Prettier v2.7.1
- Unused CSS removed via PurgeCSS v5.0.0
- Deploy via MDB CLI latest version

**Note:** looks good, **but** React and TS are missing from this list!

## 1.2. Use `mdb init` to Add React

Try running `mdb init` a *second* time in this directory:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4e-mdb_cli-mdb_advanced_features
$ mdb init
? Choose project to initialize mdb5-free-react
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/5-vite_react_mdb-for_reals/mdb5-free-react folder
Success Download completed.

$
```

*Of course* this did not work, and I feel a bit silly for even trying it.

# 2. Abandoning Vite

I see no way around it: if I want to use MDB and React, much less TS and Lint, I need to abandon Vite, at least for the time being.

- *Rats!*

