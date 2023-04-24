
# 16-modules.md

Some notes from reading
[Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html).

# 0. Modules

This page focuses on:

- ES Modules, aka. ES6 modules, aka. "`import`/`export` syntax"
  - Added to JS spec in 2015; widely supported in 2020
- CommonJS, aka. "`module.exports =` syntax"
  - Pre-cursor to ES Modules

# 1. How JavaScript Modules are Defined

In ECMAScript 2015 and TS, *"any file containing a top-level `import` or `export`"* is a *module.*

- Each module has its *own scope*
- A module must `import` another module to access its variables, functions, classes etc.

# 2. Non-modules

Files *without* an `export` declaration or a top-level `await` are *scripts* that run in the global scope.

- To access the code in these files, use a `<script>` tag for each

The following example shows a line of code you can add to turn a *script* into a *module* that `export`s *nothing:*

```javascript
export {};
```

# 3. Modules in TypeScript

Answer these questions before using modules in TS:

- What *syntax* will be used?
- How will the modules *relate* to one another?
- What version of JS will the emitted code target?

## 3.1. ES Module Syntax

The following example shows how to use `export default` to declare a *main export* in your module:

```javascript
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```

The following example shows how to import and use the *main export* in the previous example:

```javascript
import helloWorld from "./hello.js";
helloWorld();
```

The following example shows how to `export` variables and functions in additon to the `default` or *main export:*

```javascript
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
```

The following example shows how to use some of the `export`ed code in the previous example:

```javascript
import { pi, phi, absolute } from "./maths.js";

console.log(pi);
const absPhi = absolute(phi);   // const absPhi: number
```

## 3.2. Additional Import Syntax

The following example 
```javascript
```

The following example 
```javascript
```

The following example 
```javascript
```

The following example 
```javascript
```

# 4. CommonJS Syntax

The following example 
```javascript
```

The following example 
```javascript
```

The following example 
```javascript
```

The following example 
```javascript
```

## 4.1. CommonJS and ES Modules interop


# 5. TypeScript’s Module Resolution Options

The following example 
```javascript
```

# 6. TypeScript’s Module Output Options

The following example 
```javascript
```

# 7. TypeScript namespaces

The following example 
```javascript
```

