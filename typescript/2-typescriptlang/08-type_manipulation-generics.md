
# 08-type_manipulation-generics.md

Some notes from reading
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

# 0. Generics

A key technique for creating reusable code is to define *generic types,*
which allow developers to create new types based on existing type patterns.

# 1. Hello World of Generics

Following is an example of the *"Hello World"* of *generic types,* an `identity` function that
returns its argument:

```javascript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

The `identity` function above is *generic* because it allows us to work with any type of data.

When calling this function we can either specify the type, as in the following example:

```javascript
let output = identity<string>("myString");    // let output: string
```

Or we can let TS use *type argument inference* to *infer* the type, as in the following example:

```javascript
let output = identity("myString");    // let output: string
```

If TS is unable to correctly *infer* the type, then you can always revert to specifying it in angle brackets `<>`.

# 2. Working With Generic Type Variables

The following example shows how to write a variation on the `identity` function that:

- Takes an array as its argument
- Logs the number of elements in the array to the `console`
- Returns the array

```javascript
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

The following example is a variation on the previous example that specifies the `Array` rather
than using square brackets `[]` to declare that the argument and return type are arrays:

```javascript
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

# 3. Generic Types

```javascript
```

# 4. Generic Classes

```javascript
```

# 5. Generic Constraints

```javascript
```

# 6. Using Type Parameters in Generic Constraints

```javascript
```

# 7. Using Class Types in Generics

```javascript
```

