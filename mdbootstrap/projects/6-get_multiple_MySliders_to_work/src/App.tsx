import { useState } from 'react'
import './App.css'

import { MDBRange } from 'mdb-react-ui-kit';

// MySlider: function component interface to the MDBRange component
function MySlider() {
  return (
    <MDBRange
      defaultValue={50}
      id='customRange'
      label='My First MDBRange Component'
    />
  );
}

// App: this App's "mainline" component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Four <code>MySlider</code>s App</h1>
      <div className="card">
        <MySlider />
        <p>
          Try using one MySlider in each card.
        </p>
      </div>
      <div>
      </div>
    </>
  )
}

export default App
