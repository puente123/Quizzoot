import React from 'react'
import { Container, Navbar} from 'react-bootstrap';



export default function NavBar({username}) {
  return (
    <>
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>QUIZZOO</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">ms{username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        <Container>
          
        </Container>
      </Navbar>
    </>
    
  )
}
