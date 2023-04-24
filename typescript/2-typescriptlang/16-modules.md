
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

The following example shows how JS and TS both understand the same `export` and `import` syntax:

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

#### 3.2.1.1. `import type`

The following example shows how you can use the `import type` TS extension to the JS `import` syntax to
`import` *only* types:

```javascript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };   // Error: "'createCatName' cannot be used as a value
                                                            //   because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";

// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;

// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
```

**Note:** this example is a little tricky to understand because it allegedly contains code from three different files!

#### 3.2.1.2. Inline `type` imports

The following example shows how to use the TS *inline `type` import* extension to import a specific `type`:

```javascript
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";

export type Animals = Cat | Dog;
const name = createCatName();
```

### 3.2.2. ES Module Syntax with CommonJS Behavior

The following example code demonstrates how ES Module syntax *"are for most cases the same as
`require`",* which is used in the CommonJS and AMD environments:

```javascript
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
```

# 4. CommonJS Syntax

The `npm` node package manager uses **CommonJS syntax,** so even if you use the ES Modules syntax and
do not plan on using it, having a basic understanding of it can be helpful.

### 4.1. Exporting

The following example shows how to use *CommonJS syntax* to list a set of identifiers as `module.exports`
on a global `module`:

```javascript
function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};
```

The following example shows how to use `require` to import "these files" [sic]:

```javascript
const maths = require("maths");
maths.pi;
```

I am guessing the code in the first example is in a file named `maths.ts`?

The following example how to use JS's destructuring feature to "simplify" this type of import:

```javascript
const { squareTwo } = require("maths");
squareTwo;                  // const squareTwo: any
```

**Note:* admittedly, as far as I'm concerned anyway, these examples do not explain this very well; for details see the
[TS modules reference page](https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require).

## 4.2. CommonJS and ES Modules interop

If you are mixing the CommonJS and ES Modules syntaxes and run into issues, consider setting the
[esModuleInterop](https://www.typescriptlang.org/tsconfig#esModuleInterop) TS compiler flag.

# 5. TypeScript’s Module Resolution Options

The process of using a filename string in an `import` or `require` statement to determine which file
on the filesystem to read is called *"module resolution."*

TS uses one of the following resolution strategies:

- *Node:*
  - Replicates the Node.js strategy for CommonJS code
  - Includes checks for `.ts` and `.d.ts` files
- *Classic:*
  - Used when the `module` compiler option is *not* `commonjs`
  - Included for backward compatibility

TS includes the following flags that influence how the module strategy works:

- [moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)
- [baseUrl](https://www.typescriptlang.org/tsconfig#baseUrl)
- [paths](https://www.typescriptlang.org/tsconfig#paths)
- [rootDirs](https://www.typescriptlang.org/tsconfig#rootDirs)

For comprehensive information about this topic, see the
[TS Module Resolution page](https://www.typescriptlang.org/docs/handbook/module-resolution.html).

# 6. TypeScript’s Module Output Options

The following options determine the nature of the JS code that TS emits for modules:

- [`target`](https://www.typescriptlang.org/tsconfig#target)
  - Specifies the version of JS the emitted files should conform to
  - `ES6` is a good choice, because most modern browsers support it
- [`module`](https://www.typescriptlang.org/tsconfig#module)
  - Determines whether to use the CommonJS syntax in emitted JS files
  - When working on node projects, you probably want to use `CommonJS`

Following is an example of ES Modules syntax:

```javascript
import { valueOfPi } from "./constants.js";

export const twoPi = valueOfPi * 2;
```

## 6.1. `ES2020`

The following example code is apparently the JS emitted for the first example in this section
when the `module` option is set to `ES2020`:

```javascript
import { valueOfPi } from "./constants.js";
export const twoPi = valueOfPi * 2;
```

## 6.2. `CommonJS`

The following example code is apparently the JS emitted for the first example in this section
when the `module` option is set to use `CommonJS` syntax:

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;
```

## 6.3. `UMD`

The following example code is apparently the JS emitted for the first example in this section
when the `module` option is set to `ES2020`:

```javascript
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
    exports.twoPi = constants_js_1.valueOfPi * 2;
});
```

Again, for details see the
[TSConfig Reference for `module`](https://www.typescriptlang.org/tsconfig#module).

# 7. TypeScript `namespaces`

The TS `namespaces` module format is an older standard that is still used in projects such as
[DefinitelyTyped](https://www.typescriptlang.org/dt).

**Note:** that particular link is currently broken; maybe check back later?

The manual recommends using the **ES Modules standard,** *"to align with JavaScript's direction."*

For more information about `namespaces`, see the
[namespaces reference page](https://www.typescriptlang.org/docs/handbook/namespaces.html).

