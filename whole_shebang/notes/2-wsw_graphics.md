
# 2-wsw_graphics.md

This file includes:

- Commands run in `1-whole_shebang` to initialize a minimal "Hello world"-type project using:
  - Vite with Reactjs
  - MDB
  - TypeScript
  - ESLint
- Commands I can run to initialize a project with a minimal `Canvas` component
  - These come from `mdn/projects/5-the_simplest_canvas` in the `always_learning_computer_graphics` repo

# 1. Commands to Create *"The Whole Shebang"*

**Note:** this summary omits git commands.  You are on your own there!

## 1.1. Optional: Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

Result: `removed 17 packages, and changed 72 packages in 12s`.

## 1.2. Create New Project Using Vite, React, TypeScript, and MDB

```
pwd                                            # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
npm init vite@latest -- --template react-ts    # Use '2-wsw_graphics' for the [project_name]
cd 2-wsw_graphics
npm i mdb-react-ui-kit
npm run dev
```

This is the end of the first step, so consider updating git at this point.

## 1.3. Add MDB, Font Awesome, and Google Fonts Roboto

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/2-wsw_graphics
diff /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/index.html index.html
cp /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/index.html index.html
```

This is the end of the second step, so consider updating git at this point.

## 1.4. Add Graphics Code

```
pwd     # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/2-wsw_graphics/src
diff /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/src/App.tsx App.tsx
cp /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/src/App.tsx .
cp /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/src/Canvas.tsx .
grep svg index.html src/*.*
```

## 1.5. Cleanup Cruft:

```
cd ..
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/2-wsw_graphics
rm public/vite.svg        # If this file is in git, use 'git rm public/vite.svg'!!
rm src/assets/react.svg   # If is file is in git, use 'git rm src/assets/react.svg'!!
l */*.svg                 # Should display "ls: cannot access '*/*.svg': No such file or directory"
l */*/*.svg               # Should display "ls: cannot access '*/*/*.svg': No such file or directory"
```

## 1.6. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

## 1.7. Update github

This is the end of this process, and successful completion indicates we are ready to make some customizations,
so *definitely* update git here!

