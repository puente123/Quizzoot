import {React,useState, useEffect} from 'react'
import NavBar from '../Layout/NavBar'
import MiniDeck from '../Components/MiniDeck'
import { Container,Row,Col,InputGroup,Form } from 'react-bootstrap'
import { getUserCardDecks } from '../Services/deckOfCardsService'


export default function Home({username, userId}) {

	const [searchText,setSearchText] = useState('')

	const [deckList, setDeckList] = useState([])

	const fetchDecks = async () => {
		const response = await getUserCardDecks(userId)
		console.log(response)
		setDeckList(response)
	}
		
	useEffect(()=>{
		fetchDecks()
	}, [])


	const filteredDecks = deckList.flat().filter(deck => 
		deck.name.toLowerCase().includes(searchText) ||
		deck.subject.toLowerCase().includes(searchText)
	)



	
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
