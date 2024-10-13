import {React,useState} from 'react'
import NavBar from '../Layout/NavBar'
import MiniDeck from '../Components/MiniDeck'
import { Container,Row,Col,InputGroup,Form } from 'react-bootstrap'



export default function Home({username}) {
	const [searchText,setSearchText] = useState('')
	const [deckList, setDeckList] = useState([
		[
			{
				"id": 1,
				"name": "CSE3310",
				"subject": "Intro To Software",
				"private": 0,
				"flashcards": [
					{ "id": 4, "question": "intro1", "answer": "i1" },
					{ "id": 5, "question": "intro2", "answer": "i2" },
					{ "id": 6, "question": "intro3", "answer": "i3" }
				]
			},
			{
				"id": 4,
				"name": "COMS2302",
				"subject": "Communications",
				"private": 1,
				"flashcards": [
					{ "id": 7, "question": "coms1", "answer": "c1" },
					{ "id": 8, "question": "coms2", "answer": "c2" },
					{ "id": 9, "question": "coms3", "answer": "c3" }
				]
			},
			{
				"id": 5,
				"name": "MATH3330",
				"subject": "Linear Algebra",
				"private": 1,
				"flashcards": [
					{ "id": 10, "question": "algebra1", "answer": "al1" },
					{ "id": 11, "question": "algebra2", "answer": "al2" },
					{ "id": 12, "question": "algebra3", "answer": "al3" }
				]
			},
			{
				"id": 6,
				"name": "PHYS1443",
				"subject": "Physics I",
				"private": 0,
				"flashcards": [
					{ "id": 13, "question": "force", "answer": "f=ma" },
					{ "id": 14, "question": "gravity", "answer": "9.8 m/s^2" },
					{ "id": 15, "question": "motion", "answer": "kinematics" }
				]
			},
			{
				"id": 7,
				"name": "HIST1301",
				"subject": "US History",
				"private": 0,
				"flashcards": [
					{ "id": 16, "question": "independence", "answer": "1776" },
					{ "id": 17, "question": "civil war", "answer": "1861-1865" },
					{ "id": 18, "question": "new deal", "answer": "FDR" }
				]
			},
			{
				"id": 8,
				"name": "BIO1406",
				"subject": "General Biology",
				"private": 1,
				"flashcards": [
					{ "id": 19, "question": "cell", "answer": "basic unit of life" },
					{ "id": 20, "question": "photosynthesis", "answer": "plants make food" },
					{ "id": 21, "question": "DNA", "answer": "genetic material" }
				]
			},
			{
				"id": 9,
				"name": "CHEM1311",
				"subject": "General Chemistry",
				"private": 0,
				"flashcards": [
					{ "id": 22, "question": "atom", "answer": "basic unit of matter" },
					{ "id": 23, "question": "bonding", "answer": "ionic & covalent" },
					{ "id": 24, "question": "pH", "answer": "acidity measure" }
				]
			},
			{
				"id": 10,
				"name": "ENGL1301",
				"subject": "Composition I",
				"private": 0,
				"flashcards": [
					{ "id": 25, "question": "thesis", "answer": "main argument" },
					{ "id": 26, "question": "citation", "answer": "giving credit" },
					{ "id": 27, "question": "essay", "answer": "structured writing" }
				]
			},
			{
				"id": 11,
				"name": "CSE1320",
				"subject": "Intermediate Programming",
				"private": 1,
				"flashcards": [
					{ "id": 28, "question": "array", "answer": "data structure" },
					{ "id": 29, "question": "loop", "answer": "iteration" },
					{ "id": 30, "question": "function", "answer": "reusable code" }
				]
			},
			{
				"id": 12,
				"name": "ART1301",
				"subject": "Art Appreciation",
				"private": 0,
				"flashcards": [
					{ "id": 31, "question": "Renaissance", "answer": "15th century art" },
					{ "id": 32, "question": "Impressionism", "answer": "19th century" },
					{ "id": 33, "question": "Cubism", "answer": "Pablo Picasso" }
				]
			}
		]		
	])


	const filteredDecks = deckList.flat().filter(deck => 
		deck.name.toLowerCase().includes(searchText) ||
		deck.subject.toLowerCase().includes(searchText)
	)



	
  return (
	<div className=' d-flex justify-content-center flex-column vh-100 vw-100 '>
		<div className='d-flex flex-row align-items-center justify-content-center '>
			<NavBar username={username} />
			<div className='d-flex flex-row pt-5 mt-3 mx-5 pb-3 align-items-center justify-content-center'>
				<h2 className='text-white fs-1'>Flashcard Decks</h2>
			</div>
			
		</div>
		<div className='position-relative top-0 start-50 mt-3  translate-middle d-flex justify-content-center align-items-center w-50'>
			<InputGroup size="sm" className=" d-flex  mx-5  align-items-center justify-content-center mb-3 ">
				<InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
				<Form.Control
				aria-label="search"
				aria-describedby="inputGroup-sizing-sm"
				placeholder='type to search ...'
				onChange={(e) => setSearchText(e.target.value.toLowerCase())}
				/>
			</InputGroup>
		</div>
		<Container className='d-grid'>
		{Array.from({ length: Math.ceil(filteredDecks.length / 5) }, (_, rowIndex) => (
                    <Row className='mb-3' key={`row-${rowIndex}`}>
                        {filteredDecks.slice(rowIndex * 5, rowIndex * 5 + 5).map((deck, index) => (
                            <Col key={`deck-${rowIndex}-${index}`}>
                                <MiniDeck deck={deck} />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>	
	</div>
  )
}
