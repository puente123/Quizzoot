import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'

export default function Game() {
  const [gameCode, setGameCode] = useState("");
  const [publicGameOffset, setPublicGameOffset] = useState(0);
  const [listLength, setListLength] = useState(getPublicGames().length);
  const [pageNumber, setPageNumber] = useState(1);

  const pageLength = 10;

  const handleInputChange = (event) => {
    setGameCode(event.target.value);
  };

  function changePublicGameOffset(change) {
    let newOffset = publicGameOffset + pageLength * change;
    if(newOffset < 0 || newOffset >= listLength)
      return;
    setPublicGameOffset(newOffset);
    if(pageLength > 0)
      setPageNumber(pageNumber+change);
    else if(pageLength < 0)
      setPageNumber(pageNumber-change);
  }

  // PLACEHOLDER
  function attemptJoinGame() {
    if(gameCode.length !== 6)
      return;
    console.log();
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
    for(let i = 0; i < 30; i++) {
      output.push({
        host: "rhizomaticdreamer",
        deckName: "History of Materialism",
        subject: "Philosophy",
        playerCount: i + "/50"
      });
    }
    return output;
  }

  return (
    <>
      <NavBar/>
      <div id="private_game_join">
        <h2>Enter private game code</h2>
        <input 
          type="text" 
          pattern="[a-zA-Z0-9]*" 
          id="textBox" 
          value={gameCode} 
          onChange={handleInputChange} 
          maxLength="6" 
          placeholder="######"/>
        <button onClick={() => attemptJoinGame()}>Join game</button>
      </div>
      <hr></hr>
      <div id="public_games_list">
        <h2>Browse public games</h2>
        <table>
          <thead>
            <tr>
              <th>Host</th>
              <th>Deck</th>
              <th>Subject</th>
              <th>Player Count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getPublicGames().slice(publicGameOffset, publicGameOffset+pageLength).map((item, index) => (
              <tr key={index}>
                <td title={item.host}>{item.host}</td>
                <td title={item.deckName}>{item.deckName}</td>
                <td title={item.subject}>{item.subject}</td>
                <td title={item.playerCount}>{item.playerCount}</td>
                <td><button>Join</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td><button onClick={() => changePublicGameOffset(-1)}>{"< Back"}</button></td>
              <td><p>{pageNumber}</p></td>
              <td><button onClick={() => changePublicGameOffset(1)}>{"Next >"}</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
