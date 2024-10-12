import React from 'react'
import NavBar from './Layout/NavBar'
<<<<<<< Updated upstream

=======
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Signup from './Pages/Signup'
>>>>>>> Stashed changes

function App() {

  return (
   <div className='d-flex  justify-content-center'>
    <NavBar/>
<<<<<<< Updated upstream
    <h1>QUIZOOT</h1>
   </>
=======
    <Router>
      <Routes>
        <Route exact path = '/Signup' element= {<Signup/>}/>
        <Route exact path = '/' element= {<Home/>}/>
        <Route exact path = '/Game' element= {<Game/>}/>
      </Routes>
    </Router>
   </div>
>>>>>>> Stashed changes
  )
}



export default App
