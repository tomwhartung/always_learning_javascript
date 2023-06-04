import { useState } from 'react'
import './App.css'

// import React from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

function MyRange() {
  return (
    <MDBRange
      defaultValue={50}
      id='customRange'
      label='My First MDBRange Component'
    />
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First Slider</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Trying the MDBRanage component!
        </p>
      </div>
      <div className="">
        <MyRange />
      </div>
    </>
  )
}

export default App
