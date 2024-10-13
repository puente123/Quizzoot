import {React,useState} from 'react'
import NavBar from '../Layout/NavBar'
import CardWheel from '../Components/CardWheel'
import { Button } from 'react-bootstrap'



export default function Home({username}) {
	const [deck, setDeck] = useState([
		{
		  id: 1,
		  front: "What is the capital of France?",
		  back: ["Paris", "The capital city of France", "Known for the Eiffel Tower"]
		},
		{
		  id: 2,
		  front: "What is 2 + 2?",
		  back: ["4", "Two plus two", "The answer to the simplest addition problem"]
		},
		{
		  id: 3,
		  front: "What is the largest planet in our solar system?",
		  back: ["Jupiter", "The largest planet", "Fifth from the Sun"]
		}
	])



  return (
	<div className=' d-flex flex-column vh-100 vw-100 align-items-center'>
		<div className='d-flex flex-row  justify-content-center'>
			<NavBar
				username={username}
			/>
			<div className='pt-5 mt-3 d-flex flex-column align-items-center'>
				<h2 className='text-white '> Home Page</h2>
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
