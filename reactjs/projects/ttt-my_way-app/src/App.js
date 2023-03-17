
import './styles.css';
import { useState } from 'react';

// Square: function component defining a square on the tic-tac-toe board
function Square( {value, onSquareClick} ) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// Board: our tic-tac-toe game board
export default function Board() {
  const [xIsNext, setXIsNext] = useState( true );
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick( idx ) {
    if ( calculateWinner(squares) ) {      // If we have a winner
      return;                              //   no more plays: we are done!
    }
    if ( squares[idx] ) {                  // If the square already has a non-null value
      return;                              //   it cannot be played again!
    }
    const nextSquares = squares.slice();   // Create a new copy of the squares array
    if (xIsNext) {
      nextSquares[idx] = "X";              // Update the idx-th one
    } else {
      nextSquares[idx] = "O";              // Update the idx-th one
    }
    setXIsNext( ! xIsNext );               // Toggle xIsNext
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// calculateWinner: determine whether we have a winner
//   returns: the winning letter, or else null
function calculateWinner( squares ) {
  const lines = [
    [0, 1, 2],  // horiz. bottom row
    [3, 4, 5],  // horiz. middle row
    [6, 7, 8],  // horiz. bottom row
    [0, 3, 6],  // vert. left col
    [1, 4, 7],  // vert. middle col
    [2, 5, 8],  // vert. right col
    [0, 4, 8],  // diag. left to right (down)
    [2, 4, 6],  // diag. right to left (down)
  ];
  for ( let i = 0; i < lines.length; i++ ) {
    const [a, b, c] = lines[i];
    if ( squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]   )
    {
      return ( squares[a] );
    }
  }
  return ( null );
}

