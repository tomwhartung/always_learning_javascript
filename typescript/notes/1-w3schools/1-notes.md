
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

The file `typescript/notes/1-w3schools/1-notes-tsconfig.json` in this directory contains a copy of the file
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

## 7.3. Index Signatures

Frankly, I am not 100% sure exactly what this means, but the example makes a certain amount of sense:

> Index signatures can be used for objects without a defined list of properties.

For example:

```javascript
nameAgeMap.Jack = 25;        // No error
nameAgeMap.Mark = "Fifty";   // Error: Type 'string' is not assignable to type 'number'.
```

> Index signatures like this one can also be expressed with utility types like `Record<string, number>`.

**Note:** a later section describes *"utility types."*


# 8. TS Enums

You can use an `enum` to define a class containing a set of constants.
An `enum` can contain either `number`s or `string`s.

## 8.1. Numeric Enums - Default

By default, the first value in an `enum` is `0`, and subsequent values increase by `1`.

For example:

```javascript
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);                     // logs 0
```

## 8.2. Numeric Enums - Initialized

Alternatively, you can set the first value in an `enum` to a non-zero number like `3`, and
subsequent values will still increase by `1`.

For example:

```javascript
enum CardinalDirections {
  North = 11,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.West;
console.log(currentDirection);                     // logs 14
```

## 8.3. Numeric Enums - Fully Initialized

Of course it is perfectly acceptable to set each value in an `enum` to a specific `number`.

For example:

```javascript
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.NotFound);      // logs 404
console.log(StatusCodes.Success);       // logs 200
```

## 8.4. String Enums

Finally, you can set each value in an `enum` to a specific `string` value.
In many ways, this makes the most sense of all the variants!

For example:

```javascript
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
console.log(CardinalDirections.North);    // logs "North"
console.log(CardinalDirections.West);     // logs "West"
```

**Note:** although you *can* mix `number` and `string` values, doing so is *inadvisable.*


# 9. TS Aliases & Interfaces

## 9.1. Type Aliases

You can define a custom name as an *alias* for both primitive and complex types.

For example:

```javascript
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
```

**Notice:** the lack of semicolons at the end of the `type` and `const` declarations!

## 9.2. Interfaces

Use `interface` to name an `object` type.

For example:

```javascript
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
```

## 9.3. Extending Interfaces

Interfaces can build on or *extend* one another by using the `extends` keyword.

For example:

```javascript
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {    // Creates a *new* interface
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```


# 10. TS Union Types

When a variable can be any one of two or more types, you can define a *union.*

10.1. Union | (OR)

To define a union, use a vertical bar `|`.

For example, to define a `code` that can be a `string` or a `number`:

```javascript
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
```

10.2. Union Type Errors

To avoid errors, you must limit operations on the variable to those that can apply to *all*
of the types in the union.

For example:

```javascript
function printStatusCode(code: string | number) {
  // This causes an error:
  //   "Property 'toUpperCase' does not exist ontype 'string | number'."
  //   "Property 'toUpperCase' does not exist on type 'number'"
  console.log(`My status code is ${code.toUpperCase()}.`)
}
```


# 11. TS Functions

## 11.1. Return Type

Following is an example of how to declare a function that returns a `number`:

```javascript
function getTime(): number {
  return new Date().getTime();
}
```

## 11.2. Void Return Type

This example shows how to use the `void` keyword to declare a function that does not return anything:

```javascript
function printHello(): void {
  console.log('Hello!');
}
```

## 11.3. Parameters

Following is an example of how to specify the types of the function's parameters:

```javascript
function multiply(a: number, b: number) {
  return a * b;
}
```

## 11.4. Optional Parameters

In TS, all parameters are required, unless specifically marked with a `?` to indicate they are optional.

In this example, the parameter `c` is optional:

```javascript
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
```

## 11.5. Default Parameters

This example shows how to specify a default value for a parameter:

```javascript
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
```

## 11.6. Named Parameters

This example shows how to specify a type for a named parameter:

```javascript
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
```

