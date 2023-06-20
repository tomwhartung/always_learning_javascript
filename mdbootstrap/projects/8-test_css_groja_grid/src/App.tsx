//
// src/App.tsx: Main file for the 8-test_css_groja_grid project
// ------------------------------------------------------------
//
import { useState } from 'react'
import './App.css'

// Important types

// Important constants
const gridSize = 3;   // number of rows and columns in the grid

// ResponsiveSquare: A square in the grid that responds to clicks
function ResponsiveSquare() {
  return (
    <div>
      I am a ResponsiveSquare
    </div>
  )
}
// MyGridOfSquares: the grid of responsive squares that are the main feature of this project
function MyGridOfSquares () {
  const gridSquares = [];
  for( let row=0; row < gridSize; row++ ) {
    for( let col=0; col < gridSize; col++ ) {
      gridSquares.push(
        <ResponsiveSquare />
      )
    }
  }

  return (
    <div className="row mt-3">
      <div className="col-12">
        <h4 className='mt-3'><code>MyGridOfSquares</code></h4>
        <div className="card">
        {gridSquares}
        </div>
      </div>
    </div>
  )
}
// YeOldeCard: The original card I want to save temporarily "for posterity"
function YeOldeCard () {
  const [count, setCount] = useState(0)

  return (
    <div className="row mt-3">
      <div className="col-12">
      <h4 className='mt-3'><code>YeOldeCard</code></h4>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <h6 className='mt-4'>State handling sanity check:</h6>
          <p className='mt-2'>
            Click on the button to add to the count = {count}
          </p>
        </div>
      </div>
    </div>
  )
}

// MyContainer: Main container holding most of the page's content
function MyContainer() {
  return (
    <>
      <MyGridOfSquares />
      <hr className='hr mt-3' />
      <hr className='hr mt-3' />
      <YeOldeCard />
    </>
  )
}

// App: this App's "mainline" component
export default function App() {
  return (
    <>
      <h2>
        Welcome to the <code className="bg-black text-white">8-test_css_groja_grid</code> project!
      </h2>
      <MyContainer />
    </>
  )
}

