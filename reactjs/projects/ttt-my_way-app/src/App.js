
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

export default function Board() {
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick() {
    const nextSquares = squares.slice();   // Creates a new copy of the squares array
    nextSquares[0] = "X";                  // Updates the first one (!!!)
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}

