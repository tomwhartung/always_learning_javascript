
# 5-state_and_lifecycle.md

Notes from going through step 5 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

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