## 11.7. Rest Parameters

This example shows how to specify a type for a *rest* parameter,
but note that this type must *always* be an array:

```javascript
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```

## 11.8. Type Alias

This example shows how to a *type alias* to define an anonymous *arrow* function:

```javascript
type Negate = (value: number) => number;

// In this function, the parameter `value` automatically
//   gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
```


# 12. TS Casting

Use a *cast* to override a variable's type.

12.1. Casting With `as`

Following is an example of casting an `unknown` type to a `string`:

```javascript
let x: unknown = 'hello';
console.log((x as string).length);
```

**Note:** just because you can force the compiler to consider a variable to be of a certain type,
does not mean that the code will work as hoped when supplied a value that does not conform to that type!!

12.2. Casting With `<>`

This example shows how putting the type in angle brackets `<>` works the same as using `as`:

```javascript
let x: unknown = 'hello';
console.log((<string>x).length);
```

12.3. Force casting

Casting a variable first to `unknown`, then to another type, can help override TS type errors:

```javascript
let x = 'hello';
console.log(((x as unknown) as number).length);   // x is not actually a number, so this will return undefined
```


# 13. TS Classes

## 13.1. Members: Types

This example shows how to specify the type of a class's data members:

```javascript
class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";
```

## 13.2. Members: Visibility

TS supports these visibility modifiers:

- `public` - the default visibility allows access from anywhere
- `protected` - allows access only from within this class or a class that inherits from it
- `private` - allows access only from within the class

For example:

```javascript
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());  // Ok - it's public
console.log(person.name);       // Error - person.name isn't accessible because it's private
```

## 13.3. Parameter Properties

This example shows the familiar syntax you can use to specify the types of method parameters and return values:

```javascript
class Person {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());
```

## 13.4. Readonly

This example shows how to use the `readonly` keyword to prevent changes to a class' data member:

```javascript
class Person {
  // name can be only be set in this initial definition or in the constructor
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());
```

## 13.5. Inheritance: Implements

This example shows how a class that `implements` an `interface` must follow the type specifications
specified in the `interface`:

```javascript
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
```

## 13.6. Inheritance: Extends

This example shows how a class that `extends` another `class` must follow the type specifications
specified in that `class`:

```javascript
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
```

## 13.7. Override

This example shows how a class can use the `override` keyword to specify that it contains a different
method from the one defined in a parent class:

```javascript
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}
```

**Note:** in general, use of the `override` keyword is optional.  To force its use in child
classes, use the `noImplicitOverride` keyword.

## 13.8. Abstract Classes

Specifying that a class and one or more of its members are `abstract` allows the base
`abstract` class to leave its `abstract` members to be unimplemented.

For example:

```javascript
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
```

**Note:** `abstract` classes can *not* be instantiated directly!


# 14. TS Basic Generics

TS allows developers to define generic types that can in turn be used to a set of similar types.

## 14.1. Functions

This example defines a generic function that accepts two parameters and returns them as a pair.
Users of the definition must specify the type of each parameter at run time:

```javascript
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
```

## 14.2. Classes

This example shows a generic class that includes standard OO methods, `setValue`, `getValue`,
and `toString`, allowing the user to define the type of the value when they use the class:

```javascript
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
```

## 14.3. Type Aliases

> Generics in type aliases allow creating types that are more reusable.

```javascript
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
```

You can also use this syntax with `interface`s.

## 14.4. Default Value

This example creates a generic class similar to the one in subsection *14.2. Classes*,
showing how to assign default type values that take effect when the user does not
specify a type at runtime:

```javascript
class NamedValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue
```

## 14.5. Extends

This example shows how to use `extends` to constrain the types supported by your generic type
declaration to a set of types, rather than to just any type:

```javascript
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}
```

# 15. TS Utility Types

This section briefly explains the most popular *utility types,* which can help when working with types.

## 15.1. Partial

This example demonstrates how to use `Partial` to make all properties of an object - or `interface` -
optional:

```javascript
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
```

## 15.2. Required

