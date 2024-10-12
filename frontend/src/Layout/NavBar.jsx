import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
	const user = "user"
  return (
	<Navbar className= "bg-body-tertiary">
		<Container>
			<Navbar.Brand href="#home">QUIZOOT</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					{user}
				</Navbar.Text>
			</Navbar.Collapse>
		</Container>
	</Navbar>
  )
}
