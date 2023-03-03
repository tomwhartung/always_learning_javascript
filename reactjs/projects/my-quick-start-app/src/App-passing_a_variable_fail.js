
// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

// AllMyApps: run all the apps!
function AllMyApps() {

//const [totalCount, setTotalCount] = useState(0);
  let [totalCount, setTotalCount] = useState(0);
//const totalCount = 1;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Here Are All My Apps!</h1>
        <hr />
        <BonjourApp totalCount={totalCount} />
        <hr />
        <IndependentCountersApp />
        <hr />
        <ControlledCountersApp totalCount={totalCount} />
        <hr />
      </header>
    </div>
  );
}

// BonjourApp: says Hello World in French
function BonjourApp( totalCount ) {
  return (
    <div className="App">
      <h1>Bonjour, monde!</h1>
      <p>totalCount = {totalCount.totalCount} </p>
    </div>
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
function ControlledCountersApp( totalCount ) {
  const [controlledCount, setControlledCount] = useState(0);

  function handleControlledClick() {
    setControlledCount(controlledCount + 1);
    totalCount.totalCount = totalCount.totalCount + 1;
  }
  return (
    <div className="App">
      <h1>Counters that update together</h1>
      <p>totalCount.totalCount = {totalCount.totalCount} </p>
      <p>JSON.stringify( totalCount ) = {JSON.stringify( totalCount )} </p>
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
