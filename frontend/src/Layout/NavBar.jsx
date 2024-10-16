import React, { useState } from 'react'
import { Container, Navbar,Nav, Offcanvas, ListGroup, ListGroupItem} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate,useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function NavBar({ username }) {
  const [show,setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const navigate = useNavigate()
  const location = useLocation()
  const handleClick = (event) =>{
    event.preventDefault()
    signOut(auth)
      .then(() => console.log("Sign out"))
      .catch((error) => console.log(error));
    navigate("/login");
  }
	const handleHome = () =>{
		navigate('/home')
	}


  return (
    <Nav>
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container className='align-items-center justify-content-space-between'>
          <Navbar.Brand style={{"cursor": "pointer"}} onClick={handleHome} className='text-dark'>QUIZZOOT</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {location.pathname != '/profile' && 
                  username ? (
                    <>
                      <AccountCircleIcon 
                        className='fs-3'
                        onClick= {handleShow}
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                      <Offcanvas placement='end' show={show} onHide={handleClose} backdrop='static'>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Hi {username}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <ListGroup variant='flush'>
                            <ListGroupItem
                              onClick={handleClick}
                              style={{
                                cursor: 'pointer'
                              }}
                            >
                              Sign Out
                            </ListGroupItem>
                          </ListGroup>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </>
                  ) : (
                    <a href="/login">Click to sign in</a>
                )

              }
                
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Nav>
    
  )
}
