import {React,useEffect,useState} from 'react'
import NavBar from '../Layout/NavBar'
import CardWheel from '../Components/CardWheel'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function View({username, user}) {

	const location = useLocation()
	const deckFromNavigate = location.state?.deck || []

	const [deck, setDeck] = useState(deckFromNavigate)

	const navigate = useNavigate()
	const handleTest = () => {
		navigate('/test', {state:{deck:deck}})
	}

  return (
	<div className=' d-flex justify-content-center flex-column vh-100 vw-100 align-items-center'>
		<div className='d-flex flex-row  justify-content-center'>
			<NavBar username={username} />
			<div className='pt-5 mt-3 d-flex flex-column align-items-center'>
				<CardWheel deck={deck}/>
			</div>
		</div>
		<div className='mb-3 mt-3'>
			<Button  variant='success' onClick={handleTest}>Private Test</Button>
		</div>
		<div className='d-flex flex-row'>
			<Button variant='warning' className='mx-3' href='/game'>Join Game</Button>
			<Button variant='info' href='/host'>Host a Game</Button>
		</div>
	</div>
  )
}
