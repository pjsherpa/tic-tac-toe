import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [isDisabled, setDisabled] = useState(false);
  const [board, setBoard] = useState("");
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

  const startGame = (id) => {
    position.map((item) => {
      if (id === item.id) {
        item.value = board;
      }
      setBoard(board === playerX ? playerO : playerX);
    });
    // setDisabled(true);
  };

  return (
    <div className="App">
      <h1 className="gameOn">Tic-Tac-Toe</h1>
      <div className="grid">
        {position.map((item) => (
          <button
            disabled={isDisabled}
            className="clicked"
            onClick={() => startGame(item.id)}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
