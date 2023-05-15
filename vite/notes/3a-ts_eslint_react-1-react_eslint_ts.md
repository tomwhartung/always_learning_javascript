
# 3a-ts_eslint_react-1-react_eslint_ts.md

This is the first experiment our quest to *find the best process* to use for building *"the whole shebang."*

# 1. Questions

- Does installing TS break ESLint?
- Will the suggested `npm install ...` command fix the VSCode problems?
- 

# 2. Process

These commands come from `2-rtr-typescript_in_react.md`.

- Sometimes we do things a little differently, though

## 2.1. Start With React

```
pwd                        # /var/www/always_learning/always_learning_javascript/vite/projects
mkdir 3-ts_eslint_react-find_the_best_process
cd 3-ts_eslint_react-find_the_best_process
npm create vite@latest ts_eslint_react-1-react_eslint_ts -- --template react
cd ts_eslint_react-1-react_eslint_ts
npm install
npm run dev
```

**Note:** running lint at this point works ok:

```
$ npm run lint

> ts_eslint_react-1-react_eslint_ts@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.jsx
  12:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  15:9  error  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.

$
```

## 2.2. Add to VSCode

No problems so far.

**Note:** We need to install ESLint before we can run `lint` in VSCode; see *"2.3.1. VSCode Check"* below.

## 2.3. Add ESLint

```
pwd                                               # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts
npm install vite-plugin-eslint --save-dev         # From RTR: install vite-plugin-eslint
                                                  # NEW - kinda sorta...
npm install eslint --save-dev                     # From RTR but missed previously; see "4.1.1.3.2. Solutions Tried" in 2a-rtr-typescript_in_react-troubleshooting.md
                                                  # Might be an unneeded step: "up to date, audited 249 packages in 3s"
npm install eslint-config-react-app --save-dev    # From RTR: install eslint-config-react-app
npm run dev                                       # make sure it still runs ok
cat .eslintrc.cjs                                 # ensure it's there and makes sense
npm run lint                                      # make sure it still finds our two lint issues
```

Check the new project's files in to github:

```
pwd              # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/
git commit -m 'Adding new experimental project files in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/ .'
```

### 2.3.1. VSCode Check

The two lint problems now show up in VSCode.


```
```


