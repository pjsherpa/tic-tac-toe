import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [board, setBoard] = useState(null);

  const handleClick = () => {
    setBoard(board === playerX ? playerO : playerX);
  };

  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <div className="square">
        <button className="clicked" onClick={() => handleClick()}>
          {board}
        </button>
        <button className="clicked" onClick={() => handleClick()}>
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