This example demonstrates how to use `Required` to make all properties of an object - or `interface` -
required, even if one or more of the properties are marked optional in the original definition:

```javascript
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};
```

## 15.3. Record

This example demonstrates how to use `Record` to specify the types of a key and its value:

```javascript
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
```

## 15.4. Omit

This example demonstrates how to use `Omit` to remove properties from an object or `interface`:

```javascript
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'    // `Omit` has removed age and location from the type and they can't be defined here
};
```

## 15.5. Pick

This example demonstrates how to use `Pick` to specify which members to keep in a predefined object type:

```javascript
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, 'name'> = {
  name: 'Bob' // `Pick` has only kept name, so age and location were removed from the type and can't be defined
};
```

## 15.6. Exclude

This example demonstrates how to use `Exclude` to remove a type from a union:

```javascript
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
```

## 15.7. ReturnType

This example demonstrates how to use `ReturnType` to access the type of a function's return value:

```javascript
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
```

## 15.8. Parameters

This example demonstrates how to use `Parameters` to access the types of a function's parameters:

```javascript
type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
```

# 16. TS Keyof

TS includes the `keyof` reserved word, which you can use to extract an object type's key type.

## 16.1. `keyof` with explicit keys

This example demonstrates how to use `keyof` on an object type with explicit keys.
In this case, it specifies a union type containing both members, i.e., `name` and `age`:

```javascript
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
```

That is, specifying something other than `name` or `age` when calling `printPersonProperty` will
cause an error.

## 16.2. `keyof` with index signatures

This example demonstrates how to use `keyof` with index signatures:

```javascript
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
```

**TODO:** consider revisiting this, right this second it is making no sense to me!!

# 17. TS Null & Undefined

**Note:** to enable the handling of `null` and `undefined` values as described in this section,
you must set the configuration parameter `strictNullChecks` to true.

**All of the examples** in this section work *only* when `strictNullChecks` is set to true!!

## 17.1. Types

This example demonstrates that `null` and `undefined` are types, just like `string`, `number`, etc.:

```javascript
let value: string | undefined | null = null;
value = 'hello';
value = undefined;
```

## 17.2. Optional Chaining

This example demonstrates how to use the `?.` syntax to access an object's properties, even if they
may not exist:

```javascript
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
};

printYardSize(home);    // Prints 'No yard' because in this case `yard` is not defined.
```

## 17.3. Nullish Coalescence

This example demonstrates how to use the `??` operator to gracefully deal with data that may be missing:

```javascript
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null);   // Prints 'Mileage: Not Available'
printMileage(0);      // Prints 'Mileage: 0'
```

## 17.4. Null Assertion

The following example demonstrates how to use the TS `!` operator to tell TS to ignore the possibility that
a value might be `null` or `undefined`.
In this case, it is clear that `getValue` will *always* return a `string`:

```javascript
function getValue(): string | undefined {
  return 'hello';
}
let value = getValue();
console.log('value length: ' + value!.length);
```

**Warning:** this sort of thing can be unsafe!  In this example, someone might someday change `getValue`.
*Ten cuidado!!*

## 17.5. Array bounds handling

TS assumes, by default, that accessing a value in an array never returns `undefined`,
unless it is defined as part of the array's type.
This is true even if the `strictNullChecks` configuration parameter is set, although
the `noUncheckedIndexedAccess` configuration parameter can change this behavior.

This example demonstrates how this might work:

```javascript
let array: number[] = [1, 2, 3];
let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
```

# 18. TS Definitely Typed

Some NPM packages do not use TS, and are therefore not type safe.

## 18.1. Using non-typed NPM packages in TypeScript

The Definitely Typed community, which runs a non-https - and therefore currently-inaccessible-via-chrome -
[site here](http://definitelytyped.org/), intended to help TS developers use these packages.

To access these TS definitions, run this command:

```
npm install --save-dev @types/jquery
```

> No other steps are usually needed to use the types after installing the declaration package, TypeScript will automatically pick up the types when using the package itself.

