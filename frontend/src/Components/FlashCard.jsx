import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const FlashCard = ({front, back}) => {
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
					height: '250px'
				}}
				onClick={handleClick}
			>
				<Card.Body className='d-flex align-items-center justify-content-center'>
					{isFront ? (
							front // Display front text
						) : (
							<ListGroup variant='flush' as="ul"> {/* Use an unordered list for bullet points */}
								{back.map((answer, index) => (
									<ListGroupItem
										as='li'
										key={index} 
										className='text-center'
										bsPrefix='list-group-item'
									>
										{answer}
									</ListGroupItem> // Render each answer as a list item
								))}
							</ListGroup>
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