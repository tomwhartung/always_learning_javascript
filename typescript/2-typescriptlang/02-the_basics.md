
# 02-the_basics.md

Some notes from reading the first page of the handbook, i.e.,
[The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).

# 1. The JS `typeof` operator and Dynamic Typing

The JS `typeof` operator allows us to identify primitive types like `string` and `number`,
but it provides no information when it comes to functions, objects, etc.

In other words, JS provides only *dynamic typing* done at run time.
To help predict what code will do *before* then we need *static typing.*

# 2. Static type-checking

TS is a *static type system* that allows us to find errors before run time.

Following is an example of a TS error message that can save us time when writing JS code:

```javascript
const message = "hello!";

message();    // Causes an error: "This expression is not callable.  Type 'String' has no call signatures."
```

# 3. Non-exception Failures

TS static type checking can also identify flaws in program logic: code that can execute ok
but give results that are undesired.

Following is an example of now JS handles data that is missing:

```javascript
const user = {
  name: "Daniel",
  age: 26,
};
user.location;     // JS returns undefined
```

Following is an example of how TS reports an error when it encounters the same sort of situation:

```javascript
const user = {
  name: "Daniel",
  age: 26,
};

user.location;    // Causes an error: "Property 'location' does not exist on type '{ name: string; age: number; }'."
```

This example shows how TS reports an error when it encounters 

```javascript
```

This example shows how TS reports an error when it encounters 

```javascript
```

This example shows how TS reports an error when it encounters 

```javascript
```


# 4. Types for Tooling

Following is an example of:

```javascript
```


# 5. `tsc`, the TypeScript compiler

Following is an example of:

```javascript
```


# 6. Emitting with Errors

Following is an example of:

```javascript
```


# 7. Explicit Types

Following is an example of:

```javascript
```


# 8. Erased Types

Following is an example of:

```javascript
```


# 9. Downleveling

Following is an example of:

```javascript
```


# 10. 

Following is an example of:

```javascript
```

