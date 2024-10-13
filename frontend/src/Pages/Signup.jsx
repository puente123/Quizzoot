import React, { useEffect, useState } from 'react'
import { FloatingLabel,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function Signup({setUsername}) {

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


	const handleSubmit = (event) =>{
		event.preventDefault();
		const{username,email,password} = formData;
		if(username=="" || email=="" || password=="")
			return;
		createUserWithEmailAndPassword(auth, email, password)
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
		
		setUsername(userName)
		// pass the username to the rest of the program
		navigate('/home')
	}

	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<h1 className='text-white pb-3'>SIGNUP</h1>
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
						<div className='d-flex flex-row pt-3'>
							<Button variant='success' type="submit" className= "mt-3 mx-2 px-4 ">Create Account</Button>
							<Button variant='secondary' className='mt-3 mx-2 ' href='/login'>I already have an account</Button>
						</div>
					</Form.Group>
				</Form>
			</div>
		</div>
  )
}

export default Signup