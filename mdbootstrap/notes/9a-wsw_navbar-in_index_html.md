
# 9a-wsw_navbar-in_index_html.md

# 1. Goal

- [x] Figure out how to add a navbar to `index.html` that can take us to "mutually exclusive" pages

# 2. Process


- [x] Step 1. Start with the commands run in `whole_shebang/notes/5-whole_shebang_no_cruft.md`
  - These commands initialize a minimal "Hello world"-type project with minimal cruft
  - The project contains our now-standard components:
    - Vite with Reactjs
    - MDB
    - TypeScript
    - ESLint
- [x] Step 2. Review the documentation to see what sort of options we have available
- [x] Step 3. Add standard MDB navbar code to `index.html`
  - At first this does not look at all like what we want!
- [x] Step 4. Refine the navbar code until it looks like what we want
  - What we want is a navbar that can take us to pages that displays "Hello World" in a few different languages
    - Preliminary testing shows this initial result looks less than ideal
  - Each option in the navbar takes us to a different `index-*.html` page
    - Each page displays "Hello World" in a different language
  - **Note:** this is *not* how one would implement support for different languages on a site!
    - In this case, we are using these languages to show how we plan to support *different quiz types*

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


# 4. Add and Refine Standard MDB Navbar Code

## 4.1. Copy-and-Paste Code

Code is here:

- https://mdbootstrap.com/docs/standard/navigation/navbar/

Add it to just after the `<body>` tag in `index.html`.

**Note:** the navbar appears to the left of our "Hello, world".

- This is *unacceptable*

## 4.2. Refine the MDB Navbar Code

Decided that for now we will:

- Keep it as simple as possible, e.g., no responsiveness or collapsing
- Use different languages to simulate different quiz types
  - Each `index-*.html` page will simply display "Hello, world" in the given language

Process:

- [x] 1. Review MDB navbar docs
- [x] 2. Delete unneeded code
  - Decided that for now we just want:
    - Four short options centered at the top of the page
      - Home icon - for the Home page
      - "En" - for English
      - "Es" - for Spanish
      - "Fr" - for French
    - No need to use responsive collapsing options - for now, anyway
- [x] 3. Update each option to load one of these `index-*.html` files:
  - The Home icon option loads `index.html`
  - The "En" option loads `index-en.html` - for content in English
    - `index-en.html` references `main-en.tsx`
    - `main-en.tsx` references `AppEn.tsx`, which displays "Hello, world"
  - The "Es" option loads `index-es.html` - for content in Spanish
    - `index-es.html` references `main-es.tsx`
    - `main-es.tsx` references `AppEs.tsx`, which displays "Hola Mundo"
  - The "Fr" option loads `index-fr.html` - for content in French
    - `index-fr.html` references `main-fr.tsx`
    - `main-fr.tsx` references `AppFr.tsx`, which displays "Bonjour le Monde"

# 5. Common Notes

For notes that apply to both the `9a-wsw_navbar-in_index_html` and `9b-wsw_navbar-in_main_tsx` projects see
`9-wsw_navbar` in this directory.

