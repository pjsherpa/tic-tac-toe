import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [board, setBoard] = useState(null);
  const [position, setPosition] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ]);

  const handleClick = (index) => {
    if (index) {
      return setBoard(board === playerX ? playerO : playerX);
    }
  };

  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <div className="square">
        <button className="clicked" onClick={() => handleClick(0)}>
          {board}
        </button>
        <button className="clicked" onClick={() => handleClick(1)}>
          {board}
        </button>
        <button className="clicked"></button>
      </div>
      <div className="square">
        <button className="clicked"></button>
        <button className="clicked"></button>
        <button className="clicked"></button>
      </div>
      <div className="square">
        <button className="clicked"></button>
        <button className="clicked"></button>
        <button className="clicked"></button>
      </div>
    </div>
  );
}
