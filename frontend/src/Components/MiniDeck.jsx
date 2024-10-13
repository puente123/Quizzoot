import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function MiniDeck({deck}) {
	const navigate = useNavigate()
	const handleClick = () =>{
		navigate('/view', {state:{deck:deck.flashcards}})
	}
  return (
	<div onClick={handleClick}>
		<Card
			className=' align-items-center justify-content-center fw-bolder'
			style={{
				width: '200px',
				height: '150px',
			}}
		>
			<Card.Body 
				className='
					d-flex flex-column 
					align-items-center 
					justify-content-center'
			>
					<h3>{deck.name}</h3>
					<h6>Subject</h6>
			</Card.Body>

		</Card>
	</div>
  )
}
