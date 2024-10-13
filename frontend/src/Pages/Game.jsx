import React, { useState, useEffect } from 'react'
import NavBar from '../Layout/NavBar'

export default function Game() {
  const [gameCode, setGameCode] = useState("");
  const [connected, setConnected] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    setGameCode(event.target.value);
  };

  useEffect(() => {
    fetch("https://localhost:3000/")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  // PLACEHOLDER
  function attemptJoinGame() {
    if(gameCode.length !== 6)
      return;
    //setConnected(true);
  }

  // "Join a game" screen
  if(!connected) {
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

  // Lobby
  if(!playing) {
    return (
      <>
        <NavBar/>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1 className="text-white fs-3">Lobby</h1>
        </div>
      </>
    )
  }
}
