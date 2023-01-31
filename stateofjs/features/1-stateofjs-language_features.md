
# 1-stateofjs-language_features.md

This page contains some notes about the [stateofjs' list of JS language features](https://2022.stateofjs.com/en-US/features/language/)

# Proxies

Here are some notes from
[MDN's page describing *proxies*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

## Overview

> The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

This feature allows creation of a *proxy* object that you can use in place of another object.

Typical uses for a *proxy* are "to log property accesses, validate, format, or sanitize inputs, and so on."

## Simplistic Example Code

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


# Promise.allSettled()

Here are some notes from
[MDN's page describing *Promise.allSettled()*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).

## Overview

`Promise.allSettled()` is a static method that takes an *iterable* list of promises and returns a single
[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which,
in turn, fulfills when all of the passed-in promises fulfill.

## TODO

If I need to use `Promise`s, I should learn more about them.  This link looks like it would be a good place to start:

- [MDN *Using promises* tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Description

`Promise.allSettled()` is one of four static
[promise concurrency methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency).

- `Promise.all()` fulfills when all promises fulfill, else rejects
- `Promise.allSettled()` fulfills when all promises settle
- `Promise.any()` fulfills when any of the promises fulfills, rejects when all reject
- `Promise.race()` settles when any promise settles, rejects when any promise rejects

A typical use for `Promise.allSettled()` is when the tasks are independent.
If the promises are interdependent, it may be better to use `Promise.allSettled()`.

## Simplistic Example Code

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
[MDN page for *Promise.allSettled()*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).


# import

Here are some notes from
[MDN's page describing *import*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *import*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


# Name of Feature

Here are some notes from
[MDN's page describing *Name of Feature*](MDN Page for Feature).

## Overview
## Description
## Simplistic Example Code

```javascript
```
```javascript
```
## For Details

For details about this feature, see the
[MDN page for *Name of Feature*](MDN Page for Feature).


