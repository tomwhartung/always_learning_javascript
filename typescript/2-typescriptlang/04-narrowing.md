
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

Leveraging JS's concept of *truthiness,* we frequently see code such as this version of `printAll`
from section *1. `typeof` type guards*:

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

In the following example, note that:

- `x`'s type is `string | number`
- `y`'s type is `string | boolean`

```javascript
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();                   // (method) String.toUpperCase(): string
    y.toLowerCase();                   // (method) String.toLowerCase(): string
  } else {
    console.log(x);                   // (parameter) x: string | number
    console.log(y);                   // (parameter) y: string | boolean
  }
}
```

This example shows how our `printAll` function from section *1. `typeof` type guards*
above can use *equality narrowing* to prevent run-time errors:

```javascript
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {         // (parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);              // (parameter) strs: string
    }
  }
}
```

This example shows how to use JS's looser checks `==` and `!=` - which do not convert their operands
to the same type before comparing them - to perform *equality narrowing:*

```javascript
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);            // (property) Container.value: number

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}
```


# 4. The `in` operator narrowing

The JS `in` operator determines whether an object has a specific property.
This enables TS to use it for *"`in` operator narrowing."*

Following is an example demostrating *"`in` operator narrowing:"*

```javascript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}
```

This example demonstrates how this can work with a `type` that has **optional** members:

```javascript
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;               // (parameter) animal: Fish | Human
  } else {
    animal;               // (parameter) animal: Bird | Human
  }
}
```

# 5. `instanceof` narrowing

The JS `instanceof` operator returns `true` when an object is in a class' *prototype chain.*
This allows TS to use `instance of` as a *type guard* to check for *"`instanceof` narrowing."*

Following is an example of *"`instanceof` narrowing:"*

```javascript
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());     // (parameter) x: Date
  } else {
    console.log(x.toUpperCase());     // (parameter) x: string
  }
}
```

# 6. Assignments

TS looks for assignments and narrows the type of the variable on the left to the type of
the variable on the right.

```javascript
let x = Math.random() < 0.5 ? 10 : "hello world!";   // let x: string | number
x = 1;

console.log(x);            // let x: number
x = "goodbye!";
console.log(x);            // let x: string
```

This example shows that TS flags an error when we try to assign a `boolean` value to `x`:

```javascript
let x = Math.random() < 0.5 ? 10 : "hello world!";    // let x: string | number
x = 1;

console.log(x);     // let x: number
x = true;           // Error: Type 'boolean' is not assignable to type 'string | number'.

console.log(x);     // let x: string | number
```


# 7. Control flow analysis

The term *control flow analysis* refers to TS's ability to recognize that, under certain
conditions, certain code is *unreachable*

Returning to the `padLeft` function from section *0. **Narrowing** and **type guards** defined*:

```javascript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;      // TS knows that when padding is numeric, this statement is unreachable
}
```

This example demonstrates how TS can recognize that as `x` holds different types of values and
is aware that `x`'s type changes in response to each change in value.

```javascript
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);          // let x: boolean

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);        // let x: string
  } else {
    x = 100;
    console.log(x);        // let x: number
  }

  return x;                // let x: string | number
}
```


# 8. Using type predicates

Note that the following function definition declares that `isFish` returns type `: pet is Fish`.

```javascript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

When a function specifies a return type in the form `parameterName is Type` it is called
a *"type predicate"*.
Th *type predicate* in the previous example causes TS to *narrow* the type of the argument
`pet` to `Fish`, as long as `pet`'s original type is compatible.

- *Type predicates* give developers better control over variables whose types change

Following is an example of how a developer can now use `isFish` to know which function to call
when it's time for the pet to move:

```javascript
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

The following example shows how to use `isFish` to `filter` an array named `zoo` containing
both `Fish` and `Bird`s so that it has only `Fish`:

```javascript
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```

## 8.1. `this` based type guards

TS also supports using the syntax `this is Type` in *"`this` based type guards"*
Classes can use these to narrow their own type.

For more about *"`this` based type guards"* see the section about them on the TS Manual's
[classes page](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards).


# 9. Discriminated unions

```javascript
```


# 10. The `never` type

```javascript
```

# 11. Exhaustiveness checking

```javascript
```

