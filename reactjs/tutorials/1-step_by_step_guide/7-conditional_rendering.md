
# 7-conditional_rendering.md

Notes from going through step 7 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

# 7. Conditional Rendering

There are several ways to create and render elements and components based on the current values of the state and available properties.

- Use the JavaScript `if` statement
- Use the conditional operator ( `x ? y : z` )
- Use variables to refer to elements you want to display (see "Element Variables" below)

Following is an example of using an `if` statement based on the value of a passed-in property:

```javascript
// UserGreeting: display when the user is logged in
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

// GuestGreeting: display when the user is NOT logged in
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Greeting: based on whether the user is logged in, render the appropriate greeting
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// To switch between rendering one of the two elements, un-comment one statement and comment-out the other:
root.render(<Greeting isLoggedIn={true} />);
// root.render(<Greeting isLoggedIn={false} />);
```

To see this example work, see my pen ["My Conditional Rendering Example"](https://codepen.io/tomwhartung/pen/oNMeoZE?editors=1111) on codepen.
(Toggle the commented-out line at the end to swap rendering of the two function components.)

## Element Variables

```javascript
```

```javascript
```

```html
```

```javascript
```

```javascript
```

```html
```
