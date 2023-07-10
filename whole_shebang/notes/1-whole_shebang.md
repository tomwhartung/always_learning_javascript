
# 1-whole_shebang.md

This file includes:

- Commands I can run to initialize a minimal "Hello world"-type project with the components I want to use
  - Add MDB, Font Awesome, and Google Fonts Roboto to `index.html`
- Commands to make standard updates to what is installed by default
  - Cleanup cruft: `*.svg` files, etc.
  - Update the favicon and `<title...` tag
- Sanity checks to run before updating github
- Some basics about working with MDB
  - Specifically, at minimum we *probably* want a container with at least one row and at least one column with a card

# 1. Components in *"The Whole Shebang"*

These are the components I am currently planning to use when starting a new project:

- Vite with Reactjs
- MDB
- TypeScript
- ESLint

# 2. Commands to Create *"The Whole Shebang"*

**Note:** this summary omits git commands.  You are on your own there!

## 2.1. Optional: Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

## 2.2. Create New Project Using Vite, React, TypeScript, and MDB

Prerequisites:

- cd [into the directory in which you want to work on the project]
- Think of a good [project_name] for the project

```
npm init vite@latest -- --template react-ts    # *Note:* asks for a [project_name]
cd [project_name]
npm i mdb-react-ui-kit
npm run dev
```

This is the end of the first step, so consider updating git at this point.

## 2.3. Add MDB, Font Awesome, and Google Fonts Roboto

Reference:

- [MDB Download and Setup Page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/)


### 2.3.1. Update `index.html`:

Add the code in the following code box to `index.html`.
Inside the `<head>...</head>` element, being sure to replace the existing `<title>...` tag, is a good place.

```
<!-- Font Awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
<!-- Google Fonts Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
/>
<!-- MDB -->
<link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
<!-- Groja icon -->
<link rel="icon" href="/src/favicon.ico" type="image/x-icon" />
<title>My Title Here</title>
```

This is the end of the second step, so consider updating git at this point.

- **Note:** the path above for `mdb.min.css` differs from that used in the reference.

For details, see the section *"2. Folder Organization and Other Tips I Haven't Tried Yet"*
in the file `whole_shebang/TODO-maybe-reorganization_tips.md`.

## 2.4. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

This is the end of the third step and we now have a stable setup, so *definitely* consider updating git here.

## 2.5. Optional: Cleanup Soon-to-Be-Cruft

I see no need to do this when I'm just messing around learning stuff.
But if I want to get serious I should consider:

- Deleting the following files, and
- Removing all references to them from `index.html` and `src/App.tsx`

```
public/vite.svg
src/assets/react.svg
```

```
grep svg index.html src/*.*
```

## 2.6. Update github

This is the end of this process, and successful completion indicates we are ready to make some customizations,
so *definitely* consider updating git here!

# 3. MDB Basics

- At some place near the top level we need to have a `container`
  - The `container` needs to have one or more `row`s
  - Each `row` needs to have one or more `col`s
  - In most apps, each `col` probably should have a `card`

