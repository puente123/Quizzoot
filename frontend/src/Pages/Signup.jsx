import React, { useState } from 'react'
import { FloatingLabel,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../Services/userService'



function Signup({setUsername, setUserId}) {

	const [formData, setFormData] = useState({
		userName:'',
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


	const handleSubmit = async (event) =>{
		event.preventDefault()
		const{userName,email,password} = formData
		console.log(userName)
		console.log(email)
		console.log(password)
		// Backend Post and Get requests here
		
		setUsername(userName)
		const {id} = await postUser(formData)
		console.log("userid", id)
		setUserId(id)
		// pass the username to the rest of the program
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
								type="userName" 
								name="userName"
								placeholder="Username" 
								value={formData.userName}
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