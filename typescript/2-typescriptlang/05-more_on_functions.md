
# 05-more_on_functions.md

Some notes from reading
[More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html).

# 1. Function Type Expressions

Following is an example of a *function type expression:*

```javascript
// greeter: takes one parameter "a" and returns nothing
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

**Note:** the syntax is similar to the definition of an *arrow function.*

This example shows how to use a *type alias* to name this type of function, then use
that alias as a *function type expression:*

```javascript
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```


# 2. Call Signatures

Use a *call signature* to describe *"something callable with properties."*

Following is an example of how to write a *call signature:*

```javascript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```


# 3. Construct Signatures

We typically use the `new` operator to call a function known as a *constructor* to construct an object.

The following example shows how to combine `new` with a *call signature* to write a *construct signature:*

```javascript
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

This example shows how to declare a combination of a *call signature* and a *construct signature:*

```javascript
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```


# 4. Generic Functions

When TS wants to consider one or more types as being dependent on another type,
it calls the *correspondence* between these types *generics.*

This example shows how to define this correspondence by declaring a *type parameter:*

```javascript
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

This allows `firstElement` to work with a variety of primitives:

```javascript
const s = firstElement(["a", "b", "c"]);   // s is of type 'string'
const n = firstElement([1, 2, 3]);         // n is of type 'number'
const u = firstElement([]);                // u is of type undefined
```

## 4.1. Inference

The previous example demonstrates how TS can automatically choose by *inferring* a type.

This example shows how to define a *generic* function type using two different type variables,
`Input` and `Output`:

```javascript
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

The example above shows how TS *inferred* the type of:

- `Input` to be (an array of) `string`s
- `Output` to be (an array of) `number`s

## 4.2. Constraints

The following example shows an *attempt* to use `extends` to constrain `Type`
to a `number`:

```javascript
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);  // longerArray is of type 'number[]'
const longerString = longest("alice", "bob");    // longerString is of type 'alice' | 'bob'

const notOK = longest(10, 100);      // Error! Numbers don't have a 'length' property:
                                     //   "Argument of type 'number' is not assignable to
                                     //      parameter of type '{ length: number; }'."
```

The *attempt* works ok with some types, but not `number`s,
because the `number` type does not have a `.length` property.

## 4.3. Working with Constrained Values

Here is an example of a rather subtle error:

```javascript
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };   // Error: "Type '{ length: number; }' is not assignable to type 'Type'.
                                  // '{ length: number; }' is assignable to the constraint of type 'Type',
                                  //  but 'Type' could be instantiated with a different subtype of
                                  //  constraint '{ length: number; }'.
  }
}
```

This is how the manual explains the reason for the error:

> The problem is that the function promises to return the *same* kind of object as was passed in, not just *some* object matching the constraint.

## 4.4. Specifying Type Arguments

Given this *generic* function definition:

```javascript
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

Calling it with mismatched arrays is an error:

```javascript
const arr = combine([1, 2, 3], ["hello"]);   // Error: Type 'string' is not assignable to type 'number'.
```

But as this example shows, you can make it work by *specifying type arguments:*

```javascript
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

## 4.5. Guidelines for Writing Good Generic Functions

Try to not *"get carried away with type parameters."*

### 4.5.1. Push Type Parameters Down

At first glance, this code may look like it's defining two identical functions,
`firstElement1` and `firstElement2`:

```javascript
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]);    // a: number (good)
const b = firstElement2([1, 2, 3]);    // b: any (bad)
```

The `extends any[]` in `firstElement2` does more harm than good, because it *infers*
the return type to be `any`.

> **Rule:** When possible, use the type parameter itself rather than constraining it

### 4.5.2. Use Fewer Type Parameters

At first glance, `filter1` and `filter2` appear to be very similar:

```javascript
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

Looking at `filter2` more closely, we see it creates a `Func` type parameter that
*"doesn't relate two values"* and really just makes
the code unnecessarily more complicated!

> **Rule:** Always use as few type parameters as possible

### 4.5.3. Type Parameters Should Appear Twice

This example looks reasonable, but in reality uses `extends` and *generic types* unnecessarily:

```javascript
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet("world");
```

It's always best to keep things as simple as possible:

```javascript
function greet(s: string) {
  console.log("Hello, " + s);
}
```

> **Rule:** If a type parameter only appears in one location, strongly reconsider if you actually need it


# 5. Optional Parameters

The following example shows how to use a question mark `?` totell TS that a function takes a
variable number of arguments:

```javascript
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

This next example shows how to specify a *default* value for an argument, for when someone calls
the function without specifying one:

```javascript
function f(x = 10) {
  // ...
}
```

And this example demonstrates that calling a function specifying `undefined` as the argument is
equivalent to not specifying an argument at all:

```javascript
declare function f(x?: number): void;
// cut
// All OK
f();
f(10);
f(undefined);
```

## 5.1. Optional Parameters in Callbacks

This code shows a rookie mistake frequently made when working with callback functions:

```javascript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

The author of the code above, which specifies an optional `index` into the array,
is *probably* hoping that both of the following calls to be legal:

```javascript
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

But the function definition might be misleading, and the actual function be:

```javascript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}
```

When it comes to using optional parameters in callbacks, TS may get "confused."

