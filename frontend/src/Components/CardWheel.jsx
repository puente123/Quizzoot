import React from 'react'
import FlashCard from './FlashCard'
import { Carousel } from 'react-bootstrap'


export default function CardWheel({ deck }) {
	return (
		<div 
			style={{
				width: "800px",
				border: "4px",
				height: "300px"
			}}
			className='d-flex flex-column align-items-center justify-content-center'
		>
			<Carousel slide={false} 
				style={{width: '600px'}}
				className=''
			>
				{deck.map((card) =>(
					<Carousel.Item key={card.id} className='px-5 mx-5'>
						<FlashCard question={card.question} answer = {card.answer}/>
					</Carousel.Item>
				))}
			</Carousel>

		</div>
	)
  }
