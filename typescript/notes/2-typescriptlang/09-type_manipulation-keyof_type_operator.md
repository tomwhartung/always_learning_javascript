
# 09-type_manipulation-keyof_type_operator.md

Some notes from reading
[Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html).


# 1. The `keyof` Type Operator

The following example demonstrates how to use the TS `keyof` operator to create a type `P`
that represents a `union` of the string or numeric literals of another type's keys:

```javascript
type Point = { x: number; y: number };
type P = keyof Point;     // type P = keyof Point
```

In the preceding example `P` is equivalent to the `union` of type `Point`'s keys:

- That is, type `P` is equivalent to `"x" | "y"`.

The following example shows how `keyof` works with arrays of `number`s or `string`s:

```javascript
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;     // type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;      // type M = string | number
```

As the manual states:

> If the type has a string or number index signature, keyof will return those types instead:

**Note:** type `M` is the `union` type `string | number` because in JS, keys to objects can be either type.

- That is, the `obj[0]` object key is equivalent to `obj["0"]`

