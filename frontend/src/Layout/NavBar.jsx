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
              {username ? (
                  <>Signed in as: <a href="#login">{username}</a></>
                ) : (
                  <a href="#login">Click to sign in</a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  )
}
