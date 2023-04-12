
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

```javascript
```



# 3. Construct Signatures

```javascript
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


