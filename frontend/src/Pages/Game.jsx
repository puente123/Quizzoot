import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'

export default function Game() {
  const [gameCode, setGameCode] = useState("");

  const handleInputChange = (event) => {
    setGameCode(event.target.value);
  };

  // PLACEHOLDER
  function attemptJoinGame() {
    if(gameCode.length !== 6)
      return;
    console.log();
  }

  return (
    <>
      <NavBar/>
      <div id="private_game_join" className="d-flex justify-content-center align-items-center vh-100">
        <h2 className="text-white fs-3">Enter private game code: </h2>
        <input 
          type="text" 
          pattern="[a-zA-Z0-9]*" 
          id="textBox" 
          value={gameCode} 
          onChange={handleInputChange} 
          maxLength="6" 
          placeholder="######"
          className="fs-3"/>
        <button onClick={() => attemptJoinGame()} className="fs-3">
          Join game
        </button>
      </div>
    </>
  )
}
