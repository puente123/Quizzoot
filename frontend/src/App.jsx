import React from 'react'
import NavBar from './Layout/NavBar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Game from "./Pages/Game"


function App() {

  return (
   <>
    <NavBar/>
    <Router>
      <Routes>
        <Route exact path = '/' element= {<Home/>}/>
        <Route exact path = '/game' element= {<Game/>}/>
      </Routes>
    </Router>
   </>
  )
}


import 'bootstrap/dist/css/bootstrap.min.css';
export default App
