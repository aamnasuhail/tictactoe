import { useState } from "react";
import Board from "./components/Board";
import "./styles/root.scss";
import { calculateWinner } from "./components/helpers";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  console.log(square);
  const [isXNext, setIsNext] = useState(false);
  const winner = calculateWinner(square);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "O"}`;

  const handleSquareClick = (clickedPosition) => {
    if (square[clickedPosition] || winner) return;

    setSquare((currSquare) => {
      return currSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setIsNext((prevVal) => !prevVal);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
