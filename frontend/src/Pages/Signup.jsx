import React from 'react'
import { FloatingLabel,Form } from 'react-bootstrap'


export default function Signup() {
  return (
	<div className='d-flex flex-column align-items-center'>
		<h1 className='text-white pb-5'>SIGNUP</h1>
		<div className=''>
			<FloatingLabel
				controlId="floatingUsername" 
				label="Username"
				className='mb-3'
			
			>
				<Form.Control type="username" placeholder="Username" />
			</FloatingLabel>
			<FloatingLabel
				controlId="floatingInput"
				label="Email address"
				className="mb-3"
			>
				<Form.Control type="email" placeholder="name@example.com" />
			</FloatingLabel>
			<FloatingLabel controlId="floatingPassword" label="Password">
				<Form.Control type="password" placeholder="Password" />
			</FloatingLabel>
		</div>
	</div>
  )
}
