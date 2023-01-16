
# 2-introducing-jsx.md

Notes from going through step 2 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

# 2. Introducing JSX

React doesn't use templates, but rather uses "components" that contain both markup and logic.

```javascript
const element = <h1>Hello, world!</h1>;
```

Updated the "My Hello World in React" in my codepen account to use this declaration.

Copied, pasted, and edited the following code from the tutorial into this pen:

**Before Editing**

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Tom',
  lastName: 'H.'
};
```

**After Editing**

```javascript
function formatName(user) {
  return myName.firstName + ' ' + myName.lastName;
}
const myName = {
  firstName: 'Tom',
  lastName: 'H.'
};
const myNameMarkup = (
  <h1>
    Hello, {formatName(myName)}!
  </h1>
);
```

*Voila!*

Added another new function, demonstrating use of JSX inside of an `if` statement:

**Before Editing**

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

**After Editing**

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

It's also ok to use JSX inside of `for` statements.

## Attributes

"Don't put quotes around curly braces" when using a variable to specify an atttribute:

`const element = <img src={user.avatarUrl}></img>;`

## Child Elements

**Was unable to get this to work, rats.**

## "JSX Prevents Injection Attacks"

> It is safe to embed user input in JSX: ... By default, React DOM escapes any values embedded in JSX before rendering them....

## TODO

> Enable "Babel" language definition for your editor.

