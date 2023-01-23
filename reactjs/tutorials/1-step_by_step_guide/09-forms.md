
# 09-template.md

Notes from going through lesson 9 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Forms](https://reactjs.org/docs/forms.html)

# 9. Forms

Because form elements keep some of their own internal state, they work differently in ReactJS.

As a simple example, the following form allows input of a person's name:

```javascript
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

By default, submitting a form takes a user to a new page, and by default this is how ReactJS works.

If you prefer that your program stays on the same page yet still has access to thei value input by the user, use a *Controlled Component.*

## Controlled Components

ReactJS allows combining the state contained in input elements like `<input>`, <textarea>, and `<select>` with
the state property of ReactJS components that can be updated only by calls to the `setState()` function.

**This is done by making ReactJS's state "the single source of truth."**
This makes the input form element what is called a *"controlled component"*

The following example shows a NameForm component class that  makes the simple `name` `<input>` tag above a controlled component.
This allows us to include code that logs the name when the user submits it:

```javascript
// NameForm: Class to allow writing submitted names to a log
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // event handler for when the user presses a key (when the input field has the focus)
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // event handler for when the form is submitted
  //   call preventDefault() so that we stay on this page rather than go to a new one
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} **onChange={this.handleChange}** />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Note that `this.handleChange` is called every time the user presses a key!

To see this code working, see the [9. My NameForm pen](https://codepen.io/tomwhartung/pen/KKByOZM) on codepen.

## The `<textarea>` Tag

ReactJS handles `textarea` elements like `input` elements in that it uses a `value` state property to set its value
(rather than putting the value between the `<textarea>` and `</textarea>` tags).

The following example is similar to the previous example except it uses a `textarea` instead of an `input` element:

```javascript
// EssayForm: component to demonstrate how React processes textarea elements
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    // initialize the text area with some text:
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

To see this code working, see the [9. My EssayForm pen](https://codepen.io/tomwhartung/pen/wvxpyqo?editors=0010) on codepen.

## The `select` Tag

As with the `input` and `textarea` elements, ReactJS uses a `value` state property to pre-select one of the values in a
`select` tag's drop-down list.

The following example code shows how this works:

```javascript
// FlavorForm: component to allow user to select a flavor from a drop-down list
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

To see this code working, see the [9. My FlavorForm pen](https://codepen.io/tomwhartung/pen/mdjpXXe?editors=1010) on codepen.

**Note:** As per a suggestion in this sub-section of the tutorial, I updated this pen to allow multiple values to be selected.
Unfortunately, this does not seem to work all that well, at least not without some additional code.

## The `<input type="file" />` Tag

Quoting from this section in the tutorial:

> Because its value is read-only, it is an uncontrolled component in React. It is discussed together with other uncontrolled
components later in the documentation.

## Handling Multiple Inputs

When your form has multiple inputs, add a `name` attribute to each one.
ReactJS then sets the value of `event.target.name` to the name of the input field currently being edited by the user.

The following code demonstrates how to do this:

```javascript
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // **Note:** this uses the *ES6 computed property name syntax* to update the correct state variable (*)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

**(*) Note:** using the *ES6 computed property name syntax* means that this ES6 code:

```javascript
this.setState({
  [name]: value
});
```

is equivalent to this ES5 code:

```javascript
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

In other words, this syntax allows us to merge a partial state - i.e., a change to a single state variable - into the current state.

## Controlled Input Null Value

The following code shows how to lock an input field, preventing the user from changing an input value, until after a short delay (*):

```javascript
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
```

(*) At least, that's what I think it does.  Maybe refer back to this subsection later...???

## Alternatives to Controlled Components

In some circumstances working with Controlled Components may be too tedious, i.e., overkill,
for example, when working with a codebase that already uses a non-React library.

In cases like these, you may want to consider working with
[UnControlled Components](https://reactjs.org/docs/uncontrolled-components.html), which is an advanced topic.

## Fully-Fledged Solutions

For a more complete solution, one that includes validation and keeping track of which fields have changed,
consider looking at [Formik](https://jaredpalmer.com/formik), or something similar.

