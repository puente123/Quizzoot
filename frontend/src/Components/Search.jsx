import React from 'react'
import { FloatingLabel,Form } from 'react-bootstrap'
export default function Search(handleSearchDecks) {
	
	const handleSearchChange = (event) =>{
        event.preventDefault()
		handleSearchDecks(event.target.value.toLowerCase())
	}
	
	return (
	<div>
		
		<Form
		>
			<Form.Control 
				type="search" 
				placeholder="type to search..." 
				onChange={handleSearchChange}
				onSubmit={handleSearchChange}
			/>
		</Form>

	</div>
  )
}
