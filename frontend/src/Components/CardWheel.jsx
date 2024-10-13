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
				{deck.map((card,index) =>(
					<Carousel.Item className='px-5 mx-5'>
						<FlashCard front={card.front} back = {card.back}/>
					</Carousel.Item>
				))}
			</Carousel>

		</div>
	)
  }
