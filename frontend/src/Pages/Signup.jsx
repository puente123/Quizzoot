import React from 'react'
import { Container } from 'react-bootstrap'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'

export default function Signup() {
  return (
	<Container className='justify-content-md-center'>
		<Row className='justify-content-md-center'>
			<Form.Floating className="mb-3"	>
				<Form.Control
				id="floatingInputCustom"
				type="email"
				placeholder="name@example.com"
				/>
				<label htmlFor="floatingInputCustom">Email address</label>
			</Form.Floating>
			<Form.Floating>
				<Form.Control
				id="floatingPasswordCustom"
				type="password"
				placeholder="Password"
				/>
				<label htmlFor="floatingPasswordCustom" >Password</label>
			</Form.Floating>
		</Row>
	</Container>
  )
}
