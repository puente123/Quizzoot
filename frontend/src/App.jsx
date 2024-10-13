import Signup from './Pages/Signup'
import {React,useState} from 'react'
import NavBar from './Layout/NavBar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Login from './Pages/Login'
import HostGame from './Pages/HostGame'
import PrivateTest from './Pages/PrivateTest'


function App() {
  const [username,setUsername] = useState('')
  return (
   <div className='d-flex justify-content-center bg-dark  vh-100 vw-100'>
    <Router>
      <Routes>
        <Route exact path = '/' element= {<Signup setUsername={setUsername}/>}/>
        <Route exact path= '/login' element = {<Login   setUsername={setUsername}/>}/>
        <Route exact path = '/home' element= {<Home username={username}/>}/>
        <Route exact path = '/game' element= {<Game username = {username}/>}/>
        <Route exact path = '/host' element= {<HostGame username = {username}/>}/>
        <Route exact path = '/test' element= {<PrivateTest username = {username}/>}/>
        
      </Routes>
    </Router>
   </div>
  )
}


export default App
