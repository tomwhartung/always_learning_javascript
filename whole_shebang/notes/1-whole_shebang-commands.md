
# 1-whole_shebang-commands.md

A list of commands I can run to initialize a minimal "Hello world"-type project with the components I want to use.

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

This is the end of this step, so consider updating git at this point.

## 2.3. Add MDB, Font Awesome, and Google Fonts Roboto

Reference:

- [MDB Download and Setup Page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/)


### 2.3.2. Update `index.html`:

Add the code in the following code box to `index.html`.
Inside the `<head>...</head>` element and just before the `<title>...` tag is a good place.

```
    <!-- MDB icon -->
    <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
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
```

This is the end of this step, so consider updating git at this point.

**Note:** the path above for `mdb.min.css` differs from that used in the reference.
For details, see the subsection *"2.4. Optional: Consolidate `*.css` Files Into a Single Directory"* below.

## 2.4. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode

This is the end of this step and successful completion indicates a stable setup, so *definitely* consider updating git here.

## 2.4. Optional: Cleanup Soon-to-Be-Cruft

I see no need to do this when I'm just messing around learning stuff.
But if I want to get serious I should consider:

- Deleting the following files, and
- Removing all references to them from `src/App.tsx`

```
public/vite.svg
src/assets/react.svg
```

## 2.5. Optional: Consolidate `*.css` Files Into a Single Directory

Before doing this, be sure to see section "3. Folder Organization and Other Tips" below.

### 2.5.1. Copy or Link `/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css` to `css/mdb.min.css`??

The [MDB Download and Setup Page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/) offers the
following example code for loading  the `mdb.min.css` file:

```
<link rel="stylesheet" href="css/mdb.min.css" />
```

Meanwhile, the little sample app mixes the `.css` files in with the others under `src/`:

```
$ l  src/*.css
-rw-r--r-- 1 tomh tomh  606 Jun 19 13:56 src/App.css
-rw-r--r-- 1 tomh tomh 1195 Jun 19 13:56 src/index.css
$ l  src/*.*
-rw-r--r-- 1 tomh tomh  606 Jun 19 13:56 src/App.css
-rw-r--r-- 1 tomh tomh  905 Jun 19 13:56 src/App.tsx
-rw-r--r-- 1 tomh tomh 1195 Jun 19 13:56 src/index.css
-rw-r--r-- 1 tomh tomh  250 Jun 19 13:56 src/main.tsx
-rw-r--r-- 1 tomh tomh   38 Jun 19 13:56 src/vite-env.d.ts
$
```

So ..., well I'm not sure what to think about that!

# 3. Folder Organization and Other Tips

Here are some links to blog posts about this:

- [Tips for Organizing React Projects](https://dev.to/chrisachard/tips-for-organizing-react-projects-191)
  - In item 8 he says to store `*.css` files with the components that use them
    - [This post](https://scrimba.com/articles/react-project-structure/) has an example of how that might look
  - However the first tip probably has the best overall advice:

> "First, and above all else: do what works for you and your team.
> There is a lot of advice out there, and much of it conflicts.
> Don't feel anxiety about not doing it "the right way".
> If it works for you and your team - then that is the "right way".

- This post about [React Architecture](https://www.taniarascia.com/react-architecture-directory-structure/):
  - Also has some thoughts I might want to look at some day once things get *really* complicated...
- And here's one about a [better way](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)


# 3. *"The Whole Shebang"* Step-by-Step

Tracing back to where these commands come from, what they do, and why we run them.

## 3.1. Vite + Reactjs

- For an overview, see section *"1. Start With React"* in `vite/notes/2-rtr-typescript_in_react.md`
- For details, see section *"2. Setting up `vite` + `react"* in `vite/notes/1-rtr-fundamentals_of_react.md`

Commands:

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
npm create vite@latest <project-name> -- --template react    # Initialize a React project named "<project-name>"
cd <project-name>                                            # Change into the project's directory
npm install                                                  # Install dependencies
npm run dev                                                  # Run "Hello-world"-type program using React
```

## 3.2. Add ESLint

- For an overview, see section *"2. Add ESLint"* in `vite/notes/2-rtr-typescript_in_react.md`
- For details, see section *"4. Linting with ESLint"* in `vite/notes/1-rtr-fundamentals_of_react.md`

Commands:

```
npm install vite-plugin-eslint --save-dev         # install vite-plugin-eslint
npm install eslint --save-dev                     # install eslint dependencies **MAY HAVE MISSED THIS IN PREVIOUS EFFORTS**
npm install eslint-config-react-app --save-dev    # install eslint-config-react-app
npm run dev                                       # make sure it still runs ok
cat .eslintrc.cjs                                 # ensure it's there and makes sense
```

Commands to update git:

```
git diff package-lock.json                        # wow that is a lot of changes
git add package-lock.json
git commit -m 'package-lock.json updated by installing eslint.'
git diff package.json                             # just a few changes
git add package.json
git commit -m 'package.json updated by installing eslint.'
```

## 3.3. Add TypeScript

See section *"3. Add and Setup TypeScript"* in `vite/notes/2-rtr-typescript_in_react.md` in this repo.

### 3.3.1. Install TS

For details, see subsection *"3.1. Install TypeScript"* in `vite/notes/2-rtr-typescript_in_react.md` in this repo.

Command:

```
npm install typescript @types/react @types/react-dom --save-dev   # install typescript
```

### 3.3.2. Add TS Config Files

For details, see subsection *"3.2. Configure TypeScript"* in `vite/notes/2-rtr-typescript_in_react.md` in this repo.

Commands:

```
cat > tsconfig.node.json       # default contents appear in the next code box below
cat > tsconfig.json            # default contents appear in the next code box below
```

Contents of `tsconfig.*` files:

```
$ cat tsconfig.json
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
$ cat tsconfig.node.json
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

Commands to update git:

```
git add package-lock.json
git commit -m 'Updating package-lock.json with changes made by installing typescript.'
git diff package.json
git add package.json
git commit -m 'Updating vite/projects/2-rtr-typescript_in_react/ts_in_react-1/package.json with changes made by installing typescript.'
```

### 3.3.3. Rename and Edit Source Files

For details, see subsection *"3.3. Rename and Edit Source Files"* in `vite/notes/2-rtr-typescript_in_react.md` in this repo.

Commands to rename the `src/*.jsx` source files:

```
git mv src/App.jsx src/App.tsx
git commit -m 'Renaming src/App.jsx to src/App.tsx .'
git mv src/main.jsx src/main.tsx
git commit -m 'Renaming src/main.jsx to src/main.tsx .'
```

Command to edit `index.html`:

```
vi index.html         # change "main.jsx" on line 11 to "main.tsx"
git add index.html
git commit -m 'Changed "main.jsx" to "main.tsx" on line 11 of index.html .'
```

### 3.3.4. Ensure App Still Runs Ok

Commands to ensure app still runs ok:

```
npm run         # check that available commands include dev, build, lint, and preview
npm run build   # build the app
npm run dev     # run the app in a browser window
```

### 3.3.5. Optional: Ensure ESLint and TS Work Ok

## 3.4. Add MDB

See `vite/notes/XXX.md` in this repo.

Commands:

```
```


