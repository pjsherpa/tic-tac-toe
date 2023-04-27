import React, { useState } from "react";
import "./index.css";

// indexes to check winning combination
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [board, setBoard] = useState("X");
  const [status, setStatus] = useState(`Start Game ${board}`);
  const [winner, setWinner] = useState("");

  // used to create 9 empty boxes that are buttons
  // initial values are empty
  // setposition updates values x or o, first val is 'x' and it will alternate
  const [position, setPosition] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ]);

  const startGame = (id) => {
    const updatePosition = position.map((item) => {
      if (item.id === id && item.value === "") {
        item.value = board;
      }

      setBoard(board === "X" ? "O" : "X");
      setStatus(`Next Player is ${board === "O" ? "X" : "O"}`);

      return item;
    });
    setPosition(updatePosition);

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        updatePosition[a].value &&
        updatePosition[a].value === updatePosition[b].value &&
        updatePosition[a].value === updatePosition[c].value
      ) {
        debugger;
        setWinner(updatePosition[a].value);
      }
    }
  };
  const startAgain = () => {
    setBoard("X");
    setWinner("");
    setStatus(`Start Game X`);
    setPosition([
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" },
      { id: 6, value: "" },
      { id: 7, value: "" },
      { id: 8, value: "" },
      { id: 9, value: "" },
    ]);
  };

  return (
    <div className="App">
      <h1 className="gameOn">Tic-Tac-Toe</h1>
      {winner ? (
        <div>
          <h2>Winner is {winner}</h2>{" "}
          <button onClick={startAgain}>Restart Game</button>
        </div>
      ) : (
        <h2>{status}</h2>
      )}
      <div className="grid">
        {position.map((item, index) => (
          <button
            key={index}
            className="button clicked"
            onClick={() => startGame(item.id)}
            disabled={item.value || winner}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
