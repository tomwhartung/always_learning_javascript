
# 04-components_and_props.md

Notes from going through step 4 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Components and Props](https://reactjs.org/docs/components-and-props.html)

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

