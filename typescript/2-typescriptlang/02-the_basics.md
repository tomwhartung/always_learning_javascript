
# 02-the_basics.md

Some notes from reading the first page of the handbook, i.e.,
[The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).

# 1. The JS `typeof` operator and Dynamic Typing

The JS `typeof` operator allows us to identify primitive types like `string` and `number`,
but it provides no information when it comes to functions, objects, etc.

In other words, JS provides only *dynamic typing* done at run time.
To help predict what code will do *before* then we need *static typing.*

# 2. Static type-checking

TS is a *static type system* that allows us to find errors before run time.

Following is an example of a TS error message that can save us time when writing JS code:

```javascript
const message = "hello!";

message();    // Causes an error: "This expression is not callable.  Type 'String' has no call signatures."
```

# 3. Non-exception Failures

TS static type checking can also identify flaws in program logic: code that can execute ok
but give results that are undesired.

Following is an example of now JS handles data that is missing:

```javascript
const user = {
  name: "Daniel",
  age: 26,
};
user.location;     // JS returns undefined
```

Following is an example of how TS reports an error when it encounters the same sort of situation:

```javascript
const user = {
  name: "Daniel",
  age: 26,
};

user.location;    // Causes an error: "Property 'location' does not exist on type '{ name: string; age: number; }'."
```

This example shows how TS reports an error when it encounters a typo:

```javascript
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

This example shows how TS reports an error when it encounters a possibly crufty, uncalled function:

```javascript
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;    // Causes an error: "Operator '<' cannot be applied to types '() => number' and 'number'."
}
```

This example shows how TS reports an error when it encounters a basic logic error:

```javascript
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {   // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
```


# 4. Types for Tooling

TS *tooling* refers to its ability to enable editors to find errors, suggest options for code completion, etc.

Following is an example of the possibilities an editor might display in response to a user typing `res.sen`:

```javascript
import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.sen        // send
                 // sendDate
                 // sendfile
                 // sendFile
                 // sendStatus
```

Here are links to:

- [Quick list of supported editors](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)
- [TypeScript Editor Support for vim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)


# 5. `tsc`, the TypeScript compiler

Run this command to install `tsc`, the TS compiler, so that it globally accessible in:

```
$ sudo npm install -g typescript
[sudo] password for tomh:

added 1 package in 3s
npm notice
npm notice New minor version of npm available! 9.5.0 -> 9.6.4
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.4
npm notice Run npm install -g npm@9.6.4 to update!
npm notice
$ sudo npm install -g npm@9.6.4

removed 1 package, and changed 43 packages in 4s

18 packages are looking for funding
  run `npm fund` for details
$
```

These commands show how to run `tsc`, the Typescript compiler, on an extremely minimalistic *Hello, world!* program:

```
$ mkdir my-test_tsc
$ cd  my-test_tsc
$ cat > hello.ts
// Greets the world.
console.log("Hello world!");
$ tsc hello.ts
$
```

This program has no type errors, so there is *no* output from `tsc`.

The following shows the results of running `tsc` on a program *with* type errors:

```
$ mv hello.ts hello-ok.ts
$ cat > hello.ts
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan");
$ tsc hello.ts
hello.ts:6:1 - error TS2554: Expected 2 arguments, but got 1.

6 greet("Brendan");
  ~~~~~~~~~~~~~~~~

  hello.ts:2:24
    2 function greet(person, date) {
                             ~~~~
    An argument for 'date' was not provided.


Found 1 error in hello.ts:6

$
```

As expected, `tsc` reports an error because this version does not supply enough arguments when calling
the `greet` function.

**Note:** `typescript/projects/my-test_tsc/` contains these files:

- `hello-ok.ts` - the first source file that does *not* have any TS errors
- `hello-ok.js` - output from running `tsc` on `hello-ok.ts`
   - Note that `hello-ok.ts` *matches* `hello-ok.js` *exactly*
- `hello-error.ts` - the second source file that *has* a TS error
- `hello-error.js` - output from running `tsc` on `hello-error.ts`
   - Note that `hello-error.ts` does *not match* `hello-error.js`

# 6. Emitting with Errors

*Emitting* refers to when TS compiles a `.ts` file and generates a `.js` file.

- By default, TS *emits* a `.js` file regardless of whether the `.ts` file contains type errors.

The following command shows how to change TS's default behavoir so that,
in the event the `.ts` file has a type error, it does *not* emit a `.js` file.

```
$ tsc --noEmitOnError hello.ts
```


# 7. Explicit Types

Explicit types are types the developer declares *explicitly* by using a *type annotation.*

Following is an example of explicit types, annotated by `: string` and `: Date`:

```javascript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

## 7.1. Inferred Types Are Preferred

Following is an example of a variable declaration that would cause TS to *infer* that `msg` is a `string:

```javascript
let msg = "hello there!";
```

Quoting from
[this section of The Basics page](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types):

> it’s best not to add annotations when the type system would end up inferring the same type anyway.


# 8. Erased Types

Following is an example of:

```javascript
```


Following is an example of:

```javascript
```


Following is an example of:

```javascript
```


# 9. Downleveling

Following is an example of:

```javascript
```


# 10. 

Following is an example of:

```javascript
```

