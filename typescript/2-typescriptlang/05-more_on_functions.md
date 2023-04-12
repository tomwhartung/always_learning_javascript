
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

```javascript
```



# 5. Optional Parameters

```javascript
```


# 6. Function Overloads

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


