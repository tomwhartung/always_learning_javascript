
# 1-notes.md

# 1. TS Introduction

## 1.1. What is TypeScript?

TypeScript is a *"Syntactic Superset"* of JavaScript: it includes all of JavaScript and adds **types.**

## 1.2. Why Should I Use TypeScript?

TypeScript can help find logic errors in code that regular JavaScript that will not report.

For example, if a function is defined as needing a number, but is passed a string, TypeScript will report an error.

**Note:** TypeScript checks code at *compile time* rather than when it is running.

## 1.3. How Do I Use TypeScript?

Using the *official TypeScript compiler.*

# 2. TS Get Started

## 2.1. TypeScript Compiler

The TypeScript Compiler *transpiles* TypeScript into JavaScript.

## 2.2. Installing the Compiler

I used these commands to use `npm` to create a new React project and ensure it will run ok:

```
$ pwd                         # /var/www/always_learning/always_learning_javascript/typescript/projects
$ npx create-react-app my-first_typescript-app
$ cd my-first_typescript-app
$ npm run start               # so far, so good!
```

I used these commands to install TypeScript, and am including *all* of the command's output, for possible future reference:

```
$ pwd                         # /var/www/always_learning/always_learning_javascript/typescript/projects/my-first_typescript-app
$ npm install typescript --save-dev
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: my-first_typescript-app@0.1.0
npm WARN Found: typescript@4.9.5
npm WARN node_modules/typescript
npm WARN   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm WARN   node_modules/fork-ts-checker-webpack-plugin
npm WARN     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm WARN     node_modules/react-dev-utils
npm WARN   3 more (react-scripts, tsutils, the root project)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm WARN node_modules/react-scripts
npm WARN   react-scripts@"5.0.1" from the root project

changed 1 package, and audited 1485 packages in 11s

233 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

I ran this command to run TypeScript, and am including *all* of the command's output, for possible future reference:

```
$ npx tsc
Version 5.0.3
tsc: The TypeScript Compiler - Version 5.0.3
                                                                                                                     TS
COMMON COMMANDS

  tsc
  Compiles the current project (tsconfig.json in the working directory.)

  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.

  tsc -b
  Build a composite project in the working directory.

  tsc --init
  Creates a tsconfig.json with the recommended settings in the working directory.

  tsc -p ./path/to/tsconfig.json
  Compiles the TypeScript project located at the specified path.

  tsc --help --all
  An expanded version of this information, showing all possible compiler options

  tsc --noEmit
  tsc --target esnext
  Compiles the current project, with additional settings.

COMMAND LINE FLAGS

     --help, -h  Print this message.

    --watch, -w  Watch input files.

          --all  Show all compiler options.

  --version, -v  Print the compiler's version.

         --init  Initializes a TypeScript project and creates a tsconfig.json file.

  --project, -p  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

    --build, -b  Build one or more projects and their dependencies, if out of date

   --showConfig  Print the final configuration instead of building.

COMMON COMPILER OPTIONS

               --pretty  Enable color and formatting in TypeScript's output to make compiler errors easier to read.
                  type:  boolean
               default:  true

      --declaration, -d  Generate .d.ts files from TypeScript and JavaScript files in your project.
                  type:  boolean
               default:  `false`, unless `composite` is set

       --declarationMap  Create sourcemaps for d.ts files.
                  type:  boolean
               default:  false

  --emitDeclarationOnly  Only output d.ts files and not JavaScript files.
                  type:  boolean
               default:  false

            --sourceMap  Create source map files for emitted JavaScript files.
                  type:  boolean
               default:  false

           --target, -t  Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
                one of:  es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
               default:  es5

           --module, -m  Specify what module code is generated.
                one of:  none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext
               default:  undefined

                  --lib  Specify a set of bundled library declaration files that describe the target runtime environment.
           one or more:  es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, esnext, dom, dom.iterable, webworker, webworker.importscripts,                          webworker.iterable, scripthost, es2015.core, es2015.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect, e                         s2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2017.object, es2017.sharedmemory, es2017.string, es2017.intl, es2017.typedarrays, es                         2018.asyncgenerator, es2018.asynciterable/esnext.asynciterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object, es2019.str                         ing, es2019.symbol/esnext.symbol, es2019.intl, es2020.bigint/esnext.bigint, es2020.date, es2020.promise, es2020.sharedmemory, es2020.string, es2020                         .symbol.wellknown, es2020.intl, es2020.number, es2021.promise/esnext.promise, es2021.string, es2021.weakref/esnext.weakref, es2021.intl, es2022.arr                         ay, es2022.error, es2022.intl, es2022.object, es2022.sharedmemory, es2022.string/esnext.string, es2022.regexp, es2023.array/esnext.array, esnext.in                         tl, decorators, decorators.legacy
               default:  undefined

              --allowJs  Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files.
                  type:  boolean
               default:  false

              --checkJs  Enable error reporting in type-checked JavaScript files.
                  type:  boolean
               default:  false

                  --jsx  Specify what JSX code is generated.
                one of:  preserve, react, react-native, react-jsx, react-jsxdev
               default:  undefined

              --outFile  Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output.

               --outDir  Specify an output folder for all emitted files.

       --removeComments  Disable emitting comments.
                  type:  boolean
               default:  false

               --noEmit  Disable emitting files from a compilation.
                  type:  boolean
               default:  false

               --strict  Enable all strict type-checking options.
                  type:  boolean
               default:  false

                --types  Specify type package names to be included without being referenced in a source file.

      --esModuleInterop  Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility.
                  type:  boolean
               default:  false

You can learn about all of the compiler options at https://aka.ms/tsc

$
```

I ran this command to ensure the default app created by `create-react-app` still runs ok:

```
$ npm run start
$
```

The default app created by `create-react-app` still works ok!

## 2.3. Configuring the Compiler

I ran this command to create a `tsconfig.json` file

```
$ npx tsc --init
npx tsc --init

Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
$
```

The file `typescript/1-w3schools/notes/1-notes-tsconfig.json` in this directory contains a copy of the file
created by this command.

# 3. TS Simple Types

```javascript
```

# 4. TS Special Types

```javascript
```

# 5. TS Arrays

```javascript
```

# 6. TS Tuples

```javascript
```

# 7. TS Object Types

```javascript
```

# 8. TS Enums

```javascript
```

# 9. TS Aliases & Interfaces

```javascript
```

# 10. TS Union Types

```javascript
```

# 11. TS 

```javascript
```
