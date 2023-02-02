
# 1-stateofjs-language_features.md

This page contains some notes about the
[stateofjs' list of JS language features](https://2022.stateofjs.com/en-US/features/language/).

# 1. Proxies

Here are some notes from
[MDN's page describing *proxies*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

## Overview

> The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

This feature allows creation of a *proxy* object that you can use in place of another object.

Typical uses for a *proxy* are "to log property accesses, validate, format, or sanitize inputs, and so on."

## Example Code

This code creates an empty proxy class, that does not do anything.

```javascript
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Customize the proxy by defining functions inside the `{}` when declaring it.

> Handler functions are sometimes called *traps....*

Use a [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
method to access the code in the proxied class:

```javascript
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

## For Details

For details about this feature, see the
[MDN page for *proxies*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).


# 2. `Promise.allSettled()`

Here are some notes from
[MDN's page describing *`Promise.allSettled()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).

## Overview

`Promise.allSettled()` is a static method that takes an *iterable* list of promises and returns a single
[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which,
in turn, fulfills when all of the passed-in promises fulfill.

## Syntax

```javascript
Promise.allSettled(iterable)
```

## TODO

If I need to use `Promise`s, I should learn more about them.  This link looks like it would be a good place to start:

- [MDN *Using promises* tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Description

`Promise.allSettled()` is one of four static
[promise concurrency methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency).

- `Promise.all()` fulfills when all promises fulfill, else rejects
- `Promise.allSettled()` fulfills when all promises settle
- `Promise.any()` fulfills when any of the promises fulfills, rejects when all reject (*)
- `Promise.race()` settles when any promise settles, rejects when any promise rejects

(*) This file covers the `Promise.any()` feature in subsection 10. `Promise.any()`.

A typical use for `Promise.allSettled()` is when the tasks are independent.
If the promises are interdependent, it may be better to use `Promise.allSettled()`.

## Example Code

```javascript
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```
```javascript
```

## For Details

For details about this feature, see the
[MDN page for *`Promise.allSettled()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).


# 3. Dynamic Import: `import`

Here are some notes from
[MDN's page describing *`import`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

## Overview

`import` is a static declaration that imports the read-only *live bindings* (variables and functions) which are
[exported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
by another module.

## Syntax

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

## Description

Only the top-most level of a [module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
may use `import`.

There are many subtleties to `import` statements.  For example, there are four forms:

- [Named import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#named_import)
- [Default import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#default_import)
- [Namespace import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import)
- [Side effect import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only)

## Example Code

```javascript
// Named import
import { foo, bar } from "/modules/my-module.js";
// Default import
import myDefault, * as myModule from "/modules/my-module.js";
// Namespace import
import * as myModule from "/modules/my-module.js";
// Side effect import
import "/modules/my-module.js";
```

## For Details

For details about this feature, see the
[MDN page for *`import`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).


# 4. Private Fields: Private class features

Here are some notes from
[MDN's page describing *Private class features*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

## Overview

You can create private members of a class by previxing the name with a hash (**#**) character.

## Description

Following is a list of class features that you can make private:

- Private fields
- Private methods
- Private static fields
- Private static methods
- Private getters
- Private setters
- Private static getters
- Private static setters

These are formally known as *private properties*.

Note that constructors cannot be made private, but there is a
[work-around of sorts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#simulating_private_constructors).

## Example Code

```javascript
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#subPrivateField: 23}
```

## For Details

For details about this feature, see the
[MDN page for *Private class features*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).


# 5. Nullish Coalescing: Nullish coalescing operator (`??`)

Here are some notes from
[MDN page describing *Nullish coalescing operator (`??`)*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

## Overview

The `??` operator works as follows:

- if the operand on the left side is `null` or `undefined`,
  - returns the operand on the right side,
- else
  - returns the operand on the left side.

## Syntax

```javascript
leftExpr ?? rightExpr
```

## Description

The `??` operator is good for making sure a variable has a default value.

It is similar to the logical OR `||` operator, which returns the opearand on the right side when the operand on the left is *falsy.*

If you want to combine `??` with `||` or `&&`, use parentheses to indicate precedence.

### Accessing Object Properties

**Note:** When accessing the property of an object, trying to access `null` or `undefined` values may throw an error.
In this case, consider using the
[optional chaning operator `.?`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

## Example Code

These examples demonstrate how to provide default values:

```javascript
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```

## For Details

For details about this feature, see the
[MDN page for *Nullish coalescing operator `(??)`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).


# 6. Numeric Separators: Lexical grammar

Here are some notes from
[MDN's page describing *Lexical grammar*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar).

## Overview

**Numeric separators** is a topic that appears under the heading
[Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals),
which is about 2/3 the way down MDN's Lexical grammar page.

## Description

Numeric separators are underscore ("`_`") characters that help improve the readability of long numeric literals.

**Note:** At the time of this writing, some rather obscure browsers do not support this feature.
For details see
[the Can I Use page for Numerical separators](https://caniuse.com/mdn-javascript_grammar_numeric_separators).

## Example Code

```javascript
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

There are some caveats:

```javascript
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

## For Details

For details about this feature, and a **whole lot more** about JavaScript's syntax, see the
[MDN page for *Lexical grammar*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar).


# 7. `String.prototype.replaceAll()`

Here are some notes from
[MDN's page describing *`String.prototype.replaceAll()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

## Overview

`String.prototype.replaceAll()` finds all occurrences of a pattern in a string, replaces each occurrence with a new string or the
return value of a function, and returns the new string.

## Syntax

```javascript
replaceAll(pattern, replacement)
```

## Description

The pattern may be a regular expression or a literal.
If you use a regular expression, the global option must be set.

The original string is left unchanged.

To replace only the first occurrence of the pattern, use
[`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## Example Code

```javascript
"aabbcc".replaceAll("b", ".");
// 'aa..cc'

// "This will work:"
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## For Details

For details about this feature, see the
[MDN page for *`String.prototype.replaceAll()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).


# 8. `String.prototype.matchAll()`

Here are some notes from
[MDN's page describing *`String.prototype.matchAll()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll).

## Overview

`String.prototype.matchAll()` returns an iterator of all results from matching a regular expression to the specified string.

## Syntax

```javascript
matchAll(regexp)
```

Where `regexp` is a regular expression object, or an object with a Symbol.matchAll() method.

## Description

The returned `Array` is not restartable and contains another `Array`
"with the same shape as the return value of `RegExp.prototype.exec()`."

The `regex` must have the global flag set, else `matchall()` throws a `TypeError` exception.

## Example Code

```javascript
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.

// matches iterator is exhausted after the for...of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`String.prototype.matchAll()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll).


# 9. Logical Assignment: Logical AND assignment `(&&=)`

Here are some notes from
[MDN's page describing *Logical AND assignment `(&&=)`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment).

## Overview

The `&&=` operator works as follows:

- if the operand on the left side is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
  - assigns the value of the operand on the right side to the operand on the left side,
- else
  - does not change the operand on the left side.

## Syntax

```javascript
expr1 &&= expr2
```

## Description

```javascript
x &&= y
```

Is equivalent to:

```javascript
x && (x = y)
```

In other words, if `x` is falsey, it maintains its value, else it is set to the value of `y`.

## Example Code

```javascript
let x = 0;
let y = 1;

x &&= 0; // 0: x is falsey, so does not change
x &&= 1; // 0: x is falsey, so does not change
y &&= 1; // 1: y is truthy, so gets the new value (1)
y &&= 0; // 0: y is truthy, so gets the new value (0)
```

## For Details

For details about this feature, see the
[MDN page for *Logical AND assignment `(&&=)`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment).


# 10. `Promise.any()`

Here are some notes from
[MDN's page describing *`Promise.any()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any).

## Overview

Given an iterable of promises, `Promise.any()` returns a single promise that fulfills when **any** in the list fulfills, or
rejects when **all** of the promises in the list reject.

## Syntax

```javascript
Promise.any(iterable)
```
`iterable` is an iterable, such as an Array, of promises.

## Description

`Promise.any()` *short-circuits* after only one fulfillment,
and does not care about any of the others in the passed-in `iterable`.

Note that `Promise.any()` differs from the other `Promise.*` static methods in that it:

- `Promise.any()` returns only one fulfillment, while `Promise.all()` returns an array of them
- `Promise.any()` returns the first *fulfilled* promise, while `Promise.race()` returns the first *settled* promise
- You can find information about the `Promise.allSettled()` feature in subsection 2. `Promise.allSettled()`

## Example Code

```javascript
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
});
// Logs:
// Done quick
```
## For Details

For details about this feature, see the
[MDN page for *`Promise.any()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any).


# 11. `Array.prototype.at()`

Here are some notes from
[MDN's page describing *`Array.prototype.at()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`Array.prototype.at()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).


# 12. Top Level `await()`: `await`

Here are some notes from
[MDN's page describing *`await`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`await`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).


# 13. Temporal: `Date`

Here are some notes from
[MDN's page describing *`Date`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`Date`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).


# 14. `Array.prototype.findLast()`

Here are some notes from
[MDN's page describing *`Array.prototype.findLast()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`Array.prototype.findLast()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).


# 15. `Error.prototype.cause`

Here are some notes from
[MDN's page describing *`Error.prototype.cause`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`Error.prototype.cause`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause).


# 16. `Object.hasOwn()`

Here are some notes from
[MDN's page describing *`Object.hasOwn()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn).

## Overview
## Syntax
```javascript
```
## Description
## Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *`Object.hasOwn()`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn).


# 17. Regexp Match Indices: (No link to MDN given?!?!?!)

**TODO:** Look this up when (almost) done!