```javascript
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());      // Error: 'i' is possibly 'undefined'.
});
```

> **Rule:** When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument



# 6. Function Overloads

Use a TS function *overload signature* to write a function that can take two or more sets
of arguments that have a different number of arguments, or different types, or both.

The following code shows the syntax used to declare the `makeDate` function with a few different
*overload signatures:*

```javascript
function makeDate(timestamp: number): Date;                              // function overload #1
function makeDate(m: number, d: number, y: number): Date;                // function overload #2
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {  // implementation signature
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);      // Error: "No overload expects 2 arguments, but overloads do exist that
                                //   expect either 1 or 3 arguments."
```

**Note:** the third definition has two optional arguments, but callers need to specify either none or
both of them!

- This is because the third signature is the *implementation signature*
- The *implementation signature* is "invisible" and cannot be called directly

## 6.1. Overload Signatures and the Implementation Signature

Following is code containing a TS rookie mistake:

```javascript
function fn(x: string): void;
function fn() {
  // ...
}
        // We expect to be able to call fn with zero arguments
fn();   // But get an Error: "Expected 1 arguments, but got 0."
```

> The signature of the *implementation* is not visible from the outside. When writing an overloaded function, you should always have *two or more* signatures above the implementation of the function.

> The implementation signature must also be *compatible* with the overloaded signatures.

This requirement includes the types of both the function arguments and its return type.

The following code samples show two different types of incompatiblity:

```javascript
function fn(x: boolean): void;  // Argument type isn't right
function fn(x: string): void;   // Error: "This overload signature is not compatible with its implementation signature."
function fn(x: boolean) {}
```

```javascript
function fn(x: string): string;
                                   // Return type isn't right
function fn(x: number): boolean;   // Error: "This overload signature is not compatible with its implementation signature."
function fn(x: string | number) {
  return "oops";
}
```

## 6.2. Writing Good Overloads

The following example shows a function with two overloads that allow it to work with either a string or an array:

```javascript
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

Note that we can call it with a value that *is* a `string` or an array but
**not** a value that *might be* a `string` or an array:

```javascript
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);  // Error:
                                           // "No overload matches this call.
                                           //   Overload 1 of 2, '(s: string): number', gave the following error.
                                           //    Argument of type 'number[] | "hello"' is not assignable to
                                           //      parameter of type 'string'.
                                           //     Type 'number[]' is not assignable to type 'string'.
                                           //   Overload 2 of 2, '(arr: any[]): number', gave the following error.
                                           //    Argument of type 'number[] | "hello"' is not assignable to
                                           //      parameter of type 'any[]'.
                                           //      Type 'string' is not assignable to type 'any[]'."
```

In this case, where both overloads have the same number of arguments, it is better to use a
*union type* than *overload signatures.*

```javascript
function len(x: any[] | string) {
  return x.length;
}
```

## 6.3. Declaring `this` in a Function

TS uses code flow analysis to determine what `this` is when its used in a function:

```javascript
const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

The JS specification disallows using `this` as a parameter, so TS allows you to use `this` in
a parameter definition, along with the type of `this`.

```javascript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

**Note:** using `this` as a parameter in this way works only in functions declared using the `function`
keyword.

- That is, using `this` as a parameter in this way does *not* work in arrow functions

```javascript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(() => this.admin);   // Error:
                                                   // "The containing arrow function captures the global value of 'this'.
                                                   //   Element implicitly has an 'any' type because type
                                                   //   'typeof globalThis' has no index signature."
```


# 7. Other Types to Know About

You can use these types anywhere, but they are particularly useful when working with functions.

## 7.1. `void`

- TS infers that functions that do not return a value return `void`
- JS functions that do not return a value return `undefined`

```javascript
function noop() {   // The inferred return type is void
  return;
}
```

The fact that *"`void` is not the same as `undefined`"* will be discussed later.

## 7.2. `object`

Any value that is not a primitive (`string`, `number`, etc.) is an "`object`".

- An exception is `{}`, the *empty object type*
- Because a `function` is *not* a primitive, in TS it is an `object`, and in JS it is an `Object`

**Note:** `object` is *not* the same as `Object`.

## 7.3. `unknown`

The `unknown` type is similar to the `any` type because both can represent *any* value.

- However, `unknown` is *"safer"* because you cannot do anyting with it:

```javascript
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();                     // Error: "'a' is of type 'unknown'."
}
```

This means a function can return a value of `unknown` type, but callers need to be careful when using it:

```javascript
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const obj = safeParse(someRandomString);   // Need to be careful with 'obj'!
```

## 7.4. `never`

This example shows a function that will *never* return:

```javascript
function fail(msg: string): never {
  throw new Error(msg);
}
```

Another example of when a `function` should return `never` is when it terminates execution.

Another example of when TS uses `never` is when it's run out of options in a union type:

```javascript
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

## 7.5. `Function`

You can call values of type `Function`, but they return an `any` type value.

```javascript
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

**Note:** it is best to avoid *untyped function calls* such as this one.

> If you need to accept an arbitrary function but don’t intend to call it, the type `() => void` is generally safer.


# 8. Rest Parameters and Arguments

```javascript
```


# 9. Parameter Destructuring

```javascript
```


# 10. Assignability of Functions

```javascript
```


