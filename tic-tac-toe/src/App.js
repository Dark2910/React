import './App.css';
import React, { useState } from 'react';

const Square = ({value, onSquareClick}) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = ({xIsNext, squares, onPlay}) => {
  const handleClick = (i) => {
    if(calculateWinner(squares) || squares[i]){
      return
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext? 'X' : 'O';

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const renderSquares = (i) => {
    return(
      <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
    );
  }

  const boardRows = new Array(3).fill(null).map((_, row) => {
    return(
      <div key={row} className='board-row'>
        { Array(3).fill(null).map((_, col) => { return renderSquares(row * 3 + col)}) }
      </div>
    );
  })

  return(
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description = (move > 0)? 'Go to move #' + move : 'Go to game start';
    return(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{(move === currentMove)? `You are at move # ${move}` : description}</button>
      </li>
    );
  })

  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;

