import React from 'react'
import { Card } from 'react-bootstrap'
import NavBar from '../Layout/NavBar'

export default function Home() {
  return (
	<div>
		<NavBar/>
		<div className='pb-5'>
			<h2 className='text-white'> Home Page</h2>
			<Card className='w-4'>

			</Card>	
		</div>
	</div>
  )
}
