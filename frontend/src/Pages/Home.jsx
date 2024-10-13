import React from 'react'
import NavBar from '../Layout/NavBar'
import FlashCard from '../Components/FlashCard'



export default function Home({username}) {

  return (
	<div className='d-flex flex-row vh-100 vw-100 justify-content-center'>
		<NavBar
			username={username}
		/>
		<div className='pt-5 mt-3 d-flex flex-column align-items-center'>
			<h2 className='text-white '> Home Page</h2>
			<FlashCard/>
		</div>
	</div>
  )
}
