
# 11-composition_vs_inheritance.md

Notes from going through lesson 11 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Composition vs. Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

# 11. Composition vs. Inheritance

The tutorial recommends using the former (composition) rather than the latter (inheritance).

This lesson shows how some newbies might think inheritance would work better for some situations, and
how to accomplish the same goals using composition.

## Containment

Compositon works well when a component doesn't know what children it will have until run time.
Examples include generic boxes such as sidebars and dialogs.

### Containment Using ReactJS' `children` prop

For this use case, ReactJS implements a special `children` property:

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This code demonstrates how the `FancyBorder` component can use the special `children` property:

```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

> Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.

To see this code complete, see my pen
[11. My WelcomeDialog 1](https://codepen.io/tomwhartung/pen/zYLRVag?editors=0010) on codepen.

Note that, unlike previous pens, this one includes some special CSS code!

### Containment Using Custom/DIY Properties

If you need something more specific than `children`, you can create your own prop names, and nest your custom
components as children.

This example shows how to have panes on the right and left sides:

```javascript
// Contacts: a component we might want to use for contacts
function Contacts() {
  return <div className="Contacts" />;
}

// Chat: a component we might want to use for chatting
function Chat() {
  return <div className="Chat" />;
}

// SplitPane: component with right and left panes
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

// App: a component that uses the two sides of the SplitPane component
function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Again, this example works only with the help of some custom CSS!

To see this code complete, see my pen
[11. My SplitPane App](https://codepen.io/tomwhartung/pen/poZLzPR?editors=1010) on codepen.

## Specialization

We might want to use inheritance because we think of a `Cat` as a special type of `Animal`, and a
`WidgetDialog` as a special type of `BaseDialog`.

When using ReactJS, it's actually better to use composition and have our `SpecficDialog` uses `props`
to configure and render a `GenericDialog`.

```javascript
// FancyBorder: ye olde component with a so-called "Fancy" border
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// Dialog: generic dialog component with a fancy border
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

// WelcomeDialog: component to demonstrate how we might customize our generic "Dialog" component
function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WelcomeDialog />);
```

The results of this code look familiar, but note that this example is slightly more sophisticated with its nesting of components.

To see this code complete, see my pen
[11. My WelcomeDialog 2](https://codepen.io/tomwhartung/pen/xxJWKpJ?editors=1010) on codepen.

### Class Components Work Just Fine!

This example shows that we can use reactJS components defined as classes, *no problemo*!

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// Dialog: a generic function dialog used by a specific class dialog named SignUpDialog,
//     and in turn uses a smaller function dialog named FancyBorder
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

// SignUpDialog: specific class dialog that uses a generic function dialog, etc.
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUpDialog />);
```

To see this code complete, see my pen
[11. My Using Class Components](https://codepen.io/tomwhartung/pen/wvxmwEW?editors=1010) on codepen.

## So What About Inheritance?

> At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

> Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way.

> If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module.

So there you have it!!

