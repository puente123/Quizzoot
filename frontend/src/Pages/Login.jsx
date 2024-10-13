import React, { useState } from 'react'
import { FloatingLabel,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function Login({setUsername}) {

	const [formData, setFormData] = useState({
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
		const{email,password} = formData
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
		// Backend Post and Get requests here
		
		setUsername(email) // pass the username to the rest of the program
		navigate('/home')
	}

	return (
		<div className='d-flex flex-column align-items-center'>
			<h1 className='text-white pb-3'>LOGIN</h1>
			<div className=''>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
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
							<Button type="submit" className= "mt-3 mx-3 px-5 ">Submit</Button>
						</div>
					</Form.Group>
				</Form>
			</div>
		</div>
  )
}

export default Login