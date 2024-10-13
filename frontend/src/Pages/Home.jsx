import {React,useState} from 'react'
import NavBar from '../Layout/NavBar'
import MiniDeck from '../Components/MiniDeck'
import { Container,Row,Col } from 'react-bootstrap'



export default function Home({username}) {
	const [deckList, setDeckList] = useState([
		[
			{
				"id": 1,
				"name": "CSE3310",
				"subject": "Intro To Software",
				"private": 0,
				"flashcards": [
					{
						"id": 4,
						"question": "intro1",
						"answer": "i1"
					},
					{
						"id": 5,
						"question": "intro2",
						"answer": "i2"
					},
					{
						"id": 6,
						"question": "intro3",
						"answer": "i3"
					}
				]
			},
			{
				"id": 4,
				"name": "coms2302",
				"subject": "communicatiosn",
				"private": 1,
				"flashcards": [
					{
						"id": 7,
						"question": "coms1",
						"answer": "c1"
					},
					{
						"id": 8,
						"question": "coms2",
						"answer": "c2"
					},
					{
						"id": 9,
						"question": "coms3",
						"answer": "c3"
					}
				]
			},
			{
				"id": 5,
				"name": "math3330",
				"subject": "linear algebra",
				"private": 1,
				"flashcards": [
					{
						"id": 10,
						"question": "algebra1",
						"answer": "al1"
					},
					{
						"id": 11,
						"question": "algebra2",
						"answer": "al2"
					},
					{
						"id": 12,
						"question": "algebra3",
						"answer": "al3"
					}
				]
			}
		]
	])

  return (
	<div className=' d-flex flex-column vh-100 vw-100 '>
		<div className='d-flex flex-row align-items-center justify-content-center '>
			<NavBar
				username={username}
			/>
			<div className='d-flex flex-row pt-5 mt-3 mx-5 pb-3 align-items-center justify-content-center'>
				<h2 className='text-white '> Home Page</h2>
			</div>
		</div>
		<Container className='d-grid'>
			{deckList.map((subDecks,rowindex)=>(
				Array.from({ length: Math.ceil(subDecks.length / 5) }, (_, rowIndex) => (
					<Row className='mb-3' key={`row-${rowIndex}`}>
						{subDecks.slice(rowIndex * 5, rowIndex * 5 + 5).map((deck, index) => (
							<Col key={`deck-${rowIndex}-${index}`}>
								<MiniDeck deck={deck} />
							</Col>
						))}
					</Row>
				)
			)))}
		</Container>	
	</div>
  )
}
