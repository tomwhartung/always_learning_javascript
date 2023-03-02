
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
        <IndependentCountersApp />
        <hr />
        <ControlledCountersApp />
        <hr />
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

// IndependentCountersApp: demonstrates how to use multiple instances of the same state
function IndependentCountersApp() {
  return (
    <div className="App">
      <h1>Independent Counters that Update Separately</h1>
      <IndependentButton />
      <IndependentButton />
    </div>
  );
}

// IndependentButton: button that independently counts how many times it's been clicked
function IndependentButton() {
  const [independentCount, setIndependentCount] = useState(0);

  function handleIndependentClick() {
    setIndependentCount(independentCount + 1);
  }

  return (
    <button
      onClick={handleIndependentClick}
      className="independent-button">
      Clicked {independentCount} times
    </button>
  );
}

// ControlledCountersApp: demonstrates how to lift state up
function ControlledCountersApp() {
  const [controlledCount, setControlledCount] = useState(0);

  function handleControlledClick() {
    setControlledCount(controlledCount + 1);
  }
  return (
    <div className="App">
      <h1>Counters that update together</h1>
      <ControlledButton controlledCount={controlledCount} onControlledClick={handleControlledClick} />
      <ControlledButton controlledCount={controlledCount} onControlledClick={handleControlledClick} />
    </div>
  );
}

// ControlledButton: button controlled by props
function ControlledButton({ controlledCount, onControlledClick }) {

  return (
    <button
      onClick={onControlledClick}
      className="controlled-button">
      Clicked {controlledCount} times
    </button>
  );
}

export default AllMyApps;
