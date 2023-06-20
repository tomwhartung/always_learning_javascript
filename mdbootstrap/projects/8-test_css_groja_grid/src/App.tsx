//
// src/App.tsx: Main file for the 8-test_css_groja_grid project
// ------------------------------------------------------------
//
import { useState } from 'react'
import './App.css'

// MyGridOfSquares: the grid of responsive squares that are the main feature of this project
function MyGridOfSquares () {
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div className="card">
          <p>MyGridOfSquares goes here</p>
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
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Version 1: Click on the button to change the color in the square
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
      <YeOldeCard />
    </>
  )
}

// App: this App's "mainline" component
export default function App() {
  return (
    <>
      <h3>Welcome to the <code className="bg-black text-white">8-test_css_groja_grid</code> project!</h3>
      <MyContainer />
    </>
  )
}

