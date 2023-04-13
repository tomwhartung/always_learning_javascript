
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

```javascript
```

## 6.1. Overload Signatures and the Implementation Signature

```javascript
```

## 6.2. Writing Good Overloads

```javascript
```

## 6.3. Declaring `this` in a Function

```javascript
```


# 7. Other Types to Know About

```javascript
```


# 8. Rest Parameters and Arguments

```javascript
```


# 9. Parameter Destructuring

```javascript
```


# 10. Assignability of Functions

```javascript
```


