
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

To see this example work, see my pen ["My Which Greeting to Display"](https://codepen.io/tomwhartung/pen/oNMeoZE?editors=1111) on codepen.
(Toggle the commented-out line at the end to swap rendering of the two function components.)

## Element Variables

Following is an example showing how variables can reference components and the code can decide which components to display based on the state.

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

// LoginButton: function component to display a login button
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// LogoutButton: function component to display a logout button
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// LoginControl: class to decide which components to display
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);
```

To see this example work, see my pen ["My Elt. Var. Example"](https://codepen.io/tomwhartung/pen/GRBMRKd?editors=0110) on codepen.

Note that this example uses the code from the previous example, ["My Which Greeting to Display"](https://codepen.io/tomwhartung/pen/oNMeoZE?editors=1111).

## Inline If With Logical && Operator

The following example uses the JavaScript logical `&&` operator to embed expressions in JSX:

```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

// const messages = ['React', 'Re: React', 'Re:Re: React'];
const messages = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={messages} />);
```

```html
```

```javascript
```

```javascript
```

```html
```

