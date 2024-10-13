import React, { useState, useEffect } from 'react'
import NavBar from '../Layout/NavBar'
import axios from "axios";
import { Button } from 'react-bootstrap'

export default function Game() {
  const [gameCode, setGameCode] = useState("");
  const [connected, setConnected] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    setGameCode(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  // PLACEHOLDER
  function attemptJoinGame() {
    if(gameCode.length !== 6)
      return;
    setConnected(true);
  }

  // "Join a game" screen
  if(!connected) {
    return (
      <>
        <NavBar/>
        <div id="private_game_join" className="d-flex justify-content-center flex-column vh-100 vw-100 align-items-center">
          <h2 className="text-white fs-1">Enter game code: </h2>
          <input 
            type="text" 
            pattern="[a-zA-Z0-9]*" 
            id="textBox" 
            value={gameCode} 
            onChange={handleInputChange} 
            maxLength="6" 
            placeholder="######"
            className="fs-1 text-center vw-20"/>
          <Button variant='info' onClick={() => attemptJoinGame()} className="fs-1">
            Join game
          </Button>
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
          <h1 className="text-white fs-3">{data}</h1>
        </div>
      </>
    )
  }
}
