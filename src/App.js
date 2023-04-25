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

  const winPosition = () => {
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

    for (let index = 0; index < lines.length; index++) {
      let [a, b, c] = lines[index];
      if (
        (button[a] = position[index].value) &&
        (button[b] = position[index].value) === (button[a] = position.value) &&
        (button[a] = position.value) === (button[c] = position.value)
      ) {
        // return <h2>{`winning number ${position.value[a]}`}</h2>;
        console.log(
          `index is ${index} and value is${position.value} and positionid is ${position.id}`
        );
      }
    }
    return null;
  };

  return (
    <div className="App">
      <h1 className="gameOn">Tic-Tac-Toe</h1>
      {/* {status} */}
      {winPosition()}
      <div className="grid">
        <button
          key={position[1].id}
          className="clicked"
          onClick={() => startGame(position[1].id)}
        >
          {position[1].value}
        </button>
        <button
          key={position[2].id}
          className="clicked"
          onClick={() => startGame(position[2].id)}
        >
          {position[2].value}
        </button>
        <button
          key={position[3].id}
          className="clicked"
          onClick={() => startGame(position[3].id)}
        >
          {position[3].value}
        </button>
        <button
          key={position[4].id}
          className="clicked"
          onClick={() => startGame(position[4].id)}
        >
          {position[4].value}
        </button>
        <button
          key={position[5].id}
          className="clicked"
          onClick={() => startGame(position[5].id)}
        >
          {position[5].value}
        </button>
        <button
          key={position[6].id}
          className="clicked"
          onClick={() => startGame(position[6].id)}
        >
          {position[6].value}
        </button>
        <button
          key={position[7].id}
          className="clicked"
          onClick={() => startGame(position[7].id)}
        >
          {position[7].value}
        </button>
        <button
          key={position[8].id}
          className="clicked"
          onClick={() => startGame(position[8].id)}
        >
          {position[8].value}
        </button>
      </div>
    </div>
  );
}
