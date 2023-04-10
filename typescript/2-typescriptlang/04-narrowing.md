
# 04-narrowing.md

Some notes from reading the
[Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
page of the handbook.

# 0. *Narrowing* and *type guards* defined

Consider the `padLeft` function:

```javascript
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

The idea behind the function's `padding` argument is that:

- if `padding` is a `number` then indent the `input` by `padding` number of spaces
- if `padding` is a `string` then indent the `input` by the value of the `string`

Trying to use `padding` as a `number` without checking its type causes TS to report an error:

```javascript
function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;    // Error: Argument of type 'string | number' is
                                         //   not assignable to parameter of type 'number'.
                                         //   Type 'string' is not assignable to type 'number'.
}
```

The solution is to use `typeof` to ensure that `padding` is a `number` before using it as such:

```javascript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

- A *type guard* is a special check that uses `typeof` to perform this sort of checking
- *Narrowing* refers to the *"process of refining types to more specific types"*


# 1. `typeof` type guards

TS expects `typeof` to return a value matching one of the following strings:
"`string`", "`number`", "`bigint`", "`boolean`", "`symbol`", "`undefined`", "`object`", or "`function`".

TS is aware that JS's `typeof` has some quirks:

- For one thing, in JS the `typeof` an Array is `object`
- For another, in JS the `typeof null` is also `object`:

```javascript
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {          // TS warns: 'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

# 2. Truthiness narrowing

```javascript
```

# 3. Equality narrowing

```javascript
```


# 4. The `in` operator narrowing

```javascript
```


# 5. `instanceof` narrowing

```javascript
```


# 6. Assignments

```javascript
```


# 7. Control flow analysis

```javascript
```


# 8. Using type predicates

```javascript
```


# 9. Discriminated unions

```javascript
```


# 10. The `never` type

```javascript
```

# 11. Exhaustiveness checking

```javascript
```

