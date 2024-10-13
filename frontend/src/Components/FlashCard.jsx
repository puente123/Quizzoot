import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

export default function FlashCard() {
	const [isFront,setIsFront] = useState(true)
	const [isUndo,setIsUndo] = useState(true)
	const front = "Flash card front"
	const back =  "Flash card back"
	const handleClick = () =>{
		setTimeout(() => {
			setIsFront(!isFront)
			setIsUndo(!isUndo)
		}, 200);//500 milisecond delay
	}
	const IconComponent = isUndo? UndoIcon : RedoIcon

  return (
	<div>
		<Card 
				className=' align-items-center justify-content-center fw-bolder' 
				style={{
					width: '400px',
					height: '200px'
				}}
				onClick={handleClick}
			>
				<Card.Body className='d-flex align-items-center justify-content-center'>
					{isFront?front:back}
				</Card.Body>

				< IconComponent
					style={{
						position: 'absolute',
						top: '10px',
						right: '10px',
						cursor: 'pointer',
						color: 'black'
					}}
				/>
				
			</Card>
			

			
	</div>
  )
}
