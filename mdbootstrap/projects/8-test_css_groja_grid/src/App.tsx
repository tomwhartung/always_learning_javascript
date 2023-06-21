//
// src/App.tsx: Main file for the 8-test_css_groja_grid project
// ------------------------------------------------------------
//
import { useState } from 'react'
import './App.css'

// Important types
// enum Color {
//   Blue = "#0000FF",
//   Green = "#00FF00",
//   Red = "#FF0000",
//   Yellow = "#FFFF00",
// }

// Important constants
const gridSize = 3;   // number of rows and columns in the grid

// const gridRows = 3;   // number of rows in the grid
// const gridCols = 3;   // number of columns in the grid

// ResponsiveSquare: A square in the grid that responds to clicks
function ResponsiveSquare() {
  return (
    <button className='grid-square text-white'>
      RSq
    </button>
  )
}
// MyGridOfSquares: the grid of responsive squares that are the main feature of this project
//   This version contains two attempts:
//     Both initially achieve the appearance I was going for, but
//       neither of which works very well, because they are not easily scalable:
// (1) Under "Three rowOfSquareses" on the page: 
//  Each rowOfSquares array contains three ResponsiveSquare elements, i.e. ResponsiveSquare ResponsiveSquare ResponsiveSquare
// (2) Under "One gridSquares" on the page:
//  The gridSquares array contains three "grid-row"s, each of which contains three ResponsiveSquare elements
function MyGridOfSquares () {
// This gives the appearance of working, but is not really scalable:
  const rowOfSquares = [];
  for ( let col = 0; col < gridSize; col++ ) {
    rowOfSquares.push(
      <ResponsiveSquare key={col} />
    );
  }
// const gridSize : number = 3;   // number of rows and columns in the grid
  const gridSquares = [];
  for ( let row=0; row < 3; row++ ) {
// The original idea was to do something like this, but trying to
//  mix `div` and `ResponsiveQuare` elements like this causes weird errors:
//   gridSquares.push( <div> );
//   gridSquares.push( <div className="grid-row"> );
//   gridSquares.push( <div className='grid-row'> );
//   for ( let col = 0; col < 3; col++ ) {
//     // if ( col == 0 ) {
//     // }
//     gridSquares.push( <ResponsiveSquare /> );
//   }
//   gridSquares.push( "</div>" );
//  gridSquares.push( </div> );
// This gives the appearance of working, but is not really scalable:
    gridSquares.push(
      <div className="grid-row">
        <ResponsiveSquare />
        <ResponsiveSquare />
        <ResponsiveSquare />
      </div> );
  }

  return (
    <div className='row mt-3'>
      <div className="col-6">
        <h4 className='mt-3'>Three <code>rowOfSquares</code>es</h4>
        <div className="card">
          <div className='grid-row'> 
            {rowOfSquares}
          </div>
          <div className='grid-row'> 
            {rowOfSquares}
          </div>
          <div className='grid-row'> 
            {rowOfSquares}
          </div>
        </div>
      </div>
      <div className="col-6">
        <h4 className='mt-3'>One <code>gridSquares</code></h4>
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

