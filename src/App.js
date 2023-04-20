import React, { useState } from "react";
import "./index.css";

export default function App() {
  // const [status, setStatus] = useState("");
  const [board, setBoard] = useState("X");
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
      return item;
    });
    setPosition(updatePosition);
  };

  //Connect idx eg:1,2,3 from a different object within an array to create logic
  //winpoistion not being triggered

  const winPosition = (a) => {
    position.map((item) => {
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
      for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        if (
          (a = item.value) &&
          (a = item.value) === (b = item.value) &&
          (a = item.value) === (c = item.value)
        ) {
          // return <h2>{`winning number ${item.value[a]}`}</h2>;
          console.log("Winner", [a, b, c], [a]);
        }
      }
      return null;
    });
  };

  return (
    <div className="App">
      <h1 className="gameOn">Tic-Tac-Toe</h1>
      {/* {status} */}
      {winPosition()}
      <div className="grid">
        {position.map((item) => (
          <button className="clicked" onClick={() => startGame(item.id)}>
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
