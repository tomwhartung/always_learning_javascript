
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

## 2.2. Add the New Project to VSCode

- No problems so far.

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

- The two lint problems now show up in VSCode and on the command line with `npm run lint`

## 2.4. Install Typescript

```
npm install typescript @types/react @types/react-dom --save-dev    # Claims: "up to date, audited 458 packages in 5s" BUT ...
git diff package*                                                  # ... package* files now include typescript ....
git add package*
git commit -m 'Adding the package* files in vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts because they now reference TS.'
```

### 2.4.1. VSCode Check

- The two lint problems continue to show up in VSCode and on the command line with `npm run lint`
- No TS problems, yet

## 2.5. Configure Typescript

Create the two TS config files `tsconfig.json` and `tsconfig.node.json` with the following contents:

```
pwd         # /var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts
cat > tsconfig.json
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
cat > tsconfig.node.json
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

```
pwd                      # /var/www/always_learning/always_learning_javascript
git add vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.*
git commit -m 'Adding config files for TS: vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.* .'
```

### 2.5.1. VSCode Check

- The two lint problems continue to show up in VSCode and on the command line with `npm run lint`
- No TS problems, yet

## 2.6. Rename `*.jsx` Files

Use `F2` to rename files in VSCode:

- `App.jsx` -> `App.tsx`
- `main.jsx` -> `main.tsx`

### 2.6.1. VSCode Check

This caused 4 problems in VSCode.

#### 2.6.1.1. Two "Cannot find module ..." Problems

We have seen these before, and have two ways to fix them:

- "Cannot find module './assets/react.svg' or its corresponding type declarations.",
- "Cannot find module '/vite.svg' or its corresponding type declarations.",

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx",
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
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx",
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

**Not worrying about these right now,** because we know two ways to fix them.

#### 2.6.1.2. The "Argument of type 'HTMLElement | null' is not assignable to ..." Problem

We have seen this before, and can fix it:

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.tsx",
	"owner": "typescript",
	"code": "2345",
	"severity": 8,
	"message": "Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.\n  Type 'null' is not assignable to type 'Element | DocumentFragment'.",
	"source": "ts",
	"startLineNumber": 6,
	"startColumn": 21,
	"endLineNumber": 6,
	"endColumn": 52
}]
```

**Not worrying about this right now,** because we know how to fix this.

#### 2.6.1.3. A New "No inputs were found in config file ..." Problem

```
[{
	"resource": "/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.node.json",
	"owner": "typescript",
	"severity": 8,
	"message": "No inputs were found in config file '/var/www/always_learning/always_learning_javascript/vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/tsconfig.node.json'. Specified 'include' paths were '[\"vite.config.ts\"]' and 'exclude' paths were '[]'.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]
```

**Not worrying about this error right now,** because editing `index.html` fixes it

### 2.6.2. Command Line Check: `npm run lint`

Installing TS broke lint:

```
$ npm run lint

> ts_eslint_react-1-react_eslint_ts@0.0.0 lint
> eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0


Oops! Something went wrong! :(

ESLint: 8.40.0

No files matching the pattern "src" were found.
Please check for typing mistakes in the pattern.

$
```

**Not worrying about these right now,** because editing `index.html` is a big part of this step, and it just might change things.

## 2.7. Edit `index.html`

Using VSCode to edit `index.html`.

- Changed `main.jsx` to `main.tsx`

### 2.7.1. VSCode Check

- This fixed the *"2.6.1.3. A New "No inputs were found in config file ..."* problem
- The other three problems remain

### 2.7.2. Command Line Check: `npm run lint`

Running `npm run lint` is still broken.

### 2.8.2. Updating Git

Renaming the files in VSCode kind of messed up my github!

```
$ git status
. . .
        deleted:    vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.jsx
        deleted:    vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.jsx
. . .
Untracked files:
. . .
        vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/App.tsx
        vite/projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts/src/main.tsx
. . .
$
```

#### 2.8.2. Saved Copies of Original `*.jsx` Files as `*.jsx-before_renaming`

```
git checkout App.jsx                     # Get old copy before VSCode "deleted" it
diff App.jsx App.tsx                     # Sanity check: no differences
git mv App.jsx App.jsx-before_renaming
git checkout main.jsx                    # Get old copy before VSCode "deleted" it
diff main.jsx main.tsx                   # Sanity check: no differences
git mv main.jsx main.jsx-before_renaming
git commit ....                          # Inadvertently checked in with other changes
```

#### 2.8.3. Just FYI ...:

Using the `*.jsx-before_renaming` files to recreate the `*.jsx` files, like so:

```
cp main.jsx-before_renaming  main.jsx
cp App.jsx-before_renaming App.jsx
```

Doesn't help to fix the problems.

- There's no going back!


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
You are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


## 2.9. Fixing the Problems


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


## 2.10. Ensure App Runs OK

```
```

```
```

### 2.10.1. VSCode Check

### 2.10.2. Command Line Check: `npm run lint`

```
```

