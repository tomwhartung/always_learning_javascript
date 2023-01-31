
# 1-stateofjs-language_features.md

This page contains some notes about the [stateofjs' list of JS language features](https://2022.stateofjs.com/en-US/features/language/)

# Proxies

Here are some notes from
[MDN's page describing proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

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

# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


# [Name of Feature]

## Overview
## Description
## Simplistic Example Code
## For Details

For details about this feature, see the
[MDN page for **]().

```javascript
```
```javascript
```


