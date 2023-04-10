
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

Conditionals in JS do *not* require the expression being tested to yield a `boolean`:

```javascript
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

This makes `if` statements in JS less concerned with what's *true* or *false* and more
concerned with what is called the expression's *"truthiness"*.

In JS's conditional satements, all of the following values *"coerce"* to `false`:

- `0`
- `NaN`
- `""` (the empty string)
- `0n` (the bigint version of zero)
- `null`
- `undefined`

In JS, * **all** other values* coerce to `true`!

If this seems bothersome, there are a couple of workarounds.
You can do your own coercing by:

- Call a `Boolean` function on your variable
- Using `!!`, the *"double-Boolean negation"*

```javascript
// both of these result in 'true'
Boolean("hello");      // type: boolean, value: true
!!"world";             // type: true,    value: true
```

Leveraging JS's concept of *truthiness,* we frequently see code such as this:

```javascript
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {           // checking strs for truthiness ensures it is not null or ""
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

This is called *"narrowing by truthiness."*

Here is an example of using `!`, a Boolean negation, to *narrow by truthiness.*

```javascript
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
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

