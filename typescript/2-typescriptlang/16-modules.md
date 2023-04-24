
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

The following example shows how you can use the `import {old as new}` syntax to change the name of an import:

```javascript
import { pi as π } from "./maths.js";

console.log(π);   // (alias) var π: number
                  //   import π
```

The following example shows how you can mix-and-match standard `import` syntax with
the `import {old as new}` syntax:

```javascript
// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}

// @filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";

RandomNumberGenerator;   // (alias) class RandomNumberGenerator
                         // import RandomNumberGenerator

console.log(π);     // (alias) const π: 3.14
                    // import π
```

The following example shows how you can use the `* as name` to import *all* exported objects into
the `name` namespace:

```javascript
// @filename: app.ts
import * as math from "./maths.js";

console.log(math.pi);
const positivePhi = math.absolute(math.phi);   // const positivePhi: number
```

The following example shows how you can `import` no code, yet have the JS engine execute it anyway:

```javascript
// @filename: app.ts
import "./maths.js";

console.log("3.14");
```

You might want to do this when the code in the module has side-effects, e.g., initialization, on other objects.

### 3.2.1. TypeScript Specific ES Module Syntax

The following example 
```javascript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

#### 3.2.1.1. `import` type

The following example 
```javascript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";

// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;

// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
```

#### 3.2.1.2. Inline type imports

The following example 
```javascript
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";

export type Animals = Cat | Dog;
const name = createCatName();
```

### 3.2.2. ES Module Syntax with CommonJS Behavior

The following example 
```javascript
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
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
