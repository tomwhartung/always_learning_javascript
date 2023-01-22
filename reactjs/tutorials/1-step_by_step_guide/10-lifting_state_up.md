
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


```javascript
```

```html
```

```javascript
```

```html
```

