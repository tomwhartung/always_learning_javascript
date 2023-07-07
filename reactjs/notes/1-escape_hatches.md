
# reactjs/notes/1-escape_hatches.md

These are notes from a series of pages that appears under *"Escape Hatches"*
in the *new* React documentation.

# 0. Urls:

- [Main React Documentation Page](https://react.dev/learn)
- [Escape Hatches Page](https://react.dev/learn/escape-hatches)

# 1. Background

Originally started on this research in hopes of discovering why a TypeScript error is showing up
in VSCode for my `Canvas` component.

- See `mdn/notes/5-the_simplest_canvas.md` in the `always_learning_computer_graphics` repo

After reviewing and taking notes about all the pages about Escape Hatches, I decided to move the notes
to this file in this repo.

# 2. Notes

Hooks provide *"escape hatches that let you “step outside” React and connect to external systems.
Most of your application logic and data flow should not rely on these features."*

## 2.1. Notes and Quotes From the *"Referencing Values With Refs*" Page

These tidbits are from the "React Refs" or
[*"Referencing Values With Refs"*](https://react.dev/learn/referencing-values-with-refs) page.

### 2.1.1. From the *"Example: building a stopwatch"* section:

> When a piece of information is used for rendering, keep it in state.
> When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.

### 2.1.2. From the *"Differences between refs and state"* section:

- Refs are mutable: *"you can modify and update current’s value outside of the rendering process."*
- State is "immutable: *"you must use the state setting function to modify state variables to queue a re-render."*

> [R]eading `ref.current` during render leads to unreliable code. If you need that, use state instead.

### 2.1.3. From the *"Best practices for refs"* section:

> Treat refs as an escape hatch. Refs are useful when you work with external systems or browser APIs.

- I suppose we can consider a `canvas` as being an external system or browser API

> Don’t read or write ref.current during rendering. If some information is needed during rendering, use state instead.

## 2.2. Notes and Quotes From the *"Manipulating the DOM with Refs"* Page

These tidbits are from the
[*"Manipulating the DOM with Refs"*](https://react.dev/learn/manipulating-the-dom-with-refs) page.

Note that these two statements are equivalent:

```
const canvas = React.useRef();       // from Canvas.jsx
const canvas = React.useRef(null);   // see below
```

### 2.2.1. From the *"Getting a ref to the node"* section:

Use `useRef` to *"declare a `ref` inside your component:"* `const myRef = useRef(null);`

Then *"pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node:"*

```
<div ref={myRef}>
```

**This is *exactly* what happens inside the definition of `Canvas` as an *arrow function* in `Canvas.jsx`**

- This makes the `Canvas` variable refer to the `<canvas ...` element

> The `useRef` Hook returns an object with a single property called `current`....
> When React creates a DOM node for this `<div>`, React will put a reference to this node into `myRef.current`.
> You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

**This is how `Canvas.jsx` uses the browser graphics API to obtain the context we need to `draw` shapes:**

```
const context = canvas.current.getContext('2d');
```

It appears to me that we use a *ref* instead of *state* when drawing graphics because the drawing commands work immediately.

- Because the drawing happens right away, there is no need to re-render the `Canvas`.

Remember:

> Refs are like state variables that don’t trigger re-renders when you set them.

### 2.2.2. From the *"Accessing another component’s DOM nodes"* section:

Typically we might want to use refs on *browser* elements but *not* on our own React elements.

> if you try to put a *ref* on your own component, like `<MyInput />`, by default you will get `null` [instead of `current`].

**If we find we want to use a ref on a React component,** read this section, because it shows how to do that.
For now, I am skipping the rest of this section.

### 2.2.3. From the *"When React attaches the refs"* section:

**Good to know:**

> In React, every update is split in two phases:
>
> o During **render,** React calls your components to figure out what should be on the screen.
> o During **commit,** React applies changes to the DOM.

This is why you *should not* access refs during rendering:

> During the first render, the DOM nodes have not yet been created, so `ref.current` will be `null`.
> And during the rendering of updates, the DOM nodes haven’t been updated yet.
> So it’s too early to read them.

Furthermore:

> **Usually, you will access refs from event handlers.**

In some cases, e.g., when there is no event handler for the ref, we may want to use an Effect.
For details about Effects, see the next page,
[Synchronizing With Effects](https://react.dev/learn/synchronizing-with-effects).

### 2.2.4. From the *"Best practices for DOM manipulation with refs"* section:

Examples of when we might want to use a *ref* include:

- Managing focus
- Managing scroll position
- Calling browser APIs that React does not expose

Our `Canvas` uses a *ref* for the last reason: so we can use the browser API to draw an image.

A couple of high-level of recommendations:

> **Avoid changing DOM nodes managed by React.**...

> However... **You can safely modify parts of the DOM that React has *no* reason to update.**

**Note:** we might want to return to this page later, after having worked with refs and letting this all sink in a bit.

## 2.3. Notes and Quotes From the *"Synchronizing With Effects"* Page

These tidbits are from the
[Synchronizing With Effects](https://react.dev/learn/synchronizing-with-effects).

Following is why we have *Effects:*

> *Effects* let you run some code after rendering so that you can synchronize your component with some system outside of React.

### 2.3.1. From the *"What are Effects and how are they different from events?"* section:

React components contain these two types of logic:

- *"Rendering Code"* - code that manages props and state and `return`s JSX to be rendered on the screen
  - For details, see [Describing the UI](https://react.dev/learn/describing-the-ui)
- *"Event handlers"* - code existing in *"nested functions"* in *"components that **do** things"*
  - For details, see [Adding Interactivity](https://react.dev/learn/adding-interactivity)

**Sometimes we need to write code that does not fit into one of these two types.**

- A typical example is code that needs to interact with something outside the browser, such as a server

> ** *Effects* let you specify side effects that are caused by rendering itself, rather than by a particular event.**

> [S]etting up a server connection is an *Effect* because it should happen no matter which interaction caused the component to appear.
> Effects run at the end of a commit after the screen updates.
> This is a good time to synchronize the React components with some external system (like network or a third-party library).

### 2.3.2. From the *"You might not need an Effect"* section:

This section is extremely short and cautions against using Effects when they are not necessary.
It ends with a link to a page entitled
[*"You might not need an Effect"*](https://react.dev/learn/you-might-not-need-an-effect).

- For those notes, see *"2.4. Notes and Quotes From the **You Might Not Need an Effect** Page"* in this document

### 2.3.3. From the *"How to write an Effect"* section:

Here is the process:

> **Step 1. Declare an Effect.** By default, your Effect will run after every render.

For example:

```
function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

> In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

Using an Effect allows React to first update the screen *then* run the effect to change stuff.

**Warning:** this code will create an **infinite loop:**

```
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);  // setting state triggers re-rendering, which triggers the Effect, which triggers...
});
```

> **Step 2. Specify the Effect dependencies.** Most Effects should only re-run when needed rather than after every render.

Having code that runs after every render is sometimes not what we want.

- Use *dependencies* to prevent the Effect from running unnecessarily

*Dependencies* are variables that:

- That appear in the Effect's code
- Appear in an array *after* the Effect's code

```
// WRONG!
useEffect(() => {
  if ( isPlaying ) {
  // ...
  }
}, []);    // List dependencies in this array; an empty array causes an Error

// GOOD!
  useEffect(() => {
    if (isPlaying) { // It's used here...
      // ...
    } else {
      // ...
    }
  }, [isPlaying]); // ...so it must be declared here!
```

Digging deeper, here is the effect of having *no* dependency array versus an *empty* dependency array:

```
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

You do not *need* to include a *ref* in a dependency array:

> [B]ecause the `ref` object has a stable identity:
> React guarantees you’ll always get the same object from the same useRef call on every render.
> It never changes, so it will never by itself cause the Effect to re-run.

*But,* including it is ok.

> **Step 3. Add cleanup if needed.**

*"Cleanup"* tasks include stopping, disconnecting, or perhaps even undoing whatever the Effect does.

- Specify an empty dependency array so that React runs the code when the component *"mounts"*
  - A component *"mounts"* when it appears on the screen for the first time
- If the component might *mount* more than once, then specify its *cleanup* code
  - React will run the *cleanup* code when it *"un-mounts"* the commponent
- During development, React automatically *mounts* components twice
  - This helps developers know when they need to specify *cleanup* code
- An Effect specifies its *cleanup* code by `return`ing it

For example:

```
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, []);
```

React mounts a component twice during development only when it is run in
[`StrictMode`](https://react.dev/reference/react/StrictMode).

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**Note:** the setup I am using specifies `StrictMode` in `main.tsx`.

### 2.3.4. From the *"How to handle the Effect firing twice in development?"* section:

The answer, as detailed in the last section, is usually to add a cleanup function.

> The rule of thumb is that the user shouldn’t be able to distinguish between
> the Effect running once (as in production) and
> a setup → cleanup → setup sequence (as you’d see in development).

The bulk of this section describes these *"common patterns"*:

- *"Controlling non-React widgets"*
  - Cites maintaining a map's zoom level and closing a modal dialog as examples
  - These two cases are handled differently
- *"Subscribing to events"*
  - Probably want to provide a cleanup function that unsubscribes
- *"Triggering animations"*
  - Probably want the cleanup function to reset the animation to its beginning
- *"Fetching data"*
  - There is a lot here and I will probably want to **come back to this at some point**
  - There is also a [link to a how-to](https://www.robinwieruch.de/react-hooks-fetch-data/)
    - This link goes to a blog post by the author of the React book I bought
  - This subsection also lists the many downsides to using Effects for fetching data
  - It also provides some suggestions for fetching data *without* using an Effect
- *"Sending analytics"*
  - The example shows how to log analytics when a user visits a page.
  - Letting this run twice in development is OK because it will just run once in production
- *"Not an Effect: Initializing the application"*
  - In most cases we will want to put initialization code outside of any component
- *"Not an Effect: Buying a product"*
  - It is best to *"Delete the Effect and move your /api/buy request into the Buy button event handler"*
  - They include some code showing how to do this

### 2.3.5. From the *"Putting it all together"* section:

Maybe come back to this later.

### 2.3.6. From the *"Recap"* section:

No comment at this time.


## 2.4. Notes and Quotes From the *"You Might Not Need an Effect"* Page

These tidbits are from the
[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) page.

Use Effects to *"synchronize with some **external** system"* such as the network or browser APIs.

### 2.4.1. From the *"How to remove unnecessary Effects"* section:

Following are some general guidelines for knowing when to use Effects, and when to *not* use them:

- *"You don’t need Effects to transform data for rendering."*
  - In particular, updating state in an Effect is **wrong** and can lead to infinite loops
- *"You don’t need Effects to handle user events."*
  - It's best to handle user events in the event handlers
    - The event handlers know exactly what the user did
    - Effects run *after* the screen re-renders and there's no way to know what the user did

Below is a list of specific scenarios discussed in this section.

- Some of these sound like things I might need to do later!

The page discusses why developers might want to use an Effect to handle these situations,
along with why that may or may not be the best way to go:

- *"Updating state based on props or state"*
  - This is usually a bad idea!
  - Note that updating state in an Effect can lead to infinite loops!
- *"Caching expensive calculations"*
  - The example looks at maintaining a list of Todos
  - You probably don't want to use an Effect
  - However, if updating the list is slow, you might want to use the `useMemo` hook
- *"Resetting all state when a prop changes"*
  - At best, this is probably inefficient
- *"Adjusting some state when a prop changes"*
- *"Sharing logic between event handlers"*
  - Here is a good quote from this subsection:

> When you’re not sure whether some code should be in an Effect or in an event handler,
> ask yourself why this code needs to run.
> Use Effects only for code that should run because the component was displayed to the user.

- *"Sending a POST request"
  - I am not going to delve into all this at this time
  - Hopefully when it comes time to POST I will remember to revisit this subsection!
- *"Chains of computations"*
  - Again, **using Effects to set state variables is strongly discouraged!**
- *"Initializing the application"*
  - Putting initialization code in an effect, or even in a component, can lead to it running twice
  - Code that runs at the top level will run *"once when your component is imported"*
  - This is true *"even if it doesn't end up being rendered"*
  - See also *"2.3.4. From the *"How to handle the Effect firing twice in development?"* in this document
- *"Notifying parent components about state changes"*
  - Again, **using Effects to set state variables is strongly discouraged!**
  - A better idea is to update both the current component and its parent in the event handler
- *"Passing data to the parent"*
  - **TODO:** revisit this when I need to start passing data around
- *"Subscribing to an external store"*
  - **TODO:** revisit this when I need to know when some sort of external data changes
- *"Fetching data"*
  - **TODO:** revisit this when I need to start fetching data

**Frankly, I find this discussion to be confusing, because most of them start off with how to *not* do things!**

Also, I sense that this documentation may be changing, and it would be best to wait until it stablizes or
I need it or preferably both before delving into this level of detail.

### 2.4.2. From the *"Recap"* section:

No comment at this time.

### 2.4.3. From the *"Challenges"* section:

Maybe come back to this later.

## 2.5. Notes and Quotes From the *"Lifecycle of Reactive Effects"* Page

These tidbits are from the
[Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects) page.

The lifecycle of components is to *"mount, update, or unmount."*

In contrast, the purpose of an Effect is *"to start synchronizing something, and later to stop synchronizing it."*

### 2.5.1. From the *"The lifecycle of an Effect"* section:

Following is a list of the subsections in this section:

- *"Why synchronization may need to happen more than once"*
  - This subsection uses a chatroom app as the example
  - So, in this example, the Effect needs to re-synchronize each time the user switches rooms
- *"How React re-synchronizes your Effect"*
  - Start sync -> Stop sync -> Start sync -> Stop sync [ -> etc...] -> Stop sync one last time
- *"Thinking from the Effect’s perspective"*
  - It is best to *"**always focus on a single start/stop cycle at a time**"*
- *"How React verifies that your Effect can re-synchronize"*
  - *"**React verifies that your Effect can re-synchronize by forcing it to do that immediately in development**"*
- *"How React knows that it needs to re-synchronize the Effect"*
  - React knows to run the effect because we provide it with a list of dependencies in the dependency array
- *"Each Effect represents a separate synchronization process"*
  - *"**Each Effect in your code should represent a separate and independent synchronization process**"*
  - The example they use demonstrates that disconnecting from a chat room and logging the chat should be different Effects

These all seem to be very detailed, but I see no reason to delve any further into any of these topics at this time.

### 2.5.2. From the *"Effects “react” to reactive values"* section:

In the chat room example:

- The `serverUrl` *does not* change during a re-render, so it *is not* a *"reactive value"*
- The `roomId` *can* change during a re-render, so it *is* a *"reactive value"*

If the `serverUrl` is a state variable, and might change when the user switches rooms,
then it becomes a *"reactive value"* and needs to be specified as a dependency.

Following is a list of the subsections in this section:

- *"What an Effect with empty dependencies means"*
  - *"the empty [] dependency array means this Effect" runs:
    - *"only when the component mounts, and ... when the component unmounts"*
  - The chat room example shows this scenario implies that the `serverUrl` and `roomId` do not change
- *"All variables declared in the component body are reactive"*
  - The chatroom example shows this scenario as entailing the use of a default value for `serverUrl`
- *"React verifies that you specified every reactive value as a dependency"*
  - Ensure *"your linter is configured for React"*
- *"What to do when you don’t want to re-synchronize"*
  - In this case you need to *"“prove” to the linter that these values aren’t reactive values"*
  - *"**You can’t “choose” your dependencies**"*
  - *"Your dependencies must include every reactive value you read in the Effect"*
  - *"The linter enforces this"*

### 2.5.3. From the *"Recap"* section:

No comment at this time.

### 2.5.4. From the *"Challenges"* section:

Maybe come back to this later.


## 2.6. Notes and Quotes From the *"Separating Events from Effects"* Page

These tidbits are from the
[Separating Events from Effects](https://react.dev/learn/separating-events-from-effects) page.

- Some interactions may be best handled by *"a mix of both behaviors"*

### 2.6.1. From the *"Choosing between event handlers and Effects"* section:

They use a chat room as an example.
A chat room typically interacts with a user two ways:

- 1. It connects to the room and synchronizes data at regular intervals
  - The synchronization aspect means this is best handled as an Effect
  - This is the topic of the *second* subsection, *"Effects run whenever synchronization is needed"*
- 2. It sends and receives messages
  - Sending is a specific interaction and is best handled in an event handler
  - This is the topic of the *first* subsection, *"Event handlers run in response to specific interactions"*

### 2.6.2. From the *"Reactive values and reactive logic"* section:

Examples of *"reactive values"* include:

- Props
- State
- Variables in the body of a component

The page then asserts that:

> Logic inside event handlers is *not reactive.*

The `message` a user is typing in a chat room *is not reactive,* because
they do *not* want to send it until they finish typing it and click Send.

```
function handleSendClick() {
  sendMessage(message);
}
```

> Logic inside Effects is *reactive.*

The `roomId` of a chat room *is reactive,* because
when the user changes it they expect the app to *react* and change the room.

```
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect()
  };
}, [roomId]);
```

### 2.6.3. From the *"Extracting non-reactive logic out of Effects"* section:

> Things get more tricky when you want to mix reactive logic with non-reactive logic.

Also, the subsections contain warnings that they are **"Under Construction."**

**TODO:** Return to this section later!!

### 2.6.4. From the *"Recap"* section:

No comment at this time.

### 2.6.5. From the *"Challenges"* section:

Maybe come back to this later.

## 2.7. Notes and Quotes From the *"Removing Effect Dependencies"* Page

These tidbits are from the
[Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies) page.

> Unnecessary dependencies may cause your Effect to run too often, or even create an infinite loop.
> Follow this guide to review and remove unnecessary dependencies from your Effects.

### 2.7.1. From the *"Dependencies should match the code"* section:

When writing an Effect:

- 1. Specify how to start and stop it
  - See ["the lifecycle of an effect"](https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect)
- 2. Add braces for the dependencies but leave the array empty
- 3. The linter will reccommend which variables you should add
- 4. Add these variables to the dependencies array

If the linter suggests adding one or more variables that do not make sense, prove that the variables in question
are *not* dependencies by *removing* them from the Effect.

**Note:** suppressing the linter's recommendation with a comment like
`// eslint-ignore-next-line react-hooks/exhaustive-deps`
*"leads to very unintuitive bugs that are hard to find and fix."*

### 2.7.2. From the *"Removing unnecessary dependencies"* section:

Whenever you adjust an Effect's list of dependencies, ask these questions:

- *"Should this code move to an event handler?"*
- *"Is your Effect doing several unrelated things? "*
- *"Are you reading some state to calculate the next state?"*
- *"Do you want to read a value without “reacting” to its changes?"*
  - At this time, this subsection is *"Under Construction"*
- *"Does some reactive value change unintentionally?"*

**Note:* Each of these questions is a subsection of this section.

### 2.7.3. From the *"Recap"* section:

No comment at this time.

### 2.7.4. From the *"Challenges"* section:

Maybe come back to this later.

## 2.8. Notes and Quotes From the *"Reusing Logic with Custom Hooks"* Page

These tidbits are from the
[Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) page.

- As the title of the page suggests, this topic is very advanced

### 2.8.1. From the *"Custom Hooks: Sharing logic between components"* section:

This section looks at how an app could monitor and stay synchronized with
the status of the user's network connection.

- A `StatusBar` component keeps track of wether the user is still connected
- When the network is down, a `SaveButton` component switches its text from "Save" to "Reconnecting"

It is useful to know how these two components can share the same logic, and thus avoid redundant code.

- They show how to do this by creating a custom hook named `useOnlineStatus`

Just as:

> React component names must start with a capital letter, like `StatusBar` and `SaveButton`

so must:

> Hook names must start with use followed by a capital letter, like `useState` (built-in) or `useOnlineStatus

A large subsection in this section is entitled:

> **Custom Hooks let you share stateful logic, not state itself**

It may be useful to return to this at some point, but right now I need to stay focused on
fixing the TypeScript error I am seeing in my *"Simplest Canvas."*

### 2.8.2. From the *"Passing reactive values between Hooks"* section:

This section stresses that:

> [C]ustom hooks need to be pure

It also contains a subsection entitled *"Passing event handlers to custom Hooks"* that is *"Under Construction."*

### 2.8.3. From the *"When to use custom Hooks "* section:

This section of the page is intended to help us understand that custom hooks are not always the answer:

> You don’t need to extract a custom Hook for every little duplicated bit of code. Some duplication is fine.

However, using a custom Hook can also help *"you precisely communicate your intent and how the data flows through it."*

As an example, they work through creating a `ShippingForm` component that initially contains a bit of duplicate code.
They simplify the component by creating a custom Hook named `useData` to make the component more concise and easy to
understand - and ultimately easier to maintain.

Two subsections delve into other examples to consider while explaining that:

> **"Custom Hooks help you migrate to better patterns"**

and, as usual:

> **"There is more than one way to do it"**

### 2.8.4. From the *"Recap"* section:

No comment at this time.

### 2.8.5. From the *"Challenges"* section:

Maybe come back to this later.

