
# 5-whole_shebang_no_cruft.md

- Commands run in `1-whole_shebang` to initialize a minimal "Hello world"-type project using:
  - Vite with Reactjs
  - MDB
  - TypeScript
  - ESLint
- A Navbar that can take us to pages that say "Hello World" in a few different languages

# 1. Commands to Create *"The Whole Shebang"*

**Note:** this summary omits git commands.  You are on your own there!

## 1.1. Optional: Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

## 1.2. Create New Project Using Vite, React, TypeScript, and MDB

```
pwd                                            # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
npm init vite@latest -- --template react-ts    # Use '5-whole_shebang_no_cruft' for the [project_name]
cd 5-whole_shebang_no_cruft
npm i mdb-react-ui-kit
npm run lint
npm run dev
```

## 1.3. Add MDB, Font Awesome, Google Fonts Roboto, and Copy Over `src/favicon.ico`

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
diff 1-whole_shebang/index.html 5-whole_shebang_no_cruft/index.html
cp 1-whole_shebang/index.html 5-whole_shebang_no_cruft/index.html
```

Copy over the `src/favicon.ico` file, which is referenced in `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/
cp 1-whole_shebang/src/favicon.ico 5-whole_shebang_no_cruft/src/
```

## 1.4. Cleanup Cruft

### 1.4.1. Cleanup Logo Cruft

- [x] Remove all references to `public/vite.svg` and `src/assets/react.svg` from `index.html` and `src/App.tsx`
  - [x] Should be no references in `index.html`
  - [x] Remove all `import` lines from `src/App.tsx` that reference "react" and "svg" files
  - [x] Remove all code from the App component in `src/App.tsx` except that which returns "<h1>Hello, world</h1>"

```
grep svg index.html src/*.*
vi src/App.tsx                # See notes above
```

- [x] Delete `public/vite.svg` and `src/assets/react.svg`
  - **Note:** If files already checked into git, use `git rm`

```
rm public/vite.svg src/assets/react.svg
### **************************************
### OR, IF FILES ALREADY CHECKED INTO GIT:
### **************************************
git rm public/vite.svg src/assets/react.svg
```

### 1.4.2. Cleanup CSS Cruft

- Delete everything from `src/App.css` *except* the first rule defining styles for `#root`


## 1.5. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

## 1.6. Update github

This is the end of this process, and successful completion indicates we are ready to make some customizations,
so if using git, commit this project now.

# 2. MDB Basics

- At some place near the top level we need to have a `container`
  - The `container` needs to have one or more `row`s
  - Each `row` needs to have one or more `col`s
  - In most apps, each `col` probably should have a `card`

