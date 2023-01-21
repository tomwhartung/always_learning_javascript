
# 9-template.md

Notes from going through step 9 of this reactjs tutorial:

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

ReactJS handles `textarea` elements like `input` elements in that it uses a `value` property to set its value
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

```html
```

```javascript
```

```html
```

```javascript
```

```html
```

