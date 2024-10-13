import Signup from './Pages/Signup'
import {React,useEffect,useState} from 'react'
import NavBar from './Layout/NavBar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { auth } from '../firebase'
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Login from './Pages/Login'
import HostGame from './Pages/HostGame'
import PrivateTest from './Pages/PrivateTest'
import View from './Pages/View'
import ProfileView from './Pages/ProfileView'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'


function App() {
  const [username,setUsername] = useState('')
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return () => unsubscribe();
  });

  return (
   <div className='d-flex justify-content-center bg-dark  vh-100 vw-100'>
    <Router>
      <Routes>
        <Route exact path = '/' element= {<Signup setUsername={setUsername}/>}/>
        <Route exact path = '/signup' element= {<Signup setUsername={setUsername}/>}/>
        <Route exact path= '/login' element = {<Login   setUsername={setUsername}/>}/>
        <Route exact path = '/view' element= {<View username={username} user={user}/>}/>
        <Route exact path = '/home' element = {<Home username={username} user={user}/>}/>
        <Route exact path = '/game' element= {<Game username={username} user={user}/>}/>
        <Route exact path = '/host' element= {<HostGame username={username} user={user}/>}/>
        <Route exact path = '/test' element= {<PrivateTest username={username} user={user}/>}/>
      </Routes>
    </Router>
   </div>
  )
}


export default App
