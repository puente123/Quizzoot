import {React,useState} from 'react'
import NavBar from '../Layout/NavBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Form,InputGroup,Container,Row,Col } from 'react-bootstrap'
import MiniDeck from '../Components/MiniDeck'

export default function ProfileView({username}) {

	const [searchText,setSearchText] = useState('')

	const [deckList, setDeckList] = useState([
		[
			{
				"id": 1,
				"name": "CSE3310",
				"subject": "Intro To Software",
				"private": 0,
				"flashcards": [
					{ "id": 4, "question": "binary", "base 2 (1s and 0s)": "i1" },
					{ "id": 5, "question": "What does \"IDE\" stand for?", "answer": "Integrated Development Environment" },
					{ "id": 6, "question": "kernel", "the OS communication layer between the UI and the bare metal": "i3" }
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
					{ "id": 10, "question": "vector", "answer": "sets of numbers" },
					{ "id": 11, "question": "magnitude", "answer": "the length of a vector" },
					{ "id": 12, "question": "matrix", "answer": "grid of number with more than 1 dimension" }
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
					{ "id": 15, "question": "energy", "answer": "e=mc^2" }
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
					{ "id": 18, "question": "new deal", "answer": "1933-1936" }
				]
			},
			{
				"id": 8,
				"name": "BIO1406",
				"subject": "General Biology",
				"private": 1,
				"flashcards": [
					{ "id": 19, "question": "cell", "answer": "basic unit of life" },
					{ "id": 20, "question": "photosynthesis", "answer": "conversion of sunlight into energy" },
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
					{ "id": 24, "question": "pH", "answer": "measure of acidity" }
				]
			},
			{
				"id": 10,
				"name": "ENGL1301",
				"subject": "Composition I",
				"private": 0,
				"flashcards": [
					{ "id": 25, "question": "thesis", "answer": "main argument" },
					{ "id": 26, "question": "citation", "answer": "reference to a source" },
					{ "id": 27, "question": "essay", "answer": "structured writing" }
				]
			},
			{
				"id": 11,
				"name": "CSE1320",
				"subject": "Intermediate Programming",
				"private": 1,
				"flashcards": [
					{ "id": 28, "question": "array", "answer": "list of elements" },
					{ "id": 29, "question": "loop", "answer": "repeats block of code based on condition" },
					{ "id": 30, "question": "function", "answer": "block of reusable code with inputs and outputs" }
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
	<div className='vh-100 vw-100 d-flex flex-column'>
		<NavBar/>
		<div className='d-flex flex-row justify-content-center align-items-center mt-5 pt-2'>
			<div
				className='d-flex flex-row justify-content-center position-relative top-0 mt-2 '
				style={{
					width: '75rem',
					height: '33rem',
					border: '4px solid'
				}}
			>

				<div
					className='position-absolute d-flex flex-row justify-content-center align-items-center '
					style={{
						width: '25rem',
						height:'5em',
						border: '2px solid'
					}}
				>
					<AccountCircleIcon 
                      className='fs-5 text-white'
                    />
					<h1 className='text-white'>{username}</h1>
				</div>
				
				<div className='position-absolute mt-5 py-5 d-flex justify-content-center align-items-center w-50'>
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


				<div
					className='position-absolute bottom-0 mt-4'
					style={{
						height:'75%',
						width: '100%',
						border: '2px solid'
					}}
				>
					
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
			</div>
		</div>
	</div>
  )
}
