import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [player, setPlayer] = useState(null);

  const renderSqure = () => {
    return <div>'X'</div>;
  };

  const handleClick = (buttonId) => {
    setPlayer(buttonId);
  };

  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <div className="square">
        <button className="clicked" onClick={() => handleClick(1)}>
          {player}
        </button>
        <button onClick={() => handleClick(2)}>{player}</button>
        <button key={2}></button>
      </div>
      <div className="square">
        <button key={3}></button>
        <button key={4}></button>
        <button key={5}></button>
      </div>
      <div className="square">
        <button key={6}></button>
        <button key={7}></button>
        <button key={8}></button>
      </div>
    </div>
  );
}
