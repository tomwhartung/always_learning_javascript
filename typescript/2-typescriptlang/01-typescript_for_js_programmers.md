
# 01-typescript_for_js_programmers.md

Some notes from reading [typescript_for_js_programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

# 1. Types by Inference

- Typescript frequently generates types for you
  - E.g. strings in double quotes: `"Hello World"`

# 2. Defining Types

Following are some ways you can define your own types:

```javascript
// Inferred type
const user = {
  name: "Hayes",
  id: 0,
}
```

```javascript
// Explicit type - note the capital letter
interface User = {
  name: string,
  id: number,
}
```

```javascript
// Using an explicit type to declare a variable
const user: User = {
  name: "Hayes",
  id: 0,
}
```

If the declaration does not match the definition, typescript displays a warning:

```javascript
const user: User = {
  username: "Hayes",
  // Causes this warning message:
  // Type '{ username: string; id: number; }' is not assignable to type 'User'.
  //   Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

How to use an interface definition in a class:

```javascript
interface User = {
  name: string,
  id: number,
}

class UserAccount {
  name: string;
  id: number;
  constructor( name: string, id: number ) {
    this.name = name;
    this.id = id;
  }
}
```

How to use an interface definition in function definitions:

```javascript
function getAdminUser(): User {     // define the type of the return value
  // . . .
}
```

```javascript
function deleteUser(user: User) { // defind the type of the parameter
  // . . .
}
```

You can use these built-in primitive JavaScript types and the following extensions provided by Typescript when defining interfaces:

- Built-in primitive JavaScript types:
  - `boolean`
  - `bigint`
  - `null`
  - `number`
  - `string`
  - `symbol`
  - `undefined`
- Extensions provided by Typescript:
  - `any` - allow anything
  - `unknown` - developers using this type must define it when they use it
    - I.e.: *"no operations are permitted on an unknown without first asserting or narrowing to a more specific type."*
    - [Example of code using `unknown`](https://www.typescriptlang.org/play#example/unknown-and-never)
    - [Blog post: `unknown` vs. `any`](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
    - [Typescript docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)
  - `never` - represents code that *"logically cannot happen."*
    - [An example of code using `never` is at the bottom of this page](https://www.typescriptlang.org/play#example/unknown-and-never)
    - [Example of conditional types using `never`](https://www.typescriptlang.org/play#example/conditional-types)
  - `void` - used for functions that return nothing

# 3. Composing Types

Use Unions and Generics to combine simple types and create complex ones.

## 3.1. Unions

Unions can be used to declare `enum`erable types:

```javascript
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

You can also use a union to combine two more specific types, e.g., an `array` and a `string`:

```javascript
function getLength(obj: string | string[]) {
  return obj.length;
}
```

Here is a clever way to change a `string` into an `array`, only if it is not already an `array`:

```javascript
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];                  // (parameter) obj: string
  }
  return obj;
}
```

## 3.2. Generics

Quoting from this page:

> Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

A few examples of using generics to define the type of data an array can contain:

```javascript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

This kind of reminds me of templates in C++, where the `Type` is not known until someone uses the `interface`:

```javascript
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Causes an error:
//   Argument of type 'number' is not assignable to parameter of type 'string'.
```

# 4. Structural Type System

The terms *duck typing* and *structural typing* refer to being able to recognize that when two objects
have the same *shape* - i.e. their members contain the same *types* - then *"they are considered to be
the same type."*

For example:

```javascript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

Quoting from the page:

> The `point` variable is never declared to be a `Point` type. However, TypeScript compares the shape of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

**Note:** only a subset of the `interface`'s or object's fields need to match.

```javascript
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);                         // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);                         // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
// Causes an error:
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```

**Note:** structural typing handles classes and objects the same.

