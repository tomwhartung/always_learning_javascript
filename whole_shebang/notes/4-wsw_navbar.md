
# 4-wsw_navbar.md

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
npm init vite@latest -- --template react-ts    # Use '4-wsw_navbar' for the [project_name]
cd 4-wsw_navbar
npm i mdb-react-ui-kit
npm run lint
npm run dev
```

## 1.3. Add MDB, Font Awesome, and Google Fonts Roboto

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
diff 1-whole_shebang/index.html 4-wsw_navbar/index.html
cp 1-whole_shebang/index.html 4-wsw_navbar/index.html
```

## 1.4. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

If using git, commit this project now.

## 1.5. Cleanup Cruft

### 1.5.1. Cleanup Logo Cruft

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

### 1.5.2. Cleanup CSS Cruft

- Delete everything from `src/App.css` *except* the first rule defining styles for `#root`

## 1.6. Update github

Update git now, before changing anything else.

# 2. Add MDB Navbars

## 2.1. Install `react-router-dom`

One of our Navbars use the `react-router-dom` package, so run the following command to install that.

```
npm install react-router-dom --save            # New, as of the 9b-wsw_navbar-in_main_tsx subproject!
```

