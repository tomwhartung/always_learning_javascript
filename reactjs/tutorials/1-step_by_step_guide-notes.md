
# 1-step_by_step_guide-notes.md

Taking some notes while I go through this reactjs tutorial:

- [ReactJS Step-by-step Guide](https://reactjs.org/docs/hello-world.html)

# 1. Hello World

Here is the smallest React example:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

## Getting "My Hello World in React" to Work in My Codepen Account

I did the following to get the example above to work in my new codepen account:

1. Created the account
1. Copy-and-pasted the code (not sure whether I created a pen...)
1. Created a collection named "Reactjs step-by-step tutorial code"
1. Renamed the pen by clicking on the pencil next to "Untitled" in the upper-left-hand corner to "My Hello World in React"
1. Added the pen to the collection
1. Noticed a little red exclamation point in the bottom right corner of the JS panel
1. Clicked on the gear icon in the JS panel
1. Changed JS Preprocessor to Babel
1. Added the following External Scripts, copied from Dan Abramov's "Hello World in React" pen referenced and linked to in the tutorial:
   - https://unpkg.com/react/umd/react.development.js
   - https://unpkg.com/react-dom/umd/react-dom.development.js

After waiting a few seconds, it worked!!

## Modern JS

This page links to the following page:

- [Modern JavaScript in React Documentation](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c)

It is for people used to old-school JS, such as *moi,* and contains the following tips:

- They use `let` and `const` instead of `var` to define variables
- They use `class` to define classes
  - *Don't* put commas between class method definitions
  - The value of `this` in a method **depends on how it is called**
    - See the [page for Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Boxing_with_prototype_and_static_methods)
      in the MDN docs
    - (Looked at the page but did not readily see what they are talking about.)
- They sometimes use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
  which are like regular functions, except shorter
  - They do not have their own `this`, `arguments`, or `super`

# 2. JSX

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

# 3. Rendering Elements

React elements are the "smallest building blocks of React apps."

- Your code must call the `render()` function to render the element it displays in the browser.
- To change what the browser displays, call the `render()` function repeatedly.

Code copy-and-pasted from the tutorial to below and the "Hello With Ticking Clock" pen on codepen.io.  And it works, cool!

```javascript
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

When you call `render()` multiple times, react compares the old DOM with the new DOM, and updates only the elements that have changed.

# 4. Components and Props

Components are like JavaScript functions that accept `props` (properties) as input and return React elements to be rendered on the screen.

## Two Ways to Define Components

Use a JS function or class to define a component.

### A Component as a JS Function

Following is a *function component:*

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### A Component as a JS Class

The following class definition is equivalent to the function component above:

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Using a Component to Create an Element

Note the use of the Component's name (**Welcome**) in the following definition:

```javascript
const element = <**Welcome** name="Sara" />;
```

> **Note: Always start component names with a capital letter.**

React assumes element definitions starting with a lower case letter are HTML tags.

### Components Can Be Nested

Components can contain other components:

```javascript
```

> Typically, new React apps have a single App component at the very top.

```javascript
```

```javascript
```

