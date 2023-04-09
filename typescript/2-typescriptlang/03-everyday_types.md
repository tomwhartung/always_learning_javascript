
# 03-everyday_types.md

Some notes from reading the
[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
page of the handbook.

# 1. The primitives: `string`, `number`, and `boolean`

Always use the lowercase JS primitive type names in TS.

# 2. Arrays

Use square brackets `[]` to declare an array:

```javascript
number[];
string[];
```

# 3. `any`

Use the special TS type `any` for values you do not want to cause typechecking errors.

```javascript
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

Of course, the fact that compiling an expresson does not cause syntax errors, doesn't necessarily mean it will run ok!!

# 4. `noImplicitAny`

The `noImplicitAny` compiler flag disables TS's default behavior of setting a variable's type to `any` when it
cannot infer any other type.
Setting `noImplicitAny` causes TS to flag any variable declaration as an error before assigning it the `any` type.

# 5. Type Annotations on Variables

Use the type annotation `: <type>` to specify the type of a variable declared using `const`, `let`, or `var`.

```javascript
let myName: string = "Alice";          // ok, but "overkill"
```

In this case, declaring the type is superfluous, unnecessary, and even discouraged:

```javascript
let myName = "Alice";      // No type annotation needed -- 'myName' inferred as type 'string'
```

# 6. Functions

## 6.1. Parameter Type Annotations

You can add the `: <type>` type annotation after the name of each function parameter:

```javascript
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// . . .
// . . .
// . . .
greet(42);    // TS flags the error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

**Note:** TS also checks the *number of arguments* used to call a function, regardless of whether you specify the
types of the parameters.

## 6.2. Return Type Annotations

You can also use the `: <type>` type annotation to declare the function's return type value:

```javascript
function getFavoriteNumber(): number {
  return 26;
}
```

## 6.3. Anonymous Functions

When it can, TS uses *contextual typing* to assign types to the parameters of anonymous and arrow functions.

For example:

```javascript
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```


# 7. Object Types

Any JS value that has one or more *properties* is an *object type*.

This example shows an *object type* that has two properties, `x` and `y`, which are both *number*s:

```javascript
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

**Note** the curly braces `{ ... }` surrounding the function arguments in both the function's definition and
the call to it.

## 7.1. Optional Properties

To indicate that one or more of an object type's properties are optional, add a question mark `?` after
the property's name:

```javascript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

**Note:** when accessing an optional property you must its value for being `undefined` before using it in a
context where it needs to have a definite value.


# 8. Union Types

TS allows combining existing types into new types called *union types.*

The value of a union type may be any one of the union's *members'* types.

## 8.1. Defining a Union Type

Following is an example of a function that can work on a value that is either a `number` or a `string`:

```javascript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);             // OK
printId("202");           // OK
printId({ myID: 22342 }); // Error: Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

## 8.2. Working with Union Types

Using a union type's value requires *narrowing* it by using code to detect which of the union's member types the value is.

This example shows how to test whether a value is a `string` before trying to use it `toUpperCase` itself:

```javascript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());    // In this branch, id is of type 'string'
  } else {
    console.log(id);                  // Here, id is of type 'number'
  }
}
```

This example shows how to use `isArray` to ensure a value is an array before trying to use it to `join` its members:

```javascript
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));       // Here: 'x' is 'string[]'
  } else {
    console.log("Welcome lone traveler " + x);      // Here: 'x' is 'string'
  }
}
```


# 9. Type Aliases

Use the `type` TS keyword to declare a *type alias,* which is just a name for any other type.

```javascript
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  // . . .
}
```

This example shows how to give a union a *type alias:*

```javascript
type ID = number | string;
```


# 10. Interfaces

You can also use the `interface` keyword to create an *interface declaration* and
name an object type:

```javascript
interface Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  // . . .
}
```

## 10.1. Differences Between Type Aliases and Interfaces

The key difference between a type alias and an interfaces is that:

- You can add properties to an `interface` - it is *extendable*
- You cannot re-open a type alias to add a property

These nuances will be covered in more detail in subsequent chapters of this reference.


# 11. Type Assertions

When you know the type of data a variable contains you can use *type assertions* or *casts*
to coerce one type into another.

Use the `as` keyword or angle brackets `<>` to specify type assertions:

```javascript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

**Note:** you can *not* use the angle brackets `<>` syntax in `.tsx` files.

In general, Assertions must be to either a less specific type or a more specific version of a specific type.
To get around this constraint, use two casts, first to `any`, then to the goal type.

```javascript
const a (expr as any) as T;
```


# 12. Literal Types

Literal types are most useful when combined into a union representing the set of the actual *values*
a variable may have.

The following example shows how TS can catch a typo in the specification of an `alignment`:

```javascript
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");    // should be "center: not "centre"
                                       // Error: Argument of type '"centre"' is not assignable to
                                       //   parameter of type '"left" | "right" | "center"'.
```

Use the same sort of `: <value1> | <value2>  | .. <valueN>` syntax for `numeric` literals:

```javascript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

## 12.1. Literal Inference

Using literal types can sometimes lead to errors with non-intuitive solutions.

In this example, TS infers the method `"GET"` is a `string` and generates an error:

```javascript
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);   // Error: Argument of type 'string' is not assignable to
                                      //     parameter of type '"GET" | "POST"'.
```

There are two ways one can handle this:

1. Cast the argument either in the `req` object or the function call

```javascript
// Change 1: cast the argument in the `req` object
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2: cast the argument in the function call
handleRequest(req.url, req.method as "GET");
```

2. Cast the entire `req` object as a `const`, forcing them to be type literals:

```javascript
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```


# 13. `null` and `undefined`

JS defines the two primitive *values*, `null` and `undefined`.

TS defines two corresponding *types*, `null` and `undefined`.

## 13.1. `strictNullChecks` off

Setting `strictNullChecks` off allows your program to handle `null` and `undefined`
values as usual:

- Any property can be `null` or `undefined`
- Any statement can access `null` or `undefined` properties

To identify potential problems sooner rather than later, developers should set `strictNullChecks` on,
if at all possible.

## 13.2. `strictNullChecks` on

Setting `strictNullChecks` on tells TS to check for
`null` or `undefined` values, and force developers to test for them before using the variable or property.

This example shows how to use *narrowing* to check for a `null` value before running code that requires
the value be a `string`:

```javascript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

## 13.3. Non-null Assertion Operator (Postfix `!`)

Adding a '!' immediately after an expression causes TS to assume the value is *not* `null` or `undefined`.

```javascript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

**Note:** TS might not flag an error, but that does *not* guarantee the code will run as hoped!!


# 14. Enums

```javascript
```


# 15. Less Common Primitives

```javascript
```

