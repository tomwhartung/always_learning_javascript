
# 10-type_manipulation-typeof_type_operator.md

Some notes from reading
[Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html).

# 1. The `typeof` Type Operator

The following line of code is a simple example of how JS's `typeof` operator works:

```javascript
console.log(typeof "Hello world");      // Prints "string"
```

The following example shows how to use TS's `typeof` operator *"in a type context"*
to refer to an existing type:

```javascript
let s = "hello";
let n: typeof s;     // let n: string
```

The following example shows how to use TS's predefined `ReturnType` type to reference
the return type of a *function type:*

```javascript
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;       // type K = boolean
```

**Note:** you *cannot* use `ReturnType` to refer to a * **function's** return type.*

The following example shows the error message you get when you try to use `ReturnType` on a
*function* instead of a *function type:*

```javascript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;    // Error: "'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?"
```

The following example shows how to use `typeof` to reference the *function type* of a function so you can use it
with `ReturnType`:

```javascript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;   // type P = { x: number; y: number; }
```

## 1.1. Limitations

The following example demonstrates - with an admittedly vague error message - that TS allows you to use `typeof`
*only* on a variable:

```javascript
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");   // Error: "',' expected."
```

