import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [player, setPlayer] = useState("X");

  // const handleClick=(e)=>setPlayer(e.target.value)

  // }

  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <div className="square">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="square">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="square">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
