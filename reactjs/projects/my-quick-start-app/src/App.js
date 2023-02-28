
// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

//
// First App: says Hello World in French
//
function BonjourApp() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bonjour, monde!
        </p>
      </header>
    </div>
  );
}

//
// Second App: demonstrates how to use multiple instances of the same state
//
function MyStateApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

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
export default MyStateApp;    // Second App above
