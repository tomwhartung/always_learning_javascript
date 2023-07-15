
# 9a-wsw_navbar-in_index_html.md

# 1. Goal

- [ ] Decide whether it is best to add the navbar code to `index.html` or `src/main.tsx`

# 2. Process

- Step 1. Start with the commands run in `whole_shebang/notes/5-whole_shebang_no_cruft.md`
  - These commands initialize a minimal "Hello world"-type project with minimal cruft
  - The project contains our now-standard components:
    - Vite with Reactjs
    - MDB
    - TypeScript
    - ESLint
- Step 2. Add a Navbar that can take us to pages that say "Hello World" in a few different languages
  - In this project, we add the navbar to `src/main.tsx`
  - Preliminary testing shows this initial result looks less than ideal
- Step 3. Review the documentation and refine the navbar code until it looks like what we want

# 3. Commands to Create a Cruft-less "Hello world" App

These come from `whole_shebang/notes/5-whole_shebang_no_cruft.md` in this repo.

## 3.1. Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

## 3.2. Create New Project Using Vite, React, TypeScript, and MDB

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
npm init vite@latest -- --template react-ts    # Use '9a-wsw_navbar-in_index_html' for the [project_name]
cd 9a-wsw_navbar-in_index_html
npm i mdb-react-ui-kit
npm run lint
npm run dev
```

## 3.3. Add MDB, Font Awesome, and Google Fonts Roboto

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/index.html 9a-wsw_navbar-in_index_html/index.html
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/index.html 9a-wsw_navbar-in_index_html/index.html
```

## 3.4. Sanity Checks Part 1

- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run dev` inside the `9a-wsw_navbar-in_index_html` directory
  - [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

## 3.5. Cleanup Cruft

It's easiest to do this by copying files from `whole_shebang/projects/5-whole_shebang_no_cruft`.

- For details, see `whole_shebang/notes/5-whole_shebang_no_cruft.md`

### 3.5.1. Cleanup Logo Cruft

- [x] Remove all references to `public/vite.svg` and `src/assets/react.svg` from `index.html` and `src/App.tsx`

Diff and copy `App.tsx` and `App.css`:

```
pwd        # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.tsx 9a-wsw_navbar-in_index_html/src/App.tsx
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.tsx 9a-wsw_navbar-in_index_html/src/App.tsx
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.css 9a-wsw_navbar-in_index_html/src/App.css
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.css 9a-wsw_navbar-in_index_html/src/App.css
```

Check and remove `*.svg` files:

```
cd 9a-wsw_navbar-in_index_html
pwd                                    # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/9a-wsw_navbar-in_index_html
grep svg index.html src/*.*            # Should be no occurrences
grep logo index.html src/*.*           # Should be no occurrences
rm public/vite.svg src/assets/react.svg
```

## 3.6. Sanity Checks Part 2

- [x] Run `npm run lint` inside the `9a-wsw_navbar-in_index_html` directory
- [x] Run `npm run dev` inside the `9a-wsw_navbar-in_index_html` directory
- [x] Check for problems in VSCode
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

## 3.7. Update github

Update git now, before changing anything else.

# 4. Add MDB Navbar

Code is here:

- https://mdbootstrap.com/docs/standard/navigation/navbar/

