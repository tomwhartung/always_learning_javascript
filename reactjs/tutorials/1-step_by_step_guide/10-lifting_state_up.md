
# 10-lifting_state_up.md

Notes from going through step 10 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

# 10. Lifting State Up

When multiple components need to reflect the same changes to state, you should *"lift the state up"*
to the nearest common ancestor.

We will use the following components demonstrate how to lift the state up:

```javascript
// BoilingVerdict: returns a <p> tag with content stating whether water would boil at props.celsius temperature
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

```javascript
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

This code works ok, and is a good starting point, but it does not yet demonstrate how to lift the state up.

## Adding a Second Input

In this step we add a second input that accepts temperatures in Fahrenheit, and keeps the two temperature inputs in sync.

First we extract a TemperatureInput component out of the Calculator component:

```javascript
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

Because `TemperatureInput` now does all the work, we can update `Calculator` to use it - twice:

```javascript
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```

We still aren't there yet:

- Calculator doesn't keep the two inputs in sync
- Calculator doesn't display the verdict

## Writing Conversion Functions

Next we add these functions to convert the two types of temperature inputs:

```javascript
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// tryConvert: use the input convert function to try to convert the input temperature string
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

Almost there!  However this version still does not give us the verdict, nor does it keep the two input fields in sync.

## Lifting State Up

As mentioned previously, *lifting state up* means moving the processing of a state variable from two child components
up to their nearest ancestor.

In this example, that means moving the state of the `temperature` variable from the `TemperatureInput` component up
to the `Calculator` component.
This makes the `Calculator` component the *source of truth* for the value of the `temperature` variable.

Following is an overview of this process:

1. Replace `this.state.temperature` with `this.props.temperature` in `TemperatureInput`'s `render()` method
2. Update `TemperatureInput`'s `handleChange()` method to call its parent `Calculator`'s appropriate `on...Change()` method
   2.1. For `temperature`s in `celsius`, call `handleCelsiusChange()`
   2.2. For `temperature`s in `fahrenheit`, call `handleFahrenheitChange()`

### LSU Step 1. Replace `this.state.temperature` with `this.props.temperature` in `TemperatureInput`'s `render()` method

Code to change for step 1: update the `TemperatureInput` component, replacing `this.state.temperature` to `this.props.temperature`:

```javascript
  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    // ...
```

Because `TemperatureInput` has no control over its `props`, it should no longer call `this.setState()` to change
the value of the `temperature` variable.

### LSU Step 2. Update `TemperatureInput`'s `handleChange()` method to call `Calculator`'s appropriate `on...Change()` method

This means that, when the user inputs a new `temperature` value, the `TemperatureInput` component must update its
value in its `handleChange` method:

```javascript
  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    // ...
```

**Note:** `onTemperatureChange` is both a method and one of `TemperatureInput`'s `props`!

- As one of `TemperatureInput`'s `props`, `onTemperatureChange` is managed by the `Calculator` component
- When the value of of the `temperature` changes, the `Calculator` component will set this prop/method equal to
either its method `{this.handleCelsiusChange}` or `{this.handleFahrenheitChange}`, as appropriate
- Changes to the `Calculator` component occur in Step 3

Here is the code for our new, improved `TemperatureInput` component:

```javascript
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

To see this code complete with comments, see my pen
[10. My Lifting State Up](https://codepen.io/tomwhartung/pen/abjEeRV?editors=0110) on codepen.

```javascript
```

```javascript
```

```javascript
```

## Lessons Learned

```javascript
```

```html
```

