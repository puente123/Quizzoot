import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const FlashCard = ({question, answer}) => {
	const [isFront,setIsFront] = useState(true)
	const [isUndo,setIsUndo] = useState(true)
	const handleClick = () =>{
		setTimeout(() => {
			setIsFront(!isFront)
			setIsUndo(!isUndo)
		}, 200);//200 milisecond delay
	}
	const IconComponent = isUndo? UndoIcon : RedoIcon

  return (
	<div>
		<Card 
				className=' align-items-center justify-content-center fw-bolder' 
				style={{
					width: '400px',
					height: '250px',
					cursor: "pointer"
				}}
				onClick={handleClick}
			>
				<Card.Body className='d-flex align-items-center justify-content-center'>
					{isFront ? (
							question // Display front text
						) : (answer
						
					)}
				</Card.Body>

				< IconComponent
					style={{
						position: 'absolute',
						top: '10px',
						right: '10px',
						cursor: 'pointer',
						color: 'black'
					}}
					onClick={handleClick}
				/>
				
			</Card>
			

			
	</div>
  )
}

export default FlashCard