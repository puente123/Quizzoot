import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'

export default function Game() {
  const [gameCode, setGameCode] = useState("");

  const handleInputChange = (event) => {
    setGameCode(event.target.value);
  };

  // PLACEHOLDER
  function attemptJoinGame() {
    console.log(gameCode);
  }

  // PLACEHOLDER
  function getPublicGames() {
    let output = [];
    output.push({
      host: "fractalfan3141",
      deckName: "Calculus 2",
      subject: "Math",
      playerCount: "20/50"
    });
    output.push({
      host: "crystallover503",
      deckName: "Earth Science",
      subject: "Science",
      playerCount: "12/20"
    });
    output.push({
      host: "rhizomaticdreamer",
      deckName: "History of Materialism",
      subject: "Philosophy",
      playerCount: "08/10"
    });
    return output;
  }

  return (
    <>
      <NavBar/>
      <div id="private_game_join">
        <h2>Enter private game code</h2>
        <form>
          <input 
            type="text" 
            id="textBox" 
            value={gameCode} 
            onChange={handleInputChange} 
            maxLength="6" 
            placeholder="######"/>
          <button onClick={attemptJoinGame()}>Join game</button>
        </form>
      </div>
      <hr></hr>
      <div id="public_games_list">
        <h2>Browse public games</h2>
        <table>
          <tr>
            <th>Host</th>
            <th>Deck</th>
            <th>Subject</th>
            <th>Player Count</th>
            <th></th>
          </tr>
        {getPublicGames().map((item, index) => (
          <tr key={index}>
            <td title={item.host}>{item.host}</td>
            <td title={item.deckName}>{item.deckName}</td>
            <td title={item.subject}>{item.subject}</td>
            <td title={item.playerCount}>{item.playerCount}</td>
            <td><button>Join</button></td>
          </tr>
        ))}
        </table>
      </div>
    </>
  )
}
