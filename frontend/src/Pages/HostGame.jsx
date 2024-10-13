import React from 'react'
import NavBar from '../Layout/NavBar'


export default function HostGame({username}) {
  return (
	<div>
		<NavBar username={username}/>
		<div className="d-flex justify-content-center flex-column vh-100 vw-100 align-items-center">
			<h2 className="text-white fs-1">Multiplayer quizzes coming soon!</h2>
		</div>
	</div>
  )
}
