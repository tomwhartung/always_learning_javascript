
// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

// AllMyApps: run all the apps!
function AllMyApps() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here Are All My Apps!</h1>
        <hr />
        <BonjourApp />
        <hr />
        <MyStateApp />
      </header>
    </div>
  );
}

// BonjourApp: says Hello World in French
function BonjourApp() {
  return (
    <h1>Bonjour, monde!</h1>
  );
}

// MyStateApp: demonstrates how to use multiple instances of the same state
function MyStateApp() {
  return (
    <div className="App">
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

// MyButton: button that counts how many times it's been clicked
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// export default BonjourApp;    // First App above
// export default MyStateApp;    // Second App above
export default AllMyApps;    // All the Apps above
