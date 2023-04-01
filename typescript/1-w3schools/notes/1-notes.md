
# 1-notes.md

# 1. TS Introduction

## 1.1. What is TypeScript?

TypeScript, or *TS*, is a *"Syntactic Superset"* of JavaScript, or *JS*.
That is, it includes all of JS and adds **types.**

## 1.2. Why Should I Use TypeScript?

TS can help find logic errors in code that regular JS that will not report.

For example, if a function is defined as needing a number, but is passed a string, TS will report an error.

**Note:** TS checks code at *compile time* rather than when it is running.

## 1.3. How Do I Use TypeScript?

Using the *official TypeScript compiler.*


# 2. TS Get Started

## 2.1. TypeScript Compiler

The TS Compiler *transpiles* TS into JS.

## 2.2. Installing the Compiler

I used these commands to use `npm` to create a new React project and ensure it will run ok:

```
$ pwd                         # /var/www/always_learning/always_learning_javascript/typescript/projects
$ npx create-react-app my-first_typescript-app
$ cd my-first_typescript-app
$ npm run start               # so far, so good!
```

I used these commands to install TS, and am including *all* of the command's output, for possible future reference:

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

I ran this command to run TS, and am including *all* of the command's output, for possible future reference:

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

**Note:** [https://aka.ms/tsconfig.json](https://aka.ms/tsconfig.json) redirects to
[https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig),
which looks rather like a man-page-type reference, suitable as a reminder for people
who are already familiar with TS.

The file `typescript/1-w3schools/notes/1-notes-tsconfig.json` in this directory contains a copy of the file
created by this command.


# 3. TS Simple Types

These *simple types* are also known as *primitives,* and are common to both JS and TS:

- `boolean`, or `Boolean` in some specific circumstances
- `number`, or `Number` in some specific circumstances
- `string`, or `String` in some specific circumstances

## 3.1. Type Assignment

Type assignment may be *explicit* or *implicit.*

## 3.2. Explicit Type Assignment

Explicit type assignment is more intentional and makes it more obvious to those reading your code:

```javascript
let firstName: string = "Jane";
```

## 3.3. Implicit Type Assignment

Implicit type assignment is quicker and easier for us but means JS must guess the type:

```javascript
let firstName = "Joe";
```
## 3.4. Error in Type Assignment

For both explicit and implicit types, when types don't match, TS throws an error, but JS doesn't.

## 3.5. Unable to Infer

When TS is unable to infer a variable's type, it sets its type to `any`.
This *disables type checking.*


# 4. TS Special Types

## 4.1. Type: `any`

The `any` special type disables checking, allowing the variable to store `any` and all types of values.

**Note:** in general, it is best to avoid using `any` types.

## 4.2. Type: `unknown`

The `unknown` special type is a safer alternative to `any`.
You can use variables declared as `unknown` by using `as` to cast them to a specific type.

Following is an example of how to use a cast to run `w` `as` a `Function`:

```javascript
let w: unknown = 1;
w = "string";         // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
//
// Trying to run w without a cast (using "as") gives an error:
//
w.runANonExistentMethod();        // Error: Object is of type 'unknown'.
//
// Using "as" to cast w as a Function allows us to run it:
//
(w as { runANonExistentMethod: Function }).runANonExistentMethod();
```

This code shows how you might determine `w` is a function and hence safe to run:

```javascript
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
```

**Note:** it's best to save `unknown` for special cases when you don't know what sort of value a variable
might hold, and you are willing to perform tests to zero in on its type then use a cast before doing anything with it.

## 4.3. Type: `never`

The `never` special type throws an error when someone tries to use the variable.
It is used mainly in *advanced generics.*

## 4.4. Type: `undefined` & `null`

The `undefined` special type refers to the JS primitive type `undefined`.

The `null` special type refers to the JS primitive type `null`.


# 5. TS Arrays

TS allows defining the type of values that the code may add to an array.

For example:

```javascript
const names: string[] = [];
names.push("Dylan");        // no error
names.push(3);              // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

## 5.1. Readonly

Trying to change an array declared as `readonly` causes an error:

For example:

```javascript
const names: readonly string[] = ["Dylan"];
names.push("Jack");         // Error: Property 'push' does not exist on type 'readonly string[]'.
```

5.2. Type Inference

When an array has values, TS infers its type.

For example:

```javascript
const numbers = [1, 2, 3];    // inferred to type number[]
numbers.push(4);              // no error
numbers.push("2");            // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```


# 6. TS Tuples

## 6.1. Typed Arrays

A *tuple* is an array containing a fixed number of typed elements.

For example:

```javascript
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Hello world!'];
ourTuple = [5, 'Hello world!', false];   // Error!
```

## 6.2. Readonly Tuple

Once a tuple has a set of values, TS turns off type checking.
This means it is best to declare them to be `readonly`.

For example:

```javascript
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Hello world!'];
ourTuple.push = 'Hola mundo!';         // NO ERROR!  WTAF?!?!
```

Defining the tuple to be `readonly` solves this predicament:

```javascript
let ourReadonlyTuple: readonly [number, boolean, string] = [5, false, 'Hello world!'];
ourReadonlyTuple.push = 'Hola mundo!';         // Error!  Yay!!!
```

**Note:** in React, state variables are tuples, consisting of a `string` and a `function`.

## 6.3. Named Tuples

For example:

```javascript
const point: [x: number, y: number] = [55.2, 41.3];
```

In this case, we can see that the `graph` tuple contains an `x`, or *horizontal* component and
a `y`, or *vertical* component.

## 6.4. Destructuring Tuples

This means we can access the individual values in a *named tuple* by *"destructuring"* it, then
using the *names* - rather than using a numeric *subscript.*

For example:

```javascript
const point: [x: number, y: number] = [55.2, 41.3];
const [x, y] = point;
```


# 7. TS Object Types

Use this sort of syntax to declare the names and types of the data members in an object:

```javascript
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

## 7.1. Type Inference

If a data member has a value, TS can use it to infer its type.

For example:

```javascript
const car = {
  type: "Toyota",
};
car.type = "Ford";     // no error
car.type = 2;          // Error: Type 'number' is not assignable to type 'string'.
```

## 7.2. Optional Properties

Use a question mark `?` to indicate when an object's data member or *property* is optional.

For example:

```javascript
const car1: { type: string, mileage: number } = {
  type: "Toyota",                                      // Error!!
};
const car2: { type: string, mileage?: number } = {
  type: "Chevy",                                       // Ok
};
car.mileage = 2000;
```


# 8. TS Enums

For example:

```javascript
```

# 9. TS Aliases & Interfaces

For example:

```javascript
```

# 10. TS Union Types

For example:

```javascript
```

# 11. TS Functions

For example:

```javascript
```

# 12. TS Casting

For example:

```javascript
```

# 13. TS Classes

For example:

```javascript
```

# 14. TS Basic Generics

For example:

```javascript
```

# 15. TS Utility Types

For example:

```javascript
```

# 16. TS Keyof

For example:

```javascript
```

# 17. TS Null

For example:

```javascript
```

# 18. TS Definitely Typed

For example:

```javascript
```

# 19. TS 

For example:

```javascript
```
