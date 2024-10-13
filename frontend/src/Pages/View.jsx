import {React,useState} from 'react'
import NavBar from '../Layout/NavBar'
import CardWheel from '../Components/CardWheel'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function View({username}) {

	const location = useLocation()
	const deckFromNavigate = location.state?.deck || []

	const [deck, setDeck] = useState(deckFromNavigate)


  return (
	<div className=' d-flex flex-column vh-100 vw-100 align-items-center'>
		<div className='d-flex flex-row  justify-content-center'>
			<NavBar
				username={username}
			/>
			<div className='pt-5 mt-3 d-flex flex-column align-items-center'>
				<CardWheel deck={deck}/>
			</div>
		</div>
		<div className='d-flex flex-row'>
			<Button variant='warning' className='mx-3' href='/game'>Join Game</Button>
			<Button variant='info' href='/host'>Host a Game</Button>
		</div>
		<div className='mt-3'>
			<Button  variant='success' href='/test'>Private Test</Button>
		</div>
	</div>
  )
}
