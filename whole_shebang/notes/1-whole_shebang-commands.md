
# 1-whole_shebang-commands.md

A list of commands I can run to initialize a minimal "Hello world"-type project with the components I want to use.

# 1. Components in *"The Whole Shebang"*

These are the components I am currently planning to use when starting a new project:

- Vite with Reactjs
- ESLint
- TypeScript
- MDB

# 2. Commands to Create *"The Whole Shebang"*

**Note:** this summary omits git commands, but those are included below in section *"3. *"The Whole Shebang"* Step-by-Step".*

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
npm create vite@latest <project-name> -- --template react    # Initialize a React project named "<project-name>"
cd <project-name>                                            # Change into the project's directory
npm install                                                  # Install dependencies
npm run dev                                                  # Run "Hello-world"-type template program using React, type "q" to exit

# End of this step; consider updating git here; see below for specific commands

npm install vite-plugin-eslint --save-dev         # install vite-plugin-eslint
npm install eslint-config-react-app --save-dev    # install eslint-config-react-app
npm run dev                                       # make sure it still runs ok
cat .eslintrc.cjs                                 # ensure it's there and makes sense

# End of this step; consider updating git here; see below for specific commands

npm install typescript @types/react @types/react-dom --save-dev   # install typescript
cat > tsconfig.json                                               # default contents appear below
cat > tsconfig.node.json                                          # default contents appear below


# End of this step; consider updating git here; see below for specific commands

```

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


## 3.4. Add MDB

See `vite/notes/XXX.md` in this repo.

Commands:

```
```


