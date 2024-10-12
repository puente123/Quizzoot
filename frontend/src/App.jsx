import Signup from './Pages/Signup'
import React from 'react'
import NavBar from './Layout/NavBar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Game from "./Pages/Game"


function App() {

  return (
   <div className='d-flex justify-content-center bg-dark  vh-100 vw-100'>
    <Router>
      <Routes>
        <Route exact path= '/' element = {<Login/>}/>
        <Route exact path = '/signup' element= {<Signup/>}/>
        <Route exact path = '/home' element= {<Home/>}/>
        <Route exact path = '/game' element= {<Game/>}/>
      </Routes>
    </Router>
   </div>
  )
}


export default App
