
# 6-handling_events.md

Notes from going through step 6 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Handling Events](https://reactjs.org/docs/handling-events.html)

# 6. Handling Events

When asking ReactJS to handle events, observe the following rules:

(1) ReactJS events are in camelCase (**NOT** lowercase)
(2) Pass a function defined in curly braces as the event handler (**NOT** a string)
(3) To prevent default behavior, call `preventDefault` explicitly (**RATHER THAN** returning `false`)
(4) In general, provide an event listener when rendering an element (**RATHER THAN** calling `addEventListener`)
    - When the component is a class, the event handler is usually contained within that class

## Example of Rules (1) and (2):

```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

## Example of Rule (3)

To call `preventDefault` explicitly (**RATHER THAN** returning `false`) to prevent default behavior, do this:

```javascript
function Form() {
  function **handleSubmit(e)** {
    **e.preventDefault()**;
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={**handleSubmit**}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

and **NOT** this:

```html
<form onsubmit="console.log('You clicked submit.'); **return false**">
  <button type="submit">Submit</button>
</form>
```

>React events do not work exactly the same as native events. See the [SyntheticEvent reference](https://reactjs.org/docs/events.html)
guide to learn more.

## Example of Rule (4)

Provide an event listener when rendering an element (**RATHER THAN** calling `addEventListener`) by putting the event handler within that class:

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button **onClick={this.handleClick}**>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

The `Toggle` component provides a button allowing users to toggle it between ON and OFF states.

See the [My Toggle Component](https://codepen.io/tomwhartung/pen/ZEjyMqV) pen on [codepen.io](https://codepen.io).

**Note to Self:** in a Class, the `render()` method needs to `return` the JSX markup.

### Notes Concerning Calling the `bind()` Function

This seems non-intuitive to me, but apparently it shouldn't be.  Quoting from the tutorial:

> If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

And:

> This is not React-specific behavior; it is a part of how functions work in JavaScript....

> Generally, if you refer to a method without () after it, such as `onClick={this.handleClick}`, you should `bind` that method.

And, "[i]f calling `bind` annoys you", see this tutorial page for two work-arounds: using *class fields syntax* or "an arrow function in the callback".
After describing these work-arounds, the page expresses a caveat, so is maybe not the best way to handle events.

Moreover, it seems best to stick to using `bind()` in classes that create components:

> We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.


## To Do

I had some issues getting My Toggle pen to render the button!  **Yes, issues!**  Go figure!!

** When having issues, consider using [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) instead of `console.log()` statements.

## Passing Arguments to Event Handlers

Use code similar to the following to pass a parameter, such as a row `id` number, to an event handler:

```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

This code passes the argument `e`, which represents the React event, as the **second** argument **after the ID**.

