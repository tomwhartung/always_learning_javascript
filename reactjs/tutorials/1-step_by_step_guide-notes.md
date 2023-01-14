
# 1-step_by_step_guide-notes.md

Taking some notes while I go through this reactjs tutorial:

- [ReactJS Step-by-step Guide](https://reactjs.org/docs/hello-world.html)

# 1. Hello World

Here is the smallest React example:

```html
<div id="root">
    <!-- This element's contents -->
    <!-- will be replaced with -->
    <!-- the React component we will -->
    <!-- define in the code. -->
</div>
```
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

We also need to use Babel as the JS preprocessor and include the following two ReactJS files:

```
https://unpkg.com/react/umd/react.development.js
https://unpkg.com/react-dom/umd/react-dom.development.js
```

**Note:** this code is now set up in my codepen template named *ReactJS Starting Point.*

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

Components can contain other components.  Following is a simple example of this ability:

```javascript
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

> Typically, new React apps have a single App component at the very top.

To make code easier to maintain, create small, reusable components and nest them within larger components.
In other words:

> Don’t be afraid to split components into smaller components.

See the tutorial for an example of this refactoring of a component named `Comment` that, after refactoring, contains reusable components
named `Avatar` and `UserInfo`.

## Creating "Pure" Components

"Pure" components **do not** modify values in the passed-in `props` argument.
All React components should be pure and should **never** modify `props` argument values!

Example of a pure function:

```javascript
function sum(a, b) {
  return a + b;      // Good!
}
```

Example of a function that is **not** pure:

```javascript
function withdraw(account, amount) {
  account.total -= amount;           // BAD!!!
}
```
 > **All React components must act like pure functions with respect to their props.**

# 5. State and Lifecycle

Refactored the ticking clock example from Section 3 to use a new, reusable `Clock` function component:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
function tick() {
  root.render(<Clock date={new Date()} />);
}
setInterval(tick, 1000);
```

A better solution would be for the Clock function component to set up its own timer, so we can just do:

```javascript
root.render(<Clock />);
```

> To implement this, we need to add “state” to the Clock component.

Each component has its own private state that is totally under its control.

As a first step, we convert our component function to a class.

## Converting a Function to a Class

There are five steps to this process:

1. Create an ES6 class and extend React.Component
2. Add an empty (for now) `render()` method to it
3. Move the component function's statements to the class' `render()` method
4. Change `props` to `this.props` in the body of the `render()` method
5. Delete the now-empty function definition

Here is the result:

```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

This, however, is not the whole solution.

## Adding Local State to a Class

Follow these steps to change the `date` from being a property to being part of the Clock component's state:

1. In `render()` replace `this.props.date` with `this.state.date`
2. Add a constructor to the `Clock` class to initialize `this.state` (*)
3. Remove the `date` prop from the call to `render()` the `Clock` component

(*) Note the call to `super()` in the new constructor, which passes the `props` to the base class

> **Class components should always call the base constructor with `props`.**

Now we can move the call to `render()` out from the `tick()` function to the bottom of our code.
Following is the result:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

But!  The clock no longer ticks!  Rats!  We'll fix that next.

## Adding Lifecycle Methods to a Class

Now we want to add code to set up the timer when it renders the `Clock`.

> This is called *“mounting”* in React.

We will also add code to clear the timer when we remove the `Clock` from the DOM.

> This is called *“unmounting”* in React.

We do this by adding these *"lifecycle methods"* to the class:

```javascript
  componentDidMount() {      // runs after the component has been rendered to the DOM
  }
  componentWillUnmount() {   // runs after the component has been rendered to the DOM
  }
```
Our `componentDidMount()` method runs after the component has been rendered to the DOM.
It needs to start the timer and save its id on `this` so we can clear the timer when the `Clock` shuts down.

```javascript
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
```

**Note:** We will define the `tick()` method momentarily.

Our `componentWillUnmount()` method runs after the component has been rendered to the DOM.
It uses the id we saved on `this` to clear the timer.

```javascript
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

Here is the `tick()` method, which `componentDidMount()` calls to set the state of the `date`.

```javascript
tick() {
  this.setState({
    date: new Date()
  });
}
```

## Using State Correctly

These are the rules we need to follow when using `setState()`:

1. Use the `setState()` method to modify the state: `this.setState({comment: 'Hello'});`
2. Do not assume React will update the state immediately: for efficiency, React may batch these calls
   - If you need to set a value based upon the most recent value of a `props` or `state` variable, use a function as an argument to `setState()`
   - The function may be a regular function or an arrow function
   - Below are examples of the wrong way, followed by the correct use both an arrow and a regular function
3. State variables are merged, not overwritten
   - In other words, if your state contains more than one variable, you can update them independently with separate calls to `setState()`

```javascript
// Demonstrating rule 2: the correct way to set the state based on the most recent values in the state and props arrays
// --------------------------------------------------------------------------------------------------------------------
// WRONG: accessing values of state and props directly
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct: using an arrow function to set the state of the counter based on up-to-date values
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
// Correct: using a regular function to set the state of the counter based on up-to-date values
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

Note that the `tick()` method above uses `setState()` to set the state of the `date`:

```javascript
tick() {
  this.setState({
    date: new Date()
  });
}
```

## Top-down, Unidirectional Data Flow

Parent and child components are blind to a component's state (and to whether it's a function or a class).

To demonstrate this, we break the code used to format the date out of `Clock` and use it to create a `FormattedDate` component.

```javascript
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

Then update the `Clock` class' `render()` method to use the new `FormattedDate` component:

```javascript
{/* Replace the <h2> tag with our new component */}
<FormattedDate date={this.state.date} />
```

> This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
>
> If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

## Demonstrating Our Reusable Components

Inspired by the tutorial, I played around with my pen a bit and came up with this `App` function component:

```javascript
// App: uses both of our components a time or two
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <h2>Just the date, ma'am:</h2>
        <FormattedDate date={new Date()} />
      <Clock />
    </div>
  );
}
const root = ReactDOM.createRoot( document.getElementById('root') );

// root.render( <Clock date={new Date()} /> );
root.render( <App /> );
```

**Note:** I am not sure, but it feels like using `new Date()` to create a new `FormattedDate` might be cheating?

I should probably put the date in the `App` component, then pass it down to `Clock` in addition to `FormattedDate`.
Probably!  But that would require making `App` a class and refactoring a bit and yadda yadda yadda and,
 the problem is, I'm just playing around, so I say it's ok to be lazy!!

# 6. Handling Events

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

