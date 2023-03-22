
import './styles.css';
import { useState } from 'react';

// Game: our tic-tac-toe game app
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const [currentMove, setCurrentMove] = useState( 0 );
  const currentSquares = history[history.length - 1];

  function handlePlay( nextSquares ) {
    setHistory( [...history, nextSquares] );  // Adds nextSquares to the end of history
    setXIsNext( ! xIsNext );                  // Toggle xIsNext
  }

  function jumpTo( nextMove ) {
    // TBD
  }

  // Note: this is a multi-line anonymous ARROW FUNCTION
  const moves = history.map( (squares, move) => {
    let description;
    if ( move > 0 ) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to start of game';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

// Board: our tic-tac-toe game board
function Board( { xIsNext, squares, onPlay } ) {

  function handleClick( idx ) {
    if ( squares[idx] ) {                  // If the square already has a non-null value
      return;                              //   it cannot be played again!
    }
    if ( calculateWinner(squares) ) {      // If there's a winner or it's a draw
      return;                              //   ignore all clicks, because we are done!
    }

    const nextSquares = squares.slice();   // Create a new copy of the squares array
    if (xIsNext) {
      nextSquares[idx] = "X";              // Update the idx-th one
    } else {
      nextSquares[idx] = "O";              // Update the idx-th one
    }
    onPlay(nextSquares);                   // Sets squares equal to the new copy
  }

  // New code to report the status of the game:
  const winner = calculateWinner(squares);
  let status;
  if ( winner ) {
    if ( winner === "D" ) {
      status = "The game is a draw!  Thanks for playing!  Reload to play again!!";
    } else {
      status = winner + " is the winner!  Reload to play again!!";
    }
  } else {
    let nextPlayer = xIsNext ? "X" : "O";
    status = nextPlayer + " is the next player";
  }

  return (
    <>
      <div className="status">{status}</div>
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

// calculateWinner: determine whether we have a winner
//   returns: the winning letter, or "D" for a draw, else null
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
  // No winner yet, so check for a draw
  let draw = "D";
  for ( let idx = 0; idx < squares.length; idx++ ) {
    if ( ! squares[idx] ) {
      return ( null );
    }
  }
  return ( draw );
}

