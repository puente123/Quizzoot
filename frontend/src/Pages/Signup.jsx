import React, { useState } from 'react'
import { FloatingLabel,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Signup({setUsername}) {

	const [formData, setFormData] = useState({
		username:'',
		email:'',
		password:''
	})

	const navigate = useNavigate()

	const handleChange = (event) =>{
		const {name,value} = event.target
		setFormData({
			...formData,
			[name]: value
		})
	}


	const handleSubmit = (event) =>{
		event.preventDefault()
		const{username,email,password} = formData
		console.log(username)
		console.log(email)
		console.log(password)
		// Backend Post and Get requests here
		
		setUsername(username) // pass the username to the rest of the program
		navigate('/home')
	}

	return (
		<div className='d-flex flex-column align-items-center'>
			<h1 className='text-white pb-5'>SIGNUP</h1>
			<div className=''>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<FloatingLabel
							controlId="floatingUsername" 
							label="Username"
							className='mb-3'
						>
							<Form.Control 
								type="username" 
								name="username"
								placeholder="Username" 
								value={formData.username}
								onChange={handleChange}
								/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3"
						>
							<Form.Control 
								type="email" 
								name="email"
								placeholder="name@example.com" 
								value={formData.email}
								onChange={handleChange}
								/>
						</FloatingLabel>
						<FloatingLabel controlId="floatingPassword" label="Password">
							<Form.Control 
								type="password" 
								name="password"
								placeholder="Password" 
								value={formData.password}
								onChange={handleChange}
								/>
						</FloatingLabel>
						<div className='d-flex flex-row '>
							<Button type="submit" className= "mt-3 mx-2 px-4 ">Submit</Button>
							<Button variant='success' className='mt-3 mx-2 ' href='/login'>I have An account</Button>
						</div>
					</Form.Group>
				</Form>
			</div>
		</div>
  )
}

export default Signup