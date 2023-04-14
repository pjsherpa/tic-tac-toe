import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [board, setBoard] = useState(null);
  const [position, setPosition] = useState([
    { id: 1, value: board },
    { id: 2, value: board },
    { id: 3, value: board },
    { id: 4, value: board },
    { id: 5, value: board },
    { id: 6, value: board },
    { id: 7, value: board },
    { id: 8, value: board },
    { id: 9, value: board },
  ]);

  const handleClick = (id) => {
    const updateBoard = position.map((item) => {
      if (id === item.id) {
        item.value = board;
      }
      return item;
    });
    setBoard(board === playerX ? playerO : playerX);
  };

  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <div className="grid">
        {position.map((item) => (
          <button className="clicked" onClick={() => handleClick(item.id)}>
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
