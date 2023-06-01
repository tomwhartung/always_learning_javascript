import logo from './logo.svg';
import './App.css';

const test_linting = 'Test Linting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          OK!  What Now?!?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello!  Can you see me?!?
        </p>
      </header>
    </div>
  );
}

export default App;
